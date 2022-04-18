<template>
  <common-echart :pos="pos" :option="option" @getMychart="getMychart" width="320" height="140"></common-echart>
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

  let data = reactive({
    dataTemp1: [6, 7, 9, 5, 5],
		dataTemp2: ['02-11', '02-12', '02-13', '02-14', '02-15'],
		myColor: ["rgba(65, 199, 255, 1)","rgba(65, 199, 255, 0)","rgba(132, 142, 142, 1)"]
  })

  let option = reactive({
    // backgroundColor:'rgba(13,29,70,0.75)',
    title:{
      text:'单位：人',
      textStyle:{
        fontSize: 15,
        color: '#80878a'
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
      width:'85%',
      height:'68%',
      borderWidth: 1
    },
    xAxis: [{
      type: 'category',
      data: data.dataTemp2,
      splitLine: {
        show: false,
      },
      axisLabel: {
        show:true,
        // textStyle: {
        //   color: '#80878a',
        //   fontSize: 15
        // },
        color: '#80878a',
        fontSize: 15
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
      // min: 0,
      // max: 100,
      // interval: 25,
      splitLine: {
        show: true,
        lineStyle: {
          type: "bashed",
          color: '#556468'
        }
      },
      axisLabel: {
        show:true,
        color: '#80878a',
        fontSize: 15,
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
      data: data.dataTemp1,
      itemStyle: {
        // normal: {
          
        // },
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
        borderRadius: [10, 10, 0, 0],
      },
    }]
  })

  let getMychart = (myChart) => {
    console.log('ok')
  }

</script>

<style lang="scss" scoped></style>