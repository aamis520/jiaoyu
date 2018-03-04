<template>
	<div class="curriculum_chain_div">
		<div class="on-one-settings_wai">
			<div class="on-one-settings">
				<section v-if="checkedshow">
					<h1>科目类型</h1>
					<div class="top-right-div">
						<span :class="{show_img : listIndex == index}" v-for="(ele,index) in list" :key="index" @click="listClick(index,ele)">{{ele.name}}</span>
					</div>
				</section>

				<section>
					<h1>课程名称</h1>
					<div class="top-right-div te-div">
						<input type="text" name="" id="" v-model="className" placeholder="请输入课程的中文名称" />
						<input type="text" name="" class="class_name_id" v-model="classNameId" placeholder="课程代码" />
						<el-tooltip class="el-item2" effect="dark" content="课程代码关系到班级名称设定，请认真填写（限制4个以内的字母或数字）" placement="top-start">
							<el-button></el-button>
						</el-tooltip>
						<b v-if="chongshow">{{checkName}}</b>
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
					<div @click="OK" >结束本链</div>
					<div @click="JX"  class="cueecs_btn">继续填写本链</div>  
				</div> 
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
			checkedshow: {},
			chongshow: {},
			checkedshowClick: {}
		},
		data() {
			return {
				listIndex: -1,
				ageShow: false,
				yearShow: true,
				tableyearShow: false,
				tableyearShow1: false,
				modelYear: "",
				modelAge1: "",
				modelAge2: "",
				className: "",
				checkName: "",
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
				}
			}
		},
		computed: {
			...mapState({
				list: state => state.classSettings.classList,
				list1: state => state.classSettings.subList,
				ageLei: state => state.onOne.ageLei,
				falselist: state => state.classSettings.listFalse,
				whatState: state => state.classSettings.whatState,
			})
		},
		methods: {
			listClick(index, ele) { //选择类型
				this.listIndex = index
				this.checkName = ele.name
				this.classId = ele.id
				//this.checkedshow = false
				this.$emit("checkedshowClick")
				this.$store.dispatch('getClassSetIdTypeListser', {
					id: ele.id,
					name: ele.name,
					chain: "chain"
				})
				this.$emit("falseListOpen")
			},
			chongClick() { //重新选择
				this.checkName = ""
				//this.checkedshow = true
				this.$emit("falseListClose")
				this.$emit("checkedshowClick")
			},
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
			},
			OK() { //确定
				this.Ajax(2) 
				console.log(this.obj)
				
			},
			JX() { //继续填写 
				this.Ajax(1)	
			},
			Ajax(a) {
				let arr = []
				this.obj.subject.id = this.classId
				this.obj.subject.name = this.checkName
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
				newobj.course_name = this.className
				newobj.code = this.classNameId
				newobj.time_label = this.csqhName
				newobj.isRegisterWhereAgeOrGradeDiff = this.yearLeiListName
				this.obj.chain_or_no = "chain"
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
				//				if(this.classId == ""){
				//					alert('请填写课程代码')
				//					return false
				//				}
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
				this.obj.chain_course_list.push(newobj)
				this.$store.commit('GET_CLASSSETTINGSFALSELISTPUSH', {
					course_name: this.className,
					class_type_num: newobj.course_num,
					class_type_list: newobj.class_type_list
				})
				console.log(this.falselist)
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
					if(a == 2){
						this.$store.dispatch('getClassSetNewListser', this.obj)
						this.$emit("close")
					}
			}
		},
		mounted() { 
			this.$store.dispatch('getClassSetTypeListser','chain')
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
	@import url("../add.less");
</style>