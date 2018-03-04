<template>
	<div class="vip-one">
		<header class="header">
			<span>VIP设置 · 一对一设置</span>
			<span>说明</span>
		</header>

		<div class="vip-one-center ">
			<el-row class="vip-row-bor">
				<el-col :span="2">
					<div class="grid-content">序号</div>
				</el-col>
				<el-col :span="9">
					<div class="grid-content grid-left">一对一标准</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content">费用标准</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content">生效日期</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content">试用校区</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content">操作</div>
				</el-col>
			</el-row>

			<el-row class="vip-row-bor" v-for="(ele,index) in list" :key="index">
				<el-col :span="2">
					<div class="grid-content grid-black">{{index+1}}</div>
				</el-col>
				<el-col :span="12">
					<!--第一层初始-->
					<el-row> 
						<el-col :span="19">
							<div class="grid-spanlist">{{ele.name}}</div>
						</el-col>
						<el-col :span="5">
							<div class="grid-spanlist" v-if="ele.tuition_list.length == 0">
								<span class="grid_add" @click="addClick(ele.id , ele.name , ele.type)"></span>
							</div>
							<div class="grid-spanlist" v-if="ele.tuition_list.length != 0">
								<span class="grid_look" @click="lookClick(ele.tuition_list[0].id)"></span>
							</div>
						</el-col>
					</el-row>
					<!--谁修改过-->
					<el-row v-if="ele.tuition_list.length == 2">
						<el-col :span="19">
							<div class="grid-spanlist grid-green">{{ele.update_info}}</div>
						</el-col>
						<el-col :span="5">
							<div class="grid-spanlist" >
								<span class="grid_look" @click="lookClick(ele.tuition_list[1].id)"></span>
							</div>
						</el-col>
					</el-row>
				</el-col>
				<!--生效日期-->
				<el-col :span="4" v-if="ele.tuition_list.length != 0">
					<div class="grid-content">{{ele.tuition_list[0].effective_datetime | newdate}}</div>
				</el-col>
				<!--校区显示-->
				<el-col :span="4" v-if="ele.tuition_list.length != 0">
					<div class="grid-content grid-coursur" >
						{{ele.tuition_list[0] | school}}
						({{ele.tuition_list[0].school_list.length}})
						<img src="../../../../images/system-head/bianjiao.png" alt="" />
						<div class="grid-absoluted-wai">
							<div class="grid-absoluted">
								<span v-for="(ele2 , index2) in ele.tuition_list[0].school_list" :key="index2">
									{{ele2.school_name}}
								</span> 
							</div>
						</div>
					</div>
				</el-col>
				<!--编辑切换-->
				<el-col :span="2" v-if="ele.tuition_list.length != 0">
					<div class="grid-content">
						<span class="grid-switch1" @click="editClick(ele.tuition_list[0].id , ele.name ,ele.type)"></span> 
						<span :class="{grid_switch2: ele.status == 'enable' , close_span: ele.status == 'disabled'}" @click="switchClick(ele.status,index)"></span>
					</div>
				</el-col>
			</el-row>
			
			<transition name="el-fade-in-linear">
				<v-table 
					@close="tableclose" 
					@ok="ok" 
					:data="constdata" 
					v-if="tableShow"> 
				</v-table>
			</transition>
			
			<transition name="el-fade-in-linear">
				<v-deitTable 
					v-if="deitTableShow"
					:data="addProp" 
					@close="deitTableClose">
				</v-deitTable>
			</transition> 
		</div>
	</div>
</template>

