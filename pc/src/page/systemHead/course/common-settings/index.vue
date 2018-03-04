<template>
	<div class="common-settings">
		<header class="header">
			<span>常用项设置</span>
			<span @click="editClick" v-show="!edit"></span>
		</header>
		<ul>
			<li class="common-kc">
				<h1 class="common-title">
					<span>科目类型</span>
					<div class="course-set-div" v-if="!edit">
						<input type="text" class="lang" v-model="sub" placeholder="选择或输入科目名称" @focus="tableClick()" @blur="addtableClick"/> 
						<v-table class='comp-table' :list="tableList1" v-if="tableShow" @close="tableCloseClick"></v-table>
					</div>
				</h1>
				<section class="common-section">
					<span v-for="(ele,index) in allList.list1" :key="index" class="common-section-span">{{ele.name}}
						<i v-if="edit" @click="removeClick(1,ele.id)"></i></span>
				</section>
			</li>

			<li class="common-kc">
				<h1 class="common-title">
					<span>班级设置</span> 
					<el-tooltip class="item" effect="dark" :content="alertList[0]" placement="top-start">
				      	<el-button></el-button>
				   </el-tooltip> 
				   <div class="course-set-div" v-if="!edit">
						<input type="text" class="lang" v-model="clas" placeholder="输入班型名称" @blur="addtableClick2"/> 
					</div>
				</h1>
				<section class="common-section">
					<span v-for="(ele,index) in allList.list2" :key="index" class="common-section-span">{{ele.name}}
						<i v-if="edit" @click="removeClick(2,ele.id)"></i></span>
				</section>
			</li>

			<li class="common-kc">
				<h1 class="common-title">
					<span>对N课程设置</span> 
					<el-tooltip class="item" effect="dark" :content="alertList[1]" placement="top-start">
				      	<el-button></el-button>
				    </el-tooltip>
				    <div class="course-set-div" v-if="!edit">
						<input type="text" class="zhong" v-model="list3name" placeholder="输入对N班级类型"  @focus="tableClick2()" @blur="addMoney(0,list3name,list3num,1)"/> ·
						<input type="text" v-model="list3num" placeholder="人数" class="small" @blur="addMoney(0,list3name,list3num,2)"/> 人
						
						<!--<v-table class='comp-table' :list="tableList2" v-if="tableShow2" @close="tableCloseClick2"></v-table>-->
					</div>
				</h1>
				<section class="common-section">
					<span v-if="allList.list3.lenth != 0" v-for="(ele,index) in allList.list3" :key="index" class="common-section-span">{{ele.name}} · {{ele.class_capacity}}人
						<i v-if="edit" @click="removeClick(3,ele.id)"></i></span>
				</section>
			</li>

			<li class="common-kc">
				<h1 class="common-title">
					<span>班级课杂费</span>
					<el-tooltip class="item" effect="dark" :content="alertList[2]" placement="top-start">
				    	<el-button></el-button>
					</el-tooltip>
					<div class="course-set-div" v-if="!edit">
						<input type="text" class="zhong" v-model="list4name" placeholder="输入名称" @blur="addMoney(1,list4name,list4num,1)"/> ·
						<input type="text" v-model="list4num" placeholder="费用" class="small" @blur="addMoney(1,list4name,list4num,2)"/> 元
					</div>
				</h1>
				<section class="common-section">
					<span v-if="allList.list4.lenth != 0" v-for="(ele,index) in allList.list4" :key="index" class="common-section-span">{{ele.name}} · {{ele.money}}元
						<i v-if="edit" @click="removeClick(4,ele.id)"></i></span>
				</section>
			</li>

			<li class="common-kc">
				<h1 class="common-title">
					<span>新生首次报读班级课程 · 必缴费用设置</span>
					<div class="course-set-div" v-if="!edit">
						<input type="text" class="zhong" v-model="list5name" placeholder="输入名称" @blur="addMoney(2,list5name,list5num,1)"/> ·
						<input type="text" v-model="list5num" placeholder="费用" class="small" @blur="addMoney(2,list5name,list5num,2)"/> 元
					</div>
				</h1>
				<section class="common-section">
					<span v-if="allList.list5.lenth != 0" v-for="(ele,index) in allList.list5" :key="index" class="common-section-span">{{ele.name}} · {{ele.money}}元
						<i v-if="edit" @click="removeClick(4,ele.id)"></i></span>
				</section>
			</li>

			<li class="common-kc">
				<h1 class="common-title">
					<span>对一课杂费</span>
					<el-tooltip class="item" effect="dark" :content="alertList[3]" placement="top-start">
				    	<el-button></el-button>
					</el-tooltip>
					<div class="course-set-div" v-if="!edit">
						<input type="text" class="zhong" v-model="list6name" placeholder="输入名称" @blur="addMoney(3,list6name,list6num,1)"/> ·
						<input type="text" v-model="list6num" placeholder="费用" class="small" @blur="addMoney(3,list6name,list6num,2)"/> 元
					</div>
				</h1>
				<section class="common-section">
					<span v-if="allList.list6.lenth != 0" v-for="(ele,index) in allList.list6" :key="index" class="common-section-span">{{ele.name}} · {{ele.money}}元
						<i v-if="edit" @click="removeClick(4,ele.id)"></i></span>
				</section>
			</li>

			<li class="common-kc">
				<h1 class="common-title">
					<span>新生首次报读对一课程 · 必缴费用设置</span>
					<div class="course-set-div" v-if="!edit">
						<input type="text" class="zhong" v-model="list7name" placeholder="输入名称" @blur="addMoney(4,list7name,list7num,1)"/> ·
						<input type="text" v-model="list7num" placeholder="费用" class="small" @blur="addMoney(4,list7name,list7num,2)"/> 元
					</div>
				</h1>
				<section class="common-section">
					<span v-if="allList.list7.lenth != 0" v-for="(ele,index) in allList.list7" :key="index" class="common-section-span">{{ele.name}} · {{ele.money}}元
						<i v-if="edit" @click="removeClick(4,ele.id)"></i></span>
				</section>
			</li>

			<li class="common-kc">
				<h1 class="common-title">
					<span>对N课杂费</span>
					<el-tooltip class="item" effect="dark" :content="alertList[4]" placement="top-start">
				    	<el-button></el-button>
					</el-tooltip>
					<div class="course-set-div" v-if="!edit">
						<input type="text" class="zhong" v-model="list8name" placeholder="输入名称" @blur="addMoney(5,list8name,list8num,1)"/> ·
						<input type="text" v-model="list8num" placeholder="费用" class="small" @blur="addMoney(5,list8name,list8num,2)"/> 元
					</div>
				</h1>
				<section class="common-section">
					<span v-if="allList.list8.lenth != 0" v-for="(ele,index) in allList.list8" :key="index" class="common-section-span">{{ele.name}} · {{ele.money}}元
						<i v-if="edit" @click="removeClick(4,ele.id)"></i></span>
				</section>
			</li>

			<li class="common-kc">
				<h1 class="common-title">
					<span>新生首次报读对N课程 · 必缴费用设置</span>
					<div class="course-set-div" v-if="!edit">
						<input type="text" class="zhong" v-model="list9name" placeholder="输入名称" @blur="addMoney(6,list9name,list9num,1)"/> ·
						<input type="text" v-model="list9num" placeholder="费用" class="small" @blur="addMoney(6,list9name,list9num,2)"/> 元
					</div>
				</h1>
				<section class="common-section">
					<span v-if="allList.list9.lenth != 0" v-for="(ele,index) in allList.list9" :key="index" class="common-section-span">{{ele.name}} · {{ele.money}}元
						<i v-if="edit" @click="removeClick(4,ele.id)"></i></span>
				</section>
			</li>
			<footer v-if="edit">
				<span @click="offClick"></span>
				<span @click="onClick"></span>
			</footer>
		</ul>
	</div>
