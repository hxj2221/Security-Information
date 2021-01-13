<template>
  <div>
    <div class="operation" style="min-height: 800px">
      <div class="operation-top">
        <span>投诉详情-调查中</span>
        <div>
          <slot name="records">
            <el-button type="primary" icon="el-icon-edit" class="records"
              >医患记录</el-button
            >
          </slot>
          <slot name="detail">
            <el-button
              type="primary"
              icon="el-icon-s-order"
              class="detail"
              slot="reference"
              @click="drawer = true"
              >投诉详情</el-button
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
      </div>
      <el-drawer title="快捷查看" :visible.sync="drawer" :with-header="false" size="59%">
        <ul
          class="infinite-list"
          style="overflow: auto; height: 870px; texr-aligin: center"
        >
          <Look style="width: 100%; margin: 0px 0px; padding: 0px 0px">
            <div slot="title"></div>
          </Look>
        </ul>
      </el-drawer>
      <div class="operation-content">
        <!-- 基本信息 -->
        <div class="box-Information">
          <div class="box-top">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="7" :push="1"
                ><div class="grid-content bg-purple">
                  <span><b>基本信息</b></span>
                </div></el-col
              >
            </el-row>
          </div>
          <div class="box-content">
            <el-row>
              <el-col :span="4"
                ><div class="grid-content bg-purple">
                  <span class="label">事件编号：</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationdata.event_number }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">事件状态：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <!-- <span class="value">{{ operationdata.state.title }}</span> -->
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">投诉科室：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationdata.department_id }}</span>
                </div></el-col
              >
            </el-row>
            <el-row>
              <el-col :span="4"
                ><div class="grid-content bg-purple">
                  <span class="label">投诉人姓名：</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationdata.handle_name }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">性别：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationdata.sex }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">年龄：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationdata.age }}{{operationdata.specific_age}}</span>
                </div></el-col
              >
            </el-row>

            <div
              style="border-bottom: 0.5px solid #e0e2fa; width: 100%; margin-bottom: 20px"
            ></div>
          </div>
        </div>

        <!-- 科室反馈 -->
        <div class="box-feedback"  >
          <!-- v-show="operationdata.state.state_val == 10"-->
          <div class="box-top">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="7" :push="1"
                ><div class="grid-content bg-purple">
                  <span class="feedback-title"><b>科室反馈</b></span>
                </div></el-col
              >
            </el-row>
          </div>
          <div class="feedback-content">
            <!-- 操作区域 -->
            <div>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">当事员工:</span>
                    <el-select v-model="peopel" multiple placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select></div
                ></el-col>
              </el-row>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="20" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">诊疗经过:</span>
                    <el-input
                      type="textarea"
                      v-model="treatment"
                      placeholder="请填写"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="20" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">针对性答复:</span>
                    <el-input
                      type="textarea"
                      v-model="response"
                      placeholder="请填写"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
            </div>
          </div>
        </div>
        <!-- 审批操作 -->
        <div class="box-feedback" >
          <!-- v-show="operationdata.state.state_val !== 10" -->
          <div class="box-top">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="7" :push="1"
                ><div class="grid-content bg-purple">
                  <span class="feedback-title"><b>审批操作</b></span>
                </div></el-col
              >
            </el-row>
          </div>
          <div class="feedback-content">
            <!-- 操作区域 -->
            <div>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">审批操作:</span>
                    <el-select v-model="checkstate" placeholder="请选择事件状态">
                      <el-option
                       
                      >
                      <!--  v-for="item in statelist"
                        :key="item.D_M_ID"
                        :label="item.D_M_Name"
                        :value="item.D_M_ID" -->
                      </el-option>
                    </el-select></div
                ></el-col>
              </el-row>
              <!-- 经办人信息 -->

              <!-- 退回 -->
              <div v-show="checkstate == 9">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">退回原因:</span>
                      <el-input
                        type="textarea"
                        v-model="preliminary"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 驳回 -->
              <div v-show="checkstate == 8">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">驳回原因:</span>
                      <el-input
                        type="textarea"
                        v-model="preliminary"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 科室自查 -->
              <div v-show="checkstate == 10">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择下发科室:</span>
                      <el-select v-model="issue" placeholder="请选择下发科室">
                        <el-option
                         
                        >
                        <!--  v-for="item in issuelist"
                          :key="item.D_M_ID"
                          :label="item.D_M_Name"
                          :value="item.D_M_ID" -->
                        </el-option>
                      </el-select></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple" style="margin-left: 10px">
                      <span class="label">输入天数:</span>
                      <el-input
                        type="input"
                        v-model="needtime"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 院内讨论 -->
              <div v-show="checkstate == 12">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">主要事实:</span>
                      <el-input
                        type="textarea"
                        v-model="facts"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">争议焦点:</span>
                      <el-input
                        type="textarea"
                        v-model="focus"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 医患沟通 -->
              <div
                v-show="
                  checkstate == 42 ||
                  checkstate == 14 ||
                  checkstate == 15 ||
                  checkstate == 16 ||
                  checkstate == 17 ||
                  checkstate == 18||
                  checkstate==13
                "
              >
                <el-row type="flex" class="row-bg" justify="space-between" >
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple" style="margin-left: 10px">
                      <span class="label">约定日期:</span>
                      <el-input
                        type="input"
                        v-model="date"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between"  v-show="
                  checkstate == 42 ||
                  checkstate == 14 ||
                  checkstate == 15 ||
                  checkstate == 16 ||
                  checkstate == 17 ||
                  checkstate == 18
                ">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label" v-show="checkstate == 42">初步意见:</span>
                      <span class="label" v-show="checkstate == 14 || checkstate == 18"
                        >情况说明:</span
                      >
                      <span class="label" v-show="checkstate == 15">处理意见:</span>
                      <span class="label" v-show="checkstate == 16 || checkstate == 17"
                        >事实及理由:</span
                      >
                      <el-input
                        type="textarea"
                        v-model="preliminary"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 持续改进【科室】 -->
              <div v-show="checkstate == 19">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择下发科室:</span>
                      <el-select v-model="issue" placeholder="请选择下发科室">
                        <el-option
                         
                        >
                        <!--  v-for="item in issuelist"
                          :key="item.D_M_ID"
                          :label="item.D_M_Name"
                          :value="item.D_M_ID" -->
                        </el-option>
                      </el-select></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 改进完成 -->
              <div v-show="checkstate == 21">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择责任人:</span>
                      <el-select v-model="liable" placeholder="请选择责任人">
                        <el-option
                        
                        >
                        <!--   v-for="item in liablelist"
                          :key="item.D_M_ID"
                          :label="item.D_M_Name"
                          :value="item.D_M_ID" -->
                        </el-option>
                      </el-select></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">根因分析:</span>
                      <el-input
                        type="textarea"
                        v-model="analysis"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">责任意见:</span>
                      <el-input
                        type="textarea"
                        v-model="responsibility"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">整改措施:</span>
                      <el-input
                        type="textarea"
                        v-model="measures"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
                <!-- 结束 -->
              <div v-show="checkstate == 23">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择责任科室:</span>
                      <el-select v-model="liable"  placeholder="请选择责任科室">
                        <el-option
                        
                        >
                        <!--   v-for="item in liablelist"
                          :key="item.D_M_ID"
                          :label="item.D_M_Name"
                          :value="item.D_M_ID" -->
                        </el-option>
                      </el-select></div
                  ></el-col>
                </el-row>
                  <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉类别:</span>
                      <el-select v-model="liable"  placeholder="请选择投诉类别">
                        <el-option
                         
                        >
                        <!--  v-for="item in liablelist"
                          :key="item.D_M_ID"
                          :label="item.D_M_Name"
                          :value="item.D_M_ID" -->
                        </el-option>
                      </el-select></div
                  ></el-col>
                </el-row>
                  <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择责任度:</span>
                      <el-select v-model="liable"  placeholder="请选择责任度">
                        <el-option
                         
                        >
                        <!--  v-for="item in liablelist"
                          :key="item.D_M_ID"
                          :label="item.D_M_Name"
                          :value="item.D_M_ID" -->
                        </el-option>
                      </el-select></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">直接经济损失:</span>
                      <el-input
                        type="textarea"
                        v-model="analysis"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">处理意见:</span>
                      <el-input
                        type="textarea"
                        v-model="responsibility"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
            </div>
            <div
              class="box-feedback"
              v-show="checkstate == 8 || checkstate == 9 || checkstate == 7"
            >
              <div class="box-top">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="7" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="feedback-title"><b>经办人信息</b></span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div class="feedback-content">
                <!-- 操作区域 -->

                <el-row
                  type="flex"
                  class="row-bg"
                  justify="space-between"
                  style="margin-left: 10px"
                >
                  <el-col :span="10" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">经办人姓名:</span>
                      <el-input
                        type="input"
                        v-model="agentname"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row
                  type="flex"
                  class="row-bg"
                  justify="space-between"
                  style="margin-left: 10px"
                >
                  <el-col :span="10" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">经办人联系电话:</span>
                      <el-input
                        type="input"
                        v-model="agentphone"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
            </div>
            <!-- 附件 -->
            <div
              v-show="
                checkstate == 10 ||
                checkstate == 11 ||
                checkstate == 13 ||
                checkstate == 14 ||
                checkstate == 16 ||
                checkstate == 17 ||
                checkstate == 18 ||
                checkstate == 21 ||
                checkstate == 22
              "
            >
              <el-row
                type="flex"
                class="row-bg"
                justify="space-between"
                style="margin: 20px 0"
              >
                <el-col :span="15" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">附件信息:</span>
                  </div></el-col
                >
                <el-col :span="2" :pull="1"
                  ><div class="grid-content bg-purple">
                    <el-button
                      type="primary"
                      icon="el-icon-circle-plus"
                      @click="upfile()"
                      style="background-color: #666ee8; border: none"
                      >上传附件</el-button
                    >
                  </div></el-col
                >
              </el-row>
              <el-row
                type="flex"
                class="row-bg"
                justify="space-between"
                v-show="filelist.length !== 0"
              >
                <el-col :span="22" :push="1"
                  ><div class="grid-content bg-purple">
                    <el-table
                      :data="filelist"
                      style="width: 100%"
                      :header-cell-style="getRowClass"
                    >
                      <el-table-column prop="ID" label="ID" width="width">
                      </el-table-column>
                      <el-table-column prop="filename" label="文件名" width="width">
                      </el-table-column>
                      <el-table-column prop="describe" label="描述" width="width">
                      </el-table-column>
                      <el-table-column prop="filesize" label="文件大小" width="width">
                      </el-table-column>
                      <el-table-column prop="uptime" label="更新时间" width="width">
                      </el-table-column>
                      <el-table-column prop="filetype" label="文件类型" width="width">
                      </el-table-column>
                      <el-table-column prop="uploader" label="上传人员" width="width">
                      </el-table-column>
                      <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                          <slot name="fileoper">
                            <el-button
                              @click="handleClick(scope.row)"
                              type="text"
                              size="small"
                              >下载</el-button
                            >
                            <el-button type="text" size="small">删除</el-button>
                          </slot>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div></el-col
                >
              </el-row>
            </div>
          </div>
        </div>
        <!-- 提交 -->
        <div class="box-button">
          <slot name="submit">
            <el-button type="primary" @click="submit()" icon="el-icon-finished" v-show="checkstate !== 10 && checkstate !== 19&&checkstate !== 9&&checkstate !== 8">确认提交</el-button>
            <el-button type="primary" v-show="checkstate == 10 || checkstate == 19"
              >下发</el-button
            >
            <el-button type="primary" @click="send()" v-show="checkstate == 9">退回</el-button>
            <el-button type="primary" @click="reject()" v-show="checkstate == 8">驳回</el-button>
          </slot>
        </div>
      </div>
      <!-- 投诉详情 -->

      <!-- 上传文件弹窗 -->
      <div class="upfile">
        <el-dialog
          title="上传文件"
          :visible.sync="upfiles"
          width="30%"
          style="margin-top: 8%"
          :before-close="Close"
        >
          <el-form ref="form" label-width="90px">
            <el-form-item label="文件标题：">
              <el-input v-model="filetitle" placeholder="请输入文件标题"></el-input>
            </el-form-item>
            <el-form-item label="文件描述：">
              <el-input
                type="textarea"
                v-model="filedescribe"
                placeholder="请输入文件描述"
              ></el-input>
            </el-form-item>
            <el-form-item label="上传附件：" class="uploadfile">
              <el-input
                v-model="uploadfile"
                type="file"
                style="border: none"
                class="uploadfile"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" icon="el-icon-upload" class="uploadfiles"
            >上传文件</el-button
          >
          <span slot="footer" class="dialog-footer">
            <el-button @click="upfiles = false">取 消</el-button>
            <el-button type="primary" @click="upfiles = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import service from "@/service";
