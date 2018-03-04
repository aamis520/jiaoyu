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
				margin-right: 50px;
				color: #fff;
			}	
			.standard_s{
				width: 188px;
				line-height: 60px;
				.input{
					input{
						width: 58px;
						text-align: center;
						border-bottom: 1px solid #31C27C;
					}
				}
			}
			.range_s{
				width: 360px;
				line-height: 60px;
				padding-right: 100px;
				box-sizing: border-box;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				cursor: pointer;
			}
			.block{
				display: inline-block;
				width: 220px;
				line-height: 60px;
				margin-right: 10px;
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
			.operationIcon{
				line-height: 70px;
				i{
					margin-left: 10px;
				}
				.ico-edit{
					width: 20px;
					height: 20px;
				}
			}
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
<style lang="less">
	.salaryForm{
		.block{
			.el-input__inner{
				border: none;
				border-bottom: 1px solid #31C17B;
				height: 25px;
				border-radius: 0;
			}
		}
	}
</style>
<template>
	<div class="salaryForm">
		<div class="mod-w radius">
        	薪酬体系 · 工资组成
        	<i class="ico-init ico-edit ico-right" @click.stop.prevent="financeEdit"></i>
        </div>
        <div class="common-w" v-for="(ele,index) in getSalaryFromData" :key="index">
        	<div class="financeTitle">
        		{{ele.ch_name}}· 设置
        		<font-Tooltip :parentDate="sendChildTipDate[0]" v-if="index==0"></font-Tooltip>
        	</div>
        	<div class="container">
				<div class="content" v-for="(subEle,subIndex) in ele.basic_salary_list" :key="subIndex">
					<span class="num_s">{{subEle.sort}}</span>
					<span class="standard_s">
						<span class="input">￥<input type="text" placeholder="200.00" maxlength="5" v-model="subEle.standard_money" @blur="moneyValidate(index)"/></span>
						元/{{subEle.unit}}
					</span>
					<span class="range_s" @click="showRange(subEle,index,subIndex)">
						<span v-if="subEle.application_range.is_all ===''">请选择适用范围</span>
						{{subEle.application_range.name}}
					</span>
					<div class="block">
						<el-date-picker v-model="subEle.start_time" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
					<div class="operationIcon">
						<i class="ico-init ico-edit"></i>
						<i class="ico-init ico-delete"></i>
					</div>
				</div>
				
				<div class="content">
					<span class="num_s">{{ele.basic_salary_list ? ele.basic_salary_list.length+1:1}}</span>
					<span class="standard_s">
						<span class="input">￥<input type="text" placeholder="200.00" maxlength="5" v-model="baseSalaryDate[index].standard_money" @blur="moneyValidate(index)"/></span>
						元/<span v-for="(unitEle,unitIndex) in getSalaryFromData[index].account_unit" v-if="unitEle.status=='enable'">{{unitEle.ch_name}}</span>
					</span>
					<span class="range_s" @click="showRange(baseSalaryDate[index],index)">
						<span v-if="baseSalaryDate[index].application_range.is_all ===''">请选择适用范围</span>
						{{baseSalaryDate[index].application_range.name}}
					</span>
					<div class="block">
						<el-date-picker v-model="baseSalaryDate[index].start_time" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
					<div class="operationIcon">
						<i class="ico-init ico-duigou" v-if="addToggleEditIco" @click="newAddList(index)"></i>
						<i class="ico-init ico-edit" v-if="!addToggleEditIco"></i>
						<i class="ico-init ico-delete" v-if="!addToggleEditIco"></i>
					</div>
				</div>
			</div>
        </div>
        <!--<div class="common-w">
        	<div class="financeTitle">
        		工资底薪 · 设置
        		<font-Tooltip :parentDate="sendChildTipDate[0]"></font-Tooltip>
        	</div>
        	<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s"><span class="input">￥<input type="text" placeholder="200.00" v-model="baseSalaryDate.sendJavaDate.money"/></span>元/月</span>
					<span class="range_s" @click="showRange()">正式  本科</span>
					<div class="block">
						<el-date-picker v-model="baseSalaryDate.sendJavaDate.time" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
        </div>
        <div class="common-w">
        	<div class="financeTitle">
        		学历津贴 · 设置
        	</div>
        	<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s"><span class="input">￥<input type="text" placeholder="200.00" v-model="baseSalaryDate.sendJavaDate.money"/></span>元/月</span>
					<span class="range_s" @click="showRange()">正式  本科</span>
					<div class="block">
						<el-date-picker v-model="baseSalaryDate.sendJavaDate.time" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s"><span class="input">￥200.00</span>元/月</span>
					<span class="range_s" @click="showRange()">专科  本科  学管师  正式  初级教师...</span>
					<div class="block">
						2017-10-20
						<div class="edit"><i class="ico-init ico-edit"></i><i class="ico-init ico-delete"></i></div>
					</div>
				</div>
			</div>
        </div>-->
        <salaryForm-Range v-if="salaryFormRangeToggle" :parentData="sendChildData"  @listenToChild="showMsgChild"></salaryForm-Range>
        <div class="mod-w">
        	<span class="financeNotice">
        		备&nbsp;&nbsp;&nbsp;注:&nbsp;&nbsp;&nbsp;&nbsp;设置完成后请点击右侧的“ <i class="ico-init ico-duigou icoSave"></i> ”保存
        	</span>
        	<div class="financeSave" @click="addSaveData()"><i class="ico-init ico-duigou icoSave"></i></div>
        </div>
	</div>
</template>

<script>
	import contapi from '@commonJS/const'
	import fontTooltip from '@components/fontTooltip'
	import salaryFormRange from '../subComponents/salaryFormRange'
	export default{
		data(){
			return{
				salaryFormRangeToggle:false,//控制工资组成范围显示隐藏
				sendChildTipDate:[//tip框
					{
						index:0,//只是方便父级使用,子集没用
						title:'薪酬体系 · 薪资关联',//父级方便看当前定义的那个tip，子集没用
						width:'',//修改宽度，可为空默认350，高度自适应
						contentFont:'此功能为工资底薪设置相应标准'//展示的文字
					}
				],
				getJavaAllData:{},//拿到后台传过来的所有数据(总数据)
				getSalaryFromData:[],//获取工资组成所有相关数据
				baseSalaryDate:[],//工资底薪 · 设置相关数据新增相关数据
				sendChildData:{},//中间值，用于接受点击范围时接受点击传过来的值，然后传给子集
				//初始化薪资组成数据
				resetSalaryFromData:{
	            	sort:'',
	            	standard_money:'',
	            	unit:'',
	            	application_range:{
	            		is_all:'',
	            		name:'',
	            		head_school_id:this.$ls.get('USER_INFO').headSchoolId,
	            		education_level:[],
	            		gender:[],
	            		start_age:'',
	            		end_age:'',
	            		work_start_age:'',
	            		work_end_age:'',
	            		staff_post:[],
	            		post_nature:[],
	            		teacher_start_age:'',
	            		teacher_start_end_age:'',
	            		teacher_work_start_age:'',
	            		teacher_work_end_age:'',
	            		teacher_type:[],
	            		teacher_level:[],
	            		teaching_model:[]
	            	},
	            	start_time:''
	            },
	            nowEditCol:-1,//当前编辑的索引
	            nowEditColSub:-1,//当前编辑子行的索引
	            addToggleEditIco:true,//切换当前编辑和保存
			}
		},
		mounted(){
			this.getSalaryFormData()
		},
		computed:{
		},
		components: {
			'font-Tooltip':fontTooltip,
			'salaryForm-Range':salaryFormRange,
	    },
		methods:{
			//初始化获取数据
			getSalaryFormData(){
				let sendDate={
	    			accessToken:this.$ls.get('USER_INFO').accessToken,
    				headSchoolId:this.$ls.get('USER_INFO').headSchoolId
	    		}
	    		let url = contapi.finance + 'v1/finance/component/getSalaryComponentByHeadSchoolId'
				this.axios.post(url,sendDate).then((res) => {
					this.getJavaAllData=res.messages.data;
					this.getSalaryFromData=res.messages.data.salary_component
					this.baseSalaryDate=[]//初始化清空
					this.getSalaryFromData.map((ele,index)=>{//第一次进来或者等于空数组时,初始化
						this.baseSalaryDate.push(JSON.parse(JSON.stringify(this.resetSalaryFromData)));
					})
				}).catch(function(error) {
					console.log(error)
				})
			},
			showRange(ele,index,subIndex){
				if(typeof(subIndex)!="undefined"){
					this.nowEditColSub = subIndex;
					
					console.log(ele.application_range)
					return false;
					
				}
				this.nowEditCol = index;
				this.sendChildData = ele.application_range
				this.salaryFormRangeToggle = true
			},
			showMsgChild(data){
				if (data) {
					if (this.nowEditColSub==-1) {//添加
						this.baseSalaryDate[this.nowEditCol].application_range = data
						this.nowEditCol = -1;
					} else{//修改
						this.getSalaryFromData[this.nowEditCol].basic_salary_list[this.nowEditColSub].application_range = data
						this.nowEditCol = -1;
						this.nowEditColSub=-1;
					}
				} else{
					console.log('点击的关闭')
				}
				this.salaryFormRangeToggle = false
			},
			moneyValidate(index){
				//金钱失焦验证
				let val = this.baseSalaryDate[index].standard_money;
				if (!val) {//如果不存在值就不需要验证啦
					return false;
				}
				if (isNaN(val) || val<0) {//不是数字
					this.baseSalaryDate[index].standard_money = ''//输入不是数字清空
					this.$message({
						type: 'warning',
						message: '请输入合法数字!'
					});
				}
			},
			newAddList(index){
				//新增一条记录
				let obj = {};
				obj = JSON.parse(JSON.stringify(this.baseSalaryDate[index]));
				if (!obj.standard_money || !obj.application_range.name || !obj.start_time) {
					this.$message({
						type: 'warning',
						message: '请正确输入相关信息!'
					});
				} else{
					obj.sort = this.getSalaryFromData[index].basic_salary_list ? this.getSalaryFromData[index].basic_salary_list.length+1:1;//处理索引
					this.getSalaryFromData[index].account_unit.map((subEle,subIndex)=>{
						if (subEle.status=='enable') {
							obj.unit = subEle.ch_name
						}
					})
					if (this.getSalaryFromData[index].basic_salary_list==null) {
						this.getSalaryFromData[index].basic_salary_list=[]
					}
					this.getSalaryFromData[index].basic_salary_list.push(obj)
					//初始化
					this.baseSalaryDate[index].standard_money=''
					this.baseSalaryDate[index].application_range = JSON.parse(JSON.stringify(this.resetSalaryFromData.application_range))
					this.baseSalaryDate[index].start_time=''
				}
			},
			timeToString(time){
				return time.toString()
			},
			addSaveData(){
				console.log(this.getSalaryFromData)
				return false;
				this.getJavaAllData.salary_component = JSON.parse(JSON.stringify(this.getSalaryFromData))
				let sendDate={
					accessToken:this.$ls.get('USER_INFO').accessToken,
	    			salaryRelationJsonStr:this.getJavaAllData
	    		}
	    		let url = contapi.finance + 'v1/finance/component/saveSalaryComponent'
				this.axios.post(url,sendDate).then((res) => {
					this.getSalaryFormData()
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

