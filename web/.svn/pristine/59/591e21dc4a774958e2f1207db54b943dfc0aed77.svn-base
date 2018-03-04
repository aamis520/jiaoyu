// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

//vue 无关系组件传值，用在添加人员，选择角色信息，把json传给父组件
window.eventBus = new Vue()

//import 'element-ui/lib/theme-default/index.css'
//付延兵2017-11-9 修改element-ui css引入路径
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import VueAxios from 'vue-axios'


// 引用API文件
import store from './store/index'
import ls from './api/localStorage'
// 将API方法绑定到全局
Vue.prototype.$ls = ls

//重置element-ui样式
import '../theme/index.css'


let baseURL = process.env.NODE_ENV === 'production' ? 'http://192.168.1.150:8080' : ''
//let baseURL = process.env.NODE_ENV === 'production' ? 'https://zuul-server.wodecom.com' : ''
let axios = Axios.create({baseURL: baseURL})

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})

 
