//课程设置-一对N设置 
import { 
	getOnNClass,
	getOnOneLeiXingClass,
	getOnOneClassAge,
	baocunOnOneClass,
	geiOnOneLeiListId,
	removeOnOneClass
} from './on-one-settings-server'
const onN = {
	state: {
		list: [],
		kelist: [], 
		addShowObj:{
			list:[]
		},
		leiIdlise : []
	},

	mutations: {
		GET_ONNSETTINGSCLASS(state, list) {//静态列表
			list.map((ele)=>{
				ele.imgIndex = false
			})
			state.list = list 
		},
		GET_ONNSETTINGSCLASSSHOW(state,index) {//编辑按钮
			state.list[index].imgIndex = !state.list[index].imgIndex
		},
		GET_ONNSETTINGSLEIXINGCLASS(state, list) {//科目类型列表
			state.kelist = list  
		}, 
		GET_ONNADDSHOWOBJ(state , list) {//特殊列表显示
			state.addShowObj = {
				list: []
			}
			let obj = {
				show : false,
				list : list
			} 
			state.addShowObj = obj
		},
		SET_ONNADDSHOWOBJ(state){//特殊列表编辑
			state.addShowObj.show = !state.addShowObj.show   
		},
		GET_LEIIDLISTN(state , list){//vip类型列表
			let arr = []
			list.map((ele,index)=>{
				ele.show = false
				if(ele.type == "oneToN"){
					arr.push(ele)
				}
			}) 
			state.leiIdlise = arr 
		},
		SET_LEIIDLIST(state , index){//vip类型选中 
			state.leiIdlise[index].show = !state.leiIdlise[index].show 
		},
		REMOVE_ONNLIST(state , obj){//删除静态列表
			state.list[obj.index1].vip_course_list.splice(obj.index2, 1) 
			if(state.list[obj.index1].vip_course_list.length == 0){//如果里层数组为空，删除外层对象
				state.list.splice(obj.index1, 1)
			}
		},
		REMOVE_ONNTELIST(state , index){//删除特殊列表
			state.addShowObj.list[0].vip_course_list.splice(index, 1)
		}
	},

	actions: {
		getVipNClassList({commit}) {//获取静态列表
			getOnNClass()
				.then(res => {
					commit('GET_ONNSETTINGSCLASS', res.messages)
				})
		},
		getVipNLeiXingClassList({commit}) {//获取科目列表
			getOnOneLeiXingClass()
				.then(res => { 
					commit('GET_ONNSETTINGSLEIXINGCLASS', res.messages)
				})
		}, 
		getVipNKeList({commit},id){//获取特殊列表
			getOnNClass(id)
			.then(res=>{
				commit('GET_ONNADDSHOWOBJ',res.messages)
			})
		},
		baoCunNClassKe({commit , dispatch} , obj){//保存填写 
			baocunOnOneClass(obj)
			.then(res=>{
				setTimeout(()=>{
					dispatch('getVipNClassList')
				},300) 
			})
		},
		getVipLeiIdListN({commit}){//获取vip类型列表
			geiOnOneLeiListId()
			.then(res=>{
				commit("GET_LEIIDLISTN",res.messages)
			})
		},
		removeVipOnOneClass({commit},id){//删除科目
			removeOnOneClass(id)
			.then(res=>{})
		}
	}
}

export default onN