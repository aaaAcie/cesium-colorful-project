<template>
		<!-- <div class="left"></div> -->
	<bg>
		<!-- 给bg组件传对应位置上的图表 -->
		<template #first>
			<chart-bg name="积分总数">
				<!-- 给chart-bg组件传具体的图表 -->
				<template #main>
					
				</template>
			</chart-bg>
    </template>

		<template #second>
			<chart-bg name="积分来源">
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
// let t = '积分总数'
</script>

<style>

</style>
