const OldStore = {
	state: {
		count: 1,
		//class-setting
		classConfig: {
			subjectName: ''
		},
		//添加班级状态
		addClassroom: false,
		customclassShow: false,
		//科目链下面的id重新刷新页面
		kemuLianId: 1,
		//分校标题
		fxTitle: '账号查看',
		fxTitleAdd: ['', ''],
		//选中的权限
		checkedMenuList: [],
		classTableTrue: 0,
	},

	mutations: {
		add(state) {
			state.count += 1
		},
		reduce(state) {
			state.count -= 1
		},
		setSubjectName(state, name) {
			state.classConfig.subjectName = name
		},

		classTableTrueClick(state, data) {
			state.classTableTrue = data
		},
		//打开添加班级页面
		addClassroomClick(state) {
			state.addClassroom = true
		},
		//关闭添加班级页面
		closeClassroomClick(state) {
			state.addClassroom = false
		},
		//修改班级座位页面 
		addcustomClassroomClick(state) {
			state.customclassShow = true
		},
		//关闭添加班级页面
		closecustomClassroomClick(state) {
			state.customclassShow = false
		},
		//分校导航
		xgSchoolTitle(state, data) {
			state.fxTitle = data
		},
		//分校添加班级导航
		xgAddSchoolTitle(state, arr) {
			state.fxTitleAdd = arr
		},
		//添加权限
		addMenu(state, menuId) {
			state.checkedMenuList.push(menuId)
		},
		removeMenu(state, menuId) {
			state.checkedMenuList.push(menuId)
		},
		SET_KEMULIID(state, data) {
			state.kemuLianId = data
		}
	},

	actions: {

	}
}

export default OldStore