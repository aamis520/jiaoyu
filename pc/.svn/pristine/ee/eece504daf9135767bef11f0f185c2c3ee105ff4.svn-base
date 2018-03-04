<template>
	<div class="table_zd" :style="{ width: windowWidth + 'px' }" >
			<section>
				<h1>
					{{data.title}}
					<img src="../images/home-icon/axx.png" @click="ChildrenClose" />
				</h1> 
				<img src="../images/system-campus/classtishi.gif" class="tanhao"/>
				<h2>{{data.data}}</h2> 
				<p v-if="data.isImg">   
					<img src="../images/common-icon/cancel.png"   @click="ChildrenClose" v-if="data.warn"/>
					<img src="../images/common-icon/cancel-save.png"  @click="ChildrenOk" v-if="data.succe"/> 
				</p>
				<p v-if="data.isWords">
					<el-button type="success" @click="ChildrenOk">确定</el-button>
					<el-button type="info" @click="ChildrenClose">取消</el-button> 
				</p>
			</section>
		</div>
</template> 
<!--<template>
	<div class="A">
		<div @click="fn">点击我</div>
		<v-table @close="close" @ok="ok" :data="constdata"  v-if="tableShow"> </v-table> 
	</div>
</template>-->

<!--<script>
	import table from '../../components/Popup'
	export default {
		data(){
			return {
				tableShow: false,
				constdata : {
					title: "提醒",
					data : "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容", 
				 	isImg: true,图片
				 	isWords: true,文字
				 	warn : true,叹号
				 	succe : true,对号
				}, 
			}
		},
		components : {
			'v-table' : table
		},
		methods: {
			fn(){
				this.tableShow = true
			},
			close(){
				this.tableShow = false
				console.log('关闭')
			},
			ok(){
				this.tableShow = false
				console.log('打开')
			} 
		}
	}
</script>-->
 
<script>
	export default {
		 data() {
		 	return {
		 		windowWidth: '0', 
		 	}
		 },
		 props: {
		 	close: {}, 
		 	data: {
		 		type: Object,
		 		default() {
		 			return {
		 				title: "提醒",
						data : "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
						isImg : true,
						isWords : false
		 			}
		 		}
		 	},
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
*{
	margin: 0;
	padding: 0;
}
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
			padding-bottom: 40px;
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
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				img {
					position: absolute;
					right: 20px;
					top: 15px;
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
				padding: 0 40px;
				font-size: 14px;
				font-weight: 100;
				line-height: 25px;
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
				button{
					width: 60px;
					height: 26px;
					margin: 0 15px;
					border-radius: 6px;
				} 
			}
			.tanhao{
				display: block;
				margin: 40px auto 0;
			}
		}
	}	
</style>