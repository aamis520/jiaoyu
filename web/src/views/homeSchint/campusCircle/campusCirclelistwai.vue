<template>
	<ul class="pinglun_list">
		<li class="pinglun_list_wai" v-for="(ele,index) in listarr" :key="index">
			<div class="pinglun_list_wai_div">
				<img :src="ele.listImg" alt="" />
				<section>
					<div class="list_one">
						<p>{{ele.account.full_name}} :</p>
						<span>{{ele.content}}</span>
					</div>
					<div class="list_two">
						<p>{{ele.createTime}}</p>
						<div>
							<span @click="removuWai(ele , index)">删除</span>
							<span>点赞({{ele.like_count}})</span>
							<span @click="pinglun(ele,index)">评论({{ele.comment_count}})</span>
						</div>
					</div>
				</section>
			</div>
			<ul v-if="ele.childrenList.length > 0">
				<li v-for="(ele2,index2) in ele.childrenList" :key="index2" v-if="ele.listShow">
					<div>
						<span><b>{{ele2.createUserName}}</b> 回复 <b>{{ele2.talkToName}} :</b></span>
						<p>{{ele2.talkContent}}</p>
					</div>
					<div class="remeove_list" @click="removeLi(ele2 , index , index2)">删除</div>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
	export default {
		props: {
			childrenList: {},
			listIndex: {}
		},
		computed: {
			listarr() {
				return this.childrenList
			},
			listarrIndex() {
				return this.listIndex
			}
		},
		data() {
			return {}
		},
		methods: {
			pinglun(ele, index) {
				ele.listShow = !ele.listShow
				let obj = {
					index,
					parentIndex: this.listarrIndex,
					id: ele.momentCommentId
				}
				this.$store.dispatch('getHuiFu', obj)
			},

			//里层删除
			removeLi(ele, parentindex, index) {
				let obj = {
					index,
					parentIndex: parentindex,
					ppaarrIndex: this.listarrIndex,
					id: ele.momentCommentId
				}
				this.$store.dispatch('removeLi', obj)
			},

			removuWai(ele, index) {
				let obj = {
					index: this.listarrIndex,
					id: ele.momentId,
					id2: ele.momentCommentId
				}
				this.$store.dispatch('removeWai', obj)
			}
		},
		mounted() {}
	}
</script>

<style scoped="scoped" lang="less">
	@color : #31C17B;
	.pinglun_list {
		.pinglun_list_wai {
			padding: 10px 0;
			border-top: 1px dotted #ccc;
			.pinglun_list_wai_div {
				display: flex;
				padding-bottom: 14px;
				img {
					width: 24px;
					height: 24px;
					border-radius: 50%;
				}
				section {
					margin-left: 16px;
					width: 550px;
					.list_one {
						display: flex;
						p {
							color: @color;
							margin-right: 10px;
							white-space: nowrap;
						}
					}
					.list_two {
						display: flex;
						justify-content: space-between;
						margin-top: 14px;
						p,
						div {
							color: #999;
						}
						div {
							span {
								cursor: pointer;
								margin: 0 10px;
							}
						}
					}
				}
			}
			ul {
				width: 100%;
				li {
					display: flex;
					justify-content: space-between;
					div {
						display: flex;
						span {
							white-space: nowrap;
							b {
								color: @color;
							}
							margin-right:14px;
						}
					}
					.remeove_list {
						white-space: nowrap;
						margin-left: 20px;
						color: #999;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>