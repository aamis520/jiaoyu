/**
 * 员工档案，添加员工
 *
 */

export default {
    path: '/add',
         component: resolve=>require(["@/page/perArchives/add"],resolve),
    meta: {
        requiresAuth: true
    }
}

