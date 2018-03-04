<template>
	<div class="hetongs">
		<p class="topx">合同模板</p>	
		<div class="conx">
			<div class="hetong">
				<p><img src="../../assets/add1.png" alt="">新建合同</p>
			</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style lang="less" scoped>
	.hetongs{
		width: 1008px;
		background: #fff;
		border-radius: 5px;
		padding:0 30px;
		cursor: pointer;
		.topx{
			width: 100%;
			height: 100px;
			line-height: 100px;
			color: #31c27c;
		}
		.conx{
			height: 550px;
			.hetong{
				width: 204px;
				height: 300px;
				line-height: 300px;
				text-align: center;
				border:1px solid #31c27c;
				background: #efefef;
				p{
					color: #31c27c;
				}
				img{
					width: 25px;
					height: 25px;
					vertical-align: middle;
					margin-right: 3px;
				}
			}
		}
	}
</style>