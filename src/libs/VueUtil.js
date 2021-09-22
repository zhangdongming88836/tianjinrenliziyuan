/**
 * Created by binwang on 17/8/24.
 */
import _ from 'lodash'
import { mapActions, mapState, mapGetters } from 'vuex'
import * as Actions from '../actions'
import Vue from 'vue'
import { AjaxUtil } from '@lib'
import { removeToken, getToken } from '@/utils/auth'

function util(_context, defaultEntity) {
  'use strict'
  if (!arguments) throw new Error('缺少Vue上下文 this ')
  let $this = _context
  let entity = defaultEntity

  this.select = _entity => {
    entity = _entity
    return this
  }

  const pretreatment = (action, payload, handler, call) => {
    if (handler && _.isFunction(handler)) {
      payload = handler.call(this, payload)
    }
    let controller = ''
    let method = ''
    if (_.isString(action)) {
      controller = action.split('.')[0]
      method = action.split('.')[1]
    } else {
      controller = action.controller
      method = action.method
    }
    return call(controller, method, payload)
  }

  let tokenMiss = action => {
    return false
    // return !getToken() && action.controller !== 'IUserController' && action.method !== 'login'
  }

  // 操作 Action end
  // 通过 Vuex 访问后台, 数据将进入 store
  this.dispatchAsync = async (action, payload, handler) => {
    if (tokenMiss(action)) {
      return {}
    }
    return pretreatment(action, payload, handler, async (controller, method, finalPayload) => {
      if (_.isFunction($this[`${controller}_${method}`])) {
        this.cbData = await $this[`${controller}_${method}`].call(this, finalPayload)
        this.error(cbData)
        return this.cbData
      } else {
        console.log(`%c not find action [${controller}_${method}]! please verify action name!`, 'color:red')
        return null
      }
    })
  }

  this.dispatch = (action, payload, handler) => {
    if (tokenMiss(action)) {
      return {}
    }
    return pretreatment(action, payload, handler, (controller, method, finalPayload) => {
      if (_.isFunction($this[`${controller}_${method}`])) {
        $this[`${controller}_${method}`].call(this, finalPayload)
      } else {
        console.log(`%c not find action [${controller}_${method}]! please verify action name!`, 'color:red')
      }
      return this
    })
  }

  this.removeKey = action => {
    if (_.isString(action)) {
      $this.$store.commit(`set_${action.controller}_${action.method}`, {
        data: {},
        request: {},
      })
    } else if (_.isArray(action)) {
      _.map(action, this.removeKey)
    }
    return this
  }
  this.action = (action, payload, handler) => {
    if (handler && _.isFunction(handler)) {
      payload = handler.call(this, payload)
    }

    if (_.isFunction($this[`${entity}_${action}`])) $this[`${entity}_${action}`].call(this, payload)
    else {
      console.log(`%c not find action [${entity}_${action}]! please verify action name!`, 'color:red')
    }
    return this
  }
  this.clear = data => {
    if (_.isString(data)) {
      $this.$store.commit(`set_${entity}_${data}`, {
        data: {},
        request: {},
      })
    } else if (_.isArray(data)) {
      _.map(data, this.clear)
    }
    return this
  }
  // 操作 Action end

  // 引入 环境变量[Action State] start
  this.actions = () => {
    let actions = []
    const entitys = coverEntity(entity)
    _.forEach(entitys, e => {
      _.mapKeys(Actions.default[e].actions, (value, key) => {
        actions.push(key)
      })
    })
    return mapActions(actions)
  }

  this.state = () => {
    const entitys = coverEntity(entity)
    let state = {}
    _.forEach(entitys, key => {
      _.assign(state, {
        [key]: state => {
          return _.get(state, key, null)
        },
      })
    })
    return mapState(state)
  }

  this.getters = () => {
    let getters = []
    const entitys = coverEntity(entity)
    _.forEach(entitys, e => {
      _.mapKeys(Actions.default[e].getters, (value, key) => {
        getters.push(key)
      })
    })
    return mapGetters(getters)
  }

  // 引入 环境变量[Action State] end

  function coverEntity(_entity) {
    if (_.isString(_entity)) {
      return [_entity]
    } else if (_.isArray(_entity)) {
      _entity = _entity.filter(e => !_.isUndefined(e))
      return _entity.map(e => {
        if (_.isObject(e)) {
          return e['__name']
        } else return e
      })
    } else if (_.isObject(_entity)) {
      return [_entity['__name']]
    } else {
      throw new Error('select 传递了错误的参数 ,必须是 字符串或者字符串数组!')
    }
  }

  this.guid = () => {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }

    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
  }

  let cbData = null
  this.cb = data => {
    this.cbData = data
    return this
  }
  this.success = success => {
    if (!this.cbData.loading && !this.cbData.error) {
      if (success && _.isFunction(success)) {
        success.call()
      } else {
        $this.$Message.success(`${this.cbData.type} success!`)
        $this.loading = this.cbData.loading
      }
    }

    return this
  }
  this.beforeLogout = () => {
    removeToken()
    $this
      .$confirm('登录信息已过期!', '提示', {
        confirmButtonText: '重新登录',
        type: 'warning',
        center: true,
        showClose: false,
        showCancelButton: false,
        closeOnClickModal: false,
      })
      .then(() => {
        this.logout()
      })
      .catch(() => {})
  }
  this.logout = () => {
    $this.$store.dispatch('FedLogOut')
  }
  this.error = error => {
    const delay = 3200
    if (this.cbData && !this.cbData.loading && this.cbData.error) {
      let ret = true
      if (error && _.isFunction(error)) {
        ret = error.call()
      }
      if (ret) {
        //锁定错误提示
        setTimeout(() => {
          $this.loading = false
        }, delay)
        if (!Vue.config.sys_error_show) {
          return
        }
        Vue.config.sys_error_show = false

        let message = ''

        let error_code = _.get(this.cbData.data, 'code', 'SYSTEM_ERROR')
        let error_msg = _.get(this.cbData.data, 'message', '')
        if (!_.isString(error_code)) {
          error_code = error_code.error
        }

        error_msg = $this.$t(error_msg) || 'unknow error!'
        if (error_code === 'SYSTEM_ERROR') {
          $this.$notify({
            message: error_msg,
            type: 'error',
            duration: delay,
          })
        } else if (error_code === 'AUTH_TOKEN_AUTHORIZATION_FAILED' || error_code === 'AUTH_TOKEN_EXPIRED' || error_code === 'TOKEN_INVALID') {
          //token 失效跳转
          this.beforeLogout()
        } else if (error_code === undefined) {
          if (process.env.NODE_ENV === `development`) {
            $this.$notify({
              message: '系统出现未知异常!',
              type: 'error',
              duration: delay,
            })
          }
        } else {
          $this.$notify({
            message: _.isString(error_msg) ? error_msg : '系统异常!',
            type: 'error',
            duration: delay,
          })
        }
        setTimeout(() => {
          Vue.config.sys_error_show = true
        }, delay)
      }
    }
    return this
  }

  this.I18n = key => {
    if (!key) return ''
    return _.reduce(
      key.split(' '),
      (n1, n2) => {
        if (/^[A-Za-z\s]+$/.test(n1)) n1 = n1 + ' '
        return n1 + $this.$t(`h.${_.lowerCase(n2)}`)
      },
      '',
    )
  }
}

export default (context, defaultEntity) => new util(context, defaultEntity)
