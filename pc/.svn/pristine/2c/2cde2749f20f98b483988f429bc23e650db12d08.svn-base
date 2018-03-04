<template> 
	<div class="B"> 
		<section>
			<router-link active-class="act" :to="{path:'a' }" tag="li" class="li">2.1.0</router-link>
			<router-link active-class="act" :to="{path:'b' }" tag="li" class="li">2.2.0</router-link>
		</section>
		<router-view class="rot1"></router-view>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
	.B{
		display: flex; 
		width: 100%;
		height: 600px;
		background: #fff;  
		section{
			.li{
				width: 200px;
				height: 40px;
				background: #ccc;
				text-align: center;
				display: block;
				line-height: 40px;
				font-size: 20px;
				&.act{
					background: red;
				}
			}
		}
		.rot1{
			width: 800px;
			height: 100%;
			background: #00BFFF;
		}
	}

</style>