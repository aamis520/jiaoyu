/**
 * 总校设置-课程设置
 *
 */
export default [{
		path: 'course',
		redirect: 'course/interview'
	},
	{
		path: 'course/common-settings',
		component: resolve => require(["@page/systemHead/course/common-settings"], resolve)
	},
	{
		path: 'course/class-settings',
		component: resolve => require(["@page/systemHead/course/class-settings"], resolve)
	},
	{
		path: 'course/on-one-settings',
		component: resolve => require(["@page/systemHead/course/on-one-settings"], resolve)
	},
	{
		path: 'course/on-n-settings',
		component: resolve => require(["@page/systemHead/course/on-n-settings"], resolve)
	},{
		path: 'course/interview',
		component: resolve => require(["@page/systemHead/course/class-interview"], resolve)
	}
]