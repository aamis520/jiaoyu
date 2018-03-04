<template>
	<div>
		<div class="compile">
	       <img src="../../../assets/help.png" alt="">
	    </div>
		<div class="box">
			<div class="text">个人信息</div>
			<div class="s_box">
				<span class="item">学历<span class="s_12">(专科  本科  硕士  博士)</span><span class="right"></span></span>
				<span class="item">性别<span class="right"></span></span>
				<span class="item">年龄<span class="right"></span></span>
				<span class="item">婚姻状况<span class="right"></span></span>
				<span class="item">生育状况<span class="right"></span></span>
			</div>
		</div>
		<div class="box">
			<div class="text">聘用信息</div>
			<div class="s_box">
				<span class="item">工龄<span class="right"></span></span>
				<span class="item">职位<span class="right"></span></span>
				<span class="item">岗位性质<span class="s_12">(正式  试用)</span><span class="right"></span></span>
				<span class="item">教师类型<span class="s_12">(专职  兼职  实习  培训)</span><span class="right"></span></span>
			</div>
		</div>
		<div class="box">
			<div class="text">教学信息</div>
			<div class="s_box">
				<span class="item">教师级别<span class="right"></span></span>
				<span class="item">教龄<span class="right"></span></span>
				<span class="item">授课模式<span class="s_12">(班级  对一  对N)</span><span class="right"></span></span>
				<span class="item">所授课程<span class="right"></span></span>
			</div>
		</div>
		<div class="box">
			<div class="text">薪酬计算</div>
			<div class="s_box">
				<el-radio class="radio" v-model="radio" :label="1">每月一日至月底</el-radio>
				<el-radio class="radio" v-model="radio" :label="2">每月 <input type="text"/> 日至下月 <input type="text"/> 日</el-radio>
			</div>
		</div>
		<div class="box">
			<div class="text">薪酬组成</div>
			<div class="s_box">
				<span class="s_block">
					<span class="b1">工资底薪</span>
					<span class="iconfont icon-2 b2"></span>
					<span class="iconfont icon-shezhi b3"></span>					
				</span>
				<span class="s_block">
					<span class="b1">学历津贴</span>
					<span class="iconfont icon-2 b2"></span>
					<span class="iconfont icon-shezhi b3"></span>					
				</span>
				<span class="s_block">
					<span class="b1">加班津贴</span>
					<span class="iconfont icon-2 b2"></span>
					<span class="iconfont icon-shezhi b3"></span>					
				</span>
				<span class="s_block">
					<input type="text" class="ipt"/>
				</span>
			</div>
		</div>
		<div class="box">
			<div class="text">薪酬扣减·设置</div>
			<div class="s_box">
				<span class="s_block">
					<span class="b1">迟到</span>
					<span class="iconfont icon-2 b2"></span>
					<span class="iconfont icon-shezhi b3"></span>					
				</span>
				<span class="s_block">
					<span class="b1">旷工</span>
					<span class="iconfont icon-2 b2"></span>
					<span class="iconfont icon-shezhi b3"></span>					
				</span>
				<span class="s_block">
					<span class="b1">家长投诉</span>
					<span class="iconfont icon-2 b2"></span>
					<span class="iconfont icon-shezhi b3"></span>					
				</span>
				<span class="s_block">
					<input type="text" class="ipt"/>
				</span>
			</div>
		</div>
		<div class="box2">
			<span>
				备    &nbsp; &nbsp;   注： &nbsp; &nbsp; &nbsp;     设置完成之后请点击右侧的   " <span class="iconfont icon-dui right-s"></span> "  进行保存
			</span>
			<span class="iconfont icon-dui right"></span>
		</div>
	</div>
</template>

