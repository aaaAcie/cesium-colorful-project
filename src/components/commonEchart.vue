<template>
  <div :id="pos"></div>
</template>

<script setup>
import { reactive, getCurrentInstance,onMounted,nextTick  } from 'vue'
// defineProps 用来接收父组件传来的 props ; defineEmits 用来声明触发的事件
const { pos, option, width, height } = defineProps({
  pos: {
    type: String,
    required: true
  },
  option: {
    type: Object,
    required: true
  },
  width: {
    type: String,
    default: '320'
  },
  height: {
    type: String,
    default: '140'
  },
})
const emit = defineEmits(['getMychart'])

const { appContext : { config: { globalProperties } } } = getCurrentInstance()
const echarts = globalProperties.$echarts

onMounted(() => {
  nextTick(() => {
    // nextTick
    const box = document.getElementById(pos)
    // console.log(pos,box)
    box.style.width = width + "px"
    box.style.height = height + "px"
    let myChart = reactive(echarts.init(box))
    fresh(myChart, option)
    // 给父组件传值
    emit('getMychart', myChart)
    window.onresize = function () {
      myChart.resize()
    }
  })

})

let fresh = (myChart, option) => {
  myChart.setOption(option)
}
</script>

<style lang="scss" scoped></style>