<template>
	<div class="vip-one-table">
		<div class="content">
			<h1>
				{{data.name}}
				<span @click="close2"></span>
			</h1>
			<div class="body">
				<div class="body_left">
					<!--表头-->
					<span>课耗信息</span>
					<span class="body_left_qie">
						<i>年级年龄
							<b></b>
						</i>
						<i class="last_i">课时数量</i>
						<div class="border_shu"></div>
					</span>
					<!--第一列-->
					<span class="body_left_h"> 
						<!--课时段-->
						<div v-if="this.data.editState == '课时段'" class="h_div_one">
							<div v-if="false">1-60课时</div>
							<input type="text" />
							-
							<input type="text" />
							课时
						</div> 
						<!--课时包-->
						<div v-if="this.data.editState == '课时包'" class="h_div_two">
							<div v-if="false">60课时</div> 
							<input type="text" />
							课时
						</div>
					</span> 
				</div>
				<ul class="body_right">
					<li class="body_li_one">
						<div class="body_ul_two">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div class="body_ul_two">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			data: {},
			close: {}
		},
		data() {
			return {}
		},
		methods: {
			/**
			 * 关闭弹窗
			 */
			close2() {
				this.$emit('close')
			}
		},
		mounted() {
			$(".body_ul_two span").each((ele, index) => {
				if(ele % 2 == 0) {
					index.style.background = "#fff"
				} else {
					index.style.background = "#eff3f5"
				}
			})
			if(this.data.subjectState == '添加') {
				
			}
			if(this.data.editState == '课时包') {
				
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
@import url("vip-one-table.less");
</style>