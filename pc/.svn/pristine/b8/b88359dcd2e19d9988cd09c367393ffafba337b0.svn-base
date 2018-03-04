<template>
	<div class="curriculum-falselistwai">
		<div class="curriculum-falselist">
			<h4> 
				{{falselist.title}}
				<el-tooltip class="el-item2" effect="dark" content="课程链后边括号当中的数字，为课程链在系统当中的顺序码" placement="top-start">
				      	<el-button></el-button>
				</el-tooltip> 
			</h4>
			<ul>
				<li> 
					<section> 
						<span v-for="(ele,index) in falselist.chain_course_list.chain_course_list" :key="index" >{{ele.course_name}} · {{ele.course_num}}期 ·个班型</span>		
					</section>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: "",
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				falselist: state => state.classSettingsfalse.listFalse
			})
		},
	}
</script>

<style lang="less">
	@import url("../false-list.less");
</style>