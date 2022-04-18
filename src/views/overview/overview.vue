<template>
	<bg>
		<!-- 给bg组件传对应位置上的图表 -->
		<template #first>
			<chart-bg name="今日在园人数">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<first-left pos="overview-first-left"></first-left>
				</template>
			</chart-bg>
		</template>
		<template #second>
			<chart-bg name="停车场情况">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<second-left pos="overview-second-left"></second-left>
				</template>
			</chart-bg>
		</template>
		<template #third>
			<chart-bg name="设备工单数量">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					<third-left pos="overview-third-left"></third-left>
				</template>
			</chart-bg>
		</template>

		<!-- 右边 -->
		<template #first2>
			<chart-bg name="设备实时统计">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>

				</template>
			</chart-bg>
		</template>
		<template #second2>
			<chart-bg name="工时实时统计">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>

				</template>
			</chart-bg>
		</template>
		<template #third2>
			<chart-bg name="AI事件统计">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>

				</template>
			</chart-bg>
		</template>
		<template #forth2>
			<chart-bg name="品质管理统计（年）">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>

				</template>
			</chart-bg>
		</template>
	</bg>
</template>
<script setup>
import bg from '@/components/bg.vue'
import chartBg from '@/components/chartBg.vue'
import firstLeft from './echarts/firstLeft.vue'
import secondLeft from './echarts/secondLeft.vue'
import thirdLeft from './echarts/thirdLeft.vue'

// let t = '积分总数'
</script>

<style>

</style>
