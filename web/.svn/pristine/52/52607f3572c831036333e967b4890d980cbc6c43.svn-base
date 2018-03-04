<style lang='less' scoped="scoped">
	.account-item {
		float: left;
		width: 282px;
		position: relative;
		height: 70px;
		box-sizing: border-box;
	}
	
	.tips {
		width: 270px;
		float: left;
		height: 70px;
		padding-left: 15px;
		position: relative;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		cursor: pointer;
		.tipsEdit {
			position: absolute;
			top: 0;
			left: 0;
			width: 80%;
			height: 80%;
			padding-left: 15px;
			box-sizing: border-box;
			border-bottom: 1px solid #2da155;
			background: #FFFFFF;
			cursor: pointer;
		}
	}
	
	.newBox {
		width: 275px;
		position: absolute;
		bottom: 50px;
		background: #fff;
		z-index: 20;
		overflow: hidden;
		padding-bottom: 10px;
		.con1 {
			width: 100%;
			overflow-y: auto;
			overflow-y: -webkit-paged-y;
			box-sizing: border-box;
			padding: 10px;
			border-radius: 5px;
			border: 1px solid #40ad83;
			li {
				height: 25px;
				line-height: 25px;
			}
			span {
				&:last-child {
					border: none;
				}
			}
		}
		.jiaotou {
			position: relative;
			bottom: 1px;
			left: 50px;
			&:after,
			&:before {
				border: solid transparent;
				content: ' ';
				height: 0;
				top: 100%;
				position: absolute;
				width: 0;
			}
			&:after {
				border-width: 6px;
				border-top-color: #FFFFFF;
				left: 7px;
			}
			&:before {
				border-width: 8px;
				border-top-color: #40ad83;
				left: 5px;
			}
		}
	}
</style>
<template>
	<div class="account-item">
		<div class="tips">
			<span v-if="editArr.first_dept_name">{{editArr.first_dept_name}}</span> 
			<span v-if="editArr.second_dept_name">· {{editArr.second_dept_name}}</span> 
			<span v-if="editArr.thrid_dept_name">· {{editArr.thrid_dept_name}}</span> 
			<span v-if="editArr.role_name">· {{editArr.role_name}}</span> 

			<div class="tipsEdit" @click.stop.prevent="changeShow" @mouseover="toggleShow" @mouseout="toggleShow" v-if="toggleEdit">
				<span v-if="editArr.first_dept_name">{{editArr.first_dept_name}}</span> 
				<span v-if="editArr.second_dept_name">· {{editArr.second_dept_name}}</span> 
				<span v-if="editArr.thrid_dept_name">· {{editArr.thrid_dept_name}}</span> 
				<span v-if="editArr.role_name">· {{editArr.role_name}}</span> 
				<span v-if="roule.school_roles.length>1">(<span style="color: #11B95C;">{{roule.school_roles.length}}</span>)</span>
			</div>
		</div>
		<div class="newBox" :show="roule.school_roles.length>1" v-if="isShow">
			<ul class="con1">
				<li v-for="(ele,index) in roule.school_roles" >
					<span v-if="ele.first_dept_name">{{ele.first_dept_name}}</span>
					<span v-if="ele.second_dept_name">· {{ele.second_dept_name}}</span>
					<span v-if="ele.thrid_dept_name">· {{ele.thrid_dept_name}}</span>
					<span v-if="ele.role_name">· {{ele.role_name}}</span>
				</li>
			</ul>
			<div class="jiaotou"></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			roule: '',
			toggleEdit:false,
		},
		data() {
			return {
				isShow: false,
				editObj:[],
				initializationDate:{//初始化数据，如果数据为空，为防止报错，初始化空数据
					area_id:'',
					area_name:'',
					first_dept_id:'',
					first_dept_name:'',
					head_shcool_id:'',
					head_shcool_name:'',
					region_id:'',
					region_name:'',
					role_id:'',
					role_name:'',
					school_id:'',
					school_name:'',
					school_type:'',
					second_dept_id:'',
					second_dept_name:'',
					thrid_dept_id:'',
					thrid_dept_name:'',
				},
				reloadRoule:'',//重新计算school_roles
				nowEditCol:-1//当前处于编辑状态的行
			}
		},
		computed:{
			//储存当前编辑的对象
			editArr() {
				this.editObj = this.roule.school_roles[0] || this.initializationDate
				return {
					"first_dept_name":this.editObj.first_dept_name,
					"second_dept_name":this.editObj.second_dept_name,
					"thrid_dept_name":this.editObj.thrid_dept_name,
					"role_name":this.editObj.role_name,
				}
			}
		},
		mounted() {
			this.reloadRoule = this.roule.school_roles;
		},
		methods: {
			toggleShow() {
				this.isShow = !this.isShow
			},
			changeShow(){
				this.$emit('change',true);
				this.$store.commit("SET_CHOOSE",this.roule.school_roles)
			}
		}
	}
</script>