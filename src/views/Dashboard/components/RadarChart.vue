<template>
  <div id="radarChart" style="width:100%; height:300px;"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Echarts from 'echarts'
import myMixins from '../mixins/resize'

@Component({
  mixins:[myMixins]
})
export default class LineChart extends Vue{
  chart: any
  __resizeHandler: any

  public drawChart(): void {
    this.chart = Echarts.init(<any>document.getElementById('radarChart'))
    this.chart.setOption({
      tooltip:{},
      legend: {
        // data: ['预算分配', '实际开销'],
      },
      grid:{top:'25%',left:'25%',right:'25%',bottom:'25%'},
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5],
          }
        },
        radius: '60%',
        indicator: [
          { name: '急诊', max: 6500},
          { name: '手术', max: 16000},
          { name: 'xx', max: 30000},
          { name: 'xx', max: 38000},
          { name: 'xx', max: 52000},
          { name: 'xx', max: 25000}
        ]
      },
      series: [{
        // name: '预算 vs 开销',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [{
          value : [4300, 10000, 28000, 35000, 50000, 19000],
          name : '个人'
        },
        {
          value : [4800, 12000, 28000, 33000, 44000, 20000],
          name : '部门'
        },
        {
          value : [5000, 14000, 28000, 31000, 42000, 21000],
          name : '系统'
        }]
      }]
    })
  }

  private mounted() {
    this.drawChart()
  }
}
</script>

<style lang="less" scoped>

</style>