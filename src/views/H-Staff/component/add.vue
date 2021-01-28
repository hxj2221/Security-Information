<template>
  <div class="addstaffall">
    <!-- top -->
    <div class="staffThre">
      <span class="staffSpan">新增员工信息</span>
      <div>
        <el-button type="primary" class="staffgr" icon="iconfont el-icon-hospital-passwordbaocun"
          @click="staffaddvueyes">保存
        </el-button>
        <el-button type="primary" class="staffback" icon="iconfont el-icon-hospital-passwordai207"
          @click="staffaddvueno">返回
        </el-button>
      </div>
    </div>
    <!-- add -->
    <div class="addmain">
      <el-form ref="form" :model="addStaff">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="员工编号" disabled>
              <el-input type="input" autosize disabled="disabled" v-model="addStaff.job_number"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="员工姓名" required>
              <el-input type="input" autosize v-model="addStaff.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="年龄" required>
              <el-input type="number" v-model="addStaff.age"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="性别" required>
              <el-select type="input" autosize v-model="addStaff.sex" placeholder="请选择">
                <el-option v-for="item in optiongen" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="手机号码" required>
              <el-input type="input" autosize v-model="addStaff.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="电子邮箱" required>
              <el-input type="input" autosize v-model="addStaff.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="证件号码" required>
              <el-input type="input" autosize v-model="addStaff.cardnumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="职位" required>
              <el-input type="input" autosize v-model="addStaff.position"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="地址" required>
              <el-cascader 
                size="large" :options="options" v-model="addStaff.address">
              </el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="详细地址" required>
              <el-input type="input" autosize v-model="addStaff.eraddress"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="所属科室" required>
              <el-select type="input" autosize v-model="department_id" placeholder="请选择">
                <el-option v-for="item in optiondepart" :key="item.id" :label="item.title" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="角色" required>
              <el-select type="input" autosize v-model="addStaff.auth_grouap" placeholder="请选择">
                <el-option v-for="item in optionrole" :key="item.id" :label="item.title" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="6">
            <el-form-item  label="科室负责人">
              <el-switch
                v-model="addStaff.head_department"
                :active-value="0"
                :inactive-value="1"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </el-form-item>
          </el-col> -->
          <el-col :span="12"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="密码" required>
              <el-input type="password" v-model="addStaff.password" placeholder="******"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="员工状态" style="margin-top:40px">
              <el-switch v-model="addStaff.status" :active-value="1" :inactive-value="2" active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="6"> </el-col>
          <el-col :span="6"> </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
  // 添加员工，调后台
  import {
    Aepyee
  } from "@/network/Sta.js";

import qs from "qs";
import service from "@/service/index";
//地址级联选择器
import {
  provinceAndCityData,
  regionData,
  provinceAndCityDataPlus,
  regionDataPlus,
  CodeToText,
  TextToCode,
} from "element-china-area-data";
export default {
  components: {},
  inject: ["reload"],
  props: {},
  data() {
    return {
      options: regionData,
      addStaff: {
        job_number: "", // 员工编号
        // staffNumInput: "",
        name: "", // 姓名
        age: "", //年龄
        // staffAgesel: "", //年龄岁月天
        sex: "", //性别
        phone: "", //手机号
        email: "", //电子邮箱
        cardnumber: "", //证件号码
        position: "", //职位
        eraddress: "", //详细地址
        staffdepart: "", //所属科室
        staffrolesel: [], //角色
        //head_department: "", //科室负责人
        status: 1, //员工状态
        password: "", //密码
        address: [], //地址
      },
      department_id:'',
      addressC: [],
      staffroleselC: [],
      // 性别循环
      optiongen: [
        {
          value: "1",
          label: "男",
        },
        {
          value: "0",
          label: "女",
        },
        {
          value: "2",
          label: "未知",
        },
      ],
      // 科室
      optiondepart: [],
      // 角色
      optionrole: [],
    };
  },
  methods: {
    stffaddrolesel(val) {
      // for (let i = 0; i <= val.length - 1; i++) {
      //   let a = val[i];
      //   this.staffroleselC = a;
      // }
      console.log(this.addStaff.staffrolesel);
    },

    // 保存
    staffaddvueyes() {
      //1  正常   0 禁用
      let data = {
        // job_number: this.addStaff.job_number,
        name: this.addStaff.name,
        password: this.addStaff.password,
        sex: this.addStaff.sex,
        email: this.addStaff.email,
        phone: this.addStaff.phone,
        address: this.addressC,
        eraddress: this.addStaff.eraddress,
        position: this.addStaff.position,
        age: this.addStaff.age,
        // specific_age: this.addStaff.age,
        cardnumber: this.addStaff.cardnumber,
        // head_department: this.addStaff.head_department,
        status: this.addStaff.status,
        role_id: this.addStaff.staffrolesel,
        department_id: this.addStaff.staffdepart,
      };
      console.log(data);
      service.staffAdd(data).then((res) => {
        if (res.code == "20010") {
          this.$message({
            type: "success",
            message: res.msg,
            duration: 1500,
          });
          setTimeout(() => {
            this.reload();
          }, 2000);
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      });
    },
    // 返回
    staffaddvueno(){
      this.$parent.fathstaffno();
    },
    handleChange(cityvalue) {
      CodeToText[cityvalue[0]],
        CodeToText[cityvalue[1]],
        CodeToText[cityvalue[2]];
      this.addressC =
        CodeToText[cityvalue[0]] +
        "/" +
        CodeToText[cityvalue[1]] +
        "/" +
        CodeToText[cityvalue[2]];
      console.log(this.addressC);
      console.log(this.addStaff.address);
    },
    created() {
      // 获取到的科室和角色
      let self = this;
      this.bus.$on("ReceiveMessage", function (item) {
        self.optiondepart = item.department;
        self.optionrole = item.auth_grouap;
        self.addStaff.job_number = item.job_number;
      });
    },
  }
}
</script>
<style scoped>
  @import "add.css";
</style>