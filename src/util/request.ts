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
console.log(location)
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
    console.log(res)
    if(res.code==20401){
      MessageBox.alert(res.msg, {
            confirmButtonText: '重新登录',
            type: 'warning'
          }).then(() => {
           location.href="http://192.168.0.81:8080/"
            // location.href('http://192.168.0.81:8081')
            // 为了重新实例化vue-router对象 避免bug
          })
    }
    // if (response.data.token) {
      
    //   // sessionStorage.setItem('token', response.data.token)
    // }
    // if (code === -1) {
    //   MessageBox.alert(msg, {
    //     confirmButtonText: '重新登录',
    //     type: 'warning'
    //   }).then(() => {
    //       sessionStorage.removeItem('token');
    //       sessionStorage.removeItem('user');
    //       location.reload() // 为了重新实例化vue-router对象 避免bug
    //   })
    //   return Promise.reject('error')
    // } else if (code !== 0) {
    //   Message({
    //     message: msg || '服务器返回数据有误',
    //     type: 'warning',
    //     duration: 2 * 1000
    //   });
    // }   
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