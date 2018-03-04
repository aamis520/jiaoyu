<style lang="less" scoped>
	.clearfix:after {
		display: block;
		content: '';
		clear: both;
	}
	
	.compile {
		position: absolute;
		right: 0;
		top: -45px;
		cursor: pointer;
		width: 233px;
		span:nth-child(1) {
			width: 200px;
			position: relative;
			i {
				position: absolute;
				right: 7px;
				top: 0px;
				color: #31c27c;
			}
			input {
				width: 170px;
				height: 22px;
				line-height: 22px;
				border-bottom: 1px solid #31c27c;
			}
		}
		span:nth-child(2) {
			margin-left: 10px;
			img {
				vertical-align: middle;
			}
		}
	}
	
	.zhanga {
		width: 1008px;
		background: white;
		border-radius: 4px;
		margin-bottom: 12px;
		position: relative;
		.topx {
			height: 70px;
			line-height: 70px;
			padding-left: 140px;
			.name {
				float: left;
				margin-right: 115px;
			}
			.addF {
				float: left;
				margin-right: 65px;
			}
			.choseRole {
				float: left;
				margin-right: 95px;
			}
			.dui {
				float: left;
				margin-right: 65px;
				text-align: center;
				padding-left: 20px;
				.ok {
					img {
						width: 20px;
						height: 20px;
						vertical-align: middle;
						cursor: pointer;
					}
				}
			}
			input {
				padding: 5px 10px;
				border: 0;
				outline: 0;
				border-bottom: 1px solid #2da155;
			}
			.inp1 {
				width: 90px;
			}
			.inp2 {
				width: 110px;
			}
			.inp3 {
				width: 200px;
				cursor: pointer;
			}
		}
		.lists {
			width: 100%;
			min-height: 600px;
			border-top: 1px dotted #D3DDD5;
			color: #666666;
			padding: 0 20px;
			box-sizing: border-box;
			li {
				width: 100%;
				height: 70px;
				line-height: 70px;
				border-bottom: 1px dotted #D3DDD5;
				position: relative;
				box-sizing: border-box;
				font-size: 14px;
				clear: both;
				.suoyin {
					width: 65px;
					float: left;
					margin-right: 10px;
					padding-right: 15px;
					text-align: center;
				}
				.xingming {
					width: 175px;
					margin-right: 80px;
					float: left;
					position: relative;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					img {
						display: inline-block;
						position: relative;
						top: 10px;
						margin-right: 10px;
					}
					
					b {
						display: inline-block;
					}
				}
				.tel {
					margin-right: 55px;
					width: 130px;
					float: left;
					position: relative;
					padding-left: 10px;
				}
				input {
					position: absolute;
					color: #666666;
					left: 0;
					top: 0;
					width: 100%;
					box-sizing: border-box;
					padding-left: 10px;
					background-color: #FFFFFF;
					border-bottom: 1px solid #2da155;
					height: 80%;
					padding-top: 10%;
					font-size: 15px;
				}
				
				.last {
					width: 120px;
					float: left;
					height: 70px;
					position: relative;
					img {
						width: 20px;
						position: absolute;
						top: 20px;
						right: 50px;
						cursor: pointer;
					}
					.cancelEdit{
						right: 70px;
						width: 50px;
						top: 5px;
					}
				}
			}
		}
		.block {
			width: 100%;
			height: 60px;
			background: #fff;
			right: 0;
			text-align: center;
			padding-top: 20px;
		}
	}
	
	.newBox {
		width: 275px;
		position: absolute;
		left: 530px;
    	bottom: 50px;
		background: #fff;
		z-index: 20;
		overflow: hidden;
		padding-bottom: 10px;
		display: none;
		.news{
			width: 100%;
			overflow-y: auto;
			overflow-y: -webkit-paged-y;
			box-sizing: border-box;
			padding: 10px;
			border-radius: 5px;
			border: 1px solid #40ad83;
		}
		.con1 {
			height: 30px;
			line-height: 30px;
			span {
				border-right: 1px dotted #999;
				padding: 0 10px;
				&:last-child{
					border: none;
				}
			}
		}
		.jiaotou{
			position:relative;
			bottom:1px; 
			left:50px;
			&:after,&:before{
				border: solid transparent;
				content: ' ';
				height: 0;
				top: 100%;
				position: absolute;
				width: 0;
			}
			&:after{
				border-width: 6px;
				border-top-color: #FFFFFF;
				left: 7px;
			}
			&:before{
				border-width: 8px;
				border-top-color: #40ad83;
				left: 5px;
			}
		}
		
	}
	.hide{
		visibility: hidden;
	}
	.moreInfo{
		display: none;
	}
