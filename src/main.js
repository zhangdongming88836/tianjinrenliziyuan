import Vue from 'vue'
import Element from 'element-ui'
import JsEncrypt from 'jsencrypt'
import App from './app'
import router from './router'
import './router/before'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import i18n from './lang' // Internationalization
import './errorLog' // error log
import './directive/permission'
import ReadConfig from './utils/config.js'
import Global from '@/libs/mixins/global'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

Vue.mixin(Global)

Vue.use(Element, {
  size: 'mini', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value),
})

Vue.prototype.$encruption = function (obj) {
  let encrypt = new JsEncrypt();
  encrypt.setPublicKey(
    // `-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAy515p2Oe7T7pZHca/MY5VQLfaYUxOvax9jxb0no9Pb8FBkaQfcG1jRvyG+Ez2urTlT0Q5X/9TbknBwGy8w1aHHToyWXzCUeqVBoaRbuQ9TImUpvoojobvifR6XPPwSet+wMkxbA81VCXJQkvkThO28JHScSgtvU9Ki+ld1D3ntlQq7vf5NMsoVw8bQkx64EVm7Q596W3iwtp7niV9A8jFBQUjIjxn7Jr6oa9cjsaGM8n5oWFoUJCqwrcfVKWnQVFCeBDQ6tDCUjImbm7TqCDpSNlTqUGGXF04EFJiKmHUG5jmptY1eFtZnhRdU8gxlUVD8CpMJcABAm4Gu2oytZvZQIDAQAB-----END PUBLIC KEY-----`
    `-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm74TT0rE6RDL7pGY1UdqaV4LjLnjqbd3Mk47gyqxWHNDLrsJAON3UUrqODDdQ/nhqUG2Qi1XMKI9sVoh8qx+AUiJkqUWxj/5UGdsqWjHQ4ujhPBXhj465lTrrtEjqQHT+zRjbNJHZqNxjDjexpn5LJUOLgAB/O0C4fEXS0dczgQ9+Myu/qFUkKQznDqE5Og3s9Me7TrCl+OgxgebwHVjcRJp7TSp/eYUIILaRaaZt9Oo0rLy1X22TA1ThPbWIE5ikIRofTO0ypAoC0i7hI5Ky6VjUWflQLSXsEMENA9Hy6TFbcHbi8GcoNtzYpA7f4xuYQKpmb3KBfVFZUe41Tia0QIDAQAB-----END PUBLIC KEY-----`
    )
  return encrypt.encrypt(obj);
};

Vue.config.silent = true
Vue.config.productionTip = false

const create = async () => {
  await ReadConfig(Vue)
  new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: {App},
  })
}
create()
