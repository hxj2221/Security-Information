<template>
  <div class="addstaffall">
    <!-- top -->
    <div class="departaddThre">
      <span class="departaddSpan">新增科室信息</span>
      <div style="padding-right: 30px">
        <el-button class="departaddgr" @click="departaddvueyes">保存</el-button>
        <el-button class="departaddb" @click="departaddvueno">返回</el-button>
      </div>
    </div>
    <hr class="departaddWidhr" />
    <!-- add -->
    <div class="addmain">
      <el-form ref="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="科室编号" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                placeholder="10001"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="科室名称" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="departNameipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-top: 40px" label="科室状态">
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
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="ssks" label="上级科室" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="adddepartsel"
                style="margin-top: 6px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="创建人" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                placeholder="10001"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="创建时间" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                placeholder="2020-12-29 12:43:56"
              ></el-input>
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
export default {
  data() {
    return {
      departNameipt: "",
      valuestatus: 1,
      adddepartsel: "",
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
      console.log(this.departNameipt, this.valuestatus, this.adddepartsel);
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
