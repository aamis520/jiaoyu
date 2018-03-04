import axios from '@axios'
import los from '@commonJS/localStorage'
import contapi from '@commonJS/const'

/***
 * 一对一列表
 */
export function getOnOneLeiXingClass() {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
	}
	return axios.post(contapi.course + "v1/course/vipSetting/getSubjectList", data)
}
/***
 * 班级类型列表
 */
export function getOnOneClass(id) { 
		const data = {
			vipType: "oneToOne",
			headSchoolId: los.get("USER_INFO").headSchoolId,
			accessToken: los.get("USER_INFO").accessToken,
			subjectId: id
		} 
	return axios.post(contapi.course + "v1/course/vipSetting/getVipCourseList", data)
}
export function getOnNClass(id) { 
		const data = {
			vipType: "oneToN",
			headSchoolId: los.get("USER_INFO").headSchoolId,
			accessToken: los.get("USER_INFO").accessToken,
			subjectId: id
		} 
	return axios.post(contapi.course + "v1/course/vipSetting/getVipCourseList", data)
}
/***
 * 获取年级，年龄列表
 */
export function getOnOneClassAge() {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken
	}
	return axios.post(contapi.course + "v1/course/vipSetting/getStudentGradeAgeList", data)
}

/***
 * 保存一个科目
 */
export function baocunOnOneClass(obj) {
	const data = obj
	data.head_school_id = los.get("USER_INFO").headSchoolId,
		data.accessToken = los.get("USER_INFO").accessToken,
		data.create_user_id = los.get("USER_INFO").userId
	return axios.post(contapi.course + "v1/course/vipSetting/saveVipCourse", data)
}

/***
 *获取类型id列表 
 */
export function geiOnOneLeiListId() {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken
	}
	return axios.post(contapi.course + "v1/course/vipSetting/getVipTypeList", data)
}

/***
 * 删除一对的课程
 */
export function removeOnOneClass(id) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		vipCourseId: id
	}
	return axios.post(contapi.course + "v1/course/vipSetting/delVipCourse", data)
}