import axios from '@axios/index'

import los from '@commonJS/localStorage'
import cont from '@commonJS/const'
import qs from 'qs'

//获取一级评论
export function getSchoolTopicOneLeaveCommentServer(id){
	const data = {
		headSchoolId:los.get("USER_INFO").headSchoolId,
		schoolTopicId:id
	}
	return axios.post(cont.interconnection + "v1/schoolTopic/findSchoolTopicShareList?accessToken=aaaa",qs.stringify(data))
}
//获取二级评论
export function getSchoolTopicTwoLeaveCommentServer(id){
	const data = {
		headSchoolId:los.get("USER_INFO").headSchoolId,
		schoolTopicShareId:id
	}
	return axios.post(cont.interconnection + "v1/schoolTopic/findSchoolTopicShareCommentList?accessToken=aaaa",qs.stringify(data))
}
//获取三级评论
export function getSchoolTopicThreeLeaveCommentServer(id){
	const data = {
		headSchoolId:los.get("USER_INFO").headSchoolId,
		schoolTopicShareCommentId:id
	}
	return axios.post(cont.interconnection + "v1/schoolTopic/findSchoolTopicShareCommentTalkList?accessToken=aaaa",qs.stringify(data))
}
//删除一级评论
export function delOneLeaveCommentServer(id){
	const data = {
		headSchoolId:los.get("USER_INFO").headSchoolId,
		schoolTopicShareId:id
	}
	return axios.post(cont.interconnection + "v1/schoolTopic/deleteSchoolTopicShare?accessToken=aaaa",qs.stringify(data))
}
//删除二级评论
export function delTwoLeaveCommentServer(id){
	const data = {
		headSchoolId:los.get("USER_INFO").headSchoolId,
		schoolTopicShareCommentId:id
	}
	return axios.post(cont.interconnection + "v1/schoolTopic/deleteSchoolTopicShareComment?accessToken=aaaa",qs.stringify(data))
}
//删除三级评论
export function delThreeLeaveCommentServer(id){
	const data = {
		headSchoolId:los.get("USER_INFO").headSchoolId,
		schoolTopicShareCommentTalkId:id
	}
	return axios.post(cont.interconnection + "v1/schoolTopic/deleteSchoolTopicShareCommentTalk?accessToken=aaaa",qs.stringify(data))
}
//获取话题列表
export function findSchoolTopicListServer(){
	const data = {
		headSchoolId:los.get("USER_INFO").headSchoolId,
	}
	return axios.post(cont.interconnection + "v1/schoolTopic/findSchoolTopicList?accessToken=aaaa",qs.stringify(data))
}
//删除话题列表
export function delSchoolTopicListServer(id){
	const data = {
		headSchoolId:los.get("USER_INFO").headSchoolId,
		schoolTopicId:id
	}
	return axios.post(cont.interconnection + "v1/schoolTopic/deleteSchoolTopic?accessToken=aaaa",qs.stringify(data))
}
//添加话题
export function saveSchoolTopicServer(obj){
	const data = {
		headSchoolId:los.get("USER_INFO").headSchoolId,
		title: obj.title,
        content: obj.content,
        coverUrl: obj.coverUrl
	}
	return axios.post(cont.interconnection + "v1/schoolTopic/saveSchoolTopic?accessToken=aaaa",qs.stringify(data))
}
//获取帖子详情
export function getSchoolTopicServer(id){
	const data = {
		headSchoolId:los.get("USER_INFO").headSchoolId,
		schoolTopicId:id
	}
	return axios.post(cont.interconnection + "v1/schoolTopic/getSchoolTopic?accessToken=aaaa",qs.stringify(data))
}