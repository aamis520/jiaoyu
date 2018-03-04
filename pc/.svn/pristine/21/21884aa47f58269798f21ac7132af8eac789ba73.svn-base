//课程设置-一对一设置 
import {
	getOnOneClass,
	getOnOneLeiXingClass,
	getOnOneClassAge,
	baocunOnOneClass,
	geiOnOneLeiListId,
	removeOnOneClass
} from './on-one-settings-server'
const onOne = {
	state: {
		list: [],
		kelist: [],
		ageLei: {},
		addShowObj:{ 
			list: []
		},
		leiIdlise : []
	},

	mutations: {
		GET_ONONESETTINGSCLASS(state, list) {//静态列表
			list.map((ele)=>{
				ele.imgIndex = false
			})
			state.list = list 
		},
		GET_ONONESETTINGSCLASSSHOW(state,index) {//编辑按钮
			state.list[index].imgIndex = !state.list[index].imgIndex
		},
		GET_ONONESETTINGSLEIXINGCLASS(state, list) {//科目类型列表
			state.kelist = list
		},
		GET_ONONESETTINGSCLASSAGE(state, list) {//年份，年龄列表
			list.gradeList.map((ele, index) => {
				ele.show = false
			})
			//增加月份，并且判断是否精确到月份  
			list.mothe = ["1","2","3","4","5","6","7","8","9","10","11","12"]  
			if(list.ageSetting == "3" || list.ageSetting == "6" || list.ageSetting == "4"){
				list.motheShow = true
			}else{
				list.motheShow = false
			} 
			state.ageLei = list 
		},
		SET_ONONESETTINGSCLASSAGE(state, index) {//判断是否精确到月份
			state.ageLei.gradeList[index].show = !state.ageLei.gradeList[index].show
		},
		GET_ONONEADDSHOWOBJ(state , list) {//特殊列表显示
			state.addShowObj = { 
				list : []
			}
			let obj = {
				show : false,
				list : list
			} 
			state.addShowObj = obj
		},
		SET_ONONEADDSHOWOBJ(state){//特殊列表编辑
			state.addShowObj.show = !state.addShowObj.show   
		},
		GET_LEIIDLIST(state , list){//vip类型列表
			state.leiIdlise = list 
		},
		REMOVE_ONONELIST(state , obj){//删除静态列表
			state.list[obj.index1].vip_course_list.splice(obj.index2, 1)
			if(state.list[obj.index1].vip_course_list.length == 0){//如果里层数组为空删除当前对象
				state.list.splice(obj.index1, 1)
			}
		},
		REMOVE_ONONETELIST(state , index){//删除特殊列表
			state.addShowObj.list[0].vip_course_list.splice(index, 1)
		}
	},

	actions: {
		getVipClassList({commit}) {//获取静态列表
			getOnOneClass()
				.then(res => {
					commit('GET_ONONESETTINGSCLASS', res.messages)
				})
		},
		getVipLeiXingClassList({commit}) {//获取科目列表
			getOnOneLeiXingClass()
				.then(res => {
					commit('GET_ONONESETTINGSLEIXINGCLASS', res.messages)
				})
		},
		getVipClassAgeLei({commit}) {//获取年龄，年级列表
			return new Promise((success, error) => {
				getOnOneClassAge()
					.then(res => {
						commit('GET_ONONESETTINGSCLASSAGE', res.messages)
						success(res.messages)
					})
			}) 
		},
		getVipKeList({commit},id){//获取特殊列表
			getOnOneClass(id)
			.then(res=>{
				commit('GET_ONONEADDSHOWOBJ',res.messages)
			})
		},
		baoCunClassKe({commit , dispatch} , obj){//保存填写 
			baocunOnOneClass(obj)
			.then(res=>{
				setTimeout(()=>{
					dispatch('getVipClassList')
				},300) 
			})
		},
		getVipLeiIdList({commit}){//获取vip类型列表
			geiOnOneLeiListId()
			.then(res=>{
				commit("GET_LEIIDLIST",res.messages)
			})
		},
		removeVipOnOneClass({commit},id){//删除科目
			removeOnOneClass(id)
			.then(res=>{})
		}
	}
}

export default onOne