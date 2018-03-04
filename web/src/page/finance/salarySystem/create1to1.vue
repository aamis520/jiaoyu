<template>
	<div class="all">
		<div class="container">
			<div class="top">
					创建一对一代课费标准
					<span class="iconfont icon-cuo"></span>
				</div>
				<div class="content">
					<div class="radio_box">
						<p class="tit">代课标准</p>
						<div class="radio_group">
							<p><el-radio class="radio" v-model="radio" label="1">A 按单节课固定 <input type="text" /> 元计算代课费</el-radio></p>
							<p><el-radio class="radio" v-model="radio" label="2">B 按单节课学生课耗总金额的 <input type="text" /> %计算代课费</el-radio></p>
							<p class="acv"><el-radio class="radio" v-model="radio" label="3">C 按单节课学生实际到课人数计算代课费</el-radio></p>
						</div>
					</div>
					<ul class="check_box2">
						<li>
							<span class="col">适用课程</span>
							<span class="item1">全部<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">语文<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">数学<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">英语<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">物理<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">化学<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">生物<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">地理<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
						</li>
						<li>
							<span class="col">年级年龄</span>
							<span class="item1">全部<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">1<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">2<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">3<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">4<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">5<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">6<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">初预<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">7<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">8<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">9<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">高预<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<!--<span class="item1">10<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>-->
							<!--<span class="item1">11<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">12<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>-->
						</li>
						<li>
							<span class="col">岗位性质</span>
							<span class="item1">正式<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">试用<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
						</li>
						<li>
							<span class="col">教师类型</span>
							<span class="item1">专职<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">兼职<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">实习<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">培训<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
						</li>
						<li>
							<span class="col">教师级别</span>
							<span class="item1">初级教师<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">中级教师<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item1">高级教师<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
						</li>
						<li>
							<el-checkbox v-model="checked">由其他教师替课的课次，仍然计算为原授课教师的代课费</el-checkbox>
						</li>
					</ul>
					<button class="btn">确认</button>
				</div>
			</div>
		</div>
		
</template>

<script>
	export default {
    data () {
      return {
        radio: '1',
        checked: false,
        add1:false,
        add2:false
      };
    },
    mounted(){
    	var _this = this
    	$(".icon-cuo").click(function(){
			$(".all").hide();
    	});
    	$(".item1").click(function(){
    		$(this).find('img').toggle();
    	});
    }
  }
</script>

<style scoped lang="less">
	.all{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.5);
	}
	.container{
		width: 750px;
		height: 620px;
		background: #fff;
		border-radius: 4px;
		box-shadow: 3px 3px 30px rgba(0,0,0,0.3);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -375px;
		margin-top: -310px;
		overflow-y: scroll;
		padding-bottom: 22px;
		.top{
			height: 60px;
			line-height: 60px;
			text-align: center;
			font-size: 18px;
			background: #eff3f5;
			border-top-left-radius: 4px;
			border-top-right-radius: 4px;
			position: relative;
			.icon-cuo{
				display: inline-block;
				position: absolute;
				top: 0;
				right: 30px;
				background: none;
			}
		}
		.content{
			padding: 0 30px;
			color: #666;
			.radio_box{
				display: flex;
				.tit{
					color: #31C27C;
					margin-right: 26px;
					line-height: 38px;
				}
				.radio_group{
					p{
						height: 38px;
						line-height: 38px;						
					}
					input{
							width: 40px;
							border-bottom: 1px solid #31C27C;
							text-align: center;
					}
				}
			}
			.check_box2{
				margin-top: 10px;
				li{
					height: 56px;
					line-height: 56px;
					border-top: 1px dashed #eee;
					.item1{
						display: inline-block;
						cursor: pointer;
						margin-right: 16px;
						.right{
							width: 20px;
							display: inline-block;
							margin-left: 5px;
							img{
								display: none;
								vertical-align: middle;						
							}
						}
					}
						
					.col{
						color: #31C27C;
						margin-right: 30px;
						margin-left: 0;
					}
				}
				&>li:nth-of-type(2){
					.item1{
						margin: 0;
					}
				}
			}
			.btn{
					width: 176px;
					height: 36px;
					display: block;
					text-align: center;
					color: #666;
					border: 1px solid #e2e2e2;
					border-radius: 4px;
					font-size: 14px;
					font-weight: 400;
					margin-left: 257px;
					margin-top: 8px;
					line-height: 34px;
					transition: 0.5s all;
					cursor: pointer;
					background: #fff;
					outline: none;
				}
			.btn:hover{
				background: #31C27C;
				color: #fff;
				border: none;
			}
		}
	}
</style>