<template>
	<div>
		<img src="../../assets/edit.png" class="compile">
		<p class="handle">
			<img src="../../assets/cancel.png" class="cancel">
			<img src="../../assets/confirm_normal.png" class="confirm">
		</p>
	<div class="infos">
		<ul>
			<li>
				<p class="pp1">
					<span>标题信息</span>
				</p>
				<p class="pp2" id="pp2">
					<span>阳光学校听课证<img src="../../assets/gray.png" alt=""></span>
					<span>标题信息<img src="../../assets/gray.png" alt=""></span>
					<span>LOGO<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
				</p>
			</li>
			 <li>
				<p class="pp1">
					<span>学生信息</span>
				</p>
				<p class="pp2">
					<span>学生姓名<img src="../../assets/gray.png" alt=""></span>
					<span>学号<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>上课校区<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>性别<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>年级<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>相片<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>备注<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
				</p>
			</li>
			<li>
				<p class="pp1">
					<span>课程信息</span>
				</p>
				<p class="pp2 p2">
					<span>缴费项目<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>班级编号<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>开课时间<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>上课时间<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>上课教室<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>座位号<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>上课校区<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>授课教师<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>上课次数<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>次数列表<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
				</p>
			</li>
			<li>
				<p class="pp1">
					<span>缴费信息</span>
				</p>
				<p class="pp2">
					<span>缴费结果（缴清、欠费）<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>操作人<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>开课时间<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
				</p>
			</li>
			<li>
				<p class="pp1">
					<span>其他信息</span>
				</p>
				<p class="pp2">
					<span>打印时间<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>学校二维码<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
					<span>电子公章<img src="../../assets/duiHao.jpg" alt="" class="green"></span>
				</p>
			</li> 
		</ul>
	</div>
	<div class="infos2">
		<p>听课证预览</p>
	</div>
	</div>
	
</template>
<script>
	export default{
		mounted(){
			$(".infos>ul>li>p>span").click(function(){
				$(this).find(".green").toggle();
			});
			$(".compile").click(function(){
     			$(this).hide();
     			$(".handle").show();
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
	.infos{
		width: 1008px;
		background: #fff;
		border-radius: 5px;
		font-size: 14px;
		cursor: pointer;
		margin-bottom: 12px;
		ul{
			width: 100%;
			padding: 20px;
			li{
				display: flex;
				p{
					span{
						height: 40px;
						line-height: 40px;
						position: relative;
						img{
							position: absolute;
							right:-20px;
							top:0;
							vertical-align: middle;
						}
						.green{
							display: none;
						}
					}
				}
				.pp1{
					width: 100px;
					span{
						color: #31c27c;
					}
				}
				.pp2{
					span{
						margin-right: 50px;
					}
				}
				.p2{
					margin-left: 20px;
				}
			}
		}
	}
	.infos2{
		width: 1008px;
		background: #fff;
		border-radius: 5px;
		font-size: 14px;
		cursor: pointer;
		p{
			width: 100%;
			padding: 20px;
			color: #31c27c;


		}
	}
</style>