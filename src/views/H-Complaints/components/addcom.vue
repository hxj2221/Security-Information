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
              <el-input v-model="comnumber" disabled></el-input>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉日期<span>*</span> </span> <br />
              <el-date-picker
                v-model="comdata"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              ></el-date-picker></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 事发日期<span>*</span> </span> <br />
              <el-date-picker v-model="incidentdata" type="date" placeholder="选择日期"   :picker-options="pickerOptions">
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
                  :label="item.lable"
                  :value="item.value"
                >
                </el-option>
              </el-select></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 年龄</span> <br />
              <el-input
                placeholder="请输入"
                v-model="comagenumber"
                class="input-with-select"
                type='number'
               oninput="value=value.replace(/[^\d]/g,'')"
               onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )"
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
              <el-input v-model="comphone" placeholder="请输入投诉人手机号码" type="input" maxlength="11" max="11"     
               oninput="value=value.replace(/[^\d]/g,'')"
               onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )"  ></el-input>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉方式<span>*</span> </span> <br />
              <el-select v-model="commode" placeholder="请选择">
                <el-option
                  v-for="item in commodes"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                >
                </el-option>
              </el-select></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉科室<span>*</span> </span> <br />
              <!-- <el-select v-model="comde" placeholder="请选择">
                <el-option
                  v-for="item in comdes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select> -->
              <el-cascader
                ref="cascader"
                :options="comdes"
                :props="{
                  value: 'id',
                  label: 'title',
                  children: '_child',
                  multiple: 'true',
                }"
                :show-all-levels="false"
                v-model="comde"
                clearable
                @change="getCascaderObj"
              ></el-cascader></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <span> 投诉人与患者关系 </span><br />
              <el-select v-model="relation" placeholder="请选择">
                <el-option
                  v-for="item in relationlist"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 答复协商时间</span> <br />
              <el-input placeholder="请输入" v-model="consulttime" style="width: 60%" type="input" maxlength="3" max="3"     
               oninput="value=value.replace(/[^\d]/g,'')"
               onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )" >
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
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
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
                  :key="item.id"
                  :label="item.title"
                  :value="item.title"
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
                <el-input v-model="agentname" placeholder="请输入姓名"  type="input" maxlength="8"></el-input>
              </div>
            </el-col>
            <el-col :span="6" :pull="6"
              ><div class="grid-content bg-purple-light">
                <span>经办人手机<span>*</span> </span> <br />
                <el-input
                  v-model="agentphone"
                  placeholder="请输入手机号码"
                  type="input" maxlength="11" max="11"     
               oninput="value=value.replace(/[^\d]/g,'')"
               onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )"
                ></el-input></div
            ></el-col>
          </el-row>
        </div>
      </div>
      <!-- 患者信息 -->
      <div class="addcom-relevance" v-show="false">
        <h4>关联患者信息(调用HIS)</h4>
        <el-table
          :data="data"
          style="width: 94%; margin-left: 3%; margin-top: 20px; margin-bottom: 20px"
          :header-cell-style="getRowClass"
        >
          <el-table-column type="index" width="50" label="序号"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="name" label="性别"> </el-table-column>
          <el-table-column prop="name" label="出生日期"> </el-table-column>
          <el-table-column prop="name" label="联系方式"> </el-table-column>
          <el-table-column prop="name" label="地址"> </el-table-column>
          <el-table-column prop="name" label="科室"> </el-table-column>
          <el-table-column prop="name" label="诊断"> </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100%"
            style="border-bottom: none"
          >
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="handleClick(scope.row)"
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
      <!-- <slot name="conserve"> -->
      <Conserve>
        <el-button
          type="primary"
          icon="iconfont el-icon-hospital-passwordbaocun"
          class="keep"
          slot="keep"
          @click="keepform()"
          >提交</el-button
        >
        <el-button
          type="primary"
          icon="iconfont el-icon-hospital-passwordai207"
          class="return"
          style="border: 1px solid #949aef"
          slot="back"
          @click="backss()"
          >返回</el-button
        >
      </Conserve>
      <!-- </slot> -->
    </div>
  </div>
</template>
<script>
import Conserve from "../components/conserve";
// 获取列表
import service from "@/service/index";

export default {
  components: {
    Conserve,
  },

  data() {
    return {
      props: { multiple: true },
      agree: "", //同意要求
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      data: [
        {
          name: 1,
        },
      ],
      agentname: "", //经办人姓名
      agentphone: "", //经办人手机号
      comnumber: "", //业务编号
      comdata: "", //投诉日期
      incidentdata: "", //事发日期
      comname: "", //投诉人姓名
      comgender: "", //投诉人性别
      comage: "岁", //投诉人年龄
      comagenumber: "", //投诉人年龄
      comphone: "", //投诉人电话
      consulttime: "", //协商时间
      address: "", //联系地址
      reason: "", //投诉原因
      comgenders: [
        //性别
        {
          value: "0",
          lable: "男",
        },
        {
          value: "1",
          lable: "女",
        },
        {
          value: "2",
          lable: "未知",
        },
      ],
      commodes: [], // 投诉方式列表
      commode: "", //投诉方式
      comdes: [], //投诉科室列表
      comde: "", //投诉科室
      relationlist: [], //投诉人与患者的关系
      relation: "", //关系列表
      comtypelist: [], //投诉类别列表
      comtype: "", //投诉类别
      natures: [], //事件性质列表
      nature: "", //事件性质
    };
  },

  methods: {
    getCascaderObj() {
      console.log(this.comde);
    },
    //保存提交事件
    keepform() {
      if (this.comde !== "" || this.comde !== null) {
        let comde = this.comde.map((x) => {
          return x[1];
        });
     

      let params = {
        event_number: this.comnumber, //业务编号
        event_type: this.comtype, //投诉类型
        cause: this.reason, //投诉原因
        occur_time: new Date(this.incidentdata).getTime(), //事发时间
        department_id: comde, //投诉科室
        create_time: new Date(this.comdata).getTime(), //投诉日期
        ComplaintType: this.commode, //投诉方式
        complaint_name: this.comname, //投诉人姓名
        complaint_phone: this.comphone, //投诉人电话
        sex: this.comgender, //投诉人电话
        specific_age: 1, //投诉人年龄
        age: this.comagenumber, //投诉人年龄
        inpatient_relation: this.relation, //患者关系
        reply_time: this.consulttime, //协商时间
        character: 1, //事件性质this.nature
        handle_name: this.agentname, //经办人姓名
        handle_phone: this.agentphone, //经办人手机号
      };
      console.log(params);
      service.AddComponent(params).then((res) => {
        console.log(res);
        // this.$router.go(0);
      });
       }
    },
    backss() {
      this.$router.go(0);
    },

    //表格点击事件
    handleClick(index, rows) {
      console.log(index, rows);
    },
    // 设置表头颜色
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
    },
  },
  created() {
     let token=sessionStorage.getItem('token')
     console.log(token)
    if(token!==null&&token!==''){
    service
      .AddCom()
      .then((res) => {
        console.log(res);
        if (res.code == 20010) {
          this.comnumber = res.data.event_number; // 事件编号
          this.commodes = res.data.ComplaintType; // 事件编号
          this.comtypelist = res.data.event_type; // 投诉方式
          this.natures = res.data.character; // 事件性质
          this.relationlist = res.data.inpatient_relation; // 关系
          this.comdes = res.data.department; //投诉科室
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      })
      .catch((err) => {});
    }
  },
};
</script>

<style scoped>
@import "../css/addcom.css";
</style>
