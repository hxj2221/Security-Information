<template>
  <div class="departAll">
    <!-- top -->
    <div class="departaddThre">
      <span class="departaddSpan">新增科室信息</span>
      <div style="padding-right: 30px">
        <el-button class="departaddgr" @click="departaddvueyes">保存</el-button>
        <el-button
          class="departaddb"
          icon="iconfont el-icon-hospital-passwordai207"
          @click="departaddvueno"
          >返回</el-button
        >
      </div>
    </div>
    <hr class="staffWidhr" />

    <!-- add -->
    <div class="addmain">
      <el-form ref="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="科室编号" disabled>
              <el-input
                disabled
                class="dialog-input-text"
                type="input"
                autosize
                v-model="numb"
                placeholder="10001"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="科室名称" required>
              <el-input
                class="dialog-input-text"
                v-model="departNameipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="科室排序" required>
              <el-input
                class="dialog-input-text"
                v-model="departpxipt"
                placeholder="数字越小,排序越高"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-top: 40px" label="科室状态">
              <el-switch
                v-model="valuestatus"
                :active-value="1"
                :inactive-value="0"
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
            <el-form-item class="ssks" label="上级科室">
              <el-select
                class="dialog-input-text"
                v-model="adddepartsel"
                style="margin-top: 6px"
                placeholder="请选择"
                @change="departsel"
              >
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <!-- <el-row :gutter="20">
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
        </el-row> -->
      </el-form>
    </div>
  </div>
</template>

<script>
import service from "@/service/index";
export default {
  inject: ["reload"],
  data() {
    return {
      departNameipt: "",
      departpxipt: "",
      valuestatus: 1,
      adddepartsel: "",
      options: [],
      numb: "",
    };
  },
  created() {
    service.departadd().then((res) => {
      console.log(res.data);
      this.options = res.data.lists;
      this.numb = res.data.number;
    });
  },
  methods: {
    // sel
    departsel() {
      console.log(this.adddepartsel);
    },
    //
    departaddvueyes() {
      let data = {
        title: this.departNameipt,
        status: this.valuestatus,
        pid: this.adddepartsel,
        sort: this.departpxipt,
      };
      service.departsave(data).then((res) => {
        console.log(res);
        if (res.code == 20010) {
          this.$message({
            message: "保存成功！",
            type: "success",
            duration: 2000,
          });
          setTimeout(() => {
            this.reload();
          }, 2000);
        } else {
          this.$message({
            message: "请注意" + res.msg,
            type: "error",
            duration: 1300,
          });
        }
      });
      //this.$parent.fathdepartyes();
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
