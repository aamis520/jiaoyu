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
		margin-top: 10px;
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
					background: #f7f8fc;
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
			text-align: center;
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
	.showBig{
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		    border-top: 1px dotted #D3DDD5;
		li{
			width: 50%;
			padding: 10px 0;
			box-sizing: border-box;
			color: #666666;
			float: left;
			img{
				position: relative;
				top: 4px;
			}
		}
	}
</style>
<template>
	<div class="szongbu">
		<!--显示已经选择的部分-->
		<div class="showBig">
			<ul>
				<li v-for="ele in saveAndAdd_showDate">
					{{ele.first_dept_name}}<span v-show="ele.second_dept_name"> </span>
					{{ele.second_dept_name}}<span v-show="ele.thrid_dept_name"> </span>
					{{ele.thrid_dept_name}}<span v-show="ele.role_name"> </span>
					{{ele.role_name}}
					<img src="../../../assets/error1.jpg" /></li>
			</ul>
		</div>
		<!--第一大类总部，地区，校区-->
		<div class="bumen">
			<h3>{{rolesDate[tabIndexResult].name}}</h3>
			<ul class="clearfix xuan">
				<li  v-for="(ele,index) in getFristDate" :key="index" @click.stop.prevent="getNextNode(index,ele)" :id="ele.deptId" :class="{isActive:ele.showDuigou}">{{ele.deptName}}</li>
			</ul>
		</div>
		<!--
        	作者：1204689638@qq.com
        	时间：2017-11-14
        	描述：第二大类
        -->
		<div class="bumen" v-for="(ele,index) in subDate">
			<h3>{{ele.deptName}}</h3>
			<ul class="clearfix xuan">
				<li v-for="(subEle,subIndex) in ele.subDepts" :id="subEle.deptId" :class="{isActive:subEle.showDuigou}" @click.stop.prevent="getNextNode(subIndex,subEle)" ref="changeBg">{{subEle.deptName}}</li>
			</ul>
		</div>
		<div class="bumen" v-show="roleFootDate.length>0">
			<h3>角色（可多选）</h3>
			<ul class="clearfix">
				<li v-for="(item,index) in roleFootDate" :id="item.roleId" @click="addBg(index)" :class="{isActive:item.showDuigou}">{{item.roleName}}<img src="../../../assets/duiHao.jpg" /></li>
			</ul>
		</div>
		<div class="btns">
			<button class="btn2" style="background: #33BEFF;" @click.stop.prevent="getAllIdNameGo()">确认并继续添加</button>
			<button class="btn2" @click="getAllIdName()">确认</button>
		</div>
	</div>
