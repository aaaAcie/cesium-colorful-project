<template>
  <div class="homeHeader">
    <div class="homeHeader-Item">

    </div>
    <div class="homeHeader-center">
      <p>“之江七彩云”数字社区运维平台</p>
    </div>
    <div class="homeHeader-Item">
      
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.homeHeader{
  position: absolute;
  top: 0;
  z-index: 900000;
  left: 0;
  height: 53px;
  width: 100%;
  // background: linear-gradient(180deg, #091F2F 0%, rgba(16, 37, 53, 0) 100%);
  display: flex;
  .homeHeader-Item{
    height: 43px;
    width: 40%;
    background-color: red;
  }
  .homeHeader-center{
    flex: 1;
    height: 53px;
    background-color: yellow;
    p{
      font-size: 1.1vw;
	    font-weight: 600;
	    letter-spacing: .1vw;
	    text-align: center;
      line-height: 20px;
    }
  }
}
</style>