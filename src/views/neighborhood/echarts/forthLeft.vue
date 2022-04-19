<template>
  <div class="forth-box">
    <!-- 分析年龄 -->
    <common-echart :pos="a" :option="option1" @getMychart="getMychart" width="160" height="80"></common-echart>
    <!-- 分析性别 -->
    <common-echart :pos="c" :option="option3" @getMychart="getMychart" width="160" height="80"></common-echart>
    <!-- 分析年龄 -->
    <common-echart :pos="b" :option="option2" @getMychart="getMychart2" width="160" height="80"></common-echart>
    <!-- 分析性别 -->
    <common-echart :pos="d" :option="option4" @getMychart="getMychart2" width="160" height="80"></common-echart>
  </div>
</template>

<script setup>
  import { reactive, computed } from 'vue'
  import commonEchart from '@/components/commonEchart.vue'
  const { pos } = defineProps({
    pos: {
      type: String,
      required: true
    }
  })
  const [a, b, c, d] = [pos+'1', pos+'2', pos+'3', pos+'4']
  // 定义 data
  let data1 = reactive({
    myColor: ['#2975d4', '#23a3b1','#7272f8'],
    dataList1: [11223, 5180, 863],
    dataTitle: ['青年', '中年','老年'],
    dataSeries: [],
  })
  data1.dataList1.forEach((item, index) => {
    data1.dataSeries.push({
      value: item,
      name: data1.dataTitle[index],
    })
  })

  // 定义图表编辑项 option
  let option1 = reactive({})
  let getOption13 = (option,data) => {
    option = {
      // backgroundColor: 'rgba(13,29,70,0.75)',
      title: {
        text: '年龄\n占比',
        x: '39%',
        top: '27%',
        textStyle: {
          color: '#FFFFFF',
          fontSize: 12,
          lineHeight:14,
          fontWeight: '100',
        },
      },
      grid: {
        left: '5%',
        right: '8%',
        bottom: '3%',
        containLabel: true
      },
      tooltip: {
        trigger: 'none',
        // formatter: "{b} : {c} ({d}%)"
      },
      color: data.myColor,
      emphasis: {
        scale: true,
        scaleSize: 5,
        // focus: 'self'
      },
      series: {
        hoverOffset: 4,
        itemGap: 20,
        name: 'Nightingale Chart',
        type: 'pie',
        radius: ['57%', '87%'],
        // roseType: 'area',
        center: ['50%', '50%'],
        data: data.dataSeries,
        label: {
          show: false,
          position: "center"
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          borderRadius: 2,
          // borderWidth: 10, //设置border的宽度有多大
        }
      }
      }
    return option
  }
  option1 = getOption13(option1, data1)

  // 处理进一步交互
  let getMychart = (myChart) => {
    // console.log('ok')
    let index = -1
    let myTime = setInterval(function(){
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index
      })
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index + 1
      })
      index ++
      if(index >= option1.series.data.length){
        index = -1
      }
    }, 2000)
    return myTime
  }

  // 处理第3张图表 这张图表与图表1共用一个交互
  let data3 = reactive({
    myColor: ['#41c7ff', '#de85f3'],
    dataList1: [5180, 12086],
    dataTitle: ['男性', '女性'],
    dataSeries: []
  })
  data3.dataList1.forEach((item, index) => {
    data3.dataSeries.push({
      value: item,
      name: data3.dataTitle[index]
    })
  })

  let option3 = reactive({})
  option3 = getOption13(option3, data3)
  option3.title.text = '性别\n占比'

  // 处理第2张图表 data2==data1
  let option2 = reactive({})
  let getOption24 = (option,data) => {
    option = {
      grid: {
        top: '8%',
        bottom: '0%',
        width:'80%',
        right: 0,
        left: -12,
        containLabel: true
      },
      xAxis: {
        show: false,
      },
      yAxis: [{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: data.dataTitle,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          interval: 0,
          color: '#FFFFFF',
          align: 'left',
          margin: 28,
          formatter: function(value, index) {
            let p;
            p = index
            return '{'+p+'|'+value + '}'
          },
          rich: {
            0: {
              fontSize: 12,
              color: data.myColor[0]
            },
            1: {
              fontSize: 12,
              color: data.myColor[1]
            },
            2: {
              fontSize: 12,
              color: data.myColor[2]
            },
          }
        }
      }],
      tooltip: {
        trigger: 'none',
        // formatter: "{b} : {c} ({d}%)"
      },
      color: data.myColor,
      colorBy: data,
      emphasis: {
        scale: true,
        scaleSize: 5,
        // focus: 'self'
      },
      series: [{
        name: '条',
        type: 'bar',
        z: 12,
        showBackground: true,
        yAxisIndex: 0,
        data: data.dataSeries,
        barWidth: 12,
        itemStyle: {
          normal: {
          label: {
            show: true, //开启显示
            position:"right", //在上方显示
            textStyle: { //数值样式
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: 500
            },
            padding:[3,0,0,-6],
            formatter: function(params) {
              let p
              p = params.dataIndex
              return '{'+p+'|'+'| ' + '}'+params.value
            },
            rich: {
              0: {
                fontSize: 11,
                fontWeight: 900,
                color: data.myColor[0],
                padding:[-3,0,0,0]
              },
              1: {
                fontSize: 11,
                fontWeight: 900,
                color: data.myColor[1],
                padding:[-3,0,0,0]
              },
              2: {
                fontSize: 11,
                fontWeight: 900,
                color: data.myColor[2],
                padding:[-3,0,0,0]
              },
            }
              },
          }
        },
      }]
    }
    return option
  }
  option2 = getOption24(option2, data1)
  let getMychart2 = (myChart) => {
    // console.log('ok')
  }

  // 处理第4张图表 data4==data3
  let option4 = reactive({})
  option4 = getOption24(option4, data3)

</script>

<style lang="less" scoped>
.forth-box {
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
}
</style>