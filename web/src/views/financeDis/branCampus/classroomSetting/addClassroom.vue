<template>
	<div class="add_classroom" :style="{ width: windowWidth + 'px' }">
		<section>
			<div class="add_classroom_first">
				创建教室
				<span @click="closeRoomClick()"><img src="../../../assets/close.jpg" alt="" /></span>
			</div> 
						<!--必需排座  -->
						<ul id="table_list_te" v-if="false">
							<li v-for="(ele,index) in formData" :key="index">
								<span class="span_input_small yuan_span">
                                    <i>{{index+1}}</i>
                                </span>
								<span class="span_input_long">
                                    <input type="text" v-model="ele.name" placeholder="请输入教室名称" class="input_long" />
                                </span>
								<span class="span_input_long">
                                    <input type="text" v-model="ele.num1" class="input_small" /> 排
                                    <input type="text" v-model="ele.num2" class="input_small" /> 列
                                </span>
								<span class="span_input_long">
                                    过道
                                    <input type="text" v-model="ele.num3" class="input_small" /> 条
                                </span>
								<span class="span_input_long">
                                    特座
                                    <input type="text" v-model="ele.num4" class="input_small" /> 个
                                </span>
								<span class="span_input_small">
                                    <b>
                                        {{ele.num1 * ele.num2 - ele.num3 * ele.num2 + Number(ele.num4)}}
                                    </b>
                                    人
                                </span>
								<span class="span_input_small span_last_img">
                                    <img class="last_img" src="../../../../static/home-icon/sds.png" @click="remList(index)"></img>
                                    <img class="last_img" src="../../../assets/add5.png" @click="addList(ele.isImgShow , index )" v-if="ele.isImgShow"></img>
                                </span>
							</li>
							<p href="javascript:;" @click="submitOk" id="sub_button">保存</p>
						</ul>
						<!--无需排座  -->
						<ul id="table_list_teno" v-if="isno">
							<li v-for="(ele,index) in formData2" :key="index">
								<span>
                                    <i>{{index+1}}</i>
                                </span>
								<span>
                                    <!-- <input type="text" v-model="ele.room_name" placeholder="请输入教室名称"  v-if="newdata.isxiugai" readonly="readonly"/> -->
                                    <input type="text" v-model="ele.room_name" placeholder="请输入教室名称"  />
                                </span>
								<span>
                                 		   容纳
                                    <input type="text" v-model="ele.valid_num" /> 人
                                </span>
								<span>
                                    <img class="last_img" src="../../../../static/home-icon/sds.png" @click="remList2(index)" v-if="index != 0"></img>
                                    <img class="last_img" src="../../../assets/add5.png" @click="addList2(ele.isImgShow , index )" v-if="ele.isImgShow && !isxiugai"></img>
                                </span>
							</li>
							<p href="javascript:;" @click="submitOk2" id="sub_button2">保存</p>
						</ul>  
			<div class="radio_div" v-if="false">
				<span @click="noArray" :class="{spanactive : isno == true}">
                    <i v-if="isno"></i>
                </span> 无需排座
			</div>
		</section>
	</div>
</template>

