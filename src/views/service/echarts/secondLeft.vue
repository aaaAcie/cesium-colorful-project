<template>
  <common-echart :pos="pos" :option="option" @getMychart="getMychart" width="353" height="150"></common-echart>
</template>

<script setup>
  import { reactive,getCurrentInstance } from 'vue'
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
    myColor: ['#F1644E','#E58C51','#FFEC8A','#63FFCA','#01ECFF','#3E98FF'],
    dataList1: [25,14,9,3,5,12,48,114,208,296,335,445,536,574,620,584,556,619,582,618,502,263,105,42],
    // dataList2: [90, 100, 110,200,210,320,225,120,100,90,130,180],
    dataTitle: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00',
			'13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
    dataSeries: [],
  })

  // 定义图表编辑项 option
  let option = reactive({})
  option = {
    title:{
      text:'单位：人',
      textStyle:{
        fontSize:10,
        color:'#80878a'
      },
      left:'3%',
      top:'-2%'
    },
    tooltip: {
      show:true
    },
    grid: {
      left: '0%',
      // right: '8%',
      bottom: '3%',
      width:'90%',
      height:'83%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: data.dataTitle,
      show: false,
      axisLabel: {
        show: true,
        color: '#80878a',
        fontSize: 10,
        interval: 2 //解决x轴显示不全
      },
      splitLine: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle:{
          type:'solid',
          color:'#80878a',
          width:2
        }
      },
      axisTick :{
        show:false
      },
      show:true,
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
          color:'#80878a',
          width:2
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
        // name: '城东路:金型路',
        type: 'bar',
        label: {
          show: false
        }, 
        barWidth: 8,
        data: data.dataList1,
        itemStyle:{
          normal: {
            color:new echarts.graphic.LinearGradient(0, 0,0, 1, [
              { offset: 0, color: 'rgba(65, 199, 255, 1)' },
              { offset: 1, color: 'rgba(65, 199, 255, 0) ' }
            ]),
            barBorderRadius: [5, 5, 5,5]
          }
        }
      },{
        // name: '城东路:文山路',
        type: 'line',
        label: {
          show: false
        }, 
        data: data.dataList1,
        symbol:'circle',
        color:'#41fff9',
        symbolSize:7,
        itemStyle: {
          color:'#41fff9',
            borderType:'solid',
          borderWidth:1,
          borderColor:'#41fff9',
        },
      }],
    data: data.dataList1
  }
  

  // 处理进一步交互
  let getMychart = (myChart) => {
    // console.log('ok')
  }

</script>

<style lang="scss" scoped></style>