<template>
	<div>
		<div class="curriculum_chain_div" v-if="trueAddShow">
			<div class="on-one-settings_wai">
				<div class="on-one-settings">

					<section>
						<h1>课程名称</h1>
						<div class="top-right-div te-div">
							<input type="text" name="" id="" v-model="className" placeholder="请输入课程的中文名称" />
							<input type="text" name="" class="class_name_id" v-model="classNameId" placeholder="课程代码" />
							<el-tooltip class="el-item2" effect="dark" content="课程代码关系到班级名称设定，请认真填写（限制4个以内的字母或数字）" placement="top-start">
								<el-button></el-button>
							</el-tooltip>
							<b>{{truelist.title}}</b>
							<p v-if="chongshow" @click="chongClick">重选</p>
						</div>
					</section>

					<section>
						<h1>选择班型</h1>
						<div class="top-right-div">
							<span v-for="(ele,index) in list1" :key="index" @click="" :class="{show_img_true : ele.show}" @click="classXingClick(index)">{{ele.name}}</span>
						</div>
					</section>

					<section>
						<h1 class="class_tie" v-if="yearShow">年级<i @click="yearClick"></i></h1>
						<div class="input_table" v-if="yearShow">
							<input type="text" name="" id="" v-model="modelYear" placeholder="请选择具体年级" @click="inputYear" />
							<transition name="el-fade-in-linear">
								<v-tbleyear v-if="tableyearShow" :list="ageLei.gradeList" @close="inputCloseYear"></v-tbleyear>
							</transition> 
						</div>
						<h1 class="class_tie" v-if="ageShow">年龄<i @click="ageClick"></i></h1>
						<div class="input_table" v-if="ageShow">
							<input type="text" name="" id="" v-model="modelAge1" class="input_nth2 input_nth2_left" placeholder="请选择年龄范围" @click="inputAge1" /> 至
							<transition name="el-fade-in-linear">
								<v-tableage v-if="tableyearShow1" @close="inputCloseAge1" :list="ageLei"></v-tableage>
							</transition> 
							<input type="text" name="" id="" v-model="modelAge2" class="input_nth2" placeholder="请选择年龄范围" @click="inputAge2" />
						</div>
					</section>

					<section>
						<h1>课程期数</h1>
						<div class="top-right-div">
							<div class="top-right-div-left">
								<span>学期班</span>
								<el-tooltip class="el-item2" effect="dark" content="课程代码关系到班级名称设定，请认真填写（限制4个以内的字母或数字）" placement="top-start">
									<el-button></el-button>
								</el-tooltip>
								<div class="top-right-div-left-arr">
									<div v-for="(ele,index) in xueqiList" :class="{xueqi_urlred: xuqiIndex == index}" @click="xuqiClick(index,ele)">{{ele}}</div>
									<i>期</i>
									<span :class="{left_c: xuqiarrIndex<=1 , left_g: xuqiarrIndex>1}" @click="xueqiLeftClick"></span>
									<span :class="{right_c: xuqiarrIndex>=5 , right_g: xuqiarrIndex<5}" @click="xueqiRightClick"></span>
								</div>
								<div class="top-right-div-left-d">
									<h4 :class="{img_g : xuqiIndex == 10}">
									<div @click="langClick">长期班 </div>
									<el-tooltip class="el-item2" effect="dark" content="课程代码关系到班级名称设定，请认真填写（限制4个以内的字母或数字）" placement="top-start">
										<el-button></el-button>
									</el-tooltip>
								</h4>
									<h4 :class="{img_g : xuqiIndex == 20}">
									<div @click="smallClick">短期班</div>
									<el-tooltip class="el-item2" effect="dark" content="课程代码关系到班级名称设定，请认真填写（限制4个以内的字母或数字）" placement="top-start">
										<el-button></el-button>
									</el-tooltip>
								</h4>
								</div>
							</div>
						</div>
					</section>

					<section>
						<h1>学期循环</h1>
						<div class="top-right-div curriculum_footer-3">
							<div :class="{show_img : sijiIndex == index , bottom_2_div : true}" v-for="(ele,index) in csqh" :key="index">
								<div @click="hcqsClick(index,ele)">
									{{ele.name}}
								</div>
								<el-tooltip class="el-item2" effect="dark" :content="ele.i" placement="top-start">
									<el-button></el-button>
								</el-tooltip>
							</div>
						</div>
					</section>

					<section>
						<h1>报班限制</h1>
						<div class="curriculum_footer-top">
							<h5>非本课程年龄段可否报读：</h5>
							<span :class="{show_img : yearIndex == index}" v-for="(ele,index) in yearLeiList" :key="index" @click="yearListClick(index,ele)">{{ele.name}}</span>
						</div>
					</section>

					<div class="btn-class">
						<div @click="cancelClick">取消</div>
						<div @click="OK" v-if="baocunshow">结束本链</div>
						<div v-if="!baocunshow" class="cueecs_btn" @click="baocunClick">保存</div>
						<div @click="JX" v-if="baocunshow" class="cueecs_btn">继续填写本链</div>
					</div>
				</div>
			</div>
		</div>
		<div class="curriculum-falselistwai">
			<div class="curriculum-falselist">
				<h4>
				{{truelist.title}}
				<el-tooltip class="el-item2" effect="dark" content="课程链后边括号当中的数字，为课程链在系统当中的顺序码" placement="top-start">
				      	<el-button></el-button>
				</el-tooltip> 
			</h4>
				<ul>
					<li>
						<section>
							<span v-for="(ele,index) in truelist.chain_course_list.chain_course_list" :key="index" :class="{is_span : ele.is_delete == false}" @click="bianji(ele,index,index)">{{ele.course_name}} · {{ele.course_num}}期 · {{ele.class_type_list.length}}个班型</span>
						</section>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	import tableYear from '../../on-one-settings-year'
	import tableage from '../../on-one-settings-age'
	export default {
		components: {
			"v-tbleyear": tableYear,
			"v-tableage": tableage
		},
		props: {
			chongshow: {},
			checkedshowClick: {},
			huixian: {}
		},
		data() {
			return {
				trueAddShow: false, //添加
				btnshow: false, //继续填写按钮
				baocunshow: false, //保存跟结束本链按钮
				listIndex: -1,
				ageShow: false,
				yearShow: true,
				tableyearShow: false,
				tableyearShow1: false,
				modelYear: "",
				modelAge1: "",
				modelAge2: "",
				className: "",
				classNameId: "",
				modelAgeobj1: {},
				modelAgeobj2: {},
				istable: 0, //判断当前是哪一个input点击了
				xueqiList: [1, 2, 3, 4],
				xuqiIndex: -1,
				xuqiarrIndex: 1,
				csqh: [{
						name: "春暑秋寒",
						i: "秋寒春暑、寒春暑秋、春暑秋寒、暑秋寒春、 都属于这个范畴 "
					},
					{
						name: "秋春暑 ",
						i: "秋春暑、 春暑秋、 暑秋春都属于这个范畴 "
					},
					{
						name: "寒春暑 ",
						i: "寒春暑、 春暑寒、 暑寒春都属于这个范畴 "
					},
					{
						name: "寒春秋 ",
						i: "寒春秋、 春秋寒、 秋寒春都属于这个范畴 "
					},
					{
						name: "寒暑 ",
						i: "寒暑、 暑寒， 都属于这个范畴 "
					}
				],
				csqhName: "",
				sijiIndex: -1,
				yearIndex: -1,
				yearLeiList: [{
					name: "可以"
				}, {
					name: "不可以"
				}],
				classId: "",
				yearLeiListName: "",
				xueqiID: "",
				obj: {
					subject: {},
					chain_course_list: []
				},
				parentsIndex: "", //当前父级的小标,
			}
		},
		computed: {
			...mapState({
				list: state => state.classSettings.classList,
				list1: state => state.classSettings.subList,
				ageLei: state => state.onOne.ageLei,
				falselist: state => state.classSettings.listFalse,
				truelist: state => state.classSettingsfalse.truelist
			})
		},
		methods: {
			classXingClick(index) { //选择班型
				this.list1[index].show = !this.list1[index].show
			},
			yearClick() { //切换类型
				if(this.ageLei.ageSetting == "4" || this.ageLei.ageSetting == "5" || this.ageLei.ageSetting == "6") {
					this.yearShow = false
					this.ageShow = true
				} else {
					return false
				}
			},
			ageClick() { //切换类型
				if(this.ageLei.ageSetting == "4" || this.ageLei.ageSetting == "5" || this.ageLei.ageSetting == "6") {
					this.yearShow = true
					this.ageShow = false
				} else {
					return false
				}
			}, 
			inputYear() { //打开年级弹窗
				this.tableyearShow = true
			},
			inputCloseYear() { //关闭年级弹窗
				this.tableyearShow = false
				let ls = ""
				this.ageLei.gradeList.map((ele, index) => {
					if(ele.show == true) {
						ls += ele.name
					}
				})
				this.modelYear = ls
			},
			inputAge1() { //打开第一个年龄弹窗
				this.istable = 1
				this.tableyearShow1 = true
			},
			inputCloseAge1(res) { //关闭年龄弹窗
				this.tableyearShow1 = false
				if(this.istable == 1) {
					this.modelAge1 = res.ls
					this.modelAgeobj1 = res
				} else {
					this.modelAge2 = res.ls
					this.modelAgeobj2 = res
				}
			},
			inputAge2() { //打开第二个年龄弹窗
				this.istable = 2
				this.tableyearShow1 = true
			},
			xuqiClick(index, ele) { //选择学期
				this.xuqiIndex = index
				this.xueqiID = ele
			},
			xueqiLeftClick() { //向左选学期数 
				if(this.xuqiarrIndex <= 1) {
					return false
				} else {
					this.xuqiIndex = -1
					this.xuqiarrIndex--
						let arr = []
					let ls = [1, 2, 3, 4]
					ls.map(ele => {
						ele += (this.xuqiarrIndex - 1) * 4
						arr.push(ele)
					})
					this.xueqiList = arr
				}
				console.log(this.xuqiarrIndex)
			},
			xueqiRightClick() { //向右选学期数
				this.xuqiIndex = -1
				if(this.xuqiarrIndex >= 5) {
					return false
				} else {
					this.xuqiIndex = -1
					this.xuqiarrIndex++
						let arr = []
					let ls = [1, 2, 3, 4]
					ls.map(ele => {
						ele += (this.xuqiarrIndex - 1) * 4
						arr.push(ele)
					})
					this.xueqiList = arr
				}
			},
			langClick() { //长期班级
				this.xuqiIndex = 10
			},
			smallClick() { //短期班级
				this.xuqiIndex = 20
			},
			hcqsClick(index, ele) { //选择四季
				this.sijiIndex = index
				this.csqhName = ele.name
			},
			yearListClick(index, ele) { //年龄限制
				this.yearIndex = index
				if(ele.name == "可以") {
					this.yearLeiListName = true
				} else {
					this.yearLeiListName = false
				}
			},
			cancelClick() { //取消
				this.$emit("close")
				this.$store.dispatch('getClassSetFalseListser')
			},
			OK() { //确定
				this.Ajax(2)
				
			},
			JX() { //继续填写 
				this.Ajax(1)
			},
			bianji(ele, index2, index) {
				if(ele.is_delete) {
					this.trueAddShow = false
					return false
				} else {
					this.parentsIndex = index
					this.trueAddShow = true
					this.classId = this.truelist.chain_course_list.id //点击获取科目id
					if(index2 == this.truelist.chain_course_list.chain_course_list.length - 1) {
						this.btnshow = true
					} else {
						this.btnshow = false
						this.baocunshow = false
					}
					this.$emit("huixian")
				}
			},
			Ajax(a) {
				let arr = []
				let newobj = {}
				this.list1.map((ele, index) => {
					if(ele.show) {
						arr.push({
							name: ele.name,
							id: ele.id
						})
					}
				})
				newobj.class_type_list = arr
				if(this.yearShow == true) {
					newobj.grade_or_age = "grade"
					let arr1 = []
					this.ageLei.gradeList.map((ele, index) => {
						if(ele.show) {
							arr1.push({
								name: ele.name,
								id: ele.id
							})
						}
					})
					newobj.student_grade_list = arr1
				} else {
					newobj.grade_or_age = "age"
					newobj.start_age = this.modelAgeobj1.one
					newobj.start_month = this.modelAgeobj1.two
					newobj.end_age = this.modelAgeobj2.one
					newobj.end_month = this.modelAgeobj2.two
				}
				newobj.class_course_chain_id = this.classId
				newobj.course_name = this.className
				newobj.code = this.classNameId
				newobj.time_label = this.csqhName
				newobj.isRegisterWhereAgeOrGradeDiff = this.yearLeiListName
				newobj.chain_or_no = "noChain"
				if(this.xuqiIndex == 10) {
					newobj.course_period_type = 2
					newobj.course_num = 1
				} else if(this.xuqiIndex == 20) {
					newobj.course_period_type = 3
					newobj.course_num = 1
				} else {
					newobj.course_period_type = 1
					newobj.course_num = this.xueqiID
				}
				if(newobj.class_type_list.length == 0) {
					alert('请选择班级类型')
					return false
				}
				if(this.yearIndex == -1) {
					alert('请选择具体学期限制')
					return false
				}
				if(this.csqhName == "") {
					alert('请选择具体学期循环')
					return false
				}
				if(this.xuqiIndex == -1) {
					alert('请选择具体课程学期')
					return false
				}
				if(newobj.grade_or_age == "grade" && this.modelYear == "") {
					alert('请选择具体年级')
					return false
				}
				if(newobj.grade_or_age == "age" && this.modelAge1 == "") {
					alert('请选择年龄范围')
					return false
				}
				if(this.className == "") {
					alert('请填写班级名称')
					return false
				}
				this.modelYear = "",
					this.modelAge1 = "",
					this.modelAge2 = "",
					this.className = "",
					this.classNameId = "",
					this.modelAgeobj1 = {},
					this.modelAgeobj2 = {},
					this.xueqiList = [1, 2, 3, 4],
					this.xuqiIndex = -1,
					this.xuqiarrIndex = 1,
					this.csqhName = "",
					this.sijiIndex = -1,
					this.yearIndex = -1,
					this.yearLeiListName = "",
					this.xueqiID = "" 
				this.$store.dispatch('addClassSetNewListser', newobj) //成功追加后要刷新当前页面
					.then(() => {
						//console.log(this.truelist.list[0].chain_course_list[0]) 
						setTimeout(() => {
							this.$store.dispatch('getClassSetIdTypeListFalseser2', {
								name: this.truelist.title,
								id: this.truelist.chain_course_list.subject.id
							})
						}, 500)
					})
				if(a == 2) {
					this.$emit("close")
					this.$store.dispatch('getClassSetFalseListser')
				}
			},
			baocunClick() {
				if(this.btnshow) {
					this.baocunshow = true
				} else {
					this.trueAddShow = false
				}
			}
		},
		mounted() {
			this.$store.dispatch('getClassSetTypeListser')
			this.$store.dispatch('getVipClassAgeLei').then(res => {
				if(res.ageSetting == "1" || res.ageSetting == "4") {
					this.ageShow = false,
						this.yearShow = true
				} else {
					this.ageShow = true,
						this.yearShow = false
				}
			})
		}
	}
