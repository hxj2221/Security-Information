<template>
  <div class="personall">
    <userthre :headTitle="pageTitle"></userthre>
    <!-- add -->
    <div class="personmain">
      <el-form ref="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="员工编号" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="jobnum"
                placeholder="10001"
                disabled
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                disabled
                v-model="personPhoneipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电子邮箱" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                disabled
                v-model="personEmailipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="证件号码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                disabled
                v-model="personCardipt"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="员工姓名" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="personNameipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄">
              <el-input
                placeholder="请输入内容"
                v-model="personAgeipt"
                class=""
              >
                <template slot="append"> </template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="persongense"
                style="margin-top: 40px"
                placeholder="请选择"
                @change="changesex"
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
          <el-col :span="8">
            <el-form-item label="职位" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="personPositioniPt"
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
                :options="options"
                v-model="selectedOptions"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="详细地址" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="personaddreiPt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="person_button">
      <el-button
        type="primary"
        size="medium"
        class="persongr"
        icon="iconfont el-icon-hospital-passwordbaocun"
        @click="personsave"
        >保存
      </el-button>
      <el-button
        type="primary"
        size="medium"
        class="personb"
        icon="iconfont el-icon-hospital-passwordai207"
        @click="personback"
        >返回
      </el-button>
    </div>
  </div>
</template>

<script>
import userthre from "../component/userthre";
import service from "@/service/index";
import {
  provinceAndCityData,
  regionData,
  provinceAndCityDataPlus,
  regionDataPlus,
  CodeToText,
  TextToCode,
} from "element-china-area-data";
import qs from "qs";
export default {
  components: {
    userthre,
  },
  inject: ["reload"],
  data() {
    return {
      pageTitle: "个人信息",
      personNameipt: "",
      personAgeipt: "",
      personagesel: "",
      persongensel: "",
      persongense: "",
      personPhoneipt: "",
      personEmailipt: "",
      personCardipt: "",
      personPositioniPt: "",
      selectedOptions: [],
      options: regionData,
      personaddreiPt: "",
      jobnum: "",
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
          label: "保密",
        },
      ],
    };
  },
  // 个人信息数据
  created() {
    service.personxq().then((res) => {
      this.personNameipt = res.data.name;
      this.personAgeipt = res.data.age;
      this.personPhoneipt = res.data.phone;
      this.personEmailipt = res.data.email;
      this.personCardipt = res.data.cardnumber;
      this.personPositioniPt = res.data.position;
      this.personaddreiPt = res.data.eraddress;
      this.persongense = res.data.sex.name;
      this.persongensel = res.data.sex.number;
      this.selectedOptions = res.data.address;
      this.jobnum = res.data.job_number;
    });
  },
  methods: {
    changesex() {
      this.persongensel = this.persongense;
    },
    personsave() {
      let data = {
        name: this.personNameipt,
        age: this.personAgeipt,
        sex: this.persongensel,
        position: this.personPositioniPt,
        eraddress: this.personaddreiPt,
        address: this.selectedOptions,
      };
      service.changeinfor(data).then((res) => {
        if (res.code == 20010) {
          this.$message({
            type: "success",
            message: res.msg,
            duration: 1000,
          });
          this.reload();
        }
      });
    },
    handleChange(cityvalue) {
      let a =
        CodeToText[cityvalue[0]] +
        " " +
        CodeToText[cityvalue[1]] +
        " " +
        CodeToText[cityvalue[2]];
      this.address = a;
    },
    personback() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style>
@import "person.css";
</style>