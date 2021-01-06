// 正式环境调用service（实际开发请查看该部分代码）
import service from '../util/request'
// mock数据直接调用axios
import axios from 'axios'

const qs = require('qs')
const baseUrl = '/'

export default  {
  // 登录
  login: async (params: Object) => {
    return await service.post(`${baseUrl}api/login/login`, params).then(res => res).catch(err => err)
  },
// 投诉列表
  ComList: async () => {
    return await service.get(`${baseUrl}api/tsevent/lists`).then(res => res).catch(err => err)
  },
// 添加投诉
  AddCom: async (params: any) => {
    return await service.post(`${baseUrl}admin`, { params }).then(res => res).catch(err => err)
  },
// 
  putAdminList: async (params: any) => {
    return await service.put(`${baseUrl}admin`, { params }).then(res => res).catch(err => err)
  },

  deleteAdminList: async (params: any) => {
    return await service.delete(`${baseUrl}admin`, { params }).then(res => res).catch(err => err)
  },

  // 不良事件列表
  AdeList: async () => {
    return await service.get(`${baseUrl}api/bad/lists`).then(res => res).catch(err => err)
  },
  // 不良事件轻重程度
  Weight: async () => {
    return await service.get(`${baseUrl}api/bad/lists`).then(res => res).catch(err => err)
  },
  // 不良类型
  badType: async () => {
    return await service.get(`${baseUrl}api/bad/lists`).then(res => res).catch(err => err)
  },
  // 员工管理
  // 员工列表显示
  staffList: async () => {
    return await service.get(`${baseUrl}api/Employees/index`).then(res => res).catch(err => err)
  },
}