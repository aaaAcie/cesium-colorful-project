import * as Cesium from 'cesium';
let nowI = Date.now() 
let viewer = null    
class Cesium3d{
    constructor(selector){
        this.container = document.querySelector(selector);
        this.init();//初始化
    }
    init(){
        //初始化场景
        this.initScene();
        
    }
    initScene(){
        Cesium.Ion.defaultAccessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkM2RkMmEwNS1lOThiLTQxMGYtODIxZC04MzM2MjNkZDFjYmYiLCJpZCI6ODU5NTUsImlhdCI6MTY0NzQxMzI0OH0.nHcv7GLFTPqGBe0epN5SyeGRfiej3CM4uRSLzv-qaAM'
        viewer = new Cesium.Viewer('cesiumContainer', {
            animation: false,                   // [ Bool, 是否显示动画控件 ]
            shouldAnimate: true,                // [ Bool, 是否开启动画 ]
            homeButton: false,                  // [ Bool, 是否显示Home按钮 ]
            vrButton: false,                    // [ Bool, 是否显示vr按钮 ]
            fullscreenButton: false,            // [ Bool, 是否显示全屏按钮 ]
            baseLayerPicker: false,             // [ Bool, 是否显示图层选择控件 ]
            geocoder: false,                    // [ Bool, 是否显示地名查找控件 ]
            timeline: false,                    // [ Bool, 是否显示时间线控件 ]
            navigationHelpButton: false,        // [ Bool, 是否显示帮助信息控件 ]
            infoBox: false,                     // [ Bool, 是否显示点击要素之后显示的信息 ]
            requestRenderMode: true,            // [ Bool, 启用请求渲染模式 ]
            scene3DOnly: false,                 // [ Bool, 每个几何实例将只能以3D渲染以节省GPU内存 ]
            sceneModePicker: false,             // [ Bool, 是否显示场景切换控件 ]
            sceneMode: 3,                       // [ Number,初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode ]
            fullscreenElement: document.body,   // [ Object, 全屏时渲染的HTML元素 ]
        })
        // 清除默认的第一个影像 bing地图影像
        viewer.imageryLayers.remove(viewer.imageryLayers.get(0))
       // arcGis影像
       let img = viewer.imageryLayers.addImageryProvider(
           new Cesium.ArcGisMapServerImageryProvider({
               url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
               baseLayerPicker: false
           })
       )
       // 影像的亮度
       img.brightness = 0.8
       // 天地图标注
       let label = viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
           url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg" + "&tk=" + "19b72f6cde5c8b49cf21ea2bb4c5b21e",
           layer: "tdtAnnoLayer",
           style: "default",
           maximumLevel: 18, // 天地图的最大缩放级别
           format: "image/jpeg",
           tileMatrixSetID: "GoogleMapsCompatible",
           show: false
       }))
       // 影像的亮度
       label.brightness = 0.8
       
       viewer.scene.undergroundMode = false                                  // [ Bool , 设置开启地下场景 ]
       // viewer.scene.screenSpaceCameraController.minimumZoomDistance = 50     // [ Number ,设置相机最小缩放距离,距离地表n米 ]
       viewer.scene.terrainProvider.isCreateSkirt = false                    // [ Bool , 关闭裙边 ]
       viewer.scene.globe.enableLighting = true                              // [ Bool , 是否添加全球光照，scene(场景)中的光照将会随着每天时间的变化而变化 ]
       viewer.scene.globe.showGroundAtmosphere = true                        // [ Bool , 是否关闭大气效果 ]
       // viewer.scene.globe.depthTestAgainstTerrain = true                  // [ Bool , 地面以下不可见（高程遮挡） ]
       viewer._cesiumWidget._creditContainer.style.display = "none" 
       this.earthRotate(true)
    }
    // 地球自转控制
    earthRotate(bool){
        if(bool){
            viewer.clock.onTick.addEventListener(this.rotate)
        }else{
            viewer.clock.onTick.removeEventListener(this.rotate)
        } 
    }
    // 地球自转方法
	rotate () {
		let a = .1
		let t = Date.now()
		let n = (t - nowI) / 1e3
		nowI = t
	    viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -a * n)
	}
}
export default Cesium3d