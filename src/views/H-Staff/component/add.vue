<template>
  <div class="addstaffall">
    <!-- top -->
    <div class="staffThre">
      <span class="staffSpan">新增员工信息</span>
      <div style="padding-right: 30px">
        <el-button class="staffgr" @click="staffaddvueyes">保存</el-button>
        <el-button class="staffb" @click="staffaddvueno">返回</el-button>
      </div>
    </div>
    <hr class="staffWidhr" />
    <!-- add -->
    <div class="addmain">
      <el-form ref="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="员工编号" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                placeholder="10001"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="员工姓名" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffNameipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄" required>
              <el-input placeholder="请输入内容" v-model="staffAgeipt" class="">
                <template slot="append">
                  <el-select
                    type="input"
                    style="width: 90px"
                    autosize
                    v-model="staffAgesel"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in optionages"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffgensel"
                style="margin-top: 40px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in optiongen"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="手机号码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffPhoneipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电子邮箱" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffEmailipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="证件号码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffCardipt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="职位" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffPositioniPt"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="地址" required>
              <el-cascader
                class="dialog-input-text"
                type="input"
                autosize
                style="
                  display: block;
                  position: relative;
                  font-size: 14px;
                  line-height: 40px;
                "
                v-model="cityvalue"
                :options="city"
                placeholder="请输入内容"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="详细地址" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffaddreiPt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="ssks" label="所属科室" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffdepart"
                style="margin-top: 40px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in optiondepart"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="角色" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                style="margin-top: 40px"
                v-model="staffrolesel"
                multiple
                placeholder="请选择"
              >
                <el-option
                  v-for="item in optionrole"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="密码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="staffpwdiPt"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-top: 40px" label="员工状态">
              <el-switch
                v-model="valuestatus"
                :active-value="1"
                :inactive-value="2"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
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
      staffAgesel: "",
      staffgensel: "",
      optionages: [
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
@import "add.css";
</style>
