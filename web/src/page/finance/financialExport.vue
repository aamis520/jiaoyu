<template>
	<div>
		<div class="container" v-if="status">
			<div class="item">
				<span class="circle">01</span>
				<span class="txt">教师薪酬统计表</span>
				<span><img src="../../assets/edit.png" class="edit"/></span>
			</div>
			<div class="item">
				<span class="circle">02</span>
				<span class="txt">学生信息统计表</span>
				<span><img src="../../assets/edit.png" class="edit"/></span>
			</div>
			<div class="item">
				<span class="circle">03</span>
				<span class="txt">物品统计表</span>
				<span><img src="../../assets/edit.png" class="edit"/></span>
			</div>
			<img src="../../assets/addbutton_normal.png" alt="" id="add" @click="status=!status"/>
		</div>		
		<temp-item v-if="!status"></temp-item>
	</div>
	
	
</template>

<script>
	import tempItem from '@/page/finance/template'
	export default {
		data(){
			return{
				status:true
			}		
		},
		components:{
			'temp-item': tempItem
		},
		mounted:function(){
			this.axios.post("/api/api-finance/v1/finance/export/selectFinanceExportTemplateByHeadSchoolId?headSchoolId=2&pageSize=10&pageNo=1&accessToken=aaa").then((res)=>{
				this.data=res.data;
				console.log("查询财务导出模板列表",this.data)
			});
			this.axios.post("/api/api-finance/v1/finance/export/selectFinanceExportTemplateById?id=2&accessToken=aaa").then((res)=>{
				this.data=res.data;
				console.log("查询总校财务导出模板详情",this.data)
			});
			this.axios.post("/api/api-finance/v1/finance/export/deleteFinanceExportTemplate?id=2&accessToken=aaa").then((res)=>{
				this.data=res.data;
				console.log("删除总校财务导出模板",this.data)
			});
		}	
	}
</script>

<style scoped lang="less"> 
	.container{
		width: 1008px;
		height: 626px;
		background: white;
		padding: 10px 30px;
		font-size: 14px;
		color: #333;
		border-radius: 4px;
		position: relative;
		.item{
			height: 70px;
			line-height: 70px;
			border-bottom: 1px solid #eee;
			.circle{
				display: inline-block;
				width: 30px;
				height: 30px;
				line-height: 30px;
				border-radius: 50%;
				background: #31C27C;
				color: #fff;
				text-align: center;
				margin-right: 20px;
			}
			.txt{
				display: inline-block;
				width: 110px;
			}
			.edit{
				vertical-align: middle;
				margin-left: 754px;
			}
		}
		#add{
			position: absolute;
			right: 30px;
			bottom:30px;
			cursor: pointer;
			transition: 0.5s all;
			
		}
		#add:hover{
			transform: translateY(-4px);	
		}
	}	
</style>