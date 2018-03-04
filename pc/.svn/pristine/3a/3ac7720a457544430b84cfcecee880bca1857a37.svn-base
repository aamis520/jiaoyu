<template>
	<div class="class-A">
		<header>
			<span>班级课设置</span>
			<span></span>
		</header>
		<div class="body" v-if="list.datas.length == 0 && !show">
			<div></div>
			<p>您还没有对课程链做任何设置</p>
		</div>
		<b class="add-img" @click="addClick" v-if="!show"></b>
		<div class="list" v-if="list.datas.length > 0 && !show">
			<ul class="list-ul" v-for="(ele,index) in list.datas" :key="index">
				<h1>已组合课程链 · {{ele.code}}({{ele.name}})<img src="../../../../../images/common-icon/cancel.png" alt="" class="xiu_img" @click="bianji(ele.id)"/></h1>
				<section>
					<span v-for="(ele2,index2) in ele.newList" :key="index2">{{ele2.course_name}} · {{ele2.course_num}}期 · {{ele2.class_type_list.length}}个班型</span>
					<!--:class="{length_class: index2 != ele.list.length-1}"-->
				</section>
			</ul>
			<div class="div-page">
				<template>
					<div class="block">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1,2,3,4,5,6]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="list.totalCount">
						</el-pagination>
					</div>
				</template>
			</div>
		</div>
		<transition name="el-fade-in-linear">
			<v-table @close="tableclose" @ok="ok" :data="constdata" v-if="tableShow"> </v-table>
		</transition>
		<transition name="el-fade-in-linear">
			<v-combination v-if="show" @close="addClose"></v-combination>
		</transition> 
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import popup from '@components/Popup'
	import combination from './curriculum-chain-combination-add'
	export default {
		data() {
			return {
				show: false,
				tableShow: false,
				constdata: {
					title: "提醒",
					data: "您确认要永久删除此课程链组合吗？删除后原来各自的课程链仍然存在，并各自运行。",
					isImg: true,
					warn: true,
					succe: true
				},
				currentPage4: 1,
				pagesize: 4, 
				codeId:""
			}
		},
		components: {
			"v-table": popup,
			"v-combination": combination
		},
		computed: {
			...mapState({
				list: state => state.classSettingsgroup.list
			})
		},
		methods: {
			addClick() {
				this.show = !this.show
			},
			bianji(id) {
				this.tableShow = true
				this.codeId = id
			},
			tableclose() {
				this.tableShow = false
			},
			ok() {
				this.tableShow = false
				this.$store.dispatch('removeHeaderClassSubjectser',this.codeId)
			},
			addClose() {
				this.show = false
			},
			handleSizeChange(val) {
				this.pagesize = `${val}`*1
				this.$store.dispatch('getHeaderClassSubjectser',{
					pageSize: this.pagesize,
					pageNo:this.currentPage4
				})	
			},
			handleCurrentChange(val) {
				this.currentPage4 = `${val}`*1
				this.$store.dispatch('getHeaderClassSubjectser',{
					pageSize: this.pagesize,
					pageNo:this.currentPage4
				})	
			}
		},
		mounted() {
			this.$store.dispatch('getHeaderClassSubjectser',{
					pageSize: 4,
					pageNo:1
				})
		}
	}
</script>

<style scoped="scoped" lang="less">
	@width : 1008px;
	@color : #31C27C;
	.huo {
		width: @width;
		margin-bottom: 14px;
	}
	
	.class-A {
		position: relative;
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
					background: url(../../../../../images/system-campus/bookadd.png) no-repeat right center;
				}
			}
		}
		b {
			&.add-img {
				display: block;
				width: 94px;
				height: 94px;
				position: absolute;
				bottom: -20px;
				right: 10px;
				cursor: pointer;
				background: url(../../../../../images/system-campus/youhuiAdd.png) no-repeat center center;
			}
			&:hover {
				background: url(../../../../../images/system-campus/addbutton_normal.png) no-repeat center center;
			}
		}
		.body {
			width: @width;
			height: 234px;
			background: #fff;
			border-radius: 6px;
			overflow: hidden;
			div {
				margin-top: 20px;
				width: 100%;
				height: 160px;
				background: url(../../../../../images/system-head/nopage.png) no-repeat center center;
			}
			p {
				text-align: center;
				color: #999;
				font-size: 16px;
			}
		}
		.list {
			.div-page {
				width: 100%;
				height: 60px;
				background: #fff;
				display: flex;
				align-items: center;
				border-radius: 6px;
				.block{
					margin: 0 auto;
				}
			}
			.list-ul {
				width: @width;
				background: #fff;
				border-radius: 6px;
				margin-bottom: 14px;
				box-sizing: border-box;
				padding: 0 30px;
				h1 {
					height: 60px;
					line-height: 60px;
					color: @color;
					position: relative;
					.xiu_img {
						position: absolute;
						right: 0;
						top: 24px;
						cursor: pointer;
					}
				}
				h2 {
					margin-top: 24px;
					color: @color;
					width: 138px;
				}
				section {
					display: flex;
					flex-wrap: wrap;
					border-top: 1px solid #DEDEDE;
					box-sizing: border-box;
					padding-bottom: 40px;
					display: flex;
					span {
						margin-top: 24px;
						display: block;
						color: #999;
						padding-right: 30px;
						margin-right: 10px;
						&.length_class {
							background: url(../../../../../images/system-head/daohang.png) no-repeat right center;
						}
					}
				}
			}
		}
	}
</style>