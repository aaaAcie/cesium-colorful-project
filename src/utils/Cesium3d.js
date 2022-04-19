import * as Cesium from 'cesium';
let nowI = Date.now() 
let viewer = null    
class Cesium3d{
    constructor(selector){
        this.container = document.querySelector(selector);
        this.init();//初始化
        this.viewer = viewer
        this.onClick()
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
    //    let label = viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
    //        url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg" + "&tk=" + "19b72f6cde5c8b49cf21ea2bb4c5b21e",
    //        layer: "tdtAnnoLayer",
    //        style: "default",
    //        maximumLevel: 18, // 天地图的最大缩放级别
    //        format: "image/jpeg",
    //        tileMatrixSetID: "GoogleMapsCompatible",
    //        show: false
    //    }))
    //    // 影像的亮度
    //    label.brightness = 0.8
       
       viewer.scene.undergroundMode = false                                  // [ Bool , 设置开启地下场景 ]
       // viewer.scene.screenSpaceCameraController.minimumZoomDistance = 50     // [ Number ,设置相机最小缩放距离,距离地表n米 ]
       viewer.scene.terrainProvider.isCreateSkirt = false                    // [ Bool , 关闭裙边 ]
       viewer.scene.globe.enableLighting = true                              // [ Bool , 是否添加全球光照，scene(场景)中的光照将会随着每天时间的变化而变化 ]
       viewer.scene.globe.showGroundAtmosphere = true                        // [ Bool , 是否关闭大气效果 ]
       viewer.scene.globe.depthTestAgainstTerrain = true                  // [ Bool , 地面以下不可见（高程遮挡） ]
       viewer._cesiumWidget._creditContainer.style.display = "none" 
    //    viewer.camera.setView({
    //     destination:Cesium.Cartesian3.fromDegrees(121.626568,29.898417,0), //destination用于设置经纬度位置和相机高度
    //     orientation:{//orientation设置相机的方向
    //         heading:Cesium.Math.toRadians(0),
    //         pitch:Cesium.Math.toRadians(-90.0),
    //         roll:0.0
    //     } 
    // })
       // 加载3DTiles模型数据
	   let tileset1=viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
		url: '../../public/cesiumData/BlockBA/tileset.json',
        maximumScreenSpaceError:1, //最大的屏幕空间误差
		maximumNumberOfLoadedTiles:1000, //最大加载瓦片个数
	   }))
       let tileset2=viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
		url: '../../public/cesiumData/BlockBX/tileset.json',
        maximumScreenSpaceError:1, //最大的屏幕空间误差
		maximumNumberOfLoadedTiles:1000, //最大加载瓦片个数
	   }))
       let tileset3=viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
		url: '../../public/cesiumData/BlockYA/tileset.json',
        maximumScreenSpaceError:1, //最大的屏幕空间误差
		maximumNumberOfLoadedTiles:1000, //最大加载瓦片个数
	   }))
       let tileset4=viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
		url: '../../public/cesiumData/BlockYX/tileset.json',
        maximumScreenSpaceError:1, //最大的屏幕空间误差
		maximumNumberOfLoadedTiles:1000, //最大加载瓦片个数
	   }))
       // 地球自转开始
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
    // 飞入指定地点
    access(){
        viewer.scene.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(121.60886,29.892052,500), // 世界坐标点
            orientation: {
                heading: 6.2495626988216,
                pitch: -0.7591124304684471,
                roll: 6.283037533269935
            }
        })
    }
    onClick(){
        //定义canvas屏幕点击事件
		var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
		//注册鼠标事件,event参数是点击的地方是在哪里
		handler.setInputAction(function (event) {
				//定义一个屏幕点击的事件，pickPosition封装的是获取点击的位置的坐标
				var position = viewer.scene.pickPosition(event.position)
				//输出之后我们发现如前言所说的坐标都是笛卡尔坐标，所以我们需要转换笛卡尔坐标
				console.log("笛卡尔3: "+position)

                var cartesian = viewer.camera.pickEllipsoid(event.position, viewer.scene.globe.ellipsoid)
                console.log("林聪: "+ cartesian)

  				//将笛卡尔坐标转化为弧度坐标
				var cartographic = Cesium.Cartographic.fromCartesian(position)
				console.log("弧度："+cartographic)
				//将弧度坐标转换为经纬度坐标
       			var longitude = Cesium.Math.toDegrees(cartographic.longitude) //经度
				var latitude = Cesium.Math.toDegrees(cartographic.latitude) //纬度
				var height = cartographic.height //高度
				console.log("经纬度："+longitude,latitude,height)
				// alert("经度："+ longitude + "纬度："+ latitude + "高度："+  height)
				
				//同时也可以将经度度转回为笛卡尔 
				var ellipsoid = viewer.scene.globe.ellipsoid
				//定义84坐标为一个Cartesian值
				var wgs84 = Cesium.Cartographic.fromDegrees(longitude, latitude, height)
				
				//将84坐标转换为笛卡尔
				var dikaer = ellipsoid.cartographicToCartesian(wgs84)
				//赋值
				var longitude = dikaer.x
				var latitude = dikaer.y
				var height = dikaer.z
				// alert("笛卡尔x: "+ longitude+"笛卡尔y: "+ latitude+"笛卡尔z: "+  height);
		}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    }
}
export default Cesium3d