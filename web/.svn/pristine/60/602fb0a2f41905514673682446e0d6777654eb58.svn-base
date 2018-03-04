<template>
	<!--<form>
		<ul class="stuinfo">
			<li class="set-content">
				<span class="content-title">选择范围</span>
				<ul class="content-chose">
					<li><span>校区筛选</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>科目筛选</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>课程筛选</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>班型筛选</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>时间标签</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
				</ul>
			</li>
			<li class="set-content">
				<span class="content-title">基本信息</span>
				<ul class="content-chose">
					<li><span>班级名称</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>班级期数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>班级进度</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>班级人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>授课教师</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>班主任</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>续本期人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>续下期人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>续本期率</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>续下期率</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>满班率</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>流失人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>流失率</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>到课率</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>多科人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>试听人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>新报人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>扩入人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>转入人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>转出人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>催欠人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>催续人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
					<li><span>暂停人数</span><i class="iconfont icon-yishitubiaoshuchu- green"></i></li>
				</ul>
			</li>
		</ul>
		<div class="list-preview">
			<p class="list-title">列表预览</p>
			<table class="preview">
				<caption>
					<input type="text" placeholder="请为该列表命名" class="userlist" maxlength="15" />
				</caption>
				<tr>
					<td>排列序号</td>
					<td v-for="item in choseList">{{item}}</td>
				</tr>
				<tr>
					<td></td>
					<td v-for="item in choseList"></td>
				</tr>
			</table>
			<p class="handle">
				<img src="../../assets/cancel.png" class="cancel">
				<img src="../../assets/confirm_normal.png" class="confirm">
			</p>
		</div>
		<!-- <div class="list-preview">
			<p>编辑</p>
			<input type="text" class="bbb" v-for="item in fenlei" :value="item">
			<input type="text" name="" class="aaa">
			<span class="ccc">+</span>

		</div> -->
		<!--<div class="setting">
			<p class="settingTitle marked">
				<b>设置可用权限</b>
				<img src="../../assets/notes_normal.png" class="notes_normal">
				<b class="marked-words">每个校区的导出数据，将会独自形成一个sheet文件</b>
				<span>总部角色/人员默认管理全部校区</span>
			</p>
			<div class="consult">
				<p>
					<b class="green">要给谁看</b>
					<el-radio class="radio" v-model="radio" label="1"><input type="tel" v-model="val" class="userinput" :value="val" placeholder="选择角色"></el-radio>
					<el-radio class="radio" v-model="radio" label="2"><input type="tel" v-model="val" class="userinput" :value="val" placeholder="选择人员"></el-radio>
				</p>
				<p>
					<b class="green">时间周期</b>
					<el-radio class="radio" v-model="radio" label="1">当日</el-radio>
					<el-radio class="radio" v-model="radio" label="2">当周</el-radio>
					<el-radio class="radio" v-model="radio" label="3">当月</el-radio>
					<el-radio class="radio" v-model="radio" label="4"><input type="tel" v-model="val" :value="val"> 天内的数据</el-radio>
				</p>
				<p>
					<b class="green">看的范围</b>
					<el-radio class="radio" v-model="radio" label="1">权限范围内的数据</el-radio>
					<el-radio class="radio" v-model="radio" label="2">所在校区的数据</el-radio>
					<el-radio class="radio" v-model="radio" label="3">所在地区的数据</el-radio>
					<el-radio class="radio" v-model="radio" label="4">所在大区的数据</el-radio>
					<el-radio class="radio" v-model="radio" label="5">全部校区的数据</el-radio>
				</p>
				<p class="handle jurisdiction">
					<img src="../../assets/cancel.png" class="cancel">
					<img src="../../assets/confirm_normal.png" class="confirm">
				</p>
			</div>
		</div>
		<div class="hint">
			<p class="hint-title"><span>提示</span><img src="../../assets/fork.png" class="closehint" /></p>
			<img class="notice" src="../../assets/notice.png">
			<p class="hint-text">您确定要放弃本次编辑吗？</p>
			<p class="hint-sure">
				<img class="cancelclose" src="../../assets/cancel.png">
				<img class="ok" src="../../assets/confirm_normal.png">
			</p>
		</div>

	</form>-->
</template>

<script>
	export default {
		data() {
			return {
				choseList: [],
				fenlei: [],
				radio: "",
				val: ""
			}
		},
		methods: {},
		mounted() {
			var _this = this;
			$(".marked").hover(function() {
				$(this).find(".marked-words").show();
			}, function() {
				$(this).find(".marked-words").hide();
			});
			$(".content-chose").on("click", "span", function() {
				if(_this.choseList.length <= 19) {
					$(this).siblings("i").toggle();
					if($(this).siblings("i").is(":hidden")) {
						$.each(_this.choseList, function(index) {
							_this.choseList.splice(index, 1);
						})
					} else {
						_this.choseList.push($(this).text());
						$.unique(_this.choseList);
					}
				}
			});
			$(".confirm").click(function() {

			});
			$(".cancel").click(function() {
				$(".hint").show();
			});
			$(".ok").click(function() {
				_this.choseList.splice(0, _this.choseList.length);
				$(".hint").hide();
				$(".shade").hide();
			});
			$(".cancelclose").click(function() {
				$(".hint").hide();
				$(".shade").hide();
			});
			$(".closehint").click(function() {
				$(".hint").hide();
				$(".shade").hide();
			});
			$(".marked").hover(function() {
				$(this).find(".marked-words").show();
			}, function() {
				$(this).find(".marked-words").hide();
			});
		}
	}