<script>
	import urls from '@commonJS/const'
	import popup from '@components/Popup'
	import deitTable from './vip-one-table'
	export default {
		data() {
			return { 
				list: [],
				tableShow: false,//弹窗提醒
				constdata: {
					title: "提醒",
					data: "您确定要关闭么",
					isImg: true,
					warn: true,
					succe: true
				},
				copelist: [],//存储开关状态
				copelistindex: -1, 
				deitTableShow: false,//修改添加
				addProp: {//传给子组件
					name : '',
					id: '',
					subjectState: '',
					editState: ''
				}
			}
		},
		filters: {
			/**
			 * 校区显示
			 */
			school(ele) {
				if(ele.all_school == false){
					return ele.school_list[0].school_name
				}else{
					return '全部校区'
				}
			},
			/**
			 * 时间转换
			 */
			newdate(ele) {
				return (new Date(ele)).toLocaleDateString().split('/').join("-")
			}
		},
		components: {
			"v-table" : popup,
			"v-deitTable" : deitTable
		},
		methods: {
			/**
			 * 开关按钮
			 */
			switchClick(ele , index) {
				this.copelist = JSON.parse(JSON.stringify(this.list))
				this.copelistindex = index 
				if(ele == 'enable'){//如果是开启状态，打开弹窗提醒
					this.tableShow = true
				}else{ 
					this.copelist[index].status = 'enable'
					this.list = this.copelist
				} 
			}, 
			/**
			 * 点击弹窗确认按钮，进行切换
			 */
			ok() {
				this.tableShow = false  
				this.copelist[this.copelistindex].status = 'disabled'
				this.list = this.copelist  
			},
			/**
			 * 关闭提醒弹窗
			 */
			tableclose() {
				this.tableShow = false
			}, 
			/***
			 * 编辑按钮
			 */
			editClick(id , name , type) {
				this.addProp = {//传给子组件
					name : name,
					id : id,
					subjectState : '编辑',
					editState : type == 'lessonPackage' ? '课时包' : '课时段'
				}
				this.deitTableShow = true
			},
			/**
			 * 添加按钮啊
			 */
			addClick(id , name , type) {
				this.addProp = {//传给子组件
					name : name,
					id : id,
					subjectState : '添加',
					editState : type == 'lessonPackage' ? '课时包' : '课时段'
				}
				this.deitTableShow = true
			},
			/**
			 * 查看按钮
			 */
			lookClick(id) {
				console.log(id)
			},
			/**
			 * 关闭添加,编辑按钮 
			 */
			deitTableClose() {
				this.deitTableShow = false
			}
		},
		mounted() {
			/***
			 * 初始化加载
			 */
			let newurl = urls.vip + 'v1/campusvip/tuitionStandard/getVipStandardList'
			let obj = {
				headSchoolId: this.$ls.get('USER_INFO').headSchoolId,
				accessToken: this.$ls.get('USER_INFO').accessToken,
				vipType: 'oneToOne'
			}
			this.axios.post(newurl, obj)
				.then(res => {
					this.list = res.messages
				}) 
		}
	}
</script>

<style lang="less" scoped="scoped">
	@width : 1008px;
	@color : #31C27C;
	.vip-one {
		header {
			width: @width;
			height: 48px;
			background: #fff;
			padding: 0 30px;
			box-sizing: border-box;
			border-radius: 6px;
			margin-bottom: 12px;
			color: @color;
			line-height: 50px;
			display: flex;
			justify-content: space-between;
			span {
				&:last-child {
					display: block;
					width: 30px;
					height: 27px;
					margin-top: 8px;
					line-height: 30px;
					padding-left: 30px;
					cursor: pointer;
					background: url(../../../../images/system-campus/bookadd.png) no-repeat left center;
				}
			}
		}
		.vip-one-center {
			width: @width;
			border-radius: 6px;
			background: #fff;
			box-sizing: border-box;
			padding: 0 30px;
			.vip-row-bor {
				border-bottom: 1px dashed #DEDEDE;
				padding: 16px 0;
			}
			.grid-content {
				color: @color;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.grid-black {
				color: #666;
			}
			.grid_look,
			.grid_add {
				display: block;
				width: 30px;
				min-height: 30px;
				background: url(../../../../images/common-icon/add.png) no-repeat center center;
				cursor: pointer;
				&:hover {
					background: url(../../../../images/system-head/click_green.png) no-repeat center center;
				}
			}
			.grid_look {
				background: url(../../../../images/system-head/check_normal.png) no-repeat center center;
				&:hover {
					background: url(../../../../images/system-head/check_press.png) no-repeat center center;
				}
			}
			.grid-spanlist {
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				padding-left: 30px;
			}
			.grid-left {
				justify-content: flex-start;
				padding-left: 70px;
			}
			.grid-green {
				color: @color;
				text-align: left;
			}
			.grid-coursur {
				cursor: pointer;
				position: relative;
				&:hover .grid-absoluted-wai{
					display: flex;
				}
				&:hover img{
					display: block;
				}
				.grid-absoluted-wai { 
					position: absolute;
					transform: translateX(-50%);
					bottom: 28px;
					left: 50%; 
					width: 267px;
					display: flex;
					justify-content: center;
					display: none;
					.grid-absoluted {  
						overflow: hidden;
						padding: 12px 20px;
						border: 1px solid @color; 
						border-radius: 4px;
						background: #fff; 
						z-index: 10;
						span {
							display: block;
							float: left;
							margin-right: 12px;
						}
					}
				}
				img { 
					position: absolute;
					display: block;
					width: 21px;
					height: 10px;
					bottom: 19px;
					left: 40%;
					transform: translateX(-50%);
					z-index: 11;
					display: none;
				}
			}
			.grid-switch1 {
				display: block;
				width: 30px;
				height: 30px;
				margin-top: -5px;
				cursor: pointer; 
				background: url(../../../../images/home-schint/xdg.png) no-repeat center center; 
			}
			.grid_switch2{ 
				display: block;
				width: 30px;
				height: 30px;
				margin-top: -5px;
				cursor: pointer;
				background: url(../../../../images/common-icon/open.png) no-repeat center center;
			}
			.close_span{
				display: block;
				width: 30px;
				height: 30px;
				margin-top: -5px;
				cursor: pointer;
				background: url(../../../../images/common-icon/open-close.png) no-repeat center center;
				}
		}
	}
</style>