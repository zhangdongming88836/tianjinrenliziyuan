import Vue from 'vue'
import Router from 'vue-router'
import Routers from './modules/router.js'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
  { path: '/newlogin', name: 'newlogin', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('error/404'), hidden: true },
  { path: '/401', component: _import('error/401'), hidden: true },
]

export const asyncRouterMap = [
  ...Routers,
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap.concat(asyncRouterMap)
})
