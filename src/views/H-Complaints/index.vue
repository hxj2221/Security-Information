<template>
  <div>
    <div class="Complaints-background clearfix">
      <!-- 列表页面 -->
      <Complaintslist v-if="list">
        <el-button
          type="primary"
          size="medium"
          icon="el-icon-circle-plus"
          class="addcomplaint"
          @click="addcomsss()"
          slot="buttom"
          >新增</el-button
        >
       
        <div slot="table">
          <Table>
            <div slot="column">
              <el-table-column fixed="right" label="操作" width="150%">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="looks(scope.row)"
                    >查看</el-button
                  >
                  <el-button type="text" size="small" @click="records(scope.row)"
                    >医患记录</el-button
                  >
                  <el-button type="text" v-if="scope.row.state.state_val!==-1" size="small" @click="handle(scope.row)"
                    >操作</el-button>
                   <el-button type="text" v-if="scope.row.state.state_val==-1" size="small" @click="handle(scope.row)"
                    >修改</el-button>
                </template>
              </el-table-column>
            </div>
          </Table>
        </div>
      </Complaintslist>
      <!-- 添加投诉 -->
      <Addcom v-if="add==true">
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
              <el-button @click="backss">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false" :disabled="agree==true?false:true">继续</el-button>
            </span>
          </el-dialog>
        </div>
        <div slot="conserve"></div>
      </Addcom>
      <!-- 查看 -->
      <Look v-if="look==true" :lookdata="lookdata">
      
        <el-button
          type="primary"
          size="medium"
          icon="iconfont el-icon-hospital-passwordai207"
          class="return"
          style="border: 1px solid #949aef"
          slot="back"
          @click="backss()"
          >返回</el-button
        >
      </Look>
      <Operation v-if="operations==true" :operationdata="operationdata" :opdata="opdata" :filelist='filelisttrue'>
        
        <div slot="detail">
            <el-button
              type="primary"
              icon="el-icon-s-order"
              class="detail"
              slot="reference"
              @click="detail"
              >投诉详情</el-button
            >
          </div>
        <div slot="back">
          <el-button
          size="medium"
            type="primary"
            icon="iconfont el-icon-hospital-passwordai207"
            class="return"
            style="border: 1px solid #949aef"
            @click="backss"
            >返回</el-button
          >
        </div>
         <div slot='drawerss'>
            <el-drawer title=" " :visible.sync="drawer" :withHeader="false" size="60%">
        <ul
          class="infinite-list"
          style="overflow: auto; height: 870px; texr-aligin: center"
        >
          <Look style="width: 100%; margin: 0px 0px; padding: 0px 0px" :lookdata='lookdata'>
            <div slot="title"></div>
          </Look>
        </ul>
      </el-drawer>
      </div>
      </Operation>
       <Edit v-if="editshows==true" :editdata='editdata' :editdatas='editdatas'>
        <div slot="conserve"></div>
      </Edit>
    </div>
  </div>
</template>

<script>
import Complaintslist from "../H-Complaints/components/complaintslist";
import Addcom from "../H-Complaints/components/addcom";
import Look from "../H-Complaints/components/Look";
import Conserve from "../H-Complaints/components/conserve";
import Table from "../H-Complaints/components/Tables";
import Operation from "../H-Complaints/components/operation";
import Edit from "../H-Complaints/components/edit";

// 添加投诉
import service from "@/service/index";
import qs from "qs";
export default {
  inject: ["reload"],
  components: { Complaintslist, Addcom, Look, Conserve, Table, Operation,Edit},
  data() {
    return {
      editdata:'',//修改页面数据
       editdatas:'',//修改页面数据
      operationdata: "",
      opdata: "", //操作详情
      lookdata: "", //详情数据
      list: true,
      add: false,
      look: false,
      dialogVisible: false, //弹窗显示
      agree: "",
      operations: false,
      drawer: false,
      event_number:'',
      editshows:false,
      filelisttrue:[]
    };
  },

  methods: {
    detail(){
      this.drawer = true
       //详情数据接口
       let params = {
           event_number:this.event_number,
          };
          service.componrdetaile(params).then((res) => {
          if(res.code==20010){
              this.lookdata = res.data;
          }
        });
    },
    // 操作页面
    handle(index) {
      this.event_number=index.event_number
      if(index.state.state_val==-1){
       service.EditComponent(index.event_number).then((res) => {
        if (res.code == 20010) {
            this.list = false;
          this.add = false;
          this.look = false;
          this.operations = false;
          this.editshows=true
          this.editdata=index
         this.editdatas=res.data
        } 
      })
      }
      else if(index.state.state_val==-2){
        this.$message({
            message: "已退回！无法操作",
            type: "error",
            duration: 1000,
          });
      }
        else if(index.state.state_val==20){
        this.$message({
            message: "事件已结束！无法操作",
            type: "error",
            duration: 1000,
          });
      }
      else{
            //操作页面数据接口
      service.Issue(index.event_number).then((res) => {
        console.log(res)
        if (res.code == 20010) {
          this.list = false;
          this.add = false;
          this.look = false;
          this.operations = true;
          this.editshows=false
          this.operationdata = index;
          this.opdata = res.data;
        }
      
      
      });
      }
    
    },
    records(index) {
      //跳转到医患记录
      this.$router.push({
            path:'/Connect',
            query:{event_number:index.event_number}
           })
    },
    // 弹窗点击事件
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
         this.backss()
        })
        .catch((_) => {});
    },
    // 操作记录
    record() {
      this.$router.push("/Connect");
    },
    // 查看详情
    looks(index) {
      
      let params = {
        event_number: index.event_number,
      };
      service.componrdetaile(qs.stringify(params)).then((res) => {
         if(res.code==20010){
              this.lookdata = res.data;
              this.list = false;
      this.add = false;
      this.look = true;
      this.editshows=false
      this.operations = false;
          }
      });
    },
    // 打印
    stamp() {
    },
    // 返回
    backss() {
      this.list = true;
      this.add = false;
      this.look = false;
      this.operations = false;
      this.dialogVisible = false
      this.editshows=false
      this.reload()
    },
    // 添加投诉
    addcomsss() {
      this.list = false;
      this.add = true;
      this.look = false;
      this.editshows=false
      this.dialogVisible = true;
      this.operations = false;
    },
    // 导出事件
    exportcom() {  
      const dataB = JSON.parse(sessionStorage.getItem('tableData'))
      dataB.forEach(element => {
           element.complaint_type=element.complaint_type.title
           element.state=element.state.title
      });
    import('@/vendor/Export2Excel').then(excel => {
      const tHeader = ['事件编号', '投诉人姓名', '性别', '年龄/岁','手机号码','投诉科室','投诉方式','投诉时间','流转部门','事件状态' ]
      const filterVal = ['event_number', 'complaint_name', 'sex', 'age', 'complaint_phone', 'department', 'complaint_type', 'create_time', 'pass_names', 'state' ]
      const list = dataB
      const data = this.formatJson(filterVal, list)
      excel.export_json_to_excel({
        header: tHeader,
        data,
        filename: '业务列表',
        autoWidth: true,
        bookType: 'xlsx'
      })
    })
    },
   formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => {
      return v[j]
    }))
   },
     // 设置表头颜色
    getRowClass( rowIndex) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
  },
  },
  created() {
  },
};
</script>

<style scoped>
@import "./css/index.css";
</style>
