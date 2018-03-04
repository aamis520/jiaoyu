<template>
	<div class="on_one">
		<div class="on_one_div">
			<header>
				<span>一对一设置</span>
				<span></span>
			</header>
			<div class="body" v-if="list.length == 0 && !show">
				<div></div>
				<p>您还没有对课程链做任何设置</p>
			</div>
			<b class="add-img" @click="addClick" v-if="!show"></b>
			<transition name="fade">
				<v-addClass v-if="show" class="huo" @close="close"></v-addClass>
			</transition>
			<div class="list" v-if="list.length > 0 && !show" >
				<ul class="list-ul" v-for="(ele,index) in list" :key="index"  v-if="ele.vip_course_list.length > 0">
					<h1>{{ele.name}}<i :class="{i_img_url : ele.imgIndex}" @click="imgClick(index)"></i></h1>
					<li v-for="(ele2,index2) in ele.vip_course_list" :key="index2">
						{{ele2.name}}
						<i v-if="ele.imgIndex" @click="removeClick(index,index2,ele2)"></i>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import addClass from './on-one-settings-add'
	export default {
		data() {
			return {
				show: false, 
			}
		},
		components:{
			'v-addClass' : addClass
		},
		computed: {
			...mapState({
				list: state => state.onOne.list
			})
		},
		methods: {
			addClick() {
				this.show = !this.show
			},
			close() {
				this.show = false
			},
			imgClick(index){
				this.$store.commit('GET_ONONESETTINGSCLASSSHOW',index) 
			},
			removeClick(index1,index2,ele){
				this.$store.commit('REMOVE_ONONELIST',{
					index1,
					index2,
					id: ele.id
				}) 
				this.$store.dispatch('removeVipOnOneClass',ele.id) 
			}
		},
		mounted() {
			this.$store.dispatch('getVipClassList')
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import url("../vip-index.less");
</style>