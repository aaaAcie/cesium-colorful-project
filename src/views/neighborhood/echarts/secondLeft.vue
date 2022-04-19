<template>
  <common-echart :pos="pos" :option="option" @getMychart="getMychart" width="320" height="125"></common-echart>
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

  // 定义 data
  let data = reactive({
    isSet: null, // 为了做判断：当鼠标移动上去的时候，自动高亮就被取消
    charPie3currentIndex: 0,
    myColor: ['#2975d4', '#41c7ff', '#30efbf'],
    dataList1: [4049, 4950, 8267],
    dataTitle: ['行为', '公益', '消费'],
    dataSeries: [],
    resObj: {},
  })
  data.dataList1.forEach((item, index) => {
    data.dataSeries.push({
      value: item,
      name: data.dataTitle[index],
    })
  })
  let total = computed(() => eval(data.dataList1.join("+")))
  for (let i in data.dataSeries) {
    data.resObj[data.dataSeries[i]["name"]] = data.dataSeries[i];
  }

  // 定义图表编辑项 option
  let option = reactive({})
  option = {
    // backgroundColor: 'rgba(13,29,70,0.75)',
    grid: {
      left: '5%',
      right: '8%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },
    legend: {
      icon: "circle",
      orient: 'vertical', // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
      right: '5%',
      top:'23%',
      textStyle: {
        color: "#FFFFFF",
        fontSize: 10,
        rich:{
          aaa:{
            color:'#5fc8f3'
          }
        }
      },
      formatter: function(name) {
        return name + '{aaa| ------ }' + data.resObj[name].value
      }
    },
    color: data.myColor,
    series: {
      hoverOffset: 4,
      itemGap: 20,
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [20, 50],
      roseType: 'area',
      center: ['27%', '50%'],
      data: data.dataSeries,
      label: {
        formatter: '{b}\n',
        padding: [0, -25, 40, -25],
        color: "#ffffff",
        fontSize:10,
      },
      labelLine: {
        length: 5,
        length2: 40,
        lineStyle: {
          color: "#ffffff"

        }
      },
      // emphasis: {
      //   scale: true,
      //   scaleSize: 20,
      //   focus: 'self',
      //   label: {
      //     // formatter: "{b}\n{d}%",
      //     formatter: function(params){
      //       return params.name+'\n'+'{tlabel|'+(params.value/total.value*100).toFixed(0)+'%'+'}'
      //     },
      //     show: true,
      //     color: "#fff",
      //     fontSize: 10,
      //     lineHeight:24,
      //     rich:{
      //       tlabel:{
      //         fontSize: 16,
      //         // fontFamily:'DIN'
      //       }
      //     },
      //     fontWeight: 'bold'
      //   },
      // },
      itemStyle: {
        borderRadius: 2,
        // borderWidth: 10, //设置border的宽度有多大
      },
    }
  }

  // 处理进一步交互
  let getMychart = (myChart) => {
    // console.log('ok')
  }

</script>

<style lang="scss" scoped></style>