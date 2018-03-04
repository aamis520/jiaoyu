<template>
	<div class="all">
		<div class="container">
			<div class="top">
					创建班级代课费标准
					<span class="iconfont icon-cuo"></span>
				</div>
				<div class="content">
					<div class="radio_box">
						<p class="tit">代课标准</p>
						<div class="radio_group">
							<p><el-radio class="radio" v-model="radio" label="1">A 按单节课固定 <input type="text" /> 元计算代课费</el-radio></p>
							<p><el-radio class="radio" v-model="radio" label="2">B 按单节课学生课耗总金额的 <input type="text" /> %计算代课费</el-radio></p>
							<p class="acv"><el-radio class="radio" v-model="radio" label="3">C 按单节课学生实际到课人数计算代课费</el-radio></p>
							<div class="add" v-if="add1">
								<span>大于等于 <input type="text" /> 人按 <input type="text" /> 元算</span>
								<span> <input type="text" /> 人- <input type="text" /> 人按 <input type="text" /> 元算</span><br />
								<span>大于等于 <input type="text" /> 人按 <input type="text" /> 元算</span>
							</div>
							<p @click="add2=!add2"><el-radio id="A" class="radio" v-model="radio" label="4" @click="add2=!add2">D 按单节课盈亏平衡点算代课费</el-radio></p>
							<div class="add" v-if="add2">
								<span>以单次课，到课学生 <input type="text" /> 人为标准，代课费按 <input type="text" /> 元算</span><br />
								<span>每增加一人，加 <input type="text" />  元 &nbsp;&nbsp;  每减少1人扣 <input type="text" /> 元</span>
							</div>
							<p><el-radio class="radio" v-model="radio" label="5">E 按教师上课每小时 <input type="text" /> 元计算代课费</el-radio></p>
						</div>
					</div>
					<ul class="check_box">
						<li>
							<span class="col">适用班型</span>
							<span class="item2">精品班<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item2">培优班<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item2">提升班<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
						</li>
						<li>
							<span class="col">岗位性质</span>
							<span class="item2">正式<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item2">试用<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
						</li>
						<li>
							<span class="col">教师类型</span>
							<span class="item2">专职<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item2">兼职<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item2">实习<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item2">培训<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
						</li>
						<li>
							<span class="col">教师级别</span>
							<span class="item2">初级教师<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item2">中级教师<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
							<span class="item2">高级教师<span class="right"><img src="../../../assets/duiHao.jpg"/></span></span>
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
    	$(".radio_group").on("click","p",function () {
			if (_this.radio == "3") {
				_this.add1 = true
			} else {
				_this.add1 = false
			};
			if (_this.radio == "4") {
				_this.add2 = true
			} else {
				_this.add2 = false
			}
    	});
    	$(".item2").click(function(){
    		$(this).find('img').toggle();
    	})
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
					.add{
						width: 540px;
						height: 80px;
						background: #f7f7f7;
						padding: 14px 20px;
						border-radius: 4px;
						line-height: 28px;
						&>span:first-child{
							margin-right: 44px;
						}
					}
				}
			}
			.check_box{
				margin-top: 10px;
				li{
					height: 56px;
					line-height: 56px;
					border-top: 1px dashed #eee;
					.item2{
						display: inline-block;
						cursor: pointer;
						margin-right: 36px;
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