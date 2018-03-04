<style scoped lang="less">
	@color :#31C17B;
	@font12:12px;
	@font14:14px;
	@font16:16px;
	*{
		user-select:none
	}
	.costGradesBg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}
	/*内容区域*/
	.container {
		width: 780px;
		height: 580px;
		background: #fff;
		border-radius: 4px;
		box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -390px;
		transform: translateY(-50%); 
		box-sizing: border-box;
		.top {/*头部区域*/
			height: 60px;
			line-height: 60px;
			text-align: center;
			font-size: 18px;
			background: #eff3f5;
			border-top-left-radius: 4px;
			border-top-right-radius: 4px;
			position: relative;
			.ico-close {
				position: absolute;
				top: 18px;
				right: 25px
			}
		}
		.content {
			padding: 0 20px;
			height: 455px;
			box-sizing: border-box;
			overflow-x: hidden;
			overflow-y: scroll;
			color: #666;
			.radio_box {
				display: flex;
				.tit {
					padding: 0;
					margin: 0;
					color: #31C27C;
					padding-right: 10px;
					line-height: 45px;
					width: 90px;
					box-sizing: border-box;
				}
				.radio_group {
					flex: 1;
					width: 100%;
					overflow: hidden;
					input {
						width: 50px;
						border-bottom: 1px solid @color;
						text-align: center;
					}
					.radio_block{
						padding: 0;
						margin: 0;
						line-height: 45px;
						flex: none;
						.radio_check_box{
							padding-left: 22px;
				    		line-height: 36px;
							.item2{
								display: inline-block;
							    cursor: pointer;
							    padding-right: 36px;
							    position: relative;
							    i{
									position: absolute;
									right: 15px;
									top: 8px;
								}
							}
						}
					}
				}
			}
			.check_box {
				li {
					height: 45px;
					line-height: 45px;
					border-bottom: 1px dashed #eee;
					display: flex;
					.item2 {
						display: inline-block;
						cursor: pointer;
						padding-right: 36px;
						position:relative;
						i{
							position: absolute;
							right: 15px;
    						top: 13px;
						}
						.age,.grade{
							.replaceInput{
								min-width: 160px;
								color: #999999;
								display: inline-block;
								border-bottom: 1px solid #31C17B;
								height: 35px;
								.padding{
									padding: 1px 5px;
								}
							}
						}
						.age .replaceInput{
							text-align: center;
							.padding{
								padding: 0;
							}
						}
					}
					.col {
						color: #31C27C;
						margin-left: 0;
						display: block;
						width: 90px;
						height: 45px;
						line-height: 45px;
						padding-right: 10px;
						box-sizing: border-box;
						.ico-switch{
							height: 12px;
						    position: relative;
						    top: 1px;
						}
					}
				}
			}
		}
		.bottom {
			width: 100%;
			height: 60px;
			line-height: 60px;
			box-sizing: border-box;
			overflow: hidden;
			text-align: center;
			border-top: 1px solid #eee;
			.btn {
				width: 176px;
				height: 36px;
				border-radius: 4px;
				font-size: 14px;
				transition: 0.5s all;
				cursor: pointer;
				outline: none;
				background: #31C27C;
				color: #fff;
				border: none;
			}
		}
	}
	::-webkit-scrollbar-track-piece {
		background-color: rgba(0, 0, 0, 0);
		-webkit-border-radius: 0
	}
	
	::-webkit-scrollbar {
		width: 6px;
		height: 8px
	}
	
	::-webkit-scrollbar-thumb {
		height: 50px;
		background-color: rgba(0, 0, 0, 0.4);
		-webkit-border-radius: 4px
	}
	
	::-webkit-scrollbar-thumb:hover {
		height: 50px;
		background-color: rgba(0, 0, 0, 0.5);
		-webkit-border-radius: 4px
	}
