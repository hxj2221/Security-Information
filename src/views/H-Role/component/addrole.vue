<template>
  <div class="addrole">
    <div class="roleaddThre">
      <span class="roleaddSpan">新增角色信息</span>
      <div>
        <el-button
          type="primary"
          class="roleaddgr"
          icon="iconfont el-icon-hospital-passwordbaocun"
          @click="roleaddvueyes"
          >保存
        </el-button>
        <el-button
          type="primary"
          class="roleaddb"
          icon="iconfont el-icon-hospital-passwordai207"
          @click="roleaddvueno"
          >返回
        </el-button>
      </div>
    </div>
    <div class="addmain">
      <el-form ref="form">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="角色编号" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                placeholder="10001"
                disabled
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="角色名称" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="roleNameipt"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item style="margin-top: 40px" label="角色状态">
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
          <el-col :span="6"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="角色描述" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="rolecreate"
                placeholder="请输入内容"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="排序" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="px"
                placeholder="数字越小,排序越高"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6"> </el-col>
        </el-row>
      </el-form>
    </div>
    <div>
      <p
        style="
          display: flex;
          margin-left: 40px;
          font-size: 20px;
          color: #858bed;
          font-weight: bold;
        "
      >
        查看权限
      </p>
      <div class="role_div">
        <el-radio-group v-model="radio" @change="radiochange">
          <el-radio :label="2">本科室</el-radio>
          <el-radio :label="1">全部</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div style="min-height: 510px">
      <p
        style="
          display: flex;
          margin-left: 40px;
          font-size: 20px;
          color: #858bed;
          font-weight: bold;
        "
      >
        权限分配
      </p>
      <div class="roleFs">
        <div class="H-edit">
          <div
            class="content"
            v-for="item in powlist"
            :key="item.id"
            :label="item.id"
          >
            <div class="title">
              <el-checkbox
                :label="item.id"
                v-model="fcheck"
                @change="fcheckchange"
                >{{ item.title }}</el-checkbox
              >
            </div>
            <div
              class="power"
              v-for="v in item._child"
              :key="v.id"
              :label="v.id"
            >
              <el-checkbox
                v-model="vcheck"
                @change="vcheckchange"
                :label="v.id"
                class="tit"
                >{{ v.title }}</el-checkbox
              >
              <el-checkbox-group
                v-model="checkList"
                @change="checkchange($event)"
              >
                <el-checkbox
                  v-for="(vv, index) in v._child"
                  :key="index"
                  :label="vv.id"
                  >{{ vv.title }}</el-checkbox
                >
              </el-checkbox-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "@/service/index";
export default {
  props: ["listaddchild"],
  inject: ["reload"],
  data() {
    return {
      radio: 1,
      rolecreate: "",
      roleNameipt: "",
      valuestatus: 1,
      name: "", //权限名
      // checked: "", //标题
      checkList: [],
      fcheck: [],
      vcheck: [],
      dialogVisible: false,
      powlist: [],
      px: "",
    };
  },
  // 查看权限
  radiochange() {
    console.log(this.radio);
  },
  watch: {
    listaddchild(res) {
      console.log(res);
      this.powlist = res.data;
    },
  },
  methods: {
    checkchange() {
      console.log(event.target.checked, this.checkList);
      if (event.target.checked == true) {
      }
    },
    vcheckchange() {
      console.log(event.target.checked, this.vcheck);
    },
    fcheckchange() {
      console.log(event.target.checked, this.fcheck);
    },
    //   保存
    roleaddvueyes() {
      let data = {
        title: this.roleNameipt,
        status: this.valuestatus,
        describe: this.rolecreate,
        sort: this.px,
        rules: this.checkList + "," + this.vcheck + "," + this.fcheck,
        data_rule: this.radio,
      };
      service.roleadd(data).then((res) => {
        console.log(res);
        if (res.code == "20010") {
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
          this.$parent.fathroleyes();
        }
      });
    },
    // 查看权限
    radiochange() {
      console.log(this.radio);
    },
    // 取消
    roleaddvueno() {
      this.$parent.fathroleno();
    },
    changesonc(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
@import "addrole.css";
</style>