//互联学校介绍
//总校介绍
//课程介绍
//选择校区公共弹窗
import {
	 headerSchoolXinXi,
	 getheaderSchoolXinXi,
	 getheaderSchoolKeCheng,
	 getHuLianDiQu,
	 getHuLianXiaoQu,
	 PvheaderSchoolKeCheng
} from './SchoolPropagandaServer'

const SchoolPropaganda = {
	state: {
		/**
		 * 总校介绍
		 * */
		 inputData: {
					address: "",
					tel: "",
					ele_tel: "",
					e_mail: "",
					cont: "",
					logo: '',
					fileList: []
			},
			
		/**
		 * 课程介绍
		 * */
		ulShow: true,
		subjectList:[],
		/**
		 * 选择校区弹窗
		 * */
		schoolShow: false,
		areaIndex: -1,
		areaList:[],
		schoolList:[],
		schoolListTwo:[]
	},

	mutations: {
		/**
		 * 总校介绍
		 * */
		SET_SCHOOLPROPAGANDADATA(state , data){
			state.inputData = data 
		}, 
		GET_SCHOOLPROPAGANDADATA(state , obj){ 
			//第一次获取回来的图片列表需要转化成数组对象
			let arr = []
			obj.introImages.map(ele=>{
				arr.push({url:ele})
			})
			state.inputData = {
				address: obj.address,
				tel: obj.customerServiceTels[0],
				ele_tel: obj.customerServiceTels[1],
				e_mail: obj.email,
				cont: obj.schoolShortIntro,
				logo: obj.logo,
				fileList: arr
			}
		}, 
		/**
		 * 课程介绍
		 * */
		SET_ULSHOW(state) {
			state.ulShow = !state.ulShow
		},
		GET_SUBJECTLIST(state , list) {
			state.subjectList = list
		},
		/**
		 * 校区弹窗
		 * */
		SET_SCHOOLSHOW(state) {
			state.schoolShow = !state.schoolShow
		},
		SET_AREALIST(state , list) {
			list.map((ele,index)=>{
				ele.once = true
			})
			state.areaList = list
		},
		SET_AREALISTONCE(state , index) { 
			state.areaList[index].once = false
		},
		SET_SCHOOLLIST(state , obj) { 
			obj.list.map((ele,index)=>{
				ele.show = false
			})
			state.schoolList.push(obj) 
		},
		SET_AREAINDEX(state , index) {
			state.areaIndex = index
		},
		/**
		 * 向页面发送你选中的那个list
		 * */
		SET_SCHOOLLISTTWO(state , index){
			state.schoolList.map((ele,index2)=>{
				if(ele.index == index){
					state.schoolListTwo = state.schoolList[index2].list
				}
			})  
		},
		SET_SCHOOLTWOSHOW(state , index){
			state.schoolListTwo[index].show = !state.schoolListTwo[index].show
		},
		REMOVE_SCHOOLLISTSHOW(state , obj){ 
			state.schoolList.map((ele,id)=>{  
				if(ele.index == obj.index){ 
					ele.list[obj.index2].show = false
				}
			})
		},
		REMOVE_SCHOOLLISTKONG(state){
			state.schoolList = []
			state.areaList = []
			state.schoolList = []
			state.schoolListTwo = []
		}
	},

	actions: {
		/**
		 * 总校介绍
		 * */
		banCunHeaderSchool( {commit , dispatch} , obj){
			headerSchoolXinXi(obj)
			.then(res=>{
				dispatch('huoquheaderSchoolXinXi')
			})
		}, 
		huoquheaderSchoolXinXi({commit}){
			getheaderSchoolXinXi()
			.then(res=>{ 
				commit('GET_SCHOOLPROPAGANDADATA',res.data.messages.data)
			})
		}, 
		/**
		 * 课程介绍
		 * */
		huoQuHeaderKeCheng({commit}) {
			getheaderSchoolKeCheng()
			.then(res=>{
				commit('GET_SUBJECTLIST',res.data.messages.data) 
			})
		}, 
		baoCunHeaderKeCheng({commit , dispatch},obj){
			PvheaderSchoolKeCheng(obj)
			.then(res=>{ 
				dispatch('huoQuHeaderKeCheng')
			})
		},
		/**
		 * 校区弹窗
		 * */
		huoQuHuLianDiQu({commit}) {
			getHuLianDiQu()
			.then(res=>{
				commit('SET_AREALIST' , res.data.messages.data) 
			})
		}, 
		huoQuHuLianXiaoQu({commit} , obj) {
			getHuLianXiaoQu(obj.id)
			.then(res=>{
				commit('SET_SCHOOLLIST',{
					index: obj.index,
					list: res.data.messages.data
				})
				commit('SET_SCHOOLLISTTWO',obj.index)
			})
		},
	}
}

export default SchoolPropaganda