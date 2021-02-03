<template>
  <div>
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
        <!-- 弹窗 -->
        <!--editForm表单提交的数据-->
        <el-form label-width="80px" ref="editForm">
          <el-form-item prop="staffName" label="上级" width="120">
            <el-select
              v-model="selvalue"
              @change="selchang"
              placeholder="请选择"
            >
              <el-option value="作为顶级">作为顶级 </el-option>
              <template v-for="v in seldata">
                <el-option
                  :key="v.id"
                  :label="v.title"
                  :value="v.id"
                ></el-option>
                <template v-if="v._child">
                  <el-option
                    v-for="vv in v._child"
                    :key="vv.id"
                    :label="'|——' + vv.title"
                    :value="vv.id"
                  >
                  </el-option>
                </template>
              </template>
              <!-- {{ selvalue }} -->
            </el-select>
          </el-form-item>
          <el-form-item label="排序" width="100">
            <el-input v-model="powpx" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="状态" width="100">
            <el-input v-model="powstatu" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="标题" width="150">
            <el-input v-model="powlab" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="图标" width="120">
            <el-input v-model="powicon" auto-complete="off"></el-input>
            <a href="https://element.eleme.cn/#/zh-CN/component/iconl"  target="_blank" >不了解？<span style="color: #36a9ff;">点此查看图标库</span></a>
          </el-form-item>
          <el-form-item label="后端接口" width="120">
            <el-input v-model="powaps" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="前端路由" width="120">
            <el-input v-model="powweb" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-button @click="addpowyes">确认</el-button>
  </div>
</template>

<script>
import { addpower } from "../../../network/H-edit";
import { savepower } from "../../../network/H-edit";
export default {
  data() {
    return {
      radio: 3,
      rolecreate: "",
      roleNameipt: "",
      selc: "123456",
      selvalue: "",
      powpx: "",
      powstatu: "",
      powlab: "",
      powicon: "",
      powaps: "",
      powweb: "",
      seldata: [],

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
      this.seldata = res.data.data;
    });
  },
  methods: {
    selchang() {
      console.log(this.selvalue);
    },
    //   保存
    addpowyes() {
      console.log(
        this.selvalue,
        this.powpx,
        this.powstatu,
        this.powlab,
        this.powicon,
        this.powaps,
        this.powweb
      );
      let data = {
        sort: this.powpx,
        status: this.powstatu,
        title: this.powlab,
        icon: this.powicon,
        pid: this.selvalue,
        name: this.powaps,
        url: this.powweb,
      };
      savepower(data).then((res) => {
        alert(res.data.msg);
        console.log(res);
      });
      // const loading = this.$loading({
      //   lock: true,
      //   text: "保存中",
      //   spinner: "el-icon-loading",
      //   background: "rgba(0, 0, 0, 0.7)",
      // });
      // setTimeout(() => {
      //   loading.close();
      // }, 2000);
      // console.log();
      //跳转
      //this.$parent.fathroleyes();
    },
    // 取消
    addpowno() {
      this.$parent.fathroleno();
    },
    changesonc(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
</style>