import Look from "../components/Look";

export default {
  props: { operationdata: "" ,opdata:''},
  components: {
    Look,
  },
  data() {
    return {
      date: "", //约定日期
      liable: "", //责任人
      liablelist: [], //责任人列表
      agentname: "", //经办人姓名
      agentphone: "", //经办人联系方式
      treatment: "", // 诊疗经过
      response: "", //针对性答复
      needtime: "", //输入天数
      issue: "", //下发科室
      issuelist: [], //科室列表
      facts: "", //主要事实
      focus: "", //争议焦点
      analysis: "", //根因分析
      responsibility: "", //责任意见
      measures: "", //整改措施
      preliminary: "", //初步意见
      checkstate: 0, //选中状态
      statelist: [], //状态列表
      drawer: false,
      uploadfile: "", //上传附件
      filedescribe: "", //文件描述
      form: "",
      filetitle: "", //文件标题
      upfiles: false,

      dialogVisibless: false,
      reason: "", //投诉原因
      peopel: "", //当事员工
      options: [
        //员工列表
        {
          value: "1",
          lable: "终止",
        },
      ],
      filelist: [
        // {
        //   ID: "FJ20201229001",
        //   filename: "调解书",
        //   describe: "这是一个调解书",
        //   filesize: "32.23kb",
        //   uptime: "2020-12-02 20:56:37",
        //   filetype: "jpg",
        //   uploader: "王丽",
        // }
      ],
    };
  },
  methods: {
    //提交
    submit(){

    },
    // 退回
    send(){
      
    },
    // 驳回
    reject(){

    },
    handleClose() {
      this.dialogVisibless = false;
    },
    Close() {
      this.upfiles = false;
    },
    //   投诉详情
    detaile() {
      if (this.dialogVisibless != true) {
        this.dialogVisibless = true;
      } else {
        this.dialogVisibless = false;
      }
    },
    //   上传文件弹窗

    upfile() {
      this.upfiles = true;
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
    // service.AddManaged(4).then((res) => {
    //   this.statelist = res.data;
    // });
  },
};
</script>
<style scoped>
@import "../css/operation.css";
</style>
