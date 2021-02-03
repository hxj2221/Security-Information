<template>
  <div>
    <div class="addcom wrapper" ref="wrapper">
      
        <div class="content">
          <div class="addcom-top">
            <h4>基本信息</h4>
          </div>
          <div class="addcom-form-basic">
            <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span> 业务编号 </span>
                  <el-input v-model="comnumber" disabled></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <span> 投诉日期<span>*</span> </span> <br />
                  <el-date-picker v-model="comdata" type="date" format="yyyy 年 MM 月 dd 日" value-format="timestamp"
                    placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <span> 事发日期<span>*</span> </span> <br />
                  <el-date-picker v-model="incidentdata" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                    value-format="timestamp" :picker-options="pickerOption">
                  </el-date-picker>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span> 投诉人姓名 <span>*</span></span>
                  <el-input v-model="comname" placeholder="请输入投诉人姓名" maxlength="10"
                    onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )" clearable></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <span> 性别<span>*</span> </span> <br />
                  <el-select v-model="comgender" placeholder="请选择">
                    <el-option v-for="item in comgenders" :key="item.value" :label="item.lable" :value="item.value"
                      clearable>
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <span> 年龄<span>*</span></span> <br />
                  <el-input placeholder="请输入" v-model="comagenumber" class="input-with-select" clearable maxlength="3"
                    max='3' type='number' oninput="value=value.replace(/[^\d]/g,'')"
                    onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )">
                    <template slot="append">
                      <el-select v-model="comage" slot="prepend" style="width: 80px">
                        <el-option label="岁" value="1"></el-option>
                      </el-select>
                    </template>
                  </el-input>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span> 手机号码 <span>*</span></span>
                  <el-input v-model="comphone" placeholder="请输入投诉人手机号码" type="input" maxlength="11" max="11"
                    oninput="value=value.replace(/[^\d]/g,'')" clearable @onkeyup='formatPhoneOnkeyUp'
                    onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <span> 投诉方式<span>*</span> </span> <br />
                  <el-select v-model="commode" placeholder="请选择" clearable>
                    <el-option v-for="item in commodes" :key="item.id" :label="item.title" :value="item.id">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <span> 投诉科室<span>*</span> </span> <br />
                  <el-cascader ref="cascader" :options="comdes" collapse-tags :props="{
                  value: 'id',
                  label: 'title',
                  children: '_child',
                  multiple: 'true',
                }" :show-all-levels="false" v-model="comde" clearable @change="getCascaderObj"></el-cascader>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span> 投诉人与患者关系 <span>*</span></span><br />
                  <el-select v-model="relation" placeholder="请选择" clearable>
                    <el-option v-for="item in relationlist" :key="item.id" :label="item.title" :value="item.id">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <span> 答复协商时间</span> <br />
                  <el-input placeholder="请输入" v-model="consulttime" type="input" maxlength="3" max="3"
                    oninput="value=value.replace(/[^\d]/g,'')" clearable
                    onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )">
                    <template slot="append">天</template>
                  </el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light">
                  <span> 投诉类别(多选)</span> <br />
                  <el-select v-model="comtype" multiple placeholder="请选择" clearable>
                    <el-option v-for="item in comtypelist" :key="item.id" :label="item.title" :value="item.id">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
              <el-col :span="6" :push="1">
                <div class="grid-content bg-purple">
                  <span> 事件性质 </span><br />
                  <el-select v-model="nature" placeholder="请选择" clearable>
                    <el-option v-for="item in natures" :key="item.state_val" :label="item.title"
                      :value="item.state_val">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="14" :push="3">
                <div class="grid-content bg-purple-light">
                  <span> 联系地址<span>*</span> </span> <br />
                  <el-input v-model="address" placeholder="联系地址" maxlength="50"
                    onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )" clearable></el-input>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
              <el-col :span="22" :push="1">
                <div class="grid-content bg-purple">
                  <span> 投诉原因</span>
                  <el-input type="textarea" v-model="reason"
                    onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )" placeholder="请输入投诉原因"
                    clearable maxlength="100"></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 经办人 -->
          <div class="Addcom-agent">
            <h4>经办人信息</h4>
            <div>
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6" :pull="2">
                  <div class="grid-content bg-purple">
                    <span> 经办人姓名<span>*</span> </span>
                    <el-input v-model="agentname"
                      onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )" placeholder="请输入姓名"
                      clearable type="input" maxlength="20"></el-input>
                  </div>
                </el-col>
                <el-col :span="6" :pull="6">
                  <div class="grid-content bg-purple-light">
                    <span>经办人手机<span>*</span> </span> <br />
                    <el-input v-model="agentphone" placeholder="请输入手机号码" clearable type="input" maxlength="11" max="11"
                      oninput="value=value.replace(/[^\d]/g,'')"
                      onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )"></el-input>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <!-- 患者信息 -->
          <div class="addcom-relevance" v-show="false">
            <h4>关联患者信息(调用HIS)</h4>
            <el-table :data="data" style="width: 94%; margin-left: 3%; margin-top: 20px; margin-bottom: 20px"
              :header-cell-style="getRowClass">
              <el-table-column type="index" width="50" label="序号"> </el-table-column>
              <el-table-column prop="name" label="姓名"> </el-table-column>
              <el-table-column prop="name" label="性别"> </el-table-column>
              <el-table-column prop="name" label="出生日期"> </el-table-column>
              <el-table-column prop="name" label="联系方式"> </el-table-column>
              <el-table-column prop="name" label="地址"> </el-table-column>
              <el-table-column prop="name" label="科室"> </el-table-column>
              <el-table-column prop="name" label="诊断"> </el-table-column>
              <el-table-column fixed="right" label="操作" width="100%" style="border-bottom: none">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="handleClick(scope.row)" style="border-bottom: none">取消关联
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div align="center">
              <el-button type="primary" icon="el-icon-circle-plus" class="addrelevance">添加患者信息</el-button>
            </div>
          </div>
      </div>

      <!-- 弹窗 -->
      <div class="requirement">
        <slot name="dialog"> </slot>
      </div>
      <!-- <slot name="conserve"> -->
      
      <!-- </slot> -->
    </div>
    <Conserve>
        <el-button type="primary" size="medium" icon="iconfont el-icon-hospital-passwordbaocun" class="keep" slot="keep"
          @click="keepform()">提交</el-button>
        <el-button type="primary" size="medium" icon="iconfont el-icon-hospital-passwordai207" class="return"
          style="border: 1px solid #949aef" slot="back" @click="backss()">返回</el-button>
      </Conserve>
  </div>
