<template>
  <div>
    <div class="Complaints-background clearfix">
      <!-- 列表页面 -->
      <Complaintslist v-show="list">
        <el-button
          type="primary"
          icon="el-icon-circle-plus"
          class="addcomplaint"
          @click="addcomsss()"
          slot="buttom"
          >新增</el-button
        >
        <el-button
          icon="iconfont el-icon-hospital-passwordexport"
          class="exportcomplaint"
          slot="export"
          @click="exportcom()"
          >导出</el-button
        >
        <div slot="table">
          <Table>
            <div slot="column">
              <el-table-column fixed="right" label="操作" width="150%">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="looks(scope.row)"
                    >查看</el-button
                  >
                  <el-button type="text" size="small" @click="record(scope.row)"
                    >医患记录</el-button
                  >
                  <el-button type="text" size="small" @click="handle(scope.row)"
                    >操作</el-button
                  >
                </template>
              </el-table-column>
            </div>
          </Table>
        </div>
      </Complaintslist>
      <!-- 添加投诉 -->
      <Addcom v-show="add">
        <div slot="dialog" class="dialog">
          <el-dialog
            title="医疗投诉处理基本要求"
            :visible.sync="dialogVisible"
            width="40%"
            height="60px"
            :before-close="handleClose"
          >
            <div>
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

              <p
                style="
                  border-bottom: 1px solid rgba(187, 187, 187, 0.376);
                  margin: 20px 0;
                "
              ></p>
            </div>
            <el-checkbox v-model="agree" class="check">阅读并同意以上说明</el-checkbox>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">继续</el-button>
            </span>
          </el-dialog>
        </div>
        <div slot="conserve">
          <!-- <Conserve>
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
          </Conserve> -->
        </div>
      </Addcom>
      <!-- 查看 -->
      <Look v-show="look" :lookdata='lookdata'>
        <el-button
          type="primary"
          icon="el-icon-printer"
          class="printing"
          slot="stamp"
          @click="stamp()"
          >打印调查表</el-button
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
      </Look>
      <Operation v-show="operations" :operationdata='operationdata' :opdata='opdata'>
        <div slot="records">
          <el-button type="primary" icon="el-icon-edit" class="records" @click="records()"
            >医患记录</el-button
          >
        </div>
        <div slot="back">
          <el-button
            type="primary"
            icon="iconfont el-icon-hospital-passwordai207"
            class="return"
            style="border: 1px solid #949aef"
            @click="backss"
            >返回</el-button
          >
        </div>
      </Operation>
    </div>
  </div>
</template>

<script>
import Complaintslist from "../H-Complaints/components/complaintslist";
import Addcom from "../H-Complaints/components/addcom";
import Look from "../H-Complaints/components/Look";
import Read from "../H-Complaints/components/read";
import Conserve from "../H-Complaints/components/conserve";
import Table from "../H-Complaints/components/Tables";
import Operation from "../H-Complaints/components/operation";
// 添加投诉
import service from "@/service/index";
import qs from 'qs'
export default {
  components: { Complaintslist, Addcom, Look, Read, Conserve, Table, Operation },

  data() {
    return {
      operationdata:'',
      opdata:'',//操作详情
      lookdata:'',//详情数据
      list: true,
      add: false,
      look: false,
      dialogVisible: false, //弹窗显示
      agree: "",
      operations: false,
    };
  },

  methods: {
    // 操作页面
    handle(index) {
      console.log(index);
      this.list = false;
      this.add = false;
      this.look = false;
      this.operations = true;
       let params = {
        event_number: index.event_number
      };
      service.Issue(index.event_number).then(res=>{
        console.log(res)
        this.operationdata=index
        this.opdata=res.data

      })
    },
    records(index) {
      console.log(index);
      //跳转到医患记录
      this.$router.push("/Connect");
    },
    // 弹窗点击事件
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 操作记录
    record() {
      this.$router.push("/Connect");
    },
    // 查看详情
    looks(index) {
      this.list = false;
      this.add = false;
      this.look = true;
      this.operations = false;
       let params = {
        event_number: index.event_number
      };
      service.componrdetaile(qs.stringify(params)).then((res) => {
        console.log(res);
        this.lookdata=res
      });
    },
    // 添加页面保存
    keepform() {
      this.list = true;
      this.add = false;
      this.look = false;
      this.operations = false;
    },
    // 打印
    stamp() {
      console.log(1);
    },
    // 返回
    backss() {
      this.list = true;
      this.add = false;
      this.look = false;
      this.operations = false;
    },
    // 添加投诉
    addcomsss() {
      this.list = false;
      this.add = true;
      this.look = false;
      this.dialogVisible = true;
      this.operations = false;
     
    },
    // 导出事件
    exportcom() {
      console.log(1);
    },
    // 搜索事件
  },
  created() {
    if(this.look == true){
    if (event_number !== null && event_number !== "" && token !== null && token !== "") {
      let params = {
        event_number: event_number
      };
      service.componrdetaile(params).then((res) => {
        console.log(res);
      });
    }
    }
  },
};
</script>

<style scoped>
@import "./css/index.css";
</style>
