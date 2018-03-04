<template>
	<div class="opening_add" :style="{ width: windowWidth + 'px' }">
		<div class="opening_add_section" :style="{  top : Top + 'px' }">
			<header>
				<span v-for="(ele,index) in titleArr" :key="index">{{ele}}</span>
				<div class="position_img">
					<img src="../../../../static/home-icon/bookadd.png" />
					<img src="../../../../static/home-icon/axx.png" alt="" @click="cancelClick" class="guanchaca"/>
				</div>
			</header>
			<div class="opening_body_add">
				<div class="op_body_table">
					<span class="op_body_table_lt">
						班级属性
						<i>*</i>
					</span>
					<div class="op_body_table_rt">
						<span :class="{shispan : spanLei == true}" @click="newClassClick">新开设的学期班</span>
						<span :class="{shispan1 : spanLei == false}" @click="oldClassClick">在授老班(学期班)</span>
					</div>
				</div>
				
				
				
				<div class="op_body_table">
					<span class="op_body_table_lt">班级名称</span>
					<div class="op_body_table_rt">
						<input type="" name="" id="" v-model="addArray.data.classCourse.course_name" readonly="readonly" />
						<i>+</i>
						<!--v-model="addArray.data.listOne.class_course_id"当前的id数据没有-->
						<input type="text" v-model="newCodeId"  readonly="readonly" class="classnum_add" />
						<input type="text" value="" placeholder="选班主任(可不选)" class="techer_add" />
						<span>
							<template>
								<el-date-picker
							      v-model="value8"
							      type="date"
							      placeholder="选择首课日">
							    </el-date-picker>
							</template>
						</span>
						<span class="creat_redio_add">
							<el-radio v-model="radio" label="1">确定</el-radio>
  							<el-radio v-model="radio" label="2">暂定</el-radio>
						</span>
					</div>
				</div>
				
				
				
				<div class="op_body_table" v-if="false">
					<span class="op_body_table_lt">上课时间</span>
					<div class="op_body_table_rt">
						 <div>
						 	<span v-for="(ele,index) in dataArr" :key="index">{{ele}}</span>
						 	<template>
								  <div>
								  	<el-time-select
								    placeholder="10:00"
								    v-model="startTime"
								    :picker-options="{
								      start: '08:30',
								      step: '00:15',
								      end: '18:30'
								    }">
								  </el-time-select>
								  </div>
								  <section>至</section>
								  <div>
								  	<el-time-select
								    placeholder="11:30"
								    v-model="endTime"
								    :picker-options="{
								      start: '08:30',
								      step: '00:15',
								      end: '18:30',
								      minTime: startTime
								    }">
								  </el-time-select>
								  </div>
								  <p>
								  	扣
								  		<input type="" name="" id="" value="" />
								  	次
								  </p>
								  <input type="text" name="" id=""  placeholder="教师"/>
								  <input type="" name="" id="" value="" placeholder="教室"/>
								  <b>x</b>
							</template>
						 </div>
						 <div>
						 	<span v-for="(ele,index) in dataArr" :key="index">{{ele}}</span>
						 	<template>
								  <div>
									  	<el-time-select
									    placeholder="10:00"
									    v-model="startTime2"
									    :picker-options="{
									      start: '08:30',
									      step: '00:15',
									      end: '18:30'
									    }">
									  </el-time-select>
								  </div>
								  <section>至</section>
								  <div>
									  	<el-time-select
									    placeholder="11:30"
									    v-model="endTime2"
									    :picker-options="{
									      start: '08:30',
									      step: '00:15',
									      end: '18:30',
									      minTime: startTime
									    }">
									  </el-time-select>
								  </div>
								</template>
								<p>
									扣
									<input type="" name="" id="" value="" />
									课时
								</p>
								<input type="" name="" id="" value="" placeholder="教师"/>
								<input type="" name="" id="" value="" placeholder="教室"/>
								<b>x</b>
						 </div>
					</div>
				</div>
				
				
				<div class="op_body_table" v-if="spanLei">
					<span class="op_body_table_lt">时间标签<i>*</i></span>
					<div class="op_body_table_rt" > 
						<!--<span v-for="(ele,index) in addArray.data.newData[0]" :key="index" :class="{greenclass : currIndex1== index}" @click="ChoiceClick(addArray.data.newData,addArray.data.newData[0], index,1)">{{ele.name}}</span>-->
						<span v-for="(ele,index) in addArray.data.newData[1]" :key="index" :class="{greenclass : currIndex2== index}" @click="ChoiceClick(addArray.data.newData[1], index,2)">{{ele.name}}</span>
					</div>
				</div>
				
				
				<div class="op_body_table" v-if="spanLei">
					<span class="op_body_table_lt">班级费用</span>
					<div class="op_body_table_rt"> 
						 <span >学费<b>{{addArray.data.fy.feeByPeriod}}</b>元/期</span>
						 <span ><b>{{addArray.data.fy.numberOfPeriod}}</b>次/期</span>
						 <span ><b>{{addArray.data.fy.feeByTime}}</b>元/次</span> 
						 <span>报名费:50元</span>
						 <span v-for="(ele,index) in addArray.data.listTwo.optionalMaterials">{{ele.productName}}{{ele.number}}{{ele.unit}}</span> 
						 <span v-for="(ele,index) in addArray.data.listTwo.requiredMaterials">{{ele.productName}}{{ele.number}}{{ele.unit}}</span> 
						 <span v-if="addArray.data.give_item">{{addArray.data.give_item.freeMaterial.productName}}:{{addArray.data.give_item.freeMaterial.unit_price}}元</span>
					</div>
				</div>
				
				
				<div class="op_body_table" v-if="spanLei">
					<span class="op_body_table_lt">班级设置</span>
					<div class="op_body_table_rt">  		
						 <div>
						 	<div>
						 		<el-radio v-model="radio2" label="1">无需排座</el-radio>
						 	</div>
							 <div>
							 	<el-radio v-model="radio2" label="2">需要排座</el-radio>
							 </div>
							 <div>
							 	<el-radio v-model="radio3" label="1">家长手机端显示本班报班人数</el-radio>
							 </div>
							 <div>
							 	<el-radio v-model="radio3" label="2" style="margin-right: 190px;">家长手机端不显示本班报班人数</el-radio>
							 </div>
							 <span>班容{{addArray.data.listTwo.maxCapacity}}人</span>
							 <section>
							 	本班报够 <input type="text" name="" id="" v-model="persNum"/>人时，家长手机端显示”满班”，并不可再报名，教师手机端依然可报名
							 	<img src="../../../../static/home-icon/tanhao.png"/>
							 </section>
						 </div> 
					</div>					
				</div>
				
				
				<div class="op_body_table" v-if="spanLei">
					<span class="op_body_table_lt">显示设置<i>*</i></span>
					<div class="op_body_table_rt"> 
						<template>
						  <el-radio v-model="radio4" label="1">立即在家长端显示</el-radio>
						  <el-radio v-model="radio4" label="2">请
						  </el-radio>
						  <div class="flex_just">
						  	<template>
							  		 <div class="block"> 
									    <el-date-picker
									      v-model="value9"
									      type="date"
									      placeholder="选择日期">
									    </el-date-picker>
									  </div>
							</template> 
						  </div>
						  <b>在家长端显示<img src="../../../../static/home-icon/tanhao.png" alt="" /></b>
						</template>
					</div>					
				</div>
				
				<footer v-if="false">
					<span>重要提示:</span>
					<div>
						<span>总部规定，家长可选择两期连报，请注意提醒。</span>
						<span>总部规定，本课程可以和“剑桥少儿英语”组成升级三期连报，请注意提醒家长。</span>
						<span>总部规定，家长必须选择两期连报，请注意提醒。</span>
						<span>总部规定，本课程必须和“剑桥少儿英语”组成升级三期连报，请注意提醒家长。</span>
						<span>总部规定，本课程报名可以和“初一数学”组成套餐课程，请注意提醒家长。</span>
						<span>总部规定，本课程报名必须和“初一数学”组成套餐课程，请注意提醒家长。</span>
					</div>
				</footer>
				<div class="beizhu_classadd" v-if="!spanLei">备注：对于在授老班来说，这里开班以后，可以把在读学生的相关信息通过“校方导入在授老班”或“家长手机端”自行录入在授老班。</div>
				<div class="footer_btn_class">
					<p @click="cancelClick">取消</p>
					<p @click='okClick'>确认开班</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import cont from '../../../common/const'
	import qs from 'qs'
	export default {
		props: {
			close: {},
			addArray: {},
			keLianAjax: {},
			codeId: {}
		},
		computed:{ 
		},
		data() {
			return {  
				headSchoolId: this.$ls.get("USER_INFO").headSchoolId,
				schoolId: this.$ls.get("USER_INFO").schoolId,
				schoolName: this.$ls.get("USER_INFO").schoolName,
				userId: this.$ls.get("USER_INFO").userId,
				windowWidth: 0,
				Top: 10,
				titleArr: this.$store.state.OldStore.fxTitleAdd, 
				spanLei: true,
				value8: new Date(),
				value9: new Date(),
				radio: '1',
				radio2: '1',
				radio3: '1',
				radio4: '1',
				dataArr:['一','二','三','四','五','六','日'],
				startTime: '',
        		endTime: '',
        		startTime2: '',
        		endTime2: '',
        		shouData:"2017-10-10",
        		classLei:"new",
        		dateLer:"",
        		dataLerName:"",
        		persNum:0,
        		currIndex1:-1,
        		currIndex2:-1,
        		newCodeId : ""
        		
			}
		},
		updated() {
			this.titleArr = this.$store.state.OldStore.fxTitleAdd 
			if(this.spanLei){
				this.Top = 10
			}else{
				this.Top = 200
			}
		},
		methods: {
			newClassClick(){
				this.spanLei = true
				this.newCodeId = ''
				
			},
			oldClassClick(){
				this.spanLei = false
				this.newCodeId = this.addArray.data.classCourse.code+"-" + this.addArray.oldcodeId
			},
			/**
			 * 选择班级开设日期
			 * */
			ChoiceClick(b,c,d){  
				this.newCodeId =this.addArray.data.classCourse.code+"-" + b[c].name.substring(0,2) + this.addArray.codeId
				b.map((ele,index)=>{
					ele.isbool = false 
				})
				b[c].isbool = true
				if(d == 1){
					this['currIndex2']=-1
				}else{
					this['currIndex1']=-1
				}
				 this['currIndex'+d]=c
			},
			/**
			 * 取消按钮
			 * */
			cancelClick() {  
				this.$emit('close')
			},
			/**
			 * 提交表单
			 * */
			okClick(){ 
				//console.log(this.value8.toLocaleDateString().split('/').join("-")) 
				//先判断是新班还是老班
				if(this.spanLei){
					this.classLei = "new"
				}else{
					this.classLei = "old"
				} 
				this.addArray.data.newData[1].map((ele,index)=>{
					if(ele.isbool == true){
						this.dateLer = ele.name
					}
				})
				 var obj = {  
					/** 开班课程期id */
					 course_period_id : this.addArray.data.listOne.id,	
					/** 当前科目id */
					 current_subject_id : this.addArray.data.classCourse.subject.id,	//~~
					/** 当前课程id */
					current_course_id:this.addArray.data.classCourse.id,	//~~没有
					/** 课程期类型 长短期 学期班  单短期*/
					//course_period_type : "",	//~~
					/** 班级属性 "new"为新开 "old"为在授 */
					 class_property : this.classLei,
					/** 班级序号 */
					sort_num : "",
					/** 班级名称 */
					 name: this.newCodeId,
					/** 班级编号 */
					// code : "",
					/** 班级类型 */
					class_type:{
						id: this.addArray.data.listOne.class_type.id,
						name: this.addArray.data.listOne.class_type.name
					},	//
					/** 班主任id */
					 manager_id: 110,	//
					/** 班主任name */
					 manager_name : "模拟的",	//
					/** 首课日 */
					 first_lesson_date : this.value8.toLocaleDateString().split('/').join("-"),
					/** 首课日暂定还是确定 sure为确定 provisional为暂定 */
					 sureOrProvisional : this.radio == 1 ? "sure" : "provisional",
					/** 课程 需要将课程链所属的所有序号大于等于本课程的课程记录在内*/
					// class_course;	//
					/** 开班时所选的时间标签 */
					 time_label_str : this.dateLer,
					/** 班级费用 */
					// standard_fee;	//~~
					/** 其它费用 */
					// other_fee;	//~~
					/** 是否需要排座 */
					 is_need_arrange_seat : this.radio2 == 1 ? false : true,
					/** 家长端app报名是否显示本班已报名人数 */
					 parents_app_is_show_register_num : this.radio2 == 2 ? false : true,
					/** 班容 */
					 class_capacity : this.addArray.data.listTwo.maxCapacity,
					/** 家长端app最多报名数 */
					 parents_app_register_max_num :Number(this.persNum),
					/** 家长端app达到最多报名数是否可以继续报名 */
					 parents_app_is_continue_register : false,
					/** 是否立即生效 */
					 is_quickly_in_use : this.radio2 == 2 ? false : true,
					/** 生效日期 */
					 in_use_date : this.spanLei ? this.value8.toLocaleDateString().split('/').join("-") : "",
					/** 校区id */
					 school_id : this.schoolId,
					/** 校区名称 */
					 school_name : this.schoolName,
					/** 总校id */
					 head_school_id: this.headSchoolId,
					/** 创建人id */
					 user_id:this.userId,//
					/** 创建时间 */
					// create_time;	//
					/** 是否删除 */
					 is_delete : false ,
					/** 是否结班 */
					 is_end : this.spanLei ? false : true ,	//
					/** 修改人id */
					// update_user_id;	//
					/** 修改时间 */
					// update_time;	//
					/********* 以下字段为长期班和单短期班专用 ************* */
					/** 是否开启多期连报 */
					// is_open_multi_period_series_register = false;	//
					/** 开启多期连报数量 */
					// open_multi_period_series_register_num;	//
					/** 班级期显示使用 */
					// class_period_list;	//
					/** 班级在读标签 */
					// label;	/
					/** 查询显示期数 */
					// show_num;	// 
				 }   
				 obj= JSON.stringify(obj) 
				 let newobj = {
				 	commonClassStr : obj
				 } 
				 newobj = qs.stringify(newobj)
				 if(this.spanLei){
					 	if(this.newCodeId != ""){
					 	if(this.value8){
					 		 //新班级进行ajax请求
					 		 this.ajaxClass(newobj)  
					 		 this.$emit('keLianAjax',this.$store.state.OldStore.kemuLianId)
					 	}
					 }else{
					 	alert("请填写完整信息")
					 }
				 }else{
				 	if(this.value8){
					 		 //新班级进行ajax请求
					 		 this.ajaxClass(newobj) 
					 		 this.$emit('keLianAjax',this.$store.state.OldStore.kemuLianId)
					 	}else{
					 		alert("请填写完整信息")
					 	}
				 }
			},
			ajaxClass(jsonp){
				
				this.$emit('close')
				let url = cont.campus+"v1/campus/coursechain/insertCommonClassAndClassPeriod?accessToken=aaaa"
				this.axios.post(url , jsonp) 
				.then(res=>{ 
					console.log("开班结束")
				 	
				})
			}
		},
		mounted() { 
			this.windowWidth = document.documentElement.clientWidth  
		}
	}
