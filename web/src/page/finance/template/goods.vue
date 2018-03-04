<template>
	<div>
		<div class="group">
			<span class="lab">选择范围</span>
			<p>
				<span class="item">校区筛选<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">类型筛选<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
			</p>
		</div>
		<div class="group">
			<span class="lab">选择范围</span>
			<p>
				<span class="item">物品名称<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">物品类型<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">颜色种类<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">物品型号<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">物品进价<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">销售价格<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">销售数量<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">销售额<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
				<span class="item">剩余数量<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
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