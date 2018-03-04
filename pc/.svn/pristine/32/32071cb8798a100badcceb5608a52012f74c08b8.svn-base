<template>
	<div class="class-interview">
		<header>
			<span> 班级课设置
				<i>
					<el-tooltip class="item3" effect="dark" content="本处设置的面试题，咨询师或面试官 将会在PC端和手机端看到相关内容." placement="top-start">
						<el-button></el-button>
					</el-tooltip>
				</i>
			</span>
			<span></span>
		</header>

		<ul class="class-top">
			<li>
				<h1>课程体系</h1>
				<section>
					<span v-for="(ele,index) in classList" :key="index" :class="{top_active : classListIndex == index}" @click="classListClick(index)">{{ele.name}}</span>
				</section>
			</li>
			<li>
				<h1>选择科目</h1>
				<section>
					<span v-for="(ele,index) in subjectList" :key="index" :class="{top_active : subjectListIndex == index}" @click="subjectListClick(index)">{{ele.name}}</span>
				</section>
			</li>
			<li>
				<h1>选择项目</h1>
				<section>
					<span v-for="(ele,index) in contList" :key="index" :class="{top_active : contListIndex == index , span_red : !ele.iss}" @click="contListClick(index)">{{ele.name}}</span>
				</section>
			</li>
		</ul>

		<ul class="class-center">
			<li>
				<div class="orgin_div">全能少儿英语<i> · 第1期</i></div>
				<div class="span_div">
					<span>精品班</span>
					<span>提高班</span>
					<span>培优班</span>
				</div>
				<div>已设置面试题</div>
				<div class="btn_click"></div>
			</li>
		</ul>
		<ul class="class-center">
			<li>
				<div class="orgin_div">全能少儿英语<i v-if="false"> · 第1期</i></div>
				<div class="span_div" v-if="false">
					<span>精品班</span>
					<span>提高班</span>
					<span>培优班</span>
				</div>
				<div>已设置面试题</div>
				<div class="btn_click" @click="show = true"></div>
			</li>
		</ul>

		<transition name="el-fade-in-linear">
			<v-table  v-show="show" class="transition-box" @close="close"></v-table> 
		</transition>
		
	</div>
</template>

<script>
	import table from './class-interview-table'
	export default {
		data() {
			return {
				show: false,
				classList: [{
					name: "班级类课程"
				}, {
					name: "VIP课程"
				}],
				subjectList: [{
						name: "体育"
					}, {
						name: "武术"
					}, {
						name: "舞蹈"
					}, {
						name: "电竞"
					}, {
						name: "艺术"
					}, {
						name: "语文"
					},
					{
						name: "体育"
					}, {
						name: "武术"
					}, {
						name: "舞蹈"
					}, {
						name: "电竞"
					}, {
						name: "艺术"
					}, {
						name: "语文"
					}, {
						name: "体育"
					}, {
						name: "武术"
					}, {
						name: "舞蹈"
					}, {
						name: "电竞"
					}, {
						name: "艺术"
					}, {
						name: "语文"
					}
				],
				contList: [{
					name: "课链一（008）",
					iss: true
				}, {
					name: "课链一（009）",
					iss: true
				}, {
					name: "非课程链",
					iss: false
				}],
				classListIndex: -1,
				subjectListIndex: -1,
				contListIndex: -1,
			}
		},
		components: {
			"v-table": table
		},
		computed: {
			//			...mapState({ 
			//			})
		},
		methods: {
			classListClick(index) {
				this.classListIndex = index
			},
			subjectListClick(index) {
				this.subjectListIndex = index
			},
			contListClick(index) {
				this.contListIndex = index
			},
			close() {
				this.show = false
			}
		},
		mounted() {

		}
	}
</script>

<style lang="less">
	@width : 1008px;
	@color : #31C27C;
	.item3 {
		border: none;
		padding-left: 0px;
		background: url("../../../../images/system-campus/tanhao.png") no-repeat left top;
		background-position-y: 1px;
	}
	
	.class-interview {
		header {
			width: @width;
			height: 48px;
			background: #fff;
			padding: 0 30px;
			box-sizing: border-box;
			border-radius: 6px;
			margin-bottom: 12px;
			color: @color;
			line-height: 50px;
			display: flex;
			justify-content: space-between;
			span {
				display: flex;
				i {
					display: block;
					margin: -4px 0 0 4px;
				}
			}
		}
		.class-top {
			width: 100%;
			box-sizing: border-box;
			padding: 30px 30px 0 30px;
			border-radius: 6px;
			background: #fff;
			li {
				display: flex;
				h1 {
					color: @color;
					width: 110px;
				}
				section {
					display: flex;
					flex-wrap: wrap;
					width: 890px;
					margin-bottom: 10px;
					span {
						padding-right: 22px;
						margin-right: 20px;
						cursor: pointer;
						color: #666;
						margin-bottom: 20px;
						display: block;
						&.top_active {
							background: url(../../../../images/red.png) no-repeat center right;
						}
						&.span_red {
							color: red;
						}
					}
				}
			}
		}
		.class-center {
			background: #fff;
			border-radius: 6px;
			width: 100%;
			margin-top: 14px;
			box-sizing: border-box;
			padding: 0 30px;
			li {
				height: 49px;
				border-bottom: 1px dashed #dedede;
				display: flex;
				justify-content: space-between;
				align-items: center;
				&:last-child {
					border: none;
				}
				div {
					color: #999;
					&.orgin_div {
						color: #666;
						font-size: 15px;
						i {
							color: #ffac50;
						}
					}
					&.btn_click {
						width: 20px;
						height: 20px;
						cursor: pointer;
						background: url(../../../../images/system-head/setting.png) no-repeat center center;
					}
					&.span_div {
						span {
							margin: 0 13px;
						}
					}
				}
			}
		}
	}
	
	.el-tooltip__popper.is-dark {
		background: @color;
		color: #fff;
		max-width: 240px;
		line-height: 1.6;
		border-radius: 6px;
	}
	
	.el-tooltip__popper[x-placement^="top"] .popper__arrow {
		bottom: -6px;
		border-top-color: #31C27C;
		border-bottom-width: 0;
	}
	
	.el-tooltip__popper[x-placement^="top"] .popper__arrow {
		bottom: -6px;
		border-top-color: #31C27C;
		border-bottom-width: 0;
	}
	
	.el-tooltip__popper[x-placement^="top"] .popper__arrow::after {
		bottom: 1px;
		margin-left: -5px;
		border-top-color: #31C27C;
		border-bottom-width: 0;
	}
</style>
	