</template>

<script>
	import table from './common-setting-table'
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState({
				tableList1: state => state.commoSettings.tableList1,
				tableList2: state => state.commoSettings.tableList2,
				allList: state => state.commoSettings.allList
			})
		},
		data() {
			return {
				alertList: [
					"请自定义班型名称，如精品班、提高班、培优班",
					"请输入对N课程的班型名称及班容人数",
					"请输入班级课除了学费以外的其他收费项目及金额",
					"请输入对一课除了学费以外的其他收费项目及金额",
					"请输入对N课除了学费以外的其他收费项目及金额"
				],
				edit: false,
				tableKe: false,
				tableClass: false,
				tableShow: false,
				tableShow2: false,
				sub: "",
				clas: "",
				list3name: "",
				list3num: "",
				list4name: "",
				list4num: "",
				list5name: "",
				list5num: "",
				list6name: "",
				list6num: "",
				list7name: "",
				list7num: "",
				list8name: "",
				list8num: "",
				list9name: "",
				list9num: "",

			}
		},
		components: {
			'v-table': table
		},
		methods: {
			editClick() {
				this.edit = true
			},
			offClick() {
				this.edit = false
			},
			onClick() {
				this.edit = false
			},
			removeClick(list, id) {
				if(list == 1) {
					this.$store.dispatch('removeclassTypeListser', id)
				}
				if(list == 2) {
					this.$store.dispatch('removeclassTypeListser2', id)
				}
				if(list == 3) {
					this.$store.dispatch('removeVipClassTypeser', id)
				}
				if(list == 4) {
					this.$store.dispatch('removeclassMoneyListser', id)
				}
			},
			tableClick() {
				this.tableShow = true
			},
			addtableClick() {
				if(this.sub != "") {
					this.$store.dispatch('addclassTypeListser', this.sub)
				}
			},
			tableClick2() {
				this.tableShow2 = true
			},
			addtableClick2() {
				if(this.clas != "") {
					this.$store.dispatch('addclassTypeListser2', this.clas)
				}
			},
			tableCloseClick(res) {
				this.tableShow = false
				if(res) {
					let arr = []
					res.map((ele, index) => {
						let obj = {}
						obj.name = ele.name
						arr.push(obj)
					})
					console.log(arr)
					this.$store.dispatch('addclassTypeAllListser', arr)
				}
				//this.list1.push(...res)
			},
			tableCloseClick2(res) {
				this.tableShow2 = false
				//this.list2.push(...res)
			},
			addMoney(type, name, num, cls) {
				if(cls == 1) {
					if(name == "") {
						this.$message.error('内容不能为空')
						return false
					}
				} else {
					if(num == "" || isNaN(num) || num <= 0) {
						this.$message.error('数字格式不对')
						return false
					}
				}
				if(num != '' && name != "") {
					if(type == 0) {
						this.$store.dispatch("addVipClassTypeser", {
							name,
							num
						})
					} else {
						this.$store.dispatch('addclassMoneyListser', {
							name: name,
							type: type,
							money: num
						})
					}
				}

			}
		},
		mounted() {
			this.$store.dispatch('getClassTypeList')
			this.$store.dispatch('getClassTypeList2')

		}
	}
</script>

<style lang="less">
	@width : 1008px;
	@color : #31C27C;
	.common-settings {
		color: #999;
		.common-section {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			.common-section-span {
				padding-right: 70px;
				margin-top: 23px;
				position: relative;
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
		.item {
			border: none;
			padding-left: 0px;
			background: url("../../../../images/system-campus/tanhao.png") no-repeat left top;
		}
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
</style>