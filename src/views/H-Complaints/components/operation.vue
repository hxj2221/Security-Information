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
                  <span class="value">TS11545414544145</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">事件状态：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">调查中</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">投诉科室：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">心血管内科/血液科</span>
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

            <div
              style="border-bottom: 0.5px solid #e0e2fa; width: 100%; margin-bottom: 20px"
            ></div>
          </div>
        </div>
        <!-- 经办人信息 -->
        <div class="box-feedback" v-show="false">
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

            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="10" :push="1"
                ><div class="grid-content bg-purple">
                  <span class="label">经办人姓名:</span>
                  <el-input
                    type="input"
                    v-model="reason"
                    placeholder="请填写"
                    autosize
                  ></el-input></div
              ></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="10" :push="1"
                ><div class="grid-content bg-purple">
                  <span class="label">经办人联系电话:</span>
                  <el-input
                    type="input"
                    v-model="reason"
                    placeholder="请填写"
                    autosize
                  ></el-input></div
              ></el-col>
            </el-row>
          </div>
        </div>
        <!-- 科室反馈 -->
        <div class="box-feedback" v-show="false">
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
                      v-model="reason"
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
                      v-model="reason"
                      placeholder="请填写"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
            </div>
            <!-- 附件 -->
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
            <el-row type="flex" class="row-bg" justify="space-between">
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
        <!-- 审批操作 -->
        <div class="box-feedback">
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
            <!-- 下发科室 -->
            <div>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">下发科室:</span>
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
                <el-col :span="6" :push="1" style="margin-left: 10px"
                  ><div class="grid-content bg-purple">
                    <span class="label">截止日期:</span>
                    <el-input
                      type="input"
                      v-model="endday"
                      placeholder="请输入调查天数"
                    ></el-input></div
                ></el-col>
              </el-row>
           
            </div>
            <!-- 科室自查 -->
            <div v-show="false">
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
                      v-model="dispute"
                      placeholder="请填写"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
            </div>
            <!-- 院内讨论 -->
            <div>
               <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="20" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">初步意见:</span>
                    <el-input
                      type="textarea"
                      v-model="opinion"
                      placeholder="请填写"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
            </div>
          
            <div v-show="false">
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
              <el-row type="flex" class="row-bg" justify="space-between">
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
            <el-button type="primary" icon="el-icon-finished">确认提交</el-button>
            <el-button type="primary">下发</el-button>
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
import Look from "../components/Look";

export default {
  components: {
    Look,
  },
  data() {
    return {
      opinion:'',//初步意见
      dispute:'',//争议焦点
      facts:'',//主要事实
      endday:'',//截止天数
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
          value: 1,
          value: 1,
        },
      ],
      filelist: [],
    };
  },
  methods: {
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
  created() {},
};
</script>
<style scoped>
@import "../css/operation.css";
</style>
