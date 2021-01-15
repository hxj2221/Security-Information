<template>
  <div class="departAll">
    <!-- top -->
    <div class="departaddThre">
      <span class="departaddSpan">编辑科室信息</span>
      <div style="padding-right: 30px">
        <el-button class="departaddgr" @click="departeditvueyes"
          >保存</el-button
        >
        <el-button class="departaddb" @click="departeditvueno">返回</el-button>
      </div>
    </div>
    <hr class="staffWidhr" />
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
            <el-form-item label="科室排序" required>
              <el-input
                class="dialog-input-text"
                v-model="departpxipt"
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
            <el-form-item class="ssks" label="上级科室" required>
              <el-select
                class="dialog-input-text"
                v-model="editdepartsel"
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
          <el-col :span="8">
            <el-form-item class="ssks" label="选择负责人" required>
              <el-select
                class="dialog-input-text"
                v-model="editchargetsel"
                style="margin-top: 6px"
                placeholder="请选择"
                @change="chargesel"
              >
                <el-option
                  v-for="item in charge"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import service from "@/service/index";
export default {
  props: ["editchild"],
  inject: ["reload"],
  data() {
    return {
      departNameipt: "",
      valuestatus: 0,
      editdepartsel: "",
      editchargetsel: "",
      options: [],
      departpxipt: "",
      id: "",
      pid: "",
      charge: [],
    };
  },

  watch: {
    editchild(newValue) {
      console.log(newValue);
      this.options = newValue.data.list;
      this.departNameipt = newValue.data.info.title;
      this.valuestatus = newValue.data.info.status;
      this.departpxipt = newValue.data.info.sort;
      this.id = newValue.data.info.id;
      this.pid = newValue.data.info.pid;
      this.charge = newValue.data.userlist;
    },
  },
  methods: {
    departsel() {
      console.log(this.editdepartsel);
    },
    chargesel() {
      console.log(this.editchargetsel);
    },
    departeditvueyes() {
      let data = {
        titles: this.departNameipt,
        status: this.valuestatus,
        id: this.id,
        sort: this.departpxipt,
        pid: this.editdepartsel,
        head_department: this.editchargetsel,
      };
      console.log(data);
      service.departeditsave(data).then((res) => {
        console.log(res);
        if (res.code == 20010) {
          const loading = this.$loading({
            lock: true,
            text: "保存中",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
          });
          setTimeout(() => {
            loading.close();
            this.reload();
          }, 2000);
        } else {
          alert("修改失败");
        }
        this.$parent.fathdepartyes();
      });
    },
    departeditvueno() {
      this.$parent.fathdepartno();
    },
  },
};
</script>

<style scoped>
@import "adddepart.css";
</style>
