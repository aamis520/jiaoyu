<template>
	<div>
		<div class="shade"></div>
		<div class="roleset">
			<div class="top">
		        添加人员
				<img src="../../assets/images/litclose_normal.png" class="close">
		    </div>
		    <div class="roleinfo">
		    	<ul class="broad-heading">
		    		<li v-on:click="toggle(tab.index,tab.view)" v-for="tab in tabs" :class="{active:active==tab.index}">
		    			{{tab.type}}
		    		</li>
		    	</ul>
		    	<el-input
				  placeholder="搜索"
				  icon="search"
				  v-model="input2"
				  :on-icon-click="handleIconClick">
				</el-input>
		    </div>
	    	<component :is="currentView"></component>
		</div>
	</div>
</template>

<script>
	import headoffice from "./headoffice"
	import school from "./school"
	import teacher from "./teacher"
	export default {
		data () {
			return {
				active: 0,
				currentView: "headoffice",
				tabs: [
					{
						index: 0,
						type: "总部",
						view: "headoffice"
					},
					{
						index: 1,
						type: "校区",
						view: "school"
					},
					{
						index: 2,
						type: "教师",
						view: "teacher"
					}
				],
				input2: '',
			}
		},
		components: {
			headoffice,
			school,
			teacher
		},
		methods: {
			toggle: function (index, view) {
				this.active = index;
				this.currentView = view
			},
			handleIconClick(ev) {
		    	console.log(ev);
		    }
		},
		mounted () {
			$(".close").click(function () {
				$(this).parents(".roleset").hide();
				$(".shade").hide();
			})
		}
	}
</script>

<style lang="less" scoped>
	.shade{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		z-index: 5;
	}
	.roleset{
		width: 750px;
		height: 690px;
		padding-bottom: 30px;
		border-radius: 4px;
		box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
		position: fixed;
		top: 12.2%;
		left: 30%;
		background: #fff;
		z-index: 6;
		.top{
			text-align: center;
			height: 60px;
			line-height: 60px;
			background: #eef2f4;
			position: relative;
			font-size: 18px;
			color: #333;
			
			.close{
				position: absolute;
				top: 10%;
				right: 0;
			}
		}
		.roleinfo{
			display: flex;
			justify-content: flex-end;
			margin: 0 30px;
			border-bottom: 1px dashed #eee;
			.broad-heading{
				padding: 20px 0;
				display: flex;
				justify-content: center;
				li{
					width: 65px;
					height: 24px;
					text-align: center;
					line-height: 24px;
					background: #f2f5f8;
					border-radius: 10px;
					margin-right: 24px;
					cursor: pointer;
				}
				.active{
					background: #31c27c;
					color: #fff;
				}
			}
			
		}
	}
</style>