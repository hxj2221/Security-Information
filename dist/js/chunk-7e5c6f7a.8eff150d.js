(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e5c6f7a"],{"00e8":function(t,e,a){},"0cc9":function(t,e,a){},"3ab0":function(t,e,a){"use strict";var s=a("0cc9"),l=a.n(s);l.a},"3ae9":function(t,e,a){},"4e15":function(t,e,a){"use strict";var s=a("3ae9"),l=a.n(s);l.a},7238:function(t,e,a){"use strict";var s=a("00e8"),l=a.n(s);l.a},"9cd5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.departvue?a("div",{staticClass:"departalBg"},[a("headpow"),a("div",{staticClass:"departIptsech"},[a("div",{staticClass:"departIptsech_div"},[a("el-input",{staticClass:"departNameipt",attrs:{placeholder:"请输入科室名称"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("el-button",{staticClass:"departNamesch",attrs:{icon:"el-icon-search"},on:{click:t.departsearch}},[t._v("搜索")])],1)]),a("el-table",{staticClass:"departtable",staticStyle:{width:"96%"},attrs:{data:t.dormitory,"header-cell-style":{background:"#c2c5f6"},"cell-style":{background:"#fff"},"row-key":"id","tree-props":{children:"_child",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{width:"140",label:"序号",type:"index"}}),a("el-table-column",{attrs:{width:"220",prop:"title",label:"科室名称"}}),a("el-table-column",{attrs:{width:"180",prop:"number",label:"科室编号"}}),a("el-table-column",{attrs:{width:"140",prop:"usernumber",label:"员工数量"}}),a("el-table-column",{attrs:{width:"140",prop:"head_department.name",label:"负责人"}}),a("el-table-column",{attrs:{width:"140",prop:"createname.name",label:"创建人员"}}),a("el-table-column",{attrs:{width:"200",prop:"create_time",label:"创建时间"}}),a("el-table-column",{attrs:{width:"180",label:"科室状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){return t.changeSwitch(a,e.row,e.row.id)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}],null,!1,1204060852)}),a("el-table-column",{attrs:{width:"200",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"departEdit",attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.row.id)}}},[t._v("编辑")]),a("el-button",{staticClass:"departDel",attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.row.id)}}},[t._v("删除")])]}}],null,!1,1573845974)})],1)],1):t._e(),a("adddep",{directives:[{name:"show",rawName:"v-show",value:t.adddep,expression:"adddep"}]}),a("editdep",{directives:[{name:"show",rawName:"v-show",value:t.editdep,expression:"editdep"}],attrs:{editchild:t.departchildedit}})],1)},l=[],i=(a("ac1f"),a("841c"),a("4795"),a("f4df")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"departAll"},[a("div",{staticClass:"departaddThre"},[a("span",{staticClass:"departaddSpan"},[t._v("新增科室信息")]),a("div",{staticStyle:{"padding-right":"30px"}},[a("el-button",{staticClass:"departaddgr",on:{click:t.departaddvueyes}},[t._v("保存")]),a("el-button",{staticClass:"departaddb",attrs:{icon:"iconfont el-icon-hospital-passwordai207"},on:{click:t.departaddvueno}},[t._v("返回")])],1)]),a("hr",{staticClass:"staffWidhr"}),a("div",{staticClass:"addmain"},[a("el-form",{ref:"form"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"科室编号",disabled:""}},[a("el-input",{staticClass:"dialog-input-text",attrs:{disabled:"",type:"input",autosize:"",placeholder:"10001"},model:{value:t.numb,callback:function(e){t.numb=e},expression:"numb"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"科室名称",required:""}},[a("el-input",{staticClass:"dialog-input-text",model:{value:t.departNameipt,callback:function(e){t.departNameipt=e},expression:"departNameipt"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"科室排序",required:""}},[a("el-input",{staticClass:"dialog-input-text",model:{value:t.departpxipt,callback:function(e){t.departpxipt=e},expression:"departpxipt"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{label:"科室状态"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.valuestatus,callback:function(e){t.valuestatus=e},expression:"valuestatus"}})],1)],1),a("el-col",{attrs:{span:8}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"ssks",attrs:{label:"上级科室",required:""}},[a("el-select",{staticClass:"dialog-input-text",staticStyle:{"margin-top":"6px"},attrs:{placeholder:"请选择"},on:{change:t.departsel},model:{value:t.adddepartsel,callback:function(e){t.adddepartsel=e},expression:"adddepartsel"}},t._l(t.options,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)],1),a("el-col",{attrs:{span:8}}),a("el-col",{attrs:{span:8}}),a("el-col",{attrs:{span:8}})],1)],1)],1)])},n=[],o=a("6022"),d={inject:["reload"],data:function(){return{departNameipt:"",departpxipt:"",valuestatus:1,adddepartsel:"",options:[],numb:""}},created:function(){var t=this;o["a"].departadd().then((function(e){console.log(e.data),t.options=e.data.lists,t.numb=e.data.number}))},methods:{departsel:function(){console.log(this.adddepartsel)},departaddvueyes:function(){var t=this,e={title:this.departNameipt,status:this.valuestatus,pid:this.adddepartsel,sort:this.departpxipt};o["a"].departsave(e).then((function(e){if(console.log(e),20010==e.code){var a=t.$loading({lock:!0,text:"保存中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout((function(){a.close(),t.reload()}),2e3)}else alert("添加失败")})),this.$parent.fathdepartyes()},departaddvueno:function(){this.$parent.fathdepartno()}}},c=d,p=(a("4e15"),a("2877")),u=Object(p["a"])(c,r,n,!1,null,"53e11580",null),h=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"departAll"},[a("div",{staticClass:"departaddThre"},[a("span",{staticClass:"departaddSpan"},[t._v("编辑科室信息")]),a("div",{staticStyle:{"padding-right":"30px"}},[a("el-button",{staticClass:"departaddgr",on:{click:t.departeditvueyes}},[t._v("保存")]),a("el-button",{staticClass:"departaddb",attrs:{icon:"iconfont el-icon-hospital-passwordai207"},on:{click:t.departeditvueno}},[t._v("返回")])],1)]),a("hr",{staticClass:"staffWidhr"}),a("div",{staticClass:"addmain"},[a("el-form",{ref:"form"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"科室编号",disabled:""}},[a("el-input",{staticClass:"dialog-input-text",attrs:{type:"input",autosize:"",disabled:"",placeholder:"10001"},model:{value:t.ksnum,callback:function(e){t.ksnum=e},expression:"ksnum"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"科室名称",required:""}},[a("el-input",{staticClass:"dialog-input-text",attrs:{type:"input",autosize:""},model:{value:t.departNameipt,callback:function(e){t.departNameipt=e},expression:"departNameipt"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"科室排序",required:""}},[a("el-input",{staticClass:"dialog-input-text",model:{value:t.departpxipt,callback:function(e){t.departpxipt=e},expression:"departpxipt"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{label:"科室状态"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.valuestatus,callback:function(e){t.valuestatus=e},expression:"valuestatus"}})],1)],1),a("el-col",{attrs:{span:8}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"ssks",attrs:{label:"上级科室",required:""}},[a("el-select",{staticClass:"dialog-input-text",staticStyle:{"margin-top":"6px"},attrs:{placeholder:"请选择"},on:{change:t.departsel},model:{value:t.editdepartsel,callback:function(e){t.editdepartsel=e},expression:"editdepartsel"}},t._l(t.options,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"ssks",attrs:{label:"选择负责人",required:""}},[a("el-select",{staticClass:"dialog-input-text",staticStyle:{"margin-top":"6px"},attrs:{placeholder:"请选择"},on:{change:t.chargesel},model:{value:t.editchargetsel,callback:function(e){t.editchargetsel=e},expression:"editchargetsel"}},t._l(t.charge,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),a("el-col",{attrs:{span:8}}),a("el-col",{attrs:{span:8}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}}),a("el-col",{attrs:{span:8}})],1)],1)],1)])},m=[],v=(a("4e82"),{props:["editchild"],inject:["reload"],data:function(){return{departNameipt:"",valuestatus:0,editdepartsel:"",editchargetsel:"",options:[],departpxipt:"",id:"",pid:"",charge:[],ksnum:""}},watch:{editchild:function(t){console.log(t),this.options=t.data.list,this.departNameipt=t.data.info.title,this.valuestatus=t.data.info.status,this.departpxipt=t.data.info.sort,this.id=t.data.info.id,this.pid=t.data.info.pid,this.charge=t.data.userlist,this.ksnum=t.data.info.number}},methods:{departsel:function(){console.log(this.editdepartsel)},chargesel:function(){console.log(this.editchargetsel)},departeditvueyes:function(){var t=this,e={titles:this.departNameipt,status:this.valuestatus,id:this.id,sort:this.departpxipt,pid:this.editdepartsel,head_department:this.editchargetsel};console.log(e),o["a"].departeditsave(e).then((function(e){if(console.log(e),20010==e.code){var a=t.$loading({lock:!0,text:"保存中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout((function(){a.close(),t.reload()}),2e3)}else alert("修改失败");t.$parent.fathdepartyes()}))},departeditvueno:function(){this.$parent.fathdepartno()}}}),b=v,g=(a("7238"),Object(p["a"])(b,f,m,!1,null,"523ad584",null)),w=g.exports,x=(a("4328"),{components:{headpow:i["a"],adddep:h,editdep:w},inject:["reload"],data:function(){return{departvue:!0,currentPage:1,adddep:!1,editdep:!1,currentRow:[],dormitory:[],search:"",departchildedit:[],tables1:[]}},created:function(){var t=this;o["a"].departlist().then((function(e){console.log(e),t.dormitory=e.data}))},computed:{},methods:{onchangeImgFun:function(t){var e=t.target.files[0],a=e.size,s=this;if(a<=52428800){s.errorStr="";var l=new FileReader;l.readAsDataURL(e),l.onloadend=function(){var t=l.result;console.log(t),s.imgStr=t;var e={base64_file:s.imgStr};console.log(e),o["a"].getupimg(e).then((function(t){console.log(t)}))}}else console.log("大小不合适"),s.errorStr="图片大小超出范围"},fathpowadd:function(){this.departvue=!this.departvue,this.adddep=!this.adddep},departsearch:function(){var t=this,e={name:this.search};o["a"].departserc(e).then((function(e){t.dormitory=t.tables1=e.data,console.log(e)}))},fathdepartyes:function(){var t=this;setTimeout((function(){t.adddep=!1,t.editdep=!1,t.departvue=!0}),3e3)},fathdepartno:function(){this.adddep=!1,this.editdep=!1,this.departvue=!0},changeSwitch:function(t,e,a){var s={id:a,status:e.status};console.log(s),o["a"].departstatus(s).then((function(t){console.log(t)})),console.log(e.status),1==e.status?this.$message({type:"success",message:"科室启用成功"}):this.$message.error("科室停用成功")},handleEdit:function(t){var e=this;this.editdep=!0,this.departvue=!1,console.log(t);var a={id:t};o["a"].departedit(a).then((function(t){console.log(t),e.departchildedit=t}))},handleDelete:function(t){var e=this;console.log(t);var a={id:t};console.log(a),o["a"].departdel(a).then((function(t){console.log(t),e.reload()}))}}}),k=x,C=(a("3ab0"),Object(p["a"])(k,s,l,!1,null,null,null));e["default"]=C.exports},"9d5e":function(t,e,a){},f4df:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"powerheadThre"},[a("el-button",{staticClass:"powerStaff",on:{click:t.staff}},[t._v("员工列表")]),a("el-button",{staticClass:"powerDepart",staticStyle:{"margin-left":"-5px"},on:{click:t.depart}},[t._v("科室列表")]),a("el-button",{staticClass:"powerRole",staticStyle:{"margin-left":"-5px"},on:{click:t.role}},[t._v("角色列表")]),a("el-button",{staticClass:"powerRole",staticStyle:{"margin-left":"-5px"},on:{click:t.editpow}},[t._v("编辑权限")]),a("el-button",{staticClass:"powerAdd",attrs:{icon:"el-icon-zoom-in"},on:{click:t.staffadd}},[t._v("新增")])],1),a("hr",{staticClass:"powerWidhr"})])},l=[],i=a("6022"),r={data:function(){return{all:{},job_number:""}},methods:{staffadd:function(){var t=this;i["a"].getrole().then((function(e){console.log(e),t.all=e.data,t.bus.$emit("ReceiveMessage",t.all),t.$parent.fathpowadd()}))},staff:function(){this.$router.push("/Staff")},depart:function(){this.$router.push("/Department")},role:function(){this.$router.push("/Role")},editpow:function(){this.$router.push("/Edit")}}},n=r,o=(a("ffa6"),a("2877")),d=Object(o["a"])(n,s,l,!1,null,"ef05722c",null);e["a"]=d.exports},ffa6:function(t,e,a){"use strict";var s=a("9d5e"),l=a.n(s);l.a}}]);