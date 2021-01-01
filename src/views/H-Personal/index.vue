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
            <el-form-item label="员工年龄" required> </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="persongensel"
                style="margin-top: 6px"
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
                v-model="cityvalue"
                :options="city"
                placeholder="请输入内容"
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
      <el-button class="persongr"
        ><i class="iconfont el-icon-icon-fanhui"></i> 保存</el-button
      >
      <el-button class="personb">返回</el-button>
    </div>
  </div>
</template>

<script>
import userthre from "../component/userthre";
export default {
  components: { userthre },

  data() {
    return {
      pageTitle: "个人信息",
      personNameipt: "",
      persongensel: "",
      personAgeipt: "",
      personPhoneipt: "",
      personEmailipt: "",
      personCardipt: "",
      personPositioniPt: "",
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
    };
  },

  methods: {},
};
</script>

<style >
@import "person.css";
</style>
