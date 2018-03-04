// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@router'
import store from '@vuex'
import '@axios'
import filters from '@commonJS/filters'

//var timeYearMouthDay = Vue.filter('timeYearMouthDay')

import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
//import 'element-ui/lib/theme-chalk/index.css'

// 将API方法绑定到全局
import ls from '@commonJS/localStorage'
Vue.prototype.$ls = ls

//引入moment.js 处理日期格式，使用时 this.$moment().format('YYYY')  当前时间
import moment from 'moment';
Object.defineProperty(Vue.prototype, '$moment', {
    value: moment
});

Vue.config.productionTip = false

Vue.use(ElementUI)
/**
 * 修改element-ui原来样式
 */
import '../theme/index.css'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
