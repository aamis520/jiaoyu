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
	import settingOne from "@/page/goods/settingOne"
	import settingTwo from "@/page/goods/settingTwo"
	export default {
		data () {
			return{
				active: 0, 
			 	currentView: "settingOne", 
			 	tabs: [ 
			 		{
			 			index: 0,
				  		type: '基本设置1', 
				  		view: "settingOne"
			 		},  
			 		{  
			 			index: 1,
			  			type: '基本设置2', 
			  			view: "settingTwo"
			 		} 
			 	] 
			}
		},
		components: {
			settingOne: settingOne,
			settingTwo: settingTwo
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