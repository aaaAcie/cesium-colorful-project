<template>
	<bg>
		<!-- 给bg组件传对应位置上的图表 -->
		<template #first>
			<chart-bg name="积分总数">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<first-left pos="traffic-first-left"></first-left>
				</template>
			</chart-bg>
		</template>
		<template #second>
			<chart-bg name="积分来源">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<second-left pos="traffic-second-left"></second-left>
				</template>
			</chart-bg>
		</template>
		<template #third>
			<chart-bg name="积分趋势">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<third-left pos="traffic-third-left"></third-left>
				</template>
			</chart-bg>
		</template>
		<template #forth>
			<chart-bg name="用户积分分析">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<forth-left pos="traffic-forth-left"></forth-left>
				</template>
			</chart-bg>
		</template>

		<!-- 右边 -->
		<template #first2>
			<chart-bg name="当前车位使用情况">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>

				</template>
			</chart-bg>
		</template>
		<template #second2>
			<chart-bg name="昨日车流统计">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<second-right pos="traffic-second-right"></second-right>
				</template>
			</chart-bg>
		</template>
		<template #third2>
			<chart-bg name="近30天车流统计">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<third-right pos="traffic-third-right"></third-right>
				</template>
			</chart-bg>
		</template>
    		<template #forth2>
			<chart-bg name="客流分布">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<third-right pos="traffic-third-right"></third-right>
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
// import secondLeft from './echarts/secondLeft.vue'
// import thirdLeft from './echarts/thirdLeft.vue'
// import forthLeft from './echarts/forthLeft.vue'
// 右边
import secondRight from './echarts/secondRight.vue'
import thirdRight from './echarts/thirdRight.vue'

// let t = '积分总数'
</script>

<style>

</style>
