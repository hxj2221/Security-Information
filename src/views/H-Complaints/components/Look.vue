<template>
  <div>
    <div class="look">
      <slot name="title">
        <div class="look-top">
          <span>投诉详情-调查中</span>
          <div>
            <slot name="stamp">
              <el-button
                type="primary"
                icon="iconfont el-icon-hospital-passworddayin"
                class="printing"
                >打印调查表</el-button
              >
            </slot>
            <slot name="back">
              <el-button
                type="primary"
                icon="iconfont el-icon-hospital-passwordai207"
                class="return"
                style="border: 1px solid #949aef"
                >返回</el-button
              >
            </slot>
          </div>
          <div
            style="border-bottom: 2px solid #cccccc70; width: 100%; height: 30px"
          ></div>
        </div>
      </slot>
      <!-- 打印内容 -->
      <slot name="content">
        <div
          class="look-content"
        >
          <div class="look-content-title">
            <span>投诉事件调查表</span>
          </div>
          <!-- 标题 -->
          <div class="look-content-top">
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>医院名称：</span>兰州大学第二医院</span
                  >
                </div></el-col
              >
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>事件编号：</span
                    >{{ }}</span
                  >
                </div></el-col
              >
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>投诉日期：</span
                    >{{  }}</span
                  >
                </div></el-col
              >
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>事发日期：</span
                    >{{  }}</span
                  >
                </div></el-col
              >
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>事件性质：</span
                    >{{  }}</span
                  >
                </div></el-col
              >
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>事件状态：</span
                    >{{  }}</span
                  >
                </div></el-col
              >
            </el-row>
            <hr />
          </div>
          <div class="look-content-box">
            <!-- 审批节点 -->
            <div class="box-Information">
              <div class="box-top">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="3" :push="2"
                    ><div class="grid-content bg-purple">
                      <span><b>科室自查</b></span>
                    </div></el-col
                  >
                  <el-col :span="3"
                    ><div class="grid-content bg-purple-light"></div
                  ></el-col>
                  <el-col :span="9" :pull="1"
                    ><div class="grid-content bg-purple">
                      <span><b>操作时间：</b>2021-1-4 00:00:00</span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div class="box-content">
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">审批部门：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">医务处</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">负责人：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">魏忠文/13955551234</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">状态修改：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">已受理→科室自查 </span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">下发科室：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">血液科</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">主要事实：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">无</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">争议焦点：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">无</span>
                    </div></el-col
                  >
                </el-row>
                <div style="border-bottom: 0.5px solid #797979; width: 100%"></div>
                <div class="file clearfix">
                  <div>
                    <span class="filename">文件名</span>
                    <span class="filedetaile">查看</span>
                  </div>
                  <div>
                    <span class="filename">文件名</span>
                    <span class="filedetaile">查看</span>
                  </div>
                  <div>
                    <span class="filename">文件名</span>
                    <span class="filedetaile">查看</span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <!-- 科室调查 -->
            <div
              class="box-contents"
            >
              <div class="box-top">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="3" :push="2">
                    <div class="grid-content bg-purple">
                      <span
                        ><b>{{}}</b></span
                      >
                    </div></el-col
                  >
                  <el-col :span="3"
                    ><div class="grid-content bg-purple-light"></div
                  ></el-col>
                  <el-col :span="9" :pull="1"
                    ><div class="grid-content bg-purple">
                      <span><b>下发时间：</b>{{}}</span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div class="box-content clearfix">
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">参与调查科室：</span>
                    </div></el-col
                  >
                  <el-col :span="20">
                    <div class="grid-content bg-purple-light">
                      <span>{{ }}</span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div
              >
                <div
                  class="box-content-child clearfix"
                >
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">调查科室：</span>
                      </div></el-col
                    >
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light">
                        <span class="value">{{  }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">负责人：</span>
                      </div></el-col
                    >
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light">
                        <span class="value">{{ }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">当事员工：</span>
                      </div></el-col
                    >
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light">
                        <span class="value">{{ }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">反馈时间：</span>
                      </div></el-col
                    >
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light">
                        <span class="value">{{  }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">诊疗经过：</span>
                      </div></el-col
                    >
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light">
                        <span class="value">{{ }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <div style="border-bottom: 0.5px solid #797979; width: 100%"></div>
                  <div class="file clearfix">
                    <div >
                      <span class="filename"></span>
                      <span class="filedetaile">查看</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <!-- 投诉人信息 -->
            <div class="box-Information">
              <div class="box-top">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="3" :push="2"
                    ><div class="grid-content bg-purple">
                      <span><b>投诉人信息</b></span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div class="box-content">
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉人姓名：</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">张大牛</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">性别：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">男</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">年龄：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">65</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">投诉方式：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">上级转办</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">与患者关系：</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">本人</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">答复协商日期：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">3日</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉科室：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">心血管内科、血液科</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉类别：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">费用、医院制度、服务态度</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉原因：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value"
                        >患者后颈部疼痛伴四肢无力8小时急诊入院，5小时后接入手术室行手术治疗，现患者截瘫，家属认为要求办理转院手续</span
                      >
                    </div></el-col
                  >
                </el-row>
                <div
                  style="
                    border-bottom: 0.5px solid #797979;
                    width: 100%;
                    margin-bottom: 20px;
                  "
                ></div>
              </div>
              <hr />
            </div>
            <!-- 患者信息 -->
            <div class="box-Information">
              <div class="box-top">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="3" :push="2"
                    ><div class="grid-content bg-purple">
                      <span><b>患者信息</b></span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div class="box-content">
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉人姓名：</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">张大牛</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">性别：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">男</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">年龄：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">65</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">医保类型：</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">社保</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">手机：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">13898761234</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">最新就诊日期：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">2020-11-15</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">所在病区：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">普通外科一病区</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">所在病房：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">306</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">诊断信息：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value"
                        >患者后颈部疼痛伴四肢无力8小时急诊入院，5小时后接入手术室行手术治疗，现患者截瘫，家属认为要求办理转院手续</span
                      >
                    </div></el-col
                  >
                </el-row>
                <div
                  style="
                    border-bottom: 0.5px solid #797979;
                    width: 100%;
                    margin-bottom: 20px;
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
import service from "@/service/index";
export default {
  props:{
    lookdata: {}
  },
  components: {},
  data() {
    return {
      data: [
        {
          GetLoop: [
            {
              Participating: [
                {
                  D_Names: "科室一、科室四",
                  Num: "第1次科室调查",
                  Time: "2020-12-29 00:00:00",
                  SurveyProgress: [
                    [
                      {
                        D_Name: "科室一",
                        Department_Head: "李四/12345678921",
                        StaffInvolved: "无",
                        EndTime: "2020-01-01 00:00:00",
                        I_After: "无",
                        I_Reply: "无",
                        E_Name: [
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                          {
                            E_Number: "666666",
                            E_Name: "附件六",
                          },
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                        ],
                      },
                    ],
                    [
                      {
                        D_Name: "科室四",
                        Department_Head: "李四/1248787821",
                        StaffInvolved: "无",
                        EndTime: "2020-01-01 00:00:00",
                        I_After: "1111",
                        I_Reply: "1111",
                        E_Name: [
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                          {
                            E_Number: "666666",
                            E_Name: "附件六",
                          },
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                        ],
                      },
                    ],
                  ],
                },
              ],
              ApprovalDepartment: [
                {
                  Time: "2020-12-31 00:00:00",
                  Department: "医务处",
                  Department_Head: "王五/12345678921",
                  UpdateState: "无→345",
                  D_Name: "科室一、科室四",
                  Complaint_Type: "456",
                  Duty: "无",
                  PersonLiable: "张三/科室一",
                  CCDepartment: "无",
                  A_Opinion: "审批意见意见意见意见",
                  E_Name: [
                    {
                      E_Number: "55555",
                      E_Name: "附件五",
                    },
                    {
                      E_Number: "666666",
                      E_Name: "附件六",
                    },
                    {
                      E_Number: "55555",
                      E_Name: "附件五",
                    },
                  ],
                },
              ],
            },
            {
              Participating: [
                {
                  D_Names: "科室五",
                  Num: "第2次科室调查",
                  Time: "2020-12-29 00:00:00",
                  SurveyProgress: [
                    [
                      {
                        D_Name: "科室五",
                        Department_Head: "张三/12345678921",
                        StaffInvolved: "无",
                        EndTime: "2020-01-01 00:00:00",
                        I_After: "4444",
                        I_Reply: "4444",
                        E_Name: [
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                          {
                            E_Number: "666666",
                            E_Name: "附件六",
                          },
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                        ],
                      },
                    ],
                  ],
                },
              ],
              ApprovalDepartment: [],
            },
          ],
          BasicInformation: [
            {
              H_Name: "兰州大学第二医院",
              D_I_Number: "YY12143254376587",
              Complaint_Time: "2020-12-31",
              Incident_Time: "2020-12-31",
              Dispute_State: "纠纷",
              Event_State: "科室自查",
            },
          ],
          ComplaintsInformation: [
            {
              C_I_Name: "投诉人一号",
              C_I_Gender: 0,
              C_I_Age: 18,
              Complaint_Mode: "345",
              D_M_Name: "345",
              Reply_Time: 3,
              D_Name: "科室二、科室三",
              Complaint_Type: "456",
              Complain_Reason: "原因",
            },
          ],
          PatientInformation: [
            {
              P_I_Name: "患者一号",
              P_I_Gender: 0,
              P_I_Age: 18,
              Insurance_Type: 0,
              P_I_Phone: 13445678945,
              Hz_Diagnosis_Time: "2020-01-01 00:00:00",
              Inpatient_Area: "病区",
              Ward_Number: "病房",
              Hz_Outpatient_Diagnosis: "诊断",
              P_I_Medical_Card: "123465",
            },
          ],
        },
      ],
    };
  },
  methods: {},
  created() {
 
  },
};
</script>
<style scoped>
@import "../css/look.css";
</style>
