import axios from '../../api/axiosPost'
 
import los from '../../api/localStorage'
import contapi from '../../common/const'
import qs from 'qs';

//let axios = axios.create({
//	headers: {
//		'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
//	} //把参数转成字符串  a=1&b=2
//
//});
 
//根据总校获取地区
export function loginDiQuname() {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId
	}
	return axios.post(contapi.interconnection+"v1/school/findAreaList?accessToken=aaaa", qs.stringify(data))
}

//根据地区获取分校
export function loginFnXiaoname(id) {
	const data = {
		headSchoolId : los.get("USER_INFO").headSchoolId,
		regionId: id 
	}
	return axios.post(contapi.interconnection+"v1/school/findSchoolList?accessToken=aaaa", qs.stringify(data))
}

//页面初始化请求朋友圈
export function loginInitQuan(id , type) {
	const data = {
		headSchoolId : los.get("USER_INFO").headSchoolId,
		schoolId : id ,
		userType : type
	}
	return axios.post(contapi.interconnection+"v1/moment/switchSchool?accessToken=aaaa", qs.stringify(data))
}

//点击评论获取第一层
export function loginPingLunQuan(id) {
	const data = {
		momentId : id
	}
	return axios.post(contapi.interconnection+"v1/moment/findMomentCommentList?accessToken=aaaa", qs.stringify(data))
}

//评论回复列表
export function loginHuiFuQuan(id) {
	const data = {
		momentCommentId : id
	}
	return axios.post(contapi.interconnection+"v1/moment/findMomentCommentTalkList?accessToken=aaaa", qs.stringify(data))
}

//删除评论里面的回复 
export function removeHuiFuQuan(id) {
	const data = {
		momentCommentTalkId : id
	}
	return axios.post(contapi.interconnection+"v1/moment/deleteMomentCommentTalk?accessToken=aaaa", qs.stringify(data))
}

//删除评论
export function removePingLUNQuan(id) {
	const data = {
		momentCommentId : id
	}
	return axios.post(contapi.interconnection+"v1/moment/deleteMomentComment?accessToken=aaaa", qs.stringify(data))
}

//删除校园圈的分享
export function removeXiaoYuanQuan(id) {
	const data = {
		momentId : id
	}
	return axios.post(contapi.interconnection+"v1/moment/deleteMoment?accessToken=aaaa", qs.stringify(data))
}

