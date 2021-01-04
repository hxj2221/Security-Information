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
                placeholder="10001"
              ></el-input>
            </el-form-item>
          </el-col>
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
                <template slot="append">
                  <el-select
                    type="input"
                    style="width: 90px"
                    autosize
                    v-model="personagesel"
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
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="persongensel"
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
                v-model="personCardipt"
              ></el-input>
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
                :separator="' '"
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
    <div style="display: flex; margin-top: 50px; margin-left: 35px">
      <el-button class="persongr" @click="personsave"
        ><i class="iconfont el-icon-icon-fanhui"></i> 保存</el-button
      >
      <el-button class="personb">返回</el-button>
    </div>
  </div>
</template>

<script>
import userthre from "../component/userthre";
import { changeinfor } from "../../network/information";
import options from "./coun.js";
import qs from "qs";
export default {
  components: { userthre },

  data() {
    return {
      pageTitle: "个人信息",
      personNameipt: "",
      personAgeipt: "",
      personagesel: "",
      persongensel: "",
      personPhoneipt: "",
      personEmailipt: "",
      personCardipt: "",
      personPositioniPt: "",
      selectedOptions: [],
      options: options,
      personaddreiPt: "",
      optiongen: [
        {
          value: "选项1",
          label: "男",
        },
        {
          value: "选项2",
          label: "女",
        },
        {
          value: "选项3",
          label: "未知",
        },
      ],
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
    };
  },

  methods: {
    personsave() {
      console.log(
        this.personNameipt +
          this.personAgeipt +
          this.personagesel +
          this.persongensel +
          this.personPhoneipt +
          this.personEmailipt +
          this.personCardipt +
          this.personPositioniPt +
          this.selectedOptions +
          this.personaddreiPt
      );
      let data = {
        name: this.personNameipt,
        age: this.personAgeipt + this.personAgeel,
        sex: this.persongensel,
        phone: this.personPhoneipt,
        email: this.personEmailipt,
        cardnumber: this.personCardipt,
        position: this.personPositioniPt,
        address: this.personaddreiPt,
      };
      changeinfor(qs.stringify(data)).then((result) => {
        console.log(data);
      });
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style >
@import "person.css";
</style>
