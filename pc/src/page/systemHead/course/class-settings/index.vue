<template>
	<div class="common">
		<ul >
			<li v-on:click="toggle(tab.index,tab.view)" v-for="tab in tabs" :class="{active:tab.index==active}" class="common-list">
				{{tab.type}}
				<span v-if="tab.index==active"></span>
			</li>
		</ul>
		<component :is="currentView"></component>
	</div>
</template>
<script>
	import generaLintroduction from './curriculum-chain/index'
	import generaLintroductionfalse from './curriculum-chain-false/index'
	import generaLintroductioncombination from './curriculum-chain-combination/index'
	export default {
		components: {
			generaLintroduction: generaLintroduction,
			generaLintroductionfalse: generaLintroductionfalse,
			generaLintroductioncombination: generaLintroductioncombination
		},
		data() {
			return {
				active: 0,
				currentView: "generaLintroduction",
				tabs: [{
						index: 0,
						type: '课程链',
						view: "generaLintroduction"
					},
					{
						index: 1,
						type: '非课程链',
						view: "generaLintroductionfalse"
					},
					{
						index: 2,
						type: '课程链组合',
						view: "generaLintroductioncombination"
					},
				]
			};
		},
		methods: {
			toggle: function(index, view) {
				this.active = index
				this.currentView = view
			}
		}
	};
</script>
<style lang="less" scoped="scoped">
@color : #31C27C;
	.common {
		position: relative;
		ul{
			width: 600px;
			display: flex;
			position: absolute;
			left: 370px;  
			top: -30px;
			.common-list{
				color: #666;
				margin-right: 70px;
				cursor: pointer;  
				&.active {
					color: @color;
					border-bottom: 1px solid @color;
				}
			}
			
		}  
	}
</style>