(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b24b0ae"],{"4f8a":function(e,t,s){},5371:function(e,t,s){"use strict";var a=s("59c3"),n=s.n(a);n.a},"59c3":function(e,t,s){},6775:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"personall"},[s("userthre",{attrs:{headTitle:e.pageTitle}}),s("div",{staticClass:"personmain"},[s("el-form",{ref:"form"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"员工编号",disabled:""}},[s("el-input",{staticClass:"dialog-input-text",attrs:{type:"input",autosize:"",placeholder:"10001",disabled:""},model:{value:e.jobnum,callback:function(t){e.jobnum=t},expression:"jobnum"}})],1)],1),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"手机号码",required:""}},[s("el-input",{staticClass:"dialog-input-text",attrs:{type:"input",autosize:"",disabled:""},model:{value:e.personPhoneipt,callback:function(t){e.personPhoneipt=t},expression:"personPhoneipt"}})],1)],1),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"电子邮箱",required:""}},[s("el-input",{staticClass:"dialog-input-text",attrs:{type:"input",autosize:"",disabled:""},model:{value:e.personEmailipt,callback:function(t){e.personEmailipt=t},expression:"personEmailipt"}})],1)],1),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"证件号码",required:""}},[s("el-input",{staticClass:"dialog-input-text",attrs:{type:"input",autosize:"",disabled:""},model:{value:e.personCardipt,callback:function(t){e.personCardipt=t},expression:"personCardipt"}})],1)],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"员工姓名",required:""}},[s("el-input",{staticClass:"dialog-input-text",attrs:{type:"input",autosize:""},model:{value:e.personNameipt,callback:function(t){e.personNameipt=t},expression:"personNameipt"}})],1)],1),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"年龄"}},[s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.personAgeipt,callback:function(t){e.personAgeipt=t},expression:"personAgeipt"}},[s("template",{slot:"append"})],2)],1)],1),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"性别",required:""}},[s("el-select",{staticClass:"dialog-input-text",staticStyle:{"margin-top":"40px"},attrs:{type:"input",autosize:"",placeholder:"请选择"},on:{change:e.changesex},model:{value:e.persongense,callback:function(t){e.persongense=t},expression:"persongense"}},e._l(e.optiongen,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"职位",required:""}},[s("el-input",{staticClass:"dialog-input-text",attrs:{type:"input",autosize:""},model:{value:e.personPositioniPt,callback:function(t){e.personPositioniPt=t},expression:"personPositioniPt"}})],1)],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"地址",required:""}},[s("el-cascader",{staticClass:"dialog-input-text",staticStyle:{display:"block",position:"relative","font-size":"14px","line-height":"40px"},attrs:{type:"input",autosize:"",options:e.options},on:{change:e.handleChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1)],1),s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:"详细地址",required:""}},[s("el-input",{staticClass:"dialog-input-text",attrs:{type:"input",autosize:""},model:{value:e.personaddreiPt,callback:function(t){e.personaddreiPt=t},expression:"personaddreiPt"}})],1)],1),s("el-col",{attrs:{span:8}})],1)],1)],1),s("div",{staticClass:"person_button"},[s("el-button",{staticClass:"persongr",attrs:{type:"primary",size:"medium",icon:"iconfont el-icon-hospital-passwordbaocun"},on:{click:e.personsave}},[e._v("保存 ")]),s("el-button",{staticClass:"personb",attrs:{type:"primary",size:"medium",icon:"iconfont el-icon-hospital-passwordai207"},on:{click:e.personback}},[e._v("返回 ")])],1)],1)},n=[],o=(s("b0c0"),s("96b5")),i=s("6022"),r=s("ef6c"),l=(s("4328"),{components:{userthre:o["a"]},inject:["reload"],data:function(){return{pageTitle:"个人信息",personNameipt:"",personAgeipt:"",personagesel:"",persongensel:"",persongense:"",personPhoneipt:"",personEmailipt:"",personCardipt:"",personPositioniPt:"",selectedOptions:[],options:r["regionData"],personaddreiPt:"",jobnum:"",optiongen:[{value:"1",label:"男"},{value:"0",label:"女"},{value:"2",label:"保密"}]}},created:function(){var e=this;i["a"].personxq().then((function(t){console.log(t),e.personNameipt=t.data.name,e.personAgeipt=t.data.age,e.personPhoneipt=t.data.phone,e.personEmailipt=t.data.email,e.personCardipt=t.data.cardnumber,e.personPositioniPt=t.data.position,e.personaddreiPt=t.data.eraddress,e.persongense=t.data.sex.name,e.persongensel=t.data.sex.number,e.selectedOptions=t.data.address,e.jobnum=t.data.job_number,console.log(e.persongensel)}))},methods:{changesex:function(){console.log(this.persongense),this.persongensel=this.persongense},personsave:function(){var e=this,t={name:this.personNameipt,age:this.personAgeipt,sex:this.persongensel,position:this.personPositioniPt,eraddress:this.personaddreiPt,address:this.selectedOptions};console.log(t),i["a"].changeinfor(t).then((function(t){20010==t.code?(e.$message({type:"success",message:t.msg,duration:1e3}),e.reload()):e.$message({type:"warning",message:t.msg,duration:1e3}),console.log(t)}))},handleChange:function(e){console.log(r["CodeToText"][e[0]],r["CodeToText"][e[1]],r["CodeToText"][e[2]]);var t=r["CodeToText"][e[0]]+" "+r["CodeToText"][e[1]]+" "+r["CodeToText"][e[2]];this.address=t,console.log(this.address)},personback:function(){this.$router.push("/dashboard")}}}),p=l,c=(s("d25d"),s("2877")),u=Object(c["a"])(p,a,n,!1,null,null,null);t["default"]=u.exports},"96b5":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"userthreThre"},[s("h2",{staticClass:"userthreSpan"},[e._v(e._s(e.headTitle))]),s("div",{staticClass:"userthrehead"},[s("ul",[s("li",{staticClass:"userthregr",on:{click:e.information}},[e._v("个人信息")]),s("li",{staticClass:"userthreb",on:{click:e.accountman}},[e._v("账户管理")]),s("li",{staticClass:"userthrec",on:{click:e.notifica}},[e._v("消息通知")])])])])])},n=[],o={props:["headTitle"],data:function(){return{}},methods:{information:function(){this.$router.push("/Personal")},accountman:function(){this.$router.push("/Account")},notifica:function(){this.$router.push("/Notify")}}},i=o,r=(s("5371"),s("2877")),l=Object(r["a"])(i,a,n,!1,null,"704da915",null);t["a"]=l.exports},d25d:function(e,t,s){"use strict";var a=s("4f8a"),n=s.n(a);n.a}}]);