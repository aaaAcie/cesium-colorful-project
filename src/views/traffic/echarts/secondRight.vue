<template>
  <common-echart :pos="pos" :option="option" @getMychart="getMychart" width="353" height="150"></common-echart>
</template>

<script setup>
  import { reactive,getCurrentInstance } from 'vue'
  import commonEchart from '@/components/commonEchart.vue'
  const { appContext : { config: { globalProperties } } } = getCurrentInstance()
  const echarts = globalProperties.$echarts
  const { pos } = defineProps({
    pos: {
      type: String,
      required: true
    }
  })

  // 定义 data
  let data = reactive({
    myColor: ['#41fff9', '#41a0ff'],
    dataList1: [100,110,130,330,200,100,150],
    // dataList2: [90, 100, 110,200,210,320,225,120,100,90,130,180],
    dataTitle: ['00:00','04:00','08:00','12:00','16:00','20:00','24:00'],
    dataSeries: [],
  })
  data.dataList1.forEach((item, index) => {
    data.dataSeries.push({
      value: item,
      name: data.dataTitle[index],
    })
  })

  // 定义图表编辑项 option
  let option = reactive({})
  option = {
    color: data.myColor,
    title:{
      text:'单位：辆',
      textStyle:{
        fontSize:10,
        color:'#80878a'
      },
      left:'4%',
      top:'0%'
    },
    grid: {
      left: '2%',
      width:'91%',
      height:'83%',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      show:false
    },
    xAxis: [{
      type: 'category',
      show: false,
      axisLabel: {
        show:true,
        color: '#80878a',
        fontSize: 10,
        interval: 0 //解决x轴显示不全
      },
      splitLine: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle:{
          type:'solid',
          color:'#B1B1B1',
          width:1
        }
      },
      axisTick :{
        show:false
      },
      show:true,
      data: data.dataTitle
    }],
    yAxis: [{
      splitLine: {
        show: true,
        lineStyle:{
          type:'dotted',
          color:'#556468',
          width:1
        }
      },
      axisLine: { //y轴
        show: true,
      lineStyle:{
          type:'solid',
          color:'#B1B1B1',
          width:1
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#80878a',
        fontSize: 10,
      },
      type: 'value',
      axisTick: {
        show: false
      },
    }],
    series: [{
      name: '特大',
      type: 'line',
      label: {
        show: false
      }, 
      data: data.dataList1,
      symbol:'circle',
      // color:'#41fff9',
      symbolSize:5,
      areaStyle: {
        color:new echarts.graphic.LinearGradient(0, 0,0, 1, [
          { offset: 0, color: 'rgba(65, 255, 249, 0.7)' },
          { offset: 1, color: 'rgba(11, 164, 159, 0) ' }
        ]),
      },
      itemStyle: {
        color:'#41fff9',
          borderType:'solid',
        borderWidth:1,
        borderColor:'#41fff9',
      },
    }],
    data:data.dataList1
  }
  

  // 处理进一步交互
  let getMychart = (myChart) => {
    console.log('ok')
  }

</script>

<style lang="scss" scoped></style>