<template>
  <div class="lookForm_all">
    <div class="lookForm_all_in">
      <div class="lookForm_top">
        <div class="lookForm_top_button">
          <div class="lookForm_top_button_left">
            <el-button size="small">医院沟通记录</el-button>
          </div>
          <div class="lookForm_top_button_right">
            <el-button size="small" icon="el-icon-printer">打印</el-button>
            <el-button size="small" icon="el-icon-back" @click="upper"
              >返回</el-button
            >
          </div>
        </div>
        <!-- top -->
        <!-- <div class="lookForm_top_content" :model='connent'>
          <el-row :gutter="20">
            <el-col :span="8">
              <p>医院名称：</p>
              <p :model="connent.communicate_time"></p>
            </el-col>
            <el-col :span="8" :offset="8">
              <p>记录编号：</p>
              <p :model='connent.number'></p>
            </el-col>
          </el-row>
           <el-row :gutter="20">
            <el-col :span="8">
              <p>沟通日期：</p>
              <p :model="connent.communicate_time"></p>
            </el-col>
            <el-col :span="8" :offset="8">
              <p>沟通地点：</p>
              <p :model='connent.note_taker'></p>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <p>患者姓名：</p>
              <p :model="connent.note_taker"></p>
            </el-col>
           
          </el-row>
        </div> -->
        <div class="lookForm_top_content">
          <el-form ref="form" :model="connent" label-width="86px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="医院名称：">
                  <el-input v-model="connent.communication"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="记录编号：">
                  <el-input v-model="connent.number"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="沟通日期：">
                  <el-input v-model="connent.communicate_time"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="沟通地点：">
                  <el-input v-model="connent.communication"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="患者姓名：">
                  <el-input v-model="connent.note_taker"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8"> </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <hr />
      <!-- center -->
      <div class="lookForm_center">
        <div class="lookForm_center_top">
          <div class="lookForm_center_top_left">
            <h6>医患沟通记录</h6>
          </div>
          <div class="lookForm_center_top_right">
            <p>记录时间：<span>2020-11-18 13:30:26</span></p>
          </div>
        </div>
        <div class="lookForm_center_form">
          <table border="1" cellspacing="0">
            <tr>
              <th>主持人</th>
              <td>{{ hosp_name }}</td>
            </tr>
            <tr>
              <th>记录人</th>
              <td>{{ patient_name }}</td>
            </tr>
            <tr>
              <th>沟通日期</th>
              <td>{{ communicate_time }}</td>
            </tr>
            <tr>
              <th>沟通地点</th>
              <td>{{ communication }}</td>
            </tr>
            <tr>
              <th>沟通记录</th>
              <td>
                <li>{{ record_of_communication }}</li>
                <!-- <li>这是一个记录XXXXXX</li>
                <li>这是一个记录XXXXXX</li> -->
              </td>
            </tr>
          </table>
        </div>
      </div>
      <hr />
      <!-- bottom -->
      <div class="lookForm_bottom">
        <div class="lookForm_bottom_top">
          <h6>附件信息</h6>
        </div>
        <div class="lookForm_bottom_form">
          <table border="1" cellspacing="0">
            <tr v-for="(item,i) in con" :key="i">
              <th>{{item.file_name}}</th>
              <td>查看</td>
            </tr>
            <!-- <tr>
              <th>文件1</th>
              <td>查看</td>
              <th>文件2</th>
              <td>查看</td>
              <th>文件3</th>
              <td>查看</td>
            </tr>
            <tr>
              <th>文件4</th>
              <td>查看</td>
            </tr> -->
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/views/H-Connect/component/lookForm/css.css";
export default {
  components: {},
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
      this.$emit("upper");
    },
  },
  created() {
    this.bus.$on("details", (item) => {
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