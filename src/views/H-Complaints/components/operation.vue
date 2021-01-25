<template>
  <div>
    <div class="operation" style="min-height: 800px" v-if="operationdata!=''&&opdata!=''">
      <div class="operation-top">
        <span>投诉详情-{{opdata[0].state.title}}</span>
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
      <slot name='drawerss'>
            <el-drawer title="快捷查看" :visible.sync="drawer" :with-header="false" size="59%">
        <ul
          class="infinite-list"
          style="overflow: auto; height: 870px; texr-aligin: center"
        >
          <Look style="width: 100%; ">
            <div slot="title" ></div>
          </Look>
        </ul>
      </el-drawer>
      </slot>
   
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
                  <span class="value">{{ opdata[0].event_number }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">事件状态：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ opdata[0].state.title }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">投诉科室：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ opdata[0].department_id}}</span>
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
                  <span class="value">{{ opdata[0].complaint_name }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">性别：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ opdata[0].sex }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">年龄：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ opdata[0].age }}{{opdata[0].specific_age}}</span>
                </div></el-col
              >
            </el-row>

            <div
              style="border-bottom: 0.5px solid #e0e2fa; width: 100%; margin-bottom: 20px"
            ></div>
          </div>
        </div>

        <!-- 科室反馈 -->
        <div class="box-feedback" v-show="operationdata.state.state_val == 1||operationdata.state.state_val == 11" >
          <!-- -->
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
            <div v-show="operationdata.state.state_val == 1">
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">当事员工:</span>
                    <el-select v-model="peopel" multiple placeholder="请选择">
                      <el-option
                        v-for="item in opdata[1].user"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
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
                       :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请填写"
                      maxlength="200"
                     
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
                      maxlength="200"
                      placeholder="请填写"
                       :autosize="{ minRows: 2, maxRows: 4}"
                    ></el-input></div
                ></el-col>
              </el-row>
            </div>
              <!-- 科室改进完成 -->
              <div v-show="operationdata.state.state_val == 11">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择责任人:</span>
                       <el-select v-model="peopel" multiple placeholder="请选择">
                      <el-option
                        v-for="item in opdata[1].user"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
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
                        maxlength="200"
                        placeholder="请填写"
                         :autosize="{ minRows: 2, maxRows: 4}"
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
                        maxlength="200"
                        :autosize="{ minRows: 2, maxRows: 4}"
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
                        maxlength="200"
                        placeholder="请填写"
                         :autosize="{ minRows: 2, maxRows: 4}"
                      ></el-input></div
                  ></el-col>
                </el-row>
                <!-- 附件 -->
            <div>
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
                v-show="fileList.length !== 0"
              >
                <el-col :span="22" :push="1"
                  ><div class="grid-content bg-purple">
                    <el-table
                     v-show="fileList.length !== 0?true:false"
                      :data="fileList"
                      style="width: 100%"
                      :header-cell-style="getRowClass"
                    >
                      <el-table-column type="index" width="50" label="序号"></el-table-column>
                      <el-table-column prop="name" label="文件名" width="width">
                      </el-table-column>
                      <el-table-column prop="filedescribe" label="描述" width="width">
                      </el-table-column>
                      <el-table-column prop="size" label="文件大小" width="width">
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
                            <el-button type="text" size="small" @click="handleRemove">删除</el-button>
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
        </div>
        <!-- 审批操作 -->
        <div class="box-feedback" v-show="operationdata.state.state_val !== 1&&operationdata.state.state_val !== 11">
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
                    <el-select v-model="checkstate" placeholder="请选择事件状态"  @change="changestate">
                      <el-option
                       v-for="item in opdata[1].examine"
                        :key="item.state_val"
                        :label="item.title"
                        :value="item.state_val"
                       
                      >
                      </el-option>
                    </el-select></div
                ></el-col>
              </el-row>
              <!-- 经办人信息 -->

              <!-- 退回 -->
              <div v-show="checkstate == -2">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">退回原因:</span>
                      <el-input
                        type="textarea"
                        v-model="preliminary"
                        placeholder="请填写"
                        maxlength="200"
                        :autosize="{ minRows: 2, maxRows: 4}"
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 驳回 -->
              <div v-show="checkstate == -1">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">驳回原因:</span>
                      <el-input
                        type="textarea"
                        v-model="preliminary"
                        placeholder="请填写"
                        maxlength="200"
                        :autosize="{ minRows: 2, maxRows: 4}"
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 科室自查 -->
              <div v-show="checkstate == 1">
                <el-row type="flex" class="row-bg" justify="space-between" style="margin-top:10px">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择下发科室:</span>
                      <br/>
                       <el-cascader
                ref="cascader"
                :options="opdata[1].department"
                :props="{
                  value: 'id',
                  label: 'title',
                  children: '_child',
                  multiple: 'true',
                }"
                :show-all-levels="false"
                v-model="comde"
                clearable
                style="margin-left:10px"
              ></el-cascader>
                      </div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"><div class="grid-content bg-purple">
                      <span class="label">截止时间:</span>
                      <br/>
                      <el-input
                        type="input"
                         style="margin-left: 10px"
                        v-model="needtime"
                        maxlength="2"
                         oninput="value=value.replace(/[^\d]/g,'')"
               onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )"
                        placeholder="请填写"
                        autosize
                      ></el-input>
                      <!-- <el-date-picker
                       :picker-options="pickerOptions"
                       style="margin-left: 10px"
                        v-model="needtime"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="timestamp">
                       </el-date-picker> -->
                      </div></el-col>
                </el-row>
              </div>
              <!-- 院内讨论 -->
              <div v-show="checkstate == 3">
                 <el-row type="flex" class="row-bg" justify="space-between" style="margin-top:20px">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择抄送部门:</span>
                      <br/>
                      <el-cascader
                        ref="cascader"
                        :options="opdata[1].department"
                        :props="{
                          value: 'id',
                          label: 'title',
                          children: '_child',
                          multiple: 'true'}"
                          :show-all-levels="false"
                          v-model="comde"
                          clearable
                          style="margin-left:10px"
                        ></el-cascader></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">主要事实:</span>
                      <el-input
                        type="textarea"
                        v-model="facts"
                        placeholder="请填写"
                        maxlength="200"
                         :autosize="{ minRows: 2, maxRows: 4}"
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
                        maxlength="200"
                        placeholder="请填写"
                         :autosize="{ minRows: 2, maxRows: 4}"
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 医患沟通 -->
              <div
                v-show="
                checkstate == 4 ||
                  checkstate == 5 ||
                  checkstate == 6 ||
                  checkstate == 7 ||
                  checkstate == 8 ||
                  checkstate == 9||
                  checkstate==10
                "
              >
                <el-row type="flex" class="row-bg" justify="space-between" v-if="checkstate !== 4">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple" >
                      <span class="label">约定日期:</span>
                      <!-- <el-input
                      style="margin-left: 10px"
                        type="input"
                        v-model="date"
                        
                        placeholder="请填写"
                        autosize
                      ></el-input>
                       -->
                       <br/>
                       <el-date-picker
                       :picker-options="pickerOptions"
                       style="margin-left: 10px"
                        v-model="date"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="timestamp">
                       </el-date-picker>
                      </div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between"  v-show="
                  checkstate == 4||
                  checkstate == 6 ||
                  checkstate == 7 ||
                  checkstate == 8 ||
                  checkstate == 9 ||
                  checkstate == 10
                ">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label" v-show="checkstate == 4">初步意见:</span>
                      <span class="label" v-show="checkstate == 6 || checkstate == 10"
                        >情况说明:</span
                      >
                      <span class="label" v-show="checkstate == 7">处理意见:</span>
                      <span class="label" v-show="checkstate == 8 || checkstate == 9"
                        >事实及理由:</span
                      >
                      <el-input
                        type="textarea"
                        maxlength="200"
                        v-model="preliminary"
                        placeholder="请填写"
                         :autosize="{ minRows: 2, maxRows: 4}"
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 持续改进【科室】 -->
              <div v-show="checkstate == 11">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择下发科室:</span>
                      <br/>
                          <el-cascader
                ref="cascader"
                :options="opdata[1].department"
                :props="{
                  value: 'id',
                  label: 'title',
                  children: '_child',
                  multiple: 'true',
                }"
                :show-all-levels="false"
                v-model="comde"
                style="margin-left:10px"
                clearabl
              ></el-cascader>
                      </div></el-col>
                </el-row>
              </div>
            
              <!-- 医院改进完成 -->
              <div v-show="checkstate == 14">
               
              
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">处理意见:</span>
                      <el-input
                        type="textarea"
                        v-model="preliminary"
                        maxlength="200"
                        placeholder="请填写"
                        :autosize="{ minRows: 2, maxRows: 4}"
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">管理措施:</span>
                      <el-input
                        type="textarea"
                        v-model="management"
                        maxlength="200"
                        placeholder="请填写"
                         :autosize="{ minRows: 2, maxRows: 4}"
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
                <!-- 结束 -->
              <div v-show="checkstate == 20">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择责任科室:</span>
                      <br/>
                      <el-cascader
                        ref="cascader"
                        :options="opdata[1].department"
                        :props="{
                          value: 'id',
                          label: 'title',
                          children: '_child',
                          multiple: 'true'}"
                          :show-all-levels="false"
                          v-model="comde"
                          clearable
                           style="margin-left:10px"
                        ></el-cascader></div
                  ></el-col>
                </el-row>
                  <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉类别:</span>
                      <br/>
                       <el-cascader
                        ref="cascader"
                         placeholder="请选择投诉类别"
                        :options="opdata[1].event_type"
                        :props="{
                          value: 'id',
                          label: 'title',
                          multiple: 'true'}"
                          :show-all-levels="false"
                          v-model="eventtype"
                          clearabl
                           style="margin-left:10px"
                        ></el-cascader>
                      </div
                  ></el-col>
                </el-row>
                  <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择责任度:</span>
                      
                      <br/>
                       <el-cascader
                        ref="cascader"
                         placeholder="请选择责任度"
                        :options="accountabilitylist"
                        :props="{
                          value: 'id',
                          label: 'title',
                          multiple: 'true'}"
                          :show-all-levels="false"
                          v-model="accountability"
                          clearable
                           style="margin-left:10px"
                        ></el-cascader>
                      </div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">直接经济损失:</span>
                      <el-input
                        type="textarea"
                        v-model="economic"
                        placeholder="请填写"
                        maxlength="200"
                         :autosize="{ minRows: 2, maxRows: 4}"
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">处理意见:</span>
                      <el-input
                        type="textarea"
                        v-model="preliminary"
                        maxlength="200"
                        placeholder="请填写"
                         :autosize="{ minRows: 2, maxRows: 4}"
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
            </div>
            <div
              class="box-feedback"
              v-show="checkstate == -1 || checkstate == -2|| checkstate == 1"
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
                        maxlength="3"
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
                        maxlength="11"
                         oninput="value=value.replace(/[^\d]/g,'')"
               onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
            </div>
            <!-- 附件 -->
            <div
              v-if="
              checkstate ==1||
                checkstate ==3 ||
                checkstate == 5 ||
                checkstate == 6 ||
                checkstate == 8 ||
                checkstate == 9||
                checkstate == 10 ||
                checkstate == 12 ||
                checkstate == 14
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
                v-show="fileList.length !== 0"
              >
                <el-col :span="22" :push="1"
                  ><div class="grid-content bg-purple">
                    <el-table
                     v-show="fileList.length !== 0?true:false"
                      :data="fileList"
                      style="width: 100%"
                      :header-cell-style="getRowClass"
                    >
                      <el-table-column type="index" width="50" label="序号"></el-table-column>
                      <el-table-column prop="name" label="文件名" width="width">
                      </el-table-column>
                      <el-table-column prop="filedescribe" label="描述" width="width">
                      </el-table-column>
                      <el-table-column prop="size" label="文件大小" width="width">
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
                            <el-button type="text" size="small" @click="handleRemove">删除</el-button>
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
            <el-button type="primary" @click="submit()" icon="el-icon-finished" v-show="checkstate !== -2 && checkstate !== -1&&checkstate !== 11&&checkstate !== 1||operationdata.state.state_val==11">确认提交</el-button>
            <el-button type="primary" v-show="checkstate == 11 || checkstate == 1" @click="issuesss()">下发</el-button
            >
            <el-button type="primary" @click="send()" v-show="checkstate == -2">退回</el-button>
            <el-button type="primary" @click="reject()" v-show="checkstate == -1">驳回</el-button>
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
                 maxlength="50"
                placeholder="请输入文件描述"
                 :autosize="{ minRows: 2, maxRows: 2}"
              ></el-input>
            </el-form-item>
            
            <el-form-item label="上传附件：" class="uploadfile">
             <el-upload
                 action='http://bt1.wlqqlp.com:8082/index.php/api/srk/create_base64_file'
                 class="upload-demo"
                 :limit='1'
                 :disabled='(filetitle==""||filedescribe=="")?true:false'
                 :multiple='false'
                 :file-list='listsss'
                 :on-change="handleChange"
                 :on-exceed='exceed'
                 :auto-upload="false">
             <el-button slot="trigger" size="small" type="primary"   :disabled='(filetitle==""||filedescribe=="")?true:false' >选取文件</el-button>
           <div slot="tip" class="el-upload__tip">一次只能上传一个文件，且不超过5MB</div>
            </el-upload>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="Close">取 消</el-button>
            <el-button type="primary" @click="upfilesubmit" :disabled='(filetitle==""||filedescribe=="")?true:false'>确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import service from "@/service";
