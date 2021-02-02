(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f0e4b80"],{2876:function(e,t,a){},a583:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category_all"},[a("div",{staticClass:"category_top"},[e._m(0),a("div",{staticClass:"category_top_right"},[a("el-select",{attrs:{placeholder:"选择统计维度"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("查询")])],1)]),a("hr",{staticClass:"category_hr"}),a("div",{staticClass:"category_screen"},[a("div",{staticClass:"category_screen_one"},[a("p",[e._v("投诉类别")]),a("el-select",{attrs:{placeholder:"请选择",span:8},model:{value:e.catone,callback:function(t){e.catone=t},expression:"catone"}},e._l(e.category,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"category_screen_two"},[a("p",[e._v("投诉科室")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.deptwo,callback:function(t){e.deptwo=t},expression:"deptwo"}},e._l(e.Department,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"category_screen_three"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.datthree,callback:function(t){e.datthree=t},expression:"datthree"}},e._l(e.date,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"category_screen_four"},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)]),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}})],1),e._m(1),a("div",{staticClass:"category_statistics"},[e._m(2),a("div",{staticClass:"category_statistics_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"序号"}}),a("el-table-column",{attrs:{prop:"name",label:"科室名称"}}),a("el-table-column",{attrs:{prop:"service",label:"服务态度"}}),a("el-table-column",{attrs:{prop:"patient",label:"医患沟通"}}),a("el-table-column",{attrs:{prop:"ethics",label:"医德医风"}}),a("el-table-column",{attrs:{prop:"cost",label:"费用"}}),a("el-table-column",{attrs:{prop:"disputes",label:"技术争议/并发症"}}),a("el-table-column",{attrs:{prop:"system",label:"核心制度"}}),a("el-table-column",{attrs:{prop:"reason",label:"患方原因"}}),a("el-table-column",{attrs:{prop:"other",label:"其他"}})],1)],1),a("div",{staticClass:"category_statistics_paging"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[8,10,20],"page-size":8,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.length}})],1)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category_top_left"},[a("h5",[e._v("投诉类别与科室统计")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category_chart"},[a("div",{attrs:{id:"main1"}}),a("div",{attrs:{id:"main2"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category_statistics_top"},[a("h6",[e._v("科室投诉类别统计")])])}],i=(a("0d03"),a("2876"),{components:{},data:function(){return{options:[{value:"选项1",label:"患者基本信息统计"},{value:"选项2",label:"患者疾病信息统计"},{value:"选项3",label:"被投诉医护人员统计"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",category:[{value:"选项1",label:"服务态度"},{value:"选项2",label:"医患沟通"},{value:"选项3",label:"医德医风"},{value:"选项4",label:"费用"}],catone:"",Department:[{value:"选项1",label:"门诊"},{value:"选项2",label:"办公室"},{value:"选项3",label:"医务处"}],deptwo:"",date:[{value:"选项1",label:"投诉日期"},{value:"选项2",label:"事发日期"}],datthree:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},value1:"",value2:"",tableData:[{id:"1",name:"医务处",service:"OAO就",patient:"12",ethics:"324",cost:"12",disputes:"21",system:"334",reason:"12",other:"12"},{id:"1",name:"医务处",service:"OAO就",patient:"12",ethics:"324",cost:"12",disputes:"21",system:"334",reason:"12",other:"12"},{id:"1",name:"医务处",service:"OAO就",patient:"12",ethics:"324",cost:"12",disputes:"21",system:"334",reason:"12",other:"12"},{id:"1",name:"医务处",service:"OAO就",patient:"12",ethics:"324",cost:"12",disputes:"21",system:"334",reason:"12",other:"12"}],currentPage:1}},methods:{drawChart:function(){var e=this.$echarts.init(document.getElementById("main1")),t={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#fff"}}},title:{text:"投诉类别统计",padding:20,y:"left"},legend:{icon:"rect",itemWidth:10,itemHeight:5,itemGap:20,data:["投诉","纠纷"],textStyle:{},right:"40%",top:"4%"},xAxis:[{type:"category",data:["服务态度","医患沟通","费用","技术争议","核心制度","患方原因","其他"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:40,interval:5,axisLabel:{formatter:"{value}"}}],series:[{name:"投诉",type:"bar",barWidth:"30%",data:[10,12,24,12,14,17,5]},{name:"纠纷",type:"bar",barWidth:"30%",data:[12,23,14,12,20,27,26]}],color:["#3aa1ff","#4ecb73"]};e.setOption(t)},drawChart1:function(){var e=echarts.init(document.getElementById("main2"));e.setOption({title:{text:"投诉类别占比",y:"left",padding:20},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",bottom:"bottom",data:["服务态度","医患沟通","医德医风","费用","技术争议","患方原因"],textStyle:{fontSize:14},left:30,itemWidth:12,itemHeight:5,radius:5},series:[{name:"one",type:"pie",radius:"60%",center:["50%","45%"],data:[{value:30.16,name:"技术争议"},{value:6.35,name:"患方原因"},{value:11.11,name:"服务态度"},{value:12.7,name:"医患沟通"},{value:15.87,name:"医德医风"},{value:23.81,name:"费用"}],itemStyle:{emphasis:{shadowBlur:100,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.2)"},normal:{color:function(e){var t=["#36cbcb","#4ecb73","#fbd437","#f2637b","#975fe5","#3aa1ff"];return t[e.dataIndex]}}}}]})}},mounted:function(){this.drawChart1(),this.drawChart()}}),r=i,n=a("2877"),o=Object(n["a"])(r,l,s,!1,null,"71959266",null);t["default"]=o.exports}}]);