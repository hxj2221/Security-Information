<template>
  <div class="departAll">
    <!-- top -->
    <div class="departaddThre">
      <span class="departaddSpan">编辑科室信息</span>
      <div>
        <el-button
          class="departaddgr"
          size="medium"
          icon="iconfont el-icon-hospital-passwordbaocun"
          @click="departeditvueyes"
          >保存
        </el-button>
        <el-button
          class="departaddb"
          size="medium"
          icon="iconfont el-icon-hospital-passwordai207"
          @click="departeditvueno"
          >返回
        </el-button>
      </div>
    </div>
    <div class="addmain">
      <el-form ref="form">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="科室编号" disabled>
              <el-input
                type="input"
                autosize
                v-model="ksnum"
                disabled
                placeholder="10001"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="科室名称" required>
              <el-input
                type="input"
                autosize
                v-model="departNameipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="科室排序" required>
              <el-input
                v-model="departpxipt"
                placeholder="数字越小,排序越高"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
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
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="上级科室">
              <el-select
                v-model="editdepartsel"
                placeholder="请选择"
                @change="departsel"
              >
                <el-option label="顶级科室" :value="0"></el-option>
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
          <el-col :span="6">
            <el-form-item label="选择负责人" required>
              <el-select
                v-model="editchargetsel"
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
          <el-col :span="6"> </el-col>
          <el-col :span="6"> </el-col>
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
      ksnum: "",
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
      this.ksnum = newValue.data.info.number;
      this.editdepartsel = newValue.data.info.pid;
      this.editchargetsel = newValue.data.info.head_department;
      //console.log(this.charge);
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