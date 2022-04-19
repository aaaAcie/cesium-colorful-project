<template>
  <common-echart :pos="a" :option="option1" @getMychart="getMychart" width="353" height="100"></common-echart>
  <common-echart :pos="b" :option="option2" @getMychart="getMychart" width="353" height="100"></common-echart>
</template>

<script setup>
  import { ref,reactive,computed } from 'vue'
  import commonEchart from '@/components/commonEchart.vue'
  const { pos } = defineProps({
    pos: {
      type: String,
      required: true
    }
  })
  const [a, b] = [pos+'1', pos+'2']

  let data = reactive({
    // dataTemp1: [6, 7, 9, 5, 5],
		// dataTemp2: ['02-11', '02-12', '02-13', '02-14', '02-15'],
		myColor: ['#3672fc', '#41c7ff', '#f8d972', '#ffa041', '#30efbf'],
    dataList1: [55, 30, 8,9,3],
    dataList2: ['日化用品', '食品酒水', '服饰鞋帽', '家用电器', '其他'],
    dataSeries1: [],
    resObj: {},
  })
  let max = ref(eval(data.dataList1.join("+")))
  data.dataList1.forEach((item, index) => {
    data.dataSeries1.push({
      value: item,
      name: data.dataList2[index],
      itemStyle: {
        color: data.myColor[index],
      }
    })
  })
  let option1 = reactive({
    color: data.myColor,
    grid: {
      top: '8%',
      bottom: '0%',
      width:'85%',
      height:'100%',
      // right: 40,
      left: -20,
      containLabel: true
    },
    xAxis: {
      show: false,
      max: max.value,
    },
    yAxis: [{
      triggerEvent: true,
      show: true,
      inverse: true,
      data: data.dataList2,
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
        margin: 60,
        formatter: function(value, index) {
          return '{title|' + value + '}'
        },
        rich: {
          title: {
            width: 50,
            align: 'right',
            fontSize: 10
          }
        }
      },
    }, {
      triggerEvent: true,
      show: true,
      inverse: true,
      data: data.dataList1,
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
        interval: 0,
        color: '#FFFFFF',
        // align: 'left',
        margin: -10,
        verticalAlign: 'center',
        formatter: function(value, index) {
          let aaa = (value/max.value*100).toFixed(0)
          return '{title|' +aaa+'%' + '}'
        },
        rich: {
          title: {
            width: 50,
            align: 'left',
            fontSize: 10,
            padding: [0, 0, 0, 20]
          }
        }
      },
    }],
    series: [{
      name: '条',
      type: 'bar',
      z: 12,
      showBackground: true,
      yAxisIndex: 0,
      data: data.dataSeries1,
      barWidth: 9,
      barGap: 11
    }, 
    // {
    //   name: '背景',
    //   type: 'bar',
    //   barWidth: 9,
    //   barGap: '-100%',
    //   data: maxList,
    //   itemStyle: {
    //     normal: {
    //       color: 'rgba(16, 43, 72, 1)',
    //       // barBorderRadius: [3, 3, 3, 3]
    //     }
    //   },
    // }
    ]
  })

  let option2 = reactive({
    // backgroundColor: 'rgba(13,29,70,0.75)',
    tooltip: {
      trigger: 'none'
    },
    color: data.myColor,
    series: [{
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [28, 40],
      center: ['50%', '60%'],
      itemStyle: {
        borderRadius: 2
      },
      label:{
        formatter: '{b}\n',
        padding: [0, -40, 0, -40],
        color: "#ffffff",
        fontSize: 10
      },
      labelLine: {
        length: 10,
        length2: 50,
      },
      data: data.dataSeries1
    }]
  })

  let getMychart = (myChart) => {
    console.log('ok')
  }

</script>

<style lang="scss" scoped></style>