</style>
<style type="text/css" lang="less">
.content{
	.el-radio__label {
	    padding-left: 5px;
	}
}
</style>
<template>
	<div class="costGradesBg">
		<div class="container">
			<div class="top">
				一对一教师 · 代课费标准
				<i class="ico-init ico-close" @click.stop.prevent="sendDate('close')"></i>
			</div>
			<div class="content">
				<div class="radio_box">
					<p class="tit">代课标准</p>
					<div class="radio_group">
						<!--单选1-->
						<div class="radio_block">
							<el-radio class="radio" @change="resetOther"  v-model="costGradesDate.classStandard.radioId" label="1">
								<input type="text" v-model="classStandardRadio[0].radioInput" @focus="changeRadio(1)" maxlength="8" @blur="inputBlur(0)"/>元/次课
							</el-radio>
						</div>
						<!--单选2-->
						<div class="radio_block">
							<el-radio class="radio" @change="resetOther" v-model="costGradesDate.classStandard.radioId" label="2">
								每次课，到课学生课耗总额 <input type="text" v-model="classStandardRadio[1].radioInput"  @focus="changeRadio(2)" maxlength="8" @blur="inputBlur(1)" />%
							</el-radio>
						</div>
						<!--单选五-->
						<div class="radio_block">
							<el-radio class="radio" @change="resetOther" v-model="costGradesDate.classStandard.radioId" label="5">
								教师上课，每小时 <input type="text"  v-model="classStandardRadio[13].radioInput" @focus="changeRadio(5)" maxlength="8" @blur="inputBlur(13)"/> 元
							</el-radio>
						</div>
						<!--单选六-->
						<div class="radio_block">
							<el-radio class="radio" @change="resetOther" v-model="costGradesDate.classStandard.radioId" label="6">
								教师上课，每课时 <input type="text" v-model="classStandardRadio[14].radioInput" @focus="changeRadio(6)" maxlength="8" @blur="inputBlur(14)"/> 元
							</el-radio>
						</div>
					</div>
				</div>
				<ul class="check_box">
					<li>
						<span class="col">适用课程</span>
						<span class="item2" v-for="(ele,index) in allCourseDate" @click="toggleShowAll(allCourseDate,index)" :key="index">{{ele.name}}<i v-if="ele.check" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<span class="col" style="cursor: pointer;" @click.stop.prevent="toggleAgeGradeWay">年龄年级<i class="ico-init ico-switch"></i></span>
						<span class="item2">
							<!--年级-->
							<div class="grade" v-if="toggleAgeGrade">
								<div class="replaceInput" @click.stop.prevent="toggleGradeTip" >
									<span v-if="gradeComputed">请选择年级</span>
									<span class="padding" v-for="(ele,index) in gradeModelData"  v-if="ele.status==='enable'">{{ele.ch_name}}</span>
								</div>
								<!--年级弹出层-->
								<cost1to1-grade v-if="toggleGradeLayer" :parentDate="gradeModelData"  @listenToChild="showGradeMsg"></cost1to1-grade>
								<!--结束-->
							</div>
							<!--年龄-->
							<div class="age" v-if="!toggleAgeGrade">
								<div class="replaceInput" @click.stop.prevent="toggleAgeTip('start')" >
									<span v-if="gradeComputed">请选择开始年龄</span>
									<span class="padding" v-for="(ele,index) in ageModelData.ageStartData.ageYear"  v-if="ele.status==='enable'">{{ele.ch_name}}岁</span>
									<span class="padding" v-for="(ele,index) in ageModelData.ageStartData.ageMouth"  v-if="ele.status==='enable'">{{ele.ch_name}}月</span>
								</div>
								<cost1to1-age v-if="toggleAgeSatrt" :parentDate="ageModelData.ageStartData" @listenToChild="showAgeMsg"></cost1to1-age>
								 至 
								<div class="replaceInput" @click.stop.prevent="toggleAgeTip('end')" >
									<span v-if="gradeComputed">请选择结束年龄</span>
									<span class="padding" v-for="(ele,index) in ageModelData.ageEndData.ageYear"  v-if="ele.status==='enable'">{{ele.ch_name}}岁</span>
									<span class="padding" v-for="(ele,index) in ageModelData.ageEndData.ageMouth"  v-if="ele.status==='enable'">{{ele.ch_name}}月</span>
								</div>
								<cost1to1-age v-if="toggleAgeEnd" :parentDate="ageModelData.ageEndData" @listenToChild="showAgeMsg" ></cost1to1-age>
							</div>
							
						</span>
					</li>
					<li>
						<span class="col">教师类型</span>
						<span class="item2" v-for="(ele,index) in teacherTypeDate" @click="toggleShow(teacherTypeDate,index)" :key="index">{{ele.name}}<i v-if="ele.check" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<span class="col">教师级别</span>
						<span class="item2" v-for="(ele,index) in teacherLevelDate" @click="toggleShow(teacherLevelDate,index)" :key="index">{{ele.name}}<i v-if="ele.check" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<el-checkbox v-model="costGradesDate.lastCheck">由其他教师替课的课次，仍然计算为原授课教师的代课费</el-checkbox>
					</li>
				</ul>
			</div>
			<div class="bottom">
				<button class="btn" @click.stop.prevent="sendDate('')">确认</button>
			</div>
		</div>
	</div>

