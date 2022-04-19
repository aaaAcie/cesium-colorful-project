<template>
  <common-echart :pos="pos" :option="option" @getMychart="getMychart" width="320" height="170"></common-echart>
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
    myColor: ['#00deff', '#0095ff', '#30efbf','#ffa041', '#23a3b1', '#749dc0','#7272f8'],
    dataList1: [3128, 5454,798,465,145,1544,685],
    dataTitle: ['电瓶车路过告警', '人员离岗告警','垃圾满溢告警', '消防通道违停告警','电瓶车闯入告警', '停车场拥堵告警','明火浓烟告警'],
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
      left: '0',
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
      x: '0%',
      y: '0%',
      textStyle: {
        color: "#FFFFFF",
        fontSize: 12
      },
      formatter: function(name) {
        // return name + '   ' + data.resObj[name].value
        // console.log(name.length)
        let a=''
        if(name.length==6){
          a='          '
        }else if(name.length==7){
          a='       '
        }else{
          a='   '
        }
        return name + a + data.resObj[name].value
      }
    },
    color: data.myColor,
    series: {
      hoverOffset: 4,
      itemGap: 20,
      name: '访问来源',
      type: 'pie',
      radius: ['55%', '70%'],
      center: ['75%', '50%'],
      data: data.dataSeries,
      legendHoverLink:false,
      // avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center"
      },
      labelLine: {
        show: false
      },
      emphasis: {
        scale: true,
        scaleSize: 20,
        focus: 'self',
        label: {
          // formatter: "{b}\n{d}%",
          formatter: function(params){
            let strs= params.name.split('')
            let str=''
            for(let i=0,s;s=strs[i++];){
              str +=s;
              if(!(i%5)) str += '\n'; 
            }
            return str+'\n'+'{tlabel|'+(params.value/total.value*100).toFixed(2)+'%'+'}'
            // return params.name+'\n'+'{tlabel|'+(params.value/total.value*100).toFixed(0)+'%'+'}'
          },
          show: true,
          color: "#fff",
          fontSize: 10,
          lineHeight: 13,
          rich:{
            tlabel:{
              fontSize: 18,
              padding:[16,0,0,0],
              // fontFamily:'DIN'
            }
          },
        },
      },
      itemStyle: {
        borderRadius: 2,
        // borderWidth: 10, //设置border的宽度有多大
      },
    }
  }

  // 处理进一步交互
  let getMychart = (myChart) => {
    // console.log('from son：', myChart)
    // 对子组件传回来的 myChart 进行进一步交互处理
    myChart.on('mouseover', param => {
      clearInterval(data.isSet)
      // 取消之前高亮的图形
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: data.charPie3currentIndex
      })
      // 高亮当前图形
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: param.dataIndex
      })
      data.charPie3currentIndex = param.dataIndex
    })
    var chartHover = function () {
      var dataLen = option.series.data.length
      // 取消之前高亮的图形
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: data.charPie3currentIndex
      })
      data.charPie3currentIndex = (data.charPie3currentIndex + 1) % dataLen
      // 高亮当前图形
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: data.charPie3currentIndex
      })
    }
    data.isSet = setInterval(chartHover, 2000)
    // 4、鼠标移出之后，恢复自动高亮
    myChart.on('mouseout', param => {
      data.isSet = setInterval(chartHover, 2000)
    })
  }

</script>

<style lang="scss" scoped></style>