<script>
	import cont from '../../../common/const'
	import qs from "qs"
	export default {
		name: "",
		props: {
			closeRoom: {},
			newdata: {},
			showChildToParentMsg: {}
		},
		data() {
			return {
				windowWidth: 0,
				activeName2: 'first',
				isno: true,
				isxiugai: this.newdata.isxiugai,
				headSchoolId: this.$ls.get("USER_INFO").headSchoolId,
				formData: [{
					name: "",
					num1: 0,
					num2: 0,
					num3: 0,
					num4: 0,
					isImgShow: true
				}],
				formData2: [{
					room_name: "",
					valid_num: "",
					isImgShow: true
				}]
			}
		},
		methods: {
			/**
			 * 调用父组件关闭
			 */
			closeRoomClick() {
				this.$emit("closeRoom")
			},

			/**
			 * 切换模式
			 */
			handleClick(tab, event) {
				//console.log(tab, event);
			},

			/**
			 * 是否排序
			 */
			noArray() {
				//this.isno = !this.isno
			},

			/**
			 * 添加新的班级
			 */
			addList(res, index) {
				this.formData[index].isImgShow = false
				this.formData.push({
					name: "",
					num1: 0,
					num2: 0,
					num3: 0,
					num4: 0,
					isImgShow: true
				})
			},
			addList2(res, index) {
				this.formData2[index].isImgShow = false
				this.formData2.push({
					room_name: "",
					valid_num: 0,
					isImgShow: true
				})
			},

			/**
			 * 删除添加的班级
			 */
			// remList(index) {
			//     if (this.formData.length > 1) {
			//         this.formData.splice(index, 1)
			//         const l = this.formData.length - 1
			//         this.formData[l].isImgShow = true
			//     }
			// },
			remList2(index) {
				if(this.formData2.length > 1) {
					this.formData2.splice(index, 1)
					const l = this.formData2.length - 1
					this.formData2[l].isImgShow = true
				}
			},

			/**
			 * 保存添加班级
			 */
			// submitOk() {
			//     this.$emit("closeRoom")
			// },
			submitOk2() {
				let pageInitUrl = cont.campus + "v1/campus/classroom/insertOrUpdateClassRoomInfo?accessToken=aaaa"
				/**
				 * 判断是否为添加
				 */
				if(this.newdata.isxiugai) {
					var pageInitparmes = [{
						"id": this.formData2[0].id,
						"room_name": this.formData2[0].room_name,
						"type": "class",
						"row_num": this.formData2[0].row_num,
						"col_num": this.formData2[0].col_num,
						"aisle_num": this.formData2[0].aisle_num,
						"special_num": this.formData2[0].special_num,
						"valid_num": this.formData2[0].valid_num,
						"school_id": this.formData2[0].school_id,
						"head_school_id": this.formData2[0].head_school_id,
						"is_delete": this.formData2[0].is_delete,
						"seat_list": this.formData2[0].seat_list
					}]
				} else {
					var pageInitparmes = []
					this.formData2.map((ele, index) => {
						var newobj = {}
						newobj.room_name = ele.room_name
						newobj.valid_num = ele.valid_num
						newobj.head_school_id = ele.head_school_id
						newobj.type = "class"
						newobj.school_id = "2"
						newobj.is_delete = false
						newobj.seat_list = []
						pageInitparmes.push(newobj)
					})
				}

				/**
				 * 先简单判断不能为空才请求
				 */
				if(this.formData2[0].room_name != "" && this.formData2[0].valid_num != "" && this.formData2[0].valid_num > 0) {
					var that = this
					this.axios.post(pageInitUrl, pageInitparmes)
						.then(res => {
							
								/**
								 * 判断班级是否重名
								 * */
								if(res.data.errorcode == 1004004) {
									that.$emit("showChildToParentMsg")
									that.$emit("closeRoom")
									that.$store.commit('classTableTrueClick' , 1004004)
								}
								/**
									添加修改信息后重新请求父组件中的刷新当前页面的数据
								 */
								that.$emit("showChildToParentMsg")
								that.$emit("closeRoom")
							},
							res => {
								alert("网络繁忙 ！请刷新重试 ！")
							})
				} else {
					alert("您所填写的信息有误")
				}

			}
		},
		mounted() {
			this.windowWidth = document.documentElement.clientWidth
			/**
			 * 如果是修改自动添加内容
			 */
			if(this.newdata.isxiugai) {
				this.formData2[0] = this.newdata
				this.formData2[0].isImgShow = true
			}

		}
	}
</script>

