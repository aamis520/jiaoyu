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
	    display: block;
	    width: 40px;
	    height: 40px;
	    border-radius: 50%;
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
		height: 50px;
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
				background-image: url(../../assets/interconnect/topicDetial01.png);
				background-repeat: no-repeat;
			}
			.crBg02{
				background-image: url(../../assets/interconnect/topicDetial02.png);
				background-repeat: no-repeat;
			}
			.crBg03{
				background-image: url(../../assets/interconnect/topicDetial03.png);
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
                <img v-bind:src="ele.account.image" alt=""/>
            </div>
            <div class="contentLeft01">
                <div class="cTitle">{{ele.account.full_name}}<span class="time01">{{ele.createTime}}</span>
                </div>
                <div class="cContent">{{ele.content}}</div>
                <div class="cImg">
                	<div v-for="img in ele.imageUrls"><img :src="img" /></div>
                </div>
                <div class="cOperation">
                    <span class="del" @click.stop.prevent="deleteSchoolTopic()">删除</span>
                    <div class="cOperation_right">
                    	<span class="crBg01">{{ele.likeCount}}</span>
                    	<span class="crBg02" @click.stop.prevent="getTwoLevelComment(ele.schoolTopicShareId)">{{ele.commentCount}}</span>
                    	<span class="crBg03">{{ele.collectCount}}</span>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	import cont from '../../common/const'
	import twoLeave from './campusTopicCommentTwoLeave'
	export default{
		props:{
			oneLevelComment:'',//接受父组件传递过来的一级评论
		},
		data(){
			return{
				nowEditCol:-1,//当前处于编辑状态的行
				twoLeaveDate:[],//存储二级评论数据
			}
		},
		mounted(){
			
		},
		components:{
			'two_leave':twoLeave
		},
		methods:{
			getTwoLevelComment(id){
				let url = cont.interconnection + 'v1/schoolTopic/findSchoolTopicShareCommentList?accessToken=aaaa&schoolTopicShareId=' + id
                this.axios.post(url).then((showRes) => {
                	if (showRes.data.messages.data) {
                		this.twoLeaveDate = showRes.data.messages.data
                	} else{
                		this.twoLeaveDate = []
                	}
                }).catch(function (error) {
                    console.log(error)
                })
			}
		}
	}
</script>

