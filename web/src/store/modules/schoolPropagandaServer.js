import axios from '../../api/axiosPost' 
import los from '../../api/localStorage'
import contapi from '../../common/const'
import qs from 'qs';

/**
* 总校介绍
* */
export function headerSchoolXinXi(obj) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId ,
		schoolId : los.get("USER_INFO").headSchoolId, 
		schoolType : "school" ,	 
		schoolShortIntro : 	obj.cont ,
		introImages	: obj.imgList , 
		address	: obj.address ,
		logo : obj.logo	,
		customerServiceTels	: obj.teL ,
		email : obj.email
	}
	return axios.post(contapi.interconnection+"v1/schoolPublicity/saveSchoolIntro?accessToken=aaaa", qs.stringify(data))
}

export function getheaderSchoolXinXi() {
	const data = {
		schoolId : los.get("USER_INFO").headSchoolId
	}
	return axios.post(contapi.interconnection+"v1/schoolPublicity/getSchoolIntro?accessToken=aaaa", qs.stringify(data))
}

/**
* 获取课程介绍
* */
export function getheaderSchoolKeCheng() {
	const data = {
		headSchoolId : los.get("USER_INFO").headSchoolId,
		accessToken : los.get("USER_INFO").accessToken
	}
	return axios.post(contapi.interconnection+"v1/courseIntro/findSubjectCourseList", qs.stringify(data))
}
/**
 * 保存课程介绍
 * */
export function PvheaderSchoolKeCheng(json) { 
	json = JSON.stringify(json)
	const data={
		json : json,
		accessToken : los.get("USER_INFO").accessToken
	}
	return axios.post(contapi.interconnection+"v1/courseIntro/saveCourseIntro", qs.stringify(data))
}


/**
 * 获取地区
 * */
export function getHuLianDiQu() {
	const data = {
		headSchoolId : los.get("USER_INFO").headSchoolId,
		accessToken : los.get("USER_INFO").accessToken
	}
	return axios.post(contapi.interconnection+'v1/school/findAreaList', qs.stringify(data))
}

/**
 * 根据地区获取校区
 * */
export function getHuLianXiaoQu(id) {
	const data = {
		headSchoolId : los.get("USER_INFO").headSchoolId,
		accessToken : los.get("USER_INFO").accessToken,
		areaId : id
	}
	return axios.post(contapi.interconnection+'v1/school/findSchoolList', qs.stringify(data))
}