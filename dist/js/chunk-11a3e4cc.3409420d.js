(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11a3e4cc"],{"6e64":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("main-page",{directives:[{name:"show",rawName:"v-show",value:t.MainShow,expression:"MainShow"}],on:{pageAdd:function(e){return t.add()},pageDetail:function(e){return t.Details()}}}),a("add-ade",{directives:[{name:"show",rawName:"v-show",value:t.adeAdd,expression:"adeAdd"}],on:{pageAdd:function(e){return t.add()}}}),a("detail",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],on:{pageDetail:function(e){return t.Details()}}})],1)},i=[],l=(a("959f"),a("c0cc"),a("8eaa"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainBl"},[a("div",{staticClass:"header"},[a("h4",[t._v("不良事件")]),a("div",{staticClass:"btn"},[a("i",{staticClass:"el-icon-circle-plus-outline",on:{click:function(e){return t.Add()}}},[t._v(" "),a("span",[t._v("新增不良")])]),t._m(0)])]),a("div",{staticClass:"searchAll"},[a("el-form",{ref:"form"},[a("div",{staticClass:"searchAll_search"},[a("el-form-item",{attrs:{label:"患者姓名","label-width":"80px"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},model:{value:t.patient_name,callback:function(e){t.patient_name=e},expression:"patient_name"}})],1),a("el-form-item",{attrs:{label:"发生地点","label-width":"80px"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.occur_scene,callback:function(e){t.occur_scene=e},expression:"occur_scene"}},[a("el-option",{attrs:{label:"请选择",value:""}}),t._l(t.options,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],2)],1),a("el-form-item",{attrs:{label:"事发日期","label-width":"80px"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.occur_time,callback:function(e){t.occur_time=e},expression:"occur_time"}})],1)],1),a("div",{staticClass:"searchAll_search"},[a("el-form-item",{attrs:{label:"轻重程度","label-width":"80px"}},[a("el-select",{staticStyle:{width:"562px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.degree_weight_id,callback:function(e){t.degree_weight_id=e},expression:"degree_weight_id"}},[a("el-option",{attrs:{label:"请选择",value:""}}),t._l(t.options1,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],2)],1),a("el-button",{staticClass:"searchbtn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.screen()}}})],1)])],1),a("el-table",{staticClass:"elTable",attrs:{data:t.tableData,"header-cell-style":t.getRowClass}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"event_num",label:"事件编码"}}),a("el-table-column",{attrs:{prop:"patient_name",label:"患者姓名"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄"}}),a("el-table-column",{attrs:{prop:"occur_time",formatter:t.getDate,label:"事发日期",width:"150"}}),a("el-table-column",{attrs:{prop:"occurscene.title",label:"发生场所"}}),a("el-table-column",{attrs:{prop:"degreeweight.title",label:"轻重程度","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{prop:"create_time",label:"上报时间",width:"150"}}),a("el-table-column",{attrs:{prop:"department.title",label:"患者科室"}}),a("el-table-column",{attrs:{prop:"create_uid",label:"上报人"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.$index,e.row)}}},[t._v("查看")])]}}])})],1),a("div",{staticClass:"paging"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage4,"page-sizes":t.pageNumList,"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.pageCount},on:{"size-change":t.handleSizeChange,"current-change":t.currentChage}})],1)])],1)}),n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("i",{staticClass:"fa fa-sign-in",attrs:{"aria-hidden":"true"}},[t._v(" "),a("span",[t._v("导出")])])}],c=(a("6eba"),a("0d03"),a("6022")),r=(a("c1df"),{components:{},props:{},data:function(){return{patient_name:"",occur_time:"",occur_scene:"",degree_weight_id:"",start_Date:{disabledDate:function(t){return t.getTime()>Date.now()}},end_Date:{disabledDate:function(t){return t.getTime()>Date.now()}},options:[],options1:[],tableData:[],details:{},addcon:[],currentPage4:1,pageCount:0,pageNumList:[8,10,20],pageSize:8,eventNum:""}},methods:{getRowClass:function(t){var e=t.rowIndex;return 0==e?"background:#c2c5f6;color:#000":""},getDate:function(t,e,a,s){var i=new Date(1e3*a),l=i.getFullYear(),n=i.getMonth()+1;n=n<10?"0"+n:n;var c=i.getDate();c=c<10?"0"+c:c;var r=i.getHours(),d=i.getMinutes();d=d<10?"0"+d:d;var o=i.getSeconds();return o=d<10?"0"+o:o,l+"-"+n+"-"+c+" "+r+":"+d+":"+o},Add:function(){this.$emit("pageAdd")},handleClick:function(t,e){var a=this,s={id:e.id};c["a"].badSee(s).then((function(t){20010==t.code&&(a.$emit("pageDetail"),a.details=t.data,a.bus.$emit("detail",a.details))}))},screen:function(){var t=this;if(""!==this.occur_time&&null!==this.occur_time||""!==this.patient_name||""!==this.occur_scene||""!==this.degree_weight_id){var e={patient_name:this.patient_name,starttime:this.occur_time[0],endtime:this.occur_time[1],occur_scene:this.occur_scene,degree_weight_id:this.degree_weight_id,pageNum:this.currentPage4,pageSize:this.pageSize};c["a"].AdeSearch(e).then((function(e){t.tableData=e.data,t.pageCount=e.allnews}))}else{var a={pageNum:this.currentPage4,pageSize:this.pageSize};c["a"].AdeList(a).then((function(e){t.tableData=e.data,t.pageCount=e.allnews}))}},currentChage:function(t){var e=this;if(console.log(t),this.currentPage4=t,""!==this.occur_time&&null!==this.occur_time||""!==this.patient_name||""!==this.occur_scene||""!==this.degree_weight_id){var a={patient_name:this.patient_name,starttime:this.occur_time[0],endtime:this.occur_time[1],occur_scene:this.occur_scene,degree_weight_id:this.degree_weight_id,pageNum:this.currentPage4,pageSize:this.pageSize};c["a"].AdeSearch(a).then((function(t){e.tableData=t.data,e.pageCount=t.allnews}))}else{var s={pageNum:this.currentPage4,pageSize:this.pageSize};c["a"].AdeList(s).then((function(t){e.tableData=t.data,e.pageCount=t.allnews}))}},handleSizeChange:function(t){var e=this;if(console.log(t),this.pageSize=t,""!==this.occur_time&&null!==this.occur_time||""!==this.patient_name||""!==this.occur_scene||""!==this.degree_weight_id){var a={patient_name:this.patient_name,starttime:this.occur_time[0],endtime:this.occur_time[1],occur_scene:this.occur_scene,degree_weight_id:this.degree_weight_id,pageNum:this.currentPage4,pageSize:this.pageSize};c["a"].AdeSearch(a).then((function(t){e.tableData=t.data,e.pageCount=t.allnews}))}else{var s={pageNum:this.currentPage4,pageSize:this.pageSize};c["a"].AdeList(s).then((function(t){e.tableData=t.data,e.pageCount=t.allnews}))}}},created:function(){var t=this,e={pageNum:this.currentPage4,pageSize:this.pageSize};c["a"].AdeList(e).then((function(e){t.tableData=e.data,t.pageCount=e.allnews})),c["a"].AdeSel().then((function(e){t.options=e.address,t.options1=e.degree_weight}))}}),d=r,o=a("2877"),p=Object(o["a"])(d,l,n,!1,null,null,null),u=p.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addAll"},[a("div",{staticClass:"formBasics"},[a("h2",[t._v("基本信息")]),a("el-form",{ref:"addAde",staticClass:"form_con",attrs:{model:t.addAde}},[a("div",{staticClass:"info"},[a("el-form-item",{attrs:{label:"业务编号"}},[a("el-input",{attrs:{placeholder:"保存后自动生成",disabled:!0,autocomplete:"off"},model:{value:t.addAde.event_num,callback:function(e){t.$set(t.addAde,"event_num",e)},expression:"addAde.event_num"}})],1),a("el-form-item",{attrs:{label:"不良类型",required:""}},[a("el-select",{model:{value:t.addAde.event_type,callback:function(e){t.$set(t.addAde,"event_type",e)},expression:"addAde.event_type"}},t._l(t.options,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"不良发生地点",required:""}},[a("el-select",{model:{value:t.addAde.occur_scene,callback:function(e){t.$set(t.addAde,"occur_scene",e)},expression:"addAde.occur_scene"}},t._l(t.options1,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)],1),a("div",{staticClass:"info"},[a("el-form-item",{attrs:{label:"患者姓名",required:""}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.addAde.patient_name,callback:function(e){t.$set(t.addAde,"patient_name",e)},expression:"addAde.patient_name"}})],1),a("el-form-item",{attrs:{label:"性别",required:""}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.addAde.sex,callback:function(e){t.$set(t.addAde,"sex",e)},expression:"addAde.sex"}},[a("el-option",{attrs:{label:"男",value:"2"}}),a("el-option",{attrs:{label:"女",value:"1"}}),a("el-option",{attrs:{label:"未知",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{staticClass:"input-with-select inp",attrs:{placeholder:"请输入内容"},model:{value:t.addAde.age,callback:function(e){t.$set(t.addAde,"age",e)},expression:"addAde.age"}},[a("template",{slot:"append"},[a("el-select",{attrs:{slot:"prepend",placeholder:"岁"},slot:"prepend",model:{value:t.addAde.specific_age,callback:function(e){t.$set(t.addAde,"specific_age",e)},expression:"addAde.specific_age"}},[a("el-option",{attrs:{label:"岁",value:"1"}}),a("el-option",{attrs:{label:"月",value:"2"}}),a("el-option",{attrs:{label:"天",value:"3"}})],1)],1)],2)],1)],1),a("div",{staticClass:"info"},[a("el-form-item",{attrs:{label:"入院日期",required:""}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.addAde.hospitalized_time,callback:function(e){t.$set(t.addAde,"hospitalized_time",e)},expression:"addAde.hospitalized_time"}})],1),a("el-form-item",{attrs:{label:"科室",required:""}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.addAde.department_id,callback:function(e){t.$set(t.addAde,"department_id",e)},expression:"addAde.department_id"}},t._l(t.department,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"床号",required:""}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.addAde.bed_number,callback:function(e){t.$set(t.addAde,"bed_number",e)},expression:"addAde.bed_number"}})],1)],1),a("div",{staticClass:"info"},[a("el-form-item",{attrs:{label:"住院号",required:""}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.addAde.admission_id,callback:function(e){t.$set(t.addAde,"admission_id",e)},expression:"addAde.admission_id"}})],1),a("el-form-item",{attrs:{label:"不良发生时间",required:""}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.addAde.occur_time,callback:function(e){t.$set(t.addAde,"occur_time",e)},expression:"addAde.occur_time"}})],1),a("el-form-item",{attrs:{label:"报告时间",required:""}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.addAde.create_time,callback:function(e){t.$set(t.addAde,"create_time",e)},expression:"addAde.create_time"}})],1)],1),a("div",{staticClass:"info"},[a("el-form-item",{attrs:{label:"主管医师",required:""}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.addAde.Indications_uid,callback:function(e){t.$set(t.addAde,"Indications_uid",e)},expression:"addAde.Indications_uid"}})],1),a("el-form-item",{attrs:{label:"主管护士",required:""}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.addAde.nurse_uid,callback:function(e){t.$set(t.addAde,"nurse_uid",e)},expression:"addAde.nurse_uid"}})],1),a("el-form-item",{attrs:{label:"在场相关人员",required:""}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.addAde.stakeholder,callback:function(e){t.$set(t.addAde,"stakeholder",e)},expression:"addAde.stakeholder"}})],1)],1),a("div",{staticClass:"info info_last"},[a("el-form-item",{attrs:{label:"上报人",required:""}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.addAde.create_uid,callback:function(e){t.$set(t.addAde,"create_uid",e)},expression:"addAde.create_uid"}})],1),a("el-form-item",{staticClass:"last",attrs:{label:"轻重程度",required:"","label-width":"180"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.addAde.degree_weight_id,callback:function(e){t.$set(t.addAde,"degree_weight_id",e)},expression:"addAde.degree_weight_id"}},t._l(t.options4,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{width:"90%"},attrs:{label:"入院诊断",required:""}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addAde.admitting_diagnosis,callback:function(e){t.$set(t.addAde,"admitting_diagnosis",e)},expression:"addAde.admitting_diagnosis"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{width:"90%"},attrs:{label:"诊疗经过",required:""}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addAde.diagnosis_process,callback:function(e){t.$set(t.addAde,"diagnosis_process",e)},expression:"addAde.diagnosis_process"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{width:"90%"},attrs:{label:"患者目前情况",required:""}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addAde.patient_situation,callback:function(e){t.$set(t.addAde,"patient_situation",e)},expression:"addAde.patient_situation"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{width:"90%"},attrs:{label:"不良事件描述",required:""}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addAde.event_describe,callback:function(e){t.$set(t.addAde,"event_describe",e)},expression:"addAde.event_describe"}})],1)],1)],1)],1)],1),a("div",{staticClass:"table_info"},[a("h2",[t._v("关联患者信息（调用HIS）")]),a("el-table",{staticClass:"info",attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),a("el-table-column",{attrs:{prop:"date",label:"出生日期"}}),a("el-table-column",{attrs:{prop:"phone",label:"联系电话"}}),a("el-table-column",{attrs:{prop:"address",label:"联系方式","show-overflow-tooltip":!0,width:"207"}}),a("el-table-column",{attrs:{prop:"depart",label:"科室"}}),a("el-table-column",{attrs:{prop:"diagnosis",label:"诊断"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("取消关联")])]}}])})],1),t._m(0)],1),a("div",{staticClass:"root"},[a("i",{staticClass:"fa fa-file-o fa-2",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.sure()}}},[a("span",[t._v("提交")])]),a("i",{staticClass:"fa fa-reply fa-2",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.back()}}},[a("span",[t._v("返回")])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add"},[a("i",{staticClass:"el-icon-circle-plus-outline"},[a("span",[t._v("添加患者信息")])])])}],m=(a("4328"),{components:{},inject:["reload"],props:{},data:function(){return{addAde:{event_num:"",event_type:"",occur_scene:"",patient_name:"",sex:"",age:"",specific_age:"",hospitalized_time:"",department_id:"",bed_number:"",admission_id:"",occur_time:"",create_time:"",Indications_uid:"",nurse_uid:"",stakeholder:"",create_uid:"",degree_weight_id:"",admitting_diagnosis:"",diagnosis_process:"",patient_situation:"",event_describe:""},options:[],department:[],options1:[],options4:[],tableData:[{name:"王小虎",sex:"男",date:"1998-05-02 ",phone:"13612345656",address:"城中区人民大道188号9栋302",depart:"门诊/急诊",diagnosis:"高血压"}]}},methods:{sure:function(){var t=this,e=this.addAde;console.log(e),c["a"].badAdd(e).then((function(e){console.log(e),20010==e.code&&(t.$emit("pageAdd"),t.reload(),t.$message({message:"添加成功",type:"success",duration:1e3}))}))},back:function(){this.$emit("pageAdd")},handleClick:function(t){console.log(t)}},created:function(){var t=this;c["a"].AdeSel().then((function(e){t.options=e.choice_type,t.options1=e.address,t.options4=e.degree_weight,t.department=e.department}))}}),v=m,b=Object(o["a"])(v,_,g,!1,null,null,null),h=b.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"AdeDetail"},[a("div",{staticClass:"top"},[a("span",{staticClass:"left"},[t._v("投诉案件调查表")]),a("div",{staticClass:"right"},[t._m(0),a("i",{staticClass:"fa fa-reply fa-2",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.back()}}},[a("span",[t._v("返回")])])])]),a("div",{staticClass:"head-txt"},[a("div",{staticClass:"txt"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"tit"},[t._v("医院名称：")]),a("span",[t._v("第二人民医院")])])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple-light",staticStyle:{height:"30px"}})]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"tit"},[t._v("事件编号：")]),a("span",[t._v(t._s(t.event_num))])])])],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"tit"},[t._v("事发时间：")]),a("span",[t._v(t._s(t._f("Date")(t.occur_time)))])])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple-light",staticStyle:{height:"30px"}})]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"tit"},[t._v("事发地点：")]),a("span",[t._v(t._s(t.occur_scene))])])])],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"tit"},[t._v("不良类型：")]),a("span",[t._v(t._s(t.event_type))])])]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple-light",staticStyle:{height:"30px"}})]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",{staticClass:"tit"},[t._v("上报人：")]),a("span",[t._v(t._s(t.create_uid))])])])],1)],1)]),a("div",{staticClass:"cent_info"},[a("p",[t._v("基本信息")]),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("患者姓名")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.patient_name))])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("性别/年龄")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.sex)+"/"+t._s(t.age)+t._s(t.specific_age))])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("住院号")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.admission_id))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("入院日期")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t._f("date")(t.hospitalized_time)))])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("科室")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.department_id))])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("床号")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.bed_number))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("不良发生时间")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t._f("Date")(t.occur_time)))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("不良报告时间")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t._f("formatDate")(t.create_time)))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("主管医师")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.Indications_uid))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("主管护士")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.nurse_uid))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("在场相关人员")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.stakeholder))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("入院诊断")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.admitting_diagnosis))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("诊疗经过")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.diagnosis_process))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("患者目前情况")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.patient_situation))])])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("不良事件描述")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"},[t._v(t._s(t.event_describe))])])])],1)],1),a("div",{staticClass:"cent_info"},[a("p",[t._v("关联患者信息")]),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("患者姓名")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("性别")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("年龄")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("医保类型")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("手机")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("最新就诊日期")])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("所在病区")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("所在病房")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])])],1),a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"tit"},[t._v("诊断信息")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"con"})])])],1)],1)])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("i",{staticClass:"el-icon-printer"},[a("span",[t._v("打印记录表")])])}],w=(a("d3b7"),a("25f0"),{components:{},props:{},data:function(){return{event_num:"",patient_name:"",sex:"",age:"",specific_age:"",event_describe:"",diagnosis_process:"",patient_situation:"",admitting_diagnosis:"",bed_number:"",hospitalized_time:"",department_id:"",stakeholder:"",Indications_uid:"",nurse_uid:"",admission_id:"",create_time:"",occur_time:"",occur_scene:"",event_type:"",create_uid:""}},methods:{back:function(){this.$emit("pageDetail")}},filters:{formatDate:function(t){var e=new Date(t),a=e.getFullYear(),s=e.getMonth()+1;s=s<10?"0"+s:s;var i=e.getDate();return i=i<10?"0"+i:i,a+"-"+s+"-"+i},Date:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=new Date(1e3*t),a=e.getFullYear(),s=e.getMonth()+1;s=s<10?"0"+s:s;var i=e.getDate();return i=i<10?"0"+i:i,a+"-"+s+"-"+i}))},created:function(){var t=this;this.bus.$on("detail",(function(e){t.event_num=e.event_num,t.patient_name=e.patient_name,t.sex=e.sex,t.age=e.age,t.specific_age=e.specific_age,t.event_describe=e.event_describe,t.diagnosis_process=e.diagnosis_process,t.patient_situation=e.patient_situation,t.admitting_diagnosis=e.admitting_diagnosis,t.bed_number=e.bed_number,t.hospitalized_time=e.hospitalized_time,t.department_id=e.department_id,t.stakeholder=e.stakeholder,t.Indications_uid=e.Indications_uid,t.nurse_uid=e.nurse_uid,t.admission_id=e.admission_id,t.create_time=e.create_time,t.occur_time=e.occur_time,t.occur_scene=e.department.title,t.event_type=e.eventtype.title,t.create_uid=e.create_uid}))}}),A=w,x=Object(o["a"])(A,f,C,!1,null,null,null),k=x.exports,y={components:{MainPage:u,AddAde:h,Detail:k},data:function(){return{MainShow:!0,adeAdd:!1,detailShow:!1}},methods:{add:function(){this.MainShow=!this.MainShow,this.adeAdd=!this.adeAdd},Details:function(){this.MainShow=!this.MainShow,this.detailShow=!this.detailShow}}},S=y,D=Object(o["a"])(S,s,i,!1,null,"6575874c",null);e["default"]=D.exports},"8eaa":function(t,e,a){},"959f":function(t,e,a){},c0cc:function(t,e,a){}}]);