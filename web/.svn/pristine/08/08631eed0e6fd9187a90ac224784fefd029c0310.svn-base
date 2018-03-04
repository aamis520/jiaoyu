<template>
	<!--角色确定-->
	<div class="sure" v-if="closePanelBoolean">
		<div class="fixed">
			<div class="top">
				角色确定
				<span class="close" @click.stop.prevent="closePanel()"><img src="../../../assets/images/litclose_normal.png"></span>
			</div>
			<show-info></show-info>
			<div class="article">
				<p>
					<router-link active-class="act1" :to="{path:'/accountNumber/creatAccount/headquarters'}">总部</router-link>
					<router-link active-class="act1" :to="{path:'/accountNumber/creatAccount/area'}">地区</router-link>
					<router-link active-class="act1" :to="{path:'/accountNumber/creatAccount/scampus'}">校区</router-link>
				</p>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import showInfo from './DefiningRolesChooseShow'
	export default {
		data() {
			return {
				saveDate:[],//存储原始数据
				closePanelBoolean:true,//关闭弹出层
			}
		},
		mounted() {
			this.$store.state.addAccount.showChoose.map((ele,index)=>{
				this.saveDate.push(ele)
			})
		},
		methods:{
			closePanel(){
				this.closePanelBoolean = false;
				this.$store.commit("SET_CHOOSE",this.saveDate)
				eventBus.$emit("huixianCreatAccount",this.saveDate)
			}
		},
		components:{
			'show-info':showInfo
		}
	}
</script>

<style lang="less" scoped>
	.sure {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		font-size: 14px;
		z-index: 20;
		background: rgba(0, 0, 0, 0.5);
		.fixed {
			width: 750px;
			height: 720px;
			position: fixed;
			top: 50%;
			left: 50%;
			margin-left: -375px;
			margin-top: -360px;
			background: #fff;
			border-radius: 5px;
			overflow-y: scroll;
			.top {
				width: 100%;
				height: 60px;
				line-height: 60px;
				position: relative;
				text-align: center;
				background: #eff3f5;
				border-radius: 5px;
				font-size: 16px;
				span {
					color: #000;
					background: #eff3f5;
				}
				.close {
					position: absolute;
					right: 10px;
					font-size: 30px;
					top: -2px;
					cursor: pointer;
				}
			}
			.article {
				padding: 20px 40px 30px;
				p {
					a {
						display: inline-block;
						width: 65px;
						height: 24px;
						text-align: center;
						line-height: 24px;
						border-radius: 18px;
						text-decoration: none;
						background: #f2f5f8;
						margin: 0 5px;
						color: #000;
					}
					.act1 {
						background: #31c27c;
						color: white;
					}
					span {
						display: inline-block;
						width: 260px;
						height: 30px;
						line-height: 30px;
						position: relative;
						margin-left: 70px;
						border: 1px solid #f2f5f8;
						border-radius: 25px;
						padding-left: 10px;
						input {
							width: 87%;
							border: none;
							outline: none;
						}
						img {
							position: absolute;
							right: 10px;
							top: 8px;
						}
					}
				}
			}
		}
	}
	
	::-webkit-scrollbar-track-piece {
		background-color: rgba(0, 0, 0, 0);
		-webkit-border-radius: 0
	}
	
	::-webkit-scrollbar {
		width: 6px;
		height: 8px
	}
	
	::-webkit-scrollbar-thumb {
		height: 50px;
		background-color: #DDDFE0;
		-webkit-border-radius: 4px
	}
	
	::-webkit-scrollbar-thumb:hover {
		height: 50px;
		background-color: rgba(0, 0, 0, 0.2);
		-webkit-border-radius: 4px
	}
</style>