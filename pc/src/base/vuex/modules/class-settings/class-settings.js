//班级设置-课程链设置
import {
	getClassSetList,
	getClassSetTypeList,
	getClassSetIdTypeList,
	getClassSetNewList,
	addClassSetNewList
} from './class-settings-server'
import {
	getclassTypeList
} from './common-setting-sever'
import {
	getOnOneClassAge
} from './on-one-settings-server'
const classSettings = {
	state: {
		list: [],
		truelist: [],
		classList: [],
		subList: [],
		listFalse: [],
	},

	mutations: {
		GET_CLASSLISTSETTING(state, list) {
			state.classList = list.subjectList
		},
		GET_CLASSSETLIST(state, list) {
			var arr = []
			for(let i in list) {
				var obj = {
					name: i,

					list: list[i]
				}
				arr.push(obj)
			}
			state.list = arr
		},
		GET_SUBSETLIST(state, list) {
			list.map((ele, index) => {
				ele.show = false
			})
			state.subList = list
		},
		GET_CLASSSETTINGSFALSELIST(state, obj) {
			if(obj.list == null || obj.list.length == 0) {
				let arr = {
					title: obj.name,
					list: [{
						name: "课程链一",
						code: "001",
						chain_course_list: []
					}]
				}
				state.listFalse = arr
			} else {
				let arr = {
					title: obj.name,
					list: obj.list
				}
				let ls = "000" + (obj.list[obj.list.length - 1].code * 1 + 1)
				arr.list.push({
					name: "新课程链",
					code: ls.substring(ls.length - 3),
					chain_course_list: []
				})
				state.listFalse = arr
			}

		},
		GET_CLASSSETTINGSFALSELISTPUSH(state, obj) {
			state.listFalse.list[state.listFalse.list.length - 1].chain_course_list.push(obj)
		},
		GET_CLASSTRUELISTSUBJECT(state, obj) {
			state.truelist = obj
		},
		//		ADD_CLASSTRUELISTPUSH(state , obj) {
		//			state.truelist.list[obj.index].chain_course_list.push(obj.data)
		//		}
	},

	actions: {
		getClassSetList({
			commit
		}) {
			getClassSetList()
				.then(res => {
					commit('GET_CLASSSETLIST', res.messages.data)
				})
		},
		getClassSetTypeListser({
			commit
		}, str) {
			getClassSetTypeList(str)
				.then(res => {
					commit('GET_SUBSETLIST', res.messages.data)
				})
			getclassTypeList()
				.then(res => {
					commit('GET_CLASSLISTSETTING', res.messages)
				})
		},
		getClassSetIdTypeListser({
			commit
		}, obj) {
			getClassSetIdTypeList(obj.id, obj.chain)
				.then(res => {
					commit('GET_CLASSSETTINGSFALSELIST', {
						name: obj.name,
						list: res.messages.data
					})
				})
		},
		getClassSetNewListser({
			commit,
			dispatch
		}, obj) {
			getClassSetNewList(obj)
				.then(res => {
					setTimeout(() => {
						dispatch('getClassSetList')
					}, 500)
				})
		},
		getClassFalseListser({
			commit
		}, obj) {
			getClassSetIdTypeList(obj.id, obj.chain)
				.then(res => {
					commit('GET_CLASSTRUELISTSUBJECT', {
						name: obj.name,
						list: res.messages.data
					})
				})
		},
		addClassSetNewListser({
			commit,
			dispatch
		}, list) {
			return new Promise((succer, error) => {
				addClassSetNewList(list)
					.then(res => {
						succer()
					})
			})

		}
	}
}

export default classSettings