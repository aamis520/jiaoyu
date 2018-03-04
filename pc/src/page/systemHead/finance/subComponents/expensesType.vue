<!--
	支出类型
	使用方法
	1,父级引用，声明组件
	import expensesType from './expensesType'
	'expenses-type':expensesType
	<expenses-type v-on:listenToChild="showMsgChild"></expenses-type>
	2，父级接受
	showMsgChild(data){console.log(data)}
-->
<style lang="less" scoped="scoped">
	.expensesTypeBox{
		width:800px;
		padding:15px 20px;
		box-sizing:border-box;
		min-height:50px;
		border-radius:5px;
		background-color:#353735;
		position:relative;
		.ico-duigou{
			position:absolute;
			right:15px;
			bottom:10px;
			width: 25px;
			height: 25px;
		}
		.zuoyouTotal{
			display:flex;
			padding:5px 0;
			border-bottom:1px solid #535553;
			&:last-of-type{
				border:none;
			}
		}
		.expensesTypeBoxLeft{
			width:100px;
		}
		.expensesTypeBoxRight{
			flex:1;
		}
	}
	.jiantou{
		border:10px solid transparent;
		border-bottom-color:#353735;
		margin-left:40px;
		display:block;
		width:0;
		height:0;
	}
</style>
<style lang="less">
	.expensesTypeBox{
		.el-checkbox__label {
		    padding-left:5px;
		}
		.el-checkbox__input.is-checked + .el-checkbox__label {
		    color:#FFFFFF;
		}
		.el-checkbox__input.is-checked .el-checkbox__inner {
		    background-color:#31C17B;
		    border-color:#31C17B;
		}
		.el-checkbox {
			margin-right:15px;
			width:90px;
			padding:5px 0;
			color:#FFFFFF;
		}
		.el-checkbox + .el-checkbox {
		    margin-left:0px;
		}
	}
	.expensesTypeBoxLeft{
		.el-checkbox__input.is-indeterminate .el-checkbox__inner {
		    background-color:#31C17B;
		    border-color:#31C17B;
		}
		.el-checkbox__inner:hover {
		    border-color:#31C17B;
		}
	}
	.expensesTypeBoxRight{
		.el-checkbox__inner {
		    border-radius:100%;
		}
	}
</style>
<template>
	<div class="expensesType">
		<span class="jiantou" :style="styleDate"></span>
		<div class="expensesTypeBox">
			<div class="zuoyouTotal" v-for="(ele,key,index) in incomes" :key="index">
				<div class="expensesTypeBoxLeft">
					<el-checkbox :indeterminate="shujuDate[index].isIndeterminate" v-model="shujuDate[index].checkAll" @change="handleCheckAllChange(key,index)">{{key}}</el-checkbox>
				</div>
				<div class="expensesTypeBoxRight">
					<el-checkbox-group v-model="shujuDate[index].checkedIndex" @change="handleCheckedCitiesChange(key,index)">
						<el-checkbox v-for="(income,subIndex) in ele" :label="income.ch_name" :key="subIndex">{{income.ch_name}}</el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
			<i class="ico-init ico-duigou" @click.stop.prevent="expensesType()"></i>
		</div>
	</div>
</template>

