<template>
  <div class="biggest-container">
    <div class="left">
      <slot name="first"></slot>
      <slot name="second"></slot>
      <slot name="third"></slot>
      <slot name="forth"></slot>
    </div>
    <div class="left right">
      <slot name="first2"></slot>
      <slot name="second2"></slot>
      <slot name="third2"></slot>
      <slot name="forth2"></slot>
    </div>

  </div>
</template>

<script setup>
  import {  } from 'vue'

</script>

<style lang="less" scoped>
.biggest-container {
  // position: relative;
  width: 100%;
  height: 100%;
  .left{
    z-index: 900000;
    position: absolute;
    top: 70px;
    left: 0;
    width: 352px;
    height: 692px;
    background-color: rgba(8, 19, 32, 1);
  }
  .right {
    left: auto;
    right: 0;
  }
}
</style>