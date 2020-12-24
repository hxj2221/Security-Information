<template>
  <div class="all">
    <div class="top">
      <div class="top_button">
        <div class="top_button_left">
          <el-button size="small">医院沟通记录</el-button>
        </div>
        <div class="top_button_right">
          <el-button size="small" icon="el-icon-printer">打印</el-button>
          <el-button size="small" icon="el-icon-back">返回</el-button>
        </div>
      </div>
      <div class="top_content">
        <el-row :gutter="20" v-for="(item, index) in content" :key="index">
          <el-col :span="8">
            <p>{{ item.name }}</p>
            <p>{{ item.names }}</p>
          </el-col>
          <el-col :span="7" :offset="9">
            <p>{{ item.bh }}</p>
            <p>{{ item.bhs }}</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <hr />
    <div class="center">
      <div class="center_top">
        <div class="center_top_left">
          <h6>医患沟通记录</h6>
        </div>
        <div class="center_top_right">
          <p>记录时间：<span>2020-11-18 13:30:26</span></p>
        </div>
      </div>
      <div class="center_form">
        <table border="1" cellspacing="0">
          <tr v-for="(item, index) in table" :key="index">
            <th>{{ item.top }}</th>
            <td>{{ item.content }}</td>
          </tr>
          <tr>
            <th>沟通记录</th>
            <td>
              <li>这是一个记录XXXXXX</li>
              <li>这是一个记录XXXXXX</li>
              <li>这是一个记录XXXXXX</li>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <hr />
    <div class="bottom">
      <div class="bottom_top">
        <h6>附件信息</h6>
      </div>
      <div class="bottom_form">
        <table border="1" cellspacing="0">
          <tr>
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
          </tr>
        </table>
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
      content: [
        {
          name: "医院名称：",
          names: "第二人民医院",
          bh: "记录编号：",
          bhs: "Ushiagwehk",
        },
        {
          name: "沟通日期：",
          names: "2020-12-26",
          bh: "沟通地点：",
          bhs: "会议室",
        },
        {
          name: "患者姓名：",
          names: "李小虎",
          bh: "",
          bhs: "",
        },
      ],
      table: [
        { top: "主持人", content: "王丽" },
        { top: "记录人", content: "王丽" },
        { top: "沟通日期", content: "2020-12-25" },
        { top: "沟通地点", content: "医院门诊室" },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
</style>