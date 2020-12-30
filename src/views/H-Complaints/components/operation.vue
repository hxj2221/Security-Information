<template>
  <div>
    <div class="operation">
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
              @click="detaile()"
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
      <div class="operation-content">
        <ul
          class="infinite-list"
          style="overflow: auto; height: 760px"
          infinite-scroll-immediate
        >
          <!-- 基本信息 -->
          <div class="box-Information">
            <div class="box-top">
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="7" :push="1"
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
                style="
                  border-bottom: 0.5px solid #e0e2fa;
                  width: 100%;
                  margin-bottom: 20px;
                "
              ></div>
            </div>
          </div>
          <!-- 科室反馈 -->
          <div class="box-feedback">
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
                    <span class="label">投诉原因:</span>
                    <el-input
                      type="textarea"
                      v-model="reason"
                      placeholder="请填写投诉原因"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
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
                    <el-button type="primary" icon="el-icon-circle-plus" @click="upfile()" style="background-color: #666ee8;border:none"
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
          <!-- 提交 -->
          <div class="box-button">
            <slot name="submit">
            <el-button type="primary" icon='el-icon-finished'>确认提交</el-button>
               </slot>
          </div>
        </ul>
      </div>
      <!-- 投诉详情 -->
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <div v-show="dialogVisibless" class="dialog">
              <Look>
                <div slot="title"></div>
                <div slot="content">
                  <ul
                    class="infinite-list"
                    style="overflow: auto; height: 740px; width: 100%"
                    infinite-scroll-immediate
                  >
                    <div class="look-content">
                      <div class="look-content-title">
                        <span>投诉事件调查表</span>
                      </div>
                      <!-- 标题 -->
                      <div class="look-content-top">
                        <el-row type="flex" class="row-bg" justify="center">
                          <el-col :span="6"
                            ><div class="grid-content bg-purple">
                              <span><span>医院名称：</span>第二人民医院</span>
                            </div></el-col
                          >
                          <el-col :span="6"
                            ><div class="grid-content bg-purple-light"></div
                          ></el-col>
                          <el-col :span="6"
                            ><div class="grid-content bg-purple">
                              <span><span>事件编号：</span>TS202011150001</span>
                            </div></el-col
                          >
                        </el-row>
                        <el-row type="flex" class="row-bg" justify="center">
                          <el-col :span="6"
                            ><div class="grid-content bg-purple">
                              <span><span>投诉日期：</span>2020-11-15</span>
                            </div></el-col
                          >
                          <el-col :span="6"
                            ><div class="grid-content bg-purple-light"></div
                          ></el-col>
                          <el-col :span="6"
                            ><div class="grid-content bg-purple">
                              <span><span>事发日期：</span>2020-11-08</span>
                            </div></el-col
                          >
                        </el-row>
                        <el-row type="flex" class="row-bg" justify="center">
                          <el-col :span="6"
                            ><div class="grid-content bg-purple">
                              <span><span>事件性质：</span>投诉</span>
                            </div></el-col
                          >
                          <el-col :span="6"
                            ><div class="grid-content bg-purple-light"></div
                          ></el-col>
                          <el-col :span="6"
                            ><div class="grid-content bg-purple">
                              <span><span>事件状态：</span>待审批</span>
                            </div></el-col
                          >
                        </el-row>
                        <hr />
                      </div>
                      <div class="look-content-box">
                        <!-- 内容标题 -->

                        <!-- 科室调查 -->
                        <div class="box-contents">
                          <div class="box-top">
                            <el-row type="flex" class="row-bg" justify="space-between">
                              <el-col :span="3" :push="2"
                                ><div class="grid-content bg-purple">
                                  <span><b>科室调查</b></span>
                                </div></el-col
                              >
                              <el-col :span="3"
                                ><div class="grid-content bg-purple-light"></div
                              ></el-col>
                              <el-col :span="9" :pull="1"
                                ><div class="grid-content bg-purple">
                                  <span><b>下发时间：</b>2020-11-18 13:30:26</span>
                                </div></el-col
                              >
                            </el-row>
                          </div>
                          <div class="box-content">
                            <el-row>
                              <el-col :span="4"
                                ><div class="grid-content bg-purple">
                                  <span class="label">参与调查科室：</span>
                                </div></el-col
                              >
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span>心血管内科、血液科</span>
                                </div></el-col
                              >
                            </el-row>
                          </div>
                          <div class="box-content-child">
                            <el-row v-for="item in list" :key="item.name">
                              <el-col :span="4"
                                ><div class="grid-content bg-purple">
                                  <span class="label">{{ item.label }}：</span>
                                </div></el-col
                              >
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span class="value">{{ item.value }}</span>
                                </div></el-col
                              >
                            </el-row>
                            <div class="file">
                              <el-row>
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filename">文件名</span>
                                  </div></el-col
                                >
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filedetaile">查看</span>
                                  </div></el-col
                                >
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filename">文件名</span>
                                  </div></el-col
                                >
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filedetaile">查看</span>
                                  </div></el-col
                                >
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filename">文件名</span>
                                  </div></el-col
                                >
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filedetaile">查看</span>
                                  </div></el-col
                                >
                              </el-row>
                            </div>
                            <div
                              style="
                                border-bottom: 0.5px solid #797979;
                                width: 100%;
                                margin-bottom: 20px;
                              "
                            ></div>
                          </div>
                          <div class="box-content-child">
                            <el-row v-for="item in list" :key="item.name">
                              <el-col :span="4"
                                ><div class="grid-content bg-purple">
                                  <span class="label">{{ item.label }}：</span>
                                </div></el-col
                              >
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span class="value">{{ item.value }}</span>
                                </div></el-col
                              >
                            </el-row>
                            <div class="file">
                              <el-row>
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filename">文件名</span>
                                  </div></el-col
                                >
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filedetaile">查看</span>
                                  </div></el-col
                                >
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filename">文件名</span>
                                  </div></el-col
                                >
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filedetaile">查看</span>
                                  </div></el-col
                                >
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filename">文件名</span>
                                  </div></el-col
                                >
                                <el-col :span="4"
                                  ><div class="grid-content bg-purple">
                                    <span class="filedetaile">查看</span>
                                  </div></el-col
                                >
                              </el-row>
                            </div>
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
                                  <span class="label">所在病区</span>
                                </div></el-col
                              >
                              <el-col :span="20"
                                ><div class="grid-content bg-purple-light">
                                  <span class="value">二楼</span>
                                </div></el-col
                              >
                            </el-row>
                            <el-row>
                              <el-col :span="4"
                                ><div class="grid-content bg-purple">
                                  <span class="label">所在病区</span>
                                </div></el-col
                              >
                              <el-col :span="20"
                                ><div class="grid-content bg-purple-light">
                                  <span class="value">二楼</span>
                                </div></el-col
                              >
                            </el-row>
                            <el-row>
                              <el-col :span="4"
                                ><div class="grid-content bg-purple">
                                  <span class="label">所在病区</span>
                                </div></el-col
                              >
                              <el-col :span="20"
                                ><div class="grid-content bg-purple-light">
                                  <span class="value">二楼</span>
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
                                  <span class="label">所在病区</span>
                                </div></el-col
                              >
                              <el-col :span="20"
                                ><div class="grid-content bg-purple-light">
                                  <span class="value">二楼</span>
                                </div></el-col
                              >
                            </el-row>
                            <el-row>
                              <el-col :span="4"
                                ><div class="grid-content bg-purple">
                                  <span class="label">所在病区</span>
                                </div></el-col
                              >
                              <el-col :span="20"
                                ><div class="grid-content bg-purple-light">
                                  <span class="value">二楼</span>
                                </div></el-col
                              >
                            </el-row>
                            <el-row>
                              <el-col :span="4"
                                ><div class="grid-content bg-purple">
                                  <span class="label">所在病区</span>
                                </div></el-col
                              >
                              <el-col :span="20"
                                ><div class="grid-content bg-purple-light">
                                  <span class="value">二楼</span>
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
                  </ul>
                </div>
              </Look>
            </div></div
        ></el-col>
      </el-row>
      <!-- 上传文件弹窗 -->
      <div class="upfile">
      <el-dialog
        title="提示"
        :visible.sync="upfiles"
        width="30%"
        :before-close="Close"
      >
         <!-- <div class="input-box">
          <span><span style="color:red">*</span>文件标题</span> <el-input v-model="filetitle" placeholder='请输入文件标题'></el-input>
       </div>
       <br>
        <div class="input-box">
          <span><span style="color:red">*</span>文件标题</span> <el-input v-model="filetitle" placeholder='请输入文件标题'></el-input>
       </div> -->
       <el-form ref="form" label-width="80px">
         <el-form-item label="文件标题 ">
           <el-input v-model="filetitle" placeholder='请输入文件标题'></el-input>
         </el-form-item>
         <el-form-item label="文件描述">
         <el-input type="textarea" v-model="filedescribe" placeholder='请输入文件描述'></el-input>
         </el-form-item>
         <el-form-item label="上传附件" class="uploadfile" >
           <el-input v-model="uploadfile" type="file" style="border: none;" class="uploadfile"></el-input>
           
         </el-form-item>
       </el-form>
       <el-button type="primary" icon='el-icon-upload' class="uploadfiles">上传文件</el-button>
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
      uploadfile:'',//上传附件
      filedescribe:'',//文件描述
      form:'',
      filetitle:'',//文件标题
      upfiles:false,
      list: [
        {
          label: "调查科室",
          value: "心血管内科",
        },
        {
          label: "负责人",
          value: "李琴/13955551234",
        },
        {
          label: "当事员工",
          value: "张华/13665426162，王敏/18687654523",
        },
        {
          label: "反馈时间",
          value: "2020-11-19 17:15:26",
        },
        {
          label: "诊疗经过",
          value: "患者术后医生开具药物出现肢体、语言等功能障碍",
        },
        {
          label: "针对性答复",
          value:
            "今日于影像科行静脉肾盂造影检查。检查过程中需要50ml空针，静脉注射药品需要通过静脉留置针，中途需要封管、冲管1次，影像科没有50ml空针及护士行相映操作。患者在检查台上等候，需要陪检大夫外出寻找50ml空针，而门诊、门诊手术室，包块妇科病房均无50ml 空针，导致患者等待时间过长。 静脉注射前影像科医师发现需要分两次注入，",
        },
      ],

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
      filelist: [
        {
          ID: "FJ20201229001",
          filename: "调解书",
          describe: "这是一个调解书",
          filesize: "32.23kb",
          uptime: "2020-12-02 20:56:37",
          filetype: "jpg",
          uploader: "王丽",
        },
        {
          ID: "FJ20201229001",
          filename: "调解书",
          describe: "这是一个调解书",
          filesize: "32.23kb",
          uptime: "2020-12-02 20:56:37",
          filetype: "jpg",
          uploader: "王丽",
        },
        {
          ID: "FJ20201229001",
          filename: "调解书",
          describe: "这是一个调解书",
          filesize: "32.23kb",
          uptime: "2020-12-02 20:56:37",
          filetype: "jpg",
          uploader: "王丽",
        },
        {
          ID: "FJ20201229001",
          filename: "调解书",
          describe: "这是一个调解书",
          filesize: "32.23kb",
          uptime: "2020-12-02 20:56:37",
          filetype: "jpg",
          uploader: "王丽",
        },
        {
          ID: "FJ20201229001",
          filename: "调解书",
          describe: "这是一个调解书",
          filesize: "32.23kb",
          uptime: "2020-12-02 20:56:37",
          filetype: "jpg",
          uploader: "王丽",
        },
        {
          ID: "FJ20201229001",
          filename: "调解书",
          describe: "这是一个调解书",
          filesize: "32.23kb",
          uptime: "2020-12-02 20:56:37",
          filetype: "jpg",
          uploader: "王丽",
        },
        {
          ID: "FJ20201229001",
          filename: "调解书",
          describe: "这是一个调解书",
          filesize: "32.23kb",
          uptime: "2020-12-02 20:56:37",
          filetype: "jpg",
          uploader: "王丽",
        },
        {
          ID: "FJ20201229001",
          filename: "调解书",
          describe: "这是一个调解书",
          filesize: "32.23kb",
          uptime: "2020-12-02 20:56:37",
          filetype: "jpg",
          uploader: "王丽",
        },
      ],
    };
  },
  methods: {
    handleClose() {
      this.dialogVisibless = false;
    },
    Close(){
this.upfiles=false
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
      this.upfiles=true
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
