<template>
  <div class="personalBg">
    <!-- <div class="personThre">
      <span class="prersonSpan">个人信息</span>
      <div>
        <el-button class="persongr">个人信息</el-button>
        <el-button class="personb">账户管理</el-button>
        <el-button class="personc">消息通知</el-button>
      </div>
    </div>
    <hr class="personWidhr" /> -->
    <userthre></userthre>
    <div class="personF">
      <div class="personFlex">
        <p class="personP">员工编号</p>
        <el-input
          class="persona"
          v-model="staffNumInput"
          placeholder="1001"
          :disabled="true"
        ></el-input>
      </div>
      <div class="personFlex">
        <p class="personP">员工姓名</p>
        <el-input
          class="persona"
          v-model="staffNameipt"
          placeholder="请输入内容"
        ></el-input>
      </div>

      <div class="personFlex">
        <p class="personP">员工年龄</p>
        <div>
          <el-input
            class="personage"
            v-model="staffAgeipt"
            placeholder="请输入内容"
          ></el-input>
          <el-select
            v-model="staffAgesel"
            placeholder="请选择"
            class="personSelage"
          >
            <el-option
              v-for="item in optionAge"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="personFlex">
        <p class="personP">性别</p>
        <el-select v-model="value" placeholder="请选择" class="persona">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="personFlex">
        <p class="personP">手机号码</p>
        <el-input
          class="persona"
          v-model="staffPhoneipt"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="personFlex">
        <p class="personP">电子邮箱</p>
        <el-input
          class="persona"
          v-model="staffEmailipt"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="personFlex">
        <p class="personP">证件号码</p>
        <el-input
          class="persona"
          v-model="staffCardipt"
          placeholder="请输入内容"
        ></el-input>
      </div>

      <div class="personFlex">
        <p class="personP">职位</p>
        <el-input
          class="persona"
          v-model="staffPositioniPt"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="personFlex">
        <p class="personP">地址</p>
        <el-cascader
          class="persona"
          v-model="cityvalue"
          :options="city"
          placeholder="请输入内容"
          @change="handleChange"
        ></el-cascader>
      </div>

      <div class="personFlexadre">
        <p class="personP">详细地址</p>
        <el-input
          class="personade"
          v-model="staffPositioniPt"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="personFlex"></div>
    </div>
    <div class="personfot">
      <div>
        <el-button class="persongr">保存</el-button>
        <el-button class="personb">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import userthre from "../component/userthre";
export default {
  components: { userthre },

  data() {
    return {
      staffNumInput: "",
      staffNameipt: "",
      staffAgeipt: "",
      staffPhoneipt: "",
      staffEmailipt: "",
      staffCardipt: "",
      staffPositioniPt: "",
      cityvalue: [],
      city: [
        {
          cityvalue: "zhinan",
          label: "浙江",
          children: [
            {
              cityvalue: "shejiyuanze",
              label: "绍兴",
            },
          ],
        },
      ],
      options: [
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
      value: "",
      optionAge: [
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
      staffAgesel: "",
    };
  },

  methods: {
    handleChange(cityvalue) {
      console.log(cityvalue);
    },
  },
};
</script>

<style >
@import "person.css";
</style>
