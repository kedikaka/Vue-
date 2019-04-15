import axios from "axios"
import qs from 'qs'
// 创建axios实例
const service = axios.create({
  timeout: 30000,
  // 允许跨域带token
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})
export function post(url, data) {
  return new Promise((resolve, reject) => {
    service.post(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
export function get(url, params) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
//http request 拦截器
service.interceptors.request.use(
  config => {
    // const token = getCookie('名称');

    config.data = qs.stringify(config.data);
    // config.headers = {
    //   'Content-Type':'application/x-www-form-urlencoded'
    // }

    //请求头携带tocken
   // config.headers['token'] = Vue.cookie.get('token') ?Vue.cookie.get('token') :'74c8ffe4a59da108f03aa7afc77cc24e'
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

//http response 拦截器
service.interceptors.response.use(
  response => {
    // if(response.data.errCode ==2){
    //   router.push({
    //     path:"/login",
    //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    //   })
    // }

    // tocken失效
    // if (response.data && response.data.code === 401) { // 401, token失效
    //   Vue.cookie.delete('token')
    //   router.push({
    //     name: 'login'
    //   })
    // }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)
