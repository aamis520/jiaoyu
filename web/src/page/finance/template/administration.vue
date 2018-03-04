<template>
	<div>
		<div class="group">
			<span class="lab">选择范围</span>
			<p>
				<span class="item">校区筛选<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">部门筛选<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">角色筛选<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
			</p>
		</div>
		<div class="group">
			<span class="lab">选择范围</span>
			<p>
				<span class="item">员工姓名<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">联系方式<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">出生日期<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">学历等级<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">入职时间<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">聘用情况<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">所学专业<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">岗位角色<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">员工编号<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">生育状况<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">婚姻状况<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">毕业院校<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">银行卡号<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">社保卡号<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">身份证号<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">微信号码<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">QQ号码<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">电子邮箱<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">户籍地址<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		mounted:function(){
			$("p .item").click(function(){
				$(this).find("img").toggle()
			})
		}
	}
</script>

<style scoped lang="less">
	.group{
		display: flex;
		.lab{
			width: 112px;
			color: #31C27C;
			line-height: 34px;
		}
		p{
			width: 1200px;
			line-height: 34px;
			.item{
				width: 120px;
				line-height: 20px;
				display: inline-block;
				cursor: pointer;
				.right{
					margin-left: 5px;
					img{
						display: none;
						vertical-align: middle;				
					}
				}				
			}
		}
	}
</style>