import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import OldStore from './modules/OldStore' //之前的零碎属性
import CampusCircle from './modules/CampusCircle'//校园圈
import home from './modules/home' //首页
import SchoolPropaganda from './modules/SchoolPropaganda'
import addAccount from './modules/addAccount'//添加账号
import scho from './modules/selSchool'//选取校区
import schoolTopic from './modules/schoolTopic'//互联话题列表

import perData from './modules/perArchives/perArchives'//员工档案

import commoSettings from './modules/class-settings/common-setting'//课程设置-常用项设置
import onOne from './modules/class-settings/on-one-settings'//课程设置-一对一设置
import onN from './modules/class-settings/on-n-settings'//课程设置-一对N设置
import classSettings from './modules/class-settings/class-settings'//课程设置-课程链设置
import classSettingsfalse from './modules/class-settings/class-settings-false'//课程设置-非课程链设置
import classSettingsgroup from './modules/class-settings/class-settings-group'//课程设置-非课程链设置  
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        CampusCircle,
        home,
        OldStore,
        SchoolPropaganda,
        addAccount ,
        scho,
        schoolTopic,
        perData,
        commoSettings,
        onOne,
        onN,
        classSettings,
        classSettingsfalse,
        classSettingsgroup
    },
    getters
})