</template>
<script>
  import Conserve from "../components/conserve";
  // 获取列表
  import service from "@/service/index";

  import BScroll from 'better-scroll'

  export default {
    components: {
      Conserve,
    },
    inject: ["reload"],
    data() {
      return {
        props: {
          multiple: true
        },
        agree: "", //同意要求
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        pickerOption: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        data: [{
          name: 1,
        }, ],
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
            lable: "保密",
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
      formatPhoneOnkeyUp(mobile) {
        var value = mobile.replace(/\D/g, '').substring(0, 11);
        var valueLen = value.length;
        if (valueLen > 3 && valueLen < 8) {
          value = `${value.substr(0, 3)} ${value.substr(3)}`;
        } else if (valueLen >= 8) {
          value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`;
        }
        return value;
      },
      changeInput() {
        var pattern = /^[1-9][0-9]*$/ // 正整数的正则表达式
        // 不符合正整数时
        if (!pattern.test(this.num)) {
          // input 框绑定的内容为空
          this.num = ''
        }
      },
      getCascaderObj() {},
      //保存提交事件
      keepform() {
        if (this.comde !== "" && this.comde !== null && this.comde.length !== 0 && this.incidentdata !== "" && this
          .comdata !== "" && this.comname !== "" &&
          this.comgender !== '' && this.comagenumber !== "" && this.comphone !== "" && this.commode !== "" && this
          .relation !== '' && this.consulttime !== '' &&
          this.nature !== '' && this.comtype !== '' && this.agentname !== '' && this.agentphone !== '' && this
          .address !== '') {
          let one = new Array
          let two = new Array
          for (let i in this.comde) {
            if (this.comde[i].length == 1) {
              one.push(this.comde[i][0])
            } else if (this.comde[i].length == 2) {
              two.push(this.comde[i][1])
            }
          }
          let comdes = one.concat(two);
          let params = {
            event_number: this.comnumber, //业务编号
            event_type: this.comtype, //投诉类型
            cause: this.reason, //投诉原因
            address: this.address, //联系地址
            occur_time: this.incidentdata, //事发时间
            department_id: comdes, //投诉科室
            create_time: this.comdata, //投诉日期
            ComplaintType: this.commode, //投诉方式
            complaint_name: this.comname, //投诉人姓名
            complaint_phone: this.comphone, //投诉人电话
            sex: this.comgender, //投诉人性别
            specific_age: 1, //投诉人年龄
            age: this.comagenumber, //投诉人年龄
            inpatient_relation: this.relation, //患者关系
            reply_time: this.consulttime, //协商时间
            character: this.nature, //事件性质
            handle_name: this.agentname, //经办人姓名
            handle_phone: this.agentphone, //经办人手机号
          };
          console.log(params)
          service.AddComponent(params).then((res) => {
            if (res.code == 20010) {
              this.$message({
                message: res.msg,
                type: "success",
                duration: 1000,
              });
              this.reload()
            } else if (res.code == 20401) {
              this.$message({
                message: "请重新登陆",
                type: "error",
                duration: 1000,
              });
              this.$router.push('/login')
            } else if (res.code == 20403) {
              this.$message({
                message: res.msg,
                type: "error",
                duration: 1000,
              });
              this.$router.push('/dashboard')
            } else {
              this.$message({
                message: res.msg,
                type: "error",
                duration: 1000,
              });
            }

          });
        } else if (this.address == "" || this.address == null) {
          this.$message({
            message: '请输入联系地址',
            type: "error",
            duration: 1000,
          });
        } else if (this.comde == "" || this.comde == null) {
          this.$message({
            message: '请选择投诉科室',
            type: "error",
            duration: 1000,
          });
        } else if (this.comdata == "") {
          this.$message({
            message: '请选择投诉日期',
            type: "error",
            duration: 1000,
          });
        } else if (this.incidentdata == "") {
          this.$message({
            message: '请选择事发日期',
            type: "error",
            duration: 1000,
          });
        } else if (this.comname == "") {
          this.$message({
            message: '请输入投诉人姓名',
            type: "error",
            duration: 1000,
          });
        } else if (this.comgender == "") {
          this.$message({
            message: '请输入投诉人性别',
            type: "error",
            duration: 1000,
          });
        } else if (this.comagenumber == "") {
          this.$message({
            message: '请输入投诉人年龄',
            type: "error",
            duration: 1000,
          });
        } else if (this.comphone == "") {
          this.$message({
            message: '请输入投诉人手机号码',
            type: "error",
            duration: 1000,
          });
        } else if (this.commode == "") {
          this.$message({
            message: '请选择投诉方式',
            type: "error",
            duration: 1000,
          });
        } else if (this.relation == "") {
          this.$message({
            message: '请选择与患者的关系',
            type: "error",
            duration: 1000,
          });
        } else if (this.consulttime == "") {
          this.$message({
            message: '请输入答复时间',
            type: "error",
            duration: 1000,
          });
        } else if (this.nature == "") {
          this.$message({
            message: '请选择事件性质',
            type: "error",
            duration: 1000,
          });
        } else if (this.comtype == "") {
          this.$message({
            message: '请选择投诉类别',
            type: "error",
            duration: 1000,
          });
        } else if (this.agentname == "") {
          this.$message({
            message: '请输入经办人姓名',
            type: "error",
            duration: 1000,
          });
        } else if (this.agentphone == "") {
          this.$message({
            message: '请输入经办人手机号',
            type: "error",
            duration: 1000,
          });
        }
      },
      backss() {
        this.reload()
        sessionStorage.removeItem('add')
      },
      // 设置表头颜色
      getRowClass({
        rowIndex
      }) {
        if (rowIndex == 0) {
          return "background:#c2c5f6;color:#000";
        } else {
          return "";
        }
      },
    },
    created() {
      service.AddCom().then((res) => {
        if (res.code == 20010) {
          this.comnumber = res.data.event_number; // 事件编号
          this.commodes = res.data.ComplaintType; // 事件编号
          this.comtypelist = res.data.event_type; // 投诉方式
          this.natures = res.data.character; // 事件性质
          this.relationlist = res.data.inpatient_relation; // 关系
          this.comdes = res.data.department; //投诉科室
        }
        // else if(res.code==20401){
        //   this.$message({
        //     message: "请重新登陆",
        //     type: "error",
        //     duration: 1000,
        //   });
        //   this.$router.push('/login')
        // }
        // else if(res.code==20403){
        //   this.$message({
        //     message: res.msg,
        //     type: "error",
        //     duration: 1000,
        //   });
        //   this.$router.push('/dashboard')
        // }
        //    else{
        //   this.$message({
        //     message: res.msg,
        //     type: "error",
        //     duration: 1000,
        //   });
        // }
      })


    },
    mounted() {
      const bs = new BScroll('.wrapper', {
        pullUpLoad: true,
        pullDownRefresh: true,
        probeType:3,
        mouseWheel: true
        
      })
    }
  };
</script>

<style scoped>
  @import "../css/addcom.css";

  .wrapper {
    height: 750px;
    overflow: hidden;
  }
</style>