import Look from "../components/Look";
import qs from 'qs'
export default {
  props: { operationdata:{} ,opdata:{}},
  components: {
    Look,
  },
  data() {
    return {
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() <= Date.now()- 3600 * 1000 * 24;
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '明天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '三天后',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 3);
              picker.$emit('pick', date);
            }
          },
           {
            text: '一周后',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      dis:false,
      upfiledatas:{},
      upfilesss:false,
      economic:'',//直接经济损失
      management:'',//管理措施
      eventtype:'',//投诉类别
      accountability:'',//责任度
      accountabilitylist:[
        {id:1,title:"一级"},
         {id:2,title:"二级"},
          {id:3,title:"三级"}
      ],
      comde:'',//下发科室
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
      checkstate: "请选择", //选中状态
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
      fileList: [],//已上传成功的附件列表
      base64file:'',//上传文件转为的base64码
      file:{},//单次上传文件
      listsss:[],//未上传文件列表
    };
  },
  methods: {
    //关闭上传文件弹窗
     Close() {
        this.listsss=[]
        this.upfiles = false
        this.upfilesss=false
        this.filedescribe=''
        this.filetitle=''
        this.file={}
    },
    //超出限制的上传文件提示
    exceed(){
       this.$message({
            message: "单次只能上传一个文件",
            type: "error",
            duration: 1000,
          });
    },
    //删除上传文件
     handleRemove(file, fileList) { },
     //上传文件接口
    upfilesubmit(){
      //将选择的文件转为base64码
    this.getBase64(this.file.raw).then(res=>{
      //接口参数
        let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        base64_file:res,
        file_name:this.filetitle,
        represent:this.filedescribe
      }
      service.uploadfilebase(params).then(res=>{
         if(res.code==20010){
          this.$message({
                  message: '上传附件成功',
                  type: "success",
                  duration: 1000,
                });
                  this.listsss=[]//上传附件弹窗内显示的选择文件列表
                  this.upfiles = false
                  this.upfilesss=true//文件列表
                  this.filedescribe=''
                  this.filetitle=''
                  this.fileList.push(this.file)
                  this.file={}
        }
         else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: '上传失败',
                  type: "error",
                  duration: 1000,
                });
        }
      })
    })
       
    },
    changestate(){
       this.economic=''//直接经济损失
      this.management=''//管理措施
      this.eventtype=''//投诉类别
      this.accountability=''//责任度
      this.comde=''//下发科室
      this.date= "" //约定日期
      this.liable= "" //责任人
      this.agentname= "" //经办人姓名
      this.agentphone= "" //经办人联系方式
      this.treatment= "" // 诊疗经过
      this.response= "" //针对性答复
      this.needtime= "" //输入天数
      this.issue="" //下发科室
      this.facts= "" //主要事实
      this.focus="" //争议焦点
      this.analysis= "" //根因分析
      this.responsibility= "" //责任意见
      this.measures=""//整改措施
      this.preliminary= "" //初步意见
      this.peopel= "" //当事员工
    },
    //这个file参数 也就是文件信息将文件转为base64码
   getBase64(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let fileResult = "";
        reader.readAsDataURL(file);　　　　　//开始转
        reader.onload = function() {
          fileResult = reader.result;
        };　　　　　//转 失败
        reader.onerror = function(error) {
          reject(error);
        };　　　　　//转 结束  咱就 resolve 出去
        reader.onloadend = function() {
          resolve(fileResult);
        };
      });
    },
      handleChange(file, fileList) {
       this.file=fileList[0]
      },
    getCascaderObj() {
      console.log(this.comde);
    },
    //下发
    issuesss(){
      console.log(this.needtime)
       if(this.checkstate==1){//下发科室调查
       if(this.comde!==''&&this.comde!==null&&this.needtime!==''){
        let comde = this.comde.map((x) => {
          return x[0];
        });
          console.log(comde)
        let data={
        event_number:this.$parent.opdata[0].event_number,//编号
        department_ids:comde,//下发科室
        reply_time:this.needtime// 输入天数
      }
      service.Issuedepartment(data).then(res=>{
        console.log(res)
         if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                this.$router.go(0)
        }
         else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
       }
       else if(this.comde==''||this.comde==null){
          this.$message({
                  message: '请选择下发科室',
                  type: "error",
                  duration: 1000,
                });
       }
        else if(this.needtime==''||this.needtime==null){
          this.$message({
                  message: '请选择输入科室调查天数',
                  type: "error",
                  duration: 1000,
                });
       }
       }
       else if(this.checkstate==11){
          if(this.comde!==''&&this.comde!==null){
        let comde = this.comde.map((x) => {
          return x[0];
        });
          console.log(comde)
        let data={
        event_number:this.$parent.opdata[0].event_number,//编号
        department_ids:comde//下发科室
      }
      console.log(qs.stringify(data))
      service.ImproveDepartment(data).then(res=>{
        console.log(res)
         if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
       }
       }
    },
    //提交
    submit(){
      console.log(this.date)
     if(this.$parent.opdata[0].state.state_val==1){//科室提交
     let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        investigator_ids:this.peopel,//当事员工
        diagnose_feedback:this.treatment,//诊疗经过
        event_reply:this.response//针对答复
      }
       service.departmentsubmit(params).then(res=>{
        console.log(res)
         if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                   this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
      else if(this.checkstate==3){//院内讨论
         if(this.comde!==''&&this.comde!==null&&this.facts!==''&&this.focus!==''){
        let comde = this.comde.map((x) => {
          return x[0];
        });
       let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        copy_department:comde,//抄送部门
        examine_textone:this.facts,//主要事实
        examine_texttwo:this.focus//争议焦点
      }
       service.discussion(params).then(res=>{
        console.log(res)
        if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                   this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
     else if(this.comde!==''||this.comde!==null){
       this.$message({
                  message: '请选择抄送部门',
                  type: "error",
                  duration: 1000,
                });
     }
      else if(this.facts==''){
       this.$message({
                  message: '主要事实不能为空',
                  type: "error",
                  duration: 1000,
                });
     }
     else if(this.focus==''){
       this.$message({
                  message: '争议焦点不能为空',
                  type: "error",
                  duration: 1000,
                });
     }
      }
      else if(this.checkstate==4){//医患沟通中
      let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        examine_textone:this.preliminary,//初步意见
      }
       service.communicate(params).then(res=>{
        console.log(res)
         if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                   this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
      else if(this.checkstate==5){//人民调解
      let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        appointment_time:this.date//约定时间
      }
      service.mediate(params).then(res=>{
        console.log(res)
           if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                   this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
      else if(this.checkstate==6){//责任鉴定中
       let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        examine_textone:this.preliminary,//情况说明
        appointment_time:this.date//约定时间
      }
       service.appraisal(params).then(res=>{
        console.log(res)
           if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                    this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
      else if(this.checkstate==7){//患方推迟
       let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        examine_textone:this.preliminary,//处理意见
        appointment_time:this.date//约定时间
      }
       service.delay(params).then(res=>{
        console.log(res)
           if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                    this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
      else if(this.checkstate==8){//中止调节
      let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        examine_textone:this.preliminary,//事实及理由
        appointment_time:this.date//约定时间
      }
       service.suspension(params).then(res=>{
           if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                   this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
      else if(this.checkstate==9){//终止调节
      let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        examine_textone:this.preliminary,//事实及理由
        appointment_time:this.date//约定时间
      }
      service.termination(params).then(res=>{
        console.log(res)
           if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                     this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
      else if(this.checkstate==10){//司法诉讼
       let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        examine_textone:this.preliminary,//情况说明
        appointment_time:this.date//约定时间
      }
       service.litigation(params).then(res=>{
        console.log(res)
           if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                     this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
      else if(this.$parent.opdata[0].state.state_val==11){//改进完成（科室）
       let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        investigator_ids:this.peopel,//当事员工
        examine_textone:this.analysis,//根因分析
        examine_texttwo:this.responsibility,//责任意见
        examine_textthree:this.measures//整改措施
      }
      console.log(params)
        service.ImproveDepartmentsubmission(params).then(res=>{
        console.log(res)
           if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                    this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
       else if(this.checkstate==13){//持续改进（医院）
         let params={
        event_number:this.$parent.opdata[0].event_number//编号
      }
         service.Hospitalimprovement(params).then(res=>{
        console.log(res)
           if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                     this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      }).catch(err=>{
          this.$message({
                  message:'000000',
                  type: "error",
                  duration: 1000,
                });
      })
      }
       else if(this.checkstate==14){//改进完成（医院）
        let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        examine_textone:this.preliminary,//处理意见
        examine_texttwo:this.management//管理措施
      }
         service.ImprovementEnd(params).then(res=>{
        console.log(res)
           if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                     this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
      }
       else if(this.checkstate==20){//已结束
        if(this.comde!==''&&this.comde!==null&&this.accountability!==''&&this.accountability!==null&&this.eventtype!==''&&this.eventtype!==null){
        let comde = this.comde.map((x) => {
          return x[0];
        });
        let accountability = this.accountability.map((x) => {
          return x[0];
        });
        let eventtype = this.eventtype.map((x) => {
          return x[0];
        });
       let params={
        event_number:this.$parent.opdata[0].event_number,//编号
        responsibility_did:comde,//责任科室
        event_type:eventtype,//投诉类型
         responsibility_how:accountability,//责任度
          examine_textone:this.economic,//直接经济损失
           examine_texttwo:this.preliminary,//处理意见
      }
        service.end(params).then(res=>{
           if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                     this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
      })
        }
      }
    },
    // 退回
    send(){
      if(this.checkstate==-2){
        service.send(this.$parent.opdata[0].event_number,this.preliminary).then(res=>{
            console.log(res)
            if(res.code === 20010){
               this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                         this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
        })
      }
    },
    // 驳回
    reject(){
       if(this.checkstate==-1){
        console.log(this.$parent.opdata[0].event_number)
        console.log(this.preliminary)
        service.reject(this.$parent.opdata[0].event_number,this.preliminary).then(res=>{
               if(res.code==20010){
          this.$message({
                  message: res.msg,
                  type: "success",
                  duration: 1000,
                });
                   this.$router.go(0)
        }
          else if(res.code==20401){
          this.$message({
            message: "请重新登陆",
            type: "error",
            duration: 1000,
          });
          this.$router.push('/login')
        }
        else if(res.code==20403){
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
          this.$router.push('/dashboard')
        }
         else{
          this.$message({
                  message: res.msg,
                  type: "error",
                  duration: 1000,
                });
        }
        })
      }
    },
    handleClose() {
      this.dialogVisibless = false;
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
  },
};
</script>
<style scoped>
@import "../css/operation.css";
</style>
