// 正式环境调用service（实际开发请查看该部分代码）
import service from '../util/request'
// mock数据直接调用axios
import axios from 'axios'

const qs = require('qs')
const baseUrl = '/'

export default {
  // 登录
  login: async (params: Object) => {
    return await service.post(`${baseUrl}api/login/login`, params).then(res => res).catch(err => err)
  },
<<<<<<< HEAD
  // 找回密码
  Fpassword: async (params: Object) => {
    return await service.post(`${baseUrl}api/login/zhaopassword`, params).then(res => res).catch(err => err)
  },
  // 发送手机验证
  PCode: async (params: Object) => {
    return await service.post(`${baseUrl}api/login/hssmsphone`, params).then(res => res).catch(err => err)
  },
  // 投诉列表
  ComList: async () => {
    return await service.get(`${baseUrl}api/tsevent/lists`).then(res => res).catch(err => err)
=======
// 投诉列表
  ComList: async (pNum:number,current:number) => {
    return await service.get(`${baseUrl}api/tsevent/lists`,{params:{pNum,current}}).then(res => res).catch(err => err)
>>>>>>> 8a22dd4c1375c3d030ce5c6bb9f6415c61234ea1
  },
  // 获取添加投诉列表信息
  AddCom: async () => {
    return await service.get(`${baseUrl}api/tsevent/add`).then(res => res).catch(err => err)
  },
  // 添加投诉
  AddComponent: async (params: any) => {
    return await service.post(`${baseUrl}api/tsevent/add`, params).then(res => res).catch(err => err)
  },
// 获取详情
  componrdetaile: async (params: any) => {
    return await service.post(`${baseUrl}api/tsevent/details`, {data:{params}} ).then(res => res).catch(err => err)
  },

  // 不良事件列表
  AdeList: async () => {
    return await service.get(`${baseUrl}api/bad/lists`).then(res => res).catch(err => err)
  },
  // 不良新增
  badAdd: async (params: any) => {
    return await service.post(`${baseUrl}api/bad/bad_add`, params).then(res => res).catch(err => err)
  },
  // 不良中的下拉框
  AdeSel : async()=>{
    return await service.get(`${baseUrl}api/bad/choice_type`).then(res=>res).catch(err=>err)
  },
  // 不良查看
  badSee: async (params: any) => {
    return await service.get(`${baseUrl}api/bad/bad_info`, { params }).then(res => res).catch(err => err)
  },
  // 员工管理
  // 员工列表显示
  staffList: async () => {
    return await service.get(`${baseUrl}api/Employees/index`).then(res => res).catch(err => err)
  },
  // 员工添加
  staffAdd: async (data: any) => {
    return await service.post(`${baseUrl}api/Employees/add`, data).then(res => res).catch(err => err)
  },
  // 员工编辑
  staffEdit: async (params: Object) => {
    return await service.post(`${baseUrl}api/Employees/edit`, params).then(res => res).catch(err => err)
  },
  // 员工删除
  staffDel: async (params: Object) => {
    return await service.post(`${baseUrl}api/Employees/del`, params).then(res => res).catch(err => err)
  },
  // 员工搜索
  staffSea: async (params: Object) => {
    return await service.post(`${baseUrl}api/Employees/namesearch`, params).then(res => res).catch(err => err)
  },
  // 员工科室
  staffSeah: async () => {
    return await service.get(`${baseUrl}api/Employees/namesearch`).then(res => res).catch(err => err)
  },
  // 员工状态
  staffState: async (params: Object) => {
    return await service.post(`${baseUrl}api/Employees/status`,params).then(res => res).catch(err => err)
  },
  //
  getrole: async (params: Object) => {
    return await service.get(`${baseUrl}api/Employees/add`).then(res => res).catch(err => err)
  },
  //
  staffedits: async (params: any) => {
    return await service.get(`${baseUrl}api/Employees/edit`, { params }).then(res => res).catch(err => err)
  },
// 科室管理

}