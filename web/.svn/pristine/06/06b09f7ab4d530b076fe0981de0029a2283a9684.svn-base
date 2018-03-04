<template>
	<form>
		<img src="../../assets/edit.png" class="compile">
		<p class="handle">
			<img src="../../assets/cancel.png" class="cancel">
			<img src="../../assets/confirm_normal.png" class="confirm">
		</p>
		<div class="setting">
			<p class="settingTitle">班级·家长手机端·报名设置</p>
			<div class="consult" id="con1">
				<p>
					<el-radio class="radio" v-model="radio" label="1">可随时报名就读的学校，当前班级进度还剩<input type="text"  maxlength="3" />次时，下期缴费自动开启，在读生或新生家长可随时在自己的手机上报名缴费</el-radio>
				</p>
				<p>
					<el-radio class="radio" v-model="radio" label="2">可随时报名就读的学校，无论当前期的班级进度剩余多少次，在读生或新生家长可随时在自己的手机上报名缴费</el-radio>
				</p>
	  			
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">班级 · 家长手机端·校方手机端·报名设置</p>
			<div class="consult choseDui" id="con2">
				<p>
					<b>家长手机端的报名时间为</b>
					<span class="right">	
							<el-radio class="radio" v-model="radio" label="1">每天24小时可以报名</el-radio>
							<el-radio class="radio" v-model="radio" label="2">
	  					每天
	  					<el-time-select
						    placeholder="开始时间"
						    v-model="startTime"
						    :picker-options="{
						      start: '08:30',
						      step: '00:15',
						      end: '18:30'
						    }">
						</el-time-select>
						<el-time-select
						v-model="endTime"
						placeholder="结束时间"
							:picker-options="{
							  start: '08:30',
							  step: '00:15',
							  end: '18:30',
							  minTime: startTime
							}">
						</el-time-select>
	  				</el-radio>
					</span>
				</p>
				<p>
					<b>教师手机端的报名时间为</b>
					<span class="right">	
						<el-radio class="radio" v-model="radio" label="1">每天24小时可以报名</el-radio>
						<el-radio class="radio" v-model="radio" label="2">
	  					每天
	  					<el-time-select
						    placeholder="开始时间"
						    v-model="startTime"
						    :picker-options="{
						      start: '08:30',
						      step: '00:15',
						      end: '18:30'
						    }">
						</el-time-select>
						<el-time-select
						v-model="endTime"
						placeholder="结束时间"
							:picker-options="{
							  start: '08:30',
							  step: '00:15',
							  end: '18:30',
							  minTime: startTime
							}">
						</el-time-select>
	  				</el-radio>
					</span>
				</p>
				<p class="remark">
					注：一对一课程与一对N课程家长首次报名，只可在教师手机端操作，家长手机端不可操作
				</p> 
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">班级课程·家长手机端·教师手机端·显示内容设置一</p>
			<div class="consult clearfix choseDui" id="con3">
				<p>
					<b>家长手机端上，本班已报人数</b>
					<el-radio class="radio" v-model="radio" label="1">显示</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">不显示</el-radio>
				</p>
				<p>
					<b>本班班容</b>
					<el-radio class="radio" v-model="radio" label="1">显示</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">不显示</el-radio>
				</p>
				<p>
					<b>教师手机端上，本班已报人数</b>
					<el-radio class="radio" v-model="radio" label="1">显示</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">不显示</el-radio>
				</p>
				<p>
					<b>本班班容</b>
					<el-radio class="radio" v-model="radio" label="1">显示</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">不显示</el-radio>
				</p>
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">班级课程·家长手机端·教师手机端·显示内容设置二</p>
			<div class="consult choseDui" id="con4">
				<p>
					<b>本班报名人数达到上限后，家长端将无法报名，并且：</b>
					<span class="right">
						<el-radio class="radio" v-model="radio" label="1">显示 “满班” </el-radio>
						<el-radio class="radio" v-model="radio" label="2">不显示 “满班” </el-radio>
					</span>
				</p>
				<p>
					<b>本班报名人数达到上限后，教师端将无法报名，并且：</b>
					<span class="right">
						<el-radio class="radio" v-model="radio" label="1">显示 “满班” </el-radio>
						<el-radio class="radio" v-model="radio" label="2">不显示 “满班” </el-radio>
					</span>
	  				
				</p>
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">班级课程·家长端手机报名·审批设置</p>
			<div class="consult choseDui" id="con5">
				<p>家长通过手机选课报名，在下列情况下，无需校方审核通过，全额支付后，就算报名成功</p>
				<p>
					<el-radio class="radio" v-model="radio" label="1">新生报新班级</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">新生插报老班级</el-radio>
					<el-radio class="radio" v-model="radio" label="1">在读生续费原班</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">在读生续费同科其他班</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">在读生扩科</el-radio>
					<el-radio class="radio" v-model="radio" label="1">往届生报任何班级</el-radio>
				</p>
				
			</div> 
		</div>
		<div class="setting">
			<p class="settingTitle">家长端报名·选座设置</p>
			<div class="consult choseDui" id="con6">
				<b>如家长报名的班级需要选座位，家长在手机客户端报名成功后</b>
				<span class="right">
					<el-radio class="radio" v-model="radio" label="1">可以选座</el-radio>
  					<el-radio class="radio" v-model="radio" label="2">不可选座</el-radio>
				</span>
			</div>
		</div> 
			<div class="shade">
			<div class="hint">
				<div class="topx">
					提示<img src="../../assets/images/litclose_normal.png" alt="" id="close">
				</div>
				<div class="conx">
					<p><img src="../../assets/images/success.png"></p>
					<center>保存成功 !</center>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
	export default {
		data () {
			return{
				radio: '1',
				startTime: '',
        		endTime: ''
			}
		},
		mounted () {
			$(".consult").on("click", ".icon-shezhi", function () {
				$(this).parent().next(".setmenu").show();
				$(".shade").show();
			});
			$(".consult").on("click", ".icon-dui", function () {
				$(this).parents(".setmenu").hide();
				$(".shade").hide();
			});
			$(".consult").on("click", ".icon-cuo1", function () {
				$(this).parents(".setmenu").hide();
				$(".shade").hide();
			});
			$(".consult").on("click", ".icon-2", function () {
				$(this).parents("li").hide();
			});
			$('#imageForm').submit(function(){
         		$("#imageForm").ajaxSubmit(ajax_option);
         		return false;
     		});
     		$(".compile").click(function(){
     			$(this).hide();
     			$(".handle").show();
     		});
     		$(".handle>img").click(function(){
     			$(".shade").show();
     			$(".hint").show();
     		});
     		$("#close").click(function(){
           		$(".shade").hide();
           		$(".hint").hide();
           	});
		},
		methods:{
		}
	}
