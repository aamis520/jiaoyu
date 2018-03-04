<template>
	<div class="campusCircle">
		<header>
			<span>校园圈</span>
			<span @click="tableShow = !tableShow">
				 {{title}}
				 <span></span>
			</span>
		</header>
		<div class="body">
			<v-body></v-body>
		</div>
		<v-school v-show="tableShow" @close="close" ref="fn" @call="call"></v-school>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import bodycom from './campusCirclebody'
	import vSchool from './campusCircletable'
	export default {
		created() {

		},
		data() {
			return {
				tableShow: false
			}
		},
		computed: {
			...mapState({
				title: state => state.CampusCircle.name
			})
		},
		components: {
			'v-body': bodycom,
			'v-school': vSchool
		},
		methods: {
			//弹窗关闭
			close() {
				this.tableShow = !this.tableShow
			},
			//弹窗回调
			call(res) {
				let newid = ""
				if(res.length == 3) {
					this.$store.dispatch("getZongInit", {
						id: res[res.length - 2].id,
						type: res[res.length - 1].userType
					})
				}
				if(res.length == 2) {
					this.$store.dispatch("getZongInit", {
						id: "",
						type: res[res.length - 1].userType
					})
				}
				this.$store.commit('GET_TABLE_NAME', res[res.length - 2].name)

				//切换校区刷新页面
			}
		},
		updated() {

		},
		mounted() {
			this.$store.commit('GET_TABLE_NAME', '总部')
		}

	}
</script>

<style scoped lang="less">
	@color : #31C17B;
	.campusCircle {
		header {
			border-radius: 6px;
			width: 1008px;
			height: 48px;
			background: #ffffff;
			box-sizing: border-box;
			padding-left: 24px;
			line-height: 48px;
			color: @color;
			font-size: 16px;
			span {
				&:last-child {
					font-size: 14px;
					margin-left: 20px;
					position: relative;
					cursor: pointer;
					span {
						position: absolute;
						border: 7px solid #fff;
						border-top: 7px solid @color;
						right: -20px;
						top: 7px;
					}
				}
			}
		}
		.body {
			width: 688px;
			margin-top: 14px;
		}
	}
</style>