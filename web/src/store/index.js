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

Vue.use(Vuex) 
 
export default new Vuex.Store({ 
    modules:{
        CampusCircle,
        home, 
        OldStore,
        SchoolPropaganda,   
        addAccount,
        scho,
        schoolTopic,
    },
    getters
})

