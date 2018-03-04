/**
 * 总校设置-部门设置
 * 
 */
export default [{
        path: 'depart',
        redirect: 'depart/depart'
    }, {
        path: 'depart/depart',
        component: resolve => require(["@page/systemHead/depart/depart"], resolve)
    },
    {
        path: 'depart/role',
        component: resolve => require(["@page/systemHead/depart/role"], resolve)
    },
    {
        path: 'depart/permissions',
        component: resolve => require(["@page/systemHead/depart/permissions"], resolve)
    },
    {
        path: 'depart/permissions-list',
        component: resolve => require(["@page/systemHead/depart/permissions-list"], resolve)
    }
]
