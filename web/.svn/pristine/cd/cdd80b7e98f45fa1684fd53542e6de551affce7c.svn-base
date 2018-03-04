<style lang="less">
	.contentBlock{
	    width: 100%;
	    overflow: hidden;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    min-height: 124px;
	    background-color: #fff;
	    padding: 25px 26px;
	    display: flex;
	    padding-bottom: 0px;
	    border-bottom: 5px solid #f7f8fc;
	}
	.contentBlock:last-child{
		padding-bottom: 25px;
		border: none;
		border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        margin-bottom: 100px;
	}
	.contentRight01{
	    width: 50px;
	}
	.contentRight01 img{
	    width: 40px;
	    height: 40px;
	    border-radius: 100%;
	}
	.contentLeft01{
	    flex: 1;
	    padding-right: 10px;
	}
	.contentLeft01 .cTitle{
	    font-size: 16px;
	    margin: 10px 0;
	}
	.contentLeft01 .cContent{
	    font-size: 14px;
	    margin-bottom: 15px;
	}
	.time01{
	    color: #bbbbbb;
	    margin-left: 10px;
	}
	.cTitle{
	    font-size: 14px;
	    margin-bottom: 8px;
	}
	.contentLeft01 .del{
	    color: #59ce97;
	    margin-right: 20px;
	    font-size: 14px;
	    cursor: pointer;
	}
	.cOperation{
		line-height: 50px;
		.cOperation_right{
			float: right;
			height: 50px;
			line-height: 50px;
			span{
				padding: 10px;
				padding-left: 35px;
				color: #999999;
				font-size: 16px;
				cursor: pointer;
			    background-position: 0px 2px;
			}
			.crBg01{
				background-image: url(../../../assets/interconnect/topicDetial01.png);
				background-repeat: no-repeat;
			}
			.crBg02{
				background-image: url(../../../assets/interconnect/topicDetial02.png);
				background-repeat: no-repeat;
			}
			.crBg03{
				background-image: url(../../../assets/interconnect/topicDetial03.png);
				background-repeat: no-repeat;
			}
		}
	}
	.cImg{
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		padding-bottom: 18px;
		border-bottom: 1px solid #f3f3f3;
		div{
			width: 80px;
			height: 80px;
			margin-right: 5px;
			float: left;
			img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
<template>
	<div id="topicComment">
        <div class="contentBlock" v-for="(ele,index) in oneLevelComment" :key="index" :id="ele.schoolTopicShareId">
            <div class="contentRight01">
                <img :src="ele.account ? ele.account.image : nosure_big" alt=""/>
            </div>
            <div class="contentLeft01">
                <div class="cTitle"><span v-if="ele.account">{{ele.account.full_name}}</span><span class="time01">{{ele.createTime}}</span>
                </div>
                <div class="cContent">{{ele.content}}</div>
                <div class="cImg">
                	<div v-for="img in ele.imageUrls"><img :src="img" /></div>
                </div>
                <div class="cOperation">
                    <span class="del" @click.stop.prevent="deleteSchoolTopicShare(ele,index)">删除</span>
                    <div class="cOperation_right">
                    	<span class="crBg01">{{ele.likeCount}}</span>
                    	<span class="crBg02" onselectstart="return false"  @click.stop.prevent="getTwoLevelComment(ele,index)">{{ele.commentCount}}</span>
                    	<span class="crBg03">{{ele.collectCount}}</span>
                    </div>
                </div>
                <one-leave v-if="ele.toggleShow" :twoLeaveSub="ele.childrenList" :listIndex="index"></one-leave>
            </div>
        </div>
	</div>
</template>

<script>
	import cont from '../../../common/const'
	import oneLeave from './campusTopicCommentTwoLeave'
	import {mapState} from 'vuex'
	export default{
		props:{
			oneLevelComment:{},//接受父组件传递过来的一级评论
		},
		data(){
			return{
				nowEditCol:-1,//当前处于编辑状态的行
				twoLeaveDate:[],//存储二级评论数据
				nosure_big:require('../../../assets/interconnect/nosure_big.png'),//默认大头像小头像
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
			'one-leave':oneLeave
		},
		methods:{
			//获取二级评论
			getTwoLevelComment(ele,index){
				ele.toggleShow = !ele.toggleShow
				let obj = {
					index:index,
					id: ele.schoolTopicShareId
				}
				this.$store.dispatch('getSchoolTopicTwoLeaveComment',obj)
			},
			//删除一级评论
			deleteSchoolTopicShare(ele) {
                let obj = {
                	parentId:ele.schoolTopicId,//父级ID
                	delId:ele.schoolTopicShareId//要删除的ID
                }
                this.$confirm('您确定要删除吗？','提示',{
                	confirmButtonText:'确定',
                	cancelButtonText:'取消',
                	type:'warning'
                }).then(()=>{
                	this.$store.dispatch('delOneLeaveComment',obj)
                }).catch(()=>{
                	
                })
            }
		}
	}
	
</script>

