import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
//const _import = require('./_import_' + process.env.NODE_ENV)
/****************************************/
Vue.use(Router)

let router = new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    },
        {
            path: '/home',
            component: resolve=>require(["@/home/home"],resolve),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/sign',
            component: resolve=>require(["../sign/sign.vue"],resolve)
        },

        //总校设置===================================================
        {
            path: '/total',
            component: resolve=>require(["@/page/index"],resolve),
            redirect: 'campus',
            meta: {
                requiresAuth: true
            },
            children: [{
                path: '/campus',
                component: resolve=>require(["@/page/campus/campus"],resolve),
                redirect: '/campus/schoolType',
                children: [{
                    path: '/campus/schoolType',
                    component: resolve=>require(["@/page/campus/schoolType"],resolve)
                }, {
                    path: '/campus/campusSettings',
                    component: resolve=>require(["@/page/campus/campusSettings"],resolve)
                }, {
                    path: '/campus/frameSetting',
                    component: resolve=>require(["@/page/campus/frameSetting"],resolve)
                }, {
                    path: '/campus/schoolType',
                    component: resolve=>require(["@/page/campus/schoolType"],resolve)
                },{
                    path: '/campus/resultsView',
                    component: resolve=>require(["@/page/campus/resultsView"],resolve)
                }]
            },
                {
                    path: '/part',
                    component: resolve=>require(["@/page/part/part"],resolve),
                    redirect: '/part/departmentSettings',
                    children: [{
                        path: '/part/departmentSettings',
                        component: resolve=>require(["@/page/part/departmentSettings"],resolve),
                    }, {
                        path: '/part/roleSetting',
                        component: resolve=>require(["@/page/part/roleSetting"],resolve),
                    }, {
                        path: '/part/permissions',
                        component: resolve=>require(["@/page/part/permissions"],resolve),
                        children: [{
                            path: '/part/permissions/consultation',
                            component: resolve=>require(["@/page/part/consultationa"],resolve),
                        }]
                    }, {
                        path: '/part/permissions-list',
                        component: resolve=>require(["@/page/part/permissions-list"],resolve),
                    }]
                },
                {
                    path: '/accountNumber',
                    component: resolve=>require(["@/page/accountNumber/accountNumber"],resolve),
                    redirect: '/accountNumber/creatAccount',
                    meta: {
                        requiresAuth: true
                    },
                    children: [{
                        path: '/accountNumber/creatAccount',
                        component: resolve=>require(["@/page/accountNumber/creatAccount"],resolve),
                        redirect: '/accountNumber/creatAccount/headquarters',
                        children: [{
                            path: '/accountNumber/creatAccount/headquarters',
                            component: resolve=>require(["@/page/accountNumber/DefiningRoles/headquarters"],resolve)
                        },{
                            path: '/accountNumber/creatAccount/area',
                            component: resolve=>require(["@/page/accountNumber/DefiningRoles/area"],resolve)
                        }, {
                            path: '/accountNumber/creatAccount/scampus',
                            component: resolve=>require(["@/page/accountNumber/DefiningRoles/scampus"],resolve)
                        }]
                    }, {
                        path: '/accountNumber/viewAccount',
                        component: resolve=>require(["@/page/accountNumber/viewAccount"],resolve)
                    }, {
                        path: '/accountNumber/specialAccount',
                        component: resolve=>require(["@/page/accountNumber/specialAccount"],resolve)
                    }, {
                        path: '/accountNumber/specialPermission',
                        component: resolve=>require(["@/page/accountNumber/specialPermission"],resolve)
                    }]
                },
                {
                    path: '/vip',
                    component: resolve=>require(["@/page/vip/vip"],resolve),
                    redirect: '/vip/oneSetting',
                    children: [{
                        path: '/vip/oneSetting',
                        component: resolve=>require(["@/page/vip/oneSetting"],resolve)
                    }, {
                        path: '/vip/nSetting',
                        component: resolve=>require(["@/page/vip/nSetting"],resolve)
                    }]
                },
                {
                    path: '/goods',
                    component: resolve=>require(["@/page/goods/goods"],resolve),
                    redirect: '/goods/basicSetting',
                    children: [{
                        path: '/goods/basicSetting',
                        component: resolve=>require(["@/page/goods/basicSetting"],resolve)
                    }, {
                        path: '/goods/goodsManage',
                        component: resolve=>require(["@/page/goods/goodsManage"],resolve)
                    }]
                },
                {
                    path: '/finance',
                    component: resolve=>require(["@/page/finance/finance"],resolve),
                    redirect: '/finance/financialSetup',
                    children: [{
                        path: '/finance/financialSetup',
                        component: resolve=>require(["@/page/finance/financialSetup"],resolve)
                    }, {
                        path: '/finance/salarySystem',
                        component: resolve=>require(["@/page/finance/salarySystem"],resolve),
                        redirect: '/finance/salarySystem/relation',
                        children: [{
                            path: '/finance/salarySystem/relation',
                            component: resolve=>require(["@/page/finance/salarySystem/relation"],resolve)
                        },
                            {
                                path: '/finance/salarySystem/form',
                                component: resolve=>require(["@/page/finance/salarySystem/form"],resolve)
                            },
                            {
                                path: '/finance/salarySystem/cost',
                                component: resolve=>require(["@/page/finance/salarySystem/cost"],resolve)
                            }
                        ]
                    }, {
                        path: '/finance/financialExport',
                        component: resolve=>require(["@/page/finance/financialExport"],resolve),
                        redirect: '/finance/financialExport/students',
                        children: [{
                            path: '/finance/financialExport/students',
                            component: resolve=>require(["@/page/finance/template/students"],resolve)
                        },
                            {
                                path: '/finance/financialExport/teacher',
                                component: resolve=>require(["@/page/finance/template/teacher"],resolve)
                            },
                            {
                                path: '/finance/financialExport/administration',
                                component: resolve=>require(["@/page/finance/template/administration"],resolve)
                            },
                            {
                                path: '/finance/financialExport/goods',
                                component: resolve=>require(["@/page/finance/template/goods"],resolve)
                            }
                        ]
                    }]
                },
                //课程
                {
                    path: '/curriculum',
                    component: resolve=>require(["@/page/curriculum/curriculum"],resolve),
                    redirect: '/curriculum/classSetting/termIntroduction',
                    children: [{
                        path: '/curriculum/classSetting',
                        component: resolve=>require(["@/page/curriculum/classSetting"],resolve),
                        redirect: '/curriculum/classSetting/termIntroduction',
                        children: [
                            {path: '/curriculum/classSetting/termIntroduction',
                            component: resolve=>require(["@/page/curriculum/classSetting-children/termIntroduction"],resolve)},
                            {path: '/curriculum/classSetting/coursesSubject', component: resolve=>require(["@/page/curriculum/classSetting-children/coursesSubject"],resolve)},
                            {path: '/curriculum/classSetting/coursesSubject/oneTooneyi', component: resolve=>require(["@/page/curriculum/classSetting-children/oneTooneyi"],resolve)},
                            {
                                path: '/curriculum/classSetting/coursesSubject/oneTooneyi/oneTooneer',
                                component: resolve=>require(["@/page/curriculum/classSetting-children/oneTooneer"],resolve)
                            },
                            {
                                path: '/curriculum/classSetting/nocoursesSubject/nocoursesSubjectyi',
                                component: resolve=>require(["@/page/curriculum/classSetting-children/nocoursesSubjectyi"],resolve)
                            },
                            {path: '/curriculum/classSetting/nocoursesSubject', component: resolve=>require(["@/page/curriculum/classSetting-children/nocoursesSubject"],resolve)},
                            {path: '/curriculum/classSetting/coursesGroup', component: resolve=>require(["@/page/curriculum/classSetting-children/coursesGroup"],resolve)}
                        ]
                    },
                        {path: '/curriculum/onetoOneset', component: resolve=>require(["@/page/curriculum/onetoOneset"],resolve)},
                        {path: '/curriculum/onetoOneset/onetoOnesetyi', component: resolve=>require(["@/page/curriculum/classSetting-children/onetoOnesetyi"],resolve)},
                        {path: '/curriculum/onetoNset', component: resolve=>require(["@/page/curriculum/onetoNset"],resolve)},
                        {path: '/curriculum/onetoNset/onetoNsetyi', component: resolve=>require(["@/page/curriculum/classSetting-children/onetoNsetyi"],resolve)},
                        {path: '/curriculum/hostingSettings', component: resolve=>require(["@/page/curriculum/hostingSettings"],resolve)},
                        {path: '/curriculum/curriculumSystem', component: resolve=>require(["@/page/curriculum/curriculumSystem"],resolve)},
                        {path: '/curriculum/a', component: resolve=>require(["@/page/curriculum/classSetting-children/a"],resolve)}
                    ]
                },
                //班级
                {
                    path: '/class',
                    component: resolve=>require(["@/page/class/class"],resolve),
                    redirect: '/class/curriculumChain',
                    children: [{
                        path: '/class/curriculumChain',
                        component: resolve=>require(["@/page/class/curriculumChain"],resolve)
                    },
                        {
                            path: '/class/curriculumChain/addNew',
                            component: resolve=>require(["@/page/class/addNew"],resolve)
                        },
                        {
                            path: '/class/curriculumChain/kelian',
                            component: resolve=>require(["@/page/class/kelian"],resolve)
                        },
                        {
                            path: '/class/nonCurriculumchain',
                            component: resolve=>require(["@/page/class/nonCurriculumchain"],resolve)
                        }
                    ]
                },

                //VIP
                {
                    path: '/vip',
                    component: resolve=>require(["@/page/vip/vip"],resolve),
                    redirect: '/vip/oneSetting',
                    children: [{
                        path: '/vip/oneSetting',
                        component: resolve=>require(["@/page/vip/oneSetting"],resolve)
                    }, {
                        path: '/vip/nSetting',
                        component: resolve=>require(["@/page/vip/nSetting"],resolve)
                    }]
                },
                //优惠
                {
                    path: '/discount',
                    component: resolve=>require(["@/page/discount/discount"],resolve),
                    redirect: '/discount/classConcession',
                    children: [{
                        path: '/discount/classConcession',
                        component: resolve=>require(["@/page/discount/classConcession"],resolve)
                    },


                        {
                            path: '/discount/vipConcession',
                            component: resolve=>require(["@/page/discount/vipConcession"],resolve)
                        }, {
                            path: '/discount/specialConcession',
                            component: resolve=>require(["@/page/discount/specialConcession"],resolve)
                        }, {
                            path: '/discount/comboConcession',
                            component: resolve=>require(["@/page/discount/comboConcession"],resolve)
                        },
                        {
                            path: '/discount/issueCoupons/chOose',
                            component: resolve=>require(["@/page/discount/classConcession/chOose"],resolve)
                        },
                        {
                            path: '/discount/issueCoupons',
                            component: resolve=>require(["@/page/discount/issueCoupons"],resolve)
                        }
                    ]
                },
                //物品
                {
                    path: '/goods',
                    component: resolve=>require(["@/page/goods/goods"],resolve),
                    redirect: '/goods/basicSetting',
                    children: [{
                        path: '/goods/basicSetting',
                        component: resolve=>require(["@/page/goods/basicSetting"],resolve)
                    }, {
                        path: '/goods/goodsManage',
                        component: resolve=>require(["@/page/goods/goodsManage"],resolve)
                    }]
                }

            ]
        },
        //分校设置===================================================
        {
            path: '/branCampus',
            component: resolve=>require(["@/views/branCampus/index"],resolve),
            redirect: '/branCampus/accountView',
            children: [{
                path: '/branCampus/accountView',
                component: resolve=>require(["@/views/branCampus/accountView/accountView"],resolve)
            },
                {
                    path: '/branCampus/classroomSetting',
                    component: resolve=>require(["@/views/branCampus/classroomSetting/classroomSetting"],resolve)
                },
                {
                    path: '/branCampus/checkClassChain',
                    component: resolve=>require(["@/views/branCampus/checkClassChain/checkClassChain"],resolve)
                },
                {
                    path: '/branCampus/openingNewClass',
                    component: resolve=>require(["@/views/branCampus/openingNewClass/openingNewClass"],resolve)
                },
                {
                    path: '/branCampus/privilegeGroup',
                    component: resolve=>require(["@/views/branCampus/privilegeGroup/privilegeGroup"],resolve)
                }
            ]
        },
        {
            path: '/homeSchint',
            component: resolve=>require(["@/views/homeSchint/index"],resolve),
            redirect: '/homeSchint/campusTopic',
            children: [{
                path: '/homeSchint/schoolPropaganda',
                component: resolve=>require(["@/views/homeSchint/schoolPropaganda/schoolPropaganda"],resolve)
            },
                {
                    path: '/homeSchint/InformationNotification',
                    component: resolve=>require(["@/views/homeSchint/InformationNotification"],resolve)
                },
                {
                    path: '/homeSchint/eventCompetition',
                    component: resolve=>require(["@/views/homeSchint/eventCompetition"],resolve)
                },
                {
                    path: '/homeSchint/campusTopic',
                    component: resolve=>require(["@/views/homeSchint/campusTopic/campusTopic"],resolve)
                },
                {
                    path: '/homeSchint/campusCircle',
                    component: resolve=>require(["@/views/homeSchint/CampusCircle/CampusCircle"],resolve)
                },
                {
                    path: '/homeSchint/carouselFigure',
                    component: resolve=>require(["@/views/homeSchint/carouselFigure"],resolve)
                }
            ]
        },


        //功能菜单===================================================
        //班级档案
        {
            path: '/classA',
            component: resolve=>require(["@/views/archives/index"],resolve),
            //默认打开语文
            redirect: 'chinese',
            children: [
                //语文
                {
                    path: '/chinese',
                    component: resolve=>require(["@/views/archives/chinese"],resolve),
                    redirect:'/chinese/whole',
                    children:[
                        {
                            path: '/chinese/whole',
                            component: resolve=>require(["@/views/archives/chinese/whole"],resolve)
                        }
                    ]
                },
                //数学
                {
                    path: '/math',
                    component: resolve=>require(["@/views/archives/math"],resolve),
                    // redirect:'/math/chinese',
                    // children:[
                    //     {
                    //         path: '/math/chinese',
                    //         component: resolve=>require(["@/views/archives/math/chinese"],resolve)
                    //     },
                    // ]
                },
                //英语
                {
                    path: '/english',
                    component: resolve=>require(["@/views/archives/english"],resolve),
                    // redirect:'/english/chinese',
                    // children:[
                    //     {
                    //         path: '/english/chinese',
                    //         component: resolve=>require(["@/views/archives/english/chinese"],resolve)
                    //     },
                    // ]
                },
                //地理
                {
                    path: '/geography',
                    component: resolve=>require(["@/views/archives/geography"],resolve),
                    // redirect:'/geography/chinese',
                    // children:[
                    //     {
                    //         path: '/geography/chinese',
                    //         component: resolve=>require(["@/views/archives/geography/chinese"],resolve)
                    //     },
                    // ]
                },
                //物理
                {
                    path: '/physics',
                    component: resolve=>require(["@/views/archives/physics"],resolve),
                    // redirect:'/physics/chinese',
                    // children:[
                    //     {
                    //         path: '/physics/chinese',
                    //         component: resolve=>require(["@/views/archives/physics/chinese"],resolve)
                    //     }
                    // ]
                }
            ]
        },
        //         员工新建修改
        {
            path: '/modify/:id',
            component: resolve=>require(["@/views/perArchives/modify"],resolve)
        },
        {
            path: '/add',
            component: resolve=>require(["@/views/perArchives/add"],resolve)
        },
        {
            path: '/alter/:data',
            component: resolve=>require(["@/views/perArchives/alter"],resolve)
        },

        {
            path: '/Summary',
            component: resolve=>require(["@/page/Summary/Summary"],resolve)
        },
        {
            path: '/perArchives',
            component: resolve=>require(["@/views/perArchives/index"],resolve)
        },
        {
            path: '/admin',
            component: resolve=>require(["@/views/admin/index"],resolve)
        },
        {
            path: '/reminder',
            component: resolve=>require(["@/views/reminder/index"],resolve)
        },
        {
            path: '/interviewList',
            component: resolve=>require(["@/views/interviewList/index"],resolve)
        }, {
            path: '/openClassAdm',
            component: resolve=>require(["@/views/openClassAdm/index"],resolve)
        }, {
            path: '/conRegistration',
            component: resolve=>require(["@/views/conRegistration/index"],resolve)
        }, {
            path: '/pendingOrder',
            component: resolve=>require(["@/views/pendingOrder/index"],resolve)
        }, {
            path: '/rowCurriculum',
            component: resolve=>require(["@/views/rowCurriculum/index"],resolve)
        }, {
            path: '/classAdm',
            component: resolve=>require(["@/views/classAdm/index"],resolve)
        }, {
            path: '/classStu',
            component: resolve=>require(["@/views/classStu/index"],resolve)
        }, {
            path: '/teaArchives',
            component: resolve=>require(["@/views/teaArchives/index"],resolve)
        }, {
            path: '/financialRev',
            component: resolve=>require(["@/views/financialRev/index"],resolve)
        }, {
            path: '/financeDis',
            component: resolve=>require(["@/views/financeDis/index"],resolve)
        }, {
            path: '/financeReport',
            component: resolve=>require(["@/views/financeReport/index"],resolve),
            redirect: '/finance/incomeReport',
            children: [{
                path: '/finance/incomeReport',
                component: resolve=>require(["@/views/financeReport/incomeReport"],resolve)
            },
                {
                    path: '/finance/expenditureReport',
                    component: resolve=>require(["@/views/financeReport/expenditureReport"],resolve)
                }
            ]
        }, {
            path: '/integralAdm',
            component: resolve=>require(["@/views/integralAdm/index"],resolve)
        }, {
            path: '/referral',
            component: resolve=>require(["@/views/referral/index"],resolve)
        }, {
            path: '/prePolicies',
            component: resolve=>require(["@/views/prePolicies/index"],resolve)
        }, {
            path: '/homeSchint',
            component: resolve=>require(["@/views/homeSchint/index"],resolve)
        }, {
            path: '/homeSchint/InformationNotification',
            component: resolve=>require(["@/views/homeSchint/InformationNotification"],resolve)
        }, {
            path: '/goodsAdm',
            component: resolve=>require(["@/views/goodsAdm/index"],resolve)
        }, {
            path: '/teaRescenter',
            component: resolve=>require(["@/views/teaRescenter/index"],resolve)
        }, {
            path: '/opeLog',
            component: resolve=>require(["@/views/opeLog/index"],resolve)
        }, {
            path: '/todaysPer',
            component: resolve=>require(["@/views/todaysPer/index"],resolve)
        }, {
            path: '/myClass',
            component: resolve=>require(["@/views/myClass/index"],resolve)
        }, {
            path: '/about',
            component: resolve=>require(["@/views/about/index"],resolve)
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //匹配元路由中的meta字段，如果设置了需要校验用户信息
        //如果用户本地没有登录状态，跳转到登录页面
        if (localStorage.USER_INFO) {
            if (JSON.parse(localStorage.USER_INFO).accessToken) {
                next()
            } else {
                next({
                    path: '/sign',
                    query: {redirect: to.fullPath}
                })
            }
        } else {
            next({
                path: '/sign',
                query: {redirect: to.fullPath}
            })
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

export default router
