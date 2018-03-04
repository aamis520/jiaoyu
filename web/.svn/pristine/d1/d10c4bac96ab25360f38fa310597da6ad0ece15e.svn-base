import axios from '../../api/axiosPost'

import los from '../../api/localStorage'
import contapi from '../../common/const'
import qs from 'qs';

 

//根据总校获取地区
export function loginDiQuname() {
	const data = { 
		userId : JSON.parse(localStorage.USER_INFO).userId
	}
	return axios.post(contapi.sign+"v1/sign/getUserAreaListByUserId?accessToken=aaaa", qs.stringify(data))
}

export function loginXiaoQuname() {
	const data = { 
		userId : JSON.parse(localStorage.USER_INFO).userId
	}
	return axios.post(contapi.sign+"v1/sign/getUserSchoolListByUserId?accessToken=aaaa", qs.stringify(data))
}


 