<script>
	import qs from 'qs';
	export default { 
	    data () {
	      return {
	        radio: 1
	      }
	    },
	    mounted:function(){
			$(".s_box").on('click','.item',function(){
				if($(this).hasClass("bg")){
					$(this).removeClass("bg");
				}else{
					$(this).addClass("bg");
				}
			});
			
			this.axios.post("/api/api-finance/v1/finance/salary/saveSalaryRelation?id=1&accessToken=aaa",
				{
					"PersonalInfo":{
						"en_name":"tyf",
						"ch_name":"啦啦啦",
						"status":"disable"
					},
					"EmployInfo":{
						"en_name":"emmm",
						"ch_name":"嗯嗯嗯",
						"status":"enable"
					},
					"TeachingInfo":{
						"id":"1",
						"en_name":"biu",
						"ch_name":"啊啊啊"
					},
					"SalaryCount":{
						"en_name":"hello",
						"ch_name":"苹果",
						"status":"enable"
					},
					"SalaryComp":{
						"en_name":"world",
						"ch_name":"香蕉",
						"status":"disable"
					},
					"SalaryDeduct":{
						"en_name":"world",
						"ch_name":"芒果",
						"status":"disable"
					},
					"head_school_id":"1"
				}
//				{
//				    "personal_info": [
//				        "遆毅凡",
//				        "tyf",
//				        "disable"
//				    ],
//				    "employ_info": [
//				        "啦啦啦",
//				        "lalala",
//				        "enable"
//				    ],
//				    "teaching_info": [
//				        "啊啊啊",
//				        "aaa"
//				    ],
//				    "salary_count": [
//				        "啦啦啦",
//				        "lalalal",
//				        "enable"
//				    ],
//				    "salary_component": [
//				        "嗯嗯嗯",
//				        "enen",
//				        "元",
//				        "disable"
//				    ],
//				    "salary_deduct": [
//				        "飞机",
//				        "plan",
//				        "disable"
//				    ],
//				    "head_school_id": "1"
//				}
			).then((res)=>{
				this.data=res.data;
				console.log("新增修改薪资关联",this.data);
			})
			
		}	    
	  }
</script>

<style scoped lang="less">
.compile{
    position: absolute;
    right: 30px;
    top: -45px;
    cursor: pointer;
  }
	.box{
			padding: 0 30px;
			margin-bottom: 12px;
			background: #fff;
			border-radius: 4px;
			.text{
				height: 50px;
				color: #5ACE96;
				line-height: 50px;
			    margin: 0 auto;
				border-bottom: 1px dashed #eee;
			}
			.s_box{
				padding: 30px 0;
				.s_block{
					display: inline-block;
					width: 164px;
					margin-right: 30px;
					.b1{
						display: inline-block;
						width: 102px;
						height: 24px;
						line-height: 24px;
						text-align: center;
						background: #F2F5F8;
						border-radius: 12px;
					}	
					.b2{
						font-size: 20px;
						color: #acacac;
						vertical-align: middle;
						margin: 0 4px;
					}
					.b3{
						font-size: 20px;
						color: #31C27C;
						vertical-align: middle;
					}
					.ipt{
						width: 102px;
						text-align: left;
					}
				}
			}
			.item{
				line-height: 20px;
				display: inline-block;
				cursor: pointer;
				margin-right: 36px;
				.right{
					width: 20px;
					display: inline-block;
					margin-left: 5px;
					img{
						display: none;
						vertical-align: middle;						
					}
				}
				.s_12{
					font-size: 12px;
					color: #696969;
				}			
			}
			.el-radio{
				margin-right: 98px;
			}
			input{
				width: 38px;
				border: none;
				border-bottom: 1px solid #31C27C;
				outline: none;
				text-align: center;
			}
		}
		.box2{
			height: 56px;
			line-height: 56px;
			background: white;
			border-radius: 4px;
			color: #5ACE96;
			padding: 0 30px;
			margin-bottom: 12px;
		}
		.bg{
			background-image: url(../../../assets/duiHao.jpg);
			background-repeat: no-repeat;
			background-position: right;
		}
</style>