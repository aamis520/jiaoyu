/**
 * 总校设置-主路由表
 * 
 * 
 */

// 校区设置
import base from './base'
// 部门设置
import depart from './depart'
// 账户设置
import account from './account'
// 班级设置
import classes from './classes'
// 综合设置
import comprehensive from './comprehensive'
// 课程设置
import course from './course'
// 财务设置
import finance from './finance'
// 优惠设置
import discount from './discount'
// 物品设置
import goods from './goods'
// 1对1设置
import vip from './vip'

let systemHead = {
    path: '/systemHead',
    redirect: '/systemHead/base',
    component: resolve => require(["@page/systemHead"], resolve),
    meta: {
        requiresAuth: true
    },
    children: [
    
    ]
}

function addRouter(router) {
    if (!router) {
        console.error("src/base/router/systemHead.js addRouter 错误！值不能为：" + router)
        return
    }
    if (typeof router === "object" && router instanceof Array) {
        systemHead.children = systemHead.children.concat(router)
    } else {
        systemHead.children.push(router)
    }
}

// 校区设置
addRouter(base)
// 部门设置
addRouter(depart)
// 账户设置
addRouter(account)
// 班级设置
addRouter(classes)
// 综合设置
addRouter(comprehensive)
// 课程设置
addRouter(course)
// 财务设置
addRouter(finance)
// 优惠设置
addRouter(discount)
// 物品设置
addRouter(goods)
// 1对1设置
addRouter(vip)

export default systemHead