</script>

<style lang="less" scoped>
	.stuinfo {
		background: #fff;
		padding-top: 30px;
		.set-content {
			margin: 0 30px;
			display: flex;
			.content-title {
				width: 110px;
				color: #31c27c;
			}
			.content-chose {
				display: flex;
				flex-wrap: wrap;
				width: 838px;
				li {
					width: 118px;
					margin-bottom: 25px;
					cursor: pointer;
				}
				.marked {
					position: relative;
					.notes_normal {
						vertical-align: middle;
					}
					.marked-words {
						display: block;
						width: 236px;
						text-align: center;
						padding: 10px 0;
						background: #31c27c;
						position: absolute;
						top: -44px;
						left: 48px;
						border-radius: 3px;
						color: #fff;
						display: none;
						cursor: pointer;
					}
					.marked-words::before {
						display: block;
						border: solid transparent;
						border-width: 7px;
						border-top-color: #31c27c;
						height: 0;
						width: 0;
						content: "";
						position: absolute;
						top: 34px;
						left: 13px;
					}
					.special {
						top: -60px;
						text-align: left;
						padding: 10px 20px;
					}
					.special::before {
						display: block;
						border: solid transparent;
						border-width: 7px;
						border-top-color: #31c27c;
						height: 0;
						width: 0;
						content: "";
						position: absolute;
						top: 48px;
						left: 13px;
					}
				}
			}
		}
	}
	
	.icon-yishitubiaoshuchu- {
		color: #31c27c;
		display: none;
		width: 14px;
		height: 14px;
	}
	
	.list-preview {
		width: 1008px;
		height: 280px;
		padding: 0 30px;
		background: #fff;
		margin-top: 12px;
		border-radius: 3px;
		position: relative;
		.list-title {
			height: 60px;
			line-height: 60px;
			color: #31c27c;
		}
		.preview {
			overflow-x: scroll;
			tr,
			td,
			caption {
				border: 1px solid #e3e3e3;
			}
			caption {
				border-bottom: 0;
				height: 60px;
				line-height: 60px;
				width: 948px;
				input {
					width: 200px;
					border-bottom: 1px solid #31c27c;
					text-align: center;
				}
			}
			td {
				width: 116px;
				padding: 20px 0;
				text-align: center;
			}
		}
		.handle {
			position: absolute;
			right: 30px;
			bottom: 20px;
			cursor: pointer;
			.cancel {
				margin-right: 12px;
			}
		}
	}
	
	.setting {
		// height: 160px;
		padding-bottom: 30px;
		background: #ffffff;
		border-radius: 3px;
		margin-top: 12px;
		font-size: 14px;
		color: #666666;
		position: relative;
	}
	
	.settingTitle {
		height: 50px;
		line-height: 50px;
		margin: 0 30px;
		border-bottom: 1px dashed #c6c6c6;
		font-size: 14px;
		color: #31c27c;
		b {
			float: left;
		}
		img {
			float: left;
			margin-top: 15px;
			margin-left: 6px;
		}
		span {
			float: right;
			color: #999;
		}
	}
	
	.consult {
		margin: 0 30px;
		.jurisdiction {
			text-align: right;
		}
	}
	
	.consult p {
		margin-top: 20px;
		b {
			margin-right: 40px;
		}
		input {
			border-bottom: 1px solid #31c27c;
			width: 104px;
			text-align: center;
		}
		.el-radio+.el-radio {
			margin-left: 24px;
		}
		.userinput {
			margin-right: 40px;
		}
		.el-radio__input.is-checked .el-radio__inner {
			margin-right: 6px;
		}
		.green {
			color: #31c27c;
		}
	}
	
	.marked {
		position: relative;
		.marked-words {
			display: block;
			width: 276px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			background: #31c27c;
			position: absolute;
			top: -24px;
			left: 80px;
			border-radius: 3px;
			color: #fff;
			display: none;
			cursor: pointer;
		}
		.marked-words::before {
			display: block;
			border: solid transparent;
			border-width: 7px;
			border-top-color: #31c27c;
			height: 0;
			width: 0;
			content: "";
			position: absolute;
			top: 30px;
			left: 13px;
		}
	}
	
	.hint {
		width: 380px;
		height: 220px;
		background-color: #ffffff;
		border-radius: 4px;
		position: absolute;
		top: 25%;
		left: 25%;
		z-index: 6;
		box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
		display: none;
		p {
			color: #666;
			text-align: center;
			font-size: 14px;
			line-height: 26px;
		}
		.notice {
			margin: 30px 45% 10px 45%;
		}
		.hint-title {
			height: 50px;
			border-top-right-radius: 4px;
			border-top-left-radius: 4px;
			background-color: #f2f5f8;
			line-height: 50px;
			font-size: 18px;
			color: #333;
			padding-left: 170px;
			.closehint {
				color: #bfbfcd;
				font-size: 18px;
				margin-left: 136px;
				vertical-align: middle;
			}
		}
		.hint-sure {
			margin-top: 10px;
			.ok {
				margin-left: 18px;
			}
		}
	}
</style>