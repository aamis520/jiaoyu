/**
 * 财务
 * **/
let routers={
	financeReport:{//财务报表
		path: '/financeReport',
		    component: resolve => require(["@page/finance/financeReport/index"], resolve),
		    redirect: '/finance/financeReport',
		    children: [{
				path: '/finance/financeReport',
				component: resolve => require(["@page/finance/financeReport/incomeReport"], resolve)}
			]
	} 	
}
export default routers

