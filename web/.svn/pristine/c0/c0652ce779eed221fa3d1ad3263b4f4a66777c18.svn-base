<template>
	<div>
		<div class="shade"></div>
		<div class="roleset">
			<div class="top">
		        角色确定
				<img src="../../assets/images/litclose_normal.png" class="close">
		    </div>
		    <div class="roleinfo">
		    	<ul class="broad-heading">
		    		<li v-on:click="toggle(tab.index,tab.view)" v-for="tab in tabs" :class="{active:active==tab.index}">
		    			{{tab.type}}
		    		</li>
		    	</ul>
		    	<component :is="currentView"></component>
		    </div>
		</div>
	</div>
</template>

<script>
	import headquarters from "./headquarters"
	import region from "./region"
	import district from "./district"
	import campus from "./campus"
	export default {
		data () {
			return {
				active: 0,
				currentView: "headquarters",
				tabs: [
					{
						index: 0,
						type: "总部",
						view: "headquarters"
					},
					{
						index: 1,
						type: "大区",
						view: "region"
					},
					{
						index: 2,
						type: "地区",
						view: "district"
					},
					{
						index: 3,
						type: "校区",
						view: "campus"
					}
				]
			}
		},
		components: {
			headquarters,
			region,
			district,
			campus
		},
		methods: {
			toggle: function (index, view) {
				this.active = index;
				this.currentView = view
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
		.broad-heading{
			padding: 20px 0;
			margin: 0 30px;
			border-bottom: 1px dashed #eee;
			display: flex;
			li{
				width: 65px;
				height: 24px;
				text-align: center;
				line-height: 24px;
				background: #f2f5f8;
				border-radius: 10px;
				margin-right: 10px;
				cursor: pointer;
			}
			.active{
				background: #31c27c;
			}
		}
	}
</style>