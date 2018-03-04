<!--
	收入类型
	使用方法
	1,父级引用，声明组件
	import incomeType from './incomeType'
	'income-type':incomeType
	<income-type v-if="incomeTypeShow" :parentDate="classIncomeExpensesData" v-on:listenToChild="showIncomeTypeMsg"></income-type>
	2，父级接受
	showMsgChild(data){console.log(data)}
-->
<style lang="less" scoped="scoped">
	.incomeTypeBox{
		width: 800px;
		padding:15px 20px;
		box-sizing: border-box;
		min-height: 50px;
		border-radius: 5px;
		background-color: #353735;
		display: flex;
		position: relative;
		.ico-duigou{
			position: absolute;
			right: 15px;
			bottom: 10px;
			width: 25px;
			height: 25px;
		}
		.incomeTypeBoxLeft{
			width: 100px;
		}
		.incomeTypeBoxRight{
			flex: 1;
		}
	}
	.jiantou{
		border: 10px solid transparent;
		border-bottom-color:#353735;
		margin-left: 40px;
		display: block;
		width: 0;
		height: 0;
	}
</style>
<style lang="less">
	.incomeTypeBox{
		.el-checkbox__label {
		    padding-left: 5px;
		}
		.el-checkbox__input.is-checked + .el-checkbox__label {
		    color: #FFFFFF;
		}
		.el-checkbox__input.is-checked .el-checkbox__inner {
		    background-color: #31C17B;
		    border-color: #31C17B;
		}
		.el-checkbox {
			margin-right: 15px;
			width: 90px;
			padding: 3px 0;
			color: #FFFFFF;
		}
		.el-checkbox + .el-checkbox {
		    margin-left: 0px;
		}
	}
	.incomeTypeBoxLeft{
		.el-checkbox__input.is-indeterminate .el-checkbox__inner {
		    background-color: #31C17B;
		    border-color: #31C17B;
		}
		.el-checkbox__inner:hover {
		    border-color: #31C17B;
		}
	}
	.incomeTypeBoxRight{
		.el-checkbox__inner {
		    border-radius: 100%;
		}
	}
</style>
<template>
	<div class="incomeType">
		<span class="jiantou" :style="styleDate"></span>
		<div class="incomeTypeBox">
			<div class="incomeTypeBoxLeft">
				<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"  @change="handleCheckAllChange">收入类型</el-checkbox>
			</div>
			<div class="incomeTypeBoxRight">
				<el-checkbox-group v-model="checkedIndex" @change="handleCheckedCitiesChange">
					<el-checkbox v-for="(income,index) in incomes" :label="income.ch_name" :key="index">{{income.ch_name}}</el-checkbox>
				</el-checkbox-group>
			</div>
			<i class="ico-init ico-duigou" @click.stop.prevent="incomeType()"></i>
		</div>
	</div>
</template>

<script>
import common from '@commonJS/common'
const incomeOptions = [
	{en_name:'1',ch_name:'课程学费',status:"enable"},
	{en_name:'2',ch_name:'书本教程',status:"enable"},
	{en_name:'3',ch_name:'信息服务',status:"enable"},
	{en_name:'4',ch_name:'报名费',status:"enable"},
	{en_name:'5',ch_name:'服装费',status:"enable"},
	{en_name:'6',ch_name:'竞赛费',status:"enable"},
	{en_name:'7',ch_name:'大赛费',status:"enable"},
	{en_name:'8',ch_name:'游学费',status:"enable"},
	{en_name:'9',ch_name:'教室出租费',status:"enable"},
	{en_name:'10',ch_name:'住宿收入',status:"enable"},
	{en_name:'11',ch_name:'日杂收入',status:"enable"},
	{en_name:'12',ch_name:'其他费用',status:"enable"}
];
export default{
	props:{
		parentDate:{}//接受父级传过来的值
	},
	data(){
		return{
			checkAll: false,
	        checkedIndex: [],//选中的索引
	        checkedIncome: [],
			incomes: incomeOptions,
			isIndeterminate: false,//控制全选
		}
	},
	methods: {
		handleCheckAllChange(val) {
			let all = [];
			this.incomes.map((ele,index)=>{
				all.push(ele.ch_name)
			})
			this.checkedIndex = val ? all : [];
			
			this.isIndeterminate = false;
		},
		handleCheckedCitiesChange(value) {
			let checkedCount = value.length;
			this.checkAll = checkedCount === this.incomes.length;
			this.isIndeterminate = checkedCount > 0 && checkedCount < this.incomes.length;
		},
		incomeType(){
			this.checkedIndex.map((ele,index)=>{
				this.incomes.map((sub,subIndex)=>{
					if (sub.ch_name == ele) {
						this.checkedIncome.push(sub)
					}
				})
			})
			this.checkedIncome = common.deleChongfu(this.checkedIncome)
			this.$emit("listenToChild",this.checkedIncome)
		}
	},
	computed:{
		styleDate(){
			let obj={}
			obj={
				'margin-left':this.parentDate.left
			}
			return obj
		},
	},
	mounted(){//回显
		this.checkedIndex = this.parentDate.data
		this.checkAll = this.parentDate.data.length === this.incomes.length;
		this.isIndeterminate = this.parentDate.data.length  > 0 && this.parentDate.data.length < this.incomes.length;
	}
}
</script>

