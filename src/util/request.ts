import * as axios from 'axios';
import router from '../router'
// 这里可根据具体使用的ui组件库进行替换
import { Message, MessageBox } from 'element-ui';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
export interface AjaxResponse {
  code: number;
  message: string;
  data: any
}
// baseURL根据实际进行定义
const baseURL = 'http://bt1.wlqqlp.com:8082/';
// 创建axios实例
const service = axios.default.create({
  baseURL,
  timeout: 10000,  // 请求超时时间
  maxContentLength: 4000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  
  if (sessionStorage.getItem('token')) {
  
    config.headers.token = sessionStorage.getItem('token');  //让请求头携带验证token
    // config.headers.admin = localStorage.getItem('user'); // 让每个请求携带自定义token 请根据实际情况自行修改
  

  }
  return config
}, (err: any) => {
  Message({
    message: "请求错误",
    type: 'error',
    duration: 3 * 1000
  });
  Promise.reject(err)
});

service.interceptors.response.use((response: AxiosResponse) => {
  
  if (response.status !== 200) {
    Message({
      message: `请求错误`,
      type: 'error',
      duration: 3 * 1000
    });
    return { code: 100 }
  } else{
    let res = response.data;
    if(res.code==20010){
       
      }
    else if(res.code==20401){
    //token失效
      MessageBox.alert('此账号已在其他网页登录，请重新登录', {
            confirmButtonText: '重新登录',
            type: 'warning'
          }).then(() => {
            sessionStorage.clear()
            location.href="http://192.168.0.81:8080/"
          })
     
    }
    else if(res.code==20403){
       //无权限
       Message({
        message: '您没权限进行此操作',
        type: 'warning',
        duration: 3 * 1000
      });
     
    }
    else{
      Message({
        message:res.msg,
        type: 'error',
        duration: 3 * 1000
      });
    }
    return res
  }
}, (err: any) => {
  Message({
    message: err,
    type: 'error',
    duration: 3 * 1000
  });
  return { code: 100 }
})

export default service;