<style lang="less" scoped="scoped">
	@color :#31C17B;
	@font12:12px;
	@font14:14px;
	@font16:16px;
	*{
		user-select: none;
	}
	.salarySystem{
		position: relative;
	}
	.common{
		width: 100%;
		height: 48px;
		position: absolute;
		text-align: center;
	    z-index: 50;
	    top: -50px;
		li{
			line-height: 48px;
			margin:0 20px;
			cursor: pointer;
			font-size: 15px;
			display: inline-block;
		}
	}
	.active{
		color: #31c27c;
	}
	.list_bootom{
		border-radius: 6px;

	}
</style>
<template>
	<div class="salarySystem">
		<ul class="common">
	        <li v-on:click="toggle(tab.index,tab.view)" v-for="tab in tabs" :class="{active:tab.index==active}">
	        	{{tab.type}}
				<span v-if="tab.index==active"></span>
	        </li>
	    </ul>
	    <component :is="currentView" class="list_bootom"></component>
	</div>
</template>

<script>//薪资关联，工资组成，代课费
	import salaryRelation from "./salarySystem/salaryRelation"
	import salaryForm from "./salarySystem/salaryForm"
	import salaryCost from "./salarySystem/salaryCost"
	export default{
		data(){
			return{
				active: 0,//用于显示哪一个
				currentView: "salaryRelation",
				tabs: [
			 		{
			 			index: 0,
				  		type: '薪资关联',
				  		view: "salaryRelation"
			 		},
			 		{
			 			index: 1,
			  			type: '工资组成',
			  			view: "salaryForm"
			 		},
			 		{
			 			index: 2,
			  			type: '代课费',
			  			view: "salaryCost"
			 		}
			 	]
			}
		},
		mounted () {

		},
		components: {
			salaryRelation: salaryRelation,
			salaryForm: salaryForm,
            salaryCost: salaryCost
		},
		methods: {
		 	toggle: function (index, view) {
		 		this.active = index
		 		this.currentView = view
		 	}
		}
	}
</script>

