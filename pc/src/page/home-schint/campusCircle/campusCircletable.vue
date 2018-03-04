<template>
	<div class="table" :style="{ width: windowWidth + 'px' }">
		<section>
			<div class="table_title">选择校区
				<img src="../../../images/home-icon/axx.png" alt="" @click="refclose" />
			</div>
			<div class="table_footer">
				<ul>
					<li v-for="(ele,index) in list1" :key="index" :class="{listclick : ele.isshow == true}" @click="showclick1(list1,index,ele.region_id)">{{ele.area_name}}</li>
				</ul>
				<ul v-if="list2.length > 0" class="ul_list_te">
					<li v-for="(ele,index) in list2" :key="index" :class="{listclick : ele.isshow == true}" @click="showclick2(list2,index,ele.school_id)">{{ele.school_name}}</li>
				</ul>
				<ul>
					<li v-for="(ele,index) in list3" :key="index" :class="{listclick : ele.isshow == true}" @click="showclick3(list3,index,ele.userType)">{{ele.name}}</li>
				</ul>
			</div>
			<div class="table_btn" @click="btn">确认</div>
		</section>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		props: {
			close: {},
			call: {}
		},
		data() {
			return {
				windowWidth: 0,
				list3: [{
						name: "全部",
						isshow: false,
						userType: "All"
					},
					{
						name: "教师",
						isshow: false,
						userType: "teacher"
					},
					{
						name: "家长",
						isshow: false,
						userType: "parents"
					}
				]
			}
		},
		computed: {
			...mapState({
				list1: state => state.CampusCircle.Diqu,
				list2: state => state.CampusCircle.FenXiao
			})
		},
		methods: {

			refclose() {
				this.$emit('close')
			},

			spanQie(ele, index) {
				ele.map((res, req) => {
					this.$set(ele, req, Object.assign(
						ele[req], {
							isshow: false
						}))
				})
				this.$set(ele, index, Object.assign(
					ele[index], {
						isshow: true
					}))
			},

			showclick1(ele, index, id) {
				this.spanQie(ele, index)
				console.log(ele)
				this.$store.dispatch('getFenXiao', id)
			},

			showclick2(ele, index, id) {
				this.spanQie(ele, index)
			},

			showclick3(ele, index, id) {
				this.spanQie(ele, index)
			},

			//确认按钮把信息传递给父组件
			btn() {
				let arr = []
				this.list1.map((ele, index) => {
					if(ele.isshow == true) {
						let obj = {}
						obj.id = this.$ls.get("USER_INFO").headSchoolId
						obj.name = ele.area_name
						arr.push(obj)
					}
				})
				this.list2.map((ele, index) => {
					if(ele.isshow == true) {
						let obj = {}
						obj.id = this.list2[index].school_id
						obj.name = ele.school_name
						arr.push(obj)
					}
				})
				this.list3.map((ele, index) => {
					if(ele.isshow == true) {
						let obj = {}
						obj.userType = this.list3[index].userType
						arr.push(obj)
					}
				})
				if(arr.length < 1) {
					alert("请选择具体类型")
				} else {
					this.$emit("call", arr)
					this.$emit('close')
				}

			}
		},
		mounted() {
			this.windowWidth = document.documentElement.clientWidth
			this.$store.dispatch('getDiQu')
		}
	}
</script>

<style scoped="scoped" lang="less">
	@color : #31C17B;
	body {
		overflow: hidden;
	}
	
	.table {
		height: 2000px;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
		section {
			width: 938px;
			padding-bottom: 30px;
			background: #fff;
			position: absolute;
			box-sizing: border-box;
			top: 200px;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 10px;
			.table_title {
				width: 100%;
				height: 60px;
				line-height: 60px;
				position: relative;
				text-align: center;
				font-size: 16px;
				background: #EFF3F5;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				img {
					position: absolute;
					right: 20px;
					top: 20px;
					cursor: pointer;
				}
			}
			.table_footer {
				padding: 0 40px;
				ul {
					padding: 0px 0 20px 0;
					border-bottom: 1px solid #CCCCCC;
					display: flex;
					flex-wrap: wrap;
					li {
						padding: 2px 20px;
						background: #EEEEEE;
						border-radius: 10px;
						margin-right: 20px;
						margin-top: 20px;
						cursor: pointer;
						&.listclick {
							background: @color;
							color: #fff;
						}
					}
					&.ul_list_te{
						li{
							padding: 0;
							width: 120px;
							text-align: center;
							margin-right: 23px;
						}
					}
				}
			}
			.table_btn {
				width: 116px;
				height: 36px;
				color: #fff;
				background: #31C17B;
				text-align: center;
				line-height: 36px;
				font-size: 16px;
				cursor: pointer;
				border-radius: 6px;
				float: right;
				margin-top: 40px;
				margin-right: 40px;
			}
		}
	}
</style>