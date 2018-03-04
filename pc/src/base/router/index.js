import Vue from 'vue'
import Router from 'vue-router'
/**
 * 引入其他路由表
 */
// 总校设置
import systemHead from './systemHead'
// 分校设置
import systemCampus from './system-campus'
// 家校互联
import homeSchint from './home-schint'
// 财务相关
import finance from './finance'
// 员工档案
import perArchives from './perArchives/perArchives'
import perArchivesAdd from './perArchives/perArchives-add'
import perArchivesAlter from './perArchives/perArchives-alter'
import perArchivesModify from './perArchives/perArchives-modify'
// 汇总统计
import Summary from './Summary/Summary'

// 付延兵数字处理测试
import numHandle from './numHandle'
// 测试
import moni from './moni'



/**
 * 首页和登录路由
 */

let routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: resolve => require(["@page/home/index"], resolve),
    meta: {
        requiresAuth: true
    }
}, {
    path: '/sign',
    component: resolve => require(["@page/sign/index"], resolve)
}]

/**
 * 将外部引入的路由表追加到主路由表中
 */

// 总校设置
routes.push(systemHead)
// 分校设置
routes.push(systemCampus)
//家校互联
routes.push(homeSchint)
//财务相关
routes.push(finance.financeReport)
//人事档案
routes.push(perArchives)
routes.push(perArchivesAdd)
routes.push(perArchivesAlter)
routes.push(perArchivesModify)
//汇总统计
routes.push(Summary)
//付延兵数字处理测试
routes.push(numHandle)

routes.push(moni)

// 创建Router实例
let router = new Router({
    mode: 'history',
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         //匹配元路由中的meta字段，如果设置了需要校验用户信息
//         //如果用户本地没有登录状态，跳转到登录页面
//         if (localStorage.USER_INFO) {
//             if (JSON.parse(localStorage.USER_INFO).accessToken) {
//                 next()
//             } else {
//                 next({
//                     path: '/sign',
//                     query: {
//                         redirect: to.fullPath
//                     }
//                 })
//             }
//         } else {
//             next({
//                 path: '/sign',
//                 query: {
//                     redirect: to.fullPath
//                 }
//             })
//         }
//     } else {
//         next() // 确保一定要调用 next()
//     }
// })

Vue.use(Router)

export default router
