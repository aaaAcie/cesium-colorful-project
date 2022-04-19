<template>
	<bg>
		<!-- 给bg组件传对应位置上的图表 -->
		<template #first>
			<chart-bg name="项目基础信息">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<first-left pos="service-first-left"></first-left>
				</template>
			</chart-bg>
		</template>
		<template #second>
			<chart-bg name="当日人员进出情况">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<second-left pos="service-second-left"></second-left>
				</template>
			</chart-bg>
		</template>
		<template #third>
			<chart-bg name="设备实时状态">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<third-left pos="service-third-left"></third-left>
				</template>
			</chart-bg>
		</template>
		<template #forth>
			<chart-bg name="员工实时在岗信息">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<forth-left pos="service-forth-left"></forth-left>
				</template>
			</chart-bg>
		</template>

		<!-- 右边 -->
		<template #first2>
			<chart-bg name="质量验评">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>

				</template>
			</chart-bg>
		</template>
		<template #second2>
			<chart-bg name="风险总览">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<second-right pos="service-second-right"></second-right>
				</template>
			</chart-bg>
		</template>
		<template #third2>
			<chart-bg name="隐患排查">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<third-right pos="service-third-right"></third-right>
				</template>
			</chart-bg>
		</template>
    		<template #forth2>
			<chart-bg name="质量巡检">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<third-right pos="service-third-right"></third-right>
				</template>
			</chart-bg>
		</template>

	</bg>
</template>
<script setup>
import bg from '@/components/bg.vue'
import chartBg from '@/components/chartBg.vue'
// 左边
// import firstLeft from './echarts/firstLeft.vue'
import secondLeft from './echarts/secondLeft.vue'
// import thirdLeft from './echarts/thirdLeft.vue'
// import forthLeft from './echarts/forthLeft.vue'
// 右边
// import secondRight from './echarts/secondRight.vue'
// import thirdRight from './echarts/thirdRight.vue'

// let t = '积分总数'
</script>

<style>

</style>
