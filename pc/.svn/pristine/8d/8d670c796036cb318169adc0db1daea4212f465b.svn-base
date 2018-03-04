//课程设置-班级设置-课程链组合
import {
	getCodeClassSubject,
	kepCodeClassSubject,
	getHeaderClassSubject,
	removeHeaderClassSubject
} from './class-settings-group-server.js'
const settingsGroup = {
	state: {
		list: {
			datas: []
		},
		groupList: {
			onelist: {},
			twolist: {},
			threelist: {}
		}
	},
	mutations: {
		PUSH_CLASSGROUPLIST(state, obj) {
			if(obj.num == "1") {
				state.groupList.onelist = obj.list
			} else if(obj.num == "2") {
				state.groupList.twolist = obj.list
			} else {
				state.groupList.threelist = obj.list
			}
		},
		INIT_CLASSGROUPLIST(state) {
			state.groupList = {
				onelist: {},
				twolist: {},
				threelist: {}
			}
		},
		PAGE_CLASSGROUPLIST(state, data) {
			state.list = data
			data.datas.map((ele, index) => {
				ele.newList = []
				ele.class_course_chain_list.map((ele2, index2) => {
					ele.newList.push(...ele2.chain_course_list)
				})
			})
		}
	},
	actions: {
		getCodeClassSubjectser({ //获取课程链
			commit
		}, obj) {
			return new Promise((succer, error) => {
				getCodeClassSubject(obj.id)
					.then(res => {
						succer(res.messages)
						if(res.messages.data != null) {
							commit('PUSH_CLASSGROUPLIST', {
								list: res.messages.data,
								num: obj.num
							})
						}
					})
			})
		},
		kepCodeClassSubjectser({ //保存课程链组合
			commit,
			dispatch
		}, obj) {
			kepCodeClassSubject(obj)
				.then(res => {
					setTimeout(() => {
						dispatch('getHeaderClassSubjectser', {
							pageSize: 4,
							pageNo: 1
						})
					}, 300)
				})
		},
		getHeaderClassSubjectser({ //获取课程链组合
			commit
		}, obj) {
			getHeaderClassSubject(obj)
				.then(res => {
					commit('PAGE_CLASSGROUPLIST', res.messages.data)
				})
		},
		removeHeaderClassSubjectser({
				commit,
				dispatch
			}
			,id) { //删除课程链组合
			removeHeaderClassSubject(id)
				.then(res => { 
						dispatch('getHeaderClassSubjectser', {
							pageSize: 4,
							pageNo: 1
						}) 
				})
		}
	}
}

export default settingsGroup