</template>
<script>
	import cont from '../../../common/const'
	import common from '../../../common/common'

	export default {
		props:{
			chooseIndex:{
				default:1
			},//接收到父组件传递过来的索引
		},
		data() {
			return {
				rolesDate: [{
					"index":0,
					"name":"总部",
					"campusType":1,
					"school_type": "HEADSCHOOL",
				},{
					"index":1,
					"name":"大区",
					"campusType":2,
					"school_type": "REGION",
				},{
					"index":2,
					"name":"地区",
					"campusType":3,
					"school_type": "AREA",
				},{
					"index":3,
					"name":"校区",
					"campusType":4,
					"school_type": "SCHOOL",
				}], //存储角色确定
				tabIndex:1,//接受父级传回的tab索引，默认设置为1
				headSchoolId: "", //存放学校ID
				schoolId: "", //存放学校ID
				getFristDate: [], //返回大类数据
				subDate: [
					{
						"subDepts": ""
					}
				], //返回子类数据 测试初始化
				//返回的一级name和id
				nameIdDate:{
					"cun01Id":"",//存第一条id
					"cun01Name":"",//存第一条名字
					"cun02Id":"",//存第二条id
					"cun02Name":"",//存第二条名字
				},
				roleFootDate: [], //存储选取是获取得到的角色数据
				saveAndAddDate_role:[],//储存保存继续添加的角色数据
				saveRoleLenght:0,//存储角色选取的个数
				school_roles:[],//整合,中间传值
				saveAndAdd_showDate:[],//展示的数据或者最终传给后台的数据
				
				
//				saveAndAddDate:[],//储存保存继续添加的数据
//				saveAndAddDate_role:[],//储存保存继续添加的角色数据
				
			}
		},

		mounted() {
			this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId
			this.schoolId = this.$ls.get("USER_INFO").schoolId
			//页面刚加载时调取数据
			this.getDeptList()
			
			$(".close").click(function() {
				$(".sure").hide()
			})
			
		},
		methods: {
			//获取部门列表
			getDeptList() {
				this.roleFootDate=[];
				this.getFristDate=[];//初始化一级
				let url = cont.system + "v1/system/dept/getDeptList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&campusType=" + this.rolesDate[this.tabIndexResult].campusType;
				this.axios.post(url).then((getRes) => {
					if(getRes.data.messages.data) {
						let editTree = common.filterNull(getRes.data.messages.data);
						for(let i in editTree) {
							editTree[i].showDuigou = false; //用于是否显示对勾。。。
						}
						this.getFristDate=editTree;
					}
					this.subDate = [[{"subDepts": ""}]]
				}).catch(function(error) {
					console.log(error)
				});
			},
			//获取一级子部门,第一级点击
			getNextNode(index,item){
				//控制对勾是否显示，关闭所有的对勾，显示当前的对勾
				if(item.level==1){
					for(let a = 0; a < this.getFristDate.length; a++) {
						this.getFristDate[a].showDuigou = false
					}
					this.getFristDate[index].showDuigou = true
				}else{
					for(let a = 0; a < this.subDate[item.level-2].subDepts.length; a++) {
						this.subDate[item.level-2].subDepts[a].showDuigou = false
					}
					this.subDate[item.level-2].subDepts[index].showDuigou = true
				}
				//数组push下一级数据，
				this.subDate = this.subDate.slice(0,item.level);//预处理数组
				let itemNoNull = common.filterNull(item);//去除数组中空对象
				if(itemNoNull.subDepts.length>0){
					for(let i in itemNoNull.subDepts) {
						itemNoNull.subDepts[i].showDuigou = false; //用于是否显示对勾。。。
					}
					this.subDate.push(common.filterNull(itemNoNull))
					this.subDate = this.subDate.slice(this.subDate.length-item.level);
				}else{
					this.subDate = this.subDate.slice(0,item.level-1);//预处理数组
					console.log("没有下级部门")
				}
				this.findRoleListByDeptLevel(item.deptId,item.level)
			},
			findRoleListByDeptLevel(deptId, level) {
				this.roleFootDate = []
				let url = cont.system + "v1/system/role/findRoleListByDeptLevel?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&deptId=" + deptId + "&level=" + level;
				this.axios.post(url).then((getRes) => {
					if(getRes.data.messages.data) {
						let editTree = common.filterNull(getRes.data.messages.data);
						for(let i in editTree) {
							editTree[i].showDuigou = false; ////用于控制显示编辑和删除图标
						}
						this.roleFootDate = editTree;
					} else {
						this.roleFootDate = []
					}
				}).catch(function(error) {
					console.log(error)
				});
			},
			//给角色添加背景色
			addBg(index) {
				this.roleFootDate[index].showDuigou = !this.roleFootDate[index].showDuigou
			},
			//获取除角色以外的数据
			getOneTwo(){
				///第一条数据选中的
				this.getFristDate.map((ele,index)=>{
					if(ele.showDuigou){
						this.nameIdDate.cun01Id = ele.deptId;
						this.nameIdDate.cun01Name = ele.deptName;
					}
				})
				
				///第二条数据选中的
				this.subDate[0].subDepts.map((ele,index) =>{
					if(ele.showDuigou){
						this.nameIdDate.cun02Id = ele.deptId;
						this.nameIdDate.cun02Name = ele.deptName;
					}
				})
			},
			//获取角色数据
			getRoleDate(){
				//角色数据
				this.saveAndAddDate_role = [];//初始化角色数据
				this.saveRoleLenght=0;//初始化话选择角色个数为0个
				this.roleFootDate.map((ele,index)=>{
					if(ele.showDuigou){
						this.saveRoleLenght = this.saveRoleLenght + 1;
						let roleJson01 = {};
						roleJson01.role_id = ele.roleId;
						roleJson01.role_name = ele.roleName;
						this.saveAndAddDate_role.push(roleJson01)
					}
				})
			},
			//整合数据，遍历角色数据，整合第一层，第二层数据从新拼接成JSON
			conformDate(){
				this.getRoleDate();
				if(this.saveRoleLenght==0){
					console.log("请选择角色1");
					return
				}else{
					//如果已经获取角色，则获取前两项的id和name
					this.getOneTwo();
					this.school_roles = [];//初始化中间数据
					this.saveAndAddDate_role.map((ele,index)=>{
						this.school_roles[index] = {
							"school_type": this.rolesDate[this.chooseIndex].school_type,
				            "school_id": this.headSchoolId,
				            "school_name": "星彩艺术中心",
				            "first_dept_id" : this.nameIdDate.cun01Id,
				            "first_dept_name" : this.nameIdDate.cun01Name,
				            "second_dept_id" :this.nameIdDate.cun02Id,
				            "second_dept_name" : this.nameIdDate.cun02Name,
				            "roles" : ele
						}
					})
					//将循环处理后的数据从新装载，用于显示页面已选择的
					let showDateLength = this.saveAndAdd_showDate.length;
					this.school_roles.map((ele,index)=>{
						this.saveAndAdd_showDate[showDateLength+index]=ele
					})
					let removeRepeat = {};
					this.saveAndAdd_showDate.forEach(function(ele){
						removeRepeat[JSON.stringify(ele)] = ele
					});
					this.saveAndAdd_showDate = Object.keys(removeRepeat).map((u)=>{
						return JSON.parse(u)
					});
					//this.$set(this.saveAndAdd_showDate,Object.assign(this.saveAndAdd_showDate))
					
				}
			},
			//获取选中的信息
			getAllIdNameGo(){
				this.conformDate();
				
				console.log(this.saveAndAdd_showDate)
					
					console.log(this.saveAndAdd_showDate)
				
				
				return
				this.saveAndAddDate_role = [];//初始化角色数据
				this.school_roles = [];//初始化中间数据
				
				
				
				let showDateLength = this.saveAndAdd_showDate.length;
				this.school_roles.map((ele,index)=>{
					this.saveAndAdd_showDate[showDateLength+index]=ele
				})
				this.$set(this.saveAndAdd_showDate,Object.assign(this.saveAndAdd_showDate))
				
				console.log(this.saveAndAdd_showDate)
				
				console.log("拆分数据---------------------")
				/*if (length<=0) {
					alert("请选择角色")
					console.log("没有选择角色")
					return false
				}else{
					
				}*/
			},
			//获取选中的信息继续添加数据
			getAllIdName(event){
				console.log(event)
				return
				///第一条数据选中的
				for(let a in this.getFristDate) {
					if(this.getFristDate[a].showDuigou) {
						
						this.cun01Id = this.getFristDate[a].deptId;
						this.cun01Name = this.getFristDate[a].deptName;
					}
				}
				console.log("第一条数据---------------------")
				
				///第二条数据选中的
				for(let b in this.subDate) {
					if(this.subDate[b].showDuigou) {
						this.cun02Id = this.subDate[b].deptId;
						this.cun02Name = this.subDate[b].deptName;
					}
				}
				console.log("第二条数据---------------------")
				
				
				///第三条数据选中的
				for(let c in this.subDate01) {
					if(this.subDate01[c].showDuigou) {
						this.cun03Id = this.subDate01[c].deptId;
						this.cun03Name = this.subDate01[c].deptName;
					}
				}
				console.log("第三条数据---------------------")
				
				
				//角色数据
				let length=0;
				for(let j in this.roleFootDate) {
					if(this.roleFootDate[j].showDuigou) {
						length = length +1;
						let roleJson01 = {};
						roleJson01.role_id = this.roleFootDate[j].roleId;
						roleJson01.role_name = this.roleFootDate[j].roleName;
						this.roleJson.push(roleJson01)
					}
				}
				console.log("角色数据---------------------")
				
				this.school_roles = [
			        {
			            "school_type": this.rolesDate[this.chooseIndex].school_type,
			            "school_id": this.headSchoolId,
			            "school_name": "星彩艺术中心",
			            "first_dept_id" : this.cun01Id,
			            "first_dept_name" : this.cun01Name,
			            "second_dept_id" :this.cun02Id,
			            "second_dept_name" : this.cun02Name,
			            "thrid_dept_id" : this.cun03Id,
			            "thrid_dept_name" : this.cun03Name,
			            "roles" : this.roleJson
			        }
			    ]
				
				if (length<=0) {
					alert("请选择角色")
					console.log("没有选择角色")
					return false
				}
				
				eventBus.$emit('getTarget',this.school_roles); 
				eventBus.$emit('hideLayer',"false"); 
			},
			
			
			selected(itemIndex, deptId, deptName, item, level) {
				for(let a = 0; a < this.getFristDate.length; a++) {
					this.getFristDate[a].showDuigou = false
				}
				this.getFristDate[itemIndex].showDuigou = true;
				this.subTitle = deptName;
				if(item.subDepts.length > 0) {
					for(let i in item.subDepts) {
						item.subDepts[i].showDuigou = false; //用于是否显示对勾。。。
					}
					this.subDate = item.subDepts
					this.findRoleListByDeptLevel(deptId, level)
				} else {
					this.findRoleListByDeptLevel(deptId, level)
					this.subDate = [[{"subDepts": ""}]]
					console.log("没有下一级部门了01")
				}
				this.roleJson=[];
			},
			//获取一级子部门,第一级点击
			selectedNext(index, deptId, deptName, item, level) {
				for(let a = 0; a < this.subDate.length; a++) {
					this.subDate[a].showDuigou = false
				}
				this.subDate[index].showDuigou = true;
				this.subTitle01 = deptName;
				if(item.subDepts.length > 0) {
					for(let i in item.subDepts) {
						item.subDepts[i].showDuigou = false; //用于是否显示对勾。。。
					}
					this.subDate01 = item.subDepts
					this.findRoleListByDeptLevel(deptId, level)
				} else {
					this.findRoleListByDeptLevel(deptId, level)
					this.subDate01 = []
					console.log("没有下一级部门了02")
				}
				this.roleJson=[];
			},
			/*selectedNext(itemIndex, deptId, deptName, item, level) {
				for(let a = 0; a < this.subDate.length; a++) {
					this.subDate[a].showDuigou = false
				}
				this.subDate[itemIndex].showDuigou = true;
				this.subTitle01 = deptName;
				if(item.subDepts.length > 0) {
					for(let i in item.subDepts) {
						item.subDepts[i].showDuigou = false; //用于是否显示对勾。。。
					}
					this.subDate01 = item.subDepts
					this.findRoleListByDeptLevel(deptId, level)
				} else {
					this.findRoleListByDeptLevel(deptId, level)
					this.subDate01 = []
					console.log("没有下一级部门了02")
				}
				this.roleJson=[];
			},*/
			//获取一级子部门,第一级点击
			selectedNext01(itemIndex, deptId, deptName, item, level) {
				for(let a = 0; a < this.subDate01.length; a++) {
					this.subDate01[a].showDuigou = false
				}
				this.subDate01[itemIndex].showDuigou = true;
				this.subTitle02 = deptName;
				if(item.subDepts.length > 0) {
					for(let i in item.subDepts) {
						item.subDepts[i].showDuigou = false; //用于是否显示对勾。。。
					}
					this.subDate02 = item.subDepts
					this.findRoleListByDeptLevel(deptId, level)
				} else {
					this.findRoleListByDeptLevel(deptId, level)
					this.subDate02 = []
					console.log("没有下一级部门了03")
				}
				this.roleJson=[];
			},
			//获取一级子部门,第一级点击
			selectedNext02(itemIndex, deptId, deptName, item, level) {
				for(let a = 0; a < this.subDate02.length; a++) {
					this.subDate02[a].showDuigou = false
				}
				this.subDate02[itemIndex].showDuigou = true;
				this.subTitle03 = deptName;
				if(item.subDepts.length > 0) {
					for(let i in item.subDepts) {
						item.subDepts[i].showDuigou = false; //用于是否显示对勾。。。
					}
					this.subDate03 = item.subDepts
					this.findRoleListByDeptLevel(deptId, level)
				} else {
					this.findRoleListByDeptLevel(deptId, level)
					this.subDate03 = []
					console.log("没有下一级部门了04")
				}
				this.roleJson=[];
			},
			//获取角色  	/v1/system/role/findRoleListByDeptLevel
			/*findRoleListByDeptLevel(deptId, level) {
				this.roleFootDate = []
				let url = cont.system + "/v1/system/role/findRoleListByDeptLevel?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&deptId=" + deptId + "&level=" + level;
				this.axios.post(url).then((getRes) => {
					if(getRes.data.messages.data) {
						let editTree = common.filterNull(getRes.data.messages.data);
						
						for(let i in editTree) {
							editTree[i].showDuigou = false; ////用于控制显示编辑和删除图标
						}
						this.roleFootDate = editTree;
					} else {
						this.roleFootDate = []
					}
				}).catch(function(error) {
					console.log(error)
				});
				this.roleJson=[];
			},*/
			
			//获取数据
			
			
			
			
			
		},
		computed:{
			tabIndexResult(){
				return this.chooseIndex;
			}
		},
		watch:{
			chooseIndex(val,oldval){
				this.$emit("freshenView")
			}
		}
	}
</script>