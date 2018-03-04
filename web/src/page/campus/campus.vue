<template>
	<div>
		<ul class="list_2">
			<router-link  active-class="act" :to="{path:'/campus/schoolType'}" tag="li">学校类型</router-link>
			<router-link  active-class="act" :to="{path:'/campus/campusSettings'}" tag="li">校区设置</router-link>
			<router-link  active-class="act" :to="{path:'/campus/frameSetting'}" tag="li">框架设置</router-link>
			<router-link  active-class="act" :to="{path:'/campus/resultsView'}" tag="li">结果查看</router-link>
		</ul>
    <router-view class="rot2"></router-view>		
		
	</div>
</template>

<script>
</script>

<style>
	.rot2{
		width: 1008px;
		border-radius: 4px;
		position: absolute;
		top: 60px;
		left: 292px;
	}
</style>
