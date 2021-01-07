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
// 获取添加投诉列表信息
  AddCom: async () => {
    return await service.get(`${baseUrl}api/tsevent/add`).then(res => res).catch(err => err)
  },
// 添加投诉
 AddComponent: async (params: any) => {
    return await service.post(`${baseUrl}api/tsevent/add`, params ).then(res => res).catch(err => err)
  },

  deleteAdminList: async (params: any) => {
    return await service.delete(`${baseUrl}admin`, { params }).then(res => res).catch(err => err)
  },

  // 不良事件列表
  AdeList: async () => {
    return await service.get(`${baseUrl}api/bad/lists`).then(res => res).catch(err => err)
  },
  // 不良新增
  badAdd: async (params:Object) => {
    return await service.post(`${baseUrl}api/bad/bad_add`,params).then(res => res).catch(err => err)
  },
  // 不良事件轻重程度
  // Weight: async () => {
  //   return await service.get(`${baseUrl}api/bad/lists`).then(res => res).catch(err => err)
  // },
  // // 不良类型类型
  // badType: async () => {
  //   return await service.get(`${baseUrl}api/bad/lists`).then(res => res).catch(err => err)
  // },
  // 不良查看
  // badSee: async (params:Object) => {
  //   return await service.get(`${baseUrl}api/bad/bad_info`,params).then(res => res).catch(err => err)
  // },
  // 员工管理
  // 员工列表显示
  staffList: async () => {
    return await service.get(`${baseUrl}api/Employees/index`).then(res => res).catch(err => err)
  },
  // 员工添加
  staffAdd: async (data:any) => {
    return await service.post(`${baseUrl}api/Employees/add`,data).then(res => res).catch(err => err)
  },
  // 员工编辑
  staffEdit: async (params:Object) => {
    return await service.post(`${baseUrl}api/Employees/edit`,params).then(res => res).catch(err => err)
  },
  // 员工删除
  staffDel: async (params:Object) => {
    return await service.post(`${baseUrl}api/Employees/del`,params).then(res => res).catch(err => err)
  },
  //
  getrole: async (params:Object) => {
    return await service.get(`${baseUrl}api/Employees/add`).then(res => res).catch(err => err)
  },
}