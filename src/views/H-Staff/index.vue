<template>
  <div class="alBg">
    <div class="headThre">
      <span class="staf">员工列表</span>
      <span class="depart">科室列表</span>
      <span class="role">角色列表</span>
    </div>
    <span class="staffadd">新增</span>
    <hr class="widhr" />
    <div class="straffsssele">
      <span class="staffss">所属科室</span>
      <el-select v-model="value" placeholder="请选择" class="staffsel">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <input
      type="text"
      name="员工姓名"
      value=""
      placeholder="员工姓名"
      class="staffnameipt"
    />
    <span class="staffNamesch">搜索</span>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          type="index"
          :index="indexMethod"
          label="序号"
          width="50"
        ></el-table-column>
        <el-table-column prop="jobNum" label="工号" width="70">
        </el-table-column>
        <el-table-column prop="staffname" label="员工姓名" width="100">
        </el-table-column>
        <el-table-column prop="staffgen" label="员工性别" width="80">
        </el-table-column>
        <el-table-column prop="staffage" label="员工年龄" width="80">
        </el-table-column>
        <el-table-column prop="staffphone" label="手机号码" width="130">
        </el-table-column>
        <el-table-column prop="staffks" label="所属科室" width="100">
        </el-table-column>
        <el-table-column prop="staffrole" label="角色" width="100">
        </el-table-column>
        <el-table-column prop="staffcreatetime" label="创建时间" width="180">
        </el-table-column>
        <el-table-column prop="staffcreatepeop" label="创建人员" width="80">
        </el-table-column>
        <el-table-column prop="status" label="员工状态">
          <template slot-scope="scope">
            <el-switch
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status"
              active-color="#000"
              inactive-color="#fff"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作"
          ><el-button size="mini">编辑</el-button
          ><el-button size="mini" type="danger"
            >删除</el-button
          ></el-table-column
        >
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "测试1",
        },
        {
          value: "选项2",
          label: "测试2",
        },
        {
          value: "选项3",
          label: "测试3",
        },
      ],
      value: "",
      tableData: [
        {
          jobNum: "1001",
          staffname: "王小虎",
          staffgen: "男",
          staffage: "35",
          staffphone: "15512312345",
          staffks: "内科",
          staffrole: "医护人员",
          staffcreatetime: "2020-12-22 16:45:50",
          staffcreatepeop: "李四",
          status: 0,
        },
        {
          jobNum: "1001",
          staffname: "王小虎",
          staffgen: "男",
          staffage: "35",
          staffphone: "15512312345",
          staffks: "内科",
          staffrole: "医护人员",
          staffcreatetime: "2020-12-22 16:45:50",
          staffcreatepeop: "李四",
          status: 1,
        },
      ],
    };
  },

  methods: {
    indexMethod(index) {
      return index * 2;
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.alBg {
  background-color: #fff;
  height: 95%;
  margin-left: -20px;
}
.headThre {
  display: flex;
  font-size: 14px;
  color: #cccccc;
  padding-top: 30px;
  padding-left: 60px;
}

.staf:hover {
  background-color: #666ee8;
}
.staf {
  text-align: center;
  line-height: 27px;
  width: 5vw;
  border-left: 2px solid #ccc;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: 5px;
}

.depart:hover {
  background-color: #666ee8;
}
.depart {
  text-align: center;
  line-height: 27px;
  width: 5vw;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.role:hover {
  background-color: #666ee8;
}
.role {
  text-align: center;
  line-height: 27px;
  width: 5vw;
  border-right: 2px solid #ccc;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: 5px;
}
.staffadd {
  color: #fff;
  font-size: 14px;
  background-color: #666ee8;
  text-align: center;
  line-height: 43px;
  width: 7vw;
  border-radius: 5px;
  position: absolute;
  left: 87%;
  top: 12%;
  height: 3vw;
}
.widhr {
  width: 90%;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 12px;
}
.staffss {
  font-size: 14px;
  color: #000;
  margin-top: 12px;
}
.staffsel {
  width: 10vw;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.straffsssele {
  display: flex;
  margin-left: 5%;
}
.staffnameipt {
  width: 18vw;
  height: 3vw;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-left: 4%;
}
.staffNamesch {
  font-size: 14px;
  color: #fff;
  background-color: #666ee8;
  width: 5vw;
  height: 3.2vw;
  line-height: 47px;
  border-radius: 5px;
}
</style>
