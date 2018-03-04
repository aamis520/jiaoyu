<template>
	<div class="table_list">
		<ul class="table_ul_list">
			<li v-for="(ele,index) in list.data" :key="index">
				<span>{{subString(index,datapage)}}</span>
				<span>
                    <img :src="'../../../../static/home-icon/'+icon+'.png'" class="table_class_img"></img>
                    {{ele.room_name}}
                </span>
				<span class="span_last_table">
                    <div v-if="!ele.is_seat_required">
                        <b>{{ele.col_num}}</b>
                        排
                        <b>{{ele.row_num}}</b>
                        列表
                    </div>
                </span>
				<span class="span_last_table">
                    <!-- 判断是否需要排座 -->
                    <div v-if="!ele.is_seat_required && (icon == 'bdj' || icon == 'vdd')">
                        有效座位
                        <b>{{ele.valid_num}}</b>
                        个
                        <img class="table_class_img" src="../../../../static/home-icon/xg.png" @click="customclassClick(ele,index)" v-if="false"></img>
                    </div>
                    <!-- 判断是否为一对一辅导  -->
                    <div v-else-if="icon == 'bdj' || icon == 'vdd'">
                        容纳
                        <b>{{ele.valid_num}}</b>
                        人
                    </div>
                    <div v-else></div>
                </span>
				<span class="span_last_table">
                    <img class="last_img" src="../../../../static/home-icon/xdg.png" @click="modify(ele)"></img>
                    <img class="last_img" src="../../../../static/home-icon/sds.png" @click="remveClass(ele,index)"></img>
                </span>
			</li>
		</ul>
		<el-pagination class="pages_bottom" @current-change="handleCurrentChange" :page-size="10" layout="total, prev, pager, next" :total="list.total">
		</el-pagination>
		<img src="../../../assets/youhuiAdd.png" class="add_class_room" @click="addClassRoom()"></img>
		<v-addclass v-if="addclassShow" @closeRoom="closeRoom" :newdata="argunmentsData" :datapage="datapage" @showChildToParentMsg="showChildToParentMsg"></v-addclass>
		<!-- <v-customclass v-if="customclassShow" :customData="customData" @closecustomRoom="closecustomRoom"> </v-customclass> -->

		<!--弹窗自己写-->
		<div class="table_zd" :style="{ width: windowWidth + 'px' }" v-if="tableZD">
			<section>
				<h1>提示
					<img src="../../../assets/close.jpg"@click="close" />
				</h1>
				<img src="../../../../static/home-icon/classtishi.gif" class="R">
				<h2>您确定删除么？</h2>
				<p>
					<img src="../../../../static/home-icon/table_c.png" alt="" @click="close" />
					<img src="../../../../static/home-icon/table_d.png" alt="" @click="ok" />
				</p>
			</section>
		</div>
		
		<div class="table_zd" :style="{ width: windowWidth + 'px' }" v-if="classTableTrue == 1004004">
			<section>
				<h1>提示
					<img src="../../../assets/close.jpg" @click="yeasClick"/>
				</h1>
				<img src="../../../../static/home-icon/classtishi.gif" class="R">
				<h2>您添加的班级已经存在</h2>
				<p>
					<img src="../../../../static/home-icon/table_c.png" alt="" @click="yeasClick" />
					<img src="../../../../static/home-icon/table_d.png" alt=""  @click="yeasClick"/>
				</p>
			</section>
		</div>
	</div>
</template>