</template>

<script>
	import cost1to1Grade from './cost1to1Grade'
	import cost1to1Age from './cost1to1Age'
	export default {
		data() {
			return {
				ceshi:false,
				costGradesDate:{//班级课教师 · 代课费标准传给父级数据
					classStandard:{//代课标准
						id:'1',//代课标准ID
						radioId:'1',//标识选的那个单选按钮
					},
					allCourse:[],//适用课程
					teacherType:[],//教师类型
					teacherLevel:[],//教师级别
					lastCheck:false//最后一项是否勾选
				},
				//代课标准相关数据
				classStandardRadio:[//代课标准下的单选框15个数据
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''},
					{radioInput:''}
				],
				classStandardCheck:{//代课标准下的多选框6个数据
					radio02Check:[
						{check:false},
						{check:false},
						{check:false},
					],
					radio03Check:[
						{check:false},
						{check:false},
						{check:false},
					],
				},
				allCourseDate:[//适用课程数据
					{id:0,name:'全部',check:false},
					{id:0,name:'语文',check:false},
					{id:0,name:'数学',check:false},
					{id:0,name:'英语',check:false},
					{id:0,name:'物理',check:false},
					{id:0,name:'化学',check:false},
					{id:0,name:'生物',check:false},
					{id:0,name:'地理',check:false},
				],
				teacherTypeDate:[//教师类型数据
					{id:0,name:'专职',check:false},
					{id:0,name:'兼职',check:false},
					{id:0,name:'实习',check:false},
					{id:0,name:'培训',check:false}
				],
				teacherLevelDate:[//教师类型数据
					{id:0,name:'初级教师',check:false},
					{id:0,name:'中级教师',check:false},
					{id:0,name:'高级教师',check:false},
				],
				toggleAgeGrade:true,//切换年龄年级
				toggleGradeLayer:false,//显示关闭年级弹出层
				toggleAgeSatrt:false,//控制开始年龄的显示隐藏
				toggleAgeEnd:false,//控制开始年龄的显示隐藏
//				ageModelValue:'',//年龄值
//				gradeModelValue1:'',//年级值
//				gradeModelValue2:'',//年级值
				//年级数据
				gradeModelData:[
					{en_name:'1',ch_name:'小一',status:"disable"},
					{en_name:'2',ch_name:'小二',status:"enable"},
					{en_name:'3',ch_name:'小三',status:"enable"},
					{en_name:'4',ch_name:'小四',status:"enable"},
					{en_name:'5',ch_name:'小五',status:"enable"},
					{en_name:'6',ch_name:'小六',status:"enable"},
					{en_name:'7',ch_name:'初一',status:"disable"},
					{en_name:'8',ch_name:'初二',status:"enable"},
					{en_name:'9',ch_name:'初三',status:"enable"},
					{en_name:'10',ch_name:'高一',status:"enable"},
					{en_name:'11',ch_name:'高二',status:"disable"},
					{en_name:'12',ch_name:'高三',status:"enable"},
					{en_name:'13',ch_name:'成人',status:"disable"}
				],
				//年龄数据
				ageModelData:{
					ageStartData:{
						ageYear:[
							{en_name:'1',ch_name:'1',status:'enable'},
							{en_name:'2',ch_name:'2',status:'disable'},
							{en_name:'3',ch_name:'3',status:'disable'},
							{en_name:'4',ch_name:'4',status:'disable'},
							{en_name:'5',ch_name:'5',status:'disable'},
							{en_name:'6',ch_name:'6',status:'disable'},
							{en_name:'7',ch_name:'7',status:'disable'},
							{en_name:'8',ch_name:'8',status:'disable'},
							{en_name:'9',ch_name:'9',status:'disable'},
							{en_name:'10',ch_name:'10',status:'disable'},
							{en_name:'11',ch_name:'11',status:'disable'},
							{en_name:'12',ch_name:'12',status:'disable'},
							{en_name:'13',ch_name:'13',status:'disable'},
							{en_name:'14',ch_name:'14',status:'disable'},
							{en_name:'15',ch_name:'15',status:'disable'},
							{en_name:'16',ch_name:'16',status:'disable'},
							{en_name:'17',ch_name:'17',status:'disable'},
							{en_name:'18',ch_name:'18',status:'disable'},
							{en_name:'19',ch_name:'19',status:'disable'},
							{en_name:'20',ch_name:'20',status:'disable'}
						],
						ageMouth:[
							{en_name:'1',ch_name:'1',status:'enable'},
							{en_name:'2',ch_name:'2',status:'disable'},
							{en_name:'3',ch_name:'3',status:'disable'},
							{en_name:'4',ch_name:'4',status:'disable'},
							{en_name:'5',ch_name:'5',status:'disable'},
							{en_name:'6',ch_name:'6',status:'disable'},
							{en_name:'7',ch_name:'7',status:'disable'},
							{en_name:'8',ch_name:'8',status:'disable'},
							{en_name:'9',ch_name:'9',status:'disable'},
							{en_name:'10',ch_name:'10',status:'disable'},
							{en_name:'11',ch_name:'11',status:'disable'},
							{en_name:'12',ch_name:'12',status:'disable'},
						],
					},
					ageEndData:{
						ageYear:[
							{en_name:'1',ch_name:'1',status:'enable'},
							{en_name:'2',ch_name:'2',status:'disable'},
							{en_name:'3',ch_name:'3',status:'disable'},
							{en_name:'4',ch_name:'4',status:'disable'},
							{en_name:'5',ch_name:'5',status:'disable'},
							{en_name:'6',ch_name:'6',status:'disable'},
							{en_name:'7',ch_name:'7',status:'disable'},
							{en_name:'8',ch_name:'8',status:'disable'},
							{en_name:'9',ch_name:'9',status:'disable'},
							{en_name:'10',ch_name:'10',status:'disable'},
							{en_name:'11',ch_name:'11',status:'disable'},
							{en_name:'12',ch_name:'12',status:'disable'},
							{en_name:'13',ch_name:'13',status:'disable'},
							{en_name:'14',ch_name:'14',status:'disable'},
							{en_name:'15',ch_name:'15',status:'disable'},
							{en_name:'16',ch_name:'16',status:'disable'},
							{en_name:'17',ch_name:'17',status:'disable'},
							{en_name:'18',ch_name:'18',status:'disable'},
							{en_name:'19',ch_name:'19',status:'disable'},
							{en_name:'20',ch_name:'20',status:'disable'}
						],
						ageMouth:[
							{en_name:'1',ch_name:'1',status:'enable'},
							{en_name:'2',ch_name:'2',status:'disable'},
							{en_name:'3',ch_name:'3',status:'disable'},
							{en_name:'4',ch_name:'4',status:'disable'},
							{en_name:'5',ch_name:'5',status:'disable'},
							{en_name:'6',ch_name:'6',status:'disable'},
							{en_name:'7',ch_name:'7',status:'disable'},
							{en_name:'8',ch_name:'8',status:'disable'},
							{en_name:'9',ch_name:'9',status:'disable'},
							{en_name:'10',ch_name:'10',status:'disable'},
							{en_name:'11',ch_name:'11',status:'disable'},
							{en_name:'12',ch_name:'12',status:'disable'},
						],
					}
				},
			};
		},
		mounted() {
		},
		computed:{
			classStandardName(){
				let swithID = parseInt(this.costGradesDate.classStandard.radioId);
				let cValue01 = '';//存放单选156的值
				let cValue02 = {};//存放单选23的值
				let cValue04 = [];//存放单选4的值
                switch (swithID) {
                    case 1:
                    	cValue01 = '';
                        cValue01 = this.classStandardRadio[0].radioInput
                        break
                    case 2:
                        cValue02.radioValue = this.classStandardRadio[1].radioInput;
                        let checkV01 = [];
                        this.classStandardCheck.radio02Check.map((ele,index)=>{
                        	if (ele.check) {
                        		checkV.push(ele)
                        	}
                        })
                        cValue02.checkValue = checkV01;
                        break
                    case 3:
                    	let radioV02 = [];
                    	radioV.onePeople=this.classStandardRadio[2].radioInput;
                    	radioV.oneMoney=this.classStandardRadio[3].radioInput;
                    	radioV.twoPeople1=this.classStandardRadio[4].radioInput;
                    	radioV.twoPeople2=this.classStandardRadio[5].radioInput;
                    	radioV.twoMoney=this.classStandardRadio[6].radioInput;
                    	radioV.threePeople=this.classStandardRadio[7].radioInput;
                    	radioV.threeMoney=this.classStandardRadio[8].radioInput;
                        cValue03.radioValue = radioV02;
                        
                        let checkV02 = [];
                        this.classStandardCheck.radio02Check.map((ele,index)=>{
                        	if (ele.check) {
                        		checkV.push(ele)
                        	}
                        })
                        cValue02.checkValue = checkV02;
                        break
                    case 4:
                        cValue04.onePeople=this.classStandardRadio[9].radioInput;
                    	cValue04.oneMoney=this.classStandardRadio[10].radioInput;
                    	cValue04.twoMoney=this.classStandardRadio[11].radioInput;
                    	cValue04.threeMoney=this.classStandardRadio[12].radioInput;
                        break
                    case 5:
                    	cValue01 = '';
                        cValue01 = this.classStandardRadio[13].radioInput
                        break
                    case 6:
                    	cValue01 = '';
                        cValue01 = this.classStandardRadio[14].radioInput
                        break
                }
                return {
                    cValue01: cValue01,
                    cValue02: cValue02,
                    cValue04: cValue04
                }
				
			},
			gradeComputed(){//控制年级是否显示 '请选择年级' 提示语
				let length=0;
				this.gradeModelData.map((ele,index)=>{
					if (ele.status==='enable') {
						length++
					}
				})
				if (length>0) {
					return false
				} else{
					return true;
				}
			}
		},
		components:{
			'cost1to1-grade':cost1to1Grade,
			'cost1to1-age':cost1to1Age,
		},
		methods:{
			//1.方法一主要作用于代课标准下的复选框，只有选择了相应的单选才能选对应的复选框
			toggleDuigou(str,index){
				let rId = this.costGradesDate.classStandard.radioId;
				if (str == 'radio02Check') {
					if (rId==2) {
						this.classStandardCheck.radio02Check[index].check = !this.classStandardCheck.radio02Check[index].check
					}else{
						console.log("请先选中单选2")
					}
				} else if(str == 'radio03Check'){
					if (rId==3) {
						this.classStandardCheck.radio03Check[index].check = !this.classStandardCheck.radio03Check[index].check
					}else{
						console.log("请先选中单选3")
					}
				}
			},
			//方法2，作用初始化代课标准下单选和多选
			resetOther(val){//val当前选择的那个
				this.classStandardRadio.map((ele,index)=>{
					ele.radioInput=''
				})
				this.classStandardCheck.radio02Check.map((ele,index)=>{
					ele.check=false
				})
				this.classStandardCheck.radio03Check.map((ele,index)=>{
					ele.check=false
				})
			},
			//方法3，input输入框获取焦点时，对应的单选按钮也获取焦点
			changeRadio(num){
				this.resetOther();//初始化表格清空
				this.costGradesDate.classStandard.radioId = num.toString();
			},
			//方法4，input输入框失去焦点进行验证输入文字合法性
			inputBlur(index){
				let inputValue = this.classStandardRadio[index].radioInput;
				if (inputValue =='') {//如果不存在值就不需要验证啦
					return false;
				}
				if (isNaN(inputValue)) {//不是数字
					this.classStandardRadio[index].radioInput = ''
					this.$message({
						type: 'error',
						message: '输入不是数字!'
					});
				}else{
					if (index==2 || index==4 || index==5 || index==7 || index==9) {//验证人
						if (inputValue>0 && Number.isInteger(inputValue)) {//大于0的整数
							console.log("人数输入合法")
							return
						} else{
							this.classStandardRadio[index].radioInput = ''
							this.$message({
								type: 'warning',
								message: '输入的人数不合法，人数应为大于0的整数'
							});
						}
					} else{//验证数字
						let decimal = inputValue.toString();
						let dot = decimal.indexOf('.');
						if (dot=="-1") {//为整数 直接返回
							return
						} else{//如果存在点，验证小数的位数
							let length = decimal.replace(/\d+\.(\d*)/,"$1").length;
							if (length==0) {//2.=>2
								this.classStandardRadio[index].radioInput=parseInt(inputValue)
							} else if(length>2){//2.22222222=>2.22
								this.classStandardRadio[index].radioInput= Math.round(inputValue*100)/100
								this.$message({
									type: 'info',
									message: '小数默认最多2位，超过部分将四舍五入'
								});
							}
						}
					}
				}
			},
			//改变下面对勾显示
			toggleShow(ele,index){
				ele[index].check = !ele[index].check
			},
			//带有全选的对勾
			toggleShowAll(ele,index){
				if (index==0) {//全选和取消全选
					if (ele[0].check) {
						ele.map((subEle,subIndex)=>{
							subEle.check = false
						})
					} else{
						ele.map((subEle,subIndex)=>{
							subEle.check = true
						})
					}
				} else{//选中和没选中切换
					let length = 0;
					ele[index].check = !ele[index].check
					ele.map((lenEle,lenIndex)=>{
						if (lenEle.check && lenIndex>0) {
							length++;
						}
					})
					if (length==ele.length-1) {
						ele[0].check=true
					}else{
						ele[0].check=false
					}
				}
			},
			//获取代课标准数据
			getClassStandard(){
				let chooseId=this.costGradesDate.classStandard.radioId;
				if (chooseId==1 || chooseId==5 || chooseId==6){
					this.costGradesDate.classStandard.data = this.classStandardName.cValue01
				}else if (chooseId==2 || chooseId==3) {
					this.costGradesDate.classStandard.data = this.classStandardName.cValue02
				} else{
					this.costGradesDate.classStandard.data = this.classStandardName.cValue03
				}
			},
			//获取代课标准下面的选中数据
			getOtherData(){
				this.costGradesDate.teacherType = [];//教师类型
				this.costGradesDate.teacherLevel = [];//教师级别
				this.costGradesDate.allCourse = [];//适用班型
                this.teacherTypeDate.map((ele,index)=>{
                	if (ele.check) {
                		this.costGradesDate.teacherType.push(ele)
                	}
                })
                this.teacherLevelDate.map((ele,index)=>{
                	if (ele.check) {
                		this.costGradesDate.teacherLevel.push(ele)
                	}
                })
                this.allCourseDate.map((ele,index)=>{
                	if (ele.check) {
                		this.costGradesDate.allCourse.push(ele)
                	}
                })
			},
			sendDate(str){
				this.getClassStandard()
				this.getOtherData()
				if (str == 'close') {//如果点击关闭了，只是执行父级的关闭事件即可
					this.$emit("listenToChild")
				}else{
					this.$emit("listenToChild",this.costGradesDate)
				}
			},
			//切换年龄年级方法
			toggleAgeGradeWay(){
				this.toggleAgeGrade = !this.toggleAgeGrade;
			},
			//显示关闭年级
			toggleGradeTip(){
				this.toggleGradeLayer =!this.toggleGradeLayer
			},
			showGradeMsg(){
				this.toggleGradeLayer =!this.toggleGradeLayer
			},
			//控制年龄的显示隐藏
			toggleAgeTip(str){
				if (str=="start") {
					this.toggleAgeSatrt=true
					this.toggleAgeEnd=false
					console.log("start")
				} else{
					this.toggleAgeSatrt=false
					this.toggleAgeEnd=true
					console.log("end")
				}
			},
			//关闭年龄弹出
			showAgeMsg(){
				this.toggleAgeSatrt=false
				this.toggleAgeEnd=false
			}
		}
	}
</script>