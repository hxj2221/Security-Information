<template>
  <div>
    <div class="addstaffall" v-if="showpow">
      <!-- <headpow></headpow> -->
      <div class="roleaddThre">
        <span class="roleaddSpan">权限管理</span>
        <div style="margin-right: 10px">
          <el-button class="roleaddb" @click="addpower">新增</el-button>
          <el-button class="roleaddgr" @click="roleaddvueyes">保存</el-button>
          <el-button class="roleaddb" @click="roleaddvueno">返回</el-button>
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
        <div class="roleF">
          <table class="roleTab">
            <tr style="background-color: #c2c5f6">
              <td style="margin-left: 83px">
                <input type="checkbox" id="all-checked" /><span
                  style="font-size: 14px; margin-left: 5px"
                  >模块</span
                >
                <span style="font-size: 14px; margin-left: 42px">功能</span>
              </td>
            </tr>
            <tr v-for="data in powdata" :key="data.id">
              <td class="roleTd">
                <span style="font-size: 14px">
                  <input type="checkbox" value="" :id="data.name" />
                  {{ data.name }}
                </span>

                <span
                  v-for="item in data._child"
                  :key="item.id"
                  style="font-size: 14px; margin-left: 30px"
                >
                  <input
                    type="checkbox"
                    :value="item"
                    v-model="data.selected"
                    :id="item.id"
                  />
                  {{ item.name }}
                </span>
              </td>
            </tr>
          </table>
        </div>
        <!-- 新增-->
      </div>
    </div>
    <addpow v-show="addpow"></addpow>
  </div>
</template>

<script>
//import { editpower } from "../../network/H-edit";
import { addpower } from "../../network/H-edit";
import addpow from "./component/addpow";
export default {
  components: { addpow },
  data() {
    return {
      showpow: true,
      addpow: false,
      radio: 3,
      rolecreate: "",
      roleNameipt: "",
      valuestatus: 1,
      powdata: [],
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
      ],
    };
  },
  created() {
    addpower().then((res) => {
      console.log(res.data.data);
      this.powdata = res.data.data;
    });
  },
  methods: {
    addpower() {
      this.showpow = false;
      this.addpow = true;
    },
    //   保存
    roleaddvueyes() {
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
      this.$router.push("/Role");
    },
    // 取消
    roleaddvueno() {
      this.$router.push("/Role");
    },
    // //   模块功能
    // isTitleChecked(data) {
    //   var _selected = data.selected;
    //   var _name = data.name;
    //   // 验证selected中是否含有全部的item的id 如果是 证明title要选中
    //   return _name.every(function (item) {
    //     return _selected.indexOf(item) != -1;
    //   });
    // },
    // changeTitleChecked(data, event) {
    //   if (event.target.checked === true) {
    //     data.name.forEach(function (item) {
    //       data.selected.indexOf(item) === -1 && data.selected.push(item);
    //     });
    //     console.log(data.name);
    //   } else {
    //     data.selected = [];
    //   }
    // },
    // changeAllChecked(event) {
    //   if (event.target.checked === true) {
    //     this.datas.forEach(function (data) {
    //       data.name.forEach(function (item) {
    //         data.selected.indexOf(item) === -1 && data.selected.push(item);
    //       });
    //       console.log(data.id);
    //     });
    //   } else {
    //     this.datas.forEach(function (data) {
    //       data.selected = [];
    //     });
    //   }
    // },
    // isAllChecked() {
    //   return this.datas.every(function (data) {
    //     return data.selected.length === data.name.length;
    //   });
    // },
    changesonc(e) {
      console.log(e);
    },
    jsmc() {
      console.log(this.roleNameipt);
    },
  },
};
</script>

<style scoped>
@import "edit.css";
</style>
