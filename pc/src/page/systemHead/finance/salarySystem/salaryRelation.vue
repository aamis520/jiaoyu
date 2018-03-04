<style lang="less" scoped="scoped">
	@color :#31C17B;
	@font12: 12px;
	@font14: 14px;
	@font16: 16px;
	*{
		user-select: none;
	}
	.mod-w {
		color: @color;
		.ico-right {
			float: right;
			width: 25px;
			height: 25px;
			margin-top: 10px;
		}
	}
	
	.financeTitle {
		box-sizing: border-box;
		color: @color;
		padding-bottom: 17px;
		border-bottom: 1px dashed #dbdbdb;
	}
	
	.personCheck {
		display: flex;
		flex-wrap: wrap;
		.greenRight {
			cursor: pointer;
			padding-right: 60px;
			position: relative;
			height: 50px;
			line-height: 50px;
			padding-top: 10px;
			.ico-duigou2 {
				position: absolute;
				right: 40px;
				bottom: 17px;
			}
		}
	}
	
	.salaryRelationRadio {
		padding-right: 60px;
		height: 50px;
		line-height: 50px;
		padding-top: 10px;
		display: inline-block;
		input[type=text] {
			border: none;
			border-bottom: 1px solid #31C17B;
			outline: none;
			width: 50px;
			padding-left: 2px;
			font-size: 14px;
			text-align: center;
		}
	}
	
	.container {
		color: #5a5e66;
	}
	
	.container {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.item {
			box-sizing: border-box;
			padding-top: 20px;
			display: block;
			padding-right: 60px;
			margin-right: 20px;
			position: relative;
			.calculationUnit {
				position: absolute;
				top: 40px;
				left: -93px;
				z-index: 100;
			}
			.ico-init {
				position: absolute;
				width: 19px;
				height: 19px;
			}
			.icoAdjust1 {
				right: 35px;
				bottom: 1px;
			}
			.icoAdjust {
				width: 23.5px;
				height: 23.5px;
				right: 10px;
				bottom: -2px;
			}
			.it1 {
				height: 22px;
				line-height: 22px;
				border-radius: 22px;
				color: #303030;
				font-size: @font14;
				background-color: #ebebeb;
				padding: 2px 15px;
				border-radius: 15px;
			}
			input[type="text"] {
				border: none;
				border-bottom: 1px solid @color;
				outline: none;
				width: 76px;
				padding-left: 2px;
				font-size: @font14;
				cursor: pointer;
			}
		}
	}
	
	.mod-w:last-child {
		margin-bottom: 50px;
		.icoSave {
			position: relative;
			top: 5px;
		}
		.financeSave {
			position: absolute;
			top: 0;
			right: 20px;
			height: 50px;
			line-height: 50px;
			.icoSave {
				width: 25px;
				height: 25px;
			}
		}
	}
&::-webkit-input-placeholder {
	color: #bfbfbf;
}
&:-moz-placeholder {
	color: #bfbfbf;
}
&::-moz-placeholder {
	color: #bfbfbf;
}
&:-ms-input-placeholder {
	color: #bfbfbf;
}
</style>
<style lang="less">
	.salaryRelationRadio {
		.el-radio__input.is-checked+.el-radio__label {
			color: #5a5e66;
		}
	}
</style>

