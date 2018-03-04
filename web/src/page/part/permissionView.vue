<template>
	<div class="main">
		<div class="top">
		咨询部长  ·  权限查看
		<span class="iconfont icon-cuo closeEye" id="closeEye"></span>
		</div>
		<ul>
			<li>
				<p>
					<span class="col">咨询·查看</span>
					<span>咨询名单</span>
					<span>试听档案</span>
					<span>面试名单</span>
					<span>测试名单</span>
					<span>公开课列表</span>
					<span>学生完整电话</span>
					<span>咨询多维度分析</span>
					<span>试听多维度分析</span>
				</p>
				<p class="p">
					<span>面试多维度分析</span>
					<span>咨询师业绩分析</span>
					<span>APP显示咨询学生</span>
					<span>APP显示在读学生</span>
				</p>
			</li>
			<li>
				<p>
					<span class="col">咨询·操作</span>
					<span>添加咨询</span>
					<span>导入</span>
					<span>导出</span>
					<span>修改/删除</span>
					<span>转档共享</span>
					<span>试听/面试</span>
					<span>添加公开课</span>
				</p>
			</li>
			<li>
				<p>
					<span class="col">报名·查看</span>
					<span>已完成订单</span>
					<span>未完成订单</span>
				</p>
			</li>
			<li>
				<p>
					<span class="col">报名·操作</span>
					<span>报名班级</span>
					<span>报名VIP班级</span>
					<span>报名一对一</span>
					<span>跨校报名</span>
					<span>特殊优惠</span>
					<span>赠送金额</span>
					<span>账户充值</span>
				</p>
			</li>
			<li>
				<p>
					<span class="col">财务·查看</span>
					<span>收入核查</span>
					<span>支出核查</span>
					<span>财务报表</span>
					<span>学生课耗</span>
					<span>教师业绩/课耗</span>
				</p>
			</li>
			<li>
				<p>
					<span class="col">财务·操作</span>
					<span>添加收入/支出</span>
					<span>设置代理课费</span>
					<span>工资核算</span>
					<span>修改/删除</span>
					<span>支出</span>
					<span>导出</span>
				</p>
			</li>
			<li>
				<p>
					<span class="col">行政·查看</span>
					<span>申请记录</span>
					<span>汇报记录</span>
					<span>申假记录</span>
					<span>申费记录</span>
					<span>报销记录</span>
					<span>评课记录</span>
					<span>任务记录</span>
					<span>调货记录</span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		mounted:function(){
			$("#closeEye").click(function(){
				$(this).parents(".permissionView").hide();
			})
		}
	}
</script>

<style lang="less" scoped>
	*{
		font-size: 14px;
	}
	span{
		display: inline-block;
		color: #696969;
		margin-right: 42px;
	}
	.main{
		
		width: 1200px;
		height: 620px;
		background: white;
		border-radius: 4px;
	}
	.top{
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 18px;
		background: #EFF3F5;
		border-radius: 4px;
		position:relative;
	}
	ul{
		list-style: none;
		padding: 0 30px;
	}
	li:nth-of-type(1){
		padding-top: 20px;
		height: 106px;
		line-height: 36px;
	}
	li{
		height: 60px;
		line-height: 60px;
		margin: 0 auto;
		border-bottom: 1px dashed #DEDEDE;
	}
	.p{
		padding-left: 116px;
	}
	.col{
		margin-right: 50px;
		color: #5ACE96;
	}
	.closeEye{
		position: absolute;
		right: 10px;
		top: 10px;
		background: none;
	}
	.closeEye:hover{
		color: red;
	}
</style>