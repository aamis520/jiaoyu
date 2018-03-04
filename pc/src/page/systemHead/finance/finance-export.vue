<style lang="less" scoped="scoped">
	@color :#31C17B;
	@font12:12px;
	@font14:14px;
	@font16:16px;
	*{
		user-select: none;
	}
	.common-w{
		min-height: 745px;
		box-sizing: border-box;
		padding-bottom: 120px;
		.item{
			height: 70px;
			line-height: 70px;
			position: relative;
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
			.ico-edit{
				position: absolute;
				right: 20px;
				top: 20px;
				width: 25px;
				height: 25px;
			}
		}
		#add{
			position: absolute;
			right: 30px;
			bottom:20px;
			width: 80px;
			height: 80px;
			cursor: pointer;
			transition: 0.5s all;
			
		}
	}
</style>
<template>
	<div>
		<div class="financeExport">
			<div class="mod-w radius">
				导入导出 · 模板设置
				<font-tooltip :parentDate="sendChildTipDate[0]"></font-tooltip>
			</div>
			<div class="common-w">
				<div class="item">
					<span class="circle">01</span>
					<span class="txt">教师薪酬统计表</span>
					<i class="ico-init ico-edit"></i>
				</div>
				<div class="item">
					<span class="circle">02</span>
					<span class="txt">学生信息统计表</span>
					<i class="ico-init ico-edit"></i>
				</div>
				<div class="item">
					<span class="circle">03</span>
					<span class="txt">物品统计表</span>
					<i class="ico-init ico-edit"></i>
				</div>
				<i class="ico-init ico-addBig" id="add"></i>
			</div>
		</div>
	</div>
</template>

<script>
	import contapi from '@commonJS/const'
	import fontTooltip from '@components/fontTooltip'
	export default{
		data(){
			return{
				//提示框
				sendChildTipDate: [{
					index: 0, //只是方便父级使用,子集没用
					title: '导入导出 · 模板设置', //父级方便看当前定义的那个tip，子集没用
					contentFont: '前三个文件为系统内置文件，可修改不可删除' //展示的文字
				}],
			}
		},
		components: {
			'font-tooltip': fontTooltip,
		},
	}
</script>

