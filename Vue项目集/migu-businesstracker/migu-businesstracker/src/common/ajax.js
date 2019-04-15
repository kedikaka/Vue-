import Vue from 'vue';

import common from "@/common/common";

// axios配置
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
axios.defaults.timeout = 15000;



var ajaxConfig = {
  'baseURI': {
    'defaultApi': urIConfig.defaultApi,
    'businesstrackerApi': urIConfig.businesstrackerApi,
    'adminApi': urIConfig.adminApi,
    'resourceApi': urIConfig.resourceApi,
    'uploadApi': urIConfig.uploadApi,
  },
  /**
   * 设置ajax请求头类型
   */
  'content_type': {
    'form': 'application/x-www-form-urlencoded',
    'upload': 'multipart/form-data',
    'json': 'application/json'
  }
};


//#region ==== 1 默认ajax请求 ====

let ajax = {};

//#region ==== GET请求 ====
ajax.get = function (url, param_data) {

  if(url.indexOf('?') < 0){
    if(typeof(param_data) === 'undefined'){
      var param_data = {};
    }
    var params = common.function.jsonToQueryString(param_data);
    if(params){
      url = url + '?' + params;
    }
  }

  let request_config = {
    methods: 'get',
    baseURL: ajaxConfig.baseURI.defaultApi,
    headers: {
      'Content-Type': ajaxConfig.content_type.form
    },
  };
  return axios.get(url, request_config);
};
//#endregion 

//#region ==== POST请求 ====
ajax.post = function (url, param_data) {
  let request_config = {
    methods: 'POST',
    baseURL: ajaxConfig.baseURI.defaultApi,
    headers: {
      'Content-Type': ajaxConfig.content_type.json
    },
    data: param_data,
  };
  return axios.post(url, param_data, request_config);
};
//#endregion 

//#region ==== PUT请求 ====
ajax.put = function (url, param_data) {
  let request_config = {
    methods: 'put',
    baseURL: ajaxConfig.baseURI.defaultApi,
    headers: {
      'Content-Type': ajaxConfig.content_type.json
    },
    data: param_data,
  };
  return axios.put(url, param_data, request_config);
};
//#endregion

//#region ==== Patch请求 ====
ajax.patch = function (url, param_data) {

  param_data = common.function.patchParamInit(param_data);
 
  let request_config = {
    methods: 'patch',
    baseURL: ajaxConfig.baseURI.defaultApi,
    headers: {
      'Content-Type': ajaxConfig.content_type.json
    },
    data: param_data,
  };
 
  return axios.patch(url, param_data, request_config);
};
//#endregion

//#region ==== delete请求 ====
ajax.delete = function (url) {

  let request_config = {
    methods: 'delete',
    baseURL: ajaxConfig.baseURI.defaultApi,
    headers: {
      'Content-Type': ajaxConfig.content_type.json
    },
  };
  return axios.delete(url, request_config);
};
//#endregion

//#endregion ==== 1 默认ajax请求 ====




//#region ==== 2 文件上传ajax请求 ====

ajax.file_post = function (url, param_data) {
  let request_config = {
    methods: 'POST',
    baseURL: ajaxConfig.baseURI.uploadApi,
    headers: {
      //  'Content-Type': ajaxConfig.content_type.upload + ";boundary=99"
      'Content-Type': 'multipart/form-data'
    },
  };
  return axios.post(url, param_data, request_config);
};
//#endregion ==== 2 文件上传ajax请求 ====



//#region ==== 0 全局request与response处理 ====
// 全局ajax请求response处理
axios.interceptors.response.use(
  function (response) {
    if (common.config.debug) {
      console.log(response);
    }

    return response.data;

  },
  function (err) {
    console.log(err);
    console.log(err.response);
    // if (err && err.response) {
    //   switch (err.response.status) {
    //     case 400:
    //       err.message = "请求错误";
    //       break;
    //     case 401:
    //       err.message = "未授权，请登录";
    //       break;
    //     case 403:
    //       err.message = "拒绝访问";
    //       break;
    //     case 404:
    //       err.message = `请求资源不存在: ${err.response.config.url}`;
    //       break;
    //     case 405:
    //       err.message = "请求的methods不正确";
    //       break;
    //     case 408:
    //       err.message = "请求超时";
    //       break;
    //     case 500:
    //       err.message = "服务器内部错误";
    //       break;
    //     case 501:
    //       err.message = "服务未实现";
    //       break;
    //     case 502:
    //       err.message = "网关错误";
    //       break;
    //     case 503:
    //       err.message = "服务不可用";
    //       break;
    //     case 504:
    //       err.message = "网关超时";
    //       break;
    //     case 505:
    //       err.message = "HTTP版本不受支持";
    //       break;
    //     default:
    //   }
    // }



    if (err && err.response && err.response.data && err.response.data.errorMsg) {
      err.message = err.response.data.errorMsg;
    }


    if(err.response.data.errorMsg){
      alert(err.response.data.errorMsg);
    }
    
    return Promise.reject(err);
  });

//#endregion ==== 0 全局request与response处理 ====

export default ajax;
