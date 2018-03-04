<template>
	<div class="select_campus" v-if="schoolShow" :style="{ width: windowWidth + 'px' }">
		<div class="table">
			<h1>选择校区 
				<span @click="close"></span>
			</h1>
			
			<h2>
				<span>总部</span>
				<span>大区</span>
				<span>地区</span>
				<span class="active_span">校区</span>
			</h2>
			
			<div class="table_bottom">
				<h3>
					<div>地区</div>
					<span></span>
				</h3> 
			</div>
			
			<section class="earea_one">
				<span v-for="(ele,index) in areaList" :key="index" :class="{span_green : areaIndex == index}" @click="areaClick(index , ele.area_id)">{{ele.area_name}}</span>
			</section>
			
			<div class="table_bottom">
				<h3>
					<div class="table_lang_div">校区 (可多选)</div>
					<span></span>
				</h3> 
			</div>
			
			<section class="earea_one">
				<span v-for="(ele,index) in schoolListTwo" :class="{span_green : ele.show == true}" @click="schoolClick(index , ele.school_id)" :key="index">{{ele.school_name}}</span>
			</section>
			
			<div class="btn" @click="btnClick">确定</div>
		</div>
	</div>
</template>

				<!--父组件的html开启事件和删除事件-->
				<!--<ul class="edit_ul"> 
					<div v-for="(ele,index) in schoolList" :key="index">
						<li v-for="(ele2 , index2) in ele.list" :key="index2" v-if="ele2.show">
							{{ele2.school_name}}
							<span @click="removeClick(index,index2)">x</span>
						</li>
					</div>
				</ul>
				打开之前要清空
				this.$store.commit('SET_AREAINDEX', -1)
				this.$store.commit('REMOVE_SCHOOLLISTKONG')
				this.$store.dispatch('huoQuHuLianDiQu')
				selectChoolClick(){
					if(this.radio == '2'){
						this.$store.commit('SET_SCHOOLSHOW')
					}
				},
				removeClick(index,index2){
					this.$store.commit('REMOVE_SCHOOLLISTSHOW',{index,index2})
				}-->
				
				
				
<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				windowWidth: 0, 
			}
		},
		computed: {
			...mapState({
			    schoolShow: state => state.SchoolPropaganda.schoolShow, 
			    areaList: state => state.SchoolPropaganda.areaList, 
			    schoolListTwo: state => state.SchoolPropaganda.schoolListTwo,
			    schoolList: state => state.SchoolPropaganda.schoolList,
			    areaIndex: state => state.SchoolPropaganda.areaIndex
			  })
		},
		methods: {
			/**
			 * 关闭
			 * */
			close() {
				this.$store.commit('SET_SCHOOLSHOW')
			},
			/**
			 * 选择地区
			 * */
			areaClick(index,id){
				this.$store.commit('SET_AREAINDEX' , index) 
				/**
				 * 判断是否为第一次点击，如果是则插入list
				 * */
				if(this.areaList[index].once){
					this.$store.dispatch('huoQuHuLianXiaoQu',{id,index})
					this.$store.commit('SET_AREALISTONCE',index)
				}else{
					this.$store.commit('SET_SCHOOLLISTTWO',index)
				} 
			},
			/**
			 * 选择学校
			 * */
			schoolClick(index,id) {
				this.$store.commit('SET_SCHOOLTWOSHOW',index)
			},
			/**
			 * 确定提交
			 * */
			btnClick(){
				this.$store.commit('SET_SCHOOLSHOW')
			}
		},
		mounted() {
			this.windowWidth = document.documentElement.clientWidth  
		}
	}
</script>

<style lang="less" scoped="scoped">
	@color : #31C17B;
	body {
		overflow: hidden;
	}
	
	.select_campus {
		height: 2000px;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
		
		.table{
			width: 750px;
			height: 600px;
			background: #fff;
			position: absolute;
			box-sizing: border-box;
			top: 100px;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 10px; 
			
			h1{
				font-size: 16px;
				color: #333;
				text-align: center;
				background: #EFF3F5;
				line-height: 60px;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				position: relative;
				
				span {
					display: block;
					width: 20px;
					height: 20px;
					top: 22px;
					position: absolute;
					right: 20px;
					background: url(../../static/home-icon/axx.png) no-repeat;
					cursor: pointer;
				}
			}
			
			h2{
				width: 100%;
				height: 62px;
				display: flex;
				align-items: center;
				justify-content: center;
				
				span{
					display: block; 
					padding: 4px 20px;
					color: #999;
					background: #F1F5F7;
					border-radius: 14px;
					margin: 10px;
					cursor: pointer; 
					&.active_span{
						background: @color;
						color: #fff; 
					}
				}
			}
			
			.table_bottom{
				width: 100%;
				padding: 0 60px 0 40px;
				box-sizing: border-box;
				
				h3{
				width: 100%;
				position: relative;
				height: 16px; 
				 
					div{
						color: @color;
						background: #fff;
						z-index: 10;
						line-height: 16px; 
						width: 50px;
						&.table_lang_div{
							width: 110px;
						}
					}
					
					span{
							display: block;
							position: absolute;
							width: 100%;
							border-bottom: 1px dotted #ccc;
							top: 7px;
							left: 0;
							z-index: -1;
						}
				}
			}
			
			.earea_one{
				width: 100%;
				padding: 20px 42px 0 22px; 
				display: flex;
				flex-wrap: wrap;
				span{
					display: block;
					width: 102px;
					height: 26px;
					text-align: center;
					line-height: 26px;
					background: #F1F5F7;
					margin: 0 18px 20px;
					border-radius: 13px;
					color: #666;
					cursor: pointer;
					&.span_green{
						background: @color;
						color: #fff;
					}
				}
			}
			
			.btn{
				position: absolute;
				bottom: 40px;
				width: 174px;
				background: @color;
				color: #fff;
				line-height: 34px;
				text-align: center;
				left: 50%;
				transform: translateX(-50%);
				border-radius: 6px;
				border: none;
				cursor: pointer;
			}
			
			}
		}
</style>