</style>
<template>
	<form>
		<div class="compile">
			<span>
        <input type="text" placeholder="请输入姓名首字母搜索" maxlength="8" v-model="searchField" @keydown.enter="searchBtn(searchField)">
        <i class="el-icon-search" @click.stop.prevent.enter="searchBtn(searchField)"></i>
      </span>
			<span style="display: none;"><img src="../../assets/help.png"></span>
		</div>
		<div class="zhanga">
			<div class="topx clearfix">
				<div class="name">
					<input type="text" placeholder="输入姓名" maxlength="5" class="inp1" v-model="personObj.name">
				</div>
				<div class="addF">
					<input type="text" placeholder="输入电话号码" class="inp2" v-model="personObj.phone" maxlength="11"></div>
				<div class="choseRole" @click="changeStore()">
					<input type="text" placeholder="选择校区与角色" class="inp3" readonly="readonly" v-model="showChooseRoleDate">
				</div>
				<div class="dui"><span class="ok"><img src="../../assets/SmallduiGou01.png" alt="" @click="insertAccount(personObj)"></span></div>
			</div>
			<ul class="lists">
				<li v-for="(item,index) in getNowListDate" :id="item.id">
					<div class="suoyin">{{index+1}}</div>
					<div class="xingming">
						<img src="../../assets/images/01.jpg" alt="">{{item.full_name}}
						<input type="text" v-if="index==nowEditCol"  maxlength="5" v-model="editArr.full_name">
						<img v-if="item.teacer_type === 'fullTime'" src="../../../static/home-icon/qzbg01.png" />
				        <img v-else-if="item.teacer_type === 'partTime'" src="../../../static/home-icon/jzbg01.png" />
				        <!--<img v-else-if="item.teacer_type === 'partTime'" src="../../../static/home-icon/gggg.png" />-->
					</div>
					<div class="tel">{{item.account}}<input type="text" v-if="index==nowEditCol" maxlength="11" v-model="editArr.account" ></div>
					
					<account-item :roule='item' :toggleEdit="nowEditCol==index" v-on:change="changeLayer"></account-item>
					
					<div class="last">
						<img class="bianji"  src="../../assets/images/01_20.jpg"  @click.stop="updateAccount(index)"  v-bind:class="[item.showEdit ? '':hideSet]">
						<img class="oks" src="../../assets/SmallduiGou01.png"  v-bind:class="[item.showEdit ? hideSet:'']" @click.stop="editSave(item.id)">
						<img class="cancelEdit" src="../../assets/cancelEdit.png" v-bind:class="[item.showEdit ? hideSet:'']"  @click.stop="cancelEdit(index)" >
					</div>
				</li>
			</ul>
			 <div v-if="choses">
		         <defining-roles></defining-roles>
		    </div>
			<div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="nowPage"
			      :page-sizes="[10, 20, 50, 100]"
			      :page-size="10"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="pageAllTotal">
			    </el-pagination>
			  </div>
		</div> 
	</form>
