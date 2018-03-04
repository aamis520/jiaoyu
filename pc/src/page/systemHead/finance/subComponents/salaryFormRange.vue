<!--
	作者：1204689638@qq.com
	时间：2017-11-30
	描述：工资组成-适用范围
	使用方法
	1,父级引用，声明组件
	import salaryFormRange from '../subComponents/salaryFormRange'
	components: {
		'salaryForm-Range':salaryFormRange,
    },
    2.页面使用
    <salaryForm-Range v-if="salaryFormRangeToggle"  v-on:listenToChild="showMsgChild"></salaryForm-Range>
    3.父级接受数据
    showMsgChild(data){
		if (data) {
			console.log('点击的确定')
			console.log(data)
		} else{
			console.log('点击的关闭')
		}
		this.salaryFormRangeToggle = false
	}
-->
<style scoped lang="less">
	@color :#31C17B;
	@font12:12px;
	@font14:14px;
	@font16:16px;
	.all {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
	}
	
	.rangeContainer {
		width: 750px;
		height: 620px;
		background: #fff;
		border-radius: 4px;
		box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -375px;
		margin-top: -310px;
		box-sizing: border-box;
		.top {
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
			padding: 0 30px;
			height: 510px;
			box-sizing: border-box;
			overflow-x: hidden;
			overflow-y: scroll;
			color: #666;
			.radio_box {
				display: flex;
				.tit {
					color: #31C27C;
					margin-right: 26px;
					line-height: 38px;
				}
				.radio_group {
					p {
						height: 38px;
						line-height: 38px;
					}
					input {
						width: 40px;
						border-bottom: 1px solid #31C27C;
						text-align: center;
					}
					.add {
						width: 540px;
						height: 80px;
						background: #f7f7f7;
						padding: 14px 20px;
						border-radius: 4px;
						line-height: 28px;
						&>span:first-child {
							margin-right: 44px;
						}
					}
				}
			}
			.check_box {
				li {
					height: 56px;
					line-height: 56px;
					border-bottom: 1px dashed #eee;
					.item2 {
						display: inline-block;
						cursor: pointer;
						padding-right: 36px;
						position:relative;
						i{
							position: absolute;
							right: 15px;
    						top: 18px;
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
						margin-right: 20px;
					    margin-left: 0;
					    width: 70px;
					    display: inline-block;
					}
				}
			}
		}
		.bottom{
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

<template>
	<div class="all">
		<div class="rangeContainer">
			<div class="top">
				工资组成 · 适用范围
				<i class="ico-init ico-close"  @click.stop.prevent="sendDate('close')"></i>
			</div>
			<div class="content">
				<ul class="check_box">
					<li>
						<span class="col">学历等级</span>
						<span class="item2" v-for="(ele,index) in sendParentDate.education_level" @click="toggleChoose(ele)">{{ele.name}}<i v-if="ele.status=='enable'" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<span class="col">性&nbsp;&nbsp;别</span>
						<span class="item2" v-for="(ele,index) in sendParentDate.gender" @click="toggleChoose(ele)">{{ele.name}}<i v-if="ele.status=='enable'" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<span class="col">员工年龄</span>
						<span class="item2">
							<input type="text" v-model="sendParentDate.start_age"@blur="inputBlur('start_age')" maxlength="2" /> 岁~ 
							<input type="text" v-model="sendParentDate.end_age"@blur="inputBlur('end_age')" maxlength="2" />岁
						</span>
						<span class="col">员工工龄</span>
						<span class="item2">
							<input type="text" v-model="sendParentDate.work_start_age"@blur="inputBlur('work_start_age')" maxlength="4" /> 年~ 
							<input type="text" v-model="sendParentDate.work_end_age"@blur="inputBlur('work_end_age')" maxlength="4" />年
						</span>
					</li>
					<li>
						<span class="col">员工岗位</span>
						<span class="item2" v-for="(ele,index) in sendParentDate.staff_post" @click="toggleChoose(ele)">{{ele.name}}<i v-if="ele.status=='enable'" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<span class="col">岗位性质</span>
						<span class="item2" v-for="(ele,index) in sendParentDate.post_nature" @click="toggleChoose(ele)">{{ele.name}}<i v-if="ele.status=='enable'" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<span class="col">教师工龄</span>
						<span class="item2">
							<input type="text" v-model="sendParentDate.teacher_start_age"@blur="inputBlur('teacher_start_age')" maxlength="4" /> 年~ 
							<input type="text" v-model="sendParentDate.teacher_start_end_age"@blur="inputBlur('teacher_start_end_age')" maxlength="4" />年
						</span>
						<span class="col">教师教龄</span>
						<span class="item2">
							<input type="text" v-model="sendParentDate.teacher_work_start_age"@blur="inputBlur('teacher_work_start_age')" maxlength="4" /> 年~ 
							<input type="text" v-model="sendParentDate.teacher_work_end_age"@blur="inputBlur('teacher_work_end_age')" maxlength="4" />年
						</span>
					</li>
					<li>
						<span class="col">教师类型</span>
						<span class="item2" v-for="(ele,index) in sendParentDate.teacher_type" @click="toggleChoose(ele)">{{ele.name}}<i v-if="ele.status=='enable'" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<span class="col">教师级别</span>
						<span class="item2" v-for="(ele,index) in sendParentDate.teacher_level" @click="toggleChoose(ele)">{{ele.name}}<i v-if="ele.status=='enable'" class="ico-init ico-duigou2"></i></span>
					</li>
					<li>
						<span class="col">授课模式</span>
						<span class="item2" v-for="(ele,index) in sendParentDate.teaching_model" @click="toggleChoose(ele)">{{ele.name}}<i v-if="ele.status=='enable'" class="ico-init ico-duigou2"></i></span>
					</li>
				</ul>
				<div style="padding: 20px 0;">提示：直接点击确认则默认适用范围全部</div>
			</div>
			<div class="bottom">
				<button class="btn" @click.stop.prevent="sendDate('')">确认</button>
			</div>	
		</div>
	</div>

</template>

<script>
	export default {
		props:{
			parentData:{}
		},
		data() {
			return {
				sendParentDate:{//传给父级数据
					is_all:'',
            		name:'',
            		head_school_id:this.$ls.get('USER_INFO').headSchoolId,
					education_level:[//学历等级
						{
							id:1,
							name:'专科',
							status:'disable'
						},{
							id:2,
							name:'本科',
							status:'disable'
						},{
							id:3,
							name:'博士',
							status:'disable'
						},{
							id:4,
							name:'硕士',
							status:'disable'
						},{
							id:5,
							name:'高中',
							status:'disable'
						},{
							id:6,
							name:'其他',
							status:'disable'
						}
					],
					gender:[//性别
						{
							id:1,
							name:'男',
							status:'disable'
						},{
							id:2,
							name:'女',
							status:'disable'
						}
					],
					start_age:'',//员工起始年龄
					end_age:'',//员工截止年龄
					work_start_age:'',//员工工龄
					work_end_age:'',//
					staff_post:[//员工岗位
						{
							id:1,
							name:'学管师',
							status:'disable'
						},{
							id:2,
							name:'班主任',
							status:'disable'
						},{
							id:3,
							name:'咨询师',
							status:'disable'
						},{
							id:4,
							name:'前台',
							status:'disable'
						}
					],
					post_nature:[//岗位性质
						{
							id:1,
							name:'正式',
							status:'disable'
						},{
							id:2,
							name:'试用',
							status:'disable'
						}
					],
					teacher_start_age:'',//教师工龄
					teacher_start_end_age:'',
					teacher_work_start_age:'',
					teacher_work_end_age:'',//教师教龄
					teacher_type:[//教师类型
						{
							id:1,
							name:'专职',
							status:'disable'
						},{
							id:2,
							name:'兼职',
							status:'disable'
						},{
							id:3,
							name:'实习',
							status:'disable'
						},{
							id:4,
							name:'培训',
							status:'disable'
						},
					],
					teacher_level:[//教师级别
						{
							id:1,
							name:'初级教师',
							status:'disable'
						},{
							id:2,
							name:'中级教师',
							status:'disable'
						},{
							id:3,
							name:'高级教师',
							status:'disable'
						}
					],
					teaching_model:[//授课模式
						{
							id:1,
							name:'班级',
							status:'disable'
						},{
							id:2,
							name:'一对一',
							status:'disable'
						},{
							id:3,
							name:'一对N',
							status:'disable'
						}
					]
				},
			}
		},
		mounted() {
			if (!(this.parentData.is_all==='')) {//不是第一次进来
				this.sendParentDate = this.parentData
			}
		},
		methods:{
			//点击切换选中或取消选中
			toggleChoose(ele){
				if (ele.status == 'enable') {
					ele.status = 'disable'
				}else{
					ele.status = 'enable'
				}
			},
			//input失去焦点验证
			inputBlur(str){
				let nowYear = new Date();
				let maxYear = nowYear.getFullYear();
				let minYear = maxYear-70;
				switch (str){
					case 'start_age':
						let start_age_value = this.sendParentDate.start_age
						if (!start_age_value) {//如果不存在值就不需要验证啦
							return false;
						}
						if (isNaN(start_age_value)) {//不是数字
							this.sendParentDate.start_age = ''//输入不是数字清空
							this.$message({
								type: 'error',
								message: '输入不是数字!'
							});
						}else{
							if (start_age_value<16 || start_age_value>70) {
								this.sendParentDate.start_age = ''//输入不合法清空
								this.$message({
									type: 'warning',
									message: '年龄不合法，请输入16-70周岁之间数字!'
								});
							}else{
								if (this.sendParentDate.end_age) {
									if (start_age_value > this.sendParentDate.end_age) {
										this.sendParentDate.start_age = ''//输入不合法清空
										this.$message({
											type: 'warning',
											message: '年龄不合法，请输入小于等于'+ this.sendParentDate.end_age +'周岁数字!'
										});
									}
								}
							}
						}
						break;
					case 'end_age':
						let end_age_value = this.sendParentDate.end_age
						if (!end_age_value) {//如果不存在值就不需要验证啦
							return false;
						}
						if (isNaN(end_age_value)) {//不是数字
							this.sendParentDate.end_age = ''//输入不是数字清空
							this.$message({
								type: 'error',
								message: '输入不是数字!'
							});
						}else{
							if (end_age_value<16 || end_age_value>70) {
								this.sendParentDate.end_age = ''//输入不合法清空
								this.$message({
									type: 'warning',
									message: '年龄不合法，请输入16-70周岁之间数字!'
								});
							}else{
								if (end_age_value < this.sendParentDate.start_age) {
									this.sendParentDate.end_age = ''//输入不合法清空
									this.$message({
										type: 'info',
										message: '年龄不合法，请输入大于等于'+ this.sendParentDate.start_age +'周岁数字!'
									});
								}
							}
						}
						break;
					case 'work_start_age':
						let work_start_age_value = this.sendParentDate.work_start_age
						if (!work_start_age_value) {//如果不存在值就不需要验证啦
							return false;
						}
						if (isNaN(work_start_age_value)) {//不是数字
							this.sendParentDate.work_start_age = ''//输入不是数字清空
							this.$message({
								type: 'error',
								message: '输入不是数字!'
							});
						}else{
							if (work_start_age_value<minYear || work_start_age_value>maxYear) {
								this.sendParentDate.work_start_age = ''//输入不合法清空
								this.$message({
									type: 'warning',
									message: '年份不合法，请输入'+minYear+'-'+maxYear+'年之间数字!'
								});
								return false
							}else{
								if (this.sendParentDate.work_end_age) {
									if (work_start_age_value > this.sendParentDate.work_end_age) {
										this.sendParentDate.work_start_age = ''//输入不合法清空
										this.$message({
											type: 'warning',
											message: '年份不合法，请输入小于等于'+ this.sendParentDate.work_end_age +'的年份!'
										});
									}
									
								}
							}
						}
						break;
					case 'work_end_age':
						let work_end_age_value = this.sendParentDate.work_end_age
						if (!work_end_age_value) {//如果不存在值就不需要验证啦
							return false;
						}
						if (isNaN(work_end_age_value)) {//不是数字
							this.sendParentDate.work_end_age = ''//输入不是数字清空
							this.$message({
								type: 'error',
								message: '输入不是数字!'
							});
						}else{
							if (work_end_age_value<minYear || work_end_age_value>maxYear) {
								this.sendParentDate.work_end_age = ''//输入不合法清空
								this.$message({
									type: 'warning',
									message: '年份不合法，请输入'+minYear+'-'+maxYear+'年之间数字!'
								});
								return false
							}else{
								if (work_end_age_value < this.sendParentDate.work_start_age) {
									this.sendParentDate.work_end_age = ''//输入不合法清空
									this.$message({
										type: 'warning',
										message: '年份不合法，请输入大于等于'+ this.sendParentDate.work_start_age +'的年份!'
									});
								}
							}
						}
						break;
					case 'teacher_start_age':
						let teacher_start_age_value = this.sendParentDate.teacher_start_age
						if (!teacher_start_age_value) {//如果不存在值就不需要验证啦
							return false;
						}
						if (isNaN(teacher_start_age_value)) {//不是数字
							this.sendParentDate.teacher_start_age = ''//输入不是数字清空
							this.$message({
								type: 'error',
								message: '输入不是数字!'
							});
						}else{
							if (teacher_start_age_value<minYear || teacher_start_age_value>maxYear) {
								this.sendParentDate.teacher_start_age = ''//输入不合法清空
								this.$message({
									type: 'warning',
									message: '年份不合法，请输入'+minYear+'-'+maxYear+'年之间数字!'
								});
								return false
							}else{
								if (this.sendParentDate.teacher_start_end_age) {
									if (teacher_start_age_value > this.sendParentDate.teacher_start_end_age) {
										this.sendParentDate.teacher_start_age = ''//输入不合法清空
										this.$message({
											type: 'warning',
											message: '年份不合法，请输入小于等于'+ this.sendParentDate.teacher_start_end_age +'的年份!'
										});
									}
									
								}
							}
						}
						break;
					case 'teacher_start_end_age':
						let teacher_start_end_age_value = this.sendParentDate.teacher_start_end_age
						if (!teacher_start_end_age_value) {//如果不存在值就不需要验证啦
							return false;
						}
						if (isNaN(teacher_start_end_age_value)) {//不是数字
							this.sendParentDate.teacher_start_end_age = ''//输入不是数字清空
							this.$message({
								type: 'error',
								message: '输入不是数字!'
							});
						}else{
							if (teacher_start_end_age_value<minYear || teacher_start_end_age_value>maxYear) {
								this.sendParentDate.teacher_start_end_age = ''//输入不合法清空
								this.$message({
									type: 'warning',
									message: '年份不合法，请输入'+minYear+'-'+maxYear+'年之间数字!'
								});
								return false
							}else{
								if (teacher_start_end_age_value < this.sendParentDate.teacher_start_age) {
									this.sendParentDate.teacher_start_end_age = ''//输入不合法清空
									this.$message({
										type: 'warning',
										message: '年份不合法，请输入大于等于'+ this.sendParentDate.teacher_start_age +'的年份!'
									});
								}
							}
						}
						break;
						
					case 'teacher_work_start_age':
						let teacher_work_start_age_value = this.sendParentDate.teacher_work_start_age
						if (!teacher_work_start_age_value) {//如果不存在值就不需要验证啦
							return false;
						}
						if (isNaN(teacher_work_start_age_value)) {//不是数字
							this.sendParentDate.teacher_work_start_age = ''//输入不是数字清空
							this.$message({
								type: 'error',
								message: '输入不是数字!'
							});
						}else{
							if (teacher_work_start_age_value<minYear || teacher_work_start_age_value>maxYear) {
								this.sendParentDate.teacher_work_start_age = ''//输入不合法清空
								this.$message({
									type: 'warning',
									message: '年份不合法，请输入'+minYear+'-'+maxYear+'年之间数字!'
								});
								return false
							}else{
								if (this.sendParentDate.teacher_work_end_age) {
									if (teacher_work_start_age_value > this.sendParentDate.teacher_work_end_age) {
										this.sendParentDate.teacher_work_start_age = ''//输入不合法清空
										this.$message({
											type: 'warning',
											message: '年份不合法，请输入小于等于'+ this.sendParentDate.teacher_work_end_age +'的年份!'
										});
									}
									
								}
							}
						}
						break;
					case 'teacher_work_end_age':
						let teacher_work_end_age_value = this.sendParentDate.teacher_work_end_age
						if (!teacher_work_end_age_value) {//如果不存在值就不需要验证啦
							return false;
						}
						if (isNaN(teacher_work_end_age_value)) {//不是数字
							this.sendParentDate.teacher_work_end_age = ''//输入不是数字清空
							this.$message({
								type: 'error',
								message: '输入不是数字!'
							});
						}else{
							if (teacher_work_end_age_value<minYear || teacher_work_end_age_value>maxYear) {
								this.sendParentDate.teacher_work_end_age = ''//输入不合法清空
								this.$message({
									type: 'warning',
									message: '年份不合法，请输入'+minYear+'-'+maxYear+'年之间数字!'
								});
								return false
							}else{
								if (teacher_work_end_age_value < this.sendParentDate.teacher_work_start_age) {
									this.sendParentDate.teacher_work_end_age = ''//输入不合法清空
									this.$message({
										type: 'warning',
										message: '年份不合法，请输入大于等于'+ this.sendParentDate.teacher_work_start_age +'的年份!'
									});
								}
							}
						}
						break;
					default:
						break;
				}
			},
			sendDate(str){
				let showName ='';
				this.sendParentDate.education_level.map((ele,index)=>{
					if (ele.status=='enable') {
						showName = showName + ele.name+','
					}
				})
				this.sendParentDate.gender.map((ele,index)=>{
					if (ele.status=='enable') {
						showName = showName + ele.name+','
					}
				})
				if (this.sendParentDate.start_age) {
					showName = showName + '员工年龄大于' +this.sendParentDate.start_age+','
				}
				if (this.sendParentDate.end_age) {
					showName = showName + '员工年龄小于' +this.sendParentDate.end_age+','
				}
				if (this.sendParentDate.work_start_age) {
					showName = showName + '员工工龄大于' +this.sendParentDate.work_start_age+','
				}
				if (this.sendParentDate.work_end_age) {
					showName = showName + '员工工龄大于' +this.sendParentDate.work_end_age+','
				}
				this.sendParentDate.staff_post.map((ele,index)=>{
					if (ele.status=='enable') {
						showName = showName + ele.name+','
					}
				})
				this.sendParentDate.post_nature.map((ele,index)=>{
					if (ele.status=='enable') {
						showName = showName + ele.name+','
					}
				})
				if (this.sendParentDate.teacher_start_age) {
					showName = showName + '教师年龄大于' +this.sendParentDate.teacher_start_age+','
				}
				if (this.sendParentDate.teacher_start_end_age) {
					showName = showName + '教师年龄小于' +this.sendParentDate.teacher_start_end_age+','
				}
				if (this.sendParentDate.teacher_work_start_age) {
					showName = showName + '教师工龄大于' +this.sendParentDate.teacher_work_start_age+','
				}
				if (this.sendParentDate.teacher_work_end_age) {
					showName = showName + '教师工龄大于' +this.sendParentDate.teacher_work_end_age+','
				}
				this.sendParentDate.teacher_type.map((ele,index)=>{
					if (ele.status=='enable') {
						showName = showName + ele.name+','
					}
				})
				this.sendParentDate.teacher_level.map((ele,index)=>{
					if (ele.status=='enable') {
						showName = showName + ele.name+','
					}
				})
				this.sendParentDate.teaching_model.map((ele,index)=>{
					if (ele.status=='enable') {
						showName = showName + ele.name+','
					}
				})
				if (showName=='') {
					this.sendParentDate.is_all=true,
            		this.sendParentDate.name='全部'
				}else{
					this.sendParentDate.is_all=false,
            		this.sendParentDate.name=showName.slice(0,showName.length-1)//去掉最后一个逗号
				}
				if (str == 'close') {
					this.$emit("listenToChild")
				}else{
					this.$emit("listenToChild",this.sendParentDate)
				}
			}
		}
	}
</script>
