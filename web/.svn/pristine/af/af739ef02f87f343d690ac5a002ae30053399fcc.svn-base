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
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					height: 25px;
					text-align: center;
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
			}
		}
	}
</style>
<template>
	<div class="szongbu">
		<div class="bumen">
			<h3>部门</h3>
			<ul class="clearfix xuan">
				<li v-for="(item,subIndex) in getFristDate" @click="selected(subIndex,item.deptId,item.deptName,item,item.level)" :id="item.deptId" :class="{isActive:item.showDuigou}">{{item.deptName}}</li>
			</ul>
		</div>
		<div class="bumen" v-show="subDate.length>0">
			<h3>{{subTitle}}</h3>
			<ul class="clearfix xuan">
				<li v-for="(item,index) in subDate" @click="selectedNext(index,item.deptId,item.deptName,item,item.level)" :id="item.deptId" :class="{isActive:item.showDuigou}">{{item.deptName}}</li>
			</ul>
		</div>
		<div class="bumen" v-show="subDate01.length>0">
			<h3>{{subTitle01}}</h3>
			<ul class="clearfix xuan">
				<li v-for="(item,index) in subDate01" @click="selectedNext01(index,item.deptId,item.deptName,item,item.level)" :id="item.deptId" :class="{isActive:item.showDuigou}">{{item.deptName}}</li>
			</ul>
		</div>
		<div class="bumen" v-show="subDate02.length>0">
			<h3>{{subTitle02}}</h3>
			<ul class="clearfix xuan">
				<li v-for="(item,index) in subDate02" @click="selectedNext02(index,item.deptId,item.deptName,item,item.level)" :id="item.deptId" :class="{isActive:item.showDuigou}">{{item.deptName}}</li>
			</ul>
		</div>
		<div class="bumen" v-show="roleFootDate.length>0">
			<h3>角色（可多选）</h3>
			<ul class="clearfix">
				<li v-for="(item,index) in roleFootDate" :id="item.roleId" @click="addBg(index)" :class="{isActive:item.showEdit}">{{item.roleName}}<img src="../../../assets/duiHao.jpg" /></li>
			</ul>
		</div>
		<div class="btns">
			<button class="btn2" @click="getIdName()">确认</button>
		</div>
	</div>
</template>
<script>
	import cont from '../../../common/const'

	export default {
		data() {
			return {
				rolesDate: ["总部", "大区", "地区", "校区"], //存储角色确定
				headSchoolId: "", //存放学校ID
				getFristDate: [], //返回大类数据
				subDate: [], //返回子类数据
				subTitle: {}, //存储子类标题

				subDate01: [], //返回子类数据
				subTitle01: {}, //存储子类标题

				subDate02: [], //返回子类数据
				subTitle02: {}, //存储子类标题

				roleFootDate: [], //角色数据
			}
		},

		mounted() {
			this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId
			//页面刚加载时调取数据
			this.getDeptList()
		},
		methods: {
			//获取部门列表
			getDeptList() {
				let url = cont.system + "v1/system/dept/getDeptList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&campusType=2";
				this.axios.post(url).then((getRes) => {
					console.log(getRes)
					if(getRes.data.messages.data) {
						let editTree = getRes.data.messages.data;
						for(let i in editTree) {
							editTree[i].showDuigou = false; //用于是否显示对勾。。。
						}
						this.getFristDate = editTree;
					}
				}).catch(function(error) {
					console.log(error)
				});
			},
			//获取一级子部门,第一级点击
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
					this.subDate = []
					console.log("没有下一级部门了01")
				}
			},
			//获取一级子部门,第一级点击
			selectedNext(itemIndex, deptId, deptName, item, level) {
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
			},
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
			},
			//获取角色  	/v1/system/role/findRoleListByDeptLevel
			findRoleListByDeptLevel(deptId, level) {
				let url = cont.system + "v1/system/role/findRoleListByDeptLevel?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&deptId=" + deptId + "&level=" + level;
				this.axios.post(url).then((getRes) => {
					if(getRes.data.messages.data) {
						let editTree = getRes.data.messages.data;
						for(let i in editTree) {
							editTree[i].showEdit = false; ////用于控制显示编辑和删除图标
						}
						this.roleFootDate = editTree;
					} else {
						this.roleFootDate = []
					}
				}).catch(function(error) {
					console.log(error)
				});
			},
			//添加背景色
			addBg(index) {
				this.roleFootDate[index].showEdit = !this.roleFootDate[index].showEdit
			},
			//获取角色id
			getIdName() {
				for(let j in this.roleFootDate) {
					if(this.roleFootDate[j].showEdit) {
						console.log(this.roleFootDate[j].roleId)
						console.log(this.roleFootDate[j].roleName)
					}
				}
			}
		}
	}
</script>