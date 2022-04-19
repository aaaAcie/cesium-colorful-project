<template>
  <div class="homeFooter">
    <div class="homeFooter-item " v-for="item in data.footerList" @click="toPush(item)">
        <div class="item-title " :class="activeName===item.name?'active':''">{{item.name}}</div>
        <div class="item-sub">{{item.ename}}</div>
    </div>
  </div>
</template>
<script setup>
  import { reactive,ref } from 'vue'
  import router from '../router'
  let data = reactive({
    footerList:[
      {id : 0,name : '总览',ename : 'overview'},
      {id : 1,name : '邻里',ename : 'neighborhood'},
      {id : 2,name : '教育',ename : 'education'},
      {id : 3,name : '健康',ename : 'health'},
      {id : 4,name : '创业',ename : 'entrepreneurship'},
      {id : 5,name : '建筑',ename : 'building'},
      {id : 6,name : '交通',ename : 'traffic'},
      {id : 7,name : '低碳',ename : 'lowCarbon'},
      {id : 8,name : '服务',ename : 'service'},
      {id : 9,name : '治理',ename : 'Governance'},
    ]
  })
  let activeName = ref('总览')
  function toPush(item){
    
    activeName.value = item.name
    router.push({
      name: item.ename
    })
    console.log(item.name)
  }
</script>
<style lang="less" scoped>
.homeFooter{
  position: absolute;
  bottom: 2%;
  z-index: 900000;
  left: 25%;
  height: 40px;
  width: 50%;
  background: linear-gradient(86deg, rgba(8, 19, 32, 0) 0%, rgba(8, 19, 32, 0.7) 52%, rgba(8, 19, 32, 0) 100%);
  display: flex;
  justify-content: space-between;
  .homeFooter-item{
    width: 10%;
    height: 40px;
    text-align: center;
    cursor: pointer;
    .item-title{
      height: 25px;
      font-size: 1.0vw;
      font-family: PingFang TC;
      font-weight: 500;
      line-height: 25px;
      color: #FFFFFF;
      background: linear-gradient(86deg, rgba(8, 19, 32, 0) 0%, rgba(8, 19, 32, 0.7) 52%, rgba(8, 19, 32, 0) 100%);
      &.active{
        background: linear-gradient(137deg, rgba(5, 57, 115, 0) 0%, #053973 100%);
      }
    }
    .item-sub{
      font-size: 0.6vw;
      margin-top: 0px;
    }
  }
}
</style>