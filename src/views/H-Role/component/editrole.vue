<template>
  <div class="addrole">
    <div class="roleaddThre">
      <span class="roleaddSpan">编辑角色信息</span>
      <div>
        <el-button class="roleaddgr" @click="roleaddvueyes">保存</el-button>
        <el-button class="roleaddb" @click="roleaddvueno">返回</el-button>
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
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
      </el-form>
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
      <div class="roleF">
        <table class="roleTab">
          <tr style="background-color: #c2c5f6">
            <td style="margin-left: 83px">
              <input
                type="checkbox"
                id="all-checked"
                :checked="isAllChecked()"
                @change="changeAllChecked($event)"
              /><span style="font-size: 14px; margin-left: 5px">模块</span>
              <span style="font-size: 14px; margin-left: 42px">功能</span>
            </td>
          </tr>
          <tr v-for="data in datas" :key="data.id">
            <td class="roleTd">
              <span style="font-size: 14px">
                <input
                  type="checkbox"
                  value=""
                  :id="data.listTitle"
                  :checked="isTitleChecked(data)"
                  @change="changeTitleChecked(data, $event)"
                />
                {{ data.listTitle }}
              </span>

              <span
                v-for="item in data.name"
                :key="item.id"
                style="font-size: 14px; margin-left: 30px"
              >
                <input
                  type="checkbox"
                  :value="item"
                  v-model="data.selected"
                  :id="item.id"
                  @click="changesonc(item)"
                />
                {{ item.name }}
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div style="margin-top: 100px">
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
      <div style="margin-left: 160px; margin-top: 40px; display: flex">
        <el-radio-group v-model="radio" @change="radiochange">
          <el-radio :label="3">本科室</el-radio>
          <el-radio :label="6">全部</el-radio>
        </el-radio-group>
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
      radio: 3,
      rolems: "",
      rolecreate: "",
      roleNameipt: "",
      valuestatus: 0,
      jkid: "",
      datas: [
        {
          listTitle: "模块1",
          id: 1,
          selected: [],
          name: [
            {
              name: "功能11",
              id: 11,
              info: 0,
            },
            {
              name: "功能12",
              id: 12,
              info: 0,
            },
            {
              name: "功能13",
              id: 13,
              info: 0,
            },
            {
              name: "功能14",
              id: 14,
              info: 0,
            },
            {
              name: "功能15",
              id: 15,
              info: 0,
            },
          ],
        },
        {
          listTitle: "模块2",
          id: 2,
          selected: [],
          name: [
            {
              name: "功能21",
              id: 21,
              info: 0,
            },
            {
              name: "功能22",
              id: 22,
              info: 0,
            },
            {
              name: "功能23",
              id: 23,
              info: 0,
            },
            {
              name: "功能24",
              id: 24,
              info: 0,
            },
            {
              name: "功能25",
              id: 25,
              info: 0,
            },
          ],
        },
        {
          listTitle: "模块3",
          id: 3,
          selected: [],
          name: [
            {
              name: "功能31",
              id: 31,
              info: 0,
            },
            {
              name: "功能32",
              id: 32,
              info: 0,
            },
            {
              name: "功能33",
              id: 33,
              info: 0,
            },
            {
              name: "功能34",
              id: 34,
              info: 0,
            },
            {
              name: "功能35",
              id: 35,
              info: 0,
            },
          ],
        },
        {
          listTitle: "模块4",
          id: 4,
          selected: [],
          name: [
            {
              name: "功能41",
              id: 41,
              info: 0,
            },
            {
              name: "功能42",
              id: 42,
              info: 0,
            },
            {
              name: "功能43",
              id: 43,
              info: 0,
            },
            {
              name: "功能44",
              id: 44,
              info: 0,
            },
            {
              name: "功能45",
              id: 45,
              info: 0,
            },
          ],
        },
        {
          listTitle: "模块5",
          id: 5,
          selected: [],
          name: [
            {
              name: "功能51",
              id: 51,
              info: 0,
            },
            {
              name: "功能52",
              id: 52,
              info: 0,
            },
            {
              name: "功能53",
              id: 53,
              info: 0,
            },
            {
              name: "功能54",
              id: 54,
              info: 0,
            },
            {
              name: "功能55",
              id: 55,
              info: 0,
            },
          ],
        },
      ],
    };
  },
  created() {},
  watch: {
    editchid(newValue) {
      console.log(newValue); //数据已经拿到
      this.roleNameipt = newValue.title;
      this.rolems = newValue.describe;
      this.valuestatus = newValue.status;
      this.jkid = newValue.id;
    },
  },
  methods: {
    //   保存
    roleaddvueyes() {
      let data = {
        title: this.roleNameipt,
        status: this.valuestatus,
        describe: this.rolecreate,
        id: this.jkid,
        rules: 1,
        data_rule: 1,
      };
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
    //   模块功能
    isTitleChecked(data) {
      var _selected = data.selected;
      var _name = data.name;
      // 验证selected中是否含有全部的item的id 如果是 证明title要选中
      return _name.every(function (item) {
        return _selected.indexOf(item) != -1;
      });
    },
    changeTitleChecked(data, event) {
      if (event.target.checked === true) {
        data.name.forEach(function (item) {
          data.selected.indexOf(item) === -1 && data.selected.push(item);
        });
        console.log(data.name);
      } else {
        data.selected = [];
      }
    },
    changeAllChecked(event) {
      if (event.target.checked === true) {
        this.datas.forEach(function (data) {
          data.name.forEach(function (item) {
            data.selected.indexOf(item) === -1 && data.selected.push(item);
          });
          console.log(data.id);
        });
      } else {
        this.datas.forEach(function (data) {
          data.selected = [];
        });
      }
    },
    isAllChecked() {
      return this.datas.every(function (data) {
        return data.selected.length === data.name.length;
      });
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
