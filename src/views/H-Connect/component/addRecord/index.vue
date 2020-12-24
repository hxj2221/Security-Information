<template>
  <div class="all">
    <!-- top -->
    <div class="top">
      <h4>基本信息</h4>
    </div>
    <!-- 表单 -->
    <div class="myform">
      <el-form ref="form" :model="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="业务编号" disabled>
              <el-input v-model="form.ywbh"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="沟通日期" required>
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="沟通地点" required>
              <el-input v-model="form.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="患者姓名" required>
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="患者所在科室">
              <el-select v-model="form.ks" placeholder="活动区域">
                <el-option label="区域一" value="one"></el-option>
                <el-option label="区域二" value="two"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="主持人姓名" required>
              <el-input v-model="form.name1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="记录人姓名" required>
              <el-input v-model="form.name2"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="主要沟通事项">
              <el-input
                type="textarea"
                v-model="form.desc"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 表格  附件信息 -->
    <div class="enclosure">
      <div class="enclosure_top">
        <div class="enclosure_top_left">
          <h5>附件信息</h5>
        </div>
        <div class="enclosure_top_right">
          <el-button type="primary" size="small" icon="el-icon-plus"
            >主要按钮</el-button
          >
        </div>
      </div>
      <div class="enclosure_content">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="ID">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="文件名">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.file }}</span>
            </template>
          </el-table-column>
          <el-table-column label="文件描述">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>{{ scope.row.filecontent }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.files }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="文件大小">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.filesize }}</span>
            </template>
          </el-table-column>
          <el-table-column label="更新时间">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="文件类型">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.filetype }}</span>
            </template>
          </el-table-column>
          <el-table-column label="上传人员">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-link
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
                >下载</el-link
              >
              <el-link
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-link
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="enclosure_paging">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 表格  关联投诉信息 -->
    <div class="relation">
      <div class="relation_top">
        <h5>关联投诉信息</h5>
      </div>
      <div class="relation_content">
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column label="序号">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="事件编码" width="80px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.sjbm }}</span>
            </template>
          </el-table-column>

          <el-table-column label="投诉人姓名">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓别">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.sex }}</span>
            </template>
          </el-table-column>
          <el-table-column label="年龄">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.age }}</span>
            </template>
          </el-table-column>
          <el-table-column label="手机号码">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.phone }}</span>
            </template>
          </el-table-column>
          <el-table-column label="投诉科室">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.tsks }}</span>
            </template>
          </el-table-column>
          <el-table-column label="信息来源">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.xxly }}</span>
            </template>
          </el-table-column>
          <el-table-column label="投诉时间" width="80px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="流转部门">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.lzbm }}</span>
            </template>
          </el-table-column>
          <el-table-column label="事件状态">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.type }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-link
                type="primary"
                @click="handleSee(scope.$index, scope.row)"
                >查看</el-link
              >
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" size="small" icon="el-icon-plusF"
          >添加投诉信息</el-button
        >
      </div>
    </div>
    <!-- 固定定位按钮 -->
    <div class="button">
      <div class="button_stlye">
        <el-button size="small" icon="el-icon-back" @click="mysubmit">返回</el-button>
        <el-button
          type="primary"
          size="small"
          icon="el-icon-document-checked"
          @click="mysubmit"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import "@/views/H-Connect/component/addRecord/css.css";
export default {
  components: {},
  props: {},
  data() {
    return {
      // 表单
      form: {
        ywbh: "",
        date: "",
        address: "",
        name: "",
        ks: { one: "", two: "" },
        name1: "",
        name2: "",
        desc: "",
      },
      // 表格1  附件信息
      tableData: [
        {
          id: "1",
          file: "hhh",
          filecontent: "hauhuhhajkfd",
          files: "123",
          filesize: "120kb",
          date: "2016-05-02",
          filetype: "jpg",
          name: "王小虎",
        },
        {
          id: "2",
          file: "hhh",
          filecontent: "hauhuhhajkfd",
          files: "123",
          filesize: "120kb",
          date: "2016-05-02",
          filetype: "jpg",
          name: "王小虎",
        },
        {
          id: "3",
          file: "hhh",
          filecontent: "hauhuhhajkfd",
          files: "123",
          filesize: "120kb",
          date: "2016-05-02",
          filetype: "jpg",
          name: "王小虎",
        },
        {
          id: "4",
          file: "hhh",
          filecontent: "hauhuhhajkfd",
          files: "123",
          filesize: "120kb",
          date: "2016-05-02",
          filetype: "jpg",
          name: "王小虎",
        },
      ],
      currentPage: 4,
      // 表格2  关联信息
      tableData1: [
        {
          id: "1",
          sjbm: "29102349",
          name: "王小虎",
          sex: "男",
          age: "12",
          phone: "15839431256",
          tsks: "门诊部",
          xxly: "院内投诉",
          date: "2020-12-23",
          lzbm: "医务处",
          type: "处理中",
        },
        {
          id: "1",
          sjbm: "29102349",
          name: "王小虎",
          sex: "男",
          age: "12",
          phone: "15839431256",
          tsks: "门诊部",
          xxly: "院内投诉",
          date: "2020-12-23",
          lzbm: "医务处",
          type: "处理中",
        },
      ],
    };
  },
  methods: {
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSee(index, row) {
      console.log(index, row);
    },

    mysubmit() {
      console.log("哈哈");
      this.$emit("abcClick");
    },
  },
};
</script>
<style scoped>
</style>