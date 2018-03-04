import axios from '@axios'
import los from '@commonJS/localStorage'
import contapi from '@commonJS/const'

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
	return axios.post(contapi.interconnection+"v1/schoolPublicity/saveSchoolIntro", data)
}

export function getheaderSchoolXinXi() {
	const data = {
		schoolId : los.get("USER_INFO").headSchoolId
	}
	return axios.post(contapi.interconnection+"v1/schoolPublicity/getSchoolIntro", data)
}

/**
* 获取课程介绍
* */
export function getheaderSchoolKeCheng() {
	const data = {
		headSchoolId : los.get("USER_INFO").headSchoolId,
		accessToken : los.get("USER_INFO").accessToken
	}
	return axios.post(contapi.interconnection+"v1/courseIntro/findSubjectCourseList", data)
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
	return axios.post(contapi.interconnection+"v1/courseIntro/saveCourseIntro", data)
}


/**
 * 获取地区
 * */
export function getHuLianDiQu() {
	const data = {
		headSchoolId : los.get("USER_INFO").headSchoolId,
		accessToken : los.get("USER_INFO").accessToken
	}
	return axios.post(contapi.interconnection+'v1/school/findAreaList',data)
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
	return axios.post(contapi.interconnection+'v1/school/findSchoolList', data)
}
