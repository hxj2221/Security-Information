<template>
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        :picker-options="pickerOptions"
        v-model="value1"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
// import { HOLIDAY } from "./holiday.js";
export default {
  data() {
    return {
      HOLIDAY: ["2021/01/23", "2021/01/24"],
      pickerOptions: {
        disabledDate(time) {
          // return time.getTime() < Date.now() - 1000 * 60 * 60 * 24;
          return this.HOLIDAY.includes(time.getTime());
        },
      },
      value1: "",
      value2: "",
    };
  },

  methods: {},
  // computed: {
  //   created() {
  //     this.pickerOptions = {
  //       disabledDate(time) {
  //         for (var i = 0; i < HOLIDAY.length; i++) {
  //           if (time.getTime() === new Date(HOLIDAY[i]).getTime()) {
  //             return true;
  //           }
  //         }
  //         return false;
  //       },
  //     };
  //   },
  // },
};
</script>

<style scoped>
</style>
