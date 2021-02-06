<template>
  <div>
    <div class="look" v-if="lookdata!=''">
      <div class="look-content">
        <slot name="title">
          <div class="look-top">
            <span>投诉详情-调查中</span>
            <div>
              <slot name="stamp">
                <el-button type="primary" size="medium" icon="iconfont el-icon-hospital-passworddayin" class="printing"
                  @click="stamp">打印调查表</el-button>
              </slot>
              <slot name="back">
                <el-button type="primary" size="medium" icon="iconfont el-icon-hospital-passwordai207" class="return">返回
                </el-button>
              </slot>
            </div>
            <!-- <div
            style="border-bottom: 2px solid #cccccc70; width: 100%; height: 30px"
          ></div> -->
          </div>
          <!-- <br/> <br/> <br/> <br/> <br/> <br/> -->
        </slot>
        <!-- 打印内容 -->
        <bscroll>
          <div id="aa">
            <slot name="content">
              <div class="look-content-title">
                <span>投诉事件调查表</span>
              </div>
              <!-- 标题 -->
              <div class="look-content-top">
                <el-row type="flex" class="row-bg" justify="center">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <span><span>医院名称：</span>兰州大学第二医院</span>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <span><span>事件编号：</span>
                        {{lookdata.event_number }}
                      </span>
                    </div>
                  </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <span><span>投诉日期：</span>
                        {{ lookdata.create_time}}
                      </span>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <span><span>事发日期：</span>
                        {{ lookdata.occur_time }}
                      </span>
                    </div>
                  </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <span><span>事件性质：</span>
                        {{lookdata.character }}
                      </span>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <span><span>事件状态：</span>
                        {{ lookdata.state.title}}
                      </span>
                    </div>
                  </el-col>
                </el-row>
                <hr />
              </div>
              <div class="look-content-box">
                <!-- 审批节点 -->
                <!-- 科室改进 -->
                <div v-if="lookdata.improves">
                  <div v-for="i in lookdata.improves" :key="i.feedback_time">
                    <div class="box-Information">
                      <div class="box-top">
                        <el-row type="flex" class="row-bg" justify="space-between">
                          <el-col :span="3" :push="2">
                            <div class="grid-content bg-purple">
                              <span><b>科室改进</b></span>
                            </div>
                          </el-col>
                          <el-col :span="3">
                            <div class="grid-content bg-purple-light"></div>
                          </el-col>
                          <el-col :span="9" :pull="1">
                            <div class="grid-content bg-purple">
                              <span><b>下发时间：</b>{{i.feedback_time}}</span>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="box-content clearfix">
                        <el-row>
                          <el-col :span="4" style="border-bottom:1px solid #797979">
                            <div class="grid-content bg-purple">
                              <span class="label">参与调查科室：</span>
                            </div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content bg-purple-light">
                              <span><a v-for="items in i.department" :key="items"
                                  style="margin-right:5px;margin-left:10px">{{items}}</a></span>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="box-content" v-for="item in i.improves" :key="item.department.title">
                        <el-row>
                          <el-col :span="4">
                            <div class="grid-content bg-purple">
                              <span class="label">改进科室：</span>
                            </div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content bg-purple-light">
                              <span class="value">{{item.department.title}}</span>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="4">
                            <div class="grid-content bg-purple">
                              <span class="label">负责人：</span>
                            </div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content bg-purple-light">
                              <span class="value"
                                v-if="item.dutyuser">{{item.dutyuser.name}}/{{item.dutyuser.phone}}</span>
                              <span class="value" v-else>无</span>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="4">
                            <div class="grid-content bg-purple">
                              <span class="label">责任人：</span>
                            </div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content bg-purple-light">
                              <span class="value" v-if="item.investigator_ids">{{item.investigator_ids}}</span>
                              <span class="value" v-else>无</span>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="4">
                            <div class="grid-content bg-purple">
                              <span class="label">根因分析：</span>

                            </div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content bg-purple-light">
                              <span class="value" v-if="item.examine_textone">{{item.examine_textone}}</span>
                              <span class="value" v-else>无</span>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="4">
                            <div class="grid-content bg-purple">
                              <span class="label">责任意见：</span>
                            </div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content bg-purple-light">
                              <span class="value" v-if="item.examine_texttwo">{{item.examine_texttwo}}</span>
                              <span class="value" v-else>无</span>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="4">
                            <div class="grid-content bg-purple">
                              <span class="label">整改措施：</span>
                            </div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content bg-purple-light">
                              <span class="value" v-if="item.examine_textthree">{{item.examine_textthree}}</span>
                              <span class="value" v-else>无</span>
                            </div>
                          </el-col>
                        </el-row>
                        <div style="border-bottom: 0.5px solid #797979; width: 100%"></div>
                        <div class="file clearfix">
                          <div v-for="itemsss in item.enclosure" :key="itemsss.file_name">
                            <span class="filename">{{itemsss.file_name}}</span>
                            <span class="filedetaile" @click="downfile(itemsss)"><a href="#" class="downfile"
                                style="text-decoration: none;color: #6f77e9;">下载</a></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="lookdata.investigate">
                  <div class="box-contents" v-for="item in lookdata.investigate" :key="item.investigate_number">
                    <div class="box-top" v-if="item.investigate_number">
                      <el-row type="flex" class="row-bg" justify="space-between">
                        <el-col :span="3" :push="2">
                          <div class="grid-content bg-purple">
                            <span v-if="item.investigate_number"><b>第{{item.investigate_number}}次调查</b></span>
                          </div>
                        </el-col>
                        <el-col :span="3">
                          <div class="grid-content bg-purple-light"></div>
                        </el-col>
                        <el-col :span="9" :pull="1">
                          <div class="grid-content bg-purple">
                            <span><b>下发时间：</b>{{item.Issue_time}}</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="box-content clearfix" v-if="item.investigate_number">
                      <el-row>
                        <el-col :span="4">
                          <div class="grid-content bg-purple">
                            <span class="label">参与调查科室：</span>
                          </div>
                        </el-col>
                        <el-col :span="20">
                          <div class="grid-content bg-purple-light">
                            <span><a v-for="items in item.department" :key="items"
                                style="margin-right:5px;margin-left:10px">{{items}}</a></span>
                          </div>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="4">
                          <div class="grid-content bg-purple">
                            <span class="label" style="border-top:none">截止时间：</span>
                          </div>
                        </el-col>
                        <el-col :span="20">
                          <div class="grid-content bg-purple-light">
                            <span style="border-top:none"><a
                                style="margin-right:5px;margin-left:10px;border-top:none">{{item.end_time}}</a></span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <!-- 科室调查 -->
                    <div v-if="item.investigate_number">
                      <div v-for="items in item.investigate" :key="items.improvement_number">
                        <div class="box-content-child clearfix">
                          <el-row>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                <span class="label">调查科室：</span>
                              </div>
                            </el-col>
                            <el-col :span="20">
                              <div class="grid-content bg-purple-light">
                                <span class="value">{{items.department.title}}</span>
                              </div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                <span class="label">负责人：</span>
                              </div>
                            </el-col>
                            <el-col :span="20">
                              <div class="grid-content bg-purple-light">
                                <span class="value"
                                  v-if="items.dutyuser">{{items.dutyuser.name}}/{{items.dutyuser.phone}}</span>
                                <span class="value" v-else>无</span>
                              </div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                <span class="label">当事员工：</span>
                              </div>
                            </el-col>
                            <el-col :span="20">
                              <div class="grid-content bg-purple-light">
                                <span class="value" v-if="items.investigator_ids">{{items.investigator_ids}}</span>
                                <span class="value" v-else>无</span>
                              </div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                <span class="label">反馈时间：</span>
                              </div>
                            </el-col>
                            <el-col :span="20">
                              <div class="grid-content bg-purple-light">
                                <span class="value" v-if="items.feedback_time">{{items.feedback_time}}</span>
                                <span class="value" v-else style="color:red">未反馈</span>
                              </div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                <span class="label">诊疗经过：</span>
                              </div>
                            </el-col>
                            <el-col :span="20">
                              <div class="grid-content bg-purple-light">
                                <span class="value" v-if="items.diagnose_feedback">{{items.diagnose_feedback}}</span>
                                <span class="value" v-else>无</span>
                              </div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                <span class="label">针对性答复：</span>
                              </div>
                            </el-col>
                            <el-col :span="20">
                              <div class="grid-content bg-purple-light">
                                <span class="value" v-if="items.event_reply">{{items.event_reply}}</span>
                                <span class="value" v-else>无</span>
                              </div>
                            </el-col>
                          </el-row>
                          <div style="border-bottom: 0.5px solid #797979; width: 100%"></div>
                          <div class="file clearfix" v-if="items.enclosure">
                            <div v-for="itemsss in items.enclosure" :key="itemsss.file_name">
                              <span class="filename">{{itemsss.file_name}}</span>
                              <span class="filedetaile" @click="downfile(itemsss)"><a href="#" class="downfile"
                                  style="text-decoration: none;color: #6f77e9;">下载</a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <!-- 审批操作 -->
                    <div v-if="item.examine">
                      <div class="box-Information" v-for="itemssss in item.examine" :key="itemssss.id">
                        <div class="box-top">
                          <el-row type="flex" class="row-bg" justify="space-between">
                            <el-col :span="3" :push="2">
                              <div class="grid-content bg-purple">
                                <span><b>{{itemssss.event_state.title}}</b></span>
                              </div>
                            </el-col>
                            <el-col :span="3">
                              <div class="grid-content bg-purple-light"></div>
                            </el-col>
                            <el-col :span="9" :pull="1">
                              <div class="grid-content bg-purple">
                                <span><b>操作时间：</b>{{itemssss.examine_time}}</span>
                              </div>
                            </el-col>
                          </el-row>
                        </div>
                        <div class="box-content">
                          <el-row>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                <span class="label">审批部门：</span>
                              </div>
                            </el-col>
                            <el-col :span="20">
                              <div class="grid-content bg-purple-light">
                                <span class="value">{{itemssss.department.title}}</span>
                              </div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                <span class="label">负责人：</span>
                              </div>
                            </el-col>
                            <el-col :span="20">
                              <div class="grid-content bg-purple-light">
                                <span class="value"
                                  v-if="itemssss.user">{{itemssss.user.name}}/{{itemssss.user.phone}}</span>
                                <span class="value" v-else>无</span>
                              </div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                <span class="label">状态修改：</span>
                              </div>
                            </el-col>
                            <el-col :span="20">
                              <div class="grid-content bg-purple-light">
                                <span
                                  class="value">{{itemssss.event_state_before.title}}→{{itemssss.event_state.title}}
                                </span>
                              </div>
                            </el-col>
                          </el-row>
                          <!-- 院内讨论显示内容 -->
                          <div v-if="itemssss.event_state.state_val==3">
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label">抄送部门：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span class="value"
                                    v-if="itemssss.department_ids">{{itemssss.department_ids}}</span>
                                  <span class="value" v-else>无</span>
                                </div>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label">主要事实：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span class="value">{{itemssss.examine_textone?itemssss.examine_textone:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label">争议焦点：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span class="value">{{itemssss.examine_texttwo?itemssss.examine_texttwo:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                          <!-- 医患沟通中 -->
                          <div v-if="itemssss.event_state.state_val==4">
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label">初步意见：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span class="value">{{itemssss.examine_textone?itemssss.examine_textone:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                          <!--人民调解 责任鉴定 司法诉讼 患方推迟  中止调解  终止调解  科室改进-->
                          <div
                            v-if="itemssss.event_state.state_val==5||itemssss.event_state.state_val==6||itemssss.event_state.state_val==7||itemssss.event_state.state_val==8||itemssss.event_state.state_val==9||itemssss.event_state.state_val==10">
                            <!-- 人民调解 -->
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label">约定日期：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span
                                    class="value">{{itemssss.appointment_time?itemssss.appointment_time:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                            <!-- 责任鉴定    司法诉讼 -->
                            <div v-if="itemssss.event_state.state_val==6||itemssss.event_state.state_val==10">
                              <el-row>
                                <el-col :span="4">
                                  <div class="grid-content bg-purple">
                                    <span class="label">情况说明：</span>
                                  </div>
                                </el-col>
                                <el-col :span="20">
                                  <div class="grid-content bg-purple-light">
                                    <span
                                      class="value">{{itemssss.examine_textone?itemssss.examine_textone:'无'}}</span>
                                  </div>
                                </el-col>
                              </el-row>
                            </div>
                            <!-- 患方推迟 -->
                            <div v-if="itemssss.event_state.state_val==7">
                              <el-row>
                                <el-col :span="4">
                                  <div class="grid-content bg-purple">
                                    <span class="label">处理意见：</span>
                                  </div>
                                </el-col>
                                <el-col :span="20">
                                  <div class="grid-content bg-purple-light">
                                    <span
                                      class="value">{{itemssss.examine_textone?itemssss.examine_textone:'无'}}</span>
                                  </div>
                                </el-col>
                              </el-row>
                            </div>
                            <!-- 中止调解   终止调解 -->
                            <div v-if="itemssss.event_state.state_val==8||itemssss.event_state.state_val==9">
                              <el-row>
                                <el-col :span="4">
                                  <div class="grid-content bg-purple">
                                    <span class="label">事实及理由：</span>
                                  </div>
                                </el-col>
                                <el-col :span="20">
                                  <div class="grid-content bg-purple-light">
                                    <span
                                      class="value">{{itemssss.examine_textone?itemssss.examine_textone:'无'}}</span>
                                  </div>
                                </el-col>
                              </el-row>
                            </div>
                            <!-- 持续改进科室 -->
                            <div v-if="itemssss.event_state.state_val==11">
                              <el-row>
                                <el-col :span="4">
                                  <div class="grid-content bg-purple">
                                    <span class="label">下发调查科室：</span>
                                  </div>
                                </el-col>
                                <el-col :span="20">
                                  <div class="grid-content bg-purple-light">
                                    <span class="value">无</span>
                                  </div>
                                </el-col>
                              </el-row>
                            </div>
                          </div>
                          <!-- 改进完成医院 -->
                          <div v-if="itemssss.event_state.state_val==14">
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label look-texaeras">处理意见：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span
                                    class="value look-texaeras">{{itemssss.examine_textone?itemssss.examine_textone:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label look-texaeras">管理措施：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span
                                    class="value look-texaeras">{{itemssss.examine_texttwo?itemssss.examine_texttwo:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                          <!-- 已结束 -->
                          <div v-if="itemssss.event_state.state_val==20">
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label">责任科室：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span
                                    class="value">{{itemssss.responsibility_did?itemssss.responsibility_did:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label">投诉类别：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span class="value">{{itemssss.event_type?itemssss.event_type:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label">责任度：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span
                                    class="value">{{itemssss.responsibility_how?itemssss.responsibility_how:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label look-texaerasss">直接经济损失：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span
                                    class="value look-texaerasss">{{itemssss.examine_textone?itemssss.examine_textone:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label look-texaerasss">处理意见：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span
                                    class="value look-texaerasss">{{itemssss.examine_texttwo?itemssss.examine_texttwo:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                          <!-- 退回 -->
                          <div v-if="itemssss.event_state.state_val==-2">


                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label look-texaerasss">退回原因：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span
                                    class="value look-texaerasss">{{itemssss.examine_textone?itemssss.examine_textone:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                          <!-- 退回 -->
                          <div v-if="itemssss.event_state.state_val==-1">


                            <el-row>
                              <el-col :span="4">
                                <div class="grid-content bg-purple">
                                  <span class="label look-texaerasss">退回原因：</span>
                                </div>
                              </el-col>
                              <el-col :span="20">
                                <div class="grid-content bg-purple-light">
                                  <span
                                    class="value look-texaerasss">{{itemssss.examine_textone?itemssss.examine_textone:'无'}}</span>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                          <div style="border-bottom: 0.5px solid #797979; width: 100%"></div>
                          <div class="file clearfix" v-if="itemssss.enclosure">
                            <div v-for="itemsssss in itemssss.enclosure" :key="itemsssss.file_name">
                              <span class="filename">{{itemsssss.file_name}}</span>
                              <span class="filedetaile" @click="downfile(itemsssss)"><a href="#" class="downfile"
                                  style="text-decoration: none;color: #6f77e9;">下载</a></span>
                            </div>
                          </div>

                        </div>
                        <hr />
                      </div>

                    </div>

                  </div>
                </div>
                <!-- 投诉人信息 -->
                <div class="box-Information">
                  <div class="box-top">
                    <el-row type="flex" class="row-bg" justify="space-between">
                      <el-col :span="3" :push="2">
                        <div class="grid-content bg-purple">
                          <span><b>投诉人信息</b></span>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="box-content">
                    <el-row>
                      <el-col :span="4">
                        <div class="grid-content bg-purple">
                          <span class="label">投诉人姓名：</span>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{lookdata.complaint_name}}</span>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content bg-purple"></div>
                        <span class="label">性别：</span>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{lookdata.sex}}</span>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content bg-purple"></div>
                        <span class="label">年龄：</span>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{lookdata.age}}{{lookdata.specific_age}}</span>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="4">
                        <div class="grid-content bg-purple"></div>
                        <span class="label">投诉方式：</span>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{lookdata.complaint_type.title}}</span>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content bg-purple">
                          <span class="label">与患者关系：</span>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content bg-purple-light">
                          <span class="value"
                            v-if="lookdata.inpatientrelation!==null&&lookdata.inpatientrelation!==''">{{lookdata.inpatientrelation.title}}</span>
                          <span class="value" v-else>无</span>
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content bg-purple"></div>
                        <span class="label">答复协商日期：</span>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content bg-purple-light">
                          <span class="value"
                            v-if="lookdata.reply_time!==null&&lookdata.reply_time!==''">{{lookdata.reply_time}}日</span>
                          <span class="value"
                            v-else-if="lookdata.reply_time==null||lookdata.reply_time==''">{{lookdata.reply_time}}日</span>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="4">
                        <div class="grid-content bg-purple">
                          <span class="label">经办人信息：</span>
                        </div>
                      </el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value"
                            v-if="lookdata.handle_name">{{lookdata.handle_name}}/{{lookdata.handle_phone}}</span>
                          <span class="value" v-else>无</span>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="4">
                        <div class="grid-content bg-purple">
                          <span class="label">投诉科室：</span>
                        </div>
                      </el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{lookdata.department_id}}</span>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="4">
                        <div class="grid-content bg-purple">
                          <span class="label">投诉类别：</span>
                        </div>
                      </el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value" v-if="lookdata.event_type">{{lookdata.event_type}}</span>
                          <span class="value" v-else>无</span>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="4">
                        <div class="grid-content bg-purple">
                          <span class="label look-texaeras">投诉原因：</span>
                        </div>
                      </el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value look-texaeras" v-if="lookdata.cause">{{lookdata.cause}}</span>
                          <span class="value look-texaeras" v-else>无</span>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="4">
                        <div class="grid-content bg-purple">
                          <span class="label look-texaeras">联系地址：</span>
                        </div>
                      </el-col>
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value look-texaeras" v-if="lookdata.address">{{lookdata.address}}</span>
                          <span class="value look-texaeras" v-else>无</span>
                        </div>
                      </el-col>
                    </el-row>
                    <div style="
                  border-bottom: 0.5px solid #797979;
                  width: 100%;
                  margin-bottom: 20px;
                "></div>
                  </div>
                  <hr />
                </div>
                <!-- 患者信息 -->
                <div v-if="lookdata.patient!==''&&lookdata.patient!==null">
                  <div class="box-Information" v-for="item in lookdata.patient" :key="item.age">
                    <div class="box-top">
                      <el-row type="flex" class="row-bg" justify="space-between">
                        <el-col :span="3" :push="2">
                          <div class="grid-content bg-purple">
                            <span><b>患者信息</b></span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="box-content">
                      <el-row>
                        <el-col :span="4">
                          <div class="grid-content bg-purple">
                            <span class="label">投诉人姓名：</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">
                            <span class="value">{{item.name}}</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="grid-content bg-purple"></div>
                          <span class="label">性别：</span>
                        </el-col>
                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">
                            <span class="value">{{item.sex}}</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="grid-content bg-purple"></div>
                          <span class="label">年龄：</span>
                        </el-col>
                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">
                            <span class="value">{{item.age}}</span>
                          </div>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="4">
                          <div class="grid-content bg-purple">
                            <span class="label">医保类型：</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">
                            <span class="value">{{item.医保}}</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="grid-content bg-purple"></div>
                          <span class="label">手机：</span>
                        </el-col>
                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">
                            <span class="value">{{item.手机号}}</span>
                          </div>
                        </el-col>
                        <el-col :span="4">
                          <div class="grid-content bg-purple"></div>
                          <span class="label">最新就诊日期：</span>
                        </el-col>
                        <el-col :span="4">
                          <div class="grid-content bg-purple-light">
                            <span class="value">{{item.就诊日期}}</span>
                          </div>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="4">
                          <div class="grid-content bg-purple">
                            <span class="label">所在病区：</span>
                          </div>
                        </el-col>
                        <el-col :span="20">
                          <div class="grid-content bg-purple-light">
                            <span class="value">{{item.病房}}</span>
                          </div>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="4">
                          <div class="grid-content bg-purple">
                            <span class="label">所在病房：</span>
                          </div>
                        </el-col>
                        <el-col :span="20">
                          <div class="grid-content bg-purple-light">
                            <span class="value">{{item.病房}}</span>
                          </div>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="4">
                          <div class="grid-content bg-purple">
                            <span class="label look-texaeras">诊断信息：</span>
                          </div>
                        </el-col>
                        <el-col :span="20">
                          <div class="grid-content bg-purple-light">
                            <span class="value look-texaeras">{{item.诊断信息}}</span>
                          </div>
                        </el-col>
                      </el-row>
                      <div style="
                  border-bottom: 0.5px solid #797979;
                  width: 100%;
                  margin-bottom: 20px;
                "></div>
                    </div>
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </bscroll>
      </div>
    </div>
  </div>
</template>
<script>
  import service from "@/service/index";
  import bscroll from '@/components/better-scroll/bscroll'
  export default {
    props: {
      lookdata: ''
    },
    components: {
      bscroll
    },
    data() {
      return {

      };
    
  },
    methods: {
    // 打印
    stamp() {
    this.getPdf('aa','投诉事件调查表')
    },
    downfile(index){
      console.log(index)
      let param = {
        id: index.id,
      };
      service.filedown(param).then((res) => {
        console.log(res);
        var filename = res.data.file_name;
        console.log(filename);
        const a = document.createElement("a"); //创建a标签
        a.style.display = "none";
        a.href = "http://bt1.wlqqlp.com:8082/" + res.data.fileurl; // 指定下载链接
        // a.download = "ds"; //指定下载文件名
        a.click(); //触发下载
    })
    }
  },
  created() {
 
  },
};
</script>
<style scoped>
  @import "../css/look.css";
</style>