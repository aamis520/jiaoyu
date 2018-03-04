<template>
	<div>
		<div class="schoolType_head">
			<ul>
				<li class="schoolType_first">
					<i><img src="../../assets/dunhangjiaoyu-one.png"/></i>
					<div class="schoolType_complete">
						<p>本校全称:<input type="text" class="one" /></p>
						<p>本校简称:<input type="text" class="two" /></p>
						<p class="yes">选择课程:
							<span @click="status1=!status1">班级课 </span>
							<span @click="status2=!status2">对一课</span>
							<span @click="status3=!status3">对N课</span>
							<span @click="status4=!status4">托管课</span>
						</p>
						<span class="right" :style="{backgroundImage:'url('+img+')'}"></span>

					</div>
					<div class="schoolType_modify">
						<p>本校全称:<span class='one_text2'></span></p>
						<p>本校简称:<span class='two_text2'></span></p>
						<p class="item_span">选择课程:
							<span v-for="item1 in arr1" v-if="item1.is_check">{{item1.name}}</span>
							<!--<span v-if="true">对一课</span>
							<span v-if="false">对N课</span>
							<span v-if="">托管课</span>-->
						</p>
						<span class="modify">修改</span>
					</div>
				</li>
				<!--<p class="schoolType_one"> <img :src="data[0].image_uri"/> </p>-->
				 <p class="schoolType_one"> <img src="../../assets/images/dunhangjiaoyu-3.png"/></p>

				<li class="schoolType_second">
					<i> <img src="../../assets/dunhangjiaoyu-three.png"/></i>
					<div class="schoolType_completesecond">
						<p>本校全称:<input type="text" class="first" /></p>
						<p>本校简称:<input type="text" class="second" /></p>
						<p class="yeser">选择课程:
							<span @click="status1=!status1">班级课 </span>
							<span @click="status2=!status2">对一课</span>
							<span @click="status3=!status3">对N课</span>
							<span @click="status4=!status4">托管课</span>
						</p>
						<span class="edit" :style="{backgroundImage:'url('+img+')'}"></span>
					</div>
					<div class="schoolType_edit">
						<p>本校全称:<span class='one_text3'></span></p>
						<p>本校简称:<span class='two_text3'></span></p>
						<p>选择课程:</p>
						<span class="modifity">修改</span>
					</div>
				</li>
				<p class="schoolType_two"> <img src="../../assets/dunhangjiaoyu-1.png" /></p>

				<li class="schoolType_third">
					<i>  <img src="../../assets/dunhangjiaoyu-two.png"/>  </i>

					<div class="schoolType_completethird">
						<p>本校全称:<input type="text" class="third" /></p>
						<p>本校简称:<input type="text" class="fourth" /></p>
						<p class="yeser">选择课程:
							<span @click="status1=!status1">班级课 </span>
							<span @click="status1=!status1">对一课</span>
							<span @click="status1=!status1">对N课</span>
							<span @click="status1=!status1">托管课</span>
						</p>
						<span class="editer" :style="{backgroundImage:'url('+img+')'}"></span>
					</div>
					<div class="schoolType_editer">
						<p>本校全称:<span class='one_text4'></span></p>
						<p>本校简称:<span class='two_text4'></span></p>
						<p>选择课程:</p>
						<span class="modifythree">修改</span>
					</div>
				</li>
				<p class="schoolType_three"><img src="../../assets/dunhangjiaoyu-2.png" /></p>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				structure_type: "",
				head_school_code: "",
				head_school_name: "",
				short_name: "",
				data: [],
				message: "",
				img: require('../../assets/confirm_normal.png'),
				status1: false,
				status2: false,
				status3: false,
				status4: false,
				arr1:'',
				arr2:'',
				arr3:''
			}
		},
		beforeCreate() {},
		
		mounted() {
			var _this=this;
//			this.axios.post("/api/api-gsst/v1/campus/getCampusTypes?headSchoolId=1&accessToken=111").then((res) => {
//				this.data = res.data;
//				console.log("学校初始化类型", this.data);
//			}).catch(function(error) {
//				console.log(error)
//			});
			
			
			$(".yes>span").on('click', function() {
				if($(this).hasClass("bg")) {
					$(this).removeClass("bg");
				} else {
					$(this).addClass("bg");
				}
			});
			$(".schoolType_one").click(function() {
				$(".schoolType_one").hide();
				$(".schoolType_first").show()
			});

			$(".modify").click(function() {
				$(".schoolType_complete").show();
				$(".schoolType_modify").hide()
			});
			
			$(".right").on("click", function() {
				// 点击对勾，把输入框的值放入隐藏域中；
				$(".schoolType_complete").hide();
				$(".schoolType_modify").show();
				$(".one_text2").text($(".one").val());
				$(".two_text2").text($(".two").val());
				
				
				//H-B结构类型提交======================
				var schoolName=$(".one").val();
				var easyName=$(".two").val();
				var random1 = parseInt(Math.random()*100);
				var url="/api/api-gsst/v1/campus/addHeadSchool?accessToken=aaaa";				
				var jsonParam= {
					"head_school_code": random1, 
					"head_school_name": schoolName, 
					"short_name": easyName, 
					"structure_type": "H-B",
					"course_type_list": [
						{ "type": "1", "name": "班级课", "is_check": _this.status1}, 
						{ "type": "2", "name": "对一课", "is_check": _this.status2},
						{ "type": "3", "name": "对N课", "is_check": _this.status3},
						{ "type": "4", "name": "托管课", "is_check": _this.status4}
					]
				};
				_this.axios.post(url,jsonParam).then((res)=>{
					this.data=res.data;
					console.log("增加总校信息",this.data);
					_this.arr1=res.data.messages.data.course_type_list;
				})
				alert(_this.status1)
			
				
			});
			$(".yes>span").click(function() {
				$(this).find("img").toggle()
			});
			$(".yeser>span").on('click', function() {
				if($(this).hasClass("bg")) {
					$(this).removeClass("bg");
				} else {
					$(this).addClass("bg");
				}
			});
			$(".schoolType_two").click(function() {
				$(".schoolType_two").hide();
				$(".schoolType_second").show()
			});
			$(".edit").click(function() {
				$(".schoolType_completesecond").hide();
				$(".schoolType_edit").show()
			});
			$(".modifity").click(function() {
				$(".schoolType_completesecond").show();
				$(".schoolType_edit").hide()
			});
			$(".edit").on("click", function() {
				// 点击对勾，把输入框的值放入隐藏域中；
				$(".one_text3").text($(".first").val());
				$(".two_text3").text($(".second").val());
				
				//H-A-B结构类型=======================
				var schoolName=$(".first").val();
				var easyName=$(".second").val();
				var url="/api/api-gsst/v1/campus/addHeadSchool?accessToken=aaaa";				
				var jsonParam= {
					"head_school_code": "h001", 
					"head_school_name": schoolName, 
					"short_name": easyName, 
					"structure_type": "H-A-B",
					"course_type_list": [
						{ "type": "1", "name": "班级课", "is_check": true }, 
						{ "type": "2", "name": "对一课", "is_check": true },
						{ "type": "3", "name": "对N课", "is_check": true },
						{ "type": "4", "name": "托管课", "is_check": false }
					]
				};
				_this.axios.post(url,jsonParam).then((res)=>{
					this.data=res.data;
					
					console.log(1212123,this.data)
				})
				
				
				$(".first").val('');
				$(".second").val('');
			});

			$(".schoolType_three").click(function() {
				$(".schoolType_three").hide();
				$(".schoolType_third").show()
			});
			$(".editer").on("click", function() {
				// 点击对勾，把输入框的值放入隐藏域中；
				$(".schoolType_editer").show();
				$(".schoolType_completethird").hide();
				$(".one_text4").text($(".third").val());
				$(".two_text4").text($(".fourth").val());
				

				//H-R-A-B结构类型======================
				var schoolName=$(".third").val();
				var easyName=$(".fourth").val();
				var url="/api/api-gsst/v1/campus/addHeadSchool?accessToken=aaaa";				
				var jsonParam= {
					"head_school_code": "h001", 
					"head_school_name": schoolName, 
					"short_name": easyName, 
					"structure_type": "H-R-A-B",
					"course_type_list": [
						{ "type": "1", "name": "班级课", "is_check": true }, 
						{ "type": "2", "name": "对一课", "is_check": true },
						{ "type": "3", "name": "对N课", "is_check": true },
						{ "type": "4", "name": "托管课", "is_check": false }
					]
				};
				_this.axios.post(url,jsonParam).then((res)=>{
					this.data=res.data;
					console.log(1212123,this.data)
				})
				
				$(".third").val('');
				$(".fourth").val('');
			});
			$(".modifythree").click(function() {
				$(".schoolType_editer").hide();
				$(".schoolType_completethird").show()
			});
		}
	}