<script>
	import cont from '../../../common/const'
	import addClassroomcom from "./addClassroom"
	import customClassroom from "./customClassroom"
	import {mapState} from 'vuex'
	import qs from "qs"
	export default {
		name: "",
		components: {
			'v-addclass': addClassroomcom,
			'v-customclass': customClassroom
		},
		computed:{
			...mapState({
				classTableTrue : state => state.OldStore.classTableTrue
			})
		},
		props: {
			icon: {
				type: String,
				default: ""
			},
			list: {
				type: Object,
				default: {
					data: [],
					total: 0
				}
			},
			pageInit: {}
		},
		data() {
			return {
				tableZD: false,
				windowWidth: '0',
				addclassShow: this.$store.state.OldStore.addClassroom,
				customclassShow: this.$store.state.OldStore.customclassShow,
				argunmentsData: {}, //传递给打开窗口的数据
				customData: {},
				headSchoolId: this.$ls.get("USER_INFO").headSchoolId,
				datapage: 1,
				removeId: 0,
				Listindex: 0
			}
		},
		methods: {
			/**
			 * 调用父级分页方法
			 */
			subString(index, pageindex) {
				index++
				if(pageindex > 1) {
					index = index + (pageindex - 1) * 10
					index = "0000" + index
					index = index.substring(index.length - 3)
				} else {
					if(index <= 10) {
						index = "0000" + index
						index = index.substring(index.length - 3)
					}
				}
				return index
			},
			handleCurrentChange(val) {
				this.datapage = `${val}`
				this.$emit("pageInit", `${val}`)
			},

			showChildToParentMsg() {
				this.$emit("pageInit", this.datapage)
			},

			/**
			 * 打开窗
			 */
			addClassRoom() {
				this.argunmentsData.isxiugai = false
				this.$store.commit("addClassroomClick")
				this.addclassShow = this.$store.state.OldStore.addClassroom
			},

			/**
			 * 关闭弹窗传给子组件
			 */
			closeRoom() {
				this.$store.commit("closeClassroomClick")
				this.addclassShow = this.$store.state.OldStore.addClassroom
			},
			/**
			    修改班级
			 */
			modify(data) {
				this.argunmentsData = data
				this.argunmentsData.isxiugai = true
				this.$store.commit("addClassroomClick")
				this.addclassShow = this.$store.state.OldStore.addClassroom
			},

			/**
			    删除班级
			 */
			remveClass(data, index) {
				this.removeId = data.id
				this.Listindex = index
				this.tableZD = true
			},

			/**
			 * 修改班级座位
			 */
			customclassClick(ele, index) {
				this.$store.commit("addcustomClassroomClick")
				this.customclassShow = this.$store.state.OldStore.customclassShow
				this.customData = ele
			},
			closecustomRoom() {
				this.$store.commit("closecustomClassroomClick")
				this.customclassShow = this.$store.state.OldStore.customclassShow
			},

			/**
			 * 自定义提醒
			 * */
			close() {
				this.tableZD = false
			},
			ok() {
				let pageInitUrl = cont.campus + "v1/campus/classroom/deleteClassRoom?accessToken=aaaa&head_id=" + this.$ls.get("USER_INFO").headSchoolId
				let pageInitparmes = qs.stringify({
					id: this.removeId
				})
				this.axios.post(pageInitUrl, pageInitparmes)
					.then(res => {
							this.list.data.splice(this.Listindex, 1)
							this.$emit("pageInit", this.datapage)
						},
						res => {
							alert("网络繁忙 ！请刷新重试 ！")
						})
				this.tableZD = false
			},
			yeasClick(){
				this.$store.commit('classTableTrueClick',0)
			}
		},
		updated() {
			/**
			  隔行变色
			 */
			$(".table_ul_list li").each((ele, index) => {
				if(ele % 2 == 0) {
					index.style.background = "#fff"
				} else {
					index.style.background = "#f0f0f0"
				}
			})
		},
		mounted() {
			this.windowWidth = document.documentElement.clientWidth
		}

	}
</script>

<style lang="less" scoped>
	body {
		overflow: hidden;
	}
	
	.table_zd {
		height: 2000px;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
		section {
			width: 380px;
			height: 240px;
			background: #fff;
			position: absolute;
			box-sizing: border-box;
			top: 300px;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 10px;
			h1 {
				width: 100%;
				height: 50px;
				background: #F1F5F7;
				text-align: center;
				line-height: 50px;
				font-size: 16px;
				position: relative;
				img {
					position: absolute;
					right: 20px;
					top: 20px;
					cursor: pointer;
				}
			}
			.R {
				display: block;
				margin: 30px auto 0;
			}
			h2 {
				width: 100%;
				text-align: center;
				color: #666;
				margin-top: 20px;
			}
			p {
				width: 100%;
				display: flex;
				justify-content: center;
				margin-top: 24px;
				img {
					margin: 0 15px;
					cursor: pointer;
				}
			}
		}
	}
	
	
	
	.table_list {
		.table_ul_list {
			width: 100%;
			height: 100%;
			li {
				width: 100%;
				height: 46px;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 0 30px 0 48px;
				span {
					width: 20%;
					display: flex;
					align-items: center;
					cursor: pointer;
					div {
						display: flex;
						align-items: center;
					}
					&.span_last_table {
						margin-left: 40px;
					}
					b {
						margin: 0 4px;
						color: #31c27c;
					}
					img {
						&.last_img {
							margin: 0 10px;
						}
						&.table_class_img {
							margin: 0 6px;
							width: 18px;
							height: 18px;
						}
					}
				}
			}
		}
		.pages_bottom {
			position: absolute;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
		}
		.add_class_room {
			position: absolute;
			bottom: 20px;
			right: 40px;
			cursor: pointer;
		}
	}
</style>