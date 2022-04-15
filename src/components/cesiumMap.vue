<template>
  <div id="cesiumContainer" >
    
  </div>
</template>
<script setup>
  // import {Viewer} from 'cesium';
  import Cesium3d from '../utils/Cesium3d'
  import {onMounted,reactive} from 'vue'
        
  import * as Cesium from 'cesium'
  const data = reactive({
    cesium3d: {},
  })
  onMounted(() => {
    data.cesium3d = new Cesium3d('#cesiumContainer')
  })
  
</script>
<style>
  #cesiumContainer {
    position:absolute;
    width: 100%;
    height: 100%;
    margin: 0; 
    padding: 0; 
    overflow: hidden;
    }
</style>