//校园话题列表
import {
	getSchoolTopicOneLeaveCommentServer,//获取一级评论
	getSchoolTopicTwoLeaveCommentServer,//获取二级评论
	getSchoolTopicThreeLeaveCommentServer,//获取三级评论
	delOneLeaveCommentServer,//删除一级评论
	delTwoLeaveCommentServer,//删除二级评论
	delThreeLeaveCommentServer,//删除三级评论
	findSchoolTopicListServer,//获取话题列表
	delSchoolTopicListServer,//删除话题
	saveSchoolTopicServer,//发表话题
	getSchoolTopicServer,//获取帖子详情
} from './schoolTopicServer'

const schoolTopic = {
	state: {
		oneLevelComment: [], //一级评论数据
		schoolTopicList:[],//话题列表
		getDetialDate:[],//话题详情数据
	},
	mutations: {
		//获取一级评论
		GET_SCHOOLTOPIC_ONE_LEAVE_COMMENT(state, data) {
			data.map((ele, index) => {
				ele.toggleShow = false
				ele.childrenList = []
			})
			state.oneLevelComment = data
			console.log(state.oneLevelComment)
		},
		//获取二级评论
		GET_SCHOOLTOPIC_TWO_LEAVE_COMMENT(state, obj) {
			obj.data.map((ele, index) => {
				ele.toggleShow = false
				ele.childrenList = []
			})
			state.oneLevelComment[obj.index].childrenList = obj.data
			console.log(state.oneLevelComment)
		},
		//获取三级评论
		GET_SCHOOLTOPIC_THREE_LEAVE_COMMENT(state, obj) {
			obj.data.map((ele, index) => {
				ele.toggleShow = false
			})
			state.oneLevelComment[obj.parentIndex].childrenList[obj.index].childrenList = obj.data
			console.log(state.oneLevelComment)
		},
		//获取话题列表
		FIND_SCHOOLTOPIC_LIST(state,data){
			state.schoolTopicList = data
		},
		//获取话题详情数据
		GET_SCHOOLTOPIC_LIST_DETIAL(state,data){
			state.getDetialDate = data
		}
	},
	actions: {
		//获取一级评论数据
		getSchoolTopicOneLeaveComment({
			commit
		}, id) {
			getSchoolTopicOneLeaveCommentServer(id).then(res => {
				let data = res.data.messages.data
				commit('GET_SCHOOLTOPIC_ONE_LEAVE_COMMENT', data)
			})
		},
		//获取二级评论数据
		getSchoolTopicTwoLeaveComment({
			commit
		}, obj) {
			getSchoolTopicTwoLeaveCommentServer(obj.id).then(res => {
				let newObj = {
					data: res.data.messages.data,
					index: obj.index
				}
				commit('GET_SCHOOLTOPIC_TWO_LEAVE_COMMENT', newObj)
			})
		},
		//获取三级评论数据
		getSchoolTopicThreeLeaveComment({
			commit
		}, obj) {
			getSchoolTopicThreeLeaveCommentServer(obj.id).then(res => {
				let newObj = {
					data: res.data.messages.data,
					index: obj.index,
					parentIndex: obj.parentIndex
				}
				commit('GET_SCHOOLTOPIC_THREE_LEAVE_COMMENT', newObj)
			})
		},
		//删除一级评论
		delOneLeaveComment({commit,dispatch},obj){
			delOneLeaveCommentServer(obj.delId).then(res =>{
				dispatch('getSchoolTopicOneLeaveComment',obj.parentId)
			})
		},
		//删除二级评论
		delTwoLeaveComment({commit,dispatch},obj){
			delTwoLeaveCommentServer(obj.delId).then(res =>{
				let obj2 ={
					index:obj.parentIndex,
					id:obj.parentId
				}
				dispatch('getSchoolTopicTwoLeaveComment',obj2)
			})
		},
		//删除三级评论
		delThreeLeaveComment({commit,dispatch},obj){
			delThreeLeaveCommentServer(obj.delId).then(res =>{
				let obj2 ={
					parentIndex:obj.ppIndex,//第一层元素索引
					index:obj.parentIndex,//父级元素索引
					id:obj.parentId//父级元素ID
				}
				dispatch('getSchoolTopicThreeLeaveComment',obj2)
			})
		},
		//获取列表
		findSchoolTopicList({commit}){
			findSchoolTopicListServer().then(res => {
				let data = res.data.messages.data
				commit('FIND_SCHOOLTOPIC_LIST', data)
			})
		},
		//删除话题列表
		delSchoolTopicList({commit,dispatch},id){
			delSchoolTopicListServer(id).then(res =>{
				dispatch('findSchoolTopicList')
			})
		},
		//发表话题
		saveSchoolTopic({commit,dispatch},obj){
			saveSchoolTopicServer(obj).then(res =>{
				dispatch('findSchoolTopicList')
			})
		},
		//获取帖子详情
		getSchoolTopic({commit,dispatch},id){
			getSchoolTopicServer(id).then(res =>{
				let data = res.data.messages.data
				commit("GET_SCHOOLTOPIC_LIST_DETIAL",data)
				dispatch('getSchoolTopicOneLeaveComment',id)
			})
		},
	}
}
export default schoolTopic
















