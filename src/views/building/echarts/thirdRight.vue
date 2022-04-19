<template>
  <common-echart :pos="pos" :option="option" @getMychart="getMychart" width="353" height="150"></common-echart>
</template>

<script setup>
  import { reactive, getCurrentInstance } from 'vue'
  import commonEchart from '@/components/commonEchart.vue'
  const { pos } = defineProps({
    pos: {
      type: String,
      required: true
    }
  })
  const { appContext : { config: { globalProperties } } } = getCurrentInstance()
  const echarts = globalProperties.$echarts
  let dateArr = []
  let date = new Date()
  // let year = date.getFullYear()
  date.setMonth(date.getMonth()+1, 1)//获取到当前月份,设置月份
  for (let i = 0; i < 12; i++) {
    date.setMonth(date.getMonth() - 1);//每次循环一次 月份值减1
    let m = date.getMonth() + 1;
    dateArr.push(m+'月')
  }
  // 定义 data
  let data = reactive({
    myColor: ['#fb6161','#fcba77','#41c7ff'],
    dataList1: [0,0,0,0,0,0,0,3,0,0,0,0],
    dataList2: [0,0,0,0,0,0,0,8,0,0,0,0],
    dataList3: [0,0,0,0,0,0,3,2,0,0,0,0],
    dataTitle: dateArr.reverse(),
    dataSeries: [],
  })

  // 定义图表编辑项 option
  let option = reactive({})
  option = {
    title:{
      text:'单位：个',
      textStyle:{
        fontSize:10,
        color:'#80878a'
      },
      left:'5%',
      top:'0%'
    },
    tooltip: {
      show:true
    },
    grid: {
      // top: '10%',
      bottom:'15%',
      // y: '10%',
      // x2: '4%',
      // y2: '8%',
      width:'80%',
      height:'68%',
      borderWidth: 1
    },
    legend: {
      icon: "circle",
      itemWidth: 5,
      itemHeight: 5,
      itemGap: 2,
      right:'30',
      textStyle: {
        color: "#FFFFFF",
        fontSize: 10
      }
    },
    xAxis: [{
      type: 'category',
      data: data.dataTitle,
      splitLine: {
        show: false,
      },
      axisLabel: {
        show:true,
        interval:0,
        textStyle: {
          color: '#80878a',
          fontSize: 10
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          type:'solid',
          color:'#B1B1B1',
          width:1
        }
      },
      axisTick: {
        show: false,
      }
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          type: "dotted",
          color: '#556468'
        }
      },
      axisLabel: {
        show:true,
        textStyle: {
          color: '#80878a',
          fontSize: 10,
        },
        // formatter: '{value}%',
        // margin: 5,
      },
      axisLine: {
        show:true,
        lineStyle: {
          color: 'grey',
          width: 2
        }
      },
      axisTick: {
        show: false,
      }
    }],
    series: [{
      name: '特大',
      type: 'line',
      label: {
        show: false
      }, 
      data: data.dataList1,
      symbol:'circle',
      symbolSize:5,
      areaStyle: {
        color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(251, 97, 97, 1)' },
          { offset: 1, color: 'rgba(11, 164, 159, 0) ' }
        ]),
      },
      itemStyle: {
        color:'#fb6161',
          borderType:'solid',
        borderWidth:1,
        borderColor:'#fb6161',
      },
    },{
      name: '较大',
      type: 'line',
      label: {
        show: false
      }, 
      data: data.dataList2,
      symbol:'circle',
      areaStyle: {
        color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(252, 186, 119, 1)' },
          { offset: 1, color: 'rgba(11, 164, 159, 0) ' }
        ]),
      },
      symbolSize:5,
      itemStyle: {
        color:'#fcba77',
        borderType:'solid',
        borderWidth:1,
        borderColor:'#fcba77',
      },
    },{
      name: '一般',
      type: 'line',
      label: {
        show: false
      }, 
      data: data.dataList3,
      symbol:'circle',
      // color:'#41fff9',
      areaStyle: {
        color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(65, 199, 255, 1)' },
          { offset: 1, color: 'rgba(11, 164, 159, 0) ' }
        ]),
      },
      symbolSize: 5,
      itemStyle: {
        color: '#41c7ff',
        borderType: 'solid',
        borderWidth: 1,
        borderColor: '#41c7ff',
      },
    }],
  }
  

  // 处理进一步交互
  let getMychart = (myChart) => {
    console.log('ok')
  }

</script>

<style lang="scss" scoped></style>