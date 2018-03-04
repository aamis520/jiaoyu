<template>
	<form>
		<img src="../../assets/edit.png" class="compile">
		<img src="../../assets/images/setting.png" class="settings" id="settings">
		<p class="handle">
			<img src="../../assets/cancel.png" class="cancel">
			<img src="../../assets/confirm_normal.png" class="confirm">
		</p>
		<div class="setting">
			<p class="settingTitle">班级课程报名时段选择</p>
			<div class="consult">
				<p>
					<el-radio class="radio radiostyle" v-model="radio" label="1">家长手机端，随时可以选课报名</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">家长手机端，在固定的时间段内选课报名（选择本条后，出现第二至第六片）</el-radio>
				</p>
				<p class="remark">
					备注：教师手机端在任何时候都可以选课报名
				</p>
			</div>	
		</div>
 		<div class="setting">
			<p class="settingTitle">开启报名时间段</p>
			<div class="consult">
				<el-checkbox-group v-model="checkList">
					<b>2017</b>
					<el-checkbox label="寒假"></el-checkbox>
					<el-checkbox label="春季"></el-checkbox>
				    <el-checkbox label="暑期"></el-checkbox>
					<el-checkbox label="秋季报名"></el-checkbox>
				</el-checkbox-group>
				<el-checkbox-group v-model="checkList">
					<b class="move">2018</b>
					<el-checkbox label="寒假"></el-checkbox>
					<el-checkbox label="春季"></el-checkbox>
				    <el-checkbox label="暑期"></el-checkbox>
					<el-checkbox label="秋季报名"></el-checkbox>
				</el-checkbox-group>
				<el-checkbox-group v-model="checkList">
					<b>2019</b>
					<el-checkbox label="寒假"></el-checkbox>
					<el-checkbox label="春季"></el-checkbox>
				    <el-checkbox label="暑期"></el-checkbox>
					<el-checkbox label="秋季报名"></el-checkbox>
				</el-checkbox-group>
				<el-checkbox-group v-model="checkList">
					<b class="move">2020</b>
					<el-checkbox label="寒假"></el-checkbox>
					<el-checkbox label="春季"></el-checkbox>
				    <el-checkbox label="暑期"></el-checkbox>
					<el-checkbox label="秋季报名"></el-checkbox>
				</el-checkbox-group>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">
				<b>2017暑期报名 · 请根据本校情况填选设置</b>
				<span>往届生按新生对待</span>
			</p>
			<div class="consult choseDui">
				<div class="apply-set">
					<div class="block">
					    <el-date-picker
					      v-model="value3"
					      type="datetimerange">
					    </el-date-picker>
					</div>
					<span class="stu">接受在读学生</span>
					<span class="lists">
						<el-checkbox-group v-model="checkList">
						<el-checkbox label="续费本班"></el-checkbox>
						<el-checkbox label="续费他班"></el-checkbox>
					    <el-checkbox label="扩科"></el-checkbox>
						<el-checkbox label="转报其他课程"></el-checkbox>
					</el-checkbox-group>
					</span>
					<span class="readingadd">+</span>
				</div>
				<div class="apply-set timeline">
					<div class="block">
					    <el-date-picker
					      v-model="value4"
					      type="datetimerange">
					    </el-date-picker>
					</div>
					<span class="stu">接受</span>
					<span class="lists">
						<el-checkbox-group v-model="checkList">
						<el-checkbox label="新生报名"></el-checkbox>
						<el-checkbox label="在读生报名(续费、扩科、转报其他课程)"></el-checkbox>
					</el-checkbox-group>
					</span>
					
					<span class="readingadd">+</span>
				</div>
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">
				<b>2017秋季报名 · 请根据本校情况填选设置</b>
				<span>往届生按新生对待</span>
			</p>
			<div class="consult choseDui">
				<div class="apply-set">
					<div class="block">
					    <el-date-picker
					      v-model="value3"
					      type="datetimerange">
					    </el-date-picker>
					</div>
					<span class="stu">接受在读学生</span>
					<span class="lists">
						<el-checkbox-group v-model="checkList">
						<el-checkbox label="续费本班"></el-checkbox>
						<el-checkbox label="续费他班"></el-checkbox>
					    <el-checkbox label="扩科"></el-checkbox>
						<el-checkbox label="转报其他课程"></el-checkbox>
					</el-checkbox-group>
					</span>
					<span class="readingadd">+</span>
				</div>
				<div class="apply-set timeline">
					<div class="block">
					    <el-date-picker
					      v-model="value4"
					      type="datetimerange">
					    </el-date-picker>
					</div>
					<span class="stu">接受</span>
					<span class="lists">
						<el-checkbox-group v-model="checkList">
						<el-checkbox label="新生报名"></el-checkbox>
						<el-checkbox label="在读生报名(续费、扩科、转报其他课程)"></el-checkbox>
					</el-checkbox-group>
					</span>
					
					<span class="readingadd">+</span>
				</div>
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">
				<b>2017寒假报名 · 请根据本校情况填选设置</b>
				<span>往届生按新生对待</span>
			</p>
			<div class="consult choseDui">
				<div class="apply-set">
					<div class="block">
					    <el-date-picker
					      v-model="value3"
					      type="datetimerange">
					    </el-date-picker>
					</div>
					<span class="stu">接受在读学生</span>
					<span class="lists">
						<el-checkbox-group v-model="checkList">
						<el-checkbox label="续费本班"></el-checkbox>
						<el-checkbox label="续费他班"></el-checkbox>
					    <el-checkbox label="扩科"></el-checkbox>
						<el-checkbox label="转报其他课程"></el-checkbox>
					</el-checkbox-group>
					</span>
					<span class="readingadd">+</span>
				</div>
				<div class="apply-set timeline">
					<div class="block">
					    <el-date-picker
					      v-model="value4"
					      type="datetimerange">
					    </el-date-picker>
					</div>
					<span class="stu">接受</span>
					<span class="lists">
						<el-checkbox-group v-model="checkList">
						<el-checkbox label="新生报名"></el-checkbox>
						<el-checkbox label="在读生报名(续费、扩科、转报其他课程)"></el-checkbox>
					</el-checkbox-group>
					</span>
					
					<span class="readingadd">+</span>
				</div>
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">
				<b>2018春季报名 · 请根据本校情况填选设置</b>
				<span>往届生按新生对待</span>
			</p>
			<div class="consult choseDui">
				<div class="apply-set">
					<div class="block">
					    <el-date-picker
					      v-model="value3"
					      type="datetimerange">
					    </el-date-picker>
					</div>
					<span class="stu">接受在读学生</span>
					<span class="lists">
						<el-checkbox-group v-model="checkList">
						<el-checkbox label="续费本班"></el-checkbox>
						<el-checkbox label="续费他班"></el-checkbox>
					    <el-checkbox label="扩科"></el-checkbox>
						<el-checkbox label="转报其他课程"></el-checkbox>
					</el-checkbox-group>
					</span>
					<span class="readingadd">+</span>
				</div>
				<div class="apply-set timeline">
					<div class="block">
					    <el-date-picker
					      v-model="value4"
					      type="datetimerange">
					    </el-date-picker>
					</div>
					<span class="stu">接受</span>
					<span class="lists">
						<el-checkbox-group v-model="checkList">
						<el-checkbox label="新生报名"></el-checkbox>
						<el-checkbox label="在读生报名(续费、扩科、转报其他课程)"></el-checkbox>
					</el-checkbox-group>
					</span>
					
					<span class="readingadd">+</span>
				</div>
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
			<div class="hint1">
				<div class="topx">
					特别设置<img src="../../assets/images/litclose_normal.png" alt="" id="close1">
				</div>
				<div class="conx">
					<ul>
						<li>
							注意：绝大多数学校用不着本项设置，请勿轻易操作
						</li>
						<li>
							<span>新生报名</span>
							<span class="right">
								<span>
									<el-radio class="radio" v-model="radio2" label="1">只开通课程报名</el-radio>
								</span>
								<span>
									 <el-radio class="radio" v-model="radio2" label="2">只开通年级课报名</el-radio>
								</span>
							</span>
						</li>
						<li>
							<span>新生报名</span>
							<span class="right">
								<span>
									<el-radio class="radio" v-model="radio2" label="1">只开通课程报名</el-radio>
								</span>
								<span>
									<el-radio class="radio" v-model="radio2" label="2">只开通年级课报名</el-radio>
								</span>
 								
							</span>
						</li>
						<li>
							<span>上列选项与</span>
							<span class="right">
								<el-radio class="radio" v-model="radio2" label="1">秋</el-radio>
 								<el-radio class="radio" v-model="radio2" label="2">寒</el-radio>
 								<el-radio class="radio" v-model="radio2" label="2">春</el-radio>
 								<el-radio class="radio" v-model="radio2" label="2">暑</el-radio>
 								的课程时间标签同步
 							</span>
						</li>
						<li>
							<span>选择校区</span>
							<span class="right">
								<span class="left">
									<el-radio class="radio" v-model="radio2" label="1">全部校区</el-radio>
								</span>
								<span>
									<el-radio class="radio" v-model="radio2" label="2"><input type="text" name="" placeholder="西二旗校区（20）"></el-radio>
								</span>
							</span>
						</li>
						<li>
							<span>选择校区</span>
							<span class="right">
								<span class="left">
									<el-radio class="radio" v-model="radio2" label="1">全部校区</el-radio>
								</span>
								<span>
									<el-radio class="radio" v-model="radio2" label="2"><input type="text" name="" placeholder="西二旗校区（20）"></el-radio>
								</span>
							</span>
						</li>
						<li>
							如您希望将本页已设置的操作清空，请点击
							<a>
								<img src="../../assets/resh.jpg" alt="">重置
							</a>
						</li>	
					</ul>
					<center>
						<button id="sure">确认</button></center>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
	export default {
		data () {
			return{
				radio: '',
				radio2: '',
				checked: false,
				checkList: [],
		        value3: [new Date(), new Date()],
		        value4: ""
			}
		},
		mounted () {
			$('#imageForm').submit(function(){
         		$("#imageForm").ajaxSubmit(ajax_option);
         		return false;
     		});
     		$(".compile").click(function(){
           		$(".compile").hide();
           		$(".handle").show();
           		$("#settings").hide();
           	});
           	$(".readingadd").click(function(){
           		$(".shade").show();
           		$(".hint").show();
           	});
           	$("#close").click(function(){
           		$(".shade").hide();
           		$(".hint").hide();
           	});
           	$("#settings").click(function(){
           		$(".shade").show();
           		$(".hint1").show();
           	})
           	$("#close1").click(function(){
           		$(".shade").hide();
           		$(".hint1").hide();
           	})

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
		z-index: 1;
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
		.hint1{
			width: 750px;
			height: 560px;
			position: absolute;
			top:50%;
			left: 50%;
			margin-left: -375px;
			margin-top:-280px;
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
				padding:0 20px;
				font-size: 14px;
				ul{
					margin-top: -10px;
					li{
						height: 60px;
						line-height: 60px;
						border-bottom: 1px dashed #dedede;
						position: relative;
						.right{
							position: absolute;
							left: 200px;
							.left{
								margin-right: 27px;
							}
							.left1{
								margin-left: 150px;
							}
							input{
								width: 95px;
								border-bottom: 1px solid #31c27c;
								font-size: 12px;
							}
							span:nth-child(2){
								position: absolute;
								right: -180px;
								top:1px;
							}
						}
						a{
							margin-left: 20px;
							color: #0096f5;
							img{
								width: 18px;
								height: 16px;
								vertical-align: middle;
								margin-right: 2px;
							}
						}
					}
					li:nth-child(1){
						color: #b6b6b6;
					}
				}
				#sure{
					width: 176px;
					height: 35px;
					line-height: 35px;
					border-radius: 5px;
					outline: none;
					border: 0;
					text-align: center;
					background: #31c27c;
					color: #fff;
					font-size: 16px;
					margin-top:30px; 
				}
			}
		}
	}
	.compile, .handle{
		position: absolute;
		right: 20px;
		top: -48px;
		cursor: pointer;
	}
	.compile{
		right: 60px;
	}
	.settings{
		position: absolute;
		right: 20px;
		top:-48px;
		cursor: pointer;
	}
	.handle{
		display: none;
		.cancel{
			margin-right: 12px;
		}
	}
	.setting{
		height: 160px;
		background: #ffffff;
		border-radius: 3px;
		margin-bottom: 12px;
		font-size: 14px;
		color: #666666;
		padding: 0 20px;
	}
	.settingTitle{
		height: 53px;
		line-height: 53px;
		border-bottom: 1px dashed #c6c6c6;
		font-size: 14px;
		color: #31c27c;
	}
	.consult{
		div{
			height: 45px;
			line-height: 45px;
			img{
				vertical-align: middle;
			}
		}
	}
	.settingTitle b{
		float: left;
	}
	.settingTitle span{
		float: right;
	}
	.apply-set{
		display: flex;
		position: relative;
		height: 50px;
		.readingadd{
			width: 19px;
			height: 19px;
			border-radius: 50%;
			border: 1px solid #31c27c;
			text-indent: 3px;
	    	line-height: 16px;
			color: #31c27c;
			position: absolute;
			right:0;
			top:12px;
		}
		.stu{
			margin-right: 20px;
		}
		.lists{
			position: absolute;
			left: 440px;
		}
	}
	.apply-set:nth-child(1){
		border-bottom: 1px dashed #c4c4c4;
	}
	.timeline{
		background: url(../../assets/timeline.png) no-repeat;
		height: 52px;
		background-size: 100%;
	}
	.el-checkbox-group{
		display: inline-block;
	}
	.consult p{
		margin-top: 20px;
	}
	.move{
		margin-left: 40px;
	}
</style>