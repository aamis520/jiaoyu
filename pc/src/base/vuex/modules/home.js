//小银星首页
import {
	loginDiQuname,
	loginXiaoQuname
} from './homeServer'
 
const home = {
	state: { 
		shcoolClass : 'ZB' ,
		schoolName : '总校',
		schoolShow : false,
		areaList:[],
		schoolList:[]
	},

	mutations: { 
		SET_SHCOOLCLASS(state , data){
			state.shcoolClass = data
		},
		
		SET_SHCOOLNAME(state , data){
			state.schoolName = data
		},
		
		SET_SHCOOLSHWOT(state){
			state.schoolShow = true
		},
		
		SET_SHCOOLSHWOF(state){
			state.schoolShow = false
		},
		
		GET_AREALIST(state , data){
			state.areaList = data
		},
		
		GET_SCHOOLLIST(state , data){
			state.schoolList = data
		}
	},

	actions: {
		//return new Promise((resoleve , reject)
		loginAreaName({commit}){
			loginDiQuname()
			.then(res=>{
				commit('GET_AREALIST' , res.messages) 
			})
		},
		
		loginSchoolName({commit}){
			loginXiaoQuname()
			.then(res=>{
				commit('GET_SCHOOLLIST' , res.messages) 
			})
		},
		
		
 
	}
}

export default home