</script>

<style lang="less">
	@width : 1008px;
	@color : #31C27C;
	.el-item2 {
		border: none;
		padding-left: 0px;
		background: url("../../../../../images/system-campus/tanhao.png") no-repeat left top;
		background-position-y: 1px;
	}
	
	.curriculum_chain_div {
		.on-one-settings_wai {
			.on-one-settings {
				background: #fff;
				border-radius: 6px;
				box-sizing: border-box;
				padding: 30px;
				.btn-class {
					width: 100%;
					display: flex;
					justify-content: center;
					div {
						width: 130px;
						height: 34px;
						text-align: center;
						line-height: 34px;
						border: 1px solid #dedede;
						border-radius: 6px;
						cursor: pointer;
						color: #666;
						margin: 10px;
						&.cueecs_btn {
							color: #fff;
							background: @color;
						}
						&:hover {
							background: #efefef;
							color: #666;
						}
					}
				}
				section {
					display: flex;
					.curriculum_footer-top {
						display: flex;
						color: #666;
						h5 {
							margin-right: 14px;
						}
					}
					.curriculum_footer-3 {
						margin-bottom: 17px;
					}
					h1 {
						width: 130px;
						color: @color;
						&.class_tie {
							display: flex;
							i {
								display: block;
								width: 20px;
								height: 20px;
								background: url(../../../../../images/system-head/qiehuan.png) no-repeat center center;
								cursor: pointer;
								margin-left: 10px;
							}
						}
					}
					.input_table {
						input {
							border-bottom: 1px solid @color;
							width: 120px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							color: #999;
							&.input_nth2 {
								width: 100px;
								margin: 0 10px;
							}
							&.input_nth2_left {
								margin-left: 0;
							}
						}
					}
					.top-right-div {
						display: flex;
						width: 810px;
						flex-wrap: wrap;
						align-items: center;
						color: #666;
						.show_img {
							background: url(../../../../../images/red.png) no-repeat center right;
						}
						.bottom_2_div {
							display: flex;
							padding-right: 20px;
							margin-right: 20px;
							cursor: pointer;
						}
						.top-right-div-left {
							display: flex;
							margin-bottom: 18px;
							.top-right-div-left-d {
								display: flex;
								margin-left: 50px;
								h4 {
									display: flex;
									margin-right: 30px;
									padding-right: 20px;
									cursor: pointer;
									&.img_g {
										background: url(../../../../../images/red.png) no-repeat center right;
									}
								}
							}
							span {
								margin: 0;
								padding: 0;
							}
							.top-right-div-left-arr {
								margin-left: 20px;
								display: flex;
								div {
									cursor: pointer;
									margin-right: 10px;
									padding-right: 20px;
									width: 14px;
									&.xueqi_urlred {
										background: url(../../../../../images/red.png) no-repeat center right;
									}
								}
								span {
									display: block;
									width: 22px;
									height: 22px;
									background: #000000;
									margin: 0 10px;
									cursor: pointer;
									&.left_c {
										background: url(../../../../../images/system-head/left2_g.png) no-repeat center center;
									}
									&.left_g {
										background: url(../../../../../images/system-head/left_g.png) no-repeat center center;
									}
									&.right_c {
										background: url(../../../../../images/system-head/right2_g.png) no-repeat center center;
									}
									&.right_g {
										background: url(../../../../../images/system-head/right.png) no-repeat center center;
									}
								}
								i {
									margin: 0;
									padding: 0;
								}
							}
						}
						&.te-div {
							height: 25px;
							margin-bottom: 24px;
						}
						input {
							border-bottom: 1px solid @color;
							margin-right: 20px;
							color: #999;
							&.class_name_id {
								margin-right: 0;
								width: 60px;
							}
						}
						b {
							color: @color;
							margin-left: 14px;
						}
						p {
							padding: 2px 12px;
							border: 1px solid @color;
							cursor: pointer;
							color: @color;
							border-radius: 4px;
							margin-left: 20px;
							&:hover {
								background: #efefef;
								color: #000;
							}
						}
					}
					i {
						margin-left: -20px;
					}
					i,
					span {
						padding-right: 18px;
						margin-right: 20px;
						margin-bottom: 24px;
						cursor: pointer;
						&.show_img {
							background: url(../../../../../images/red.png) no-repeat center right;
						}
						&.show_img_true {
							background: url(../../../../../images/common-icon/duigou2.png) no-repeat right;
						}
					}
				}
			}
		}
	}
	
	.el-tooltip__popper.is-dark {
		background: @color;
		color: #fff;
		max-width: 240px;
		line-height: 1.6;
		border-radius: 6px;
	}
	
	.el-tooltip__popper[x-placement^="top"] .popper__arrow {
		bottom: -6px;
		border-top-color: #31C27C;
		border-bottom-width: 0;
	}
	
	.el-tooltip__popper[x-placement^="top"] .popper__arrow {
		bottom: -6px;
		border-top-color: #31C27C;
		border-bottom-width: 0;
	}
	
	.el-tooltip__popper[x-placement^="top"] .popper__arrow::after {
		bottom: 1px;
		margin-left: -5px;
		border-top-color: #31C27C;
		border-bottom-width: 0;
	}
	
	.curriculum-falselistwai {
		margin-top: 14px;
		.curriculum-falselist {
			width: @width;
			background: #fff;
			border-radius: 6px;
			padding: 0 30px;
			box-sizing: border-box;
			h4 {
				height: 60px;
				line-height: 60px;
				color: @color;
				position: relative;
			}
			li {
				border-top: 1px solid #DEDEDE;
				box-sizing: border-box;
				padding-bottom: 24px;
				display: flex;
				h2 {
					margin-top: 24px;
					color: @color;
					width: 177px;
					;
				}
				section {
					width: 870px;
					display: flex;
					flex-wrap: wrap;
					span {
						margin-top: 24px;
						display: block;
						color: #999;
						padding-right: 30px;
						margin-right: 10px;
						cursor: pointer;
						&.is_span {
							color: @color;
						}
						&.length_class {
							background: url(../../../../../images/system-head/daohang.png) no-repeat right center;
						}
					}
				}
			}
		}
	}
	
	.el-tooltip__popper.is-dark {
		background: @color;
		color: #fff;
		max-width: 240px;
		line-height: 1.6;
		border-radius: 6px;
	}
	
	.el-tooltip__popper[x-placement^="top"] .popper__arrow {
		bottom: -6px;
		border-top-color: #31C27C;
		border-bottom-width: 0;
	}
	
	.el-tooltip__popper[x-placement^="top"] .popper__arrow {
		bottom: -6px;
		border-top-color: #31C27C;
		border-bottom-width: 0;
	}
	
	.el-tooltip__popper[x-placement^="top"] .popper__arrow::after {
		bottom: 1px;
		margin-left: -5px;
		border-top-color: #31C27C;
		border-bottom-width: 0;
	}
	
	.el-item2 {
		border: none;
		padding-left: 0px;
		background: url("../../../../../images/system-campus/tanhao.png") no-repeat left top;
		background-position-y: 1px;
	}
</style>