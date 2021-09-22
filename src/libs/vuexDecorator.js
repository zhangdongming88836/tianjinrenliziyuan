/**
 * Created by binwang on 17/8/23.
 * 用于将 简化版 vuex 转换成 标准 vuex
 */
import _ from 'lodash'
import ajaxUtil from '@/libs/ajaxUtil'
// import extension from '@/actions/extension.js'
export default (scope, vuex) => {
  'use strict'

  //扩展 action
  // if (!!extension[scope]) {
  //   if (!!extension[scope].actions) {
  //     vuex.actions = { ...vuex.actions, ...extension[scope].actions }
  //   }
  //   if (!!extension[scope].state) {
  //     vuex.state = { ...vuex.state, ...extension[scope].state }
  //   }
  //   if (!!extension[scope].mutations) {
  //     vuex.mutations = { ...vuex.mutations, ...extension[scope].mutations }
  //   }
  //   if (!!extension[scope].getters) {
  //     vuex.getters = { ...vuex.getters, ...extension[scope].getters }
  //   }
  // }

  let state = { ...vuex.state }
  let actions = {}
  let mutations = {}
  _.forEach(_.keys(vuex.actions), key => {
    state[key] = {
      type: key,
      loading: false,
      error: null,
      request: null,
      data: {},
    }
    mutations[`set_${scope}_${key}`] = (state, data) => {
      if (!state[key]) state[key] = data
      else state[key] = { ...state[key], ...data }
    }

    const action = vuex.actions[key]
    actions[`${scope}_${key}`] = async ({ commit, state }, payload) => {
      if (!action.url) {
        commit(`set_${scope}_${key}`, { data: payload })
      } else {
        commit(`set_${scope}_${key}`, { loading: true })

        let resp = {}
        try {
          resp = await ajaxUtil.myRequest(action, payload)
        } catch (e) {
          resp = e
        }
        let handleResult = null

        if (!resp) {
          handleResult = {
            loading: false,
            error: '系统错误',
            data: null,
          }
        } else if (resp.status >= 400 && resp.status < 500) {
          if (resp.status === 401) {
            handleResult = {
              loading: false,
              error: '登录过期!',
              data: {
                code: 'AUTH_TOKEN_EXPIRED',
              },
            }
          } else {
            handleResult = {
              loading: false,
              error: '错误!',
              data: null,
            }
          }
        } else if (resp.status >= 500) {
          handleResult = {
            loading: false,
            error: resp.data ? resp.data.message : 'unknow error',
            data: resp.data,
          }
        } else if (resp.status >= 200 && resp.status < 300) {
          if (action.format) {
            handleResult = {
              loading: false,
              error: null,
              request: payload,
              data: action.format(resp.data),
            }
          } else {
            handleResult = {
              ...ajaxUtil.apiHandler(resp),
              request: payload,
              responseHeaders: resp.headers,
            }
          }
        }

        commit(`set_${scope}_${key}`, handleResult)
        return handleResult
      }
    }
  })
  return {
    state,
    actions,
    getters: { ...vuex.getters },
    mutations: { ...mutations, ...vuex.mutations },
  }
}
