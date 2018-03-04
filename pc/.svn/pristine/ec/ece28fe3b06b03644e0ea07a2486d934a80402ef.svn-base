<template>
	<div class="opening_class">
		<v-title :listData="listData" @keLianAjax="keLianAjax"   ></v-title>
		<v-body v-for="(ele,index) in listData.dataArray" :key="index" :list="ele" @open="open" @addInit="addInit" ></v-body>
		<!--<v-tixing :tishi="listData.tishi"></v-tixing>-->
		<v-addClass v-if="addClassShow"  @close="close" :addArray='listData.addArray' @keLianAjax="keLianAjax" ></v-addClass>
	</div>
</template>

<script>
	//v-if="addClassShow"
	import titleNav from './openingNewClassTitle'
	import bodyConent from './openingNewClassBody'
	import tixing from './openingNewClassTiXing'
	import addClass from './openingNewClassAdd'
	import cont from '../../../../base/commonJS/const' 
	export default {
		name: "",
		components :{
			"v-title": titleNav,
			"v-body": bodyConent,
			"v-tixing": tixing,
			"v-addClass": addClass
		},
		data() {
			return { 
				schoolId: this.$ls.get("USER_INFO").schoolId,
				headSchoolId:this.$ls.get("USER_INFO").headSchoolId,
				addClassShow: this.$store.state.OldStore.addClassroom,
				hui:false,
				listData: { 
						subjectList: [
						// { name: "语文", is_check: false ,id:"" }
					],
					chainList: [ 
						// { name: "科链一008", is: false },
						// { name: "非课程链", is: false }
					],
					dataArray :[],
					tishi:{
						one: ["3000元/期","30次/期","300元/次"],
						two: "贝贝少儿美语教材180元",
						three: "赠送一年级阅读10次",
						four: "班容30人",
						five: ["16-08-23生效","17-09-01新标准生效"]
					},
					addArray :{
						id : "",
						codeId:"",
						oldcodeId: "",
						data : {
							listOne: {},
							listTwo: { },
							give_item:{
								freeMaterial : {}
							},
							newData: [[{}],[{}]], 
							fy: {
								feeByPeriod:"",
								feeByTime: "",
								numberOfPeriod:""
							},
							classCourse:{}
						}
					} ,
					
				}
			}
		}, 
		methods: {
				/**
	         * 课程内容ajax方法传递给子组件
	         * */
	        keLianAjax(id){
	        	this.$store.commit('SET_KEMULIID',id)//向store中存储一下id回来重新刷新页面
	        	let url = cont.campus+"v1/campus/coursechain/slectClassCourseChainInfo"
	            let prames = {
	                classCourseChainId : id, //id需要改变模拟this.schoolId,// 
	                isCheckAll : false
	            }
	
	            this.axios.post(url , prames)
	            .then(res => {     
						 this.listData.dataArray = res.messages.data  
	                },
	                res => {
	                    alert("网络繁忙 ！请刷新重试 ！")
	                })
	        },
	        
	        /**
	         * 打开弹窗
	         * */
	        open(){
	        	this.$store.commit('addClassroomClick')
	        	this.addClassShow = this.$store.state.OldStore.addClassroom
	        },
	        close(){
	        	this.$store.commit('closeClassroomClick')
	        	this.addClassShow = this.$store.state.OldStore.addClassroom 
	        },
	        /**
	         * 请求添加页面的初始数据
	         * */ 
	        addInit(id , listId){ 
	        	let url = cont.campus+"v1/campus/coursechain/selectByClassPeriodIdAndFirstLessonDate"
        		let propmes = {
        			coursePeriodId : id//this.schoolId// //
        		}
        		
        		this.axios.post(url , propmes)
        		.then(res=>{    
        				this.listData.addArray.data.listOne = res.messages.CoursePeriod
        				this.listData.addArray.data.listTwo = res.messages.coursePeriodSetting
        				this.listData.addArray.data.give_item = res.messages.coursePeriodSetting.give_item
        				this.listData.addArray.data.classCourse = res.messages.classCourse
        				this.listData.addArray.data.fy = res.messages.coursePeriodSetting.standardFee
        				this.listData.addArray.codeId = res.messages.code
        				this.listData.addArray.oldcodeId = res.messages.oldCode
        				
        				
        				let newdata  = new Date().getYear().toString().substring(1)//获取当前时间17+name，创建一个数组v-for
						let newdata1  = new Date().getYear().toString().substring(1)
							newdata1 = newdata1 * 1 + 1  //拼接成为下一年的
							let newDataArr = []
							let newDataArr1 = []
							res.messages.CoursePeriod.time_label.map((ele,index)=>{
								let newDataObj = {}
								let newDataObj1 = {}
								newDataObj.name = newdata+ele.name
								newDataObj1.name = newdata1+ele.name
								newDataObj.isbool = false
								newDataObj1.isbool = false
								newDataArr.push(newDataObj)
								newDataArr1.push(newDataObj1)
							})
			 			this.listData.addArray.data.newData[0] = newDataArr //课程排表日期
			 			this.listData.addArray.data.newData[1] = newDataArr1 //课程排表日期
        				this.listData.addArray.id = listId //班级第几期的id有body传过来  
        		},res=>{
        			
        		})
	        }
		}, 
		mounted(){ 
			this.$store.commit("xgSchoolTitle",'开设新班')
			/**
				初步请求科目列表
			 */
			let titleInitUrl = cont.campus+"v1/campus/coursechain/findSubjectList"
			let titleInitparmes = { 
                headSchoolId : this.headSchoolId, //1 
            }
			
			this.axios.post(titleInitUrl , titleInitparmes)
			.then(res => {    
					this.listData.subjectList = res.messages.data 
                },
                res => {
                    alert("网络繁忙 ！请刷新重试 ！")
                })
		}
	}
</script>

<style scoped lang="less">
	.opening_class{
		height: 600px;
	}
</style>
