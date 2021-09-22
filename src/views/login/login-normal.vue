<template>
    <div class="pr_newlogin">
        <div class="pr_newlogin_logo" style="text-align:center;">临时登录页</div>
        <div class="pr_newlogin_body">
            <div class="box">
                <div class="title"><img :src="require('../../assets/login/title.png')"/></div>
                <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="loginRules">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" placeholder="请输入用户名">
                            <i slot="prefix" class="iconfont iconlogin_user"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginForm.password" placeholder="请输入密码">
                            <i slot="prefix" class="iconfont iconlogin_icon_lock"></i>
                        </el-input>
                    </el-form-item>
                </el-form>
                <div class="pr_newlogin_btn" @click="handleLogin('loginForm')">登录</div>
            </div>
        </div>
    </div>
</template>
<script>
    import store from '@util/sessionStore'
    import { setStore } from '@/utils/localStorage'
    import { newLogin, getUserName, getUserCompanyName, getDepartmentName } from '@/api/index'

    export default {
        name: 'login',
        data() {
            return {
                loginForm: { username: '', password: '' },
                loginRules: {
                    username: [{ required: true, trigger: 'blur', message:'请输入用户名！'}],
                    password: [{ required: true, trigger: 'blur', message:'请输入用户密码！'}]
                }
            }
        },
        created() {
            store.set('system', null)
            store.set('platform', null)
        },
        methods: {
            handleLogin(formName) {
                var _this = this;
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        let loginForm1={
                            password:this.$encruption(_this.loginForm.password),
                            username:_this.loginForm.username,
                            tenantId:'Cnooc-bhrl'
                        }
                        newLogin(loginForm1)
                            .then(response => {
                                //this.loadUser(response.data.id)

                                this.$store.dispatch('LoginByUsername', {
                                    userId: response.data.id,
                                    username: _this.loginForm.username,
                                    token: response.headers.authorization,
                                })
                                .then(() => {
                                    this.$router.push({ path: '/' })
                                })
                                .catch(() => {})
                            })
                            .catch(error => {
                                this.$message({ message: '登录失败，请刷新重试！', type: 'error' })
                            })
                    }
                })
            },
            loadUser(userId){
                let userData = {}

                getUserName(userId)
                    .then(res => {
                        if(res.status === 200){
                            userData.name =  res.data.name
                            setStore('loginUserData', JSON.stringify(userData))
                        }
                    })
                    .catch(err => {
                        this.$message({ message: '失败，请刷新重试！', type: 'error' })
                    })
                getUserCompanyName(userId)
                    .then(res => {
                        if(res.status === 200){
                            userData.company = res.data.name
                            setStore('loginUserData', JSON.stringify(userData))
                        }
                    })
                    .catch(err => {
                        this.$message({ message: '失败，请刷新重试！', type: 'error' })
                    })
                getDepartmentName(userId)
                    .then(res => {
                        if(res.status === 200){
                            userData.department = res.data.name
                            setStore('loginUserData', JSON.stringify(userData))
                        }
                    })
                    .catch(err => {
                        this.$message({ message: '失败，请刷新重试！', type: 'error' })
                    })
            }
        }
  }
</script>
<style lang="scss">
    @import './index.scss';
</style>
