<template> 
	<form>
	    <ul >
	        <li v-on:click="toggle(tab.index,tab.view)" v-for="tab in tabs" :class="{active:tab.index==active}">
	        	{{tab.type}}
				<span v-if="tab.index==active"></span>
	        </li>
	    </ul>
		<component :is="currentView" class="list_bootom"></component>
	</form>
</template>

<script>
	import generaLintroduction from "./generaLintroduction"
	import teacheRintroduction from "./teacheRintroduction"
	import studentStyle from "./studentStyle"
	import courseIntroduction from './courseIntroduction'
	export default {
		components: {
			generaLintroduction: generaLintroduction,
			teacheRintroduction: teacheRintroduction,
            studentStyle: studentStyle,
            courseIntroduction: courseIntroduction
		},
		data () {
			return{
				active: 0,
			 	currentView: "generaLintroduction",
			 	tabs: [
			 		{
			 			index: 0,
				  		type: '总校介绍',
				  		view: "generaLintroduction"
			 		},
			 		{
			 			index: 1,
			  			type: '分校介绍',
			  			view: ""
			 		},
			 		{
			 			index: 2,
			  			type: '教师介绍',
			  			view: "teacheRintroduction"
			 		},
			 		{
			 			index: 3,
			  			type: '学生风采',
			  			view: "studentStyle"
			 		},
			 		{
			 			index: 4,
			  			type: '课程介绍',
			  			view: "courseIntroduction"
			 		},
			 	]
			}
		},
		mounted () {

		},
		methods: {
		 	toggle: function (index, view) {
		 		this.active = index
		 		this.currentView = view
		 	}
		}
	}
</script>

<style lang="less" scoped>
	.common{
		width: 100%;
		height: 48px;
		background: #fff;
		border-radius: 6px;

		li{
			float: left;
			line-height: 48px;
			margin-left: 40px;
			cursor: pointer;
			font-size: 15px;
			position: relative;

			span{
				display: block;
				border: 7px solid #D1DBD3;
    			border-top: 7px solid #fff;
    			bottom: -14px;
				position: absolute;
				background:#000;
				left: 50%;
				transform: translateX(-50%);

			}
		}
	}
	.active{
		color: #31c27c;
	}
	.list_bootom{
		width: 688px;
		margin-top: 14px;
		border-radius: 6px;

	}

</style>
