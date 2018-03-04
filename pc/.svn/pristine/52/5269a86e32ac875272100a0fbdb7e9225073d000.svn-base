import Vue from 'vue'
import los from '@commonJS/localStorage'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'
let baseURL = process.env.NODE_ENV === 'production' ? 'http://192.168.1.150:8080' : ''
//let baseURL = process.env.NODE_ENV === 'production' ? 'https://zuul-server.wodecom.com' : ''


/**
 * 将response中如果有is_checked的属性，追加一个isChecked属性
 * @param {*} data 
 */
function formatIsChecked(data) {
    // if (typeof data === "object") {
    //     for (let o in data) {
    //         if (typeof data[o] === "object") {
    //             formatIsChecked(data[o])
    //         } else if (o === "is_checked") {
    //             data.isChecked = data[o]
    //         }
    //     }
    // }

    return data
}

let axios = Axios.create({
    baseURL: baseURL,
    /**
     * qs转化请求参数
     * */
    transformRequest: function (data) {
        // if (!los.get("USER_INFO")) {
        //     alert("您还没有登录！请先登录！")
        //     return
        // }
        if (!data) {
            data = {}
        } else {
            for (let i in data) {
                if (typeof (data[i]) == 'object') {
                    data[i] = JSON.stringify(data[i])
                }
            }　　
        }
        data.accessToken = "aaa" || los.get("USER_INFO").accessToken || "aaa"
        data = Qs.stringify(data);
        return data;
    }
})
/**
 *添加请求拦截器
 */
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // return alert("网络繁忙,请您稍后再试");
});
/**
 *直接返回数据层级 
 */
axios.interceptors.response.use(function (response) {
    // 转化isChecked
    response = formatIsChecked(response.data)
    //console.log(response)
    return response;
}, function (error) {
    // return alert("网络繁忙,请您稍后再试");
})

Vue.use(VueAxios, axios)

export default axios
