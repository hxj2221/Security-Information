<template>
  <div>
    <div class="departaddalBg">
      <div class="departaddThre">
        <span class="departaddSpan">个人信息</span>
        <div>
          <el-button class="departaddgr" @click="departaddvueyes"
            >保存</el-button
          >
          <el-button class="departaddb" @click="departaddvueno">返回</el-button>
        </div>
      </div>
      <hr class="departaddWidhr" />
      <div class="departaddF">
        <div class="departaddFlex">
          <p class="departaddP">科室编号</p>
          <el-input
            class="departadda"
            placeholder="1000030"
            :disabled="true"
          ></el-input>
        </div>
        <div class="departaddFlex">
          <p class="departaddP">科室名称</p>
          <el-input
            class="departadda"
            v-model="departNameipt"
            placeholder="请输入内容"
          ></el-input>
        </div>
        <div class="departaddFlex2">
          <p class="departaddP">科室状态</p>
          <el-switch
            v-model="valuestatus"
            :active-value="1"
            :inactive-value="2"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </div>
        <div class="departaddFlex"></div>
        <div class="departaddFlex">
          <p class="departaddP">上级科室</p>
          <el-select v-model="value" placeholder="请选择" class="departadda">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="departaddFlex"></div>
        <div class="departaddFlex"></div>
        <div class="departaddFlex"></div>
        <div class="departaddFlex">
          <p class="departaddP">创建人</p>
          <el-input
            class="departadda"
            v-model="departcreate"
            placeholder="请输入内容"
          ></el-input>
        </div>
        <div class="departaddFlex">
          <p class="departaddP">创建时间</p>
          <el-input
            class="departadda"
            v-model="departcreatetime"
            placeholder="请输入内容"
          ></el-input>
        </div>
        <div class="departaddFlex"></div>
        <div class="departaddFlex"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      departcreate: "",
      departcreatetime: "",
      valuestatus: 1,
      departNameipt: "",
      value: "",
      options: [
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
          label: "骨科",
        },
      ],
    };
  },
  methods: {
    departaddvueyes() {
      const loading = this.$loading({
        lock: true,
        text: "保存中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
      console.log();
      this.$parent.fathdepartyes();
    },
    departaddvueno() {
      this.$parent.fathdepartno();
    },
  },
};
</script>

<style scoped>
@import "adddepart.css";
</style>
