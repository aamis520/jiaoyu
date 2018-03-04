/**
 * 员工档案，分页
 *
 */

export default {
    path: '/perArchives',
        component: resolve=>require(["@/page/perArchives/index"],resolve),
    meta: {
        requiresAuth: true
    },
    redirect: '/perArchives/main',
    children: [
                //分页
                {
                path: '/perArchives/main',
                component: resolve => require(["@/page/perArchives/main"], resolve),
                redirect: '/perArchives/main/right',
                    children: [{
                            path: '/perArchives/main/right',
                            component: resolve => require(["@/page/perArchives/show/right"], resolve),
                        }
                    ]
                },
                //添加
                {
                path:'/perArchives/add',
                component: resolve => require(["@/page/perArchives/add"], resolve),
                redirect:'/perArchives/add/information',
                    children: [
                            {
                            path: '/perArchives/add/information',
                            component: resolve => require(["@/page/perArchives/adds/information"], resolve),
                            }
                        ]
                },
                //展示
                {
                path:'/perArchives/personal',
                component:resolve => require(["@/page/perArchives/personal/personal"], resolve),
                redirect:'/perArchives/personal/basic',
                    children:[
                        {
                            //详细信息
                            path: '/perArchives/personal/basic',
                            component: resolve => require(["@/page/perArchives/personal/basic"], resolve),
                        },
                        {
                            //人事变动
                            path:'/perArchives/personal/change',
                            component: resolve => require(["@/page/perArchives/personal/change"], resolve),
                        },
                        {
                            //工作评定
                            path:'/perArchives/personal/evaluate',
                            component: resolve => require(["@/page/perArchives/personal/evaluate"], resolve),
                        },
                        {
                            //个人考勤
                            path:'/perArchives/personal/attendance',
                            component: resolve => require(["@/page/perArchives/personal/attendance"], resolve),
                        }
                    ]
                }
    ]
}

