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
              <el-date-picker
                v-model="comdata"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <span> 投诉人姓名 </span>
              <el-input
                v-model="comname"
                placeholder="请输入投诉人姓名"
              ></el-input>
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
                  <el-select
                    v-model="comage"
                    slot="prepend"
                    style="width: 80px"
                  >
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
              <el-input
                v-model="comphone"
                placeholder="请输入投诉人手机号码"
              ></el-input>
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
              <span> 投诉人与患者关系 </span><br>
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
              <el-input placeholder="请输入内容" v-model="consulttime" style="width:60%">
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
              <span> 事件性质 </span><br>
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
              <el-input
                v-model="address"
                placeholder="联系地址"
              ></el-input></div
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
                <el-input
                  v-model="agentname"
                  placeholder="请输入姓名"
                ></el-input>
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
      <div class="addcom-relevance"  >
        <h4>关联患者信息(调用HIS)</h4>
        <el-table
          :data="data"
          style="
            width: 94%;
            margin-left: 3%;
            margin-top: 20px;
            margin-bottom: 20px;
          "
          :header-cell-style="getRowClass"
        >
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column prop="name" label="序号"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="handleClick(scope.row)"
                >取消关联</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- <el-button type="primary">添加患者信息</el-button> -->
        <div align="center">
          <el-button
            type="primary"
            icon="el-icon-circle-plus"
            class="addrelevance"
            >添加患者信息</el-button
          >
        </div>
      </div>
      <!-- 弹窗 -->
       <div class="requirement">
      <el-dialog
        title="医疗投诉处理基本要求"
        :visible.sync="dialogVisible"
        width="60%"
        height='60px'
       
        :before-close="handleClose"
      >
        <!-- <span>这是一段信息</span> -->
          <p>
            1.医疗机构应当贯彻“以患者为中心”的理念，遵循合法、公正、及时、便民的原则。
          </p>
          <p>
            2.医疗机构在受理投诉过程中,对医疗机构的基本要求是:以现行法律法规及医疗规范、常规为准绳，实事求是，正确面对存在的问题，勇于承担过错责任,公平公正、合理合法、规范高效地处理医疗投诉。以规范性处置为前提，从工作机制上消除“大闹大赔、小闹小赔、不闹不赔”的不良社会现象,树立风清气正的医疗行业风气。
          </p>
          <p>
            3.投诉管理机构设置和人员组成应符合《医院投诉管理办法》的相关规定的标准。
          </p>
          <p>
            4.医疗问题投诉实行“首诉负责制"”。无论患者初次投诉到医疗机构任何部门及人员都要负责接待，问清投诉问题，转交或通知相关部门]接待。
          </p>
          <p>
            5.投诉受理条件:投诉人具有行使患者本人权利的资格且医患之间所签订的医疗服务合同成立。
          </p>
          <p>
            6、任何人不得因投诉而对患者进行打击报复、不得因投诉而中断正常诊疗进程,不得因投诉而取消正常的医患沟通工作。
          </p>
          <p>
            7.医疗纠纷调解过程中应当尊重当事人的辩护权，应当以公平、公正、合理、合法、平等、自愿为指导原则，在平静的气氛下进行;医患双方都有权充分表达自身观点，也都有义务认真听取对方观点。
          </p>
          <p>
            8、医疗纠纷调解全过程中不允许出现任何暴力或暴力威胁的行为;
            -旦出现非致人伤害的软暴力行为，协商必须立即中止直至软暴力行为停止，一旦出现致人伤害的硬暴力行为或者明显的人身伤害威胁，协商必须彻底终止;任何在暴力或暴力威胁下一方当事人的意思表示均属完全无效。
          </p>
          <p>
            9、医疗纠纷调解无法达成-致时，
            任何-方在协商过程中曾经提出的建议不作为该方的承诺，不作为该医疗纠纷在其它解决途径中单方让步的依据。任何-
            -方有权通知对方停止协商，此时医疗纠纷按照其它法律途径解决。
          </p>
    
          <p style="border-bottom: 1px solid rgba(187, 187, 187, 0.376);margin:20px 0"></p>
         <el-checkbox v-model="agree"  class="check">阅读并同意以上说明</el-checkbox>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >继续</el-button
          >
        </span>
      </el-dialog>
    </div>
    <Conserve></Conserve>
     </div>
  </div>
</template>
<script>
import Conserve from '../components/conserve'
export default {
  components: {
    Conserve
  },

  data() {
    return {
      agree:'',//同意要求
      dialogVisible: false, //弹窗显示
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
    // 弹窗点击事件
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    //表格点击事件
    handleClick() {},
    // 设置表头颜色
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6";
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
