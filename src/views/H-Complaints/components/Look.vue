<template>
  <div>
    <div class="look">
      <div class="look-top">
        <span>投诉详情-调查中</span>
        <div>
            <slot name="buttom">
          <el-button
            type="primary"
            icon="iconfont el-icon-hospital-passworddayin"
            class="printing"
            >打印调查表</el-button
          >
          <el-button
            type="primary"
            icon="iconfont el-icon-hospital-passwordai207"
            class="return"
            style="border: 1px solid #949aef"
            >返回</el-button
          >
          </slot>
        </div>
        <div style="border-bottom: 2px solid #cccccc70; width: 100%; height: 30px"></div>
      </div>
      <ul
        class="infinite-list"
        style="overflow: auto; height: 760px"
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
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
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
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
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
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
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
                     <el-col :span="4"><div class="grid-content bg-purple">  <span class="label">投诉人姓名：</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">张大牛</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple"></div><span class="label">性别：</span></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">男</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple"></div><span class="label">年龄：</span></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">65</span></div></el-col>
                    </el-row> 
                    <el-row>
                     <el-col :span="4"><div class="grid-content bg-purple">  <span class="label">投诉人姓名：</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">张大牛</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple"></div><span class="label">性别：</span></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">男</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple"></div><span class="label">年龄：</span></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">65</span></div></el-col>
                    </el-row> 
                    <el-row>
                     <el-col :span="4"><div class="grid-content bg-purple"> <span class="label">所在病区</span></div></el-col>
                     <el-col :span="20"><div class="grid-content bg-purple-light"><span class="value">二楼</span></div></el-col>
                   </el-row>
                    <el-row>
                     <el-col :span="4"><div class="grid-content bg-purple"> <span class="label">所在病区</span></div></el-col>
                     <el-col :span="20"><div class="grid-content bg-purple-light"><span class="value">二楼</span></div></el-col>
                   </el-row>
                    <el-row>
                     <el-col :span="4"><div class="grid-content bg-purple"> <span class="label">所在病区</span></div></el-col>
                     <el-col :span="20"><div class="grid-content bg-purple-light"><span class="value">二楼</span></div></el-col>
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
                     <el-col :span="4"><div class="grid-content bg-purple">  <span class="label">投诉人姓名：</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">张大牛</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple"></div><span class="label">性别：</span></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">男</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple"></div><span class="label">年龄：</span></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">65</span></div></el-col>
                    </el-row> 
                    <el-row>
                     <el-col :span="4"><div class="grid-content bg-purple">  <span class="label">投诉人姓名：</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">张大牛</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple"></div><span class="label">性别：</span></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">男</span></div></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple"></div><span class="label">年龄：</span></el-col>
                     <el-col :span="4"><div class="grid-content bg-purple-light"><span class="value">65</span></div></el-col>
                    </el-row> 
                    <el-row>
                     <el-col :span="4"><div class="grid-content bg-purple"> <span class="label">所在病区</span></div></el-col>
                     <el-col :span="20"><div class="grid-content bg-purple-light"><span class="value">二楼</span></div></el-col>
                   </el-row>
                    <el-row>
                     <el-col :span="4"><div class="grid-content bg-purple"> <span class="label">所在病区</span></div></el-col>
                     <el-col :span="20"><div class="grid-content bg-purple-light"><span class="value">二楼</span></div></el-col>
                   </el-row>
                    <el-row>
                     <el-col :span="4"><div class="grid-content bg-purple"> <span class="label">所在病区</span></div></el-col>
                     <el-col :span="20"><div class="grid-content bg-purple-light"><span class="value">二楼</span></div></el-col>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
 
  },
  created() {},
};
</script>
<style scoped>
@import "../css/look.css";
</style>