<template>
	<div class="salaryRelation">
		<div class="mod-w radius">
			薪酬体系 · 薪资关联
			<font-tooltip :parentDate="sendChildTipDate[0]"></font-tooltip>
		</div>
		<div class="common-w">
			<div class="financeTitle">
				个人信息
			</div>
			<div class="container">
				<div class="personCheck">
					<span class="greenRight" @click.stop.prevent="toggleShow(sendJavaData.personal_info,index)" v-for="(ele,index) in sendJavaData.personal_info" :key="index">{{ele.ch_name}}<i class="ico-init ico-duigou2" v-if="ele.status === 'enable'"></i></span>
				</div>
			</div>
		</div>
		<div class="common-w">
			<div class="financeTitle">
				聘用信息
			</div>
			<div class="container">
				<div class="personCheck">
					<div class="personCheck">
						<span class="greenRight" @click.stop.prevent="toggleShow(sendJavaData.employ_info,index)" v-for="(ele,index) in sendJavaData.employ_info" :key="index">{{ele.ch_name}}<i class="ico-init ico-duigou2" v-if="ele.status === 'enable'"></i></span>
					</div>
				</div>
			</div>
		</div>
		<div class="common-w">
			<div class="financeTitle">
				教学信息
			</div>
			<div class="container">
				<div class="personCheck">
					<div class="personCheck">
						<span class="greenRight" @click.stop.prevent="toggleShow(sendJavaData.teaching_info,index)" v-for="(ele,index) in sendJavaData.teaching_info" :key="index">{{ele.ch_name}}<i class="ico-init ico-duigou2" v-if="ele.status === 'enable'"></i></span>
					</div>
				</div>
			</div>
		</div>
		<div class="common-w">
			<div class="financeTitle">
				薪酬计算
			</div>
			<div class="container">
				<span class="salaryRelationRadio">
                    <el-radio class="radio" v-model="radioModel" label="1" @change="toggleRadio">每月一日至月底 </el-radio>
                </span>
				<span class="salaryRelationRadio">
                    <el-radio class="radio" v-model="radioModel" label="2" @change="toggleRadio">每月<input type="text" v-model="sendJavaData.start_date" @focus="inputFocus" @blur="inputBlur(sendJavaData.start_date,1)" maxlength="2" placeholder="1" />日至下月<input type="text" v-model="sendJavaData.end_date" @focus="inputFocus" @blur="inputBlur(sendJavaData.end_date,2)" maxlength="2" placeholder="28" />日</el-radio>
                </span>
			</div>
		</div>
		<div class="common-w">
			<div class="financeTitle">
				薪酬组成
			</div>
			<div class="container">
				<span class="item" v-for="(ele,index) in sendJavaData.salary_component">
					<span class="it1">{{ele.ch_name}}</span>
					<span v-if="subEle.status == 'enable'" v-for="(subEle,subIndex) in ele.account_unit">{{subEle.ch_name}}</span>
					<i class="ico-init ico-error icoAdjust1" @click="delSalaryComponent(sendJavaData.salary_component,index)"></i>
					<i class="ico-init ico-setup icoAdjust" @click="showCalculationUnit('nowEditColComponent',index)"></i>
					<calculation-Unit @listenToChild="showMsgChildComponent" :parentData="ele.account_unit" v-if="nowEditColComponent==index"></calculation-Unit>
				</span>
				<span class="item">
					<input type="text" v-model="addSalaryComponent" @focus="focusSalaryComponent" @blur="blurSalaryComponent(sendJavaData.salary_component,addSalaryComponent,'addSalaryComponent')" maxlength="6" placeholder="自定义添加"/>
				</span>
			</div>
		</div>
		<div class="common-w">
			<div class="financeTitle">
				薪酬扣减·设置
			</div>
			<div class="container">
				<span class="item" v-for="(ele,index) in sendJavaData.salary_deduct">
					<span class="it1">{{ele.ch_name}}</span>
					<span v-if="subEle.status == 'enable'" v-for="(subEle,subIndex) in ele.account_unit">{{subEle.ch_name}}</span>
					<i class="ico-init ico-error icoAdjust1" @click="delSalaryComponent(sendJavaData.salary_deduct,index)"></i>
					<i class="ico-init ico-setup icoAdjust" @click="showCalculationUnit('nowEditColDeduct',index)"></i>
					<calculation-Unit @listenToChild="showMsgChildDeduct" :parentData="ele.account_unit" v-if="nowEditColDeduct==index"></calculation-Unit>
				</span>
				<span class="item">
					<input type="text" v-model="addSalaryDeduct"  @focus="focusSalaryComponent" @blur="blurSalaryComponent(sendJavaData.salary_deduct,addSalaryDeduct,'addSalaryDeduct')" maxlength="6" placeholder="自定义添加"/>
				</span>
			</div>
		</div>
		<div class="mod-w">
			<span class="financeNotice">
        		备&nbsp;&nbsp;&nbsp;注:&nbsp;&nbsp;&nbsp;&nbsp;设置完成后请点击右侧的“ <i class="ico-init ico-duigou icoSave"></i> ”保存
        	</span>
			<div class="financeSave" @click.stop.prevent="sendJavaBack"><i class="ico-init ico-duigou icoSave"></i></div>
		</div>
		{{radioTime}}
	</div>
</template>