<style lang="less" scoped>
	body {
		overflow: hidden;
	}
	
	.add_classroom {
		height: 2000px;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
		section {
			width: 748px;
			height: 620px;
			background: #fff;
			position: absolute;
			box-sizing: border-box;
			top: 200px;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 10px;
			.add_classroom_first {
				width: 100%;
				height: 60px;
				background: #EFF3f5;
				text-align: center;
				line-height: 60px;
				font-size: 16px;
				font-weight: 400;
				position: relative;
				span {
					position: absolute;
					right: 20px;
					font-size: 30px;
					font-weight: 100;
					cursor: pointer;
				}
			}
			.el-tabs__nav-scroll {
				background: #fff;
			}
		}
	}
	
	.radio_div {
		position: absolute;
		top: 84px;
		right: 44px;
		display: flex;
		font-size: 16px;
	}
	
	.radio_div span {
		display: block;
		width: 20px;
		height: 20px;
		background: #ccc;
		border-radius: 50%;
		margin-right: 6px;
	}
	
	.radio_div span i {
		display: block;
		width: 10px;
		height: 10px;
		background: #fff;
		border-radius: 50%;
		margin: 0 auto;
		margin-top: 50%;
		transform: translateY(-50%);
	}
	
	.radio_div span.spanactive {
		background: #31c27c;
	}
	
	#table_list_te {
		width: 100%;
		box-sizing: border-box;
		padding-bottom: 100px;
		position: relative;
		min-height: 550px;
		li {
			display: flex;
			align-items: center;
			height: 58px;
			border-bottom: 1px solid #ccc;
			overflow: hidden;
			span {
				display: flex;
				justify-content: center;
				color: #aaa;
				font-size: 16px;
				&.span_input_long {
					width: 18%;
				}
				&.span_input_small {
					width: 8%;
				}
				&.span_last_img {
					justify-content: flex-start;
				}
				&.yuan_span i {
					display: block;
					width: 30px;
					height: 30px;
					border-radius: 50%;
					background: #31c27c;
					font-size: 16px;
					color: #fff;
					text-align: center;
					line-height: 30px;
				}
				img {
					margin-left: 10px;
					cursor: pointer;
				}
				b {
					color: #31c27c;
					margin: 0 4px;
				}
			}
			input {
				border-bottom: 2px solid #ccc;
				text-align: center;
				margin: 0 4px;
				font-size: 16px;
				color: #31c27c;
				&.input_small {
					width: 30px;
				}
				&.input_long {
					width: 100%;
				}
			}
		}
		#sub_button {
			display: block;
			width: 120px;
			height: 40px;
			cursor: pointer;
			border: none;
			background: #31c27c;
			text-align: center;
			line-height: 40px;
			color: #fff;
			margin: 0 auto;
			position: absolute;
			bottom: 40px;
			left: 50%;
			transform: translateX(-50%)
		}
	}
	
	#table_list_teno {
		width: 100%;
		box-sizing: border-box;
		padding-bottom: 100px;
		position: relative;
		min-height: 550px;
		li {
			display: flex;
			align-items: center;
			height: 58px;
			border-bottom: 1px solid #ccc;
			overflow: hidden;
			span {
				display: flex;
				justify-content: center;
				color: #aaa;
				font-size: 14px;
				input {
					border-bottom: 1px solid #ccc;
					text-align: center;
					margin: 0 4px;
					font-size: 14px;
					color: #31c27c;
				}
				&:nth-child(1) {
					margin-left: 30px;
				}
				&:nth-child(2) {
					width: 22%;
					input {
						width: 100%;
						margin-left: 34px;
						border: none;
					}
				}
				&:nth-child(3) {
					width: 56%;
					justify-content: flex-start;
					box-sizing: border-box;
					padding-left: 50px;
					input {
						width: 50px;
					}
				}
				&:nth-child(4) {
					width: 10%;
					justify-content: flex-start;
					margin-left: 40px;
				}
				i {
					display: block;
				    width: 27px;
				    height: 26px;
				    border-radius: 50%;
				    background: #31c27c;
				    font-size: 14px;
				    color: #fff;
				    text-align: center;
				    line-height: 26px;
				}
				img {
					margin-left: 10px;
					cursor: pointer;
				}
			}
		}
		#sub_button2 {
			display: block;
			width: 120px;
			height: 40px;
			cursor: pointer;
			border: none;
			background: #31c27c;
			text-align: center;
			line-height: 40px;
			color: #fff;
			margin: 0 auto;
			position: absolute;
			bottom: 40px;
			left: 50%;
			transform: translateX(-50%)
		}
	}
</style>