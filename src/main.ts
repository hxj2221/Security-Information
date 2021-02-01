import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


// 引入样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'font-awesome/css/font-awesome.css'
// 引入公共样式
import "../src/assets/font/iconfont.css"
// 引入axios
import axios from "axios"
import VueAxios from "vue-axios"

// 引入mock
import Mock from './mock'
Mock.bootstrap()

// utils
import utils from '@/util/index'
Vue.prototype.util = utils
// 引入dialog可移动
import './directives.js'

// echarts表格
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

import VueWordcloud from 'vue-b2wordcloud'
Vue.use(VueWordcloud)

// 建立中转站，实现组件与组件之间的传值
let bus = new Vue()
Vue.prototype.bus = bus

import jsPlumb from 'jsplumb'
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
