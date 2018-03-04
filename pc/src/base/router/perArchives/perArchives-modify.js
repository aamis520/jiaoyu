/**
 * 员工档案，员工详情
 *
 */

export default {
    path: '/modify/:id',
        component: resolve=>require(["@/page/perArchives/modify"],resolve),
    meta: {
        requiresAuth: true
    }
}

