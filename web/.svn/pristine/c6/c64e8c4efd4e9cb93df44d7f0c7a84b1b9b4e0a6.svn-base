<template>
	<div>
		<ul class="classify-title">
			<li @click="toggle(tab.index,tab.view)" v-for="tab in tabs" :class="{active:active==tab.index}">北京大区</li>&gt;<li></li>
		</ul>
		<div class="classify-info">
			<ul class="subdivide">
				
			</ul>
			<ul class="staff"></ul>
		</div>
		<ul>
				<li v-for="(item,index) in data1">{{item.name}}</li>
			</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data () {
			return {
				active: "",
				currentView: "",
				tabs: [
					{
						index: 0,
						view: "",
						type: ""
					}
				],
				data1: []
			}
		},
		mounted(){
	  	  	this.axios.post("/api/api-integrated/v1/integrated/commonInfo/initCommonInfo?headSchoolId=1&accessToken=adsafsdfsd").then((res)=>{
	  	  	this.data1=res.data.messages.headCommonInfo.student_grade_list;
	  	  	console.log(this.data1);
	  	})},
		methods: {
			toggle (index, view) {
				this.active = index
				this.currentView = view
			}
		}
	}	
</script>

<style lang="less" scoped>
	 .classify-title{
		display: flex;
		margin: 0 30px;
		padding: 21px;
	} 
</style>