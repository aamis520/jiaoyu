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
		height: 650px;
		background: #fff;
		border-radius: 4px;
		box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -390px;
		margin-top: -325px;
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
			height: 535px;
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
						input[type=text]{
						    border: none;
						    border-bottom: 1px solid #31C17B;
						    outline: none;
						    width: 50px;
						    padding-left: 2px;
						    font-size: 14px;
						    text-align: center;
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
					}
				}
			}
		}
		.bottom {
			width: 100%;
			height: 50px;
			line-height: 50px;
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
				班级课教师 · 代课费标准
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
							<div class="radio_check_box">
								<span class="col">学生如:</span>
								<span class="item2" @click="toggleDuigou('radio02Check',0)">插班试听<i class="ico-init ico-duigou2" v-if="classStandardCheck.radio02Check[0].check"></i></span>
								<span class="item2" @click="toggleDuigou('radio02Check',1)">校内插班补课<i class="ico-init ico-duigou2" v-if="classStandardCheck.radio02Check[1].check"></i></span>
								<span class="item2" @click="toggleDuigou('radio02Check',2)">跨校插班补课<i class="ico-init ico-duigou2" v-if="classStandardCheck.radio02Check[2].check"></i></span>
								<span class="item2">也计算入课耗</span>
							</div>
						</div>
						<!--单选三-->
						<div class="radio_block">
							<el-radio class="radio" @change="resetOther" v-model="costGradesDate.classStandard.radioId" label="3">
								每次到课≤ <input type="text"  v-model="classStandardRadio[2].radioInput" @focus="changeRadio(3)" maxlength="8" @blur="inputBlur(2)"/>人,
								<input type="text" v-model="classStandardRadio[3].radioInput" @focus="changeRadio(3)" maxlength="8" @blur="inputBlur(3)"/>元; 
								<input type="text" v-model="classStandardRadio[4].radioInput" @focus="changeRadio(3)" maxlength="8" @blur="inputBlur(4)"/>人- 
								<input type="text" v-model="classStandardRadio[5].radioInput" @focus="changeRadio(3)" maxlength="8" @blur="inputBlur(5)"/>人,
								<input type="text" v-model="classStandardRadio[6].radioInput" @focus="changeRadio(3)" maxlength="8" @blur="inputBlur(6)"/>元≥ 
								<input type="text" v-model="classStandardRadio[7].radioInput" @focus="changeRadio(3)" maxlength="8" @blur="inputBlur(7)"/>人,
								<input type="text" v-model="classStandardRadio[8].radioInput" @focus="changeRadio(3)" maxlength="8" @blur="inputBlur(8)"/>元
							</el-radio>
							<div class="radio_check_box">
								<span class="col">学生如:</span>
								<span class="item2" @click="toggleDuigou('radio03Check',0)">插班试听<i v-if="classStandardCheck.radio03Check[0].check" class="ico-init ico-duigou2"></i></span>
								<span class="item2" @click="toggleDuigou('radio03Check',1)">校内插班补课<i v-if="classStandardCheck.radio03Check[1].check" class="ico-init ico-duigou2"></i></span>
								<span class="item2" @click="toggleDuigou('radio03Check',2)">跨校插班补课<i v-if="classStandardCheck.radio03Check[2].check" class="ico-init ico-duigou2"></i></span>
								<span class="item2">也计算入课耗</span>
							</div>
						</div>
						<!--单选四-->
						<div class="radio_block">
							<el-radio class="radio" @change="resetOther" v-model="costGradesDate.classStandard.radioId" label="4">
								每次到课<input type="text" v-model="classStandardRadio[9].radioInput" @focus="changeRadio(4)" maxlength="8" @blur="inputBlur(9)"/>人 ,
								<input type="text"  v-model="classStandardRadio[10].radioInput" @focus="changeRadio(4)" maxlength="8" @blur="inputBlur(10)"/>元; 
								每加一人 ,加<input type="text"  v-model="classStandardRadio[11].radioInput" @focus="changeRadio(4)" maxlength="8" @blur="inputBlur(11)"/>元; 
								每减一人 ,扣<input type="text"  v-model="classStandardRadio[12].radioInput" @focus="changeRadio(4)" maxlength="8" @blur="inputBlur(12)"/>元; 
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
						<span class="col">教师类型</span>
						<span class="item2" v-for="(ele,index) in teacherTypeDate" @click="toggleShow(teacherTypeDate,index)" :key="index">{{ele.name}}<i v-if="ele.check" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<span class="col">教师级别</span>
						<span class="item2" v-for="(ele,index) in teacherLevelDate" @click="toggleShow(teacherLevelDate,index)" :key="index">{{ele.name}}<i v-if="ele.check" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<span class="col">适用班型</span>
						<span class="item2" v-for="(ele,index) in applyStandardDate" @click="toggleShow(applyStandardDate,index)" :key="index">{{ele.name}}<i v-if="ele.check" class="ico-init ico-duigou2"></i></span>
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
	export default {
		data() {
			return {
				costGradesDate:{//班级课教师 · 代课费标准传给父级数据
					classStandard:{//代课标准
						id:'1',//代课标准ID
						radioId:'1',//标识选的那个单选按钮
					},
					teacherType:[],//教师类型
					teacherLevel:[],//教师级别
					applyStandard:[],//适用班型
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
				applyStandardDate:[//适用班型数据
					{id:0,name:'不限',check:false},
					{id:0,name:'精品班',check:false},
					{id:0,name:'提升班',check:false},
					{id:0,name:'培优班',check:false}
				]
				
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
                    	cValue02 = {}
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
                    	cValue02 = {}
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
                    	cValue04 = [];
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
				
			}
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
				this.costGradesDate.applyStandard = [];//适用班型
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
                this.applyStandardDate.map((ele,index)=>{
                	if (ele.check) {
                		this.costGradesDate.applyStandard.push(ele)
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
		}
	}
</script>