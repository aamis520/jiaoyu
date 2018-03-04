<template>
	<div>
		<ul class="list_2">
			<router-link active-class="act" :to="{path:'/class/curriculumChain'}" tag="li">课程链</router-link>
			<router-link active-class="act" :to="{path:'/class/nonCurriculumchain'}" tag="li">非课程链</router-link>
		</ul>
		<router-view class="rot2"></router-view>

	</div>
</template>

<script>
</script>

<style>

</style>