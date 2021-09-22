/**
 * Created by binwang on 17/11/2.
 */
import Vue from 'vue'
import _ from 'lodash'

export function hasPermission(functions, value) {
  if (!Vue.config.permissionSwitch) return true

  if(value === undefined){
    console.trace()
    console.error('lack permission code...')
  }
  if (!value || value === '') return true
  let has = false
  if (_.isString(value)) {
    has = functions.some(f => f === value)
  } else if (_.isArray(value)) {
    has = value.some(v => hasPermission(functions, v))
  } else if (_.isObject(value)) {
    if (value.ignore) return true
    return hasPermission(functions, value.key)
  }
  return has
}
//自定义权限指令
Vue.directive('permission', {
  deep: true,
  bind: (el, binding, vnode) => {
    if (!hasPermission(vnode.context.$store.getters.permissions.functions, binding.value)) {
      if (_.get(binding, 'value.type', null) === 'disabled') {
        _.set(vnode, 'componentOptions.propsData.disabled', true)
      } else {
        el.style.display = 'none'
      }
    }
  },
  update: (el, binding, vnode) => {
    if (hasPermission(vnode.context.$store.getters.permissions.functions, binding.value)) {
      if (_.get(binding, 'value.type', null) === 'disabled') {
        _.set(vnode, 'componentOptions.propsData.disabled', false)
      } else {
        el.style.display = ''
      }
    }
  },
})
Vue.directive('pagePermission', {
  bind: function(el, binding, vnode) {},
  update: function(el, binding, vnode) {
    if (!hasPermission(vnode.context.$store.getters.permissions.functions, binding.value)) {
      el.innerHTML =
        '<div style="color: red;width: 400px;position: absolute;left: 50%;margin-left:-200px;top: 200px;"><h1>Do not have permission!</h1></div>'
    }
  },
})
