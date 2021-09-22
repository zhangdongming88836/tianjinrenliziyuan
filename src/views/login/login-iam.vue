<template>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  import {setToken} from '@/utils/auth.js'

  export default {
    name: 'iam-login',
    methods: {},
    data(){
      return {
        loginUrl: null,
      }
    },
    async created() {
      let query = window.location.search
      if (query) {
        query = query.substring(0,query.lastIndexOf('&'))
        axios.get(`/sso-login${query}`).then((resp)=>{
          setToken(resp.headers['x-auth-token-0'])
          window.location.reload('#dashboard')
        }).catch((resp) =>{
          setToken(resp.headers['x-auth-token-0'])
          window.location.reload('#dashboard')
        })
      } else {
        let resp = await axios.get(`/api/users/get/auth-token`)
        if(resp.headers['x-auth-token-0']){
          setToken(resp.headers['x-auth-token-0'])
          window.location.reload('#dashboard')
        }else{
          window.location.href = '/sso-login'
        }
      }
    },
    destroyed() {
    },
  }
</script>
