let get = function (url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(null)
      }
    }
    xhr.onerror = function () {
      reject(null)
    }
    xhr.send(null)
  })
}

export default async (vue) => {
  if(!vue.config.login_type){
    let resp =  await get('/config/app-config.json')
    if(resp){
      vue.config.login_type = resp.loginType || 'normal' //normal ,iam, pass
      vue.config.server_url = resp.serverUrl || '' //后台服务地址, 当login_type 为 iam时, 用于接受 iframe 跨域信息,
      vue.config.title = resp.title || ''
      vue.config.shortTitle = resp.shortTitle || ''
      vue.config.platformRoleTmpId = resp.platformRoleTmpId || ''
    }
  }
}
