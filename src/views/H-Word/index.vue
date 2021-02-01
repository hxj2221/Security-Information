<template>
  <div class="Word_all">
    <div class="warp-title word-cloud" >
      <div class="sortList-title">科室词云图</div>
      <vue-wordcloud
        class="one"
        :options="options"
      />
    </div>
    <div class="warp-title word-cloud">
      <div class="sortList-title">投诉类别词云图</div>
     
      <vue-wordcloud class="two" :options="options" />
    </div>
  </div>
</template>
<script src="dist/vue-b2wordcloud.min.js"></script>
<script>
import "@/views/H-Word/index.css";
export default {
  // name: 'warpTitle',
  props: {
    flag: {
      type: String,
    },
  },
  components: {},
  data() {
    return {
      loading: true,
      options: {
        list: [
          ["感冒灵", 22],
          ["大白菜", 14],
          ["香蕉", 14],
          ["鸡蛋", 18],
          ["板蓝根", 16],
          ["感冒灵", 14],
          ["药", 14],
          ["牛奶", 14],
          ["感冒灵", 22],
          ["大白菜", 14],
          ["香蕉", 14],
          ["鸡蛋", 18],
          ["板蓝根", 16],
          ["感冒灵", 14],
          ["药", 14],
          ["牛奶", 14],
        ],
        color: [
          ["#5DECBB", "#429CEA"],
          "#5DECBB",
          "#f73c0e",
          "#35CCE6",
          "#e69142",
          "#eb24c0",
        ],
        tooltip: {
          show: false,
        },
        backgroundColor: "#E0E1EB",
        rotationRation: 0,
        gridSize: 50,
        minFontSize: 50,
        maxFontSize: 70,
        borderRadius: 20,
      },
      options: {
        list: [
          ["感冒灵", 22],
          ["大白菜", 14],
          ["香蕉", 14],
          ["鸡蛋", 18],
          ["板蓝根", 16],
          ["感冒灵", 14],
          ["药", 14],
          ["牛奶", 14],
          ["感冒灵", 22],
          ["大白菜", 14],
          ["香蕉", 14],
          ["鸡蛋", 18],
          ["板蓝根", 16],
          ["感冒灵", 14],
          ["药", 14],
          ["牛奶", 14],
        ],
        color: [
          ["#5DECBB", "#429CEA"],
          "#5DECBB",
          "#f73c0e",
          "#35CCE6",
          "#e69142",
          "#eb24c0",
        ],
        tooltip: {
          show: false,
        },
        backgroundColor: " rgba(248, 244, 244, 0.568)",
        rotationRation: 0,
        gridSize: 50,
        minFontSize: 50,
        maxFontSize: 70,
        borderRadius: 20,
      },
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>