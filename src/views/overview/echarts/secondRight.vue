<template>
  <common-echart :pos="pos" :option="option" @getMychart="getMychart" width="320" height="140"></common-echart>
</template>

<script setup>
  import { reactive,computed } from 'vue'
  import commonEchart from '@/components/commonEchart.vue'
  const { pos } = defineProps({
    pos: {
      type: String,
      required: true
    }
  })

  let data = reactive({
    // dataTemp1: [6, 7, 9, 5, 5],
		// dataTemp2: ['02-11', '02-12', '02-13', '02-14', '02-15'],
		myColor: ['#de942f', '#41c7ff'],
    dataList1: [12, 622],
    dataList2: ['工单待办总数', '工单完成总数'],
    dataSeries1: [],
    resObj: {}
  })
  data.dataList1.forEach((item, index) => {
    data.dataSeries1.push({
      value: item,
      name: data.dataList2[index],
    })
  })
  // let total = computed(() => eval(data.dataList1.join("+")))
  let baifen = computed(() => (data.dataList1[1] / eval(data.dataList1.join("+")) * 100).toFixed(0))

  for (let i in data.dataSeries1) {
    data.resObj[data.dataSeries1[i]["name"]] = data.dataSeries1[i]
  }

  let option = reactive({
    // backgroundColor: 'rgba(13,29,70,0.75)',
    tooltip: {
      trigger: 'none'
    },
    color: data.myColor,
    title: [
      {
        text: ' '+ baifen.value + '%\n' + '{tname|完成率}',
        x: '14%',
        top: '30%',
        textStyle: {
          color: '#41c7ff',
          fontSize: 18,
          lineHeight:20,
          fontWeight: '100',
          rich:{
            tname:{
              fontSize: 18,
              color: '#ffffff',
            }
          }
        }
      },
    ],
    legend: {
      icon: "none",
      orient: 'vertical', // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
      x: '45%',
      y: '35%',
      textStyle: {
        color: "#FFFFFF",
        fontSize: 15,
        rich:{
          a:{
            color:'#de942f',
            fontSize: 15
          },
          b:{
            color:'#41c7ff',
            fontSize: 15
          }
        }
      },
      formatter: function(name) {
        // console.log(name)
        let p
        if(name=='工单待办总数'){
          p = 'a'
        }else{
          p ='b'
        }
        return name + ' '+'{'+p+'|' + data.resObj[name].value+'}'
      }
    },
    series: [{
      name: 'Access From',
      type: 'pie',
      radius: ['70%', '90%'],
      center: ['22%', '50%'],
      avoidLabelOverlap: false,
      hoverAnimation:false,
      // itemStyle: {
      // 	borderRadius: 10,
      // 	borderColor: '#fff',
      // 	borderWidth: 2
      // },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: data.dataSeries1
    }]
  })

  let getMychart = (myChart) => {
    // console.log('ok')
  }

</script>

<style lang="scss" scoped></style>