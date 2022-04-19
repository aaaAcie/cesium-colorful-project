<template>
  <common-echart :pos="pos" :option="option" @getMychart="getMychart" width="353" height="150"></common-echart>
</template>

<script setup>
  import { reactive } from 'vue'
  import commonEchart from '@/components/commonEchart.vue'
  const { pos } = defineProps({
    pos: {
      type: String,
      required: true
    }
  })

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
    myColor: ["rgba(65, 199, 255, 1)","rgba(65, 199, 255, 0)","rgba(132, 142, 142, 1)"],
    dataList1: [800, 1200, 1400, 1800,2400,2000,2400,1800,600,700,1600,1000],
    // dataList2: [90, 100, 110,200,210,320,225,120,100,90,130,180],
    dataTitle: dateArr.reverse(),
    dataSeries: [],
  })

  // 定义图表编辑项 option
  let option = reactive({})
  option = {
    title:{
      text:'单位：万元',
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
          color: '#80878a',
          width: 2
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
          type: "bashed",
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
      name:'数量',
      barWidth: 10,
      type: 'bar',
      data: data.dataList1,
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: data.myColor[0]
            }, {
              offset: 1,
              color: data.myColor[1]
            }]
          },
          barBorderRadius: [10, 10, 0, 0],
        }
      },
    }],
    data: data.dataList1
  }
  

  // 处理进一步交互
  let getMychart = (myChart) => {
    console.log('ok')
  }

</script>

<style lang="scss" scoped></style>