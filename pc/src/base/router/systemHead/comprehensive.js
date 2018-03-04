/**
 * 总校设置-综合设置
 *
 */
export default [{
    path: 'comprehensive',
    redirect: 'comprehensive/index'
}, {
    path: 'comprehensive/index',
    component: resolve => require(["@page/systemHead/comprehensive"], resolve)
},
    {
        path: 'comprehensive/comprehensive-applySet',
        component: resolve => require(["@page/systemHead/comprehensive/comprehensive-applySet"], resolve)
    },
    {
        path: 'comprehensive/comprehensive-tuition',
        component: resolve => require(["@page/systemHead/comprehensive/comprehensive-tuition"], resolve)
    },
    {
        path: 'comprehensive/comprehensive-teacher-remark',
        component: resolve => require(["@page/systemHead/comprehensive/comprehensive-teacher-remark"], resolve)
    },
    {
        path: 'comprehensive/comprehensive-approve',
        component: resolve => require(["@page/systemHead/comprehensive/comprehensive-approve"], resolve)
    },
    {
        path: 'comprehensive/comprehensive-importOrexport',
        component: resolve => require(["@page/systemHead/comprehensive/comprehensive-importOrexport"], resolve)
    },
    {
        path: 'comprehensive/comprehensive-stamp',
        component: resolve => require(["@page/systemHead/comprehensive/comprehensive-stamp"], resolve)
    },
    {
        path: 'comprehensive/comprehensive-integral',
        component: resolve => require(["@page/systemHead/comprehensive/comprehensive-integral"], resolve)
    },
    {
        path: 'comprehensive/comprehensive-performance',
        component: resolve => require(["@page/systemHead/comprehensive/comprehensive-performance"], resolve)
    },
    {
        path: 'comprehensive/comprehensive-data',
        component: resolve => require(["@page/systemHead/comprehensive/comprehensive-data"], resolve)
    },
    {
        path: 'comprehensive/comprehensive-formula',
        component: resolve => require(["@page/systemHead/comprehensive/comprehensive-formula"], resolve)
    }
]
