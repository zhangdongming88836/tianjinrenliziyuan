import {loginByUsername, logout, iamLogout, getPermissions} from '@/api/login'
import {getToken, setToken, removeToken, getUser} from '@/utils/auth'
import {localStore} from '@/utils/sessionStore'
import _ from 'lodash'
import Vue from 'vue'

const treeToArr = (tree, arr = []) => {
  arr = arr.concat(tree.map(d => d.code))
  tree.forEach(t => {
    if (t.children && t.children.length > 0) {
      arr = treeToArr(t.children, arr)
    }
  })
  return arr
}

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    redirectUrl: '',
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: [],
    },
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_USER: (state, user) => {
      // debugger
      state.user = user
      localStore.set('user', user === null ? null : user)
    },

    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
      localStore.set('roles', roles)
    },
  },

  actions: {
    setUser({commit}, userInfo) {
      commit('SET_USER', userInfo)
    },
    // 用户名登录
    LoginByUsername({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        if (!!userInfo.token) {
          commit('SET_TOKEN', userInfo.token)
          commit('SET_USER', userInfo)
          setToken(userInfo.token)
          resolve()
        } else {
          reject()
        }
      })
    },
    // 获取用户信息
    GetUserInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        let userId = null
        if (Vue.config.login_type !== 'iam') {
          userId = state.user.userId || getUser().userId
        }
        getPermissions(userId, state.token || getToken())
          .then(response => {
            commit('SET_NAME', 'system')
            commit('SET_AVATAR', '')
            commit('SET_INTRODUCTION', '')
            commit('SET_MENUS', _.uniq(treeToArr(response[0].data)))
            commit('SET_FUNCTIONS', response[1].data)

            if (localStore.get('user')) {
              commit('SET_USER', localStore.get('user'))
            } else {
              commit('SET_USER', response[2].data)
            }
            resolve(response)
          })
          .catch(error => {
            console.error(error)
            reject(error)
          })
      })
    },

    // 登出
    LogOut({commit, state}) {
      return new Promise(async (resolve, reject) => {
        if (Vue.config.login_type === 'normal') {
          await logout(state.token)
        } else if (Vue.config.login_type === 'iam') {
          await iamLogout()

        }
        user.actions.FedLogOut({commit})
        resolve()
      })
    },

    // 前端 登出
    FedLogOut({commit}) {
      return new Promise(async (resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_USER', null)
        commit('SET_PLATFORM', null)
        commit('SET_MENUS', [])
        commit('SET_FUNCTIONS', [])
        commit('SET_ROLES', [])
        removeToken()
        if (Vue.config.login_type === 'iam') {
          window.location.href = '/sso-login'
        } else if (Vue.config.login_type === 'normal') {
          window.location.href = '/'
        }
        resolve()
      })
    },

    // // 动态修改权限
    // ChangeRoles({commit}, role) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', role)
    //     setToken(role)
    //     getUserInfo(role).then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', data.roles)
    //       commit('SET_NAME', data.name)
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       resolve()
    //     })
    //   })
    // }
  },
}

export default user
