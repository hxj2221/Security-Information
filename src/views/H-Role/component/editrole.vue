<template>
  <div class="addrole">
    <div class="roleaddThre">
      <span class="roleaddSpan">编辑角色信息</span>
      <div>
        <el-button class="roleaddgr" icon="iconfont el-icon-hospital-passwordbaocun" @click="roleaddvueyes">保存</el-button>
        <el-button
          class="roleaddb"
          icon="iconfont el-icon-hospital-passwordai207"
          @click="roleaddvueno"
          >返回</el-button
        >
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
                v-model="rolems"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="角色排序" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="px"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6"> </el-col>
        </el-row>
      </el-form>
    </div>
    <div style="margin-top: 10px">
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
      <div
        class="role_div"
        style="text-align: left; margin: 10px 70px"
      >
        <el-radio-group v-model="radio" @change="radiochange">
          <el-radio :label="2">本科室</el-radio>
          <el-radio :label="1">全部</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div style="min-height:490px">
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
                :checked="item.checked"
                >{{ item.title }}
              </el-checkbox>
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
                :checked="v.checked"
                >{{ v.title }}</el-checkbox
              >
              <el-checkbox-group v-model="checkList" @change="checkchange">
                <el-checkbox
                  v-for="(vv, index) in v._child"
                  :key="index"
                  :label="vv.id"
                  :checked="vv.checked"
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
  props: ["editchid"],
  inject: ["reload"],
  data() {
    return {
      radio: "",
      cc: 0,
      rolems: "",
      px: "",
      roleNameipt: "",
      valuestatus: 0,
      jkid: "",
      name: "", //权限名
      checked: false, //标题
      checkList: [],
      fcheck: [],
      vcheck: [],
      dialogVisible: false,
      powlist: [],
    };
  },
  watch: {
    editchid(newValue) {
      this.roleNameipt = newValue.info.title;
      this.rolems = newValue.info.describe;
      this.px = newValue.info.sort;
      this.valuestatus = newValue.info.status;
      this.jkid = newValue.info.id;
      this.powlist = newValue.rule;
      this.radio = newValue.info.data_rule;
    },
  },
  methods: {
    checkchange() {
    },
    vcheckchange() {
    },
    fcheckchange() {
    },
    //   保存
    roleaddvueyes() {
      let data = {
        title: this.roleNameipt,
        status: this.valuestatus,
        describe: this.rolems,
        id: this.jkid,
        rules: this.checkList + "," + this.vcheck + "," + this.fcheck,
        data_rule: this.radio,
        sort: this.px,
      };
      service.roleeditsqve(data).then((res) => {
        if (res.code == 20010) {
          this.$message({
            message: "保存成功！",
            type: "success",
            duration: 2000,
          });
          setTimeout(() => {
            this.reload();
          }, 2000);
        } 
      });
    },
    // 查看权限
    radiochange() {
    },
    // 取消
    roleaddvueno() {
      this.$parent.fathroleno();
    },
    changesonc(e) {
    },
  },
};
</script>

<style scoped>
@import "addrole.css";
</style>
