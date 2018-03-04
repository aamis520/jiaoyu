<template>
	<div class="box">

		<div class="classPackage">
			<p class="topx">
				ABC浪漫英语：普及：第二期-课程介绍
				<img src="../../assets/images/litclose_normal.png" class="close">
			</p>
			<div class="article">
				<div class="bom-first">
					<p>
						<span>第一期 </span> <img src="../../assets/images/long_jt.png" />
						<span>第二期</span><img src="../../assets/images/long_jt.png" />
						<span>第三期</span>
					</p>
				</div>
				<div class="bom-second">
					<p>
						<span>课程介绍</span>
						<span> 请输入课程简介(30个字以内)</span>
					</p>
					<p>
						<span><img src="../../assets/20160117111325_PWaCJ.jpeg"/></span>
						<span><img src="../../assets/56e976513d21e7402.jpg"/></span>
						<span>	<el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                  :on-remove="handleRemove">
                          <i class="el-icon-plus"></i>
                                </el-upload>
                             <el-dialog v-model="dialogVisible" size="tiny">
                                <img width="100%" :src="dialogImageUrl" alt="">
                          </el-dialog></span>
					</p>
					<p>
						<span>课程详情</span>
						<span>
							舞蹈以中国舞蹈为主，通过课堂基本功训练与成品舞相结合
							丰富多彩、趣味十足、培养儿童外向的性格、塑造良好的形体，
							舞蹈以中国舞为主，通过课堂基本功训练与成品舞蹈相结合，
							丰富多彩、趣味着十足、培养儿童外向的性格、塑造良好的形体。
						</span>
					</p>
				</div>

				<p class="butt">
					<span>取消</span>
					<span>下一期</span>
				</p>

			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			$(".close").click(function() {
				$(".box").hide()
			})
		}
	}
</script>

<style lang="less" scoped>
	* {
		color: #666666;
		font-family: "微软雅黑";
	}
	
	.butt {
		padding-left: 135px;
		padding-top: 80px;
		span {
			border: 1px solid gainsboro;
			display: inline-block;
			width: 174px;
			height: 35px;
			text-align: center;
			line-height: 35px;
			border-radius: 4px;
			margin-left: 18px;
		}
		span:nth-child(2) {
			background: #31C27C;
			border: none;
			color: white;
		}
		span:nth-child(2):hover {
			background: #44d58f;
		}
		span:nth-child(2):active {
			background: #27bd75;
		}
		span:nth-child(1):hover {
			background: #f4f4f4;
		}
		span:nth-child(1):active {
			background: #e7e7e7;
		}
	}
	
	.box {
		width: 780px;
		height: 620px;
		position: fixed;
		top: 0;
		left: 0;
		cursor: pointer;
		font-size: 14px;
		color: #000;
		display: none;
		.classPackage {
			width: 780px;
			height: 620px;
			background: #fff;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: 220px;
			margin-top: -160px;
			border-radius: 4px;
			box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
			.topx {
				width: 100%;
				height: 60px;
				line-height: 60px;
				text-align: center;
				position: relative;
				background: #eff3f5;
				border-radius: 5px;
				img {
					position: absolute;
					right: 30px;
					top: 5px;
				}
			}
			.article {
				padding: 20px 30px;
				height: 560px;
				overflow: scroll;
				.bom-first {
					border-bottom: 1px dashed #EEEEEE;
					padding-bottom: 16px;
					span {
						margin: 0 10px;
						display: inline-block;
						width: 80px;
						border-radius: 20px;
						background: #31C27C;
						text-align: center;
						line-height: 30px;
						color: white;
					}
					span:nth-child(1) {
						margin-left: 180px;
					}
				}
				.bom-second {
					padding: 14px 0;
					p:nth-child(1) {
						span:nth-child(1) {
							color: #31C27C;
							margin-right: 30px;
						}
					}
					p:nth-child(2) {
						display: flex;
						margin-top: 12px;
						padding-left: 100px;
						border-bottom: 1px dashed #EEEEEE;
						padding-bottom: 12px;
						span {
							margin-right: 40px;
						}
						img {
							width: 150px;
							height: 150px;
							border: 1px dashed #EEEEEE;
						}
					}
					p:nth-child(3) {
						padding: 12px 0;
						display: flex;
						line-height: 30px;
						span {
							display: block;
						}
						span:nth-child(1) {
							width: 180px;
							padding-right: 30px;
							color: #31C27C;
						}
						span:nth-child(2) {}
					}
				}
			}
		}
	}
</style>