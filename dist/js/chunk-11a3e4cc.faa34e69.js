(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11a3e4cc"],{"6e64":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("main-page",{directives:[{name:"show",rawName:"v-show",value:e.MainShow,expression:"MainShow"}],on:{pageAdd:function(t){return e.add()},pageDetail:function(t){return e.Details()}}}),a("add-ade",{directives:[{name:"show",rawName:"v-show",value:e.adeAdd,expression:"adeAdd"}],on:{pageAdd:function(t){return e.add()}}}),a("detail",{directives:[{name:"show",rawName:"v-show",value:e.detailShow,expression:"detailShow"}],on:{pageDetail:function(t){return e.Details()}}})],1)},i=[],l=(a("959f"),a("c0cc"),a("8eaa"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mainBl"},[a("div",{staticClass:"header"},[a("h4",[e._v("不良事件")]),a("div",{staticClass:"btn"},[a("el-button",{staticClass:"addAde",attrs:{type:"primary",size:"medium",icon:"el-icon-circle-plus"},on:{click:function(t){return e.Add()}}},[e._v("新增 ")]),a("el-button",{staticClass:"exportAde",attrs:{type:"primary",icon:"iconfont el-icon-hospital-passwordexport"},on:{click:e.exportcom}},[e._v("导出")])],1)]),a("div",{staticClass:"searchAll"},[a("el-form",{ref:"form"},[a("div",{staticClass:"searchAll_search"},[a("el-form-item",{attrs:{label:"患者姓名","label-width":"80px"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},on:{clear:e.clean},model:{value:e.patient_name,callback:function(t){e.patient_name=t},expression:"patient_name"}})],1),a("el-form-item",{attrs:{label:"发生地点","label-width":"80px"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{clear:e.clean},model:{value:e.occur_scene,callback:function(t){e.occur_scene=t},expression:"occur_scene"}},[a("el-option",{attrs:{label:"请选择",value:""}}),e._l(e.options,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})}))],2)],1),a("el-form-item",{attrs:{label:"事发日期","label-width":"80px"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{clearable:"",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","picker-options":e.pickerOptions},on:{clear:e.clean},model:{value:e.occur_time,callback:function(t){e.occur_time=t},expression:"occur_time"}})],1)],1),a("div",{staticClass:"searchAll_search"},[a("el-form-item",{attrs:{label:"轻重程度","label-width":"80px"}},[a("el-select",{staticStyle:{width:"562px"},attrs:{clearable:"",placeholder:"请选择"},on:{clear:e.clean},model:{value:e.degree_weight_id,callback:function(t){e.degree_weight_id=t},expression:"degree_weight_id"}},[a("el-option",{attrs:{label:"请选择",value:""}}),e._l(e.options1,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})}))],2)],1),a("el-button",{staticClass:"searchbtn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.screen()}}})],1)])],1),a("div",{staticStyle:{"min-height":"490px"}},[a("el-table",{staticClass:"elTable",attrs:{"max-height":"490",data:e.tableData,"header-cell-style":e.getRowClass}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),a("el-table-column",{attrs:{prop:"event_num",label:"事件编码",width:"180"}}),a("el-table-column",{attrs:{prop:"patient_name",label:"患者姓名"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄"}}),a("el-table-column",{attrs:{prop:"occur_time",formatter:e.getDate,label:"事发日期",width:"180"}}),a("el-table-column",{attrs:{prop:"occurscene.title",label:"发生场所"}}),a("el-table-column",{attrs:{prop:"degreeweight.title",label:"轻重程度","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"create_time",label:"上报时间",width:"180"}}),a("el-table-column",{attrs:{prop:"department.title",label:"患者科室","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"create_uid",label:"上报人"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{color:"#666ee8"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.$index,t.row)}}},[e._v("查看 ")])]}}])})],1)],1),a("div",{staticClass:"paging"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":e.pageNumList,"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:e.pageCount},on:{"size-change":e.handleSizeChange,"current-change":e.currentChage}})],1)])])}),r=[],n=(a("d81d"),a("6eba"),a("f4b3"),a("0d03"),a("d3b7"),a("ac1f"),a("5319"),a("bf19"),a("6022")),o=(a("c1df"),{components:{},props:{},data:function(){return{patient_name:"",occur_time:[],starttime:"",endtime:"",occur_scene:"",degree_weight_id:"",pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},options:[],options1:[],tableData:[],details:{},addcon:[],currentPage4:1,pageCount:0,pageNumList:[8,10,20],pageSize:8,eventNum:""}},watch:{occur_time:function(e,t){null!==e?(this.starttime=e[0],this.endtime=e[1]):(this.starttime=null,this.endtime=null)}},methods:{formatDate:function(e){e=1e3*new Date(e);return e},initTime:function(e){var t=new Date(e).getTime(new Date(e)),a=new Date(t+288e5).toJSON().substr(0,19).replace("T"," ").replace(/\./g,"-");return a},exportcom:function(){var e=this,t=this.tableData;console.log(this.tableData);for(var s=new Array,i=0;i<t.length;i++){t[i].occurscen=t[i].occurscene.title,t[i].degreeweigh=t[i].degreeweight.title,t[i].departmen=t[i].department.title;var l=this.formatDate(t[i].occur_time);t[i].occur_tim=this.initTime(l),s.push(t[i])}console.log(s),a.e("chunk-2510fca7").then(a.bind(null,"4bf8")).then((function(t){var a=["事件编号","患者姓名","性别","年龄/岁","事发日期","发生场所","轻重程度","上报时间","患者科室","上报人"],i=["event_num","patient_name","sex","age","occur_tim","occurscen","degreeweigh","create_time","departmen","create_uid"],l=s,r=e.formatJson(i,l);t.export_json_to_excel({header:a,data:r,filename:"业务列表",autoWidth:!0,bookType:"xlsx"})}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},getRowClass:function(e){var t=e.rowIndex;return 0==t?"background:#c2c5f6;color:#000":""},getDate:function(e,t,a,s){var i=new Date(1e3*a),l=i.getFullYear(),r=i.getMonth()+1;r=r<10?"0"+r:r;var n=i.getDate();n=n<10?"0"+n:n;var o=i.getHours(),d=i.getMinutes();d=d<10?"0"+d:d;var c=i.getSeconds();return c=d<10?"0"+c:c,l+"-"+r+"-"+n+" "+o+":"+d+":"+c},Add:function(){var e=this;this.$emit("pageAdd"),n["a"].AdeSel().then((function(t){20010==t.code?e.bus.$emit("eventNum",t.event_num):20401==t.code?(e.$message({message:"请重新登陆",type:"error",duration:1e3}),e.$router.push("/login")):20403==t.code&&(e.$message({message:t.msg,type:"error",duration:1e3}),e.$router.push("/dashboard"))}))},handleClick:function(e,t){var a=this,s={id:t.id};n["a"].badSee(s).then((function(e){20010==e.code?(a.$emit("pageDetail"),a.details=e.data,a.bus.$emit("detail",a.details)):20401==e.code?(a.$message({message:"请重新登陆",type:"error",duration:1e3}),a.$router.push("/login")):20403==e.code&&(a.$message({message:e.msg,type:"error",duration:1e3}),a.$router.push("/dashboard"))}))},screen:function(){var e=this;if(""!==this.occur_time&&null!==this.occur_time||""!==this.patient_name||""!==this.occur_scene||""!==this.degree_weight_id){var t={patient_name:this.patient_name,starttime:this.starttime,endtime:this.endtime,occur_scene:this.occur_scene,degree_weight_id:this.degree_weight_id,pageNum:this.currentPage4,pageSize:this.pageSize};n["a"].AdeSearch(t).then((function(t){console.log(t),20010==t.code?(e.tableData=t.data,e.pageCount=t.allnews):20401==t.code?(e.$message({message:"请重新登陆",type:"error",duration:1e3}),e.$router.push("/login")):20403==t.code&&(e.$message({message:t.msg,type:"error",duration:1e3}),e.$router.push("/dashboard"))}))}else{var a={pageNum:this.currentPage4,pageSize:this.pageSize};n["a"].AdeList(a).then((function(t){20010==t.code?(e.tableData=t.data,e.pageCount=t.allnews):20401==t.code?(e.$message({message:"请重新登陆",type:"error",duration:1e3}),e.$router.push("/login")):20403==t.code&&(e.$message({message:t.msg,type:"error",duration:1e3}),e.$router.push("/dashboard"))}))}},clean:function(){var e=this,t={patient_name:this.patient_name,starttime:this.starttime,endtime:this.endtime,occur_scene:this.occur_scene,degree_weight_id:this.degree_weight_id,pageNum:this.currentPage4,pageSize:this.pageSize};console.log(t),n["a"].AdeSearch(t).then((function(t){20010==t.code?(e.tableData=t.data,e.pageCount=t.allnews):20401==t.code?(e.$message({message:"请重新登陆",type:"error",duration:1e3}),e.$router.push("/login")):20403==t.code&&(e.$message({message:t.msg,type:"error",duration:1e3}),e.$router.push("/dashboard"))}))},currentChage:function(e){var t=this;if(this.currentPage4=e,""!==this.occur_time&&null!==this.occur_time||""!==this.patient_name||""!==this.occur_scene||""!==this.degree_weight_id){var a={patient_name:this.patient_name,starttime:this.starttime,endtime:this.endtime,occur_scene:this.occur_scene,degree_weight_id:this.degree_weight_id,pageNum:this.currentPage4,pageSize:this.pageSize};n["a"].AdeSearch(a).then((function(e){20010==e.code?(t.tableData=e.data,t.pageCount=e.allnews):20401==e.code?(t.$message({message:"请重新登陆",type:"error",duration:1e3}),t.$router.push("/login")):20403==e.code&&(t.$message({message:e.msg,type:"error",duration:1e3}),t.$router.push("/dashboard"))}))}else{var s={pageNum:this.currentPage4,pageSize:this.pageSize};n["a"].AdeList(s).then((function(e){20010==e.code?(t.tableData=e.data,t.pageCount=e.allnews):20401==e.code?(t.$message({message:"请重新登陆",type:"error",duration:1e3}),t.$router.push("/login")):20403==e.code&&(t.$message({message:e.msg,type:"error",duration:1e3}),t.$router.push("/dashboard"))}))}},handleSizeChange:function(e){var t=this;if(this.pageSize=e,""!==this.occur_time&&null!==this.occur_time||""!==this.patient_name||""!==this.occur_scene||""!==this.degree_weight_id){var a={patient_name:this.patient_name,starttime:this.starttime,endtime:this.endtime,occur_scene:this.occur_scene,degree_weight_id:this.degree_weight_id,pageNum:this.currentPage4,pageSize:this.pageSize};n["a"].AdeSearch(a).then((function(e){20010==e.code?(t.tableData=e.data,t.pageCount=e.allnews):20401==e.code?(t.$message({message:"请重新登陆",type:"error",duration:1e3}),t.$router.push("/login")):20403==e.code&&(t.$message({message:e.msg,type:"error",duration:1e3}),t.$router.push("/dashboard"))}))}else{var s={pageNum:this.currentPage4,pageSize:this.pageSize};n["a"].AdeList(s).then((function(e){20010==e.code?(t.tableData=e.data,t.pageCount=e.allnews):20401==e.code?(t.$message({message:"请重新登陆",type:"error",duration:1e3}),t.$router.push("/login")):20403==e.code&&(t.$message({message:e.msg,type:"error",duration:1e3}),t.$router.push("/dashboard"))}))}}},created:function(){var e=this,t={pageNum:this.currentPage4,pageSize:this.pageSize};n["a"].AdeList(t).then((function(t){20401==t.cede?(e.$message({message:"请重新登陆",type:"error",duration:1e3}),e.$router.push("/login")):20403==t.code?(e.$message({message:t.msg,type:"error",duration:1e3}),e.$router.push("/dashboard")):(e.tableData=t.data,e.pageCount=t.allnews)})),n["a"].AdeSel().then((function(t){e.options=t.address,e.options1=t.degree_weight}))}}),d=o,c=a("2877"),p=Object(c["a"])(d,l,r,!1,null,null,null),u=p.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addAll"},[a("div",{staticClass:"formBasics"},[a("h2",[e._v("基本信息")]),a("el-form",{ref:"addAde",staticClass:"form_con",attrs:{model:e.addAde}},[a("el-row",{staticClass:"row-bg info",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"业务编号"}},[a("el-input",{attrs:{disabled:!0,autocomplete:"off"},model:{value:e.addAde.event_num,callback:function(t){e.$set(e.addAde,"event_num",t)},expression:"addAde.event_num"}})],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"不良类型",required:""}},[a("el-select",{attrs:{clearable:""},model:{value:e.addAde.event_type,callback:function(t){e.$set(e.addAde,"event_type",t)},expression:"addAde.event_type"}},e._l(e.options,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"不良发生地点",required:""}},[a("el-select",{attrs:{clearable:""},model:{value:e.addAde.occur_scene,callback:function(t){e.$set(e.addAde,"occur_scene",t)},expression:"addAde.occur_scene"}},e._l(e.options1,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1)])],1),a("el-row",{staticClass:"row-bg info",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"患者姓名",required:""}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.addAde.patient_name,callback:function(t){e.$set(e.addAde,"patient_name",t)},expression:"addAde.patient_name"}})],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"性别",required:""}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.addAde.sex,callback:function(t){e.$set(e.addAde,"sex",t)},expression:"addAde.sex"}},[a("el-option",{attrs:{label:"男",value:"2"}}),a("el-option",{attrs:{label:"女",value:"1"}}),a("el-option",{attrs:{label:"未知",value:"3"}})],1)],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{staticClass:"input-with-select inp",attrs:{placeholder:"请输入内容"},model:{value:e.addAde.age,callback:function(t){e.$set(e.addAde,"age",t)},expression:"addAde.age"}},[a("template",{slot:"append"},[a("el-select",{staticStyle:{width:"60px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.addAde.specific_age,callback:function(t){e.$set(e.addAde,"specific_age",t)},expression:"addAde.specific_age"}},[a("el-option",{attrs:{label:"岁",value:"1"}}),a("el-option",{attrs:{label:"月",value:"2"}}),a("el-option",{attrs:{label:"天",value:"3"}})],1)],1)],2)],1)],1)])],1),a("el-row",{staticClass:"row-bg info",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"入院日期",required:""}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.addAde.hospitalized_time,callback:function(t){e.$set(e.addAde,"hospitalized_time",t)},expression:"addAde.hospitalized_time"}})],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"科室",required:""}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.addAde.department_id,callback:function(t){e.$set(e.addAde,"department_id",t)},expression:"addAde.department_id"}},e._l(e.department,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"床号",required:""}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.addAde.bed_number,callback:function(t){e.$set(e.addAde,"bed_number",t)},expression:"addAde.bed_number"}})],1)],1)])],1),a("el-row",{staticClass:"row-bg info",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"住院号",required:""}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.addAde.admission_id,callback:function(t){e.$set(e.addAde,"admission_id",t)},expression:"addAde.admission_id"}})],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"不良发生时间",required:""}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.addAde.occur_time,callback:function(t){e.$set(e.addAde,"occur_time",t)},expression:"addAde.occur_time"}})],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"报告时间",required:""}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.addAde.create_time,callback:function(t){e.$set(e.addAde,"create_time",t)},expression:"addAde.create_time"}})],1)],1)])],1),a("el-row",{staticClass:"row-bg info",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"主管医师",required:""}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.addAde.Indications_uid,callback:function(t){e.$set(e.addAde,"Indications_uid",t)},expression:"addAde.Indications_uid"}})],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"主管护士",required:""}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.addAde.nurse_uid,callback:function(t){e.$set(e.addAde,"nurse_uid",t)},expression:"addAde.nurse_uid"}})],1)],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"在场相关人员",required:""}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.addAde.stakeholder,callback:function(t){e.$set(e.addAde,"stakeholder",t)},expression:"addAde.stakeholder"}})],1)],1)])],1),a("el-row",{staticClass:"row-bg info info_last",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"上报人",required:""}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.addAde.create_uid,callback:function(t){e.$set(e.addAde,"create_uid",t)},expression:"addAde.create_uid"}})],1)],1)]),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"grid-content last bg-purple"},[a("el-form-item",{attrs:{label:"轻重程度",required:"","label-width":"180"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.addAde.degree_weight_id,callback:function(t){e.$set(e.addAde,"degree_weight_id",t)},expression:"addAde.degree_weight_id"}},e._l(e.options4,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1)])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:22,push:1}},[a("el-form-item",{attrs:{label:"入院诊断",required:""}},[a("el-input",{attrs:{clearable:"",type:"textarea"},model:{value:e.addAde.admitting_diagnosis,callback:function(t){e.$set(e.addAde,"admitting_diagnosis",t)},expression:"addAde.admitting_diagnosis"}})],1)],1)],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:22,push:1}},[a("el-form-item",{attrs:{label:"诊疗经过",required:""}},[a("el-input",{attrs:{clearable:"",type:"textarea"},model:{value:e.addAde.diagnosis_process,callback:function(t){e.$set(e.addAde,"diagnosis_process",t)},expression:"addAde.diagnosis_process"}})],1)],1)],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:22,push:1}},[a("el-form-item",{attrs:{label:"患者目前情况",required:""}},[a("el-input",{attrs:{clearable:"",type:"textarea"},model:{value:e.addAde.patient_situation,callback:function(t){e.$set(e.addAde,"patient_situation",t)},expression:"addAde.patient_situation"}})],1)],1)],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:22,push:1}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"不良事件描述",required:""}},[a("el-input",{attrs:{clearable:"",type:"textarea"},model:{value:e.addAde.event_describe,callback:function(t){e.$set(e.addAde,"event_describe",t)},expression:"addAde.event_describe"}})],1)],1)],1)],1)],1),a("div",{staticClass:"table_info"},[a("h2",[e._v("关联患者信息（调用HIS）")]),a("el-table",{staticClass:"info",attrs:{data:e.tableData,"header-cell-style":e.getRowClass}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"100"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),a("el-table-column",{attrs:{prop:"date",label:"出生日期"}}),a("el-table-column",{attrs:{prop:"phone",label:"联系电话"}}),a("el-table-column",{attrs:{prop:"address",label:"联系方式","show-overflow-tooltip":!0,width:"207"}}),a("el-table-column",{attrs:{prop:"depart",label:"科室"}}),a("el-table-column",{attrs:{prop:"diagnosis",label:"诊断"}}),a("el-table-column",{attrs:{label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{color:"#666ee8"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("取消关联")])]}}])})],1),e._m(0)],1),a("div",{staticClass:"root"},[a("el-button",{staticClass:"AdeSure",attrs:{type:"primary",size:"medium",icon:"iconfont el-icon-hospital-passwordbaocun"},on:{click:e.sure}},[e._v("提交 ")]),a("el-button",{staticClass:"AdeBack",attrs:{type:"primary",size:"medium",icon:"iconfont el-icon-hospital-passwordai207"},on:{click:e.back}},[e._v("返回 ")])],1)])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add"},[a("i",{staticClass:"el-icon-circle-plus-outline"},[a("span",[e._v("添加患者信息")])])])}],_=(a("4328"),{components:{},inject:["reload"],props:{},data:function(){return{addAde:{event_num:"",event_type:"",occur_scene:"",patient_name:"",sex:"",age:"",specific_age:"1",hospitalized_time:"",department_id:"",bed_number:"",admission_id:"",occur_time:"",create_time:"",Indications_uid:"",nurse_uid:"",stakeholder:"",create_uid:"",degree_weight_id:"",admitting_diagnosis:"",diagnosis_process:"",patient_situation:"",event_describe:""},category:[{label:"月",id:2},{label:"天",id:3}],options:[],department:[],options1:[],options4:[],tableData:[{name:"王小虎",sex:"男",date:"1998-05-02 ",phone:"13612345656",address:"城中区人民大道188号9栋302",depart:"门诊/急诊",diagnosis:"高血压"}]}},methods:{getRowClass:function(e){var t=e.rowIndex;return 0==t?"background:#c2c5f6;color:#000":""},sure:function(){var e=this,t=this.addAde;console.log(t),n["a"].badAdd(t).then((function(t){console.log(t),20010==t.code?(e.$emit("pageAdd"),e.reload(),e.$message({message:"添加成功",type:"success",duration:1e3})):20401==t.code?(e.$message({message:"请重新登陆",type:"error",duration:1e3}),e.$router.push("/login")):20403==t.code?(e.$message({message:t.msg,type:"error",duration:1e3}),e.$router.push("/dashboard")):e.$message({message:t.msg,type:"error",duration:1e3})}))},back:function(){this.$emit("pageAdd"),this.addAde.event_num="",this.addAde.event_type="",this.addAde.occur_scene="",this.addAde.patient_name="",this.addAde.sex="",this.addAde.age="",this.addAde.specific_age="",this.addAde.hospitalized_time="",this.addAde.department_id="",this.addAde.bed_number="",this.addAde.admission_id="",this.addAde.occur_time="",this.addAde.create_time="",this.addAde.Indications_uid="",this.addAde.nurse_uid="",this.addAde.stakeholder="",this.addAde.create_uid="",this.addAde.degree_weight_id="",this.addAde.admitting_diagnosis="",this.addAde.diagnosis_process="",this.addAde.patient_situation="",this.addAde.event_describe=""},handleClick:function(e){console.log(e)}},created:function(){var e=this;n["a"].AdeSel().then((function(t){20010==t.cede?(e.options=t.choice_type,e.options1=t.address,e.options4=t.degree_weight,e.department=t.department):20401==t.code?(e.$message({message:"请重新登陆",type:"error",duration:1e3}),e.$router.push("/login")):20403==t.code&&(e.$message({message:t.msg,type:"error",duration:1e3}),e.$router.push("/dashboard"))}));var t=this;this.bus.$on("eventNum",(function(e){console.log(e),t.addAde.event_num=e}))}}),b=_,h=Object(c["a"])(b,g,m,!1,null,null,null),v=h.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"AdeDetail"},[a("div",[a("div",{staticClass:"top"},[a("span",{staticClass:"left"},[e._v("投诉案件调查表")]),a("div",{staticClass:"right"},[a("el-button",{staticClass:"print",attrs:{type:"primary",size:"medium",icon:"iconfont el-icon-hospital-passworddayin"}},[e._v("打印记录表")]),a("el-button",{staticClass:"back",attrs:{type:"primary",size:"medium",icon:"iconfont el-icon-hospital-passwordai207"},on:{click:e.back}},[e._v("返回 ")])],1)])]),a("div",[a("div",{staticClass:"head-txt"},[a("div",{staticClass:"txt"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[e._v("医院名称：")]),e._v("第二人民医院 ")])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"})]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[e._v("事件编号：")]),e._v(e._s(e.event_num)+" ")])])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[e._v("事发时间：")]),e._v(e._s(e._f("Date")(e.occur_time)))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"})]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[e._v("事发地点：")]),e._v(e._s(e.occur_scene)+" ")])])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[e._v("不良类型：")]),e._v(e._s(e.event_type))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light"})]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("span",[e._v("上报人：")]),e._v(e._s(e.create_uid)+" ")])])])],1)],1)]),a("div",{staticClass:"cent_info"},[a("div",{staticStyle:{"padding-bottom":"10px","padding-left":"57px"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("b",[e._v("基本信息")])])])])],1)],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("患者姓名")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.patient_name))])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("性别/年龄")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.sex)+"/"+e._s(e.age)+e._s(e.specific_age))])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("住院号")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.admission_id))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("入院日期")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e._f("date")(e.hospitalized_time)))])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("科室")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.department_id))])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("床号")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.bed_number))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("不良发生时间")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e._f("Date")(e.occur_time)))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("不良报告时间")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e._f("formatDate")(e.create_time)))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("主管医师")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.Indications_uid))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("主管护士")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.nurse_uid))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("在场相关人员")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.stakeholder))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("入院诊断")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.admitting_diagnosis))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("诊疗经过")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.diagnosis_process))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("患者目前情况")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.patient_situation))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("不良事件描述")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[e._v(e._s(e.event_describe))])])])],1)],1),a("div",{staticClass:"cent_info"},[a("div",{staticStyle:{"padding-bottom":"10px","padding-left":"57px"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[a("b",[e._v("关联患者信息")])])])])],1)],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("患者姓名")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("性别")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("年龄")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("医保类型")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("手机")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("最新就诊日期")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("所在病区")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("所在病房")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[e._v("诊断信息")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])])],1)],1)])])},C=[],w=(a("25f0"),{components:{},props:{},data:function(){return{event_num:"",patient_name:"",sex:"",age:"",specific_age:"",event_describe:"",diagnosis_process:"",patient_situation:"",admitting_diagnosis:"",bed_number:"",hospitalized_time:"",department_id:"",stakeholder:"",Indications_uid:"",nurse_uid:"",admission_id:"",create_time:"",occur_time:"",occur_scene:"",event_type:"",create_uid:""}},methods:{back:function(){this.$emit("pageDetail")}},filters:{formatDate:function(e){var t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1;s=s<10?"0"+s:s;var i=t.getDate();return i=i<10?"0"+i:i,a+"-"+s+"-"+i},Date:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=new Date(1e3*e),a=t.getFullYear(),s=t.getMonth()+1;s=s<10?"0"+s:s;var i=t.getDate();return i=i<10?"0"+i:i,a+"-"+s+"-"+i}))},created:function(){var e=this;this.bus.$on("detail",(function(t){console.log(t),e.event_num=t.event_num,e.patient_name=t.patient_name,e.sex=t.sex,e.age=t.age,e.specific_age=t.specific_age,e.event_describe=t.event_describe,e.diagnosis_process=t.diagnosis_process,e.patient_situation=t.patient_situation,e.admitting_diagnosis=t.admitting_diagnosis,e.bed_number=t.bed_number,e.hospitalized_time=t.hospitalized_time,e.department_id=t.department.title,e.stakeholder=t.stakeholder,e.Indications_uid=t.Indications_uid,e.nurse_uid=t.nurse_uid,e.admission_id=t.admission_id,e.create_time=t.create_time,e.occur_time=t.occur_time,e.occur_scene=t.occurscene.title,e.event_type=t.eventtype.title,e.create_uid=t.create_uid}))}}),A=w,y=Object(c["a"])(A,f,C,!1,null,null,null),x=y.exports,$={components:{MainPage:u,AddAde:v,Detail:x},data:function(){return{MainShow:!0,adeAdd:!1,detailShow:!1}},methods:{add:function(){this.MainShow=!this.MainShow,this.adeAdd=!this.adeAdd},Details:function(){this.MainShow=!this.MainShow,this.detailShow=!this.detailShow}},created:function(){var e=this;n["a"].AdeList().then((function(t){20401==t.cede?(e.$message({message:"请重新登陆",type:"error",duration:1e3}),e.$router.push("/login")):20403==t.code&&(e.$message({message:t.msg,type:"error",duration:1e3}),e.$router.push("/dashboard"))}))}},k=$,S=Object(c["a"])(k,s,i,!1,null,"3577b5b8",null);t["default"]=S.exports},"8eaa":function(e,t,a){},"959f":function(e,t,a){},c0cc:function(e,t,a){}}]);