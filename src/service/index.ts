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
  // 工作台
  dashboard: async () => {
    return await service.get(`${baseUrl}api/home/Lz_workbench`).then(res => res).catch(err => err)
  },
  // 投诉列表
  ComList: async (pNum:number,current:number) => {
    return await service.get(`${baseUrl}api/tsevent/lists`,{params:{pNum,current}}).then(res => res).catch(err => err)
  },
  //搜索
  search: async (pNum:number,current:number,complaint_name:any,ComplaintType:any,state:any,start_time:any,end_time:any) => {
    return await service.get(`${baseUrl}api/tsevent/lists`,{params:{pNum,current,complaint_name,ComplaintType,state,start_time,end_time}}).then(res => res).catch(err => err)
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
  // 投诉退回
  send: async (event_number: any,examine_textone:any) => {
    return await service.get(`${baseUrl}api/complaintprocess/complaintReturn`,{params:{event_number:event_number,examine_textone:examine_textone}} ).then(res => res).catch(err => err)
    },
     // 投诉驳回
     reject: async (event_number: any,examine_textone:any) => {
    return await service.get(`${baseUrl}api/complaintprocess/complaintReturn`,{params:{event_number:event_number,examine_textone:examine_textone}} ).then(res => res).catch(err => err)
    },
    // 下发科室调查
    Issuedepartment:  async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/distributionDepartment`, data ).then(res => res).catch(err => err)
      },
    //   科室提交
    departmentsubmit:  async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/departmentSurveySubmission`, data ).then(res => res).catch(err => err)
      },
    //   院内讨论
    discussion: async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/hospitalDiscussion`, data ).then(res => res).catch(err => err)
      },
    //   医患沟通
    communicate:async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/doctorPatientCommunication`, data ).then(res => res).catch(err => err)
      },
    //人民调解
    mediate:async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/peoplesMediation`, data ).then(res => res).catch(err => err)
      },  
    // 责任鉴定
    appraisal:async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/responsibilityAppraisal`, data ).then(res => res).catch(err => err)
      },  
    //患方推迟
    delay: async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/PatientsDelay`, data ).then(res => res).catch(err => err)
      },  
    //   中止调解 
    suspension: async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/suspensionOfRegulation`, data ).then(res => res).catch(err => err)
      },  
    //   终止调解
    termination: async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/terminationOfRegulation`, data ).then(res => res).catch(err => err)
      },  
    // 司法诉讼  
    litigation: async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/judicialLitigation`, data ).then(res => res).catch(err => err)
      },  
    //   下发改进科室
    ImproveDepartment: async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/departmentImprovement`, data ).then(res => res).catch(err => err)
      },  
    //   科室改进完成
    ImproveDepartmentsubmission: async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/departmentImprovementSubmission`, data ).then(res => res).catch(err => err)
      },  
    //   医院改进
    Hospitalimprovement: async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/hospitalImprovement`, data ).then(res => res).catch(err => err)
      },  
       //   医院改进完成
       ImprovementEnd: async (data: any) => {
      return await service.post(`${baseUrl}api/Complaintprocess/hospitalImprovementEnd`, data ).then(res => res).catch(err => err)
    }, 
    //   结束
    end: async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/eventEnd`, data ).then(res => res).catch(err => err)
      },  
    //   上传附件
    uploadfiles: async (data: any) => {
        return await service.post(`${baseUrl}api/Complaintprocess/event_uploadfiles`, data ).then(res => res).catch(err => err)
      }, 
  // 不良事件列表
  AdeList: async (params: any) => {
    return await service.get(`${baseUrl}api/bad/lists`, { params }).then(res => res).catch(err => err)
  },
  // 不良检索
  AdeSearch: async (params: any) => {
    return await service.get(`${baseUrl}api/bad/lists`, { params }).then(res => res).catch(err => err)
  },
  // 事件编号
  badNum: async () => {
    return await service.get(`${baseUrl}api/bad/bad_add`).then(res => res).catch(err => err)
  },
  // 确认不良新增
  badAdd: async (params: any) => {
    return await service.post(`${baseUrl}api/bad/bad_add`, params).then(res => res).catch(err => err)
  },
  // 不良中的下拉框
  AdeSel: async () => {
    return await service.get(`${baseUrl}api/bad/bad_add`).then(res => res).catch(err => err)
  },
  // 不良查看
  badSee: async (params: any) => {
    return await service.get(`${baseUrl}api/bad/bad_info`, { params }).then(res => res).catch(err => err)
  },
  // 员工管理
  // 员工列表显示
  staffList: async (params:any) => {
    return await service.get(`${baseUrl}api/Employees/index`,{params}).then(res => res).catch(err => err)
  },
  stafflist: async (data:any) => {
    return await service.post(`${baseUrl}api/Employees/index`,data).then(res => res).catch(err => err)
  },
  // // 员工搜索
  // staffSea: async (params: Object) => {
  //   return await service.post(`${baseUrl}api/Employees/namesearch`, params).then(res => res).catch(err => err)
  // },
  // 员工添加
  staffAdd: async (data: any) => {
    return await service.post(`${baseUrl}api/Employees/add`, data).then(res => res).catch(err => err)
  },
  // 员工编辑
  staffEdit: async (params: any) => {
    return await service.post(`${baseUrl}api/Employees/edit`, params).then(res => res).catch(err => err)
  },
  // 员工删除
  staffDel: async (params: Object) => {
    return await service.post(`${baseUrl}api/Employees/del`, params).then(res => res).catch(err => err)
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
  // 文章列表 (post)
  detailList: async () => {
    return await service.post(`${baseUrl}api/article/article_cate`).then(res => res).catch(err => err)
  },
  // 文章列表（get）
  detaillist: async () => {
    return await service.get(`${baseUrl}api/article/article_cate`).then(res => res).catch(err => err)
  },
  // 添加文章
  AriList: async (params:any) => {
    return await service.get(`${baseUrl}api/article/article_cate_add`,{params}).then(res => res).catch(err => err)
  },
  // 医患列表
  patientList: async (params:any) => {
    return await service.get(`${baseUrl}api/record/records`,{params}).then(res => res).catch(err => err)
  },
    // 搜索+分页
    seachpag: async (data:any) => {
      return await service.post(`${baseUrl}api/record/record`,{data}).then(res => res).catch(err => err)
    },
  // 医患添加
  patientAdd: async (data: any) => {
    return await service.post(`${baseUrl}api/record/addrecord`, data).then(res => res).catch(err => err)
  },
  // 选择科室,投诉事件
  selDep: async () => {
    return await service.get(`${baseUrl}api/record/addrecord`).then(res => res).catch(err => err)
  },
  // 点击上传附件按钮
  upLode: async (params: any) => {
    return await service.get(`${baseUrl}api/record/upload_attachment`, { params }).then(res => res).catch(err => err)
  },
  // 上传附件 确定
  uplode: async (data: any) => {
    return await service.post(`${baseUrl}api/record/upload_attachment`, data).then(res => res).catch(err => err)
  },
  // 医患详情
  details: async (data: any) => {
    return await service.post(`${baseUrl}api/record/record_details`, data).then(res => res).catch(err => err)
  },
  // 角色权限
  rolepowlist: async () => {
    return await service.get(`${baseUrl}api/part/displayauthgroup`).then(res => res).catch(err => err)
  },

  // 文件库新增分类list
  doclist: async () => {
    return await service.get(`${baseUrl}api/fileclass/lists`).then(res => res).catch(err => err)
  },
  // 文件库新增分类treelist
  docaddtree: async () => {
    return await service.get(`${baseUrl}user/Fileclass/classtree`).then(res => res).catch(err => err)
  },
  // 文件库新增分类tree
  docadd: async (data: object) => {
    return await service.post(`${baseUrl}api/fileclass/addclass`, data).then(res => res).catch(err => err)
  },
  // 文件库更改状态
  docstatu: async (data: object) => {
    return await service.post(`${baseUrl}api/fileclass/editstatus`, data).then(res => res).catch(err => err)
  },
  // 文件库del
  docdel: async (data: object) => {
    return await service.post(`${baseUrl}api/fileclass/del`, data).then(res => res).catch(err => err)
  },
  // 文件库edit
  docedit: async (params: any) => {
    return await service.get(`${baseUrl}api/fileclass/editclass`, { params }).then(res => res).catch(err => err)
  },
  // 文件库editsave
  doceditsave: async (data: object) => {
    return await service.post(`${baseUrl}api/fileclass/editclass`, data).then(res => res).catch(err => err)
  },
  // 文件库文件list
  filelist: async () => {
    return await service.get(`${baseUrl}api/file/lists`).then(res => res).catch(err => err)
  },
  // 文件库文件分类
  filetree: async () => {
    return await service.get(`${baseUrl}api/file/addfile`).then(res => res).catch(err => err)
  },
  // 文件库文件上传
  fileupload: async (data: object) => {
    return await service.post(`${baseUrl}api/file/addfile`, data).then(res => res).catch(err => err)
  },

  // 文件库
  // 文件列表
  FileList: async () => {
    return await service.get(`${baseUrl}api/file/listS`).then(res => res).catch(err => err)
  },
  // 新建分类列表
  FileAddList: async () => {
    return await service.get(`${baseUrl}api/fileclass/lists`).then(res => res).catch(err => err)
  },
 
}