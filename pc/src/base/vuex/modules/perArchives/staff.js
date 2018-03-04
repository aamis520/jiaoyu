import axios from '@axios'
import contapi from '@commonJS/const'
import los from '@commonJS/localStorage'

//获取index员工右侧的列表
export function menuInit() {
    const data = {
        accessToken:los.get('USER_INFO').accessToken,
        headSchoolId: los.get("USER_INFO").headSchoolId
    }
    return axios.post(contapi.staff+"/v1/dossier/staff/menuInit", data)
}
