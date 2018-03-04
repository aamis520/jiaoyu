import axios from '@axios'
import los from '@commonJS/localStorage'
import contapi from '@commonJS/const'

//根据CODE获取总校课程链
export function getCodeClassSubject(id) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		code: id
	}
	return axios.post(contapi.course + "v1/course/classCourseChain/selectClassCourseChainByCode", data)
}

//保存课程链组合
export function kepCodeClassSubject(obj) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		classCourseChainGroupJsonStr:{
			name: obj.ls,
			class_course_chain_list: obj.arr,
			head_school_id: los.get("USER_INFO").headSchoolId
		} 
	}
	return axios.post(contapi.course + "v1/course/classCourseChainGroup/insertOrUpdateClassCourseChainGroup", data)
}

//根据总校id获取课程链组合
export function getHeaderClassSubject(obj) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		pageSize: obj.pageSize,
		pageNo: obj.pageNo
	}
	return axios.post(contapi.course + "v1/course/classCourseChainGroup/selectClassCourseChainGroupByHeadSchoolId", data)
}

//根据id删除课程链组合
export function removeHeaderClassSubject(id) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken, 
		id: id
	}
	return axios.post(contapi.course + "v1/course/classCourseChainGroup/deleteClassCourseChainGroupById", data)
}