</template>
<script>
	import qs from "qs"
	import cont from '../../common/const'
	import DefiningRoles from '@/page/accountNumber/DefiningRoles/DefiningRoles'
	import item from './creatAccountItem'
	export default {
		data() {
			return {
				personObj: { //获取新添加人员信息
					name: '',
					phone: '',
					index: 0
				},
				headSchoolId: '', //总校ID
				nowEditCol:-1,//当前处于编辑状态的行
				getBackDate:[],//储存返回回来的数据
				currentPage1: 3,//element-ui分页
		        currentPage2: 50,
		        currentPage3: 1,
		        
		        nowPage: 1,//当前页面
		        pageSize:10,//每次请求每页多少条
		        pageAllTotal:100,//总的条数
		        
		        choses:false,//用于是否显示弹出部分
		        getChoose:[],//接受返回的角色
		        getChooseXiugai:[],//接受返回的角色
		        getChooseRole:[],//接受返回的角色
		        
		        showChooseRoleDate:"",//用于存储选择的角色
		        showChooseRoleDateXiu:"",//用于存储选择的角色
		        
		        getNowAllDate:[],//用于存储从数据库新获取的数据 包含页码
		        getNowListDate:[],//用于存储从数据库新获取的数据 不包含
		        
		        searchField:"",//搜索框关键字
		        
		        hideSet:"hide",
		        
		        markBoolaen:0,//用于区分设置返回来的数据，是新增数据还是新添加数据
		        moreInfo: 'moreInfo',//控制弹出显示和隐藏
		         
			}
		},
		created(){
		},
		beforeDestroy(){
			eventBus.$off('getTarget');
			eventBus.$off('hideLayer');
		},
		updated(){
				
		},
		mounted() {
			this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId
			
			//接受返回的数据，隐藏遮罩层
			let _this = this
			eventBus.$on('getTarget', function(val) {
				_this.getChooseXiugai = val;
				if (_this.markBoolaen == 0) {
					_this.getChoose = val;
					_this.showChooseRoleDate = _this.getChooseXiugai[0].first_dept_name + " " +_this.getChooseXiugai[0].second_dept_name + " "+_this.getChooseXiugai[0].thrid_dept_name+" "+_this.getChooseXiugai[0].role_name;
					_this.$store.commit('SET_ADDPERSON' , _this.showChooseRoleDate)
				} else{
					_this.editArr.school_roles = val
					_this.showChooseRoleDateXiu= _this.getChooseXiugai[0].first_dept_name + " " +_this.getChooseXiugai[0].second_dept_name + " "+_this.getChooseXiugai[0].thrid_dept_name+" "+_this.getChooseXiugai[0].role_name;
					_this.$store.commit('SET_ADDPERSON' , _this.showChooseRoleDateXiu)
				}
				
			})
			
			//动态修改回显
			eventBus.$on('huixianCreatAccount', function(val) {
				if(_this.nowEditCol != -1){
					_this.getNowListDate[_this.nowEditCol].school_roles = _this.$store.state.addAccount.showChoose
				}
			})
			
			//关闭遮罩层
			eventBus.$on('hideLayer', function(val) {
				_this.choses = false;
			})
			
			//初始化页面，获取数据
			this.findAccount()
			
		},
		methods: {
			//获取人员列表
			findAccount() {
				let getDate = qs.stringify({
					"account_schools":"",
					"account_departments":"",
				    "head_id": this.headSchoolId,
				    "pageSize": this.pageSize,
				    "pageNo": this.nowPage,
				})
				let url =  cont.system + "v1/account/findAccount?accessToken=aaaa";
				this.axios.post(url,getDate).then((getRes) => {
					//初始化页数总计分页信息
					this.getNowAllDate = getRes.data.messages;
					this.nowPage = this.getNowAllDate.pageNo;
					this.pageSize = this.getNowAllDate.pageSize;
					this.pageAllTotal = this.getNowAllDate.totalCount;
					
					if(getRes.data.messages.accountList) {
						let editTree = getRes.data.messages.accountList;
						for(let i in editTree) {
							editTree[i].showEdit = true; //用于是否显示对勾。。。
							editTree[i].showLayer = true; //用于是否显示弹层。。。
						}
						this.getNowListDate = editTree;
					}
					this.personObj.name = ''
					this.personObj.phone = ''
					this.showChooseRoleDate = ''
				}).catch(function(error) {
					console.log(error)
				});
			},
			//新添加人员
			insertAccount() {
				let phone = this.personObj.phone;
				let pattern = /^1[3-9]\d{9}$/
				if(!pattern.test(phone)) {
					this.$message({
						type: 'warning',
						message: '输入手机号有误!'
					});
					this.personObj.phone = ''
					return false;
				}
				
				if ((this.personObj.name != "" ) && (this.personObj.phone != "" ) && (this.showChooseRoleDate != "") ) {
					let jsonDate = {
					    "account": this.personObj.phone,
					    "head_id": this.headSchoolId,
					    "create_by": "59afa5d9c369de254ccbf6c7",
					    "full_name": this.personObj.name,
					    "school_roles": this.getChoose
					}
					jsonDate = JSON.stringify(jsonDate)
					
					let newJsonDate = {
						accountJsonStr : jsonDate
					}
					
					newJsonDate = qs.stringify(newJsonDate)
					
					let url =  cont.system + "v1/account/insertAccount?accessToken=aaaa";
					this.axios.post(url,newJsonDate).then((getRes) => {
						if(getRes.data.errorcode == 1005001){
							this.$message({
								type: 'warning',
								message: '手机号已存在!'
							});
							this.personObj.phone = ''
						}else if(getRes.data.errorcode == 200){
							this.findAccount()
						}else{
							this.$message({
								type: 'warning',
								message: '输入手机号有误!'
							});
							this.personObj.phone = ''
						}
						this.markBoolaen = 0;
					}).catch(function(error) {
						console.log(error)
					});
				} else{
					console.log("输入有误")
				}
			},
			//编辑修改//修改人员信息
			updateAccount(index){
				this.nowEditCol = index;
				this.markBoolaen = 1;
				for(let j = 0; j < this.getNowListDate.length; j++) {
					this.$set(this.getNowListDate, j , Object.assign(this.getNowListDate[j],{showEdit : true}) ) 
				}
				this.$set(this.getNowListDate, index , Object.assign(this.getNowListDate[index],{showEdit : false})) 
				
				this.$store.commit("SET_CHOOSE",this.getNowListDate[index].school_roles)
			},
			/**取消编辑供应商信息**/
			cancelEdit(index){
				this.nowEditCol = -1;
				this.markBoolaen = 0;
				for(let j = 0; j < this.getNowListDate.length; j++) {
					this.$set(this.getNowListDate, j , Object.assign(this.getNowListDate[j],{showEdit : true}) ) 
				}
				this.getNowListDate[index].school_roles = this.$store.state.addAccount.showChoose
			},
			/**保存编辑供应商信息**/
			editSave(itemId){
				if ((this.editArr.full_name != "" ) && (this.editArr.account != "" ) && (this.editArr.school_roles != "") ) {
					let jsonDate = {
						"id": itemId,
					    "account": this.editArr.account,
					    "head_id": this.headSchoolId,
					    "create_by": "59afa5d9c369de254ccbf6c7",
					    "full_name": this.editArr.full_name,
					    "school_roles": this.editArr.school_roles
					}
					
					jsonDate = JSON.stringify(jsonDate)
					
					let newJsonDate = {
						accountJsonStr : jsonDate
					}
					
					newJsonDate = qs.stringify(newJsonDate)
					
					let url =  cont.system + "v1/account/updateAccount?accessToken=aaaa";
					this.axios.post(url,newJsonDate).then((getRes) => {
						this.findAccount()
						this.markBoolaen = 0;
						//this.$router.go(0)
					}).catch(function(error) {
						console.log(error)
					});
					for(let j = 0; j < this.getNowListDate.length; j++) {
						this.$set(this.getNowListDate, j , Object.assign(this.getNowListDate[j],{showEdit : true}) ) 
					}
				} else{
					console.log("输入有误")
				}
				this.nowEditCol = -1
			},
			//elementui 分页
			handleSizeChange(val) {
		        this.pageSize = val;
		        this.findAccount() 
		    },
		    handleCurrentChange(val) {
		        this.nowPage = val
		        this.findAccount() 
		    },
		    //模糊搜索
		    searchBtn(font){
		    	let getDate = qs.stringify({
				    "head_id": this.headSchoolId,
				    "pageSize": 10,
				    "pageNo": 1,
				    "first_name":font
				})
				let url =  cont.system + "v1/account/findAccountByFirstName?accessToken=aaaa";
				this.axios.post(url,getDate).then((getRes) => {
					this.getNowAllDate = getRes.data.messages;
					this.nowPage = this.getNowAllDate.pageNo;
					this.pageSize = this.getNowAllDate.pageSize;
					this.pageAllTotal = this.getNowAllDate.totalCount;
					if(getRes.data.messages.accountList) {
						let editTree = getRes.data.messages.accountList;
						for(let i in editTree) {
							editTree[i].showEdit = false; //用于是否显示对勾。。。
							editTree[i].showLayer = true; //用于是否显示弹层。。。
						}
						this.getNowListDate = editTree;
					}
					
					for(let j = 0; j < this.getNowListDate.length; j++) {
						this.$set(this.getNowListDate, j , Object.assign(this.getNowListDate[j],{showEdit : true}) ) 
					}
					this.searchField = ''
				}).catch(function(error) {
					console.log(error)
				});
		   },
		   changeLayer(date){
		   		this.choses=!this.choses
		   },
		   //为了初始化store的值
		   changeStore(){
		   		this.choses=!this.choses
		   		this.$store.commit("SET_CHOOSE",'')
		   }
		},
		computed:{
			//储存当前编辑的对象
			editArr(){
				let editObj = [];
				if (this.nowEditCol<0) {
					editObj = this.getNowListDate[0];
				} else{
					editObj = this.getNowListDate[this.nowEditCol];
				}
				return{
					"full_name" : editObj.full_name,
					"account" : editObj.account,
					"school_roles" : editObj.school_roles,
				}
			},
		},
		components:{
			DefiningRoles,
			'account-item':item
		}
	}
</script>