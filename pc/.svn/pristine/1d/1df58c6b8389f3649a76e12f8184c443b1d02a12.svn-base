<template>
	<div class="vip_standard">
		<header class="header">
			<span>VIP标准</span>
			<span @click="editClick" v-show="!edit"></span>
		</header>

		<ul>
			<li class="common-kc" v-for="(ele,index) in list" :key="index">
				<h1 class="common-title">
					<span>{{ele.name}} · {{ele.standard_type == 'lessonPackage' ? '课时包' : '课时段'}} · 标准设置</span>
					<el-tooltip class="el-item2" effect="dark" content="课程链后边括号当中的数字，为课程链在系统当中的顺序码" placement="top-start" v-if="index == 0">
				      	<el-button></el-button>
					</el-tooltip> 
					<div class="course-set-div" v-if="!edit">
						<input type="text" class="lang" v-model="ele.value"   :placeholder="'请输入' + ele.name + '标准'" @blur="inputBlur(ele , index)"/>
					</div>
				</h1>
				<section class="common-section">
					<span class="common-section-span" v-for="(ele2 , index2) in ele.standard_list"> 
							{{ele2.name}}
						<i v-if="edit" @click="removeList(ele2)"></i></span>
				</section>
			</li>
		</ul>

		<footer v-if="edit">
			<span @click="onClick"></span>
		</footer>
	</div>
</template>
<script>
import urls from '@commonJS/const'
	export default {
		data() {
			return {
				edit: false,
				list: [ ]
			}
		},
		methods: {
			/***
			 * 编辑
			 */
			editClick() {
				this.edit = !this.edit
			},
			/***
			 * 编辑完成
			 */
			onClick() {
				this.edit = false
			},
			/**
			 * 失焦添加
			 */
			inputBlur(ele , index) {
				if(ele.value == "") {
					 this.$message({
						message: '输入的能容不能为空！',
						type: 'warning'
						});
				}else {
						let newObject = JSON.parse(JSON.stringify(ele.standard_list[ele.standard_list.length-1]))
						let standard_type =  ele.standard_type == 'lessonPackage' ? '课时包' : '课时段'
						newObject.name = ele.name +' · '+ ele.value +' · '+ standard_type
						this.list[index].standard_list.push(newObject)
						this.addList(ele,standard_type)
				}
			},
			/***
			* 初始加载数据
			 */
			initList() {
				let url = urls.vip + 'v1/campusvip/tuitionStandard/getVipTypeList' 
				let obj = {
					headSchoolId : this.$ls.get('USER_INFO').headSchoolId,
					accessToken: this.$ls.get('USER_INFO').accessToken
				}
				this.axios.post(url , obj)
				.then(res => {
					this.list = res.messages
					this.list.map(ele => { 
						ele.value = ''
					}) 
				})
			},
			/**
			* 新增VIP标准
			 */
			addList(ele , name) {
				let url = urls.vip + 'v1/campusvip/tuitionStandard/addVipStandard' 
				let obj = {
					head_school_id : this.$ls.get('USER_INFO').headSchoolId,
					accessToken : this.$ls.get('USER_INFO').accessToken,
					created_dy : this.$ls.get('USER_INFO').userId, 
					name : ele.name +' · '+ ele.value + ' · ' + name,
					type : ele.standard_type,
					vipTypeId : ele.id 
				}
				this.axios.post(url , obj)
				.then(res => {
					this.initList()
				})
			},
			/**
			* 删除VIP标准
			 */
			removeList(ele) {
				let url = urls.vip + 'v1/campusvip/tuitionStandard/delVipStandard' 
				let obj = {
					head_school_id : this.$ls.get('USER_INFO').headSchoolId,
					accessToken : this.$ls.get('USER_INFO').accessToken, 
					standardId : ele.id
				}
				this.axios.post(url , obj)
				.then(res => {
					this.initList()
				})
			}
		},
		mounted() {
			this.initList()
		}
	};
</script>

<style lang="less">
	@width : 1008px;
	@color : #31C27C;
	.vip_standard {
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
					height: 30px;
					margin-top: 8px;
					cursor: pointer;
					background: url(../../../../images/home-schint/xdg.png) no-repeat right center;
				}
			}
		}
		.common-section {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			.common-section-span {
				padding-right: 70px;
				margin-top: 23px;
				position: relative;
				color: #666;
				i {
					display: block;
					position: absolute;
					right: 46px;
					top: 0;
					width: 20px;
					height: 20px;
					background: url("../../../../images/common-icon/deleteSolid.png") no-repeat center center;
					cursor: pointer;
				}
			}
		}
		.common-kc {
			width: @width;
			box-sizing: border-box;
			padding: 20px 30px 46px 30px;
			background: #fff;
			margin-bottom: 10px;
			border-radius: 6px;
		}
		.common-title {
			width: 100%;
			height: 36px;
			border-bottom: 1px dashed #DBDBDB;
			color: @color;
			display: flex;
			span {
				margin-right: 6px;
			}
			.course-set-div {
				margin-left: 30px;
				position: relative;
				.comp-table {
					width: 900px;
					position: absolute;
					box-sizing: border-box;
					padding: 0px 30px 0;
					background: #353735;
					border-radius: 6px;
					top: 36px;
					z-index: 10;
				}
				input {
					&.lang {
						width: 133px;
					}
					&.zhong {
						width: 106px;
					}
					&.small {
						width: 40px;
					}
					padding-left: 4px;
					color: #999;
					border-bottom: 1px solid @color;
				}
			}
		}
		footer {
			width: 100%;
			height: 50px;
			background: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 6px;
			margin-bottom: 50px;
			span {
				display: block;
				width: 30px;
				height: 30px;
				cursor: pointer;
				margin: 0 30px;
				&:first-child {
					background: url("../../../../images/system-campus/table_c.png") no-repeat center center;
				}
				&:last-child {
					background: url("../../../../images/system-campus/table_d.png") no-repeat center center;
				}
			}
		}
	}
	.el-item2 {
        border: none;
        padding-left: 0px;
        background: url("../../../../images/system-campus/tanhao.png") no-repeat left top;
        background-position-y: 1px;
    }
</style>