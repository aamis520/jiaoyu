<template>
	<div class="kucun">
		<div class="kucun-param"><span>出库参数选择</span></div>
		<div class="kucun-detail">
			<ul>
			<li><el-checkbox ></el-checkbox><span>≤ </span><span>______天</span></li>
			<li><el-checkbox ></el-checkbox><span>______</span><span>天 < 天数</span><span> ______天</span>
			<img src="../../../assets/add5.png"></li>
			<li><el-checkbox ></el-checkbox><span> ≥ </span><span>______天</span><img src="../../../assets/confirm_normal.png" style="margin-left: 20px;" @click="closeModal"></li>
			</ul>
		</div>
		<div class="bottom"><el-checkbox ></el-checkbox><span>______</span><span>件 < 物品</span><span>≤ ______件</span>
			<img src="../../../assets/add5.png"></div>
	</div>
</template>
<script type="text/javascript">
 export default{
 	data(){
 		return {}
 	},
 	methods:{
 		closeModal(){
 			this.$emit('closeModal')
 		}
 	}
 }
</script>
<style lang="less" scoped>

 .kucun{
 	width: 500px;
 	height: 150px;
    background-color:rgba(0,0,0,0.5);
 	border-radius: 6px;
 	.kucun-param{
 		padding: 20px;
 		font-size: 12px;
 		color: #fff;
 	}
 	.kucun-detail{
 		ul{
 			display: flex;
 			justify-content: space-around;
 			align-items: center;
 			li{
 				display: flex;
 				align-items: center;
 				img{
 					width: 18px;
 					height: 18px;
 					margin: 0 10px;
 				}
 				span{
 					font-size: 12px;
 					color: #fff;
 				}
 			}
 		}
 	}
 	.bottom{
 		display: flex;
 		 margin-top: 40px;
 	     margin-left: 144px;
 	     align-items: center;
 		img{
 			width: 18px;
 			height: 18px;
 			margin-left: 6px;
 		}
 		span{
 			color:#fff;
 		     font-size:13px;}
 	}
 }

</style>