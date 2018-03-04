/**
 * 汇总统计
 *
 */

export default {
    path: '/Summary',
        component: resolve=>require(["@/page/Summary/Summary"],resolve),
    meta: {
        requiresAuth: true
    }
}
