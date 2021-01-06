<template>
  <div class="addstaffall">
    <!-- top -->
    <div class="staffThre">
      <span class="staffSpan">新增员工信息</span>
      <div style="padding-right: 30px">
        <el-button class="staffgr" @click="staffaddvueyes">保存</el-button>
        <el-button class="staffb" @click="staffaddvueno">返回</el-button>
      </div>
    </div>
    <hr class="staffWidhr" />
    <!-- add -->
    <div class="addmain">
      <el-form ref="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="员工编号" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                disabled="disabled"
                v-model="staffemployee"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="员工姓名" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffNameipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄" required>
              <el-input type="number" v-model="staffAgeipt"></el-input>
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
                v-model="staffgensel"
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
                v-model="staffPhoneipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电子邮箱" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffEmailipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="证件号码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffCardipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="职位" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffPositioniPt"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="地址" required>
              <el-cascader
                class="dialog-input-text"
                type="input"
                autosize
                style="
                  display: block;
                  position: relative;
                  font-size: 14px;
                  line-height: 40px;
                "
                v-model="cityvalue"
                :options="city"
                placeholder="请选择内容"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="详细地址" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffaddreiPt"
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
                v-model="staffdepart"
                style="margin-top: 40px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in optiondepart"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
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
                v-model="staffrolesel"
                multiple
                placeholder="请选择"
              >
                <el-option
                  v-for="item in optionrole"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-top: 40px" label="科室负责人">
              <el-switch
                v-model="valueksstatus"
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
                v-model="staffpwdiPt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-top: 40px" label="员工状态">
              <el-switch
                v-model="valuestatus"
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
export default {
  components: {},
  props: {},
  data() {
    return {
      staffemployee: "", // 员工编号
      // staffNumInput: "",
      staffNameipt: "ww", // 姓名
      staffAgeipt: "21", //年龄
      // staffAgesel: "", //年龄岁月天
      staffgensel: "", //性别
      staffPhoneipt: "15839435805", //手机号
      staffEmailipt: "3187755914@qq.com", //电子邮箱
      staffCardipt: "412723200008203820", //证件号码
      staffPositioniPt: "12", //职位
      staffaddreiPt: "", //详细地址
      staffdepart: "", //所属科室
      staffrolesel: "", //角色
      valueksstatus: "", //科室负责人
      valuestatus: "", //员工状态
      staffpwdiPt: "12345", //密码
      cityvalue:'', //地址
      //年龄循环
      optionages: [
        {
          value: "选项1",
          label: "岁",
        },
        {
          value: "选项2",
          label: "月",
        },
        {
          value: "选项3",
          label: "天",
        },
      ],
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
      // 地址循环
      city: [
        {
          value: "浙江",
          label: "浙江",
          children: [
            {
              value: "绍兴",
              label: "绍兴",
            },
          ],
        },
        {
          value:'河南',
          label:'河南',
          children:[
            {
              value:'郑州',
              label:'郑州'
            }
          ]
        }
      ],
      // 科室
      optiondepart: [
        {
          value: "选项1",
          label: "全科",
        },
        {
          value: "选项2",
          label: "儿科",
        },
        {
          value: "选项3",
          label: "内科",
        },
      ],
      // 角色
      optionrole: [
        {
          value: "选项1",
          label: "管理员",
        },
        {
          value: "选项2",
          label: "医生",
        },
        {
          value: "选项3",
          label: "护士",
        },
        {
          value: "选项4",
          label: "专家",
        },
        {
          value: "选项5",
          label: "前台",
        },
        {
          value: "选项6",
          label: "财务",
        },
      ],
    };
  },
  methods: {
    // 保存
    staffaddvueyes() {
      let params = {
        password: this.staffpwdiPt,
        name: this.staffNameipt,
        sex: this.staffgensel,
        email	: this.staffEmailipt,
        phone: this.staffPhoneipt,
        address: this.cityvalue,
        eraddress: this.staffaddreiPt,
        position: this.staffPositioniPt,
        age: this.staffAgeipt,
        specific_age: this.staffAgeipt,
        cardnumber: this.staffCardipt,
        head_department:this.valueksstatus,
        status:this.valuestatus
        // department_id:this.
      };
    //  let par=qs.stringify(params)
     console.log(params)
      Aepyee(params).then((res) => {
        console.log(res);
      });
      // const loading = this.$loading({
      //   lock: true,
      //   text: "保存中",
      //   spinner: "el-icon-loading",
      //   background: "rgba(0, 0, 0, 0.7)",
      // });
      // setTimeout(() => {
      //   loading.close();
      // }, 2000);
      // console.log(
      //   this.staffNumInput,
      //   this.staffNameipt,
      //   this.staffAgeipt,
      //   this.staffAgesel,
      //   this.staffPhoneipt,
      //   this.staffEmailipt,
      //   this.staffCardipt,
      //   this.staffPositioniPt,
      //   this.staffaddreiPt,
      //   this.staffdepart,
      //   this.staffrolesel,
      //   this.valuestatus,
      //   this.staffpwdiPt,
      //   this.cityvalue
      // );
      // this.$parent.fathstaffyes();
    },
    handleChange(cityvalue) {
      console.log(cityvalue);
    },
    // 子调用父
    staffaddvueno() {
      this.$parent.fathstaffno();
    },
  },
};
</script>
<style scoped>
@import "add.css";
</style>
