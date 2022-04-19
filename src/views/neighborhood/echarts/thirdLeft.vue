<template>
  <common-echart :pos="pos" :option="option" @getMychart="getMychart" width="320" height="180"></common-echart>
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
    dataList1: [110, 170, 200,220,270,250,468,200,50,70,200,100],
    dataList2: [90, 100, 110,200,210,320,225,120,100,90,130,180],
    dataTitle: ['6月', '7月', '8月','9月', '10月', '11月','12月', '1月', '2月','3月', '4月', '5月'],
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
    tooltip: {
      trigger: 'axis',
      backgroundColor: "#0a1825",
      borderColor: "#0a1825",
      axisPointer: {
          type: 'line',
      },
      formatter: function(params){
        var str = `${params[0].name}<br /><span style=font-size:14px>获取积分</span> <span style=color:#41fff9;font-size:14;font-weight:bold>${params[0] ? params[0].data : ''}亿元</span>
        <br /><span style=font-size:14px>兑换积分</span> <span style=color:#41a0ff;font-size:14;font-weight:bold>${params[1]? params[1].data : ''}亿元</span>`
        return str
        
      },
      textStyle: {
        color: "#FFFFFF",
        fontSize:12
      },
    },
    legend: {
      show: true,
      icon: "roundRect",
        textStyle: {
            color: "#ffffff",
          fontSize:15
      },
      right: "10",
      itemWidth:13,
      itemHeight:5
    },
    grid: {
      left: '0%',
      right: '0%',
      top: '25%',
      width: "100%",
      height: '70%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      
      axisLine: { //坐标轴轴线相关设置。数学上的x轴
        show: true,
        lineStyle: {
          color: '#80878a'
        },
      },
      axisLabel: { //坐标轴刻度标签的相关设置
        show:true,
        interval:0,
        textStyle: {
          color: '#ffffff',
          fontSize:13
        },
      },
      axisTick: {
        show: false,
      },
      // data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"]
      data: data.dataTitle
    }],
    yAxis: [{
      // interval:150,
      name: "单位：分",
      nameTextStyle: {
            color: "#80878a",
          fontSize:15
          },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#80878a',
          type: "dashed"
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#80878a"
        }

      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#80878a',
          fontSize:15
        },
      },
      axisTick: {
        show: false,
      },
    }],
    series: [{
      type: 'line',
      name:'获取',
      symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
      showAllSymbol: true,
      symbolSize: 0,
      smooth: true,
      lineStyle: {
        normal: {
          color: "#41fff9", // 线条颜色
        },
        borderColor: 'rgba(0,0,0,.4)',
      },
      areaStyle: { //区域填充样式
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "rgba(65, 255, 249, 1)"
            },
            {
              offset: 1,
              color: "rgba(44, 119, 194, 0)"
            }
          ], false),
          // shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
          shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        }
      },
      data:data.dataList1
    },{
      type: 'line',
      name:'兑换',
      symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
      showAllSymbol: true,
      symbolSize: 0,
      smooth: true,
      lineStyle: {
        normal: {
          color: "#41a0ff", // 线条颜色
        },
        borderColor: 'rgba(0,0,0,.4)',
      },
      areaStyle: { //区域填充样式
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "rgba(65, 160, 255, 1)"
            },
            {
              offset: 1,
              color: "rgba(44, 119, 194, 0)"
            }
          ], false),
          // shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
          shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        }
      },
      data:data.dataList2
    }]
  }

  // 处理进一步交互
  let getMychart = (myChart) => {
    console.log('ok')
  }

</script>

<style lang="scss" scoped></style>