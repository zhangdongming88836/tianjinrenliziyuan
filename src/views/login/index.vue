<template>
  <component :is="loginType"></component>
</template>

<script>
import _ from 'lodash'
import { VueUtil, BaseVue } from '@lib'
import Vue from 'vue'
import Normal from './login-normal.vue'
import IAM from './login-iam.vue'

export default {
  name: 'index',
  components: { Normal ,IAM},
  computed: {},
  mixins: [BaseVue],
  props: {},

  data() {
    return {
        loginType : 'Normal'
    }
  },
  mounted(){
      if(Vue.config.login_type === 'iam'){
          this.loginType = 'IAM'
      }else if(Vue.config.login_type === 'normal'){
          this.loginType = 'Normal'
      }
  }

}
</script>
