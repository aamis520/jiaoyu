<style lang="less">
	ul.twoLeave {
		line-height: 1.5;
		li.twoLeaveblock {
			display: flex;
			padding:5px 0;
			.tLeaveLeft {
				width: 30px;
				img {
					width: 25px;
					height: 25px;
					border-radius: 100%;
				}
			}
			.tLeaveRight {
				flex: 1;
				.tLeaveRightTop {
					color: #000;
					margin-bottom: 5px;
					font-size: 14px;
					span {
						color: #31c27c;
					}
				}
				.tLeaveRightBottom {
					color: #999;
					font-size: 12px;
					.tLRBottomOperation {
					    float: right;
					    span{
					    	margin: 0 5px;
					    	cursor: pointer;
					    }
					}
				}
			}
		}
	}
</style>
<template>
	<div id="two_leave_Comment">
        <ul class="twoLeave">
        	<li class="twoLeaveblock" v-for="(ele,index) in twoLeaveSub" :id="ele.schoolTopicShareCommentId">
       			<div class="tLeaveLeft">
       				<img :src="ele.createAccountImage ? ele.createAccountImage : nosure_little" alt=""/>
       			</div>
       			<div class="tLeaveRight">
       				<div class="tLeaveRightTop">
       					<span>{{ele.createAccountName}}</span>{{ele.content}}
       				</div>
       				<div class="tLeaveRightBottom">
       					<span class="time">{{dealTime(ele.createTime)}}</span>
       					<div class="tLRBottomOperation">
       						<span class="tLRBO01" @click.stop.prevent="delTwoLeave(ele)">删除aaa</span>
	                    	<span class="tLRBO02">点赞{{ele.likeCount}}</span>
	                    	<span class="tLRBO03" @click.stop.prevent="getThreeLevelComment(ele,index)">评论{{ele.talkCount}}</span>
       					</div>
       				</div>
       				<three-leave v-if="ele.toggleShow" :threeLeaveSub="ele.childrenList" :pparentIndex="listIndex"></three-leave>
       			</div>
       		</li>
       	</ul>
	</div>
</template>

<script>
	import cont from '../../../common/const'
	import threeLeave from './campusTopicCommentThreeLeave'
	export default{
		props:{
			twoLeaveSub:{},//接受父组件传递过来的一级评论
			listIndex:{},//上一级索引
		},
		data(){
			return{
				nosure_little:require('../../../assets/interconnect/nosure_little.png'),
				ppIndex:{}
			}
		},
        computed:{
        	listarrIndex() {//第一层索引
				return this.listIndex
			}
        },
		components:{
			'three-leave':threeLeave
		},
		methods:{
			//处理时间返回14:50类型
			dealTime(time){
				return time.slice(11,16)
			},
			//获取三级评论数据
			getThreeLevelComment(ele,index){
				ele.toggleShow = !ele.toggleShow
				let obj = {
					index:index,
					parentIndex: this.listarrIndex,
					id: ele.schoolTopicShareCommentId
				}
				this.$store.dispatch('getSchoolTopicThreeLeaveComment',obj)
			},
			//删除二级评论数据
			delTwoLeave(ele) {
                let obj = {
					parentIndex: this.listarrIndex,
                	parentId:ele.schoolTopicShareId,//父级ID
                	delId:ele.schoolTopicShareCommentId//要删除的ID
                }
                this.$confirm('您确定要删除吗？','提示',{
                	confirmButtonText:'确定',
                	cancelButtonText:'取消',
                	type:'warning'
                }).then(()=>{
                	this.$store.dispatch('delTwoLeaveComment',obj)
                }).catch(()=>{
                	
                })
            }
		},
	}
</script>

