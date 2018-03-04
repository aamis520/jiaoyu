<template>
	<div class="main">
		<div class="box-l">
			<ul>
				<li><label for="see-a1"><input type="checkbox" id="see-a1" />  咨询名单</label></li>
				<li><label for="see-a2"><input type="checkbox" id="see-a2" />  面试名单</label></li>
				<li><label for="see-a3"><input type="checkbox" id="see-a3" />  公开课列表</label></li>
				<li><label for="see-a4"><input type="checkbox" id="see-a4" />  咨询多维度分析</label></li>
				<li><label for="see-a5"><input type="checkbox" id="see-a5" />  面试多维度分析</label></li>
				<li><label for="see-a6"><input type="checkbox" id="see-a6" />  APP显示咨询学生</label></li>
			</ul>
			<ul>
				<li><label for="see-b1"><input type="checkbox" id="see-b1" />  试听档案</label></li>
				<li><label for="see-b2"><input type="checkbox" id="see-b2" />  测试名单</label></li>
				<li><label for="see-b3"><input type="checkbox" id="see-b3" />  学生完整电话</label></li>
				<li><label for="see-b4"><input type="checkbox" id="see-b4" />  试听多维度分析</label></li>
				<li><label for="see-b5"><input type="checkbox" id="see-b5" />  咨询师业绩分析</label></li>
				<li><label for="see-b6"><input type="checkbox" id="see-b6" />  APP显示在读学生</label></li>
			</ul>
		</div>
		<div class="box-r">
			<ul>
				<li><label for="operation-a1"><input type="checkbox" id="operation-a1" />  添加咨询</label></li>
				<li><label for="operation-a2"><input type="checkbox" id="operation-a2" />  添加跟进</label></li>
				<li><label for="operation-a3"><input type="checkbox" id="operation-a3" />  导入</label></li>
				<li><label for="operation-a4"><input type="checkbox" id="operation-a4" />  导出</label></li>
				<li><label for="operation-a5"><input type="checkbox" id="operation-a5" />  修改/删除</label></li>
			</ul>
			<ul>
				<li><label for="operation-b1"><input type="checkbox" id="operation-b1" />  转档共享</label></li>
				<li><label for="operation-b2"><input type="checkbox" id="operation-b2" />  试听/面试</label></li>
				<li><label for="operation-b3"><input type="checkbox" id="operation-b3" />  添加公开课</label></li>
				<li><label for="operation-b4"><input type="checkbox" id="operation-b4" />  APP沟通咨询学生</label></li>
				<li><label for="operation-b5"><input type="checkbox" id="operation-b5" />  APP沟通在读学生</label></li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	/*<div style="width:260px;height:120px; overflow:scroll; border:1px solid;">*/
	* {
		list-style: none;
	}
	
	.main {
		margin: 0;
	   height: 460px;
	   overflow: scroll;
	}
	
	.main>div {
		height: 462px;
		float: left;
		
	}
	
	.main>div>ul {
		width: 240px;
		height: 462px;
		float: left;
		padding-top: 14px;
	}
	
	.main>div>ul>li {
		padding-left: 60px;
		line-height: 44px;
	}
	
	.box-l {
		border-right: 1px solid #F2F4FC;
	}
</style>