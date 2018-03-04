<style lang="less" scoped="scoped">
	@color :#31C17B;
	@font12:12px;
	@font14:14px;
	@font16:16px;
	.mod-w{
		color: @color;
		.ico-right{
			float: right;
			width: 25px;
			height: 25px;
			margin-top: 10px;
		}
	}
	.financeTitle{
		box-sizing: border-box;
		color: @color;
		padding-bottom: 17px;
		border-bottom: 1px dashed #dbdbdb;
	}
	.container{
		color: #666666;
		.content{
			span{
				display: inline-block;
			}
			display:flex;
			height: 60px;
			vertical-align: middle;
			border-bottom: 1px dashed #eee;
			.num_s{
				width: 20px;
				height: 20px;
				margin-top: 18px;
				background: #31C27C;
				text-align: center;
				border-radius: 50%;
				margin-right: 30px;
				color: #fff;
			}	
			.standard_s{
				width: 280px;
				line-height: 60px;
				padding-right: 80px;
				box-sizing: border-box;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				cursor: pointer;
			}
			.range_s{
				width: 360px;
				line-height: 60px;
				padding-right: 150px;
				box-sizing: border-box;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				cursor: pointer;
				span{
					color: @color;
				}
			}
			.block{
				display: inline-block;
				width: 220px;
				line-height: 60px;
				padding-left: 10px;
					.edit{
						float: right;
						display: inline-block;
						i{
							margin: 0 5px;
							position: relative;
							top: 4px;
						}
						.ico-edit{
							width: 20px;
							height: 20px;
						}
				}
			}
		}
		.chooseContent{
			color: #999999;
		}
	}
	.all{
		z-index: 200;
	}
	.icoSave{
		position: relative;
		top: 5px;
	}
	.financeSave{
		position: absolute;
		top: 0;
		right: 20px;
		height: 50px;
		line-height: 50px;
		.icoSave{
			width: 25px;
			height: 25px;
		}
	}
</style>
<style lang="less">
	.salaryForm{
		.content{
			.block{
				position:relative
				
			}
			.el-input{
				width: 230px;
				position: absolute;
				top: 0;
				left: 0;
			}
		}
	}
</style>
<template>
	<div class="salaryForm">
		<div class="mod-w radius">
        	薪酬体系 · 代课费
        	<i class="ico-init ico-edit ico-right" @click.stop.prevent="financeEdit"></i>
        </div>
        <div class="common-w">
        	<div class="financeTitle">
        		班级 · 代课费 · 设置
        		<font-tooltip :parentDate="sendChildTipDate[0]"></font-Tooltip>
        	</div>
        	<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s">120.00元/次课..</span>
					<span class="range_s">西二旗校区  东直门校区...(<span>20</span>)</span>
					<div class="block">
						17-12-01生效
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
					</div>
				</div>
				<div class="content chooseContent">
					<span class="num_s">1</span>
					<span class="standard_s" @click="showCostGrades">请选择代课费标准</span>
					<span class="range_s">请选择校区</span>
					<div class="block">
						17-12-01生效
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
						<el-date-picker v-model="baseSalaryDate.sendJavaDate.time" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
        </div>
        <div class="common-w">
        	<div class="financeTitle">
        		一对一 · 代课费 · 设置
        	</div>
        	<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s">每次课，到课学生课耗总额 * 10%.，学生...</span>
					<span class="range_s">全部校区(<span>32</span>)</span>
					<div class="block">
						17-12-01生效
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
					</div>
				</div>
				<div class="content chooseContent">
					<span class="num_s">1</span>
					<span class="standard_s" @click="showCostTo1">请选择代课费标准</span>
					<span class="range_s">请选择校区</span>
					<div class="block">
						17-12-01生效
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
						<el-date-picker v-model="baseSalaryDate.sendJavaDate.time" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
        </div>
        <div class="common-w">
        	<div class="financeTitle">
        		一对二 · 代课费 · 设置
        	</div>
        	<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s">每次课，到课学生课耗总额 * 10%.，学生...</span>
					<span class="range_s">全部校区(<span>32</span>)</span>
					<div class="block">
						17-12-01生效
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
					</div>
				</div>
				<div class="content chooseContent">
					<span class="num_s">1</span>
					<span class="standard_s" @click="showCostToN">请选择代课费标准</span>
					<span class="range_s">请选择校区</span>
					<div class="block">
						17-12-01生效
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
						<el-date-picker v-model="baseSalaryDate.sendJavaDate.time" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
        </div>
        <div class="common-w">
        	<div class="financeTitle">
        		一对三 · 代课费 · 设置
        	</div>
        	<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s">每次课，到课学生课耗总额 * 10%.，学生...</span>
					<span class="range_s">全部校区(<span>32</span>)</span>
					<div class="block">
						17-12-01生效
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
					</div>
				</div>
				<div class="content chooseContent">
					<span class="num_s">1</span>
					<span class="standard_s" @click="showCostGrades">请选择代课费标准</span>
					<span class="range_s">请选择校区</span>
					<div class="block">
						17-12-01生效
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
						<el-date-picker v-model="baseSalaryDate.sendJavaDate.time" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
        </div>
        <div class="common-w">
        	<div class="financeTitle">
        		6-10人班 · 代课费 · 设置
        	</div>
        	<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s">每次课，到课学生课耗总额 * 10%.，学生...</span>
					<span class="range_s">全部校区(<span>32</span>)</span>
					<div class="block">
						17-12-01生效
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
					</div>
				</div>
				<div class="content chooseContent">
					<span class="num_s">1</span>
					<span class="standard_s">请选择代课费标准</span>
					<span class="range_s" @click="showCostGrades">请选择校区</span>
					<div class="block">
						17-12-01生效
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
						<el-date-picker v-model="baseSalaryDate.sendJavaDate.time" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
        </div>
        <div class="mod-w">
        	<span class="financeNotice">
        		备&nbsp;&nbsp;&nbsp;注:&nbsp;&nbsp;&nbsp;&nbsp;设置完成后请点击右侧的“ <i class="ico-init ico-duigou icoSave"></i> ”保存
        	</span>
        	<div class="financeSave"><i class="ico-init ico-duigou icoSave"></i></div>
        </div>
        <cost-grades v-if="salaryCostGradesToggle" @listenToChild="getMsgGrades"></cost-grades>
        <cost1to1 v-if="salaryCost1to1Toggle" @listenToChild="getMsgTo1"></cost1to1>
        <cost1toN v-if="salaryCost1toNToggle" @listenToChild="getMsgToN"></cost1toN>
	</div>
