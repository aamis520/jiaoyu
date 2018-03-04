<template>
	<div class="combination_add">
		<h1>如果校方的两个课程链互相之间有升级关系，请在本页面设置<img src="../../../../../images/common-icon/cancel.png" alt="" class="xiu_img" @click="remove"/></h1>
		<div class="top">
			<span>课程组合</span>
			<input 
				type="text" 
				placeholder="课程编号" 
				v-model="oneInputdata" 
				@blur="getclassgroup(oneInputdata,1)" />
			<i>+</i>
			<input 
				type="text" 
				v-model="twoInputdata" 
				placeholder="课程编号" 
				@blur="getclassgroup(twoInputdata,2)" />
			<i v-if="threeInput">+</i>
			<input 
				v-if="threeInput" 
				type="text" 
				placeholder="课程编号" 
				v-model="threeInputdata" 
				@blur="getclassgroup(threeInputdata,3)" />
			<b :class="{remove_span : threeInput}" @click="addInput"></b>
		</div>
		<ul class="list_ul">
			<li>
				<p>{{groupList.onelist.code}}</p>
				<section>
					<span 
						v-for="(ele,index) in groupList.onelist.chain_course_list" 
						:class="{length_class: index != groupList.onelist.chain_course_list.length-1}">
						{{ele.course_name}} · {{ele.course_num}}期 · {{ele.class_type_list.length}}个班型
					</span>
				</section>
			</li>
			<li>
				<p>{{groupList.twolist.code}}</p>
				<section>
					<span 
						v-for="(ele,index) in groupList.twolist.chain_course_list" 
						:class="{length_class: index != groupList.twolist.chain_course_list.length-1}">
						{{ele.course_name}} · {{ele.course_num}}期 · {{ele.class_type_list.length}}个班型
					</span>
				</section>
			</li>
			<li v-if="threeInput">
				<p>{{groupList.threelist.code}}</p>
				<section>
					<span 
						v-for="(ele,index) in groupList.threelist.chain_course_list" 
						:class="{length_class: index != groupList.threelist.chain_course_list.length-1}">
						{{ele.course_name}} · {{ele.course_num}}期 · {{ele.class_type_list.length}}个班型
					</span>
				</section>
			</li>
		</ul>
		<img src="../../../../../images/common-icon/duigou.png" class="baocun" v-if="oneInputdata != ''" @click="ajaxClick" />
		
		<transition name="el-fade-in-linear">
			<v-table @close="tableclose" @ok="ok" :data="constdata" v-if="tableShow"> </v-table>
		</transition>
		<transition name="el-fade-in-linear">
			<v-table @close="tableclose2" @ok="ok2" :data="constdata2" v-if="tableShow2"> </v-table>
		</transition> 
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import popup from '@components/Popup'
	export default {
		data() {
			return {
				threeInput: false,
				oneInputdata: "",
				twoInputdata: "",
				threeInputdata: "",
				tableShow: false,
				constdata: {
					title: "提醒",
					data: "您还有未保存的内容确认关闭么",
					isImg: true,
					warn: true,
					succe: true
				},
				tableShow2: false,
				constdata2: {
					title: "提醒",
					data: "请输入正确的课程链编号",
					isImg: true,
					warn: true,
					succe: true
				} 
			}
		},
		props: {
			close: {}
		},
		components: {
			"v-table": popup
		},
		computed: {
			...mapState({
				list: state => state.classSettingsgroup.list,
				groupList: state => state.classSettingsgroup.groupList
			})
		},
		methods: {
			remove() {
				this.tableShow = true
			},
			addInput() {
				this.threeInput = !this.threeInput
			},
			ajaxClick() {
				let ls =""
				let arr = []
				if(!this.threeInput){
					ls = this.groupList.onelist.code +"+"+ this.groupList.twolist.code,
					arr = [this.groupList,this.groupListt]
				}else{
					ls = this.groupList.onelist.code +"+"+ this.groupList.twolist.code +"+"+ this.groupList.threelist.code,
					arr = [this.groupList.onelist,this.groupList.twolist,this.groupList.threelist]
				}
				arr.map(ele=>{
					 delete(ele.chain_course_list)
				})
				console.log(arr)
				this.$store.dispatch('kepCodeClassSubjectser',{ls,arr})
				this.$emit('close')
			},
			tableclose() {
				this.tableShow = false
			},
			ok() {
				this.tableShow = true
				this.$emit("close")
			},
			tableclose2() {
				this.tableShow2 = false
			},
			ok2() {
				this.tableShow2 = false
				this.$emit("close2")
			},
			getclassgroup(ele, ls) { //查询课程 
				if(ele == "") {
					this.$message({
						message: '输入的内容不能为空',
						type: 'warning'
					});
					return false
				} else {
					this.$store.dispatch('getCodeClassSubjectser', {
							id: ele,
							num: ls
						})
						.then(res => {
							if(res.data == null) {
								this.tableShow2 = true
							}
						})
				} 
			}
		},
		mounted() {
			this.$store.commit('INIT_CLASSGROUPLIST')
		}
	}
</script>

<style scoped="scoped" lang="less">
	@width : 1008px;
	@color : #31C27C;
	.combination_add {
		width: @width;
		padding: 0 30px;
		box-sizing: border-box;
		background: #fff;
		border-radius: 6px;
		position: relative;
		min-height: 200px;
		h1 {
			height: 60px;
			line-height: 60px;
			color: @color;
			position: relative;
			border-bottom: 1px solid #dedede;
			.xiu_img {
				position: absolute;
				right: 0;
				top: 17px;
				cursor: pointer;
			}
		}
		.top {
			display: flex;
			box-sizing: border-box;
			padding-left: 14px;
			height: 40px;
			align-items: flex-end;
			margin-bottom: 16px;
			input {
				width: 74px;
				border-bottom: 1px solid @color;
				text-align: center;
				color: #999;
			}
			span {
				color: @color;
				margin-right: 22px;
			}
			i {
				margin: 0 14px;
				font-size: 16px;
			}
			b {
				display: block;
				width: 20px;
				height: 20px;
				background: url(../../../../../images/common-icon/add.png) no-repeat center center;
				cursor: pointer;
				margin-left: 30px;
				&.remove_span {
					background: url(../../../../../images/system-head/stop_normal.png) no-repeat center center;
				}
			}
		}
		.list_ul {
			box-sizing: border-box;
			padding-left: 14px;
			margin-top: 26px;
			li {
				margin-bottom: 20px;
				color: #999;
				display: flex;
				p {
					color: @color;
					margin-right: 20px;
				}
				section {
					display: flex;
					flex-wrap: wrap;
					span {
						display: block;
						color: #999;
						padding-right: 30px;
						margin-right: 10px;
						margin-bottom: 14px;
						&.length_class {
							background: url(../../../../../images/system-head/daohang.png) no-repeat right center;
						}
					}
				}
			}
		}
		.baocun {
			position: absolute;
			right: 30px;
			bottom: 20px;
			cursor: pointer;
		}
		
	}
</style>