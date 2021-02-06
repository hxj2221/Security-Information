<template>
  <div>
    <div class="comlist">
      <div class="Complaints-header clearfix">
        <span>投诉事件</span>
        <slot name="buttom">
          <el-button type="primary" icon="el-icon-circle-plus" class="addcomplaint" 
          >新增</el-button
        >
        </slot>
         <slot name="export">
        <el-button icon="iconfont el-icon-hospital-passwordexport" class="exportcomplaint"   @click="exportcom()"
          >导出</el-button
        >
        </slot>
      </div>
      <slot name="table"></slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
    };
  },

  methods: {
      // 导出事件
    exportcom() {  
      const dataB = JSON.parse(sessionStorage.getItem('tableData'))
      dataB.forEach(element => {
           element.complaint_type=element.complaint_type.title
           element.state=element.state.title
      });
    import('@/vendor/Export2Excel').then(excel => {
      const tHeader = ['事件编号', '投诉人姓名', '性别', '年龄/岁','手机号码','投诉科室','投诉方式','投诉时间','流转部门','事件状态' ]
      const filterVal = ['event_number', 'complaint_name', 'sex', 'age', 'complaint_phone', 'department', 'complaint_type', 'create_time', 'pass_names', 'state' ]
      const list = dataB
      const data = this.formatJson(filterVal, list)
      excel.export_json_to_excel({
        header: tHeader,
        data,
        filename: '业务列表',
        autoWidth: true,
        bookType: 'xlsx'
      })
    })
    },
   formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => {
      return v[j]
    }))
   },
  },
};
</script>

<style scoped>
@import "../css/complaintslist.css";
</style>
