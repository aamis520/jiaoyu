<style lang="less" scoped>
	* {
		color: #666;
	}
	
	.clearfix:after {
		display: block;
		content: '';
		clear: both;
	}
	
	.szongbu {
		margin-top: 20px;
		.bumen {
			padding: 15px 0;
			border-top: 1px dotted #D3DDD5;
			h3 {
				color: #31c27c;
				font-size: 15px;
			}
			ul {
				font-size: 14px;
				li {
					float: left;
					width: 100px;
					height: 25px;
					text-align: center;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					line-height: 25px;
					list-style: none;
					margin: 15px 25px 2px 0;
					border-radius: 18px;
					position: relative;
					background: #f2f5f8;
					cursor: pointer;
					img {
						position: absolute;
						right: 4px;
						top: 3px;
						display: none;
					}
				}
				.isActive {
					background: #31c27c;
					color: #fff;
				}
			}
		}
		.btns {
			margin-top: 50px;
			width: 90%;
			text-align: center;
			left: auto;
			button {
				width: 176px;
				height: 35px;
				text-align: center;
				line-height: 35px;
				color: #fff;
				border-radius: 5px;
				border: 0;
				outline: 0;
			}
			.btn1 {
				background: #33beff;
			}
			.btn2 {
				background: #31c27c;
				margin-left: 30px;
				cursor: pointer;
			}
		}
	}
	.btnGray button{
		background-color: #C0C0C0 !important;
	}
</style>
<template>
	<div class="szongbu">
		<!--角色确定-->
		<!--1选择地区-->
		<!--选择一级部门-->
		<div class="bumen">
			<h3>部门</h3>
			<ul class="clearfix xuan">
				<li v-for="(item,index) in getdepaOneDate" @click.stop.prevent="getdepaTwo(index,item)" :id="item.deptId" :class="{isActive:item.showDuigou}">{{item.deptName}}</li>
			</ul>
		</div>
		<!--选择二级部门-->
		<div class="bumen" v-if="getdepaTwoDate.length>0">
			<h3>二级部门</h3>
			<ul class="clearfix xuan">
				<li v-for="(item,index) in getdepaTwoDate" @click.stop.prevent="getdepaThree(index,item)" :id="item.deptId" :class="{isActive:item.showDuigou}">{{item.deptName}}</li>
			</ul>
		</div>
		<!--选择三级部门-->
		<div class="bumen" v-if="getdepaThreeDate.length>0">
			<h3>三级部门</h3>
			<ul class="clearfix xuan">
				<li v-for="(item,index) in getdepaThreeDate" @click.stop.prevent="findRoleListByDeptLevel(item.deptId,item.level)" :id="item.deptId" :class="{isActive:item.showDuigou}"></li>
			</ul>
		</div>
		<!--选择角色-->
		<div class="bumen" v-show="getRoleDate.length>0">
			<h3>角色（可多选）</h3>
			<ul class="clearfix">
				<li v-for="(item,index) in getRoleDate" :id="item.roleId" @click="addBg(index)" :class="{isActive:item.showDuigou}">{{item.roleName}}<img src="../../../assets/duiHao.jpg" /></li>
			</ul>
		</div>
		<div class="btns" :class="{btnGray:btnGray}">
			<button style="background: #33BEFF;" class="btn2" @click.stop.prevent="getAllIdNameGo()">确认并继续添加</button>
			<button class="btn2" @click.stop.prevent="getAllIdName()">确认</button>
		</div>
	</div>
