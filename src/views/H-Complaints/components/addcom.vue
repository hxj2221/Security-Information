<template>
  <div>
    <div class="addcom">
      <div class="addcom-top">
        <h4>基本信息</h4>
      </div>
      <div class="addcom-form-basic">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <span> 业务编号 </span>
              <el-input v-model="number" disabled></el-input>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉日期<span>*</span> </span> <br />
              <el-date-picker
                v-model="comdata"
                type="date"
                placeholder="选择日期"
              ></el-date-picker></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 事发日期<span>*</span> </span> <br />
              <el-date-picker v-model="comdata" type="date" placeholder="选择日期">
              </el-date-picker></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <span> 投诉人姓名 </span>
              <el-input v-model="comname" placeholder="请输入投诉人姓名"></el-input>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 性别<span>*</span> </span> <br />
              <el-select v-model="comgender" placeholder="请选择">
                <el-option
                  v-for="item in comgenders"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 年龄</span> <br />
              <el-input
                placeholder="请输入内容"
                v-model="comagenumber"
                class="input-with-select"
              >
                <template slot="append">
                  <el-select v-model="comage" slot="prepend" style="width: 80px">
                    <el-option label="岁" value="1"></el-option>
                    <el-option label="月" value="2"></el-option>
                    <el-option label="日" value="3"></el-option> </el-select
                ></template>
              </el-input></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <span> 手机号码 </span>
              <el-input v-model="comphone" placeholder="请输入投诉人手机号码"></el-input>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉方式<span>*</span> </span> <br />
              <el-select v-model="commode" placeholder="请选择">
                <el-option
                  v-for="item in commodes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉科室<span>*</span> </span> <br />
              <el-select v-model="comde" placeholder="请选择">
                <el-option
                  v-for="item in comdes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <span> 投诉人与患者关系 </span><br />
              <el-select v-model="relation" placeholder="请选择">
                <el-option
                  v-for="item in relationlist"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 答复协商时间</span> <br />
              <el-input placeholder="请输入内容" v-model="consulttime" style="width: 60%">
                <template slot="append">天</template>
              </el-input>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉类别(多选)</span> <br />
              <el-select v-model="comtype" multiple placeholder="请选择">
                <el-option
                  v-for="item in comtypelist"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6" :push="1"
            ><div class="grid-content bg-purple">
              <span> 事件性质 </span><br />
              <el-select v-model="nature" placeholder="请选择">
                <el-option
                  v-for="item in natures"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="12" :push="3"
            ><div class="grid-content bg-purple-light">
              <span> 联系地址<span>*</span> </span> <br />
              <el-input v-model="address" placeholder="联系地址"></el-input></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="20" :push="1"
            ><div class="grid-content bg-purple">
              <span> 投诉原因</span
              ><el-input
                type="textarea"
                v-model="reason"
                placeholder="请输入投诉原因"
              ></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 经办人 -->
      <div class="Addcom-agent">
        <h4>经办人信息</h4>
        <div>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6" :pull="2"
              ><div class="grid-content bg-purple">
                <span> 经办人姓名<span>*</span> </span>
                <el-input v-model="agentname" placeholder="请输入姓名"></el-input>
              </div>
            </el-col>
            <el-col :span="6" :pull="6"
              ><div class="grid-content bg-purple-light">
                <span>经办人手机<span>*</span> </span> <br />
                <el-input
                  v-model="agentphone"
                  placeholder="请输入手机号码"
                ></el-input></div
            ></el-col>
          </el-row>
        </div>
      </div>
      <!-- 患者信息 -->
      <div class="addcom-relevance">
        <h4>关联患者信息(调用HIS)</h4>
        <el-table
          :data="data"
          style="width: 94%; margin-left: 3%; margin-top: 20px; margin-bottom: 20px"
          :header-cell-style="getRowClass"
        >
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100%"
            style="border-bottom: none"
          >
            <template>
              <el-button
                type="text"
                size="small"
                @click="handleClick()"
                style="border-bottom: none"
                >取消关联</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div align="center">
          <el-button type="primary" icon="el-icon-circle-plus" class="addrelevance"
            >添加患者信息</el-button
          >
        </div>
      </div>
      <!-- 弹窗 -->
      <div class="requirement">
        <slot name="dialog"> </slot>
      </div>
      <slot name="conserve"> </slot>
    </div>
  </div>
</template>
<script>
import Conserve from "../components/conserve";
export default {
  components: {
    Conserve,
  },

  data() {
    return {
      agree: "", //同意要求

      data: [
        {
          name: 1,
        },
      ],
      agentname: "", //经办人姓名
      agentphone: "", //经办人手机号
      number: 776567788, //业务编号
      comdata: "", //投诉日期
      incidentdata: "", //事发日期
      comname: "", //投诉人姓名
      comgender: "", //投诉人性别
      comage: "岁", //投诉人年龄
      comagenumber: "",
      comphone: "", //投诉人电话
      consulttime: "", //协商时间
      address: "", //联系地址
      reason: "", //投诉原因
      comgenders: [
        {
          value: "男",
          lable: "男",
        },
        {
          value: "女",
          lable: "女",
        },
      ],
      commodes: [
        {
          value: "男",
          lable: "男",
        },
        {
          value: "女",
          lable: "女",
        },
      ],
      commode: "", //投诉方式
      comdes: [
        {
          value: "男",
          lable: "男",
        },
        {
          value: "女",
          lable: "女",
        },
      ],
      comde: "",
      relationlist: [
        {
          value: "本人",
          lable: "本人",
        },
        {
          value: "亲属",
          lable: "亲属",
        },
      ],
      relation: "", //关系
      comtypelist: [
        {
          value: "服务态度",
          lable: "服务态度",
        },
        {
          value: "费用",
          lable: "费用",
        },
      ],
      comtype: "", //投诉类别
      natures: [
        {
          value: "投诉",
          lable: "投诉",
        },
        {
          value: "纠纷",
          lable: "投诉",
        },
      ], //事件性质
      nature: "",
    };
  },

  methods: {
    //保存提交事件
    keepform() {
      this.$router.go(0);
    },
    back() {
      this.$router.go(0);
    },

    //表格点击事件
    handleClick() {},
    // 设置表头颜色
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
@import "../css/addcom.css";
</style>
