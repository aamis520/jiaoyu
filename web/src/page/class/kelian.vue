<template>
	<div>
		<div class="compile">
			<img src="../../assets/help.png" alt="">
		</div>
		<div class="set">
			<ul>
				<li>
					<P>
						<span>数学-课链二(009)</span>
						<span class="bianji"><img src="../../assets/edit.png"/></span>
					</P>
					<p>
						<span>
							<b>标准一</b>
							<i>17-07-08生效 · 8校区</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
						<span>
							<b>标准二</b>
							<i>17-07-08生效 · 8校区</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
						<span>
							<b>标准三</b>
							<i>17-07-08生效 · 2校区</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
					</p>
				</li>
			</ul>
		</div>
		<div id="top">
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
		<div class="setting">
			<ul>
				<li>
					<p class="book">
						<span>
							<i>ABC浪漫歌曲班 ·</i>
						    <i>3期</i>
						    <i>普及班 </i>
						</span>
						<span id="book"><img src="../../assets/book.png"/></span>
					</p>
					<div class="data">
						<p>
							<span><i>第一期</i><i class="seter" id="seter" @click="bbb">设置标准</i></span>
							<span><i>第二期</i><i class="seter">设置标准</i></span>
							<span><i>第三期</i><i class="seter">设置标准</i></span>
						</p>
						<p>
							<span>西二旗校区</span>
							<span>回龙观校区</span>
							<span>龙泽校区</span>
							<span>西二旗校区</span>
							<span>西直门校区</span>
							<span>五道口校区</span>……20个
						</p>
					</div>
				</li>
				<li></li>
			</ul>
		</div>
		<!-- <div class="set">
			<ul>
				<li>
					<P>
						<span>数学-课链三(010)</span>
						<span><img src="../../assets/edit.png"/></span>
					</P>
					<p>
						<span>
							<b>标准一</b>
							<i>17-07-08生效 · 6校区</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
						<span>
							<b>标准二</b>
							<i>17-07-08生效 · 10校区</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
						<span>
							<b>标准三</b>
							<i>未设置</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
					</p>
				</li>
			</ul>
		</div>
		<div class="set">
			<ul>
				<li>
					<P>
						<span>数学-课链一(008)</span>
						<span><img src="../../assets/edit.png"/></span>
					</P>
					<p>
						<span>
							<b>标准一</b>
							<i>未设置-10校区</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
						<span>
							<b>标准一</b>
							<i>未设置-10校区</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
						<span>
							<b>标准一</b>
							<i>未设置-10校区</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
					</p>
				</li>
			</ul>
		</div>
		<div class="set">
			<ul>
				<li>
					<P>
						<span>英语-课链一(008)</span>
						<span><img src="../../assets/edit.png"/></span>
					</P>
					<p>
						<span>
							<b>标准一</b>
							<i>17-07-07生效 · 7校区</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
						<span>
							<b>标准二</b>
							<i>17-07-07生效 · 7校区</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
						<span>
							<b>标准三</b>
							<i>未设置</i>
							<i class="setbar"><img src="../../assets/setting.png"/></i>
						</span>
					</p>
				</li>
			</ul>
		</div> -->
		<div class="shade" id="shade1">
			<div class="hint" id="hint1">
				<p class="hint-title">提示<img src="../../assets/fork.png" class="closehint" /></p>
				<img class="notice" src="../../assets/notice.png">
				<p class="hint-text">您确认修改数学 · 课链一（008）已设置好的相关内容？</p>
				<p class="hint-sure">
					<img class="cancel" src="../../assets/cancel.png">
					<img class="ok" src="../../assets/confirm_normal.png">
				</p>
			</div>
		</div>

		<bom-box class="book_box"></bom-box>
		<curriculum-chainone class="curriculum-chainone"></curriculum-chainone>
	</div>
</template>
<script>
	import bomBox from "@/page/class/bomBox"
	import curriculumChainone from "@/page/class/curriculumChainone"
	export default {
		components: {
			bomBox,
			curriculumChainone: curriculumChainone,
		},
		mounted() {
			$(".right").click(function() {
				$("#shade1").show();
				$("#hint1").show();
			});
			$(".closehint").click(function() {
				$("#shade1").hide();
				$("#hint1").hide();
			});
			$(".cancel").click(function() {
				$("#shade1").hide();
				$("#hint1").hide();
			});
			$(".bianji").click(function() {
				$("#top").show();
			});
			$(".setbar").click(function() {
				$(".set").hide();
				$(".setting").show();
			});
			$("#book").click(function() {
				$(".book_box").show()
			});
			$(".seter").click(function() {
				$(".curriculum-chainone").show();
			})
		}
	}
</script>
<style lang="less" scoped>
	.compile {
		position: absolute;
		right: 30px;
		top: -45px;
		cursor: pointer;
	}
	
	.curriculum-chainone {
		display: none;
	}
	
	#top {
		width: 1008px;
		background: #fff;
		margin-top: 12px;
		border-radius: 5px;
		padding: 20px;
		font-size: 14px;
		display: none;
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
	
	.setting {
		padding: 0 30px 20px 30px;
		background: white;
		border-radius: 4px;
		font-size: 14px;
		display: none;
		.book {
			height: 60px;
			line-height: 60px;
			border-bottom: 1px dashed #EEEEEE;
			display: flex;
			justify-content: space-between;
			img {
				vertical-align: middle;
			}
			span:nth-child(1) {
				i:nth-child(1) {
					color: #31c27c;
				}
				i:nth-child(2) {
					color: #ffb54b;
					margin-right: 30px;
				}
			}
		}
		.data {
			width: 100%;
			display: flex;
			p {
				i:nth-child(1) {
					color: #31c27c;
					margin-right: 30px;
				}
				.seter {
					color: #249ef6;
				}
			}
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
				padding: 15px;
				margin-left: 20px;
				span {
					display: inline-block;
					height: 40px;
					line-height: 40px;
					margin: 0 3px;
				}
			}
		}
	}
	
	.set {
		background: white;
		border-radius: 4px;
		padding: 0 30px 30px 30px;
		cursor: pointer;
		font-size: 14px;
		margin-bottom: 12px;
		ul {
			li {
				p {
					height: 60px;
					line-height: 60px;
					img {
						vertical-align: middle
					}
				}
				P:nth-child(1) {
					border-bottom: 1px dashed #EEEEEE;
					display: flex;
					justify-content: space-between;
					color: #31c27c;
				}
				P:nth-child(2) {
					span {
						display: inline-block;
						width: 250px;
						b {
							color: #31c27c;
							margin-right: 10px;
						}
					}
				}
			}
		}
		.jia {
			margin-left: 860px;
		}
	}
	
	.shade {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		background: rgba(0, 0, 0, 0.5);
		.hint {
			width: 380px;
			height: 220px;
			background-color: #ffffff;
			border-radius: 4px;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-left: -190px;
			margin-top: -110px;
			box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
			display: none;
			p {
				color: #666;
				text-align: center;
				font-size: 14px;
				line-height: 26px;
			}
			.notice {
				margin: 20px 45% 10px 45%;
			}
			.hint-text {
				padding: 0 50px;
			}
			.hint-title {
				height: 50px;
				border-top-right-radius: 4px;
				border-top-left-radius: 4px;
				background-color: #f2f5f8;
				line-height: 50px;
				font-size: 18px;
				color: #333;
				position: relative;
				text-align: center;
				.closehint {
					position: absolute;
					right: 20px;
					top: 17px;
				}
			}
			.hint-sure {
				margin-top: 10px;
				.ok {
					margin-left: 18px;
				}
			}
		}
	}
</style>