</script>

<style scoped lang="less">
	@color :#31C17B;
	body {
		overflow: hidden;
	} 
	.opening_add {
		height: 2000px;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
	}
	
	.opening_add_section {
		overflow-y: auto;
		width: 1200px; 
		background: #fff;
		position: absolute;
		box-sizing: border-box; 
		left: 50%;
		transform: translateX(-50%);
		border-radius: 10px;
		header {
			width: 100%;
			height: 60px;
			background: #EFF3F5;
			text-align: center;
			line-height: 60px;
			font-size: 18px;
			position: relative;
			span {
				margin: 0 10px;
				
			}
		}
	}
	
	.position_img {
		position: absolute;
		display: flex;
		right: 20px;
		top: 20px;
		img {
			margin: 0 10px;
			cursor: pointer;
			&.guanchaca{
				    width: 16px;
				    height: 16px;
				    margin-top: 4px;
			}
		}
	}
	
	.opening_body_add {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 20px 30px 50px;
		.op_body_table {
			width: 100%; 
			padding: 19px 0;
			display: flex;
			border-bottom: 1px dotted #CCCCCC; 
			&:nth-child(2) { 
				input {
					width: 127px;
					height: 26px;
					border-bottom: 1px solid @color;
					font-size: 15px;
					color: #CCCCCC;
					box-sizing: border-box;
					padding-left: 14px;
					&.techer_add {
						width: 118px;
						padding: 0;
						margin-right: 50px;
					}
					&.classnum_add {
						width: 225px;
						margin-right: 60px;
					}
				}
				i{
					font-size: 30px;
					color: @color;
					font-weight: 600;
					margin: 0 15px;
				}
				span{
					&.creat_redio_add{
						background: none;
						margin-left: 29px;
	    				margin-top: 6px;
					} 
				}
			}
			/*&:nth-child(3) {
				.op_body_table_rt{
					display: flex;
					flex-direction: column; 
					align-items: flex-start;
					justify-content: center;
					div{ 
						display: flex;
						align-items: center;
						&.first-child{
							margin-bottom : 20px;
						}
						span{
							width: 24px;
							height: 24px;
							background: @color;
							text-align: center;
							line-height: 24px;
							color: #fff;
							border-radius: 50%;
							margin-right: 5px;
						}
						div{
							width: 120px;
							margin-left: 10px; 
						}
						section{
							margin:0 10px;
						}
						p{
							width: 110px;
							margin-left: 10px;
							input{
								width: 40px;
								border-bottom: 2px solid @color;
								margin: 0;
							}
						}
						input{
							width: 80px;
							border-bottom: 1px solid @color;
							font-size: 15px;
							color: #CCCCCC;
							box-sizing: border-box;
							padding-left: 6px;
							margin-left: 20px;
						}
						b{
							width: 20px;
							height: 20px;
							display: block;
							text-align: center;
							line-height: 20px;
							background: #ccc;
							color: red;
							border-radius: 50%;
							margin-left: 14px;
						}
					}
				} 
			}*/
			&:nth-child(3){
				.op_body_table_rt{
					span{
						display: block;
						width: 80px;
						height: 24px;
						color: #000;
						border-radius: 12px;
						background: #F1F5F7; 
						text-align: center;
						line-height: 24px;
						cursor: pointer;
						
						&.greenclass{
							background: @color;
							color: #fff;
						}
					}
				} 
			}
			&:nth-child(4){
				.op_body_table_rt{
					    flex-wrap: wrap;
					span{
						margin: 10px 60px 10px 0 ;
						background: none;
						width: auto;
					}
					b{
						color: orange; 
					}
				} 
			}
			&:nth-child(5){ 
				.op_body_table_rt{
					display: flex;
					flex-wrap: wrap;
					div{
						display: flex;
						flex-wrap: wrap;
						div{
							margin-right: 50px;
							color: #000;
						}
						span{
							padding: 0;
							background: none;
							width: auto;
							margin-top: 20px;
						}
						section{
							margin-left: 64px;
							margin-top: 25px; 
							input{
								width: 30px;
								border-bottom: 1px solid @color;
							}
							img{ 
								vertical-align: middle;
							}
						}
					} 
					
				}
			}
			&:nth-child(6){
				.op_body_table_rt{
					display: flex;
					.flex_just{ 
						margin-left: 20px; 
					}
					b{
						img{
							vertical-align: middle;
						}
					}
				}
			}
		}
		.op_body_table_lt {
			color: @color;
			position: relative;
			display: flex;
    		align-items: center;
			i {
				position: absolute;
				display: block;
				right: -9px;
				top: 10%;
			}
		}
		.op_body_table_rt {
			width: 980px;
			height: 100%;
			margin-left: 30px;
			display: flex;
			align-items: center;
			span {
				display: block;
				width: 166px;
				height: 28px;
				text-align: center;
				line-height: 28px;
				border-radius: 14px;
				margin-right: 20px;
				cursor: pointer;
				color: #000;
				background: #efefef;
				&.shispan {
					background: @color;
					color: #fff;
				}
				&.shispan1 {
					background: #E5F7EF;
					color: #000;
					border: 1px solid @color;
				}
			}
		}
		footer{
			padding-top: 24px;
			display: flex;
			div{
				width: 910px;
				display: flex;
				flex-wrap: wrap;
				margin-left: 20px;
				span{
					margin: 0 40px 12px 0;
				}
			}
		}
		.footer_btn_class{
			width: 100%;
			display: flex; 
			justify-content: center;
			margin-top: 20px;
			p{
				width: 150px;
				height: 36px;
				border-radius: 6px;
				text-align: center;
				line-height: 36px;
				font-size: 16px;
				margin: 0 16px;
				cursor: pointer;
				&:first-child{
					background: #E5F7EF;
					color: @color; 
				}
				&:last-child{
					background: @color;
					color: #fff; 
				}
			}
		}
		.beizhu_classadd{
			margin-top: 20px;
		}
	}
</style>