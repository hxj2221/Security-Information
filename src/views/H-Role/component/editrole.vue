<template>
  <div class="addrole">
    <div class="roleaddThre">
      <span class="roleaddSpan">编辑角色信息</span>
      <div>
        <el-button class="roleaddgr" @click="roleaddvueyes">保存</el-button>
        <el-button
          class="roleaddb"
          icon="iconfont el-icon-hospital-passwordai207"
          @click="roleaddvueno"
          >返回</el-button
        >
      </div>
    </div>
    <hr class="roleaddWidhr" />
    <div class="addmain">
      <el-form ref="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="角色编号" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                placeholder="10001"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="角色名称" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="roleNameipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
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
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="16">
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
          <el-col :span="8">
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
          <el-col :span="8"> </el-col>
        </el-row>
      </el-form>
    </div>
    <div style="margin-top: 10px">
      <p
        style="
          display: flex;
          margin-left: 15px;
          font-size: 20px;
          color: #858bed;
          font-weight: bold;
        "
      >
        查看权限
      </p>
      <div
        class="role_div"
        style="width: 50%; text-align: left; margin: 20px 40px"
      >
        <el-radio-group v-model="radio" @change="radiochange">
          <el-radio :label="2">本科室</el-radio>
          <el-radio :label="1">全部</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div>
      <p
        style="
          display: flex;
          margin-left: 15px;
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
      console.log(newValue.info); //数据已经拿到
      this.roleNameipt = newValue.info.title;
      this.rolems = newValue.info.describe;
      this.px = newValue.info.sort;
      this.valuestatus = newValue.info.status;
      this.jkid = newValue.info.id;
      this.powlist = newValue.rule;
      this.radio = newValue.info.data_rule;
      console.log(this.powlist);
    },
  },
  methods: {
    checkchange() {
      console.log(this.checkList);
    },
    vcheckchange() {
      console.log(this.vcheck);
    },
    fcheckchange() {
      console.log(this.fcheck);
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
      console.log(data);
      service.roleeditsqve(data).then((res) => {
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

* {
  margin: 0;
  padding: 0;
}

.H-edit {
  background-color: rgb(255, 255, 255);
  width: 100%;
  min-height: 150px;
  padding-top: 30px;
  border-radius: 5px;
  box-shadow: 1px 0 10px rgb(204, 204, 204);
  text-align: left;
}
.H-edit .edit-top {
  text-align: right;
  margin: 20px;
  margin-top: 0;
}
.H-edit .edit-top button {
  background-color: #949aef;
  border: none;
}

.H-edit .content {
  border: 1px solid #e0e0e0;
  width: 95%;
  margin: 0 auto;
}
.H-edit .content .title {
  border-bottom: 1px solid #e0e0e0;
  background-color: #f8f8f8;
  padding-left: 10px;
}
.H-edit .content .power {
  padding-left: 10px;
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  min-height: 40px;
  line-height: 40px;
}
.H-edit .content .power:last-child {
  border-bottom: none;
}
.H-edit .content .power .tit {
  padding-right: 10px;
  text-align: right;
  border-right: 1px solid #e0e0e0;
  width: 200px;
}
.H-edit .content .power .el-checkbox-group {
  padding-left: 20px;
}
</style>
