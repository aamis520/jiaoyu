<template>
	<div>
		<div class="compile">
			<img src="../../assets/help.png" alt="">
		</div>
		<div class="types1">
			<ul class="clearfix">
				<li>选择科目</li>
				<li>
					<span>数学<img src="../../assets/images/red.png"></span>
					<span>语文<img src="../../assets/images/red.png"></span>
					<span>英语<img src="../../assets/images/red.png"></span>
					<span>物理<img src="../../assets/images/red.png"></span>
					<span>化学<img src="../../assets/images/red.png"></span>
					<span>生物<img src="../../assets/images/red.png"></span>
					<span>地理<img src="../../assets/images/red.png"></span>
					<span class="more">更多</span>
					<span>英语<img src="../../assets/images/red.png"></span>
					<span>物理<img src="../../assets/images/red.png"></span>
					<span>化学<img src="../../assets/images/red.png"></span>
					<span>生物<img src="../../assets/images/red.png"></span>
					<span class="nomore">收起</span>
				</li>
			</ul>
			<ul class="clearfixed">
				<li>选课程链</li>
				<li>
					<span>课链一(008)<img src="../../assets/images/red.png"></span>
					<span>课链一(008)<img src="../../assets/images/red.png"></span>
					<span>课链一(008)<img src="../../assets/images/red.png"></span>

				</li>
			</ul>
			<ul class="clearer ff">
				<li>课链内容</li>
				<li>
					小升初数学预科-6期-2个班型<img src="../../assets/images/long_jt.png" /> 小升初数学预科-6期-2个班型
					<img src="../../assets/images/long_jt.png" /> 小升初数学预科-6期-2个班型

				</li>
			</ul>
			<p><img src="../../assets/confirm_normal.png" class="right" /></p>
			</router-link>
		</div>
		<div style="display: none;" id="top">
			<ul class="clearfix">
				<li>数学 · 课链一（008）</li>
				<li>在不同的校区，总共有<input type="text">套收费标准</li>
			</ul>
			<ul class="clearfix">
				<li>标准一适用的校区</li>
				<li>
					<span>西二区校区</span>
					<span>回龙观校区</span>
					<span>五道口校区</span>
					<span>西二旗校区</span>
					<span>回龙观校区</span>
					<span>五道口校区……20个</span>
					<span><input type="text" placeholder="选择校区" class="xuanze"/></span>
				</li>
			</ul>
			<ul class="clearfix">
				<li>标准二适用的校区</li>
				<li><input type="text" placeholder="选择校区" class="xuanze"></li>
			</ul>
			<ul class="clearfix">
				<li>标准三适用的校区</li>
				<li><input type="text" placeholder="选择校区" class="xuanze"></li>
			</ul>
			<p>
				<router-link :to="{path:'/class/curriculumChain/kelian'}">
					<img src="../../assets/confirm_normal.png" class="right" />
				</router-link>
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		components: {
		},
		mounted() {
			$(".types1>ul>li>span").click(function() {
				$(this).find("img").toggle();
				if($(this).find("img").show()) {
					$(this).siblings("span").find("img").hide()
				}
				$("#top").show();
			});
			$(".xuanze").click(function() {
				$(".xuanze1").show();
			})
		}
	}
</script>
<style lang="less" scoped>
	* {
		cursor: pointer;
		font-size: 14px;
	}
	
	.compile {
		position: absolute;
		right: 30px;
		top: -45px;
		cursor: pointer;
	}
	
	.xuanze1 {
		display: none;
	}
	
	.types1 {
		background: white;
		border-radius: 4px;
		width: 100%;
		padding: 20px 30px;
		p {
			margin-left: 900px;
		}
		.clearfix {
			display: flex;
			line-height: 40px;
			height: 40px;
			overflow: hidden;
			img {
				display: none;
			}
			li:nth-child(1) {
				width: 14%;
			}
			li:nth-child(2) {
				width: 86%;
				span {
					height: 40px;
					display: inline-block;
					width: 90px;
				}
			}
		}
		.clearfixed {
			line-height: 40px;
			display: flex;
			img {
				display: none;
			}
			li:nth-child(1) {
				width: 14%;
			}
			li:nth-child(2) {
				width: 86%;
				span {
					height: 40px;
					display: inline-block;
					width: 140px;
				}
			}
		}
		.clearer {
			line-height: 40px;
			display: flex;
			li:nth-child(1) {
				width: 14%;
			}
			li:nth-child(2) {
				width: 86%;
			}
		}
	}
	
	#top {
		width: 1008px;
		background: #fff;
		margin-top: 12px;
		border-radius: 5px;
		padding: 20px;
		ul {
			li:nth-child(1) {
				width: 20%;
				color: #31c27c;
			}
			li:nth-child(2) {
				width: 80%;
			}
			li {
				float: left;
				height: 40px;
				line-height: 40px;
				input {
					width: 80px;
					border-bottom: 1px solid #31c27c;
				}
				span {
					margin: 0 10px;
				}
				span:nth-child(1) {
					margin: 0;
				}
			}
		}
		p {
			position: relative;
			.right {
				position: absolute;
				right: 30px;
				bottom: 10px;
			}
		}
	}
	
	.clearfix:after {
		display: block;
		content: "";
		clear: both;
	}
</style>