</script>

<style lang="less" scoped>
	.shade{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		 background: rgba(0,0,0,0.5);
		 display: none;
		.hint{
			width: 380px;
			height: 240px;
			position: absolute;
			top:50%;
			left: 50%;
			margin-left: -190px;
			margin-top:-120px;
			background: #fff;
			border-radius: 5px;
			display: none;
			.topx{
				width: 100%;
				height: 50px;
				line-height: 50px;
				position: relative;
				text-align:center;
				background: #f2f5f8;
				font-size: 18px;
				border-radius: 5px;
				img{
					position: absolute;
					right: 0;
					top:0;
				}
			}
			.conx{
				padding-top: 50px;
				text-align: center;
				center{
					margin-top: 30px;
				}
			}
		}
	}
	.clearfix:after{
		display: block;
		content: "";
		clear:both;
	}
	.compile, .handle{
		position: absolute;
		right: 20px;
		top: -48px;
		cursor: pointer;
	}
	.handle{
		display: none;
		.cancel{
			margin-right: 12px;
		}
	}
	.setting{
		 // height: 160px;
		background: #ffffff;
		border-radius: 5px;
		margin-bottom: 12px;
		font-size: 14px;
		color: #666666;
		padding:0 20px 20px 20px;
		.consult{
			padding-top: 10px;
		}
		#con1{
			input{
				width: 36px;
				border-bottom: 1px solid #31c27c;
			}
			p{
				height: 35px;
				line-height: 35px;

			}
		}
		#con2{
			p{
				height: 35px;
				line-height: 35px;
				position: relative;
				.right{
					position: absolute;
					right:100px;
				}
			}
			p:nth-child(2){
				border-bottom: 1px dashed #c6c6c6;
			}
			.remark{
				margin-top: 10px;
			}
		}
		#con3{
			p{
				width: 45%;
				float: left;
				height: 35px;
				line-height: 35px;
			}
		}
		#con4{
			p{
				height: 35px;
				line-height: 35px;
				position: relative;
				.right{
					position: absolute;
					right:335px;
				}
			}	
		}
		#con5{
			p{
				height: 35px;
				line-height: 35px;
			}
		}
		#con6{
			.right{
				margin-left: 30px;
			}
		}
	}
	.settingTitle{
		height: 53px;
		line-height: 53px;
		border-bottom: 1px dashed #c6c6c6;
		font-size: 14px;
		color: #31c27c;
	}
