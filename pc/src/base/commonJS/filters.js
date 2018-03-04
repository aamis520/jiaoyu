import Vue from 'vue'
//过滤器
//作用:timeYearMouthDay 将秒转化为年月日
//使用{{subEle.start_time | timeYearMouthDay}}
//1508515200000 | timeYearMouthDay => 2017-10-21
//v-model不支持过滤器可用computed计算属性处理返回的值
Vue.filter('timeYearMouthDay',function (value) {
	if(!value) return ''
	let oDate = new Date(value);
	let y = oDate.getFullYear();
	let m = '0' + (oDate.getMonth()+1);
	let d = '0' + oDate.getDate();
	return y + '-' + m.slice(-2) + '-' + d.slice(-2)
})
