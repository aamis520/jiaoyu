<template>
	<div>
		<img src="../../assets/edit.png" class="compile">
		<p class="handle">
			<img src="../../assets/cancel.png" class="cancel">
			<img src="../../assets/confirm_normal.png" class="confirm">
		</p>
		<div class="types">
			<p class="topx">
			 	<span class="left">单据类型</span>
			 	<span class="right">
			 		<span><el-radio class="radio" v-model="radio" label="1">缴费单</el-radio></span>
			 		<span><el-radio class="radio" v-model="radio" label="2">退费单</el-radio></span>
  					<span><el-radio class="radio" v-model="radio" label="3">补缴单</el-radio></span>
  					<span><el-radio class="radio" v-model="radio" label="4">账户充值单</el-radio></span>
			 	</span>
			</p>
			<div class="conx">
			  <ul>
					<li>
						<p class="pp1">
							<span>单据格式</span>
						</p>
						<p class="pp2" id="pp2">
							<span>缴费单标题<img src="../../assets/gray.png" alt=""></span>
							<span>票据单号<img src="../../assets/gray.png" alt=""></span>
							<span>显示LOGO<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>学生信息</span>
						</p>
						<p class="pp2">
							<span>学生姓名<img src="../../assets/gray.png" alt=""></span>
							<span>上课校区<img src="../../assets/gray.png" alt=""></span>
							<span>备注<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学号<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>性别<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>年级<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>缴费信息</span>
						</p>
						<p class="pp2 p2">
							<span>缴费项目<img src="../../assets/gray.png" alt=""></span>
							<span>购买数量<img src="../../assets/gray.png" alt=""></span>
							<span>应缴<img src="../../assets/gray.png" alt=""></span>
							<span>实缴<img src="../../assets/gray.png" alt=""></span>
							<span>优惠原因<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>标准单间<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>优惠<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>授课教师<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>收款人<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>首课日<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>上课时间<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>上课教室<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>座位号<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>学校信息</span>
						</p>
						<p class="pp2">
							<span>咨询电话<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学校地址<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学校二维码<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>电子公章<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>打印方式</span>
						</p>
						<p class="pp2">
							<span>
								 <el-radio class="radio" v-model="radio1" label="1">热敏小票</el-radio>
							</span>
								<span><el-radio class="radio" v-model="radio1" label="2">针式打印</el-radio>
							</span>
						</p>
					</li> 
			  </ul>
			   <ul>
					<li>
						<p class="pp1">
							<span>单据格式</span>
						</p>
						<p class="pp2" id="pp2">
							<span>缴费单标题<img src="../../assets/gray.png" alt=""></span>
							<span>票据单号<img src="../../assets/gray.png" alt=""></span>
							<span>显示LOGO<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>学生信息</span>
						</p>
						<p class="pp2">
							<span>学生姓名<img src="../../assets/gray.png" alt=""></span>
							<span>上课校区<img src="../../assets/gray.png" alt=""></span>
							<span>性别<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>年级<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>备注<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学号<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>退费信息</span>
						</p>
						<p class="pp2 p2">
							<span>退费项目<img src="../../assets/gray.png" alt=""></span>
							<span>实缴<img src="../../assets/gray.png" alt=""></span>
							<span>课耗<img src="../../assets/gray.png" alt=""></span>
							<span>实退<img src="../../assets/gray.png" alt=""></span>
							<span>其他扣费信息<img src="../../assets/gray.png" alt=""></span>
							<span>申请人<img src="../../assets/gray.png" alt=""></span>
							<span>操作人<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>退费日期<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>优惠<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>应退<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>退费原因<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>申请日期<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>经手人<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>学校信息</span>
						</p>
						<p class="pp2">
							<span>咨询电话<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学校地址<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学校二维码<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>电子公章<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>打印方式</span>
						</p>
						<p class="pp2">
							<span>
								 <el-radio class="radio" v-model="radio2" label="1">热敏小票</el-radio>
							</span>
								<span><el-radio class="radio" v-model="radio2" label="2">针式打印</el-radio>
							</span>
						</p>
					</li> 
			  </ul>
			   <ul>
					<li>
						<p class="pp1">
							<span>单据格式</span>
						</p>
						<p class="pp2" id="pp2">
							<span>补缴单标题<img src="../../assets/gray.png" alt=""></span>
							<span>票据单号<img src="../../assets/gray.png" alt=""></span>
							<span>显示LOGO<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>学生信息</span>
						</p>
						<p class="pp2">
							<span>学生信息<img src="../../assets/gray.png" alt=""></span>
							<span>上课校区<img src="../../assets/gray.png" alt=""></span>
							<span>性别<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>年级<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>备注<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学号<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>补缴信息</span>
						</p>
						<p class="pp2 p2" id="little1">
							<span>缴费项目<img src="../../assets/gray.png" alt=""></span>
							<span>实际应缴<img src="../../assets/gray.png" alt=""></span>
							<span>定金金额<img src="../../assets/gray.png" alt=""></span>
							<span>欠费金额<img src="../../assets/gray.png" alt=""></span>
							<span>补缴金额<img src="../../assets/gray.png" alt=""></span>
							<span>收款人<img src="../../assets/gray.png" alt=""></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>学校信息</span>
						</p>
						<p class="pp2">
							<span>咨询电话<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学校地址<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学校二维码<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>电子公章<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>打印方式</span>
						</p>
						<p class="pp2">
							<span>
								 <el-radio class="radio" v-model="radio3" label="1">热敏小票</el-radio>
							</span>
								<span><el-radio class="radio" v-model="radio3" label="2">针式打印</el-radio>
							</span>
						</p>
					</li> 
			  </ul>
			   <ul>
					<li>
						<p class="pp1">
							<span>单据格式</span>
						</p>
						<p class="pp2" id="pp2">
							<span>缴费单标题<img src="../../assets/gray.png" alt=""></span>
							<span>票据单号<img src="../../assets/gray.png" alt=""></span>
							<span>显示LOGO<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>学生信息</span>
						</p>
						<p class="pp2">
							<span>学生姓名<img src="../../assets/gray.png" alt=""></span>
							<span>上课校区<img src="../../assets/gray.png" alt=""></span>
							<span>性别<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>年级<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>备注<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学号<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>充值信息</span>
						</p>
						<p class="pp2 p2" id="little2">
							<span>充值金额<img src="../../assets/gray.png" alt=""></span>
							<span>充值日期<img src="../../assets/gray.png" alt=""></span>
							<span>账户余额<img src="../../assets/gray.png" alt=""></span>
							<span>收费方式<img src="../../assets/gray.png" alt=""></span>
							<span>收款人<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>操作人<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>学校信息</span>
						</p>
						<p class="pp2">
							<span>咨询电话<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学校地址<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>学校二维码<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
							<span>电子公章<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
						</p>
					</li>
					<li>
						<p class="pp1">
							<span>打印方式</span>
						</p>
						<p class="pp2">
							<span>
								 <el-radio class="radio" v-model="radio4" label="1">热敏小票</el-radio>
							</span>
								<span><el-radio class="radio" v-model="radio4" label="2">针式打印</el-radio>
							</span>
						</p>
					</li> 
			  </ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				radio:"1",
				radio1:"1",
				radio2:"1",
				radio3:"1",
				radio4:"1",
			}
		},
		mounted(){
			$(".compile").click(function(){
     			$(this).hide();
     			$(".handle").show();
     		});
     		$(".conx>ul>li>p>span").click(function(){
				$(this).find(".green").toggle();
			});

			 var x = $(".conx").children();
			 var y = $(".topx>.right").children();
			 $(".conx>ul").eq(0).show();
			 // $(".left>li").eq(0).css({ "color": "#47c686", "background": "#fff"});
			 // $(".left>li").find("i").eq(0).show();
			 // $(".middle>ul").eq(0).show();
			 y.click(function() {
			    var index = $(this).index();
			    x.eq(index).show().siblings().hide();
			 });
		}
	}
</script>
<style lang="less" scoped>
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
	.types{
		width: 1008px;
		background: #fff;
		border-radius: 5px;
		font-size: 14px;
		cursor: pointer;
		.topx{
			height: 60px;
			line-height: 60px;
			padding:0 20px;
			background: #f6f8f7;
			border-radius: 5px;
			.left{
				margin-right: 40px;
			}
			.right{
				span{
					margin: 0 15px;
				}
			}
		}
		.conx{
		  ul{
			width: 100%;
			padding: 20px;
			display: none;
			li{
				display: flex;
				p{
					span{
						height: 40px;
						line-height: 40px;
						// position: relative;
						img{
							// position: absolute;
							// right:-20px;
							// top:0;
							vertical-align: middle;
							margin-left: 5px;
						}
						.green{
							display: none;
						}
					}
				}
				.pp1{
					width: 130px;
					span{
						color: #31c27c;
					}
				}
				.pp2{
					span{
						display: inline-block;
						width: 130px;
					}
				}
				.p2{
					margin-left: 67px;
				}
				#little1{
					margin-left: 0;
				}
				#little2{
					margin-left: 0;
				}
			}
		  }
		}
	}
</style>