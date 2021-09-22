import axios from 'axios'
import qs from 'qs'
import * as auth from '@/utils/auth.js'
import { Message } from 'element-ui'
 
// 创建axios实例
const service = axios.create({
    timeout: 5000 // 请求超时设置
})

service.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8"
 
// 请求拦截器
service.interceptors.request.use(
    config => {
        if (!config.data) {
            config.data = {};
        }

        config.headers.common = {
            'Authorization': auth.getToken()
        }
        // 设置公共参数
        // console.log(qs.stringify(config.data));
     
        return config;
    }, 
    error => {
        return Promise.reject(error);
    }
)

const errHandle = status =>{
    switch(status){
        case 401:
            window.location.href = '/401'
            break;
        case 403:
            Message({ message: '请求资源不可用，请重新登录！', type: 'warning' });
            setTimeout(()=>{window.location.href = '/newlogin'},2000)
            break;
        case 404:
            Message({ message: '请求资源不存在！', type: 'warning' });
            setTimeout(()=>{window.location.href = '/404'},2000)
            break;
    }
}
 
// 响应拦截器
service.interceptors.response.use(
    response => {
        return response;
    }, 
    error => {
        const { response } = error
        if(response){
            errHandle(response.status,response.message)
            return Promise.reject(error);
        }
    }
)
 
export default service;
