<template>
  <div class="addstaffall">
    <!-- top -->
    <div class="staffThre">
      <span class="staffSpan">新增员工信息</span>
      <div class="staffThre_div">
        <el-button class="staffgr" @click="staffaddvueyes">保存</el-button>
        <el-button class="staffb" @click="staffaddvueno">返回</el-button>
      </div>
    </div>
    <hr class="staffWidhr" />
    <!-- add -->
    <div class="addmain">
      <el-form ref="form" :model="addStaff">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="员工编号" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                disabled="disabled"
                v-model="addStaff.job_number"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="员工姓名" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.name"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄" required>
              <el-input type="number" v-model="addStaff.age"></el-input>
              <!-- <el-input placeholder="请输入内容" v-model="staffAgeipt" class="">
                <template slot="append">
                  <el-select
                    type="input"
                    style="width: 90px"
                    autosize
                    v-model="staffAgesel"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in optionages"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </template>
              </el-input> -->
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.sex"
                style="margin-top: 40px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in optiongen"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="手机号码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.phone"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电子邮箱" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.email"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="证件号码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.cardnumber"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="职位" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.position"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="地址" required>
              <!-- <el-cascader
                class="dialog-input-text"
                type="input"
                autosize
                style="
                  display: block;
                  position: relative;
                  font-size: 14px;
                  line-height: 40px;
                "
                v-model="addStaff.address"
                :options="city"
                placeholder="请选择内容"
              ></el-cascader> -->
              <el-cascader
                class="dialog-input-text"
                style="
                  display: block;
                  position: relative;
                  font-size: 14px;
                  line-height: 40px;
                "
                size="large"
                :options="options"
                v-model="addStaff.address"
                @change="handleChange"
              >
              </el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="详细地址" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.eraddress"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="ssks" label="所属科室" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.staffdepart"
                style="margin-top: 40px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in optiondepart"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="角色" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                style="margin-top: 40px"
                @change="one"
                v-model="addStaff.staffrolesel"
                multiple
                placeholder="请选择"
              >
                <el-option
                  v-for="item in optionrole"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-top: 40px" label="科室负责人">
              <el-switch
                v-model="addStaff.head_department"
                :active-value="0"
                :inactive-value="1"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="密码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.password"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-top: 40px" label="员工状态">
              <el-switch
                v-model="addStaff.status"
                :active-value="1"
                :inactive-value="2"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
// 添加员工，调后台
import { Aepyee } from "@/network/Sta.js";

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
  props: {},
  data() {
    return {
      options: regionData,
      addStaff: {
        staffemployee: "", // 员工编号
        // staffNumInput: "",
        name: "天河", // 姓名
        age: "12", //年龄
        // staffAgesel: "", //年龄岁月天
        sex: "", //性别
        phone: "13139435905", //手机号
        email: "1237@qq.com", //电子邮箱
        cardnumber: "412723200001013920", //证件号码
        position: "哈哈哈", //职位
        eraddress: "哈哈哈", //详细地址
        staffdepart: "", //所属科室
        staffrolesel: [], //角色
        head_department: "", //科室负责人
        status: "", //员工状态
        password: "123qwe", //密码
        address: [], //地址
      },
      addressC: [],
staffroleselC:[],
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
    one(val) {
      for (let i = 0; i <=val.length-1; i++) {
        // console.log(val[i])
        let a=val[i]
        this.staffroleselC=a
        console.log(this.staffroleselC)
      //   this.optionrole.find((item) => {
      //     if (item.id == val[i]) {
      //       this.addStaff.staffrolesel = item.id;
      //       console.log(this.addStaff.staffrolesel)
      //     }
      //   });
      }
    },
    // 保存
    staffaddvueyes() {
      // let params = this.addStaff
      console.log(this.addStaff.address);
      let data = {
        job_number: this.addStaff.job_number,
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
        head_department: this.addStaff.head_department,
        status: this.addStaff.status,
        role_id: this.staffroleselC,
        department_id: this.addStaff.staffdepart,
      };
      console.log(data);
      service.staffAdd(data).then((res) => {
        console.log(res);
        // if (res.msg == "员工信息添加成功") {
        //   const loading = this.$loading({
        //     lock: true,
        //     text: "保存中",
        //     spinner: "el-icon-loading",
        //     background: "rgba(0, 0, 0, 0.7)",
        //   });
        //   setTimeout(() => {
        //     loading.close();
        //   }, 2000);
        //   this.$parent.fathstaffyes();
        // } else {
        // }
      });
    },
    handleChange(cityvalue) {
      console.log(
        CodeToText[cityvalue[0]],
        CodeToText[cityvalue[1]],
        CodeToText[cityvalue[2]]
      );
      this.addressC =
        CodeToText[cityvalue[0]] +
        "/" +
        CodeToText[cityvalue[1]] +
        "/" +
        CodeToText[cityvalue[2]];

      console.log(this.addStaff.address);
    },
    // 子调用父
    staffaddvueno() {
      this.$parent.fathstaffno();
    },
  },
  created() {
    // 获取到的科室和角色
    let self = this;
    this.bus.$on("ReceiveMessage", function (item) {
      console.log(item);
      self.optiondepart = item.department;
      self.optionrole = item.auth_grouap;
      self.addStaff.job_number = item.job_number;
    });
  },
};
</script>
<style scoped>
@import "add.css";
</style>
