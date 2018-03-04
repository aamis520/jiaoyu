<template>
	<div class="class-A">
		<header>
			<span>班级课设置</span>
			<span></span>
		</header>
		<div class="body" v-if="list.length == 0 && !show">
			<div></div>
			<p>您还没有对课程链做任何设置</p>
		</div>
		<b   class="add-img" @click="addClick" v-if="!show" ></b>

		<div class="list" v-if="list.length > 0 && !show">
			<ul class="list-ul" v-for="(ele,index) in list" :key="index">
				<h1>{{ele.name}}<img src="../../../../../images/home-schint/xdg.png" alt="" class="xiu_img" @click="bianji(ele)"/></h1>
				<li v-for="(ele2,index2) in ele.list" :key="index2">
					<h2>{{ele2.name}}（{{ele2.code}}）</h2>
					<section>
						<span v-for="(ele3,index3) in ele2.chain_course_list" :key="index3" :class="{length_class: index3 != ele2.chain_course_list.length-1}">{{ele3.course_name}} · {{ele3.course_num}}期 · {{ele3.class_type_list.length}}个班型</span>
					</section>
				</li>
			</ul>
		</div>
		<transition name="el-fade-in-linear">
			<v-addClass v-if="addShow" class="huo" @checkedshowClick="checkedshowClick" @close="close" @falseListOpen="falseListOpen" @falseListClose="falseListClose" :checkedshow="checkedshow" :chongshow="chongshow"></v-addClass>
		</transition>
		<transition name="el-fade-in-linear">
			<v-addfalseList v-if="listShow"></v-addfalseList>
		</transition>
		<transition name="el-fade-in-linear">
			<v-addtrueeList v-if="listtrueShow" @huixian="huixian" @close="close"></v-addtrueeList>
		</transition> 
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import addClass from './curriculum-chain-add'
	import addfalseList from './curriculum-chain-add-falselist'
	import addtrueeList from './curriculum-chain-add-truelist'
	export default {
		data() {
			return {
				show: false, //主页面
				addShow: false, //添加页面
				listShow: false, //模拟列表页面
				listtrueShow: false, //真是请求页面
				checkedshow: true, //请求表头状态
				chongshow: true, //重选状态

			}
		},
		components: {
			'v-addClass': addClass,
			"v-addfalseList": addfalseList,
			"v-addtrueeList": addtrueeList
		},
		computed: {
			...mapState({
				list: state => state.classSettings.list,
			})
		},
		methods: {
			close() {
				this.show = false
				this.addShow = false
				this.listtrueShow = false
				this.listShow = false
				this.checkedshow = true
				this.chongshow = true
				this.$store.dispatch('getClassSetList')
			},
			addClick() {
				this.show = !this.show
				this.addShow = true
			},
			falseListOpen() {
				this.listShow = true
			},
			falseListClose() {
				this.listShow = false
			},
			bianji(ele) { 
				if(ele.list.length == 0) {
					return false
				} else {
					this.listtrueShow = true
					this.show = true
					this.addShow = false
					this.$store.dispatch('getClassFalseListser', {
						name: ele.name,
						id: ele.list[0].subject.id,
						chain: "chain"
					})
				}
			},
			huixian() {
				this.checkedshow = false
				this.chongshow = false
			},
			checkedshowClick() {
				this.checkedshow = !this.checkedshow
			}

		},
		mounted() {
			this.$store.dispatch('getClassSetList')
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import url("../index.less");
</style>