<template>
	<div class="add_yader">
		<div class="center_div">
			<h1>年级</h1>
			<div class="listyear">
				<span v-for="(ele,index) in list" :key="index" :class="{active : ele.show == true}" @click="spanClick(index)">{{ele.name}}</span>
			</div>
			<img src="../../../images/common-icon/duigou.png" alt="" @click="ok" />
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			list : {},
			close: {}
		},
		methods: {
			spanClick(index){  
				this.$store.commit('SET_ONONESETTINGSCLASSAGE',index)
			},
			ok(){
				this.$emit("close")
			}
		},
		mounted() { 
		}
	}
</script>

<style scoped="scoped" lang="less">
@color : #31C27C;
	.add_yader {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.6);
		z-index: 100;
		.center_div{
			width: 320px;
			padding:20px 30px;
			box-sizing: border-box;
			position: absolute;
			left: 50%;
			transform: translateX(-50%); 
			top: 50%;
			transform: translateY(-50%);
			border-radius: 6px;
			background: #fff;
			h1{
				margin: 0 auto ;
				text-align: center;
				color: @color;
				margin-bottom: 20px;
			}
			img{
				display: block;
				margin: 0 auto;
				cursor: pointer;
			}
			.listyear{
				display: flex;
				flex-wrap: wrap;
				span{
					padding: 2px 18px;
					background: #F2F5F8;
					color: #666;
					margin: 10px;
					margin-bottom: 20px;
					border: 1px solid #DEDEDE;
					border-radius: 16px;
					cursor: pointer;
					&.active{
						border: 1px solid @color;
						color: @color;
					}
				}
			}
		}
	}
</style>