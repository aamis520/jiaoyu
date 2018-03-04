<style lang="less" scoped>
	@color :#31C17B;
	@font12:12px;
	@font14:14px;
	@font16:16px;
	*{
		user-select: none;
	}
	.financeTitle{
		box-sizing: border-box;
		color: @color;
		padding-bottom: 17px;
		border-bottom: 1px dashed #dbdbdb;
	}
	.container{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.item,.item01,.item02,.item03{
			box-sizing: border-box;
			padding-top: 20px;
			display: block;
			padding-right: 60px;
			position: relative;
    		.it1{
			    height: 22px;
			    line-height: 22px;
			    border-radius: 22px;
			    color: #303030;
			    font-size: @font14;
			    float: left;
			}

			input[type="text"]{
			    border: none;
			    border-bottom: 1px solid @color;
			    outline: none;
			    width: 76px;
			    padding-left: 2px;
			    font-size: @font14;
			    cursor: pointer;
			}
		}
		.icoAdjust{
			position: absolute;
			right: 40px;
			bottom: 2px;
		}
		.con_p{
		    float: left;
		    height: 50px;
		    line-height: 50px;
		}
		.con_p:nth-child(3n-2){
			width: 415px;
		}
		.con_p:nth-child(3n-1){
			width: 250px;
		}
		.con_p:nth-child(3n){
			width: 270px;
		}
	}
	.mod-w{
		color: @color;
		.ico-right{
			float: right;
			width: 25px;
			height: 25px;
			margin-top: 10px;
		}
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
	.item01{
		position: relative;
		.incomeType,.expensesType{
			position: absolute;
			top: 40px;
    		left: -20px;
    		z-index: 100;
		}
	}
	.item02{
		position: relative;
		.incomeType,.expensesType{
			position: absolute;
			top: 40px;
    		left: -350px;
    		z-index: 100;
		}
	}
	.item03{
		position: relative;
		.incomeType,.expensesType{
			position: absolute;
			top: 40px;
    		left: -600px;
    		z-index: 100;
		}
	}
	.container{
		color: #5a5e66;
		padding-bottom: 50px;
	}
	.conXiugai{
		padding-bottom: 0;
	}
input{
	&:input-placeholder{
		border: solid 1px #0000ff;
	}
}
</style>
<style type="text/css" lang="less">
	.financeRemoveZero{
		.el-radio+.el-radio{
			margin-left: 0;
		}
		.el-radio{
			margin-right: 30px;
			padding-top: 17px;
			padding-bottom: 17px;
		}
		.el-radio__input.is-checked .el-radio__inner {
		    border-color: #31C17B;
		    background: #31C17B;
		}
		.el-radio__input.is-checked+.el-radio__label {
		    color: #5a5e66;
		}
	}
</style>
<template>
    <div>
        <div class="mod-w radius">
        	财务设置
        	<i class="ico-init ico-right" :class="controlShow[0].showToggle ? 'ico-cancel' : 'ico-edit'" @click.stop.prevent="financeEdit(0)"></i>
        </div>
        <div class="common-w">
        	<div class="financeTitle">
        		总部·分校·收入类型·设置
        	</div>
        	<div class="container">
				<span class="item" v-if="sendJavaData.income_types.length" v-for="(ele,index) in sendJavaData.income_types">
					<span class="it1">{{ele.ch_name}}</span><i v-if="controlShow[0].showToggle" @click.stop.prevent="delArraySub(sendJavaData.income_types,index)"  class="ico-init ico-error icoAdjust"></i>
				</span>
				<span :class="classIncomeExpensesData.classIndex==1 ? 'item01' : classIncomeExpensesData.classIndex==2 ? 'item02' : 'item03'">
					<input type="text" readonly="readonly" placeholder="自定义添加" @click.stop.prevent="showToggleTip($event,1)"/>
					<income-type v-if="controlShow[1].showToggle" :parentDate="classIncomeExpensesData" @listenToChild="showIncomeTypeMsg"></income-type>
				</span>
			</div>
        </div>
        <div class="common-w">
        	<div class="financeTitle">
        		总部·支出类型·设置
        	</div>
        	<div class="container">
        		<span class="item" v-if="sendJavaData.independent_expenditure.length" v-for="(ele,index) in sendJavaData.independent_expenditure">
					<span class="it1">{{ele.ch_name}}</span><i v-if="controlShow[0].showToggle"  class="ico-init ico-error icoAdjust" @click.stop.prevent="delArraySub(sendJavaData.independent_expenditure,index)"></i>
				</span>
				<span :class="classIncomeExpensesData.classIndex==1 ? 'item01' : classIncomeExpensesData.classIndex==2 ? 'item02' : 'item03'">
					<input type="text" readonly="readonly" placeholder="自定义添加" @click.stop.prevent="showToggleTip($event,2)"/>
					<expenses-type v-if="controlShow[2].showToggle"  :parentDate="classIncomeExpensesData" v-on:listenToChild="showExpensesTypeOrderMsg"></expenses-type>
				</span>
			</div>
        </div>
        <div class="common-w">
        	<div class="financeTitle">
        		分校·支出类型·设置
        	</div>
        	<div class="container">
        		<span class="item" v-if="sendJavaData.independent_expenditure_branch.length" v-for="(ele,index) in sendJavaData.independent_expenditure_branch">
					<span class="it1">{{ele.ch_name}}</span><i v-if="controlShow[0].showToggle"  class="ico-init ico-error icoAdjust" @click.stop.prevent="delArraySub(sendJavaData.independent_expenditure_branch,index)"></i>
				</span>
				<span :class="classIncomeExpensesData.classIndex==1 ? 'item01' : classIncomeExpensesData.classIndex==2 ? 'item02' : 'item03'">
					<input type="text" readonly="readonly" placeholder="自定义添加" @click.stop.prevent="showToggleTip($event,3)"/>
					<expenses-type v-if="controlShow[3].showToggle"  :parentDate="classIncomeExpensesData" v-on:listenToChild="showExpensesTypeCampusMsg"></expenses-type>
				</span>
			</div>
        </div>
        <div class="common-w">
			<div class="financeTitle">线上缴费 · 抹零 · 设置</div>
			<div class="financeRemoveZero">
				<el-radio v-model="sendJavaData.wiped_onlines_str" label="1">小于1元，抹零</el-radio>
	  			<el-radio v-model="sendJavaData.wiped_onlines_str" label="2">小于0.5元，抹零，大于0.5元小于1元，按1元收</el-radio>
	  			<el-radio v-model="sendJavaData.wiped_onlines_str" label="3">按实际金额收，最小单位为“角”</el-radio>
	  			<el-radio v-model="sendJavaData.wiped_onlines_str" label="4">最小收费单位，精确到个位数，小于5元按0元收，大于5元小于10元，按5元收。如：应收133元，按130元收；应收138元，按135元收</el-radio>
			</div>
		</div>
		<div class="common-w">
			<div class="financeTitle">线下缴费 · 抹零 · 设置</div>
			<div class="financeRemoveZero">
				<el-radio v-model="sendJavaData.wiped_down_str" label="1">小于1元，抹零</el-radio>
	  			<el-radio v-model="sendJavaData.wiped_down_str" label="2">小于0.5元，抹零，大于0.5元小于1元，按1元收</el-radio>
	  			<el-radio v-model="sendJavaData.wiped_down_str" label="3">按实际金额收，最小单位为“角”</el-radio>
	  			<el-radio v-model="sendJavaData.wiped_down_str" label="4">最小收费单位，精确到个位数，小于5元按0元收，大于5元小于10元，按5元收。如：应收133元，按130元收；应收138元，按135元收</el-radio>
			</div>
		</div>
		<div class="common-w">
			<div class="financeTitle">缴费规则 · 通告 · 本条为系统规则，无须设置
				<font-Tooltip :parentDate="sendChildTipDate[0]"></font-Tooltip>
			</div>
			<div class="container conXiugai">
				<p class="con_p">家长手机端只收全费，教师手机端可收定金或全费</p>
				<p class="con_p">跨校报名所缴费用财务归属上课校区</p>
				<p class="con_p">跨校转费的金额财务归属转入校区</p>
				<p class="con_p">跨校转班已耗费用归属转出校区，转出费用归属转入校区</p>
				<p class="con_p">跨校试听如收费财务归属试听校区</p>
				<p class="con_p">跨校补课如收费财务归属原校区</p>
				<div style="clear: both;"></div>
			</div>
		</div>
        <div class="mod-w">
        	<span class="financeNotice">
        		备&nbsp;&nbsp;&nbsp;注:&nbsp;&nbsp;&nbsp;&nbsp;设置完成后请点击右侧的“ <i class="ico-init ico-duigou icoSave"></i> ”保存
        	</span>
        	<div class="financeSave" @click.stop.prevent="sendJavaBack"><i class="ico-init ico-duigou icoSave"></i></div>
        </div>
    </div>
</template>
<script type="text/javascript">
import contapi from '@commonJS/const'
import fontTooltip from '@components/fontTooltip'
import incomeType from './subComponents/incomeType'
import expensesType from './subComponents/expensesType'
const font = `跨校报名，指新生在A校区咨询，在B校区缴费；或A校区在读生，报B校区课程的行为<br />跨校转班，指某学生由A校区某班，转入B校区某班的行为<br />跨校试听，指某学生在A校区咨询课程，到B校区试听的行为<br />跨校转费，指A校区的某学生把账户余额转到B校区的另一学生账户的行为<br />`;
export default {
    data() {
        return {
        	sendChildTipDate:[
				{
					index:0,//只是方便父级使用,子集没用
					title:'缴费规则 · 通告 · 本条为系统规则，无须设置',//父级方便看当前定义的那个tip，子集没用
					width:'',//修改宽度，可为空默认350，高度自适应
					contentFont:font//展示的文字
				}
			],
        	controlShow:[
        		{showToggle:false},//切换编辑状态
        		{showToggle:false},
        		{showToggle:false},
        		{showToggle:false}
        	],
        	sendJavaData:{//修改保存传给后台
        		id:'',//用于新增修改传给后台使用
				campus_id: '',//总校ID
				income_types:[] ,//总部·分校·收入类型·设置
				independent_expenditure: [],//总部·支出类型·设置
				independent_expenditure_branch: [],//分校·支出类型·设置
				wiped_onlines_str: '',//线上缴费 · 抹零 · 设置
				wiped_down_str: '',//线下缴费 · 抹零 · 设置
        	},
        	classIncomeExpensesData:{//控制弹出收入类型，支出类型数据
        		windowWidth:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,//屏幕宽度
        		classIndex:1,//控制弹出框位置1.2.3
        		left:'',//箭头位置
        		data:[],//当前选中的数据
        	}

        }
    },
    mounted(){
    	this.getFinanceData()
    },
    components: {
    	'font-Tooltip':fontTooltip,
    	'income-type':incomeType,
    	'expenses-type':expensesType
    },
    methods:{
    	getFinanceData(){
    		let sendDate={
    			accessToken:this.$ls.get('USER_INFO').accessToken,
    			campus_id:this.$ls.get('USER_INFO').headSchoolId
    		}
    		let url = contapi.finance + 'v1/finance/setting/getFinanceByCampusId'
			this.axios.post(url,sendDate).then((res) => {
				if(!res.messages.data) {
				} else {
					this.sendJavaData.income_types = res.messages.data.income_types == null ? [] : res.messages.data.income_types
					this.sendJavaData.independent_expenditure = res.messages.data.independent_expenditure == null ? [] : res.messages.data.independent_expenditure
					this.sendJavaData.independent_expenditure_branch = res.messages.data.independent_expenditure_branch == null ? [] : res.messages.data.independent_expenditure_branch
					this.sendJavaData.wiped_onlines_str = res.messages.data.wiped_onlines_str
					this.sendJavaData.wiped_down_str = res.messages.data.wiped_down_str
					this.sendJavaData.id = res.messages.data._id
					this.sendJavaData.campus_id = res.messages.data.campus_id
				}
			}).catch(function(error) {
				console.log(error)
			})
    	},
    	//展示收入类型
    	showToggleTip(e,index){
    		this.controlShow.map((ele,index)=>{
    			ele.showToggle=false;
    		})
    		//第一个弹出数据
    		this.classIncomeExpensesData.data=[];//初始化清空
    		if (index==1) {
    			this.sendJavaData.income_types.map((ele,index)=>{
    				this.classIncomeExpensesData.data.push(ele.ch_name)
    			})
			//第二个弹出数据
    		}else if(index==2 || index==3){
    			let mapData = index===2 ? this.sendJavaData.independent_expenditure : this.sendJavaData.independent_expenditure_branch;
    			let _this = this;
    			function creatDate(index,name,arrayName) {
    				if (typeof _this.classIncomeExpensesData.data[index] != 'object') {
						_this.classIncomeExpensesData.data[index]={
							name:name,
							checkedIndex:[]
						}
					}
					_this.classIncomeExpensesData.data[index].checkedIndex.push(arrayName)
    			}
    			mapData.map((ele,index)=>{
    				switch(parseInt(ele.type)){
    					case 1:
    						creatDate(parseInt(ele.type)-1,'人员支出',ele.ch_name)
    						break
    					case 2:
    						creatDate(parseInt(ele.type)-1,'教学支出',ele.ch_name)
    						break
    					case 3:
    						creatDate(parseInt(ele.type)-1,'房租水电',ele.ch_name)
    						break
    					case 4:
    						creatDate(parseInt(ele.type)-1,'学生退费',ele.ch_name)
    						break
    					case 5:
    						creatDate(parseInt(ele.type)-1,'公务接待',ele.ch_name)
    						break
    					case 6:
    						creatDate(parseInt(ele.type)-1,'办公支出',ele.ch_name)
    						break
    					case 7:
    						creatDate(parseInt(ele.type)-1,'后勤支出',ele.ch_name)
    						break
    					case 8:
    						creatDate(parseInt(ele.type)-1,'市场推广',ele.ch_name)
    						break
    					case 9:
    						creatDate(parseInt(ele.type)-1,'固定资产',ele.ch_name)
    						break
    					case 10:
    						creatDate(parseInt(ele.type)-1,'其他支出',ele.ch_name)
    						break
    				}
    			})
    		}
			//关闭所有弹出窗显示当前
			this.controlShow[index].showToggle=true;
    		this.commentShow(e)
    	},
    	commentShow(e){//控制弹出窗
    		let left = '';
    		if ((this.classIncomeExpensesData.windowWidth-1300)/2>0) {
    			left =e.clientX-(this.classIncomeExpensesData.windowWidth-1300)/2
    		} else{
    			left =e.clientX
    		}
    		if (left<=650) {
    			this.classIncomeExpensesData.classIndex = 1;
    			this.classIncomeExpensesData.left = '40px';
    		} else if(left >650 && left<960){
    			this.classIncomeExpensesData.classIndex = 2;
    			this.classIncomeExpensesData.left = '370px';
    		}else{
    			this.classIncomeExpensesData.classIndex = 3;
    			this.classIncomeExpensesData.left = '630px';
    		}
    	},
    	//接受收入类型传过来的值
    	showIncomeTypeMsg(data){
    		this.controlShow.map((ele,index)=>{
    			ele.showToggle=false;
    		})
    		//初始化
    		this.sendJavaData.income_types=[];
    		data.map((ele,index)=>{
    			this.sendJavaData.income_types.push(ele)
    		})
    	},
    	//总校获取到的数据
    	showExpensesTypeOrderMsg(data){
    		//初始化
    		this.sendJavaData.independent_expenditure=[];
    		this.controlShow.map((ele,index)=>{
    			ele.showToggle=false;
    		})
    		function* entries(obj) {
				for (let key of Object.keys(obj)) {
					yield [key,obj[key]];
				}
			}
			for (let [key,value] of entries(data)) {
				value.map((ele,index)=>{
	    			this.sendJavaData.independent_expenditure.push(ele)
	    		})
			}
    	},
    	//分校获取到的数据
    	showExpensesTypeCampusMsg(data){
    		//初始化
    		this.sendJavaData.independent_expenditure_branch=[];
    		this.controlShow.map((ele,index)=>{
    			ele.showToggle=false;
    		})
    		function* entries(obj) {
				for (let key of Object.keys(obj)) {
					yield [key,obj[key]];
				}
			}
			for (let [key,value] of entries(data)) {
				value.map((ele,index)=>{
	    			this.sendJavaData.independent_expenditure_branch.push(ele)
	    		})
			}
    	},
    	//显示隐藏删除
    	financeEdit(index){
    		this.controlShow[index].showToggle = !this.controlShow[index].showToggle
    		if (!(this.controlShow[0].showToggle)) {
    			this.getFinanceData()
    		}
    	},
    	//删除事件
    	delArraySub(ele,index){
    		ele.splice(index,1)
    	},
    	sendJavaBack(){
    		this.controlShow[0].showToggle = false;//关闭编辑状态
    		let sendDate={
    			accessToken:this.$ls.get('USER_INFO').accessToken,
    			financeJsonStr:this.sendJavaData
    		}
    		let url = contapi.finance + 'v1/finance/setting/saveCampusFinaceSet'
			this.axios.post(url,sendDate).then((res) => {
				this.getFinanceData()
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
