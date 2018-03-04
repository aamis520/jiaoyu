<template>
	<div class="containe">
		<div class="top_box">
			<div class="tab">
				<router-link active-class="cli" :to="{path:'/finance/financialExport/students'}">学生信息</router-link>
				<router-link active-class="cli" :to="{path:'/finance/financialExport/teacher'}">教师信息</router-link>
				<router-link active-class="cli" :to="{path:'/finance/financialExport/administration'}">行政人员</router-link>
				<router-link active-class="cli" :to="{path:'/finance/financialExport/goods'}">物品信息</router-link>
			</div>
			<router-view class="item_box"></router-view>
		</div>
		<div class="bottom">
			
		</div>
	</div>
	
</template>

<script>
</script>

<style scoped lang="less">
	.containe{
		width: 1008px;
		height: 560px;
		background: #fff;
		padding: 0 30px;
		border-radius: 4px;
		font-size: 14px;
		.top_box{
			height: 56px;
			line-height: 56px;			
			border-bottom: 1px dashed #eee;		
			.tab{
				width: 500px;
				height: 56px;
				line-height: 56px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;				
			}
			a{
				width: 102px;
				height: 24px;
				background: #F2F5F8;
				color: #333;
				line-height: 24px;
				border-radius: 12px;
				text-align: center;
				margin-top: 18px;
				display: inline-block;
			}
			.cli{
				background: #31C27C;
				color: #fff;
			}
			.item_box{
				padding-top: 30px;
			}
		}
	}
</style>