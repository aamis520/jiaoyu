<template>
	<div class="table_zd" :style="{ width: windowWidth + 'px' }" >
			<section>
				<h1>
					{{data.title}}
					<img src="../assets/close.jpg"@click="ChildrenClose" />
				</h1> 
				<img src="../../../static/home-icon/classtishi.gif" />
				<h2>{{data.data}}</h2>
				<p>   
					<img src="../../static/home-icon/table_c.png"  @click="ChildrenClose"/>
					<img src="../../static/home-icon/table_d.png"   @click="ChildrenOk"/>
				</p>
			</section>
		</div>
</template>
<!--<v-table @close="close" @ok="ok" :data="constdata" v-if="tableShow"> </v-table>
data(){
			return {
				constdata : {
					title: "提醒",
					data : "内容"
				}, 
			}
		},
		components : {
			'v-table' : table
		},
		methods: {
			close(){
				this.tableShow = false
				console.log('关闭')
			},
			ok(){
				this.tableShow = false
				console.log('打开')
			} 
		}-->
<script>
	export default {
		 data() {
		 	return {
		 		windowWidth: '0',
		 	}
		 },
		 props: {
		 	close: {}, 
		 	data: {},
		 	ok: {}, 
		 },
		 computed:{
		 	
		 },
		 mounted(){ 
		 	this.windowWidth = document.documentElement.clientWidth
		 },
		 methods: {
		 	ChildrenClose(){
		 		this.$emit('close')
		 	},
		 	ChildrenOk(){
		 		this.$emit('ok')
		 	}
		 }
		 
	}
</script>

<style lang="less" scoped="scoped">
	body{
		overflow: hidden;
	}
		.table_zd {
		height: 2000px;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
		section {
			width: 380px; 
			padding-bottom: 30px;
			background: #fff;
			position: absolute;
			box-sizing: border-box;
			top: 300px;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 10px;
			h1 {
				width: 100%;
				height: 50px;
				background: #F1F5F7;
				text-align: center;
				line-height: 50px;
				font-size: 16px;
				position: relative;
				img {
					position: absolute;
					right: 20px;
					top: 20px;
					cursor: pointer;
				}
			}
			.R {
				display: block;
				margin: 30px auto 0;
			}
			h2 {
				width: 100%;
				text-align: center;
				color: #666;
				margin-top: 20px;
				box-sizing: border-box;
				padding: 0 30px;
				font-size: 14px;
				font-weight: 100;
			}
			p {
				width: 100%;
				display: flex;
				justify-content: center;
				margin-top: 24px;
				img {
					margin: 0 15px;
					cursor: pointer;
				}
			}
		}
	}	
</style>