/**
 * 分校设置
 * 
 */

export default {
	path: '/branCampus',
	component: resolve => require(["@/page/system-campus/branCampus/index"], resolve),
	redirect: '/branCampus/accountView',
	children: [{
			path: '/branCampus/accountView',
			component: resolve => require(["@/page/system-campus/branCampus/accountView/accountView"], resolve)
		},
		{
			path: '/branCampus/classroomSetting',
			component: resolve => require(["@/page/system-campus/branCampus/classroomSetting/classroomSetting"], resolve)
		},
		{
			path: '/moni',
			component: resolve => require(["@/page/moni/index2"], resolve)
		},
		{
			path: '/branCampus/openingNewClass',
			component: resolve => require(["@/page/system-campus/branCampus/openingNewClass/openingNewClass"], resolve)
		} 
	]
}