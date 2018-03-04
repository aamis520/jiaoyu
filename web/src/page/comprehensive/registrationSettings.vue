<template>
	<form>
	    <ul class="common">
	        <li v-on:click="toggle(tab.index,tab.view)" v-for="tab in tabs" :class="{active:tab.index==active}">
	        	{{tab.type}} 
	        </li>
	    </ul>
		<component :is="currentView"></component>
	</form>
</template>

<script>
	import applydate from "@/page/comprehensive/applyDate"
	import applyrules from "@/page/comprehensive/applyRules"
	import enterstuInfo from "@/page/comprehensive/enterStuInfo"
	export default {
		data () {
			return{
				active: 0, 
			 	currentView: "applydate", 
			 	tabs: [ 
			 		{
			 			index: 0,
				  		type: '报名日期', 
				  		view: "applydate"
			 		},  
			 		{  
			 			index: 1,
			  			type: '报名规则设置', 
			  			view: "applyrules"
			 		},  
			 		{  
			 			index: 2,
			  			type: '录入学生信息自定义', 
			  			view: "enterstuInfo"
			 		}  
			 	] 
			}
		},
		components: {
			applydate: applydate,
			applyrules: applyrules,
			enterstuInfo: enterstuInfo
		},
		mounted () {
			
		},
		methods: { 
		 	toggle: function (index, view) { 
		 		this.active = index 
		 		this.currentView = view
		 	} 
		}
	}
</script>

<style lang="less" scoped>
	.common{
		// position: fixed;
		// top: 8.5%;
		// left: 50%;
		position: absolute;
		top: -94px;
		left: 0;
		width: 100%;
		padding-left: 270px;
		li{
			float: left;
			margin-left: 40px;
			cursor: pointer;
		}
	}
	.active{
		color: #31c27c;
	}
	
</style>