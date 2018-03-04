import axios from '@axios'
import los from '@commonJS/localStorage'
import contapi from '@commonJS/const'

/***
 * 获取初始化列表
 */
export function getclassInitList() {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
	}
	return axios.post(contapi.course + "v1/course/commonitem/initCourseCommonItem", data)
}

/***
 * 查询科目
 */
export function getclassTypeList() {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
	}
	return axios.post(contapi.course + "v1/course/commonitem/selectCommonSubject", data)
}

/***
 * 新增科目
 */
export function addclassTypeList(cont) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		subjectJsonStr: {
			head_school_id: los.get("USER_INFO").headSchoolId,
			name: cont
		}
	}
	return axios.post(contapi.course + "v1/course/commonitem/insertSubject", data)
}
/***
 * 批量新增科目
 */
export function addclassTypeAllList(list) {
	list.map((ele,index)=>{
		ele.head_school_id = los.get("USER_INFO").headSchoolId
	})
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		subjectListJsonStr: list
	}
	return axios.post(contapi.course + "v1/course/commonitem/batchInsertSubject", data)
}
/***
 * 删除科目
 */
export function removeclassTypeList(id) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		id: id
	}
	return axios.post(contapi.course + "v1/course/commonitem/deleteSubject", data)
}
/***
 * 查询班型
 */
export function getclassTypeList2() {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
	}
	return axios.post(contapi.course + "v1/course/commonitem/initCourseCommonItem", data)
}
/***
 * 新增班型
 */
export function addclassTypeList2(cont) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		classTypeJsonStr: {
			head_school_id: los.get("USER_INFO").headSchoolId,
			name: cont
		}
	}
	return axios.post(contapi.course + "v1/course/classType/insertOrUpdateClassType", data)
}
/***
 * 删除班型
 */
export function removeclassTypeList2(id) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		id: id
	}
	return axios.post(contapi.course + "v1/course/classType/deleteClassTypeById", data)
}

/***
 * 新增费用
 */
export function addclassMoneyList(obj) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		otherFeeJsonStr: {
			head_school_id: los.get("USER_INFO").headSchoolId,
			type: obj.type,
			name: obj.name,
			money: obj.money, 
		}
	}
	return axios.post(contapi.course + "v1/course/commonitem/insertOtherFee", data)
}
/***
 * 删除费用
 */
export function removeclassMoneyList(id) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken, 
		id:id
	}
	return axios.post(contapi.course + "v1/course/commonitem/deleteOtherFee", data)
}

/***
 * 新增vip
 */
export function addVipClassType(obj) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken,
		vip1vnClassTypeJsonStr: {
			head_school_id: los.get("USER_INFO").headSchoolId, 
			name: obj.name,
			class_capacity: obj.num, 
		}
	}
	return axios.post(contapi.course + "v1/course/vip1vnClassType/insertOrUpdateVip1vnClassType", data)
}

/***
 * 删除vip
 */
export function removeVipClassType(id) {
	const data = {
		headSchoolId: los.get("USER_INFO").headSchoolId,
		accessToken: los.get("USER_INFO").accessToken, 
		id: id
	}
	return axios.post(contapi.course + "v1/course/vip1vnClassType/deleteVip1vnClassTypeById", data)
}