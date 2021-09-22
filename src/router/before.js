import router from '@/router'
import store from '../store'
import { MessageBox} from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, removeToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/newlogin'] // no redirect whitelist

router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    if (to.path === '/newlogin' && to.query.token) {
        //如果路由为login且带有token参数，自动删除缓存中的token重新登录
        removeToken()
    }
    let token = getToken()
    if (token) {
        // determine if there has token
        /* has token*/
        if (to.path === '/newlogin') {
            next({ path: '/' })
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        }else {
            if (store.getters.needGetPermission) {
                // if ((store.getters.roles != null && store.getters.roles.length === 0) || store.getters.needGetPermission) {
                // 判断当前用户是否已拉取完user_info信息
                store.dispatch('GetUserInfo')
                    .then(res => {
                        // 拉取user_info
                        store.dispatch('GenerateRoutes').then(() => {
                            router.addRoutes(store.getters.addRouters) // 动态新增可访问路由表
                            store.dispatch('setNeedGetPermission', false)
                            // 根据roles权限生成可访问的路由表
                            // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                            next({ ...to, replace: true })
                        })
                    })
                    .catch(err => {
                        MessageBox.confirm('登录信息已过期!', '提示', {
                            confirmButtonText: '重新登录',
                            type: 'warning',
                            center: true,
                            showClose: false,
                            showCancelButton: false,
                            closeOnClickModal: false,
                        }).then(() => {
                            store.dispatch('FedLogOut')
                        })
                    })
            }else{
                next()
            }
        }
    }else{
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            // 在免登录白名单，直接进入
            next()
        }else{
            next('/newlogin') // 否则全部重定向到登录页
            NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})
