import axios from '@axios'
import los from '@commonJS/localStorage'
import contapi from '@commonJS/const'
import qs from 'qs';
 

//根据总校获取地区
export function loginDiQuname() {
	const data = { 
		userId : JSON.parse(localStorage.USER_INFO).userId
	}
	return axios.post(contapi.sign+"v1/sign/getUserAreaListByUserId", data)
}

export function loginXiaoQuname() {
	const data = { 
		userId : JSON.parse(localStorage.USER_INFO).userId
	}
	return axios.post(contapi.sign+"v1/sign/getUserSchoolListByUserId", data)
}


 