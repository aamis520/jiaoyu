import {
    menuInit//左侧分页
} from './staff'

//员工档案路由传参
const perData = {
	state:{
        //左侧ul组件传参view，获取到的全部员工，获取到的员工分页中的具体员工
        ulsData:[],
        //将分页的信息存到vueX
        yeData:{},
        //获取index员工右侧的列表
        fenData:[],
        //员工个人ID号
        basicData:"",
        // 将获取到的员工数据,用于展示的信息储存到vuex中
        detailedData:"",
        // 员工档案大列表name，//部门 · 人事部 · 8人
        bigName:"",
        smallName:"",
        //图片路径
        photoData:""
	},
	mutations:{
		SET_ULS_ID(state,data){
			state.ulsData = data;
		},
        GET_FENYE(state,data){
            state.fenData = data;
        },
        GET_FEN(state,data){
            state.yeData = data;
        },
        GET_BASIC(state,data){
            state.basicData = data;
        },
        GET_DETAILED(state,data){
            state.detailedData = data;
        },
        GET_BIGNAME(state,data){
            state.bigName = data;
        },
        GET_SMALLNAME(state,data){
            state.smallName = data;
        },
        GET_PHOTO(state,data){
            state.photoData = data;
        }

	},

    actions:{
        getfenye({commit}) {
            menuInit()
                .then(res => {
                    let data = res.messages.data
                    commit('GET_FENYE', data)
                })
        },
    }
}
export default perData
