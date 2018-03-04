<style lang="less" scoped="scoped">
	.showBig{
		box-sizing: border-box;
		margin: 0 40px;
		overflow: hidden;
		ul{
			border-bottom: 1px dotted #D3DDD5;
			width: 100%;
			box-sizing: border-box;
			overflow: hidden;
		}
		li{
			width: 50%;
			padding-bottom: 15px;
			box-sizing: border-box;
			color: #666666;
			float: left;
			img{
				position: relative;
				top: 4px;
				cursor: pointer;
			}
		}
	}
</style>
<template>
<!--显示已经选择的部分-->
<div class="showBig">
	<ul v-if="showChooseDate.length>0">
		<li v-for="(ele,index) in showChooseDate">
			{{ele.first_dept_name}}<span v-show="ele.second_dept_name"> </span>
			{{ele.second_dept_name}}<span v-show="ele.thrid_dept_name"> </span>
			{{ele.thrid_dept_name}}<span v-show="ele.role_name"> </span>
			{{ele.role_name}}
			<img src="../../../assets/error1.jpg" @click.stop.prevent="removeDate(index,ele)" /></li>
	</ul>
</div>
</template>

<script>
	export default{
		props:{
			
		},
		data(){
			return{
				changeDate:[]
			}
		},
		mounted(){
			
		},
		methods:{
			removeDate(index,ele){
				this.changeDate.splice(index,1)
				this.$store.commit("SET_CHOOSE",this.changeDate)
			},
		},
		computed:{
			showChooseDate(){
				this.changeDate = this.$store.state.addAccount.showChoose;
				return this.$store.state.addAccount.showChoose
			}
		}
	}
</script>
