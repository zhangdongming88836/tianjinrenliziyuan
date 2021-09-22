 export default {
   noSpecialWord: (rule, value, callback, source, options) => {
     var errors = []
     if (/[/\\\&\<\>\']/.test(value)) {
       callback(this.$t('valid.noSpecial'))
     }
     callback(errors)
   },
   equalTo: (rule, value, callback, source, options) => {},
   userName: (rule, value, callback, source, options) => {
     var errors = []
     if (value && !/^[a-zA-Z0-9_-]{4,16}$/.test(value)) {
       callback(this.$t('valid.userName'))
     }
     callback(errors)
   },
   url: (rule, value, callback, source, options) => {
     var errors = []
     if (value && !/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value)) {
       callback(new Error('不符合Url规范！'))
     }
     callback()
   },
   ip: (rule, value, callback, source, options) => {
     var errors = []
     if (value && !
       /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9/*]))$/g.test(value)) {
       callback(new Error('不符合IP规范！'))
     }
     callback()
   },
   ipRange: (rule, value, callback, source, options) => {
     var errors = []
     let ipReg = /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/g
     let ipReg2 = /^((25[0-5]\.|2[0-4]\d\.|1\d\d\.|[0-9]\d\.|[0-9]\.){1,3}(\*){1})$/g
     let ipReg3 =  /^((?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))\s{0,1}\-\s{0,1}(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9])))$/g
     if (!value || ipReg.test(value) || ipReg2.test(value) || ipReg3.test(value) ) {
       callback()
     }else{
       callback(new Error('不符合IP规范！'))
     }
   },
   notBlank: (rule, value, callback, source, options) => {
     var errors = []
     if (!value) {
       callback(new Error('不能为空！'))
     }
     callback(errors)
   },
   number: (rule, value, callback, source, options) => {
     var errors = []
     if (isNaN(value)) {
       callback(new Error('数字！'))
     }
     callback(errors)
   },
   telNumber: (rule, value, callback, source, options) => {
     var errors = []
     if (value && !/^((1[3-9][0-9])\d{8})|(0\d{2}-\d{8})|(0\d{3}-\d{7})$/.test(value)) {
       callback(new Error('手机号格式错误！'))
     }
     callback(errors)
   },
   lowerCaseAndNumber: (rule, value, callback, source, options) => {
     var errors = []
     if (value && !/^[a-z0-9]+$/.test(value)) {
       callback(this.$t('valid.lowerCaseAndNumber'))
     }
     callback(errors)
   },
   //汉字，字母、数字、-，_
   name: (rule, value, callback, source, options) => {
     const reg = /^[a-zA-Z0-9_\u4e00-\u9fa5\-]+$/
     if(value && !reg.test(value)) {
       callback(new Error('含汉字，字母、数字、-，_'))
     }
     callback()
   },
   //英文，数字 - 下划线
   code: (rule, value, callback, source, options) => {
     const reg = /^[a-zA-Z0-9_\-]+$/
     if(value && !reg.test(value)) {
       callback(new Error('含字母、数字、-，_'))
     }
     callback()
   },
   //英文，数字 - 下划线 .
   version: (rule, value, callback, source, options) => {
     const reg = /^[a-zA-Z0-9_.\-]+$/
     if(value && !reg.test(value)) {
       callback(new Error('含字母、数字、-，_，.'))
     }
     callback()
   },
   // 邮编规则
   zipcode: (rule, value, callback, source, options) => {
     if([null, '', undefined].includes(value)) {//非必填
       callback()
     }
     const reg = /^\d{6}$/
     if (!reg.test(value)) {
       callback(new Error('邮编格式不正确'))
     }
     callback()
   },
   email: (rule, value, callback, source, options) => {
     const reg = /^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/
     if (value && !reg.test(value)) {
       callback(new Error('邮箱格式不正确'))
     }
     callback()
   },
   //支持英文、数字、符号
   password: (rule, value, callback, source, options) => {
     const reg = /^[a-z_A-Z0-9-\.!@#\$%\\\^&\*\)\(\+=\{\}\[\]\/",'<>~\·`\?。《，》（’？】——【）！；:;|]{6,20}$/
     if(!reg.test(value)) {
       callback(new Error('含字母、数字、符号,6-20位'))
     }
     callback()
   },
   //支持中文、英文、数字，_,-
   nameG: (rule, value, callback, source, options) => {
     const reg = /^[a-zA-Z0-9_\u4e00-\u9fa5\-]+$/
     if(!reg.test(value)) {
       callback(new Error('含汉字、字母、数字，-，_'))
     }
     callback()
   },
   //支持英文、数字、-，英文开头，不用-结尾
   codeG: (rule, value, callback, source, options) => {
     const reg = /^([a-zA-Z])(?!.*?-$)[a-zA-Z0-9-]*$/
     if(!reg.test(value)) {
       callback(new Error('含字母、数字、-，以字母开头，不能以-结尾'))
     }
     callback()
   },
   //支持中文、英文、数字，下划线、-、标点符号
   desc: (rule, value, callback, source, options) => {
     const reg = /(?![\u4e00-\u9fa5])([a-zA-Z0-9\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F.-]*)/
     if(value && !reg.test(value)) {
       callback(new Error('含汉字、字母、数字，符号!'))
     }
     callback()

   },
   domain: (rule, value, callback, source, options) => {
     const reg = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/
     if(value && !reg.test(value)) {
       callback(new Error('不符合域名规则!'))
     }
     callback()
   },
   prefix: (rule, value, callback, source, options) => {
     const reg = /^[a-z:/-]*$/
     if(value && !reg.test(value)) {
       callback(new Error('支持：/-,小写英文!'))
     }
     callback()
   },
   parameter: (rule, value, callback, source, options) => {
     const reg = /^[a-zA-Z0-9_\-\/]+$/
     if(!reg.test(value)) {
       callback(new Error('含字母、数字、-，_,/'))
     }
     callback()
   },
   className: (rule, value, callback, source, options) => {
     const reg = /^[a-zA-Z0-9_\-\.]+$/
     if(!reg.test(value)) {
       callback(new Error('含字母、数字、.，_，-'))
     }
     callback()
   },
 }
