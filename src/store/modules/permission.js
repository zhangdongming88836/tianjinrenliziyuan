import { asyncRouterMap, constantRouterMap } from '@/router'
import _ from 'lodash'
import {localStore} from '@util/sessionStore'
import Vue from 'vue'
import $store from '../../store'

/**
 * @param roles
 * @param route
 */
function hasPermission(menus, route) {
  if (!Vue.config.permissionSwitch) return true
  // 在人员无任何权限的情况下，没有设置权限码的菜单应该予以显示，数据权限由后端控制
  // if (!menus || menus.length === 0) return false
  if (route.funccode) {
    return menus.some(menu => menu === route.funccode) || !!(route.forceRole && $localStore.getters.roles.some(role => role === route.forceRole))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routers
 * @param roles
 */
function filterAsyncRouter(routers, menus) {
  const accessedRouters = routers.filter(route => {
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, menus)
      return route.children && route.children.length
    } else {
      return hasPermission(menus, route)
    }
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    menus: localStore.get('menus'),
    functions: localStore.get('functions'),
    platform: localStore.get('platform'),
    needGetPermission: true,
  },
  getters: {
    permissions(state) {
      return { functions: state.functions, menus: state.menus }
    },
  },
  mutations: {
    SET_NEEDGETPERMISSION: (state, data) => {
      state.needGetPermission = data
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
      localStore.set('menus', menus)
    },
    SET_PLATFORM: (state, platform) => {
      state.platform = platform
      localStore.set('platform', platform)
    },
    SET_FUNCTIONS: (state, functions) => {
      state.functions = functions
      localStore.set('functions', functions)
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
  },
  actions: {
    setNeedGetPermission({ commit, state }, data) {
      commit('SET_NEEDGETPERMISSION', data)
    },
    GenerateRoutes({ commit, state }, data) {
      return new Promise(resolve => {
        let accessedRouters = filterAsyncRouter(_.cloneDeep(asyncRouterMap), state.menus)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
  },
}

export default permission
