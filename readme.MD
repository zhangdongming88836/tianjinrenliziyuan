## 文件夹使用说明：
```
（1）路由文件配置：/router/modules/router.js(路由名称必须全部由小写字母组成)
（2）页面文件配置：/views/project/xxx（页面文件名称采用驼峰命名方式,文件名不可过长,嵌套层级不可过多）
（3）请求函数配置：/api/xxx.js(格式参照/api/index.js进行书写)
（4）相关权限配置：/utils/permission.js
（5）静态资源配置：/static/xxx
（6）图片资源配置：/assets/xxx
（7）公共样式配置：/styles/common.scss
```

## Vue Rules：
1. 模板中严禁出现逻辑代码, 只允许调用 data, computed, method, 三元条件表达式
2. vue文件块儿顺序
```
<template></template>
<script></script>
<style lang="scss"></style>
```

## 开发运行配置说明：
```
//运行
npm run dev
```
端口默认为 3000, 可在 /config/index.js 文件中 proxyTable来转发请求；接口文档统一由后端工程师提供。
```
proxyTable: {
  '/api': {
    target: 'http://xx.xx.xx.xx:xxxx/api',
    pathRewrite: {'^/api': ''}
  },
},
```

## 生成打包文件说明：
```
npm run build:prod ----> 生成dist文件夹
```

### 权限控制说明：

权限码在coframe菜单系统配置 > 资源权限 > 资源管理中配置 ----> 对应 /utils/permission.js权限码
```
export default {
  ...
  cof_m_demo:'cof-m-demo', //示例
  ...
}
```
权限控制示例：
```
import FuncCode from '@/utils/permission.js'

data(){
    return {
        permission:{
            demo: FuncCode.cof_m_demo
        }
    }
}

<el-button type="primary" v-permission="permission.demo">示例</el-button>
```

## 页面接口请求方式说明：
```
  示例：

  import { newLogin } from '@/api/index'

  newLogin(loginForm1)
    .then(res => {
        //相关逻辑
    })
    .catch(err => {
        //相关逻辑
    })
```

## 接口统一配置说明：----> 对应 /api/xxx.js（接口命名不可过长,不可包含特殊字符）
```
  示例：

  // 登录
  export function newLogin(data) {
      return request({
          url: '/api/users/login',
          method: 'post',
          data: data,
      })
  }
```

## 固件库配置说明：
```
npm run build:dll ----> 生成/static/js/vendor.dll.js

注：可自行添加或排除固件库
vendor: [
    'vue/dist/vue.esm.js',
    "vue-i18n",
    "vue-router",
    "vuex",
    'd3',
    'd3-tip',
    'echarts',
    'lodash',
    'lodash.debounce',
    'store',
    'babel-polyfill'
]
```