</template>
<script>
	import cont from '../../../common/const'
	import common from '../../../common/common'

	export default {
		data() {
			return {
				headSchoolId: "59e5b1f743a7f90998e16dd7", //存放学校ID
				schoolId: "", //存放学校ID
				getAreaListDate:[],//获取的地区数据
				getSchoolListDate:[],//获取校区的数据
				getdepaOneDate: [], //获取一级部门数据
				getdepaTwoDate: [], //获取二级部门数据
				getdepaThreeDate: [], //获取三级部门数据
				getRoleDate:[],//获取角色数据展示
				getChooseDate:{//获取页面已经选择的大区地区校区部门一级部门二级部门的id，name
					"region_id": "",
		            "region_name": "",
		            "area_id": "",
		            "area_name": "",
		            "school_id": "",
		            "school_name": "",
		            "first_dept_id": "",
		            "first_dept_name": "",
		            "second_dept_id": "",
		            "second_dept_name": "",
		            "thrid_dept_id": "",
		            "thrid_dept_name": "",
		            "role_id": "",
		            "role_name": "",
				},
				roleJson:[],//获取选中的角色，用于遍历
				saveRoleLenght:0,//存储角色选取的个数
				school_roles:[],//整合,中间传值用
				saveShowDate:[],//展示的数据或者最终传给后台的数据
				getStoreDate:[],//获取store里面保存的数据，用于合并saveShowDate
				btnGray:true,//初始化按钮为灰色不可点击，当选择角色后变为可点击
				btnGrayLength:0//根据btnGrayLength判断btnGray是否可点击当btnGrayLength大于0说明已存在角色被选，按钮则可以点击
			}
		},

		mounted() {
			this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId
			this.schoolId = this.$ls.get("USER_INFO").schoolId
			//页面刚加载时调取数据
			this.getDeptList()
		},
		methods: {
			//获取一级部门列表
			getDeptList(index) {
				this.getdepaOneDate= [] //初始化一级部门数据
				this.getdepaTwoDate=[] //初始化二级部门数据
				this.getdepaThreeDate= [] //初始化三级部门数据
				this.getRoleDate=[]//初始化取角色数据
				let url = cont.system + "v1/system/dept/getDeptList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&campusType=1";
				this.axios.post(url).then((getRes) => {
					if(getRes.data.messages.data) {
						let editTree = getRes.data.messages.data;
						for(let i in editTree) {
							editTree[i].showDuigou = false; //用于是否显示对勾。。。
						}
						this.getdepaOneDate = editTree;
					}
				}).catch(function(error) {
					console.log(error)
				});
			},
			//获取二级部门数据
			getdepaTwo(index,ele){
				this.getdepaTwoDate=[] //初始化二级部门数据
				this.getdepaThreeDate= [] //初始化三级部门数据
				this.getRoleDate=[]//初始化取角色数据
				for(let a = 0; a < this.getdepaOneDate.length; a++) {
					this.getdepaOneDate[a].showDuigou = false
				}
				this.getdepaOneDate[index].showDuigou = true;
				if(ele.subDepts.length > 0) {
					for(let i in ele.subDepts) {
						ele.subDepts[i].showDuigou = false; //用于是否显示对勾。。。
					}
					this.getdepaTwoDate = ele.subDepts
				} else {
					this.getdepaTwoDate = []
					console.log("没有二级部门啦")
				}
				this.findRoleListByDeptLevel(ele.deptId, ele.level)
			},
			//获取三级部门数据
			getdepaThree(index,ele){
				this.getdepaThreeDate= [] //初始化三级部门数据
				this.getRoleDate=[]//初始化取角色数据
				for(let a = 0; a < this.getdepaTwoDate.length; a++) {
					this.getdepaTwoDate[a].showDuigou = false
				}
				this.getdepaTwoDate[index].showDuigou = true;
				if(ele.subDepts.length > 0) {
					for(let i in ele.subDepts) {
						ele.subDepts[i].showDuigou = false; //用于是否显示对勾。。。
					}
					this.getdepaThreeDate = ele.subDepts
				} else {
					this.getdepaThreeDate = []
					console.log("没有三级部门啦")
				}
				this.findRoleListByDeptLevel(ele.deptId, ele.level)
			},
			//获取角色  	/v1/system/role/findRoleListByDeptLevel
			findRoleListByDeptLevel(deptId, level) {
				this.getRoleDate=[]//初始化取角色数据
				let url = cont.system + "v1/system/role/findRoleListByDeptLevel?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&deptId=" + deptId + "&level=" + level;
				this.axios.post(url).then((getRes) => {
					if(getRes.data.messages.data) {
						let editTree = common.filterNull(getRes.data.messages.data);
						for(let i in editTree) {
							editTree[i].showDuigou = false; ////用于控制显示编辑和删除图标
						}
						this.getRoleDate = editTree;
					} else {
						this.getRoleDate = []
						console.log("没有角色数据")
					}
				}).catch(function(error) {
					console.log(error)
				});
			},
			//给角色添加背景色
			addBg(index) {
				this.btnGrayLength=0;
				this.getRoleDate[index].showDuigou = !this.getRoleDate[index].showDuigou
				this.getRoleDate.map((ele,index)=>{
					if(ele.showDuigou){
						this.btnGrayLength = this.btnGrayLength + 1
					}
				})
				if (this.btnGrayLength>0) {
					this.btnGray=false
				}else{
					this.btnGray=true
				}
			},
			//获取除角色以外的数据
			getOneTwoEtc(){
				//获取地区选中的数据
				this.getAreaListDate.map((ele,index)=>{
					if (ele.showDuigou) {
						this.getChooseDate.area_id = ele.area_id
						this.getChooseDate.area_name = ele.area_name
					}
				})
				//获校区选中的数据
				this.getSchoolListDate.map((ele,index)=>{
					if (ele.showDuigou) {
						this.getChooseDate.school_id = ele.school_id
						this.getChooseDate.school_name = ele.school_name
					}
				})
				//获取部门一级被选中的名字和ID
				this.getdepaOneDate.map((ele,index)=>{
					if (ele.showDuigou) {
						this.getChooseDate.first_dept_id = ele.deptId
						this.getChooseDate.first_dept_name = ele.deptName
					}
				})
				//获取部门二级被选中的名字和ID
				this.getdepaTwoDate.map((ele,index)=>{
					if (ele.showDuigou) {
						this.getChooseDate.second_dept_id = ele.deptId
						this.getChooseDate.second_dept_name = ele.deptName
					}
				})
				//获取部门三级被选中的名字和ID
				this.getdepaThreeDate.map((ele,index)=>{
					if (ele.showDuigou) {
						this.getChooseDate.thrid_dept_id = ele.deptId
						this.getChooseDate.thrid_dept_name = ele.deptName
					}
				})
			},
			//获取选中的角色数据
			getChooseRole(){
				//角色数据
				this.roleJson = [];//初始化角色数据
				this.saveRoleLenght=0;//初始化话选择角色个数为0个
				this.getRoleDate.map((ele,index)=>{
					if (ele.showDuigou) {
						this.saveRoleLenght = this.saveRoleLenght + 1;
						let roleJson01 = {};
						roleJson01.role_id = ele.roleId;
						roleJson01.role_name = ele.roleName;
						this.roleJson.push(roleJson01)
					}
				});
				//获取的数据格式[{}{}{}{}]
			},
			//数组去重方法
			deleChongfu(){
				//去除重复选中
				let removeRepeat = {};
				this.saveShowDate.forEach(function(ele){
					removeRepeat[JSON.stringify(ele)] = ele
				});
				this.saveShowDate = Object.keys(removeRepeat).map((u)=>{
					return JSON.parse(u)
				});
				this.$set(this.saveShowDate,Object.assign(this.saveShowDate))
			},
			//第一次整合数据，为了把整合数据方法和提交方法分离开了，方便继续添加复用
			zhengheDate(){
				///获取store保存的数据
				this.getStoreDate = this.$store.state.addAccount.showChoose;
				//合并store和本地数据
				this.saveShowDate = this.saveShowDate.concat(this.getStoreDate);
				//如果用户既没有选择角色，本地也没有值
				if ((this.saveRoleLenght==0)&&(this.saveShowDate.length==0)) {
					console.log("请选择数据");
					return false
				} else{
					if (this.saveRoleLenght==0) {
						//如果已经存在选取的角色，而未再次选择，直接整合store和本地，去除重复
						this.deleChongfu();
					} else{
						//如果已经选择角色，则获取除角色以外选中的id和name
						this.getOneTwoEtc();
						this.school_roles = [];//初始化中间数据，用于接受页面已经选择的角色和展示之间传值
						this.roleJson.map((ele,index)=>{
							this.school_roles[index] = {
					            "school_type": "HEADSCHOOL",
					            "head_shcool_id": this.headSchoolId,
					            "head_shcool_name": "星彩艺术中心",
					            "region_id": "",
					            "region_name": "",
					            "area_id": this.getChooseDate.area_id,
					            "area_name": this.getChooseDate.area_name,
					            "school_id": this.getChooseDate.school_id,
					            "school_name": this.getChooseDate.school_name,
					            "first_dept_id": this.getChooseDate.first_dept_id,
					            "first_dept_name": this.getChooseDate.first_dept_name,
					            "second_dept_id": this.getChooseDate.second_dept_id,
					            "second_dept_name": this.getChooseDate.second_dept_name,
					            "thrid_dept_id": this.getChooseDate.thrid_dept_id,
					            "thrid_dept_name": this.getChooseDate.thrid_dept_name,
					            "role_id": ele.role_id,
			           			"role_name":ele.role_name,
					        }
						})
						//将循环处理后的数据从新装载，用于显示页面已选择的
						let showDateLength = this.saveShowDate.length;
						this.school_roles.map((ele,index)=>{
							this.saveShowDate[showDateLength+index]=ele
						})
						//去除重复数据
						this.deleChongfu();
					}
				}
				
				//提到store，分发到需要的地方
				this.$store.commit("SET_CHOOSE",this.saveShowDate)
			},
			//整合选中的信息
			getAllIdName(){
				
				if (this.btnGray) {
					this.$message({
						type:'warning',
						message:'请选择角色'
					})
					return false;
				}
				
				//调取角色方法判断是否选择角色
				this.getChooseRole();
				this.zhengheDate();
				
				///获取store保存的数据
				this.saveShowDate = this.$store.state.addAccount.showChoose;
				
				this.deleChongfu();
				
				this.saveShowDate.map((ele,index)=>{
					if (ele.role_name==undefined) {
						this.saveShowDate.splice(index,1);
					}
				})
				
				this.$store.commit("SET_CHOOSE",this.saveShowDate)
				
				console.log(this.saveShowDate)
				//同步回显
				eventBus.$emit("huixianCreatAccount",this.saveShowDate)
				eventBus.$emit('getTarget',this.saveShowDate);
				eventBus.$emit('hideLayer',"false"); 
			},
			
			//获取选中的信息
			getAllIdNameGo(){
				
				if (this.btnGray) {
					this.$message({
						type:'warning',
						message:'请选择角色'
					})
					return false;
				}
				
				//角色数据
				this.getChooseRole();
				this.zhengheDate();
				//设置地区背景色，切换
				this.getdepaOneDate.map((ele,index)=>{
					ele.showDuigou = false
				})
				
				this.getdepaTwoDate=[] //初始化二级部门数据
				this.getdepaThreeDate= [] //初始化三级部门数据
				this.getRoleDate=[]//初始化取角色数据
				
				this.saveShowDate.map((ele,index)=>{
					if (ele.role_name==undefined) {
						this.saveShowDate.splice(index,1);
					}
				})
				
				//提到store，分发到需要的地方
				this.$store.commit("SET_CHOOSE",this.saveShowDate)
				//同步回显
				eventBus.$emit("huixianCreatAccount",this.saveShowDate)
			}
			
		},
		computed:{
			showChooseDate(){
				return this.$store.state.addAccount.showChoose
			}
		}
	}
</script>