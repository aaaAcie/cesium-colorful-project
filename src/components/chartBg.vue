<template>
<div class="chart">
  <div class="title">
    <div class="pre">
      <img class="triangle" src="title.png">
    </div>
    <span class="text">{{ name }}</span>
    <div class="pre back">
      <img class="triangle" src="title.png">
    </div>
  </div>
  <!-- 图表放在这里 接受传来的图表 -->
  <slot name="main"></slot>
</div>
</template>

<script setup>
  import {  } from 'vue'
  const { name } = defineProps({
    name: {
      type: String,
      required: true
    }
  })
  // console.log(name)
</script>

<style lang="less" scoped>
.chart {
  padding: 8px 15px;
  .title {
    display: flex;
    align-items: center;
    height: 22px;
    margin-bottom: 7px;
    // width: 220px;
    .pre {
      width: 12px;
      .triangle {
        width: 9px;
        height: 13px;
      }
    }
    .text {
      font-weight: 700;
      margin: 0 12px;
      // flex-grow: 1;
      text-align: center;
      font-size: 15px;
      line-height: 26px;
      color: #FFFFFF;
    }
  }
}
</style>