<script>
	import contapi from '@commonJS/const'
	import calculationUnit from '../subComponents/calculationUnit'
	import fontTooltip from '@components/fontTooltip'
	export default {
		data() {
			return {
				//提示框
				sendChildTipDate: [{
					index: 0, //只是方便父级使用,子集没用
					title: '薪酬体系 · 薪资关联', //父级方便看当前定义的那个tip，子集没用
					width: '', //修改宽度，可为空默认350，高度自适应
					contentFont: '设置与员工工资档位相关的信息' //展示的文字
				}],
				radioModel:'1',//单选model
				sendJavaData:{},//从后台拿到的数据
				addSalaryComponent:'',//自定义添加 薪酬组成输入框的modle
				addSalaryDeduct:'',//自定义添加 薪酬扣减输入框的modle
				nowEditColComponent: -1, //当前编辑的 薪酬组成
				nowEditColDeduct: -1, //当前编辑的 薪酬扣减
				//初始开始结束时间
				start_date:'',
				end_date:'',
			}
		},
		mounted() {
			this.getSalaryRelationData()
		},
		computed: {
			//第一次初始化请求未结束this.sendJavaData.start_date是underfind
			radioTime(){
				if (!this.sendJavaData.start_date) {
					this.sendJavaData.start_date = ''
					this.sendJavaData.end_date = ''
				}
			}
		},
		components: {
			'calculation-Unit': calculationUnit,
			'font-tooltip': fontTooltip,
		},
		methods: {
			//初始化数据
			getSalaryRelationData(){
	    		let sendDate={
	    			accessToken:this.$ls.get('USER_INFO').accessToken,
    				headSchoolId:this.$ls.get('USER_INFO').headSchoolId
	    		}
	    		let url = contapi.finance + 'v1/finance/salary/getSalaryRelationByHeadSchoolId'
				this.axios.post(url,sendDate).then((res) => {
					if(res.messages.data){
						this.sendJavaData=res.messages.data
						this.radioModel = this.sendJavaData.is_all_month ? '1':'2'
					}
				}).catch(function(error) {
					console.log(error)
				})
	    	},
			//切换多选对号显示与隐藏
			toggleShow(ele,index) {
				if (ele[index].status == 'enable') {
					ele[index].status = 'disable'
				}else{
					ele[index].status = 'enable'
				}
			},
			//薪酬计算单选切换
			toggleRadio(val){
				if (val==1) {//点击第一个时清空输入框
					this.sendJavaData.start_date = ''
					this.sendJavaData.end_date = ''
					this.sendJavaData.is_all_month = true
				}else{
					this.sendJavaData.is_all_month = false
				}
			},
			//薪酬计算当点击第二个单选下的输入框时，让当前单选按钮处于选中状态
			inputFocus() { //点击输入框改变，改变单选选择状态
				this.radioModel = '2'
				this.sendJavaData.is_all_month = false
			},
			//薪酬计算输入框失去焦点进行验证
			inputBlur(num, index) {
				if(num == '') { //如果不存在值就不需要验证啦
					return false;
				}
				if(isNaN(num)) { //不是数字
					if(index == 1) {
						this.sendJavaData.start_date = ''
					} else {
						this.sendJavaData.end_date = ''
					}
					this.$message({
						type: 'info',
						message: '输入不是数字!'
					});
				} else {
					if(1 <= num && num <= 28) {
						return
					} else {
						if(index == 1) {
							this.sendJavaData.start_date = ''
						} else {
							this.sendJavaData.end_date = ''
						}
						this.$message({
							type: 'info',
							message: '输入不合法，请输入1-28之间数字!'
						});
					}
				}

			},
			//薪酬组成新增
			focusSalaryComponent(){
				this.closeSubCom()
			},
			blurSalaryComponent(parentEle,value,str){
				if (value != '') {
					let obj = {
						en_name: (parentEle.length-1).toString(),
					    ch_name: value,
					    status:"enable",
					    account_unit: [
					      {en_name: "1",ch_name: "月", status: "enable"},
					      {en_name: "2",ch_name: "天", status: "disable"},
					      {en_name: "3",ch_name: "次", status: "disable"},
					      {en_name: "4",ch_name: "课时", status: "disable"},
					      {en_name: "5",ch_name: "小时", status: "disable"},
					    ],
					}
					parentEle.push(obj)
				}
				if (str=='addSalaryComponent') {//清空
					this.addSalaryComponent = ''
				} else{
					this.addSalaryDeduct=''
				}
			},
			//薪酬组成删除
			delSalaryComponent(ele,index){
				ele.splice(index,1)
			},
			//点击显示计算单位
			showCalculationUnit(ele,index) {
				this.closeSubCom()
				if (ele=="nowEditColComponent") {
					this.nowEditColComponent=index
				} else{
					this.nowEditColDeduct=index
				}
			},
			//关闭计算单位获取到的数据
			showMsgChildComponent(data) {
				this.sendJavaData.salary_component[this.nowEditColComponent].account_unit=data
				this.closeSubCom()
			},
			showMsgChildDeduct(data){
				this.sendJavaData.salary_deduct[this.nowEditColDeduct].account_unit=data
				this.closeSubCom()
			},
			//关闭计算单位
			closeSubCom(){
				this.nowEditColComponent=-1
				this.nowEditColDeduct=-1
			},
			//新增修改后传给后台的数据
			sendJavaBack(){
				if (!this.sendJavaData.is_all_month) {
					if (this.sendJavaData.start_date == '' || this.sendJavaData.end_date == '') {
						this.$message({
							type: 'warning',
							message: '薪酬计算未输入值！'
						});
						return false;
					}
				}
				let sendDate={
					accessToken:this.$ls.get('USER_INFO').accessToken,
	    			salaryRelationJsonStr:this.sendJavaData
	    		}
	    		let url = contapi.finance + 'v1/finance/salary/saveSalaryRelation'
				this.axios.post(url,sendDate).then((res) => {
					this.getSalaryRelationData()
					this.$message({
						type: 'success',
						message: '保存成功！'
					});
				}).catch(function(error) {
					console.log(error)
				})
			}
		}
	}
</script>