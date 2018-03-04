/**
 * 员工档案，修改
 *
 */

export default {
    path: '/alter/:data',
        component: resolve=>require(["@/page/perArchives/alter"],resolve),
    meta: {
        requiresAuth: true
    }
}
