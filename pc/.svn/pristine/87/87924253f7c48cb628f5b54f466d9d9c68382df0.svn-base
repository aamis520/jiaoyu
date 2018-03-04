<template>
	<div class="home_seitch" :style="{ width: windowWidth + 'px' }">
		<div class="home_seitch_body">
			<h1>
				选择校区
				<img src="../../images/home-icon/axx.png" alt="" @click="close" />
			</h1>
			<div class="home_table">
				<h2>
					<span :class="{istable_active : shcoolClassSwitch == 'ZB'}" @click="tableClick1">总部</span>
					<span class="istable_hui" >大区</span>
					<span :class="{istable_active : shcoolClassSwitch == 'DQ' , istable_hui : areaList.length == 0}" @click="tableClick2">地区</span>
					<span :class="{istable_active : shcoolClassSwitch == 'FX' , istable_hui : schoolList.length == 0}" @click="tableClick3">校区</span>
				</h2>
			</div>
			
			<div class="home_table_ZB" v-if="shcoolClassSwitch == 'ZB'"> 
				<div class="ZB_btn_1" @click="btnone">确认</div>
			</div>
			<div class="home_table_DQ" v-if="shcoolClassSwitch == 'DQ' && areaList.length > 0">
				<span v-for="(ele,index) in areaList" :key='index' :class="{table_class_span : oneIndex == index}" @click="spanClickOne(index,ele)">{{ele.area_name}}</span>
				<div class="ZB_btn_1" @click="btntwo">确认</div>
			</div>
			<div class="home_table_FX" v-if="shcoolClassSwitch == 'FX' && schoolList.length > 0">
				<span v-for="(ele,index) in schoolList" :key='index' :class="{table_class_span : twoIndex == index}" @click="spanClickTwo(index,ele)">{{ele.school_name}}</span>
				<div class="ZB_btn_1" @click="btnthree">确认</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex' 
	export default {
		props:{
			homeClickClose: {}
		},
		
		data(){
			return {
				windowWidth : 0 ,  
				oneIndex: -1,
				twoIndex: -1,
				subList: [],
				shcoolClassSwitch: "ZB"
				
			}
		},
		computed:{
			...mapState({
			    shcoolClass: state => state.home.shcoolClass,
			    areaList: state => state.home.areaList,
				schoolList: state => state.home.schoolList
			 })
		},
		methods: {
			/**
			 * 是否为总校
			 * */
			localS(bool , areaId , schoolId , schoolName){
				let obj = JSON.parse(localStorage.USER_INFO)
				obj.headSchoolBoolean = bool
				obj.areaId = areaId
				obj.schoolId = schoolId
				obj.schoolName = schoolName
				obj = JSON.stringify(obj)
				localStorage.setItem('USER_INFO',obj) 
			},
			close() {  
				this.$store.commit('SET_SHCOOLSHWOF')
			},
			
			tableClick1(){ 
				this.$store.commit('SET_SHCOOLCLASS',"ZB")
				this.shcoolClassSwitch = 'ZB'
				this.istableShow = 'ZB' 
			}, 
			tableClick2(){  
				this.shcoolClassSwitch = 'DQ'
				this.istableShow = 'DQ' 
			}, 
			tableClick3(){   
				this.shcoolClassSwitch = 'FX'
				this.istableShow = 'FX'  
			},
			
			btnone(){
				this.$store.commit('SET_SHCOOLNAME','总部')
				this.localS(true , null , null)
				this.close() 
			},
			btntwo(){
				if(this.subList.length == 0){
					alert("请选择具体内容")
				}else{
					this.$store.commit('SET_SHCOOLNAME',this.subList[0].name)
					this.localS(true , this.subList[0].id , null , null)
					this.$store.commit('SET_SHCOOLCLASS',"DQ")
					this.close()
				}
				
			},
			btnthree(){
				if(this.subList.length == 0){
					alert("请选择具体内容")
				}else{
					this.$store.commit('SET_SHCOOLNAME',this.subList[0].name)
					this.localS(true , null , this.subList[0].id , this.subList[0].name)
					this.$store.commit('SET_SHCOOLCLASS',"FX") 
					this.close()
				}
			},
			
			spanClickOne(index , ele){
				this.subList = [{
					id : ele.area_id,
					name : ele.area_name
				}]
				this.oneIndex = index
			},
			spanClickTwo(index , ele){
				this.subList = [{
					id : ele.school_id,
					name : ele.school_name
				}]
				this.twoIndex = index
			}
			
			
		},
		mounted(){
			this.windowWidth = document.documentElement.clientWidth 
			this.$store.dispatch('loginAreaName')
			this.$store.dispatch('loginSchoolName')
		}
	}
</script>

<style lang="less" scoped>
@color :#31C17B;
	body {
		overflow: hidden;
	}  
		.home_seitch{
			height: 2000px;
			position: fixed;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.3);
			z-index: 10;
			
			.home_seitch_body{
				width: 750px;
				height: 620px;
				background: #FFF;
				overflow-y: auto;  
				position: absolute;
				box-sizing: border-box;  
				left: 50%;
				transform: translateX(-50%);
				border-radius: 10px;
				top: 80px;
				
				h1{
					width: 100%;
					height: 60px;
					background: #EFF3F5;
					text-align: center;
					line-height: 60px;
					position: relative;
					font-size: 16px;
					
					img{
						position: absolute;
						top: 22px;
						right: 20px;
						cursor: pointer;
					}
				}
				
				.home_table{
					width: 100%; 
					box-sizing: border-box;
					padding: 0 30px;
					
					h2{
						width: 100%;
						border-bottom: 1px dotted #efefef;
						height: 60px; 
						display: flex;
						align-items: center;
						justify-content: center;
						span{
							display: block;
							background: #F1F5F7;
							padding: 2px 20px;
							margin-right: 10px;
							border-radius: 10px;
							cursor: pointer;
							
							&.istable_active{
								background: @color;
								color: #fff;
							}
							&.istable_hui{
								background: #F1F5F7;
								color: #ccc;
							}
						}
					}
				}
				
			.home_table_ZB,.home_table_DQ,.home_table_FX {
				width: 100%;
				height: 499px;
				position: relative;
				padding: 30px 0px 0 35px;
				box-sizing: border-box; 
				.ZB_btn_1{
					width: 176px;
					height: 35px;
					border-radius: 4px;
					background: @color;
					text-align: center;
					line-height: 35px;
					color: #fff;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					bottom: 30px;
					cursor: pointer;
				}
				
				span{
					display: block; 
					width: 102px;
					height: 24px;
					float: left;
					margin-bottom: 21px;
					line-height: 24px;
					text-align: center;
					background: #F1F5F7; 
					margin-right: 35px;
					border-radius: 10px;
					cursor: pointer;
					
					&.table_class_span{
						background: @color;
						color: #fff;
						}
				}
			}
			}
		}

	
</style>