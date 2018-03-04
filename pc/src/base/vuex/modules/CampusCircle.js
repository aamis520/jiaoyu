//校园圈
import {
	loginByUsername,
	loginDiQuname,
	loginFnXiaoname,
	loginInitQuan,
	loginPingLunQuan,
	loginHuiFuQuan,
	removeHuiFuQuan,
	removePingLUNQuan,
	removeXiaoYuanQuan
} from './CampusCircleServer'

const CampusCircle = {
	state: {
		name: '总部',
		Diqu: [],
		FenXiao: [],
		quanList: []
	},

	mutations: {

		GET_TABLE_NAME(state, data) {
			state.name = data
		},
		
		GET_DIQU(state, data) {
			data.map((ele, index) => {
				ele.isshow = false
			})
			state.Diqu = data
		},

		GET_FENXIAO(state, data) {
			data.map((ele, index) => {
				ele.isshow = false
			})
			state.FenXiao = data
		},

		GET_QUANLIST(state, data) {
			data.map((ele, index) => {
				ele.listdeom = false
				ele.childrenList = []
			})
			state.quanList = data
		},

		GET_PINGLUNONE(state, obj) {
			obj.data.map((ele, index) => {
				ele.listshow = false
				ele.childrenList = []
			})
			state.quanList[obj.index].childrenList = obj.data
		},

		GET_HUIFU(state, obj) {
			obj.data.map((ele, index) => {
				ele.listShow = false
			})
			state.quanList[obj.parentIndex].childrenList[obj.index].childrenList = obj.data
		},

	},

	actions: {
		//return new Promise((resoleve , reject)
		//根据总校获取地区
		getDiQu({commit}) {
			loginDiQuname()
				.then(res => {
					let data = res.messages.data
					commit('GET_DIQU', data)
				})
		},

		//根据地区获取分校
		getFenXiao({commit}, id) {
			loginFnXiaoname(id)
				.then(res => {
					let data = res.messages.data
					commit('GET_FENXIAO', data)
				})
		},

		//根据总校id获取朋友圈
		getZongInit({commit} , obj) {
			loginInitQuan(obj.id, obj.type)
				.then(res => {
					let data = res.messages.data
					commit('GET_QUANLIST', data)
				})
		},

		//请求第一次评论内容
		getPingLun({commit}, obj) {
			loginPingLunQuan(obj.id)
				.then(res => {
					let newobj = {
						data: res.messages.data,
						index: obj.index
					}
					commit('GET_PINGLUNONE', newobj)
				})
		},

		//获取回复列表
		getHuiFu({commit}, obj) {
			loginHuiFuQuan(obj.id)
				.then(res => {
					let newobj = {
						data: res.messages.data,
						index: obj.index,
						parentIndex: obj.parentIndex
					}
					commit('GET_HUIFU', newobj)
				})
			console.log(obj.id)
		},

		//删除回复列表内容
		removeLi({commit,dispatch}, obj) {
			removeHuiFuQuan(obj.id)
				.then(res => {
					let obj2 = {
						index: obj.parentIndex,
						parentIndex: obj.ppaarrIndex,
						id: obj.id
					}
					//删除之后重新调用读取的dispatch
					dispatch('getHuiFu', obj2)
				})
		},

		//删除评论
		removeWai({commit,dispatch}, obj) {
			removePingLUNQuan(obj.id2)
				.then(res => {
					let obj2 = {
						index: obj.index,
						id: obj.id
					}
					//删除之后重新调用读取的dispatch
					dispatch('getPingLun', obj2)
				})
		},

		//删除分享 
		removeFenxiang({commit,dispatch}, id) {
			removeXiaoYuanQuan(id)
				.then(res => {
					//删除之后重新调用读取的dispatch
					dispatch('getZongInit',{
						id : "",
						type : ""
					})
				})
		},
		
		//切换地区重新加载评论圈
		qiehuanQuan({commit} , obj) {
			
		}
	}
}

export default CampusCircle