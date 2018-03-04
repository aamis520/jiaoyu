import axios from '@axios'
import los from '@commonJS/localStorage'
import contapi from '@commonJS/const'

//根据总校获取课程链组合
export function getClassSetList() {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		chainOrNo: "chain"
	}
	return axios.post(contapi.course + "v1/course/classCourseChain/selectClassCourseChainByHeadSchoolId", data)
}

//根据总校获取班型
export function getClassSetTypeList(str) {
	if(str == "chain") {
		var data = {
			headSchoolId: los.get("USER_INFO").headSchoolId,
			accessToken: los.get("USER_INFO").accessToken,
			chainOrNo: "chain"
		}
	} else {
		var data = {
			headSchoolId: los.get("USER_INFO").headSchoolId,
			accessToken: los.get("USER_INFO").accessToken,
			chainOrNo: "onChain"
		}
	}
		return axios.post(contapi.course + "v1/course/classType/selectClassTypeByHeadSchoolId", data)
	}

	//根据id获取课程链列表
	export function getClassSetIdTypeList(id, chain) {
		if(chain == "chain") {
			var data = {
				headSchoolId: los.get("USER_INFO").headSchoolId,
				accessToken: los.get("USER_INFO").accessToken,
				subjectId: id,
				chainOrNo: "chain"
			}
		} else {
			var data = {
				headSchoolId: los.get("USER_INFO").headSchoolId,
				accessToken: los.get("USER_INFO").accessToken,
				subjectId: id,
				chainOrNo: "noChain"
			}
		}
		return axios.post(contapi.course + "v1/course/classCourseChain/selectClassCourseChainBySubjectAndHeadSchoolId", data)
	}

	//添加新的课程链 
	export function getClassSetNewList(obj) {
		obj.head_school_id = los.get("USER_INFO").headSchoolId
		const data = {
			headSchoolId: los.get("USER_INFO").headSchoolId,
			accessToken: los.get("USER_INFO").accessToken,
			classCourseChainJsonStr: obj
		}
		return axios.post(contapi.course + "v1/course/classCourseChain/insertOrUpdateClassCourseChain", data)
	}

	//追加新的课程
	export function addClassSetNewList(obj) {
		obj.head_school_id = los.get("USER_INFO").headSchoolId
		const data = {
			headSchoolId: los.get("USER_INFO").headSchoolId,
			accessToken: los.get("USER_INFO").accessToken,
			classCourseListJsonStr: [obj]
		}
		return axios.post(contapi.course + "v1/course/classCourseChain/batchInsertClassCourse", data)
	}