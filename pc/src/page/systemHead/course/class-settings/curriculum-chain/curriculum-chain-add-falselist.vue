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
				<li v-for="(ele,index) in falselist.list" :key="index">
					<h2>{{ele.name}}（{{ele.code}}）</h2>
					<section>
						<span v-for="(ele2,index2) in ele.chain_course_list" :key="index2" :class="{length_class: index2 != ele.chain_course_list.length-1}">{{ele2.course_name}} · {{ele2.course_num}}期 · {{ele2.class_type_list.length}}个班型</span>				
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
				falselist: state => state.classSettings.listFalse
			})
		},
	}
</script>

<style lang="less">
@import url("../false-list.less");
</style>