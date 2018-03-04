<template>
	<div>
		<div class="pinglun" v-for="(ele,index) in list" :key="index">
			<div class="img_left">
				<img v-if="ele.account" :src="ele.account.image" alt="" />
			</div>
			<div class="img_right">
				<div class="header">
					<b v-if="ele.account">{{ele.account.full_name}}</b>
					<div v-if="ele.userType == 'teacher'">教师</div>
					<div v-if="ele.userType == 'parent'" class="green">家长</div>
					<span>{{ele.createTime}}</span>
				</div>

				<div class="pinglun_body">
					<p>{{ele.content}}</p>
					<section>
						<img v-for="(value,index2) in ele.imageUrls" :src="value" alt="" :key="index2" />
					</section>
				</div>

				<div class="pinglun_footer">
					<div @click="removeFen(ele)">删除</div>
					<section>
						<span>
	        			<img src="../../../images/home-schint/dianzan.png" alt="" />
	        			{{ele.like_count}}
	        		</span>
						<span @click="pinglun(ele,index)">
	        			<img src="../../../images/home-schint/pingluln.gif" alt="" />
	        			{{ele.comment_count}}
	        		</span>
						<span>
	        			<img src="../../../images/home-schint/shoucang.png" alt="" />
	        			{{ele.favorite_count}}
	        		</span>
					</section>
				</div>
				<v-list v-if="ele.listdeom" :childrenList="ele.childrenList" :listIndex="index"></v-list>
			</div>
		</div>
	</div>
</template>

<script>
	import listdemo from './campusCirclelistwai'
	import { mapState } from 'vuex'
	export default {
		data() {
			return {}
		},
		components: {
			'v-list': listdemo
		},
		computed: {
			...mapState({
				list: state => state.CampusCircle.quanList
			})
		},
		methods: {
			//评论=》下标跟当前id
			pinglun(ele, index) {
				ele.listdeom = !ele.listdeom
				let obj = {
					index,
					id: ele.momentId
				}
				this.$store.dispatch('getPingLun', obj)
			},

			//删除分享
			removeFen(ele) {
				this.$store.dispatch('removeFenxiang', ele.momentId)
			}
		},
		mounted() {
			this.$store.dispatch("getZongInit", {
				id: "",
				type: ""
			})
		}
	}
</script>

<style scoped lang="less">
	@color : #31C17B;
	.pinglun {
		width: 100%;
		padding: 16px 24px 0 24px;
		background: #fff;
		border-radius: 6px;
		display: flex;
		margin-top: 14px;
		.img_left {
			width: 50px;
			img {
				width: 34px;
				height: 34px;
				border-radius: 50%;
			}
		}
		.img_right {
			width: 590px;
			.header {
				display: flex;
				height: 34px;
				align-items: center;
				b {
					font-size: 16px;
				}
				span {
					font-size: 14px;
					color: #ccc;
					margin-left: 14px;
				}
				div {
					&.green {
						background: @color;
					}
					border-radius: 2px;
					padding: 0 4px;
					background: #2E9FFF;
					color: #fff;
					margin-left: 14px;
				}
			}
			.pinglun_body {
				padding-bottom: 20px;
				width: 100%;
				border-bottom: 1px dotted #CCCCCC;
				p {
					margin-top: 8px;
				}
				section {
					margin-top: 20px;
					img {
						width: 80px;
						height: 80px;
						margin-right: 10px;
					}
				}
			}
			.pinglun_footer {
				width: 100%;
				height: 58px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				div {
					color: @color;
					cursor: pointer;
				}
				section {
					span {
						margin: 0 6px;
						color: #666;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>