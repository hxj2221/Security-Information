(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60acbf3f"],{4320:function(t,e,a){},"9ada":function(t,e,a){"use strict";a.r(e);var l,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Connent",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],on:{abcClick:t.myClick1,abClick:t.mydetails}}),a("Add",{directives:[{name:"show",rawName:"v-show",value:t.isShows,expression:"isShows"}],on:{abcClick:t.myClick}}),a("Form",{directives:[{name:"show",rawName:"v-show",value:t.isdetails,expression:"isdetails"}],on:{upper:t.one}})],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"connent_all"},[a("div",{staticClass:"connent_top"},[t._m(0),a("div",{staticClass:"connent_top_right"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus"},on:{click:function(e){return t.addRecord()}}},[t._v("新增 ")]),a("el-button",{attrs:{type:"primary",icon:"iconfont el-icon-hospital-passwordexport"}},[t._v("导出")])],1)]),a("hr",{staticClass:"connent_hr"}),a("div",{staticClass:"connent_Tableall"},[a("div",{staticClass:"seach"},[a("p",[t._v("沟通日期")]),a("div",{staticClass:"block"},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.seachTime,callback:function(e){t.seachTime=e},expression:"seachTime"}}),a("el-input",{attrs:{maxlength:"10",placeholder:"输入患者姓名"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.searchBtn()}}})],1)]),a("div",{staticClass:"connent_myTable"},[a("el-table",{attrs:{data:t.tableData,"max-height":"545","header-cell-style":t.getRowClass}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"50"}}),a("el-table-column",{attrs:{label:"记录编号",prop:"number"}}),a("el-table-column",{attrs:{label:"患者姓名",prop:"patient_name"}}),a("el-table-column",{attrs:{label:"主持人",prop:"hosp_name"}}),a("el-table-column",{attrs:{label:"记录人",prop:"note_taker"}}),a("el-table-column",{attrs:{label:"沟通日期",prop:"communicate_time",formatter:t.getDate}}),a("el-table-column",{attrs:{label:"关联投诉编号",prop:"event_number"}}),a("el-table-column",{attrs:{label:"主要沟通事项",prop:"record_of_communication","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{color:"#666ee8"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.details(e.$index,e.row)}}},[t._v("记录详情 ")]),a("el-button",{staticStyle:{color:"#666ee8"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.complaint(e.$index,e.row)}}},[t._v("投诉详情 ")]),a("el-button",{staticStyle:{color:"#ff0000"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDel(e.$index,t.tableData)}}},[t._v("删除 ")])]}}])})],1)],1),a("div",{staticClass:"connent_paging"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.numberlist,"page-size":t.num,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"connent_top_left"},[a("h6",[t._v("医患沟通记录")])])}],r=(a("a434"),a("0d03"),a("b29e"),a("6022")),c={data:function(){return{tableData:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},seachTime:[],input:"",beginDate:"",endDate:"",numberlist:[8,10,20],currentPage:1,total:0,num:8}},methods:{getRowClass:function(t){var e=t.rowIndex;return 0==e?"background:#c2c5f6;color:#000":""},getDate:function(t,e,a,l){var n=new Date(1e3*a),s=n.getFullYear(),i=n.getMonth()+1;i=i<10?"0"+i:i;var o=n.getDate();return o=o<10?"0"+o:o,s+"-"+i+"-"+o},handleDel:function(t,e){var a=this,l={id:e[t].id};r["a"].patientDel(l).then((function(l){console.log(l),20010==l.code&&a.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.$message({type:"success",message:"删除成功!",delete:e.splice(t,1),duration:1e3})}))["catch"]((function(){a.$message({type:"info",message:"已取消删除",duration:1e3})}))}))},searchBtn:function(){var t=this,e={starttime:this.beginDate,endtime:this.endDate,patient_name:this.input,pageNum:this.currentPage,pageSize:this.number};r["a"].seachpag(e).then((function(e){t.tableData=t.tableDatas=e.data,t.total=e.allNews}))},handleSizeChange:function(t){var e=this;this.num=t;var a={pageSize:t,pageNum:this.currentPage};r["a"].patientList(a).then((function(t){e.tableData=t.data,e.total=t.allNews}))},handleCurrentChange:function(t){var e=this;this.currentPage=t;var a={pageSize:this.num,pageNum:this.currentPage};r["a"].patientList(a).then((function(t){e.tableData=t.data,e.total=t.allNews}))},addRecord:function(){var t=this;r["a"].selDep().then((function(e){t.bus.$emit("selDep",e),t.$emit("abcClick")}))},details:function(t,e){var a=this,l={id:e.id};r["a"].details(l).then((function(t){a.bus.$emit("details",t),a.$emit("abClick")}))},complaint:function(){this.$router.push("/Complaints")}},watch:{seachTime:function(t,e){null!==t?(this.beginDate=t[0],this.endDate=t[1]):(this.beginDate=null,this.endDate=null)}},created:function(){var t=this,e=this.$route.query.event_number;if(e)r["a"].comtocon(e).then((function(e){t.tableData=e.data,t.total=e.allNews}));else{var a={pageSize:this.num,pageNum:this.currentPage};r["a"].patientList(a).then((function(e){t.tableData=e.data,t.total=e.allNews}))}}},d=c,p=a("2877"),u=Object(p["a"])(d,i,o,!1,null,"56c9892a",null),m=u.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addRecord_all"},[t._m(0),a("div",{staticClass:"addRecord_myform"},[a("el-form",{ref:"form",attrs:{model:t.form}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"业务编号",disabled:""}},[a("el-input",{attrs:{disabled:"disabled"},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"沟通日期",required:""}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.communicate_time,callback:function(e){t.$set(t.form,"communicate_time",e)},expression:"form.communicate_time"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"沟通地点",required:""}},[a("el-input",{model:{value:t.form.communication,callback:function(e){t.$set(t.form,"communication",e)},expression:"form.communication"}})],1)],1)],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"患者姓名",required:""}},[a("el-input",{model:{value:t.form.patient_name,callback:function(e){t.$set(t.form,"patient_name",e)},expression:"form.patient_name"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"患者所在科室"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:t.form.department_id,callback:function(e){t.$set(t.form,"department_id",e)},expression:"form.department_id"}},t._l(t.depList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)],1),a("el-col",{attrs:{span:6}})],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"主持人姓名",required:""}},[a("el-input",{model:{value:t.form.hosp_name,callback:function(e){t.$set(t.form,"hosp_name",e)},expression:"form.hosp_name"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"记录人姓名",required:""}},[a("el-input",{model:{value:t.form.note_taker,callback:function(e){t.$set(t.form,"note_taker",e)},expression:"form.note_taker"}})],1)],1),a("el-col",{attrs:{span:6}})],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"主要沟通事项"}},[a("el-input",{attrs:{type:"textarea",max:"200",min:"10"},model:{value:t.form.record_of_communication,callback:function(e){t.$set(t.form,"record_of_communication",e)},expression:"form.record_of_communication"}})],1)],1)],1)],1)],1),a("div",{staticClass:"addRecord_enclosure"},[a("div",{staticClass:"addRecord_enclosure_top"},[t._m(1),a("div",{staticClass:"addRecord_enclosure_top_right"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus"},on:{click:t.upLode_define}},[t._v("上传附件")])],1)]),a("div",{staticClass:"addRecord_enclosure_dialog"},[a("el-dialog",{attrs:{title:"上传文件",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"addRecord_enclosure_dialog_div"},[a("el-form",{ref:"form",attrs:{model:t.dialogForm}},[a("el-form-item",{attrs:{label:"上传文件"}},[a("el-input",{attrs:{placeholder:"请输入文件标题"},model:{value:t.dialogForm.file_name,callback:function(e){t.$set(t.dialogForm,"file_name",e)},expression:"dialogForm.file_name"}})],1),a("el-form-item",{attrs:{label:"文件描述"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入文件描述"},model:{value:t.dialogForm.file_describe,callback:function(e){t.$set(t.dialogForm,"file_describe",e)},expression:"dialogForm.file_describe"}})],1),a("el-form-item",[a("el-upload",{staticClass:"upload-demo",attrs:{headers:t.myHeaders,action:t.imgUrl,limit:1,disabled:""==t.dialogForm.file_name||""==t.dialogForm.file_describe,multiple:!1,"on-change":t.handleChange,"on-exceed":t.handleExceed,"file-list":t.fileList,"http-request":t.getFile,"auto-upload":!1}},[a("el-button",{attrs:{size:"small",type:"primary",disabled:""==t.dialogForm.file_name||""==t.dialogForm.file_describe}},[t._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",disabled:""==t.dialogForm.file_name||""==t.dialogForm.file_describe},on:{click:t.define}},[t._v("确 定")])],1)])],1),a("div",{staticClass:"addRecord_enclosure_content"},[a("el-table",{attrs:{data:t.tableData,"header-cell-style":t.getRowClass}},[a("el-table-column",{attrs:{type:"index",label:"ID",width:"50"}}),a("el-table-column",{attrs:{prop:"file_name",label:"文件名"}}),a("el-table-column",{attrs:{prop:"file_describe",label:"文件描述","show-overflow-tooltip":!0,width:"207"}}),a("el-table-column",{attrs:{prop:"size",label:"文件大小"}}),a("el-table-column",{attrs:{prop:"update_time",label:"更新时间"}}),a("el-table-column",{attrs:{prop:"file_type",label:"文件类型"}}),a("el-table-column",{attrs:{prop:"user.name",label:"上传人员"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{staticStyle:{color:"#666ee8"},attrs:{underline:!1},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("下载")]),a("el-link",{attrs:{underline:!1,type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,t.tableData)}}},[t._v("删除")])]}}])})],1)],1),a("div",{staticClass:"addRecord_enclosure_paging"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[8,10,20],"page-size":8,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])]),a("div",{staticClass:"addRecord_relation"},[t._m(2),a("div",{staticClass:"addRecord_relation_content"},[a("el-table",{attrs:{data:t.tableData1,"header-cell-style":t.getRowClass}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"100"}}),a("el-table-column",{attrs:{label:"事件编码",prop:"event_number"}}),a("el-table-column",{attrs:{label:"投诉人姓名",prop:"complaint_name"}}),a("el-table-column",{attrs:{label:"姓别",prop:"sex"}}),a("el-table-column",{attrs:{label:"年龄",prop:"age"}}),a("el-table-column",{attrs:{label:"手机号码",prop:"complaint_phone"}}),a("el-table-column",{attrs:{label:"投诉科室",prop:"department_id"}}),a("el-table-column",{attrs:{label:"信息来源",prop:"complaint_type.title"}}),a("el-table-column",{attrs:{label:"投诉时间",prop:"create_time"}}),a("el-table-column",{attrs:{label:"流转部门",prop:"pass_names"}}),a("el-table-column",{attrs:{label:"事件状态",prop:"state.title"}}),a("el-table-column",{staticStyle:{"font-size":"12px"},attrs:{label:"操作",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{staticStyle:{color:"#666ee8"},attrs:{underline:!1},on:{click:function(a){return t.handleSee(e.$index,e.row)}}},[t._v("查看")])]}}])})],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus"},on:{click:t.addevent}},[t._v("添加投诉信息")]),a("el-dialog",{attrs:{title:"关联投诉信息",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.gridData},on:{"selection-change":t.updatehandleSelectionChange,select:t.select,"select-all":t.selectAll}},[a("el-table-column",{attrs:{type:"selection"}}),a("el-table-column",{attrs:{label:"事件编码",prop:"event_number"}}),a("el-table-column",{attrs:{prop:"complaint_name",label:"投诉人姓名"}}),a("el-table-column",{attrs:{prop:"department_id",label:"投诉科室"}}),a("el-table-column",{attrs:{prop:"complaint_type.title",label:"信息来源"}}),a("el-table-column",{attrs:{prop:"state.title",label:"事件状态"}})],1),a("div",{staticClass:"diog_button"},[a("el-button",{on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("返回")]),a("el-button",{attrs:{type:"primary"},on:{click:t.event}},[t._v("保存")])],1)],1)],1)]),a("div",{staticClass:"addRecord_button"},[a("div",{staticClass:"button_stlye"},[a("el-button",{attrs:{type:"primary",icon:"iconfont el-icon-hospital-passwordbaocun"},on:{click:t.mysubmit}},[t._v("提交 ")]),a("el-button",{attrs:{type:"primary",icon:"iconfont el-icon-hospital-passwordai207"},on:{click:t.mySubmit}},[t._v("返回 ")])],1)])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addRecord_top"},[a("h4",[t._v("基本信息")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addRecord_enclosure_top_left"},[a("h5",[t._v("附件信息")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addRecord_relation_top"},[a("h2",[t._v("关联投诉信息")])])}],_=(a("d3b7"),a("4795"),a("2fa7")),h=(a("4320"),sessionStorage.getItem("token")),g={components:{},inject:["reload"],props:{},data:function(){return{val:{},event_number:"",gridData:[],dialogTableVisible:!1,imgUrl:"http://bt1.wlqqlp.com:8082/api/record/event_base64_uploadfiles",myHeaders:{Authorization:h},form:{number:"",communicate_time:"",communication:"",department_id:"",patient_name:"",hosp_name:"",note_taker:"",record_of_communication:""},depList:[],tableData:[],currentPage:1,tableData1:[],dialogVisible:!1,dialogForm:{},fileList:[],file:{}}},methods:(l={addevent:function(){var t=this;this.dialogTableVisible=!0,r["a"].Related().then((function(e){console.log(e),t.gridData=e.event}))},event:function(){var t=this;console.log(this.val);var e={event_number:this.val[0].event_number};r["a"].related(e).then((function(e){console.log(e),t.tableData1=e.event,t.tableData=e.recordEnclosure,t.event_number=e.event[0].event_number,t.dialogTableVisible=!1}))},updatehandleSelectionChange:function(t){this.val=t},select:function(t,e){if(t.length>1){var a=t.shift();this.$refs.multipleTable.toggleRowSelection(a,!1)}},selectAll:function(t){t.length>1&&(t.length=1)},getFile:function(t){this.file=t},getRowClass:function(t){var e=t.rowIndex;return 0==e?"background:#c2c5f6;color:#000":""}},Object(_["a"])(l,"getFile",(function(t){this.file=t,console.log(this.file)})),Object(_["a"])(l,"handleEdit",(function(t,e){})),Object(_["a"])(l,"handleDelete",(function(t,e){var a=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.$message({type:"success",message:"删除成功!",delete:e.splice(t,1),duration:1e3})}))["catch"]((function(){a.$message({type:"info",message:"已取消删除",duration:1e3})}))})),Object(_["a"])(l,"handleSizeChange",(function(t){console.log("每页 ".concat(t," 条"))})),Object(_["a"])(l,"handleCurrentChange",(function(t){console.log("当前页: ".concat(t))})),Object(_["a"])(l,"handleSee",(function(t,e){console.log(t,e)})),Object(_["a"])(l,"mySubmit",(function(){this.$emit("abcClick")})),Object(_["a"])(l,"mysubmit",(function(){var t=this,e={number:this.form.number,event_number:this.event_number,communicate_time:this.form.communicate_time,communication:this.form.communication,department_id:this.form.department_id,patient_name:this.form.patient_name,hosp_name:this.form.hosp_name,note_taker:this.form.note_taker,record_of_communication:this.form.record_of_communication};r["a"].patientAdd(e).then((function(e){if(console.log(e),20010==e.code){var a=t.$loading({lock:!0,text:"保存中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout((function(){a.close(),t.$emit("abcClick"),t.reload()}),2e3)}else t.$message({message:e.msg,type:"error",duration:1e3})}))})),Object(_["a"])(l,"upLode_define",(function(){var t=this,e={event_number:this.event_number};console.log(e),r["a"].upLode(e).then((function(e){console.log(e),t.dialogVisible=!0}))})),Object(_["a"])(l,"handleExceed",(function(){this.$message({message:"上传文件超出",type:"error",duration:1e3})})),Object(_["a"])(l,"handleChange",(function(t,e){this.file=e[0]})),Object(_["a"])(l,"getBase64",(function(t){return new Promise((function(e,a){var l=new FileReader,n="";l.readAsDataURL(t),l.onload=function(){n=l.result},l.onerror=function(t){a(t)},l.onloadend=function(){e(n)}}))})),Object(_["a"])(l,"define",(function(){var t=this;this.getBase64(this.file.raw).then((function(e){console.log(e);var a={event_number:t.event_number,base64_file:e,file_name:t.dialogForm.file_name,file_describe:t.dialogForm.file_describe};console.log(a),r["a"].uplode(a).then((function(e){console.log(e),20010==e.code?(t.$message({message:"上传附件成功",type:"success",duration:1e3}),t.dialogVisible=!1):20401==e.code?(t.$message({message:"请重新登陆",type:"error",duration:1e3}),t.$router.push("/login")):20403==e.code?(t.$message({message:e.msg,type:"error",duration:1e3}),t.$router.push("/dashboard")):t.$message({message:"上传失败",type:"error",duration:1e3})}))}))})),Object(_["a"])(l,"handleExceed",(function(){})),Object(_["a"])(l,"handleClose",(function(t){this.$confirm("确认关闭？").then((function(e){t()}))["catch"]((function(t){}))})),l),created:function(){var t=this;this.bus.$on("selDep",(function(e){console.log(e),t.form.number=e.number,t.depList=e.department,t.tableData1=e.event}))}},v=g,C=Object(p["a"])(v,b,f,!1,null,"1e0bee68",null),w=C.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lookForm_all"},[a("div",{staticClass:"lookForm_all_in"},[a("div",{staticClass:"lookForm_top"},[a("div",{staticClass:"lookForm_top_button"},[t._m(0),a("div",{staticClass:"lookForm_top_button_right"},[a("el-button",{attrs:{type:"primary",icon:"iconfont el-icon-hospital-passworddayin"}},[t._v("打印记录表")]),a("el-button",{attrs:{type:"primary",icon:"iconfont el-icon-hospital-passwordai207"},on:{click:t.upper}},[t._v("返回 ")])],1)]),a("div",{staticClass:"lookForm_top_content"},[a("el-form",{ref:"form",attrs:{model:t.connent}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[t._v("医院名称：")]),t._v(t._s(t.connent.communication))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"})]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[t._v("记录编号：")]),t._v(" "+t._s(t.connent.number)+" ")])])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[t._v("沟通日期：")]),t._v(" "+t._s(t.connent.communicate_time)+" ")])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"})]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[t._v("沟通地点：")]),t._v(" "+t._s(t.connent.communication)+" ")])])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[t._v("患者姓名：")]),t._v(" "+t._s(t.connent.note_taker)+" ")])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"})]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"})])],1)],1)],1)]),a("hr"),a("div",{staticClass:"lookForm_center"},[a("div",{staticClass:"lookForm_center_top"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("b",[t._v("医患沟通记录")])])])]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content bg-purple-light"})]),a("el-col",{attrs:{span:9}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("b",[t._v("记录时间：")]),t._v("2020-11-18 13:30:26")])])])],1)],1),a("div",{staticClass:"lookForm_center_form"},[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"label"},[t._v("主持人")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("span",{staticClass:"value"},[t._v(t._s(t.hosp_name))])])])],1),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"label"},[t._v("记录人")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("span",{staticClass:"value"},[t._v(t._s(t.patient_name))])])])],1),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"label"},[t._v("沟通日期")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("span",{staticClass:"value"},[t._v(t._s(t.communicate_time))])])])],1),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"label"},[t._v("沟通地点")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("span",{staticClass:"value"},[t._v(t._s(t.communication))])])])],1),a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"label"},[t._v("沟通记录")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("span",{staticClass:"value"},[t._v(t._s(t.record_of_communication))])])])],1)],1)]),a("hr"),a("div",{staticClass:"lookForm_bottom"},[t._m(1),a("div",{staticClass:"lookForm_bottom_form"},[a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("文件名1")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v("查看")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("文件名2")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v("查看")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("文件名3")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v("查看")])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("文件名4")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v("查看")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("文件名5")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v("查看")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("文件名6")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v("查看")])])])],1)],1)])])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lookForm_top_button_left"},[a("span",[t._v("医院沟通记录")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lookForm_bottom_top"},[a("h6",[t._v("附件信息")])])}],x=(a("d2c0"),{components:{},props:{},data:function(){return{connent:{},communication:"",hosp_name:"",record_of_communication:"",patient_name:"",communicate_time:"",con:[]}},methods:{upper:function(){this.$emit("upper")}},created:function(){var t=this;this.bus.$on("details",(function(e){console.log(e.info),t.connent=e.data,t.hosp_name=e.data.hosp_name,t.patient_name=e.data.hosp_name,t.communicate_time=e.data.communicate_time,t.communication=e.data.communication,t.record_of_communication=e.data.record_of_communication,t.con=e.info}))}}),$=x,D=Object(p["a"])($,y,k,!1,null,"4e2c7ae4",null),S=D.exports,F={components:{Connent:m,Add:w,Form:S},props:{},data:function(){return{isShow:!0,isShows:!1,isdetails:!1}},methods:{myClick:function(){this.isShow=!this.isShow,this.isShows=!this.isShows},myClick1:function(){this.isShow=!this.isShow,this.isShows=!this.isShows},mydetails:function(){this.isShow=!1,this.isdetails=!this.isdetails},one:function(){this.isdetails=!this.isdetails,this.isShow=!this.isShow}}},j=F,R=Object(p["a"])(j,n,s,!1,null,"0619d782",null);e["default"]=R.exports},b29e:function(t,e,a){},d2c0:function(t,e,a){}}]);