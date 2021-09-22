import request from '@/api/request'; 
 
// 登录
export function newLogin(data) {
    return request({
        url: '/api/users/login',
        method: 'post',
        data: data,
    })
}
// 登录验证码
export function vertifyCode (data) {
    return request({
        url: '/api/users/getMobileCode',
        method: 'post',
        data: data
    })
}
//用户信息---用户名
export function getUserName(data) {
    return request({

        url: '/api/employees/byUser/'+data,
        method: 'get',
        data: '',
    })
}
//用户信息---公司
export function getUserCompanyName(data) {
    return request({
        url: '/api/organizations/companyOfUser/'+data,
        method: 'get',
        data: '',
    })
}
//用户信息---部门
export function getDepartmentName(data) {
    return request({
        url: '/api/organizations/byUser/'+data,
        method: 'get',
        data: '',
    })
}
//全站----上传
export function upload(data) {
    return request({
        url: '/oss/upload/lpg/uploadMaterial',
        method: 'post',
        data: data,
    })
}