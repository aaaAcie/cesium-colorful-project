import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// 引用全局样式
import './assets/css/global.css'
import Cesium3d from './utils/Cesium3d'
let app = createApp(App)
// 使用路由
app.use(router)
app.mount('#app')
const cesium3dd = new Cesium3d()
app.config.globalProperties.$Cesium3d = cesium3dd