<script>
import common from '@commonJS/common'
const incomeOptions = {
	'人员支出':[
		{type:'1',en_name:'1',ch_name:'员工工资',status:"enable"},
		{type:'1',en_name:'2',ch_name:'社保费用',status:"enable"},
		{type:'1',en_name:'3',ch_name:'发放福利',status:"enable"},
		{type:'1',en_name:'4',ch_name:'招聘费用',status:"enable"},
		{type:'1',en_name:'5',ch_name:'招生奖金',status:"enable"},
		{type:'1',en_name:'6',ch_name:'续费奖金',status:"enable"},
		{type:'1',en_name:'7',ch_name:'聘请外教',status:"enable"},
		{type:'1',en_name:'8',ch_name:'餐补费用',status:"enable"},
		{type:'1',en_name:'9',ch_name:'车补费用',status:"enable"},
		{type:'1',en_name:'10',ch_name:'话费补助',status:"enable"},
		{type:'1',en_name:'11',ch_name:'员工服装',status:"enable"},
		{type:'1',en_name:'12',ch_name:'加班补助',status:"enable"},
		{type:'1',en_name:'13',ch_name:'婚丧礼金',status:"enable"}
	],
	'教学支出':[
		{type:'2',en_name:'1',ch_name:'购买教材',status:"enable"},
		{type:'2',en_name:'2',ch_name:'印刷教材',status:"enable"},
		{type:'2',en_name:'3',ch_name:'学生奖品',status:"enable"},
		{type:'2',en_name:'4',ch_name:'学生活动',status:"enable"},
		{type:'2',en_name:'5',ch_name:'员工培训',status:"enable"},
		{type:'2',en_name:'6',ch_name:'教学仪器',status:"enable"},
		{type:'2',en_name:'7',ch_name:'教学耗材',status:"enable"},
	],
	'房租水电':[
		{type:'3',en_name:'1',ch_name:'房租费',status:"enable"},
		{type:'3',en_name:'2',ch_name:'水电费',status:"enable"},
		{type:'3',en_name:'3',ch_name:'物业费',status:"enable"},
	],
	'学生退费':[
		{type:'4',en_name:'1',ch_name:'学生退费',status:"enable"},
	],
	'公务接待':[
		{type:'5',en_name:'1',ch_name:'差旅费',status:"enable"},
		{type:'5',en_name:'2',ch_name:'差旅补助',status:"enable"},
		{type:'5',en_name:'3',ch_name:'接待宴请',status:"enable"},
	],
	'办公支出':[
		{type:'6',en_name:'1',ch_name:'办公设备',status:"enable"},
		{type:'6',en_name:'2',ch_name:'办公耗材',status:"enable"},
		{type:'6',en_name:'3',ch_name:'办公易耗品',status:"enable"},
		{type:'6',en_name:'4',ch_name:'话费支出',status:"enable"},
		{type:'6',en_name:'5',ch_name:'汽车油料',status:"enable"},
		{type:'6',en_name:'6',ch_name:'车辆购置',status:"enable"},
	],
	'后勤支出':[
		{type:'7',en_name:'1',ch_name:'装修费',status:"enable"},
		{type:'7',en_name:'2',ch_name:'维修费',status:"enable"},
		{type:'7',en_name:'3',ch_name:'工装费',status:"enable"},
		{type:'7',en_name:'4',ch_name:'卫生用具',status:"enable"},
		{type:'7',en_name:'5',ch_name:'伙食补助',status:"enable"},
	],
	'市场推广':[
		{type:'8',en_name:'1',ch_name:'宣传页册',status:"enable"},
		{type:'8',en_name:'2',ch_name:'宣传品',status:"enable"},
		{type:'8',en_name:'3',ch_name:'活动推广',status:"enable"},
		{type:'8',en_name:'4',ch_name:'广告牌',status:"enable"},
		{type:'8',en_name:'5',ch_name:'网络推广',status:"enable"},
		{type:'8',en_name:'6',ch_name:'媒体广告',status:"enable"},
		{type:'8',en_name:'7',ch_name:'兼职市场',status:"enable"},
	],
	'固定资产':[
		{type:'9',en_name:'1',ch_name:'办公桌椅',status:"enable"},
		{type:'9',en_name:'2',ch_name:'办公设备',status:"enable"},
		{type:'9',en_name:'3',ch_name:'共用器具',status:"enable"},
		{type:'9',en_name:'4',ch_name:'教学座椅',status:"enable"},
		{type:'9',en_name:'5',ch_name:'教学设备',status:"enable"},
		{type:'9',en_name:'6',ch_name:'教学房产',status:"enable"},
	],
	'其他支出':[
		{type:'10',en_name:'1',ch_name:'关系维护',status:"enable"},
		{type:'10',en_name:'2',ch_name:'节日礼品',status:"enable"},
		{type:'10',en_name:'3',ch_name:'节日礼金',status:"enable"},
		{type:'10',en_name:'4',ch_name:'工伤医疗',status:"enable"},
		{type:'10',en_name:'5',ch_name:'学生疗伤',status:"enable"},
		{type:'10',en_name:'6',ch_name:'团队活动',status:"enable"},
		{type:'10',en_name:'7',ch_name:'场地租金',status:"enable"},
	],
};
export default{
	props:{
		parentDate:{}//接受父级传过来的值,控制位置
	},
	data(){
		return{
			incomes:incomeOptions,//总数据
			shujuDate:[//操作数据
				{name:'人员支出',checkedIndex:[],checkAll:false,isIndeterminate:false},
				{name:'教学支出',checkedIndex:[],checkAll:false,isIndeterminate:false},
				{name:'房租水电',checkedIndex:[],checkAll:false,isIndeterminate:false},
				{name:'学生退费',checkedIndex:[],checkAll:false,isIndeterminate:false},
				{name:'公务接待',checkedIndex:[],checkAll:false,isIndeterminate:false},
				{name:'办公支出',checkedIndex:[],checkAll:false,isIndeterminate:false},
				{name:'后勤支出',checkedIndex:[],checkAll:false,isIndeterminate:false},
				{name:'市场推广',checkedIndex:[],checkAll:false,isIndeterminate:false},
				{name:'固定资产',checkedIndex:[],checkAll:false,isIndeterminate:false},
				{name:'其他支出',checkedIndex:[],checkAll:false,isIndeterminate:false},
			],
			getSendJava:[],//传给后台的数据,第一次整合数据,抽取选中的shujuDate
			getSendJavaNext:{}//传给后台的数据,第二次整合数据,抽取选中的incomes
		}
	},
	methods:{
		handleCheckAllChange(getkey,index) {
			let all = [];//存放选中的数据
			function* entries(obj) {
			   for (let key of Object.keys(obj)) {
			     yield [key, obj[key]];
			   }
			}
			for (let [key, value] of entries(this.incomes)) {
				if (key==getkey) {
					for (let [key1, value1] of entries(value)) {
					    all.push(value1.ch_name)
					}
				}
			}
			this.shujuDate[index].checkedIndex = this.shujuDate[index].checkAll ? all : [];
			this.shujuDate[index].isIndeterminate = false;
		},
		handleCheckedCitiesChange(getkey,index) {
			function* entries(obj){
				for(let key of Object.keys(obj)){
					yield [key,obj[key]];
				}
			}
			for (let [key,value] of entries(this.incomes)) {
				if (key==getkey) {
					this.shujuDate[index].checkAll = this.shujuDate[index].checkedIndex.length === value.length;
					this.shujuDate[index].isIndeterminate = this.shujuDate[index].checkedIndex.length>0 && this.shujuDate[index].checkedIndex.length < value.length;
				}
			}
		},
		expensesType(){
			this.getSendJava=[];//初始化,获取选中的label
			this.shujuDate.map((ele,index)=>{
				if (ele.checkedIndex.length>0) {
					this.getSendJava.push(ele)
				}
			})
			//根据getSendJava，获取getSendJavaNext
			function* entries(obj) {
				for (let key of Object.keys(obj)) {
					yield [key,obj[key]];
				}
			}
			for (let [key,value] of entries(this.incomes)) {
				for (let [key1, value1] of entries(value)) {
					this.getSendJava.map((ele,index)=>{
						if (ele.name==key) {
							if (!(this.getSendJavaNext[ele.name] instanceof Array)) {
								this.getSendJavaNext[ele.name]=[]
							}
							ele.checkedIndex.map((subEle,subIndex)=>{
								if (subEle==value1.ch_name) {
									this.getSendJavaNext[ele.name].push(value1)
								}
							})
						}
					})
                }
			}
			//去除重复
			this.getSendJava.map((delEle,delIndex)=>{
				this.getSendJavaNext[delEle.name] = common.deleChongfu(this.getSendJavaNext[delEle.name])
			})
			this.$emit("listenToChild",this.getSendJavaNext)
		}
	},
	computed:{
		styleDate(){
			let obj={}
			obj={
				'margin-left':this.parentDate.left
			}
			return obj
		}
	},
	mounted(){//回显
		this.parentDate.data.map((parentEle,parentIndex)=>{
			this.shujuDate.map((ele,index)=>{
				if (parentEle.name == ele.name) {
					ele.checkedIndex = parentEle.checkedIndex
				}
			})
		})
		//设置全选半全选显示
		function* entries(obj){
			for(let key of Object.keys(obj)){
				yield [key,obj[key]];
			}
		}
		for (let [key,value] of entries(this.incomes)) {
			this.shujuDate.map((ele,index)=>{
				if (ele.name == key) {
					ele.checkAll = ele.checkedIndex.length === value.length;
					ele.isIndeterminate = ele.checkedIndex.length >0 && ele.checkedIndex.length < value.length;
				}
			})
		}
	}
}
</script>

