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
  componrdetaile: async (data: any) => {
    return await service.post(`${baseUrl}api/tsevent/details`, data).then(res => res).catch(err => err)
  },
  // 待下发
  Issue: async (event_number: any) => {
    return await service.get(`${baseUrl}api/tsevent/issue`, { params: { event_number: event_number } }).then(res => res).catch(err => err)
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
  AdeSel: async () => {
    return await service.get(`${baseUrl}api/bad/choice_type`).then(res => res).catch(err => err)
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
    return await service.post(`${baseUrl}api/Employees/status`, params).then(res => res).catch(err => err)
  },
  //
  getrole: async (params: Object) => {
    return await service.get(`${baseUrl}api/Employees/add`).then(res => res).catch(err => err)
  },
  //
  staffedits: async (params: any) => {
    return await service.get(`${baseUrl}api/Employees/edit`, { params }).then(res => res).catch(err => err)
  },
  // 角色列表
  rolelist: async () => {
    return await service.get(`${baseUrl}api/part/authgroup`).then(res => res).catch(err => err)
  },
  // 角色编辑
  roleedit: async (params: any) => {
    return await service.get(`${baseUrl}api/part/editauthgroup`, { params }).then(res => res).catch(err => err)
  },
  // 角色编辑save
  roleeditsqve: async (data: object) => {
    return await service.post(`${baseUrl}api/part/editauthgroup`, data).then(res => res).catch(err => err)
  },
  // 角色添加
  roleadd: async (data: object) => {
    return await service.post(`${baseUrl}api/part/addauthgroup`, data).then(res => res).catch(err => err)
  },

  // 角色添加
  roledel: async (data: object) => {
    return await service.post(`${baseUrl}api/part/delauthgroup`, data).then(res => res).catch(err => err)
  },
  // 角色状态
  rolestatus: async (data: object) => {
    return await service.post(`${baseUrl}api/part/editstatus`, data).then(res => res).catch(err => err)
  },
  // 科室列表
  departlist: async () => {
    return await service.get(`${baseUrl}api/Department/lists`).then(res => res).catch(err => err)
  },
  // 新增
  departadd: async () => {
    return await service.get(`${baseUrl}api/Department/add`).then(res => res).catch(err => err)
  },
  // 新增保存
  departsave: async (data: object) => {
    return await service.post(`${baseUrl}api/Department/add`, data).then(res => res).catch(err => err)
  },
  // 编辑传id
  departedit: async (params: any) => {
    return await service.get(`${baseUrl}api/Department/edit`, { params }).then(res => res).catch(err => err)
  },
  // 编辑save
  departeditsave: async (data: object) => {
    return await service.post(`${baseUrl}api/Department/edit`, data).then(res => res).catch(err => err)
  },
  // 删除
  departdel: async (params: any) => {
    return await service.get(`${baseUrl}api/Department/del`, { params }).then(res => res).catch(err => err)
  },
  // 更改状态
  departstatus: async (data: object) => {
    return await service.post(`${baseUrl}api/Department/status`, data).then(res => res).catch(err => err)
  },
  //权限列表
  rulelist: async () => {
    return await service.get(`${baseUrl}api/auths/get_rules`).then(res => res).catch(err => err)
  },
  //上级权限
  addpower: async () => {
    return await service.get(`${baseUrl}api/auths/get_rules`).then(res => res).catch(err => err)
  },
  //添加权限
  savepower: async (data: Object) => {
    return await service.post(`${baseUrl}api/auths/rule_add`, data).then(res => res).catch(err => err)
  },
  //编辑权限传id
  getpowid: async (params: any) => {
    return await service.get(`${baseUrl}api/auths/rule_eit`, { params }).then(res => res).catch(err => err)
  },
  //编辑权限save
  editsavepower: async (data: Object) => {
    return await service.post(`${baseUrl}api/auths/rule_eit`, data).then(res => res).catch(err => err)
  },
  //删除权限
  delpow: async (data: Object) => {
    return await service.post(`${baseUrl}api/auths/del`, data).then(res => res).catch(err => err)
  },
  //个人信息
  personxq: async () => {
    return await service.get(`${baseUrl}api/home/personal`).then(res => res).catch(err => err)
  },
  //个人信息编辑保存
  changeinfor: async (data: object) => {
    return await service.post(`${baseUrl}api/home/edit_personal`, data).then(res => res).catch(err => err)
  },

  //个人手机号
  phoneyz: async (data: object) => {
    return await service.post(`${baseUrl}api/login/hssmsphone`, data).then(res => res).catch(err => err)
  },
  //手机号验证
  phonechange: async (data: object) => {
    return await service.post(`${baseUrl}api/home/authentication`, data).then(res => res).catch(err => err)
  },
  //手机号换绑
  phonehb: async (data: object) => {
    return await service.post(`${baseUrl}api/home/hs_bind_phone`, data).then(res => res).catch(err => err)
  },
  //账户管理
  accountman: async () => {
    return await service.get(`${baseUrl}api/home/user_home`).then(res => res).catch(err => err)
  },
}