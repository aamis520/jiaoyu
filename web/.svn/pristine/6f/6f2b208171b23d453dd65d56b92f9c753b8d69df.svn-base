<template>
	<div>
		<div class="compile">
			<img src="../../assets/help.png" alt="">
		</div>
		<div class="moddleOne">
			<div class="nothing">
				<p><img src="../../assets/images/nopage.png" /></p>
				<p>您还没创建课程课程链的收非标准，请点击右下角的圈加设置吧~</p>
				<router-link :to="{path:'/class/curriculumChain/addNew'}">
					<span><img src="../../assets/addbutton_normal.png" class="oneadd"/></span>
				</router-link>

			</div>
			<div class="bottom" style="display:none;">
				<ul>
					<li>数学</li>
					<li>在不同的校区，总共有<input type="text">套收费标准</li>
				</ul>
				<ul>
					<li>标准一适用的校区</li>
					<li><span>西二区校区</span>
						<span>回龙观校区</span>
						<span>五道口校区</span>
						<span>西二旗校区</span>
						<span><input type="text" placeholder="选择校区" /></span>
					</li>
				</ul>
				<ul>
					<li>标准二适用的校区</li>
					<li><input type="text"></li>
				</ul>
				<ul>
					<li>标准三适用的校区</li>
					<li><input type="text"></li>
				</ul>
				<p class="next"><img src="../../assets/confirm_normal.png" class="right" /></p>
			</div>
			<div class="setting" style="display: none;">
				<ul>
					<li>
						<p class="book">
							<span>
						<i>贝贝国际少儿- </i>
					    <i>3期 </i>
					    <i>普及班 </i>
					</span>
							<span id="book"><img src="../../assets/book.png"/></span>
						</p>
						<div class="data">
							<p>
								<span><i>第一期</i><i class="seter" id="seter" @click="bbb">设置标准</i></span>
								<span><i>第一期</i><i class="seter">设置标准</i></span>
								<span><i>第一期</i><i class="seter">设置标准</i></span>
							</p>
							<p>
								西二旗校区西二旗校区西二旗校区西二旗校区 西二旗校区西二旗校区
							</p>
						</div>
					</li>
					<li></li>
				</ul>
			</div>
			<curriculum-chainone v-show="show"></curriculum-chainone>
			<bom-box class="book_box"></bom-box>

		</div>
	</div>
</template>
<script>
	import curriculumChainone from "@/page/class/curriculumChainone"
	import bomBox from "@/page/class/bomBox"
	export default {
		data() {
			return {
				show: false
			}
		},
		components: {
			curriculumChainone: curriculumChainone,
			bomBox
		},
		methods: {
			bbb: function() {
				this.show = true
			}
		},
		mounted() {
			var _this = this

			$(".close").click(function() {
				$(".box").hide()
				_this.show = false
			});
			$(".types1>ul>li>span").click(function() {
				$(this).find("img").toggle();
				if($(this).find("img").show()) {
					$(this).siblings("span").find("img").hide()
				}
			});

			$(".more").click(function() {
				$(".clearfix").css("height", "80px");
			});
			$(".nomore").click(function() {
				$(".clearfix").css("height", "40px");
			});
			$(".clearfixed>li>span").click(function() {
				$(".clearer").show();
			});
			$(".oneadd").click(function() {
				$(".nothing").hide();
				$(".types1").show();
			});
			$(".right").click(function() {
				$(".bottom").show();
			});
			$("#book").click(function() {
				$(".book_box").show()
			});
			$(".next").click(function() {
				$(".types1").hide();
				$(".bottom").hide();
				$(".set").show();
				$(".bottom").show();
			});
			$(".setbar").click(function() {
				$(".setting").show();
			})

		}

	}
</script>
<style lang="less" scoped>
	* {
		font-size: 14px;
		color: #666666;
	}
	
	.compile {
		position: absolute;
		right: 30px;
		top: -45px;
		cursor: pointer;
	}
	/*.aaa{display:none;}*/
	
	.setting {
		padding: 30px 30px;
		background: white;
		border-radius: 4px;
		margin-top: 12px;
		.book {
			line-height: 40px;
			border-bottom: 1px dashed #EEEEEE;
			display: flex;
			justify-content: space-between;
		}
		.data {
			width: 100%;
			display: flex;
			p:nth-child(1) {
				width: 70%;
				span {
					display: block;
					padding: 16px 0;
					border-bottom: 1px dashed #EEEEEE;
				}
			}
			p:nth-child(2) {
				border-left: 1px dashed #EEEEEE;
				width: 30%;
				padding-top: 20px;
				padding-left: 20px;
				line-height: 30px;
				margin-left: 20px;
			}
		}
	}
	
	.nothing {
		background: white;
		margin-bottom: 12px;
		height: 180px;
		border-radius: 4px;
		text-align: center;
		p {}
		span {
			img {
				/*margin-left: 900px;*/
				margin-top: -90px;
				margin-left: 860px;
			}
		}
	}
	
	.moddleOne {
		width: 1008px;
	}
	
	.types1 {
		background: white;
		border-radius: 4px;
		width: 100%;
		padding: 20px 30px;
		p {
			margin-left: 900px;
		}
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
	
	.bottom {
		display: none;
		padding: 30px 30px;
		margin-top: 12px;
		background: white;
		border-radius: 4px;
		ul {
			display: flex;
			li {
				padding-bottom: 20px;
			}
			li:nth-child(1) {
				width: 30%;
			}
			li:nth-child(2) {
				width: 70%;
			}
		}
		input {
			border-bottom: 1px solid #31C27C;
		}
		p {
			img {
				margin-left: 900px;
			}
		}
	}
</style>