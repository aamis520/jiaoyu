//课程设置-常用项设置
import {
	getclassInitList,
	getclassTypeList,
	getclassTypeList2,
	addclassTypeList,
	addclassTypeList2,
	removeclassTypeList,
	removeclassTypeList2,
	addclassMoneyList,
	addclassTypeAllList,
	addVipClassType,
	removeVipClassType,
	removeclassMoneyList
}from './common-setting-sever'
const commoSettings = {
	state: { 
		 tableList1:[],
		 tableList2:[],
		 allList:{
		 	list1:[],
		 	list2:[],
		 	list3:[],
		 	list4:[],
		 	list5:[],
		 	list6:[],
		 	list7:[],
		 	list8:[],
		 	list9:[], 
		 }
	},

	mutations: { 
		GET_CLASSTYPELIST(state,list) {
			state.tableList1 = list
		},
		GET_CLASSTYPELIST2(state,list) {
			let arr1 = []
			let arr2 = []
			let arr3 = []
			let arr4 = []
			let arr5 = []
			let arr6 = []
			state.tableList2 = list.classTypeList
			state.allList.list1 = list.subjectList
			state.allList.list2 = list.classTypeList 
			state.allList.list3 = list.vip1vnClassTypeList
			list.otherFeeList.map((ele,index)=>{
				if(ele.type == 1){ 
					arr1.push(ele)
					state.allList.list4 = arr1
				}
				if(ele.type == 2){
					arr2.push(ele)
					state.allList.list5 = arr2
				}
				if(ele.type == 3){
					arr3.push(ele)
					state.allList.list6 = arr3
				}
				if(ele.type == 4){
					arr4.push(ele)
					state.allList.list7 = arr4
				}
				if(ele.type == 5){
					arr5.push(ele)
					state.allList.list8 = arr5
				}
				if(ele.type == 6){
					arr6.push(ele)
					state.allList.list9 = arr6
				}
			})
			console.log(state)
		} 
	},

	actions: { 
		getClassInitList({commit}) {
			getclassInitList()
			.then(res=>{})
		},
		getClassTypeList({commit}) {
			getclassTypeList()
			.then(res=>{ 
				commit('GET_CLASSTYPELIST',res.messages.subjectList)
			})
		},
		getClassTypeList2({commit}) {
			getclassTypeList2()
			.then(res=>{ 
				console.log(res)
				commit('GET_CLASSTYPELIST2',res.messages)
			})
		},
		addclassTypeListser({commit,dispatch},obj) {
			addclassTypeList(obj)
			.then(res=>{
				setTimeout(()=>{
					dispatch('getClassTypeList2')
				},200)
			})
		},
		addclassTypeListser2({commit,dispatch},obj) {
			addclassTypeList2(obj)
			.then(res=>{
				setTimeout(()=>{
					dispatch('getClassTypeList2')
				},200)
			})
		},
		removeclassTypeListser({commit,dispatch},id) {
			removeclassTypeList(id)
			.then(res=>{
				setTimeout(()=>{
					dispatch('getClassTypeList2')
				},200)
			})
		},
		removeclassTypeListser2({commit,dispatch},id) {
			removeclassTypeList2(id)
			.then(res=>{
				setTimeout(()=>{
					dispatch('getClassTypeList2')
				},500)
			})
		},
		addclassMoneyListser({commit,dispatch},obj) {
			addclassMoneyList(obj)
			.then(res=>{
				console.log(res)
				setTimeout(()=>{
					dispatch('getClassTypeList2')
				},200)
			})
		},
		addclassTypeAllListser({commit,dispatch},data) {
			addclassTypeAllList(data)
			.then(res=>{
				setTimeout(()=>{
					dispatch('getClassTypeList2')
				},200)
			})
		},
		addVipClassTypeser({commit,dispatch},obj) {
			addVipClassType(obj)
			.then(res=>{
				setTimeout(()=>{
					dispatch('getClassTypeList2')
				},200)
			})
		},
		removeVipClassTypeser({commit,dispatch},id) {
			removeVipClassType(id)
			.then(res=>{
				setTimeout(()=>{
					dispatch('getClassTypeList2')
				},200)
			})
		},
		removeclassMoneyListser({commit,dispatch},id) {
			removeclassMoneyList(id)
			.then(res=>{
				setTimeout(()=>{
					dispatch('getClassTypeList2')
				},200)
			})
		}
	}
}

export default commoSettings