</template>

<script>
	import fontTooltip from '@components/fontTooltip'//提示框
	import costGrades from '../subComponents/costGrades'//代课费班级
	import cost1to1 from '../subComponents/cost1to1'//代课费1-1
	import cost1toN from '../subComponents/cost1toN'//代课费1-N
	export default{
		data(){
			return{
				sendChildTipDate:[
					{
						index:0,//只是方便父级使用,子集没用
						title:'薪酬体系 · 薪资关联',//父级方便看当前定义的那个tip，子集没用
						width:'',//修改宽度，可为空默认350，高度自适应
						contentFont:'这里是班级授课教师代课费标准的设定区域'//展示的文字
					}
				],
				baseSalaryDate:{//工资底薪 · 设置相关数据
					sendJavaDate:{
						money:'',//多少钱一个月
						chooseRange:'',//请选择适用范围
						time:''//生效时间
					}
				},
				salaryCostGradesToggle:false,//控制班级代课费显示隐藏
				salaryCost1to1Toggle:false,//控制班级代课费1to1显示隐藏
				salaryCost1toNToggle:false,//控制班级代课费1toN显示隐藏
			}
		},
		mounted(){
			
		},
		computed:{
			
		},
		components: {
			'font-tooltip':fontTooltip,
			'cost-grades':costGrades,
			'cost1to1':cost1to1,
			'cost1toN':cost1toN,
	    },
		methods:{
			//班级代课费
			showCostGrades(){
				this.salaryCostGradesToggle = true
			},
			getMsgGrades(data){
				if (data) {
					console.log(data)
				} else{
					console.log('点击的关闭')
				}
				this.salaryCostGradesToggle = false
			},
			//1to1代课费
			showCostTo1(){
				this.salaryCost1to1Toggle = true
			},
			getMsgTo1(data){
				if (data) {
					console.log(data)
				} else{
					console.log('点击的关闭')
				}
				this.salaryCost1to1Toggle = false
			},
			//1toN代课费
			//1to1代课费
			showCostToN(){
				this.salaryCost1toNToggle = true
			},
			getMsgToN(data){
				if (data) {
					console.log(data)
				} else{
					console.log('点击的关闭')
				}
				this.salaryCost1toNToggle = false
			},
		}
	}
</script>

