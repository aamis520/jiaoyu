<style lang="less">
	.threeDate {
		margin-left: -30px;
		color: #000000;
		li {
			display: flex;
			padding-top: 5px;
			.replayDate {
				span{
					color: #31C27C;
				}
			    flex: 1;
			}
			.replayDateDel {
				color: #999999;
				font-size: 12px;
				width: 70px;
				span{
					padding: 0 5px;
					cursor: pointer;
				}
			}
		}
	}	
</style>
<template>
	<div id="three_leave_Comment">
		<ul class="threeDate">
			<li v-for="(ele,index) in threeLeaveSub" :id="ele.schoolTopicShareCommentTalkId">
				<div class="replayDate">
					<span>{{ele.talkToAccount ? ele.talkToAccount : "默认回复人"}}</span> 回复 <span>{{ele.talkTo ? ele.talkTo:"默认发表人"}} </span>{{ele.talkContent}}
				</div>
				<div class="replayDateDel">
					<span @click.stop.prevent="delThreeLeave(ele)">删除</span>
					<span>回复</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import cont from '@commonJS/const'
	import {mapState} from 'vuex'
	export default{
		props:{
			threeLeaveSub:'',//接受父组件传递过来的一级评论
			pparentIndex:{},//第一层索引
		},
		data(){
			return{
				
			}
		},
		computed:{
        	...mapState({
        		oneList:state => state.schoolTopic.oneLevelComment
        	})
        },
		mounted(){
		},
		components:{
		},
		methods:{
			delThreeLeave(ele){
				//获取父级的索引
				let pIndex = '';
				this.oneList[this.pparentIndex].childrenList.map((item,index)=>{
					if (item.schoolTopicShareCommentId == ele.schoolTopicShareCommentId) {
						pIndex = index
					}
				})
				let obj = {
					delId:ele.schoolTopicShareCommentTalkId,//要删除的元素ID
					ppIndex:this.pparentIndex,//删除元素爷爷的索引
					parentIndex:pIndex,//删除元素父级的索引
					parentId:ele.schoolTopicShareCommentId//删除元素父级ID
				}
				this.$store.dispatch('delThreeLeaveComment',obj)
			}
		}
	}
</script>