</script>
<style lang="less" scoped>
	* {
		margin: 0;
		padding: 0;
		font-size: 14px;
		color: #666;
		font-family: "微软雅黑";
	}
	
	.schoolType_second {
		position: relative;
		display: none;
		width: 1008px;
		height: 240px;
	}
	
	.schoolType_first {
		position: relative;
		display: none;
		width: 1008px;
		height: 240px;
	}	
	.bg {
		background-image: url(../../assets/duiHao.jpg);
		background-repeat: no-repeat;
		background-position: right;
	}
	.schoolType_complete {
		position: absolute;
		right: 30px;
		top: 40px;
		z-index: 1;
		line-height: 50px;
		input {
			width: 340px;
		}
		.right {
			margin-left: 520px;
			display: inline-block;
			width: 20px;
			height: 20px;
			background-size: 100%;
		}
		p:nth-child(3) {
			span {
				display: inline-block;
				width: 76px;
				margin-left: 10px;
			}
			img {
				display: none;
			}
		}
	}
	
	.schoolType_completesecond {
		position: absolute;
		right: 30px;
		top: 40px;
		z-index: 1;
		line-height: 50px;
		input {
			width: 340px;
		}
		.edit {
			margin-left: 520px;
			display: inline-block;
			width: 20px;
			height: 20px;
			background-size: 100%;
		}
		p:nth-child(3) {
			span {
				display: inline-block;
				width: 76px;
				margin-left: 10px;
			}
			img {
				display: none;
			}
		}
	}
	
	.schoolType_modify {
		display: none;
		position: absolute;
		right: 30px;
		top: 40px;
		z-index: 1;
		line-height: 50px;
		input {
			width: 340px;
		}
		.modify {
			margin-left: 520px;
		}
	}
	
	.schoolType_edit {
		display: none;
		position: absolute;
		right: 30px;
		top: 40px;
		z-index: 1;
		line-height: 50px;
		input {
			width: 340px;
		}
		.modifity {
			margin-left: 520px;
		}
	}
	
	input {
		border-bottom: 1px solid #31c27c;
	}
	
	.bg2 {
		background-image: url(../../assets/images/dunhangjiaoyu-3.png);
		background-repeat: no-repeat;
		background-position: center;
	}
	
	.schoolType_first {
		width: 1008px;
		height: 240px;
	}
	
	.schoolType_editer {
		display: none;
		position: absolute;
		right: 27px;
		top: 40px;
		z-index: 1;
		line-height: 50px;
		input {
			width: 340px;
		}
		.modifythree {
			margin-left: 460px;
		}
	}
	
	.schoolType_third {
		position: relative;
		display: none;
		width: 1008px;
		height: 240px;
	}
	
	.schoolType_completethird {
		position: absolute;
		right: 30px;
		top: 40px;
		z-index: 1;
		line-height: 50px;
		input {
			width: 340px;
		}
		.editer {
			margin-left: 520px;
			display: inline-block;
			width: 20px;
			height: 20px;
			background-size: 100%;
		}
		p:nth-child(3) {
			span {
				display: inline-block;
				width: 76px;
				margin-left: 10px;
			}
			img {
				display: none;
			}
		}
	}
	.item_span>span{
		margin-right: 20px;
	}
</style>