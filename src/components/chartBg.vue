<template>
<div class="chart">
  <div class="title">
    <div class="pre">
      <span class="triangle">123</span>
    </div>
    <span class="text">{{ name }}</span>
    <div class="pre back">
      <span class="triangle">123</span>
    </div>
  </div>
  <!-- 图表放在这里 -->
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
    height: 22px;
    width: 140px;
    .pre {
      width: 12px;
      .triangle {
        width: 9px;
        height: 13px;
        background: linear-gradient(180deg, #41C7FF 0%, rgba(41, 117, 212, 0) 100%);
        opacity: 1;
      }
    }
    .text {
      font-size: 15px;
      line-height: 26px;
      color: #FFFFFF;
    }
  }
}
</style>