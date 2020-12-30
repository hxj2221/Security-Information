<template>
  <div class="staffaddalBg">
    <div class="staffThre">
      <span class="staffSpan">个人信息</span>
      <div>
        <el-button class="staffgr" @click="staffaddvueyes">保存</el-button>
        <el-button class="staffb" @click="staffaddvueno">返回</el-button>
      </div>
    </div>
    <hr class="staffWidhr" />
    <div class="staffF">
      <div class="staffFlex">
        <p class="staffP">员工编号</p>
        <el-input
          class="staffa"
          v-model="staffNumInput"
          placeholder="1001"
          :disabled="true"
        ></el-input>
      </div>
      <div class="staffFlex">
        <p class="staffP">员工姓名</p>
        <el-input
          class="staffa"
          v-model="staffNameipt"
          placeholder="请输入内容"
        ></el-input>
      </div>

      <div class="staffFlex">
        <p class="staffP">员工年龄</p>
        <div>
          <el-input
            class="staffage"
            v-model="staffAgeipt"
            placeholder="请输入内容"
          ></el-input>
          <el-select
            v-model="staffAgesel"
            placeholder="请选择"
            class="staffSelage"
          >
            <el-option
              v-for="item in optionAge"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="staffFlex">
        <p class="staffP">性别</p>
        <el-select v-model="staffgensel" placeholder="请选择" class="staffa">
          <el-option
            v-for="item in optiongen"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="staffFlex">
        <p class="staffP">手机号码</p>
        <el-input
          class="staffa"
          v-model="staffPhoneipt"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="staffFlex">
        <p class="staffP">电子邮箱</p>
        <el-input
          class="staffa"
          v-model="staffEmailipt"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="staffFlex">
        <p class="staffP">证件号码</p>
        <el-input
          class="staffa"
          v-model="staffCardipt"
          placeholder="请输入内容"
        ></el-input>
      </div>

      <div class="staffFlex">
        <p class="staffP">职位</p>
        <el-input
          class="staffa"
          v-model="staffPositioniPt"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="staffFlex">
        <p class="staffP">地址</p>
        <el-cascader
          class="staffa"
          v-model="cityvalue"
          :options="city"
          placeholder="请输入内容"
          @change="handleChange"
        ></el-cascader>
      </div>

      <div class="staffFlexadre">
        <p class="staffP">详细地址</p>
        <el-input
          class="staffade"
          v-model="staffaddreiPt"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div class="staffFlex"></div>
      <div class="staffFlex">
        <p class="staffP">所属科室</p>
        <el-select v-model="staffdepart" placeholder="请选择" class="staffa">
          <el-option
            v-for="item in optiondepart"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="staffFlex">
        <p class="staffP">角色</p>
        <el-select
          v-model="staffrolesel"
          multiple
          collapse-tags
          placeholder="请选择"
          class="staffa"
        >
          <el-option
            v-for="item in optionrole"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="staffFlex"></div>
      <div class="staffFlex"></div>
      <div class="staffFlex">
        <p class="staffP">密码</p>
        <el-input
          class="staffa"
          v-model="staffpwdiPt"
          placeholder="请输入密码"
        ></el-input>
      </div>
      <div class="staffFlex2">
        <p class="staffP">员工状态</p>
        <el-switch
          v-model="valuestatus"
          :active-value="1"
          :inactive-value="2"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
      <div class="staffFlex"></div>
      <div class="staffFlex"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staffNumInput: "",
      staffNameipt: "",
      staffAgeipt: "",
      staffAgesel: "",
      staffgensel: "",
      staffPhoneipt: "",
      staffEmailipt: "",
      staffCardipt: "",
      staffPositioniPt: "",
      staffaddreiPt: "",
      staffdepart: "",
      staffrolesel: "",
      valuestatus: 1,
      staffpwdiPt: "",
      cityvalue: [],
      city: [
        {
          cityvalue: "zhinan",
          label: "浙江",
          children: [
            {
              cityvalue: "shejiyuanze",
              label: "绍兴",
            },
          ],
        },
      ],
      optionAge: [
        {
          value: "选项1",
          label: "岁",
        },
        {
          value: "选项2",
          label: "月",
        },
        {
          value: "选项3",
          label: "天",
        },
      ],
      optiondepart: [
        {
          value: "选项1",
          label: "全科",
        },
        {
          value: "选项2",
          label: "儿科",
        },
        {
          value: "选项3",
          label: "内科",
        },
      ],
      optiongen: [
        {
          value: "选项1",
          label: "男",
        },
        {
          value: "选项2",
          label: "女",
        },
        {
          value: "选项3",
          label: "未知",
        },
      ],
      optionrole: [
        {
          value: "选项1",
          label: "管理员",
        },
        {
          value: "选项2",
          label: "医生",
        },
        {
          value: "选项3",
          label: "护士",
        },
        {
          value: "选项4",
          label: "专家",
        },
        {
          value: "选项5",
          label: "前台",
        },
        {
          value: "选项6",
          label: "财务",
        },
      ],
    };
  },
  methods: {
    staffaddvueyes() {
      const loading = this.$loading({
        lock: true,
        text: "保存中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
      console.log(
        this.staffNumInput,
        this.staffNameipt,
        this.staffAgeipt,
        this.staffAgesel,
        this.staffPhoneipt,
        this.staffEmailipt,
        this.staffCardipt,
        this.staffPositioniPt,
        this.staffaddreiPt,
        this.staffdepart,
        this.staffrolesel,
        this.valuestatus,
        this.staffpwdiPt,
        this.cityvalue
      );
      this.$parent.fathstaffyes();
    },
    handleChange(cityvalue) {
      console.log(cityvalue);
    },
    // 子调用父
    staffaddvueno() {
      this.$parent.fathstaffno();
    },
  },
};
</script>

<style scoped>
@import "staffadd.css";
</style>