/*	.consult li{
		position: relative;
		height: 25px;
		width: 100px;
		float: left;
	}
	.consult li i{
		background: url(../../assets/duiHao.jpg) no-repeat;
		background-size: 100%;
		display: inline-block;
		width: 16px;
		height: 17px;
		position: absolute;
		left: 48%;
		top: 30%;
		display: none;
	}
	.consult .lastDuihao{
		left: 63%;
	}
	.settingTitle b{
		float: left;
	}
	.settingTitle span{
		float: right;
	}
	.seticon{
		position: absolute;
		left: 48%;
		top: 35%;
	}
	.fourseticon{
		left: 38%;
	}
	.icon-shezhi, .icon-2{
		font-weight: bold;
		font-size: 13px;
	}
	.icon-shezhi, .parents{
		color: #31c27c;
	}
	.icon-cuo1{
		position: absolute;
    	right: 4%;
    	font-size: 27px;
	}
	.icon-2{
		color: #9f9f9f;
	}
	.consult .setmenu{
		width: 586px;
		height: 96px;
		background-color: rgba(0,0,0,.7);
		border-radius: 3px;
		padding: 0 22px;
		color: #fff;
		font-size: 14px;
		font-weight: normal;
		position: absolute;
		z-index: 5;
		left: 32%;
		display: none;
	}
	.icon-dui{
		color: #31c27c;
		font-size: 27px;
		margin-top: 10px;
		display: inline-block;
		vertical-align: bottom;
	}
	.iconyes{
		font-size: 16px;
		vertical-align: middle;
		margin-top: 2px;
		font-weight: bold;
	}
	.consult .setmenu::before{
		display: block;
		border: solid transparent;
		border-width: 8px;
		border-bottom-color: rgba(0,0,0,.7);
		height: 0;
		width: 0;
		content: "";
		position: absolute;
		left: 6.3%;
		top: -16px;
	}
	.setmenu p{
		margin: 20px 0 5px 0;
	}
	.user-oneself .oneself{
		border-bottom: 1px solid #a1a3a2;
		width: 14%;
		height: 41px;
		margin-right: 23px;
	}
	.oneself-X{
		position: absolute;
		left: 57%;
		top: 35%;
	}
	.parents span{
		width: 122px;
		display: inline-block;
	}
	.message{
		margin-top: 26px;
	}
	.consult .message-end{
		width: 33%;
	}
	.consult .message-same{
		width: 50%;
	}
	.consult .class-course{
		height: 40px;
		line-height: 40px;
	}
	.class-course b{
		width: 229px;
		display: inline-block;
	}
	.class-course span{
		width: 18px;
		height: 18px;
	}
	.big,.samll{
		border-radius: 50%;
		display: inline-block;
	}
	.class-course .big{
		background: #31c27c;
		text-align: center;
		line-height: 15px;
		margin-right: 10px;
		vertical-align: middle;
	}
	.class-course .big .small{
		background-color: #ffffff;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		display: inline-block;
	}
	.content{
		margin-right: 39px;
	}*/
</style>