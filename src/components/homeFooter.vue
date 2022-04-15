<template>
  <div class="homeFooter">
    <div>

    </div>
  </div>
</template>
<script setup>
  import { reactive } from 'vue'
  let data=reactive({
    footerList:[
      {id : 0,name : '总览'},
      {id : 1,name : '邻里'},
      {id : 2,name : '教育'},
      {id : 3,name : '健康'},
      {id : 4,name : '创业'},
      {id : 5,name : '建筑'},
      {id : 6,name : '建筑'},
      {id : 7,name : '建筑'}
    ]
  })
</script>
<style lang="less" scoped>
.homeFooter{
  position: absolute;
  bottom: 2%;
  z-index: 900000;
  left: 25%;
  height: 40px;
  width: 50%;
  background: red;
  display: flex;
}
</style>