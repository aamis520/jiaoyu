<template>
	<div class="moddleOne">
		<div class="types1">
			<ul class="clearfix">
				<li>课时类型</li>
				<li>课时段<img src="../../assets/images/red.png"></li>
				<li>课时包<img src="../../assets/images/red.png"></li>
			</ul>
			<p>
				<span>设定标准<img src="../../assets/images/notes_normal.png"></span>
				<input type="type" placeholder="请输入一对一标准" id="input">
				<i><img src="../../assets/SmallduiGou.jpg" id="show"></i>
			</p>
		</div>
		<div class="types2">
			<p>
				<span>已设定一对一标准</span>
				<i><img src="../../assets/images/01_20.jpg" id="bianji"></i>
				<i><img src="../../assets/SmallduiGou.jpg" id="duiGou"></i>
			</p>
			<ul class="clearfix" id="lists">
				<li>一对一 · 专职教师 · 课时包<img src="../../assets/error1.jpg"></li>
				<li>一对一 · 专职教师 · 课时段<img src="../../assets/error1.jpg"></li>
				<li>一对一 · 学科带头人 · 课时包<img src="../../assets/error1.jpg"></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		mounted(){
			$(".types1>ul>li").click(function(){
				 $(this).find("img").toggle();
			      if ($(this).find("img").show()) {
			        $(this).siblings("li").find("img").hide();
			      }
			});
			$("#bianji").click(function(){
				$("#lists>li").find("img").show();
				$(this).hide();
				$("#duiGou").show();
			});
			$("#lists>li>img").click(function(){
				$(this).parent().hide();
				$("#bianji").show();
			});
			$("#duiGou").click(function(){
				$("#lists>li").find("img").hide();
				$(this).hide()
				$("#bianji").show();
			});
			$("#show").click(function(){
				if($("#input").val() == ""){
					alert("请输入一对一标准")
				}else{
					$(".types2").show()
				}
			})
			
		}

	}
</script>
<style lang="less" scoped>
	.clearfix:after{
		display: block;
		content: "";
		clear: both;
	}
	.moddleOne{
		width: 1008px;
		font-size: 14px;
		cursor: pointer;
		.types1{
			background: #fff;
			border-radius: 5px;
			padding: 30px;
			ul{
				 margin-bottom:25px;
				li:nth-child(1){
					color: #31c27c;
				}
				li{
					width: 102px;
					position: relative;
					float: left;
					img{
						position: absolute;
						right:40px;
						top:0;
						vertical-align: middle;
						display: none;
					}
				}
			}
			p{
				img{
					vertical-align: middle;
				}
				span{
					color: #31c27c;
					img{
						margin: 0 14px 0 5px;
					}
				}
				input{
					width: 113px;
					border-bottom: 1px solid #31c27c;
					margin-right: 10px;
				}
			}
		}
		.types2{
			margin-top: 12px;
			background: #fff;
			border-radius: 5px;
			padding: 30px;
			display: none;
			ul{
				 margin-top:25px;
				li{              
					width: 240px;
					position: relative;
					float: left;
					img{
						position: absolute;
						right:52px;
						top:-2px;
						vertical-align: middle;
						display: none;
					}
				}
				li:nth-child(3){
					img{
						right:37px;
					}
				}
			}
			p{
				border-bottom: 1px solid #eeeeee;
				position: relative;
				padding-bottom: 15px;
				img{
					vertical-align: middle;
				}
				span{
					color: #31c27c;
					img{
						margin: 0 14px 0 5px;
					}
				}
				i{
					position: absolute;
					right: 0;
					top:0;
				}
				#bianji{
					width: 14px;
					height: 14px;
				}
				#duiGou{
					width: 18px;
					height: 18px;
					display: none;
				}
				
			}
		}			
	}
</style>