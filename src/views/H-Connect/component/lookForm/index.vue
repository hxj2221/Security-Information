<template>
  <div class="lookForm_all">
    <div class="lookForm_all_in">
      <div class="lookForm_top">
        <div class="lookForm_top_button">
          <div class="lookForm_top_button_left">
            <span>医院沟通记录</span>
          </div>
          <div class="lookForm_top_button_right">
            <el-button type="primary" icon="iconfont el-icon-hospital-passworddayin" size="medium">打印记录表</el-button>
            <el-button type="primary" icon="iconfont el-icon-hospital-passwordai207" size="medium" @click="upper">返回
            </el-button>
          </div>
        </div>
        <!-- top -->
        <div class="lookForm_top_content">
          <el-form ref="form" :model="connent">
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span
                    ><span>医院名称：</span>{{ connent.communication }}</span
                  >
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span
                    ><span>记录编号：</span>
                    {{ connent.number }}
                  </span>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span
                    ><span>沟通日期：</span>
                    {{ connent.communicate_time }}
                  </span>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span
                    ><span>沟通地点：</span>
                    {{ connent.communication }}
                  </span>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span
                    ><span>患者姓名：</span>
                    {{ connent.note_taker }}
                  </span>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <hr />
      <!-- center -->
      <div class="lookForm_center">
        <div class="lookForm_center_top">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <span><b>医患沟通记录</b></span>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="9">
              <div class="grid-content bg-purple">
                <span><b>记录时间：</b>2020-11-18 13:30:26</span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="lookForm_center_form">
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <span class="label">主持人</span>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple-light">
                <span class="value">{{ hosp_name }}</span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <span class="label">记录人</span>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple-light">
                <span class="value">{{ patient_name }}</span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <span class="label">沟通日期</span>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple-light">
                <span class="value">{{ communicate_time }}</span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <span class="label">沟通地点</span>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple-light">
                <span class="value">{{ communication }}</span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <span class="label">沟通记录</span>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple-light">
                <span class="value">{{ record_of_communication }}</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <hr />
      <!-- bottom -->
      <div class="lookForm_bottom">
        <div class="lookForm_bottom_top">
          <h6>附件信息</h6>
        </div>
        <div class="lookForm_bottom_form">
          <div class="lookForm_bottom_form_div" v-for="(item,i) in con" :key="i">
            <span>{{item.file_name}}</span>
            <span>查看</span>
          </div>
        </div>
        <!-- <div class="lookForm_bottom_form">
          <el-row class="tab">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="tit">文件名1</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="con">查看</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="tit">文件名2</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="con">查看</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="tit">文件名3</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="con">查看</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="tab">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="tit">文件名4</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="con">查看</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="tit">文件名5</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="con">查看</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="tit">文件名6</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p class="con">查看</p>
              </div>
            </el-col>
          </el-row>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import "@/views/H-Connect/component/lookForm/css.css";
export default {
  components: {},
    inject: ["reload"],
  props: {},
  data() {
    return {
      connent: {},
      // 沟通记录
      communication: "",
      hosp_name: "",
      record_of_communication: "",
      patient_name: "",
      communicate_time: "",
      //
      con: [],
    };
  },
  methods: {
    upper() {
      // this.$emit("upper");
      this.reload()
    },
  },
  created() {
    this.bus.$on("details", (item) => {
      console.log(item.info);
      this.connent = item.data;
      // 沟通记录
      this.hosp_name = item.data.hosp_name;
      this.patient_name = item.data.hosp_name;
      this.communicate_time = item.data.communicate_time;
      this.communication = item.data.communication;
      this.record_of_communication = item.data.record_of_communication;
      //
      this.con = item.info;
    });
  },
};
</script>
<style scoped>
</style>