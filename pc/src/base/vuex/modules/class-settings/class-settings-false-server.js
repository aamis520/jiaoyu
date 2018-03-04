import axios from '@axios'
import los from '@commonJS/localStorage'
import contapi from '@commonJS/const' 

//根据总校获取课程链组合
export function getClassSetFalseList() {
	const data = { 
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		chainOrNo: "noChain"
	}
	return axios.post(contapi.course+"v1/course/classCourseChain/selectClassCourseChainByHeadSchoolId", data)
}