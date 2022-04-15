<template>
  <div class="init" v-if="initBool">
    <div class="init-first">
      <button class="btn" @click="clickAccess">走进七彩小镇</button>
    </div>
  </div>
	<overview v-else="initBool"></overview>

  <homeHeaderVue/>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import overview from './overview/overview.vue'
import homeHeaderVue from '../components/homeHeader.vue';
const router = useRouter()

let initBool = ref(fasle)
const data = reactive({
	cesium3d: {},
})
onMounted(()=>{
	const { appContext : { config: { globalProperties } } } = getCurrentInstance()
	
	console.log(globalProperties.$Cesium3d)
	data.cesium3d = globalProperties.$Cesium3d
})
function clickAccess() {
	data.cesium3d.earthRotate(false)
	initBool.value = false
}
</script>

<style lang="less" scoped>
.init{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000000;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  .init-first{
    width: 130px;
    height: 36px;
    border-radius: 18px;
    .btn{
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      background-color: transparent;
      color: #fff;
      border: 1.5px solid #fff;
      border-radius: 18px;
      cursor: pointer;
      box-sizing: border-box;
      &:hover{
        border: none;
        background-color: #56FFFF;
        color: #000;
      }
    }
  }
}
</style>