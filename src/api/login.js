import ajaxUtil from '@/libs/ajaxUtil'
import * as auth from '@/utils/auth.js'
import { getStore } from '@/utils/localStorage'

export function iamLogout() {
    return ajaxUtil.ajax({
        url: '/logout',
        method: 'post',
        Authorization: auth.getToken(),
    })
}
export function logout() {
    return ajaxUtil.ajax({
        url: '/api/users/logout',
        method: 'post',
        Authorization: auth.getToken(),
    })
}
export function login(user) {
    return ajaxUtil.ajax({
        url: '/api/users/login',
        method: 'post',
        data: user,
    })
}
function getOwnerId() {
    if (getStore('platform') === 'system') {
        return getStore('system').id
    } else {
        return 'platform'
    }

}
function getOwnerType() {
    return getStore('platform') === 'system' ? 'system' : 'platform'
}
const getMenuUrl = (id) => {
    return `/api/users/menus?ownerId=${getOwnerId()}&ownerType=${getOwnerType()}`
}
const getFunctionsUrl = (id) => {
    return `/api/users/function-codes?ownerId=${getOwnerId()}&ownerType=${getOwnerType()}`
}
function getUser(token) {
    return ajaxUtil
    .headers({
        Authorization: token,
    })
    .ajax({
        url: '/api/users/get/current-user',
        method: 'get',
    })
}
function getFunctions(empId, token) {
    return ajaxUtil
    .headers({
        Authorization: token,
    })
    .ajax({
        url: getFunctionsUrl(empId),
        method: 'get',
    })
}
function getMenus(empId, token) {
    return ajaxUtil
    .headers({
        Authorization: token,
    })
    .ajax({
        url: getMenuUrl(empId),
        method: 'get',
    })
}
function getRoles(empId, token) {
    return new Promise((resolve, reject) => {
        return ajaxUtil
            .headers({
                Authorization: token,
            })
            .ajax({
                url: `/api/uc/permissions/employees/authorised?empId=${empId}`,
                method: 'get',
            })
            .then(response => {
                if(response.data.length === 0) {
                    resolve({
                        data: [{roleCode: 'visitor'}]
                    })
                }else resolve(response)
            })
            .catch(reject)
    })
}
export function getPermissions(empId, token) {
    return Promise.all([ getMenus(empId, token), getFunctions(empId, token),getUser(token)])
}
