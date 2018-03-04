//课程设置-班级设置-非课程链 
import {
	getClassSetFalseList
} from './class-settings-false-server'
import {
	getClassSetIdTypeList,
	getClassSetNewList
} from './class-settings-server'
const classSettingsFlae = {
	state: {
		one: "1",
		list: [],
		listFalse: {
			title: "",
			chain_course_list: {}
		},
		truelist: {
			title: "",
			chain_course_list: {}
		}
	},

	mutations: {
		GET_CLASSSETLISTFALSE(state, list) {
			var arr = []
			for(let i in list) {
				var obj = {
					name: i,
					list: list[i][0] ? list[i][0] : {}
				}
				arr.push(obj)
			}
			state.list = arr
		},
		GET_CLASSSETTINGSFALSELIST2(state, obj) {
			if(obj.list == null || obj.list.length == 0) {
				let arr = {
					title: obj.name,
					chain_course_list: []
				}
				state.listFalse = arr
			} else {
				let arr = {
					title: obj.name,
					chain_course_list: obj.list[0]
				}
				state.listFalse = arr
			}
		},
		GET_CLASSSETTINGSFALSELIST3(state, obj) {
			if(obj.list == null || obj.list.length == 0) {
				let arr = {
					title: obj.name,
					chain_course_list: []
				}
				state.truelist = arr
			} else {
				let arr = {
					title: obj.name,
					chain_course_list: obj.list[0]
				}
				state.truelist = arr
			}
			console.log(state.truelist)
		}
	},

	actions: {
		getClassSetFalseListser({
			commit
		}) {
			getClassSetFalseList()
				.then(res => {
					commit('GET_CLASSSETLISTFALSE', res.messages.data)
				})
		},
		getClassSetIdTypeListFalseser({
			commit
		}, obj) {
			getClassSetIdTypeList(obj.id)
				.then(res => {
					commit('GET_CLASSSETTINGSFALSELIST2', {
						name: obj.name,
						list: res.messages.data
					})
				})
		},
		getClassSetIdTypeListFalseser2({
			commit
		}, obj) {
			getClassSetIdTypeList(obj.id)
				.then(res => {
					commit('GET_CLASSSETTINGSFALSELIST3', {
						name: obj.name,
						list: res.messages.data
					})
				})
		},
		addClassSetNewListfalseser({
			commit,
			dispatch
		}, list) {
			return new Promise((succer, error) => {
				getClassSetNewList(list)
					.then(res => {
						succer()
					})
			})

		}
	}
}

export default classSettingsFlae