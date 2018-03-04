<template>
	<div class="on-one-settings_wai">
		<div class="on-one-settings">
			<section v-if="checkedshow">
				<h1>
				科目类型
			</h1>
				<div class="top-right-div">
					<span :class="{show_img : listIndex == index}" v-for="(ele,index) in list" :key="index" @click="listClick(index,ele)">{{ele.name}}</span>
				</div>
			</section>
			<section>
				<h1>
				课程名称
				<el-tooltip class="el-item2" effect="dark" content="这里输入对一课程的中文名称，例如高一英语一对一" placement="top-start">
				      	<el-button></el-button>
				</el-tooltip> 
			</h1>
				<div class="top-right-div te-div">
					<input type="text" name="" id="" v-model="className" placeholder="请输入课程的中文名称" />
					<b>{{checkName}}</b>
					<p @click="chongClick">重选</p>
				</div>
			</section>
			<section>
				<h1 class="class_tie" v-if="yearShow">
				年级
				<i @click="yearClick"></i>
			</h1>
				<div class="input_table" v-if="yearShow">
					<input type="text" name="" id="" v-model="modelYear" placeholder="请选择具体年级" @click="inputYear" />
					<transition name="el-fade-in-linear">
						<v-tbleyear v-if="tableyearShow" :list="ageLei.gradeList" @close="inputCloseYear"></v-tbleyear>
					</transition> 
				</div>
				<h1 class="class_tie" v-if="ageShow">
				年龄
				<i @click="ageClick"></i>
			</h1>
				<div class="input_table" v-if="ageShow">
					<input type="text" name="" id="" v-model="modelAge1" class="input_nth2 input_nth2_left" placeholder="请选择年龄范围" @click="inputAge1" /> 至
					<transition name="el-fade-in-linear">
						<v-tableage v-if="tableyearShow1" @close="inputCloseAge1" :list="ageLei"></v-tableage>
					</transition>
					<input type="text" name="" id="" v-model="modelAge2" class="input_nth2" placeholder="请选择年龄范围" @click="inputAge2" />
				</div>
			</section>
			<div class="btn-class">
				<div @click="cancelClick">取消</div>
				<div @click="OK">确定</div>
				<div @click="JX">继续填写</div>
			</div>
		</div>
		<div class="add_new_list" v-if="checkName != '' && addShowObj.list.length >0">
			<h1>{{checkName}}<i @click="xiugaiClick" :class="{i_img_url : addShowObj.show}"></i></h1>
			<ul v-if="addShowObj.list">
				<li v-for="(ele,index) in addShowObj.list[0].vip_course_list" :key="index">{{ele.name}}<i v-if="addShowObj.show" @click="removeClick(ele,index)"></i></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import tableYear from '../on-one-settings-year'
	import tableage from '../on-one-settings-age'
	export default {
		computed: {
			...mapState({
				list: state => state.onOne.kelist,
				ageLei: state => state.onOne.ageLei,
				addShowObj: state => state.onOne.addShowObj, 
				leiIdlise: state => state.onOne.leiIdlise
				
			})
		},
		data() {
			return {
				checkName: "",
				checkedshow: true,
				listIndex: -1,
				className: "",
				classId: "",
				ageShow: false,
				yearShow: true,
				tableyearShow: false,
				tableyearShow1: false,
				modelYear: "",
				modelAge1: "",
				modelAge2: "",
				modelAgeobj1: {},
				modelAgeobj2: {},
				istable: 0, //判断当前是哪一个input点击了
			}
		},
		props: {
			close: {}
		},
		components: {
			"v-tbleyear": tableYear,
			"v-tableage": tableage
		},
		methods: {
			listClick(index, ele) { //选择类型
				this.listIndex = index
				this.checkName = ele.name
				this.classId = ele.id
				this.checkedshow = false
				this.$store.dispatch('getVipKeList', ele.id)
			},
			chongClick() { //重新选择
				this.checkName = ""
				this.checkedshow = true
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
			cancelClick() { //取消
				this.$emit('close')
			},
			xiugaiClick() { //修改 
				this.$store.commit('SET_ONONEADDSHOWOBJ')
			},
			Ajax(id) {
				let obj = {}
				if(this.yearShow == true) {
					obj.used_type = "grade"
					let ls = ""
					this.ageLei.gradeList.map((ele, index) => {
						if(ele.show == true) {
							ls += ele.id + ","
						}
					})
					ls.substring(1, ls.Length - 1)
					obj.studentGradeIds = ls
				} else {
					obj.used_type = "age"
					obj.age_start_year = this.modelAgeobj1.one 
					if(this.modelAgeobj1.two){
						obj.age_start_month = this.modelAgeobj1.two
					}
					obj.age_end_year = this.modelAgeobj2.one
					if(this.modelAgeobj2.two){
						obj.age_end_month = this.modelAgeobj2.two
					} 
				}
				if(obj.used_type == "grade" && this.modelYear == "") {
					alert('请选择具体年级')
					return false
				}
				if(obj.used_type == "age" && this.modelAge1 == "") {
					alert('请选择年龄范围')
					return false
				}
				if(this.checkName == "") {
					alert('请选择班级类型')
					return false
				}
				if(this.className == "") {
					alert('请填写班级名称')
					return false
				}
				obj.name = this.className
				obj.subjectId = this.classId
				this.leiIdlise.map((ele,index)=>{
					if(ele.type == "oneToOne"){
						obj.vipTypeIds = this.leiIdlise[index].id
					}
				}) 
				this.$store.dispatch('baoCunClassKe', obj)
				if(id == 1){
					this.$emit('close')
				}
			},
			OK() { //确认 
				this.Ajax(1) 
			},
			JX() {//继续
				this.Ajax(2)
				this.className = ""
				this.modelYear= ""
				this.modelAge1= ""
				this.modelAge2= ""
				setTimeout(()=>{
					this.$store.dispatch('getVipKeList', this.classId)
				},500)
			},
			removeClick(ele , index) {//删除
				this.$store.commit('REMOVE_ONONETELIST',index)
				this.$store.dispatch('removeVipOnOneClass',ele.id) 
			} 
		},
		mounted() {
			this.$store.dispatch('getVipLeiXingClassList')
			this.$store.dispatch('getVipLeiIdList')
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

<style scoped="scoped" lang="less">
	 @import url("../vip-add.less");
</style>