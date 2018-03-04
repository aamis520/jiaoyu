<!--
	计算单位
	使用方法
	1,父级引用，声明组件
	import calculationUnit from './calculationUnit'
	'calculation-Unit':calculationUnit
	<calculation-Unit @listenToChild="showMsgChild" :parentData="ele.account_unit" ></calculation-Unit>
	2，父级接受
	showMsgChild(data){console.log(data)}
	.item{
		position: relative;
		.incomeType{
			position: absolute;
			top: 40px;
    		left: -300px;
    		z-index: 100;
		}
	}
-->
<style lang="less" scoped="scoped">
	.unitBoxBg{
		width: 400px;
		padding:15px 25px;
		box-sizing: border-box;
		min-height: 50px;
		border-radius: 5px;
		background-color: #353735;
	}
	.jiantou{
		border: 10px solid transparent;
		border-bottom-color:#353735;
		margin-left: 205px;
		display: block;
		width: 0;
		height: 0;
	}
	.danwei{
		padding-bottom: 10px;
		color: #FFFFFF;
	}
	.calculationUnitBox{
		display: flex;
		position: relative;
		padding-bottom: 10px;
	}
</style>
<style lang="less">
	.calculationUnitBox{
		.el-radio__input.is-checked + .el-radio__label {
		    color: #FFFFFF;
		}
		.el-radio {
    		padding-top: 4px;
    		color: #FFFFFF;
    	}
	}
</style>
<template>
	<div class="calculationUnit">
		<span class="jiantou"></span>
		<div class="unitBoxBg">
			<div class="danwei">计算单位</div>
			<div class="calculationUnitBox">
				<el-radio class="radio" v-model="calculationNum" v-for="(ele,index) in calculationUnitDate" :label="index" @change="calculationUnit" :key="index" >{{ele.ch_name}}</el-radio>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		parentData:{}
	},
	data(){
		return{
			calculationNum:0,//初始化话显示
			calculationUnitDate:[],
		}
	},
	mounted() {
		this.calculationUnitDate = this.parentData
		this.calculationUnitDate.map((ele,index)=>{
			if (ele.status == 'enable') {
				this.calculationNum = index
			}
		})
	},
	computed:{
	},
	methods: {
		calculationUnit(index){
			this.calculationUnitDate.map((ele,parentIndex)=>{
				ele.status = 'disable'
			})
			this.calculationUnitDate[index].status = 'enable'
			this.$emit("listenToChild",this.calculationUnitDate)
		}
	}
}
</script>

