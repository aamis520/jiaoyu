<template>
	<div class="box">
		<div class="nullx" id="nullx">
	       <img src="../../assets/bg1.jpg" alt="" class="bg">
	       <span class="add" id="add"><img src="../../assets/addbutton_normal.png"></span>
	    </div>
	    <div class="fullx" id="fullx">
	      <ul class="setlist set">
			<li>
				<span class="number">01</span>
				<div class="studentinfo">
					<div class="registration">
						<span>17夏河定桥中心学员登记表</span>
						<p class="handle">
							<img src="../../assets/edit.png" class="compile" />
							<img src="../../assets/trash.png" class="trash" />
						</p>
					</div>
					<div class="minute">
						<p class="left">
							<span class="obj">西三旗校区-咨询部、西直门校区-咨询部、信息路校区-咨询部</span> 
							<span>西三旗校区</span>
						</p>
					</div>
				</div>
			</li>
			<li>
				<span class="number">02</span>
				<div class="studentinfo">
					<div class="registration">
						<span>17夏河定桥中心学员登记表</span>
						<p class="handle">
							<img src="../../assets/edit.png" class="compile" />
							<img src="../../assets/trash.png" class="trash" />
						</p>
					</div>
					<div class="minute">
						<p class="left">
							<span class="obj">西三旗校区-咨询部、西直门校区-咨询部、信息路校区-咨询部</span> 
							<span>西三旗校区</span>
						</p>
					</div>
				</div>
			</li>
			<li>
				<span class="number">03</span>
				<div class="studentinfo">
					<div class="registration">
						<span>17夏河定桥中心学员登记表</span>
						<p class="handle">
							<img src="../../assets/edit.png" class="compile" />
							<img src="../../assets/trash.png" class="trash" />
						</p>
					</div>
					<div class="minute">
						<p class="left">
							<span class="obj">西三旗校区-咨询部、西直门校区-咨询部、信息路校区-咨询部</span> 
							<span>西三旗校区</span>
						</p>
					</div>
				</div>
			</li>
			<li>
				<span class="number">04</span>
				<div class="studentinfo">
					<div class="registration">
						<span>17夏河定桥中心学员登记表</span>
						<p class="handle">
							<img src="../../assets/edit.png" class="compile" />
							<img src="../../assets/trash.png" class="trash" />
						</p>
					</div>
					<div class="minute">
						<p class="left">
							<span class="obj">西三旗校区-咨询部、西直门校区-咨询部、信息路校区-咨询部</span> 
							<span>西三旗校区</span>
						</p>
					</div>
				</div>
			</li>
			<li class="add" id="add2">
				<img src="../../assets/addbutton_normal.png" class="addbutton" />
			</li>
		  </ul>
	    </div>
	    <div class="fullx2" id="fullx2">
	      <div class="setting">
			<ul class="common settingTitle">
		        <li v-on:click="toggle(tab.index,tab.view)" v-for="tab in tabs" :class="{active:active==tab.index}">
		        	{{tab.type}} 
		        </li>
		    </ul>
			<component :is="currentView"></component>
	      </div>
	    </div>
	     
	    <div class="shade" id="shade1">
	      <div class="hint">
			<p class="hint-title"><span>提示</span><img src="../../assets/fork.png" class="closehint"/></p>
			<img class="notice" src="../../assets/notice.png">
			<p class="hint-text">您确定要删除本模板吗？</p>
			<p class="hint-sure">
				<img class="cancel" src="../../assets/cancel.png">
				<img class="ok" src="../../assets/confirm_normal.png">
			</p>
		  </div>
	    </div> 
	   
	</div>
</template>
<script>
import studentinfo from "@/page/comprehensive/studentinfo"
	import classcourse from "@/page/comprehensive/classcourse"
	import vipcourse from "@/page/comprehensive/vipcourse"
	import teacherinfo from "@/page/comprehensive/teacherinfo"
	export default{
		data () {
			return {
				goodList: [],
				middleList: [],
				shortList: [],
				heartenList: [],
				suggestList: [],
				good: "",
				middle: "",
				short: "",
				hearten: "",
				suggest: "",
				number: "",
				active: 0, 
			 	currentView: "studentinfo", 
			 	tabs: [ 
			 		{
			 			index: 0,
				  		type: '学生信息', 
				  		view: "studentinfo"
			 		},  
			 		{  
			 			index: 1,
			  			type: '班级课程', 
			  			view: "classcourse"
			 		},  
			 		{  
			 			index: 2,
			  			type: 'VIP课程', 
			  			view: "vipcourse"
			 		} ,  
			 		{  
			 			index: 3,
			  			type: '教师信息', 
			  			view: "teacherinfo"
			 		}  
			 	] 
			}
		},
		components: {
			studentinfo: studentinfo,
			classcourse: classcourse,
			vipcourse: vipcourse,
			teacherinfo: teacherinfo
		},
		methods: {
			emptyHandle: function () {
				$(".good-list").html("");
				$(".add").val("");
			},
			toggle: function (index, view) { 
		 		this.active = index 
		 		this.currentView = view
		 	} 
		},
		mounted(){
			 $("#add").click(function(){
		        $("#nullx").hide();
		        $("#fullx").show();
		    });
			 $("#add2").click(function(){
		        $("#fullx").hide();
		        $("#fullx2").show();
		    });
			 $(".trash").click(function(){
			 	$("#shade1").show();
			 	$(".hint").show();
			 });
			 $(".closehint").click(function(){
			 	$("#shade1").hide();
			 	$(".hint").hide();
			 });
			 var _this = this;
           	$(".ok").click(function(){
           		// if (true) {}
           	});
           	$(".cancel").click(function(){
           		$(".hint").hide();
				$(".shade").hide();
           	});
           	$(".closehint").click(function () {
				$(".hint").hide();
				$(".shade").hide();
			});
           	$(".addbutton").click(function () {
           		$(this).parents(".set").hide();
           	});
		}
	}
</script>
<style lang="less" scoped>
	.box{
	 cursor: pointer;
    .nullx{
	      width: 1008px;
	      height: 200px;
	      border-radius: 5px;
	      background: #fff;
	      position: relative;
	      .add{
	        position: absolute;
	        right:40px;
	        bottom:10px;
	      }
	}
    .fullx{
	    width: 1008px;
	    border-radius: 5px;
	    display: none;
	    position: relative;
	    background: #fff;
	    .setlist{
	    	width: 1008px;
	    	height: 700px;
			background: #fff;
			border-radius: 3px;
			color: #666;
			font-size: 14px;
			padding-bottom: 30px;
			position: relative;
		.add{
			border: 0;
			position: absolute;
			bottom: 0;
			right:10px;
		}
		li{
			border-bottom: 1px dashed #eee;
			margin: 0 30px;
			padding: 20px 0;
			display: flex;
			.number{
				font-size: 14px;
				width: 30px;
				height: 30px;
				border-radius: 50%;
				background:#5bdc88;
				line-height: 30px;
				text-align: center;
				color: #ffffff;
				font-weight: bold;
				font-family: "Times New Roman";
				margin-right: 18px;
			}
			.studentinfo{
				.registration{
					display: flex;
					justify-content: space-between;
					width: 900px;
					margin-bottom: 13px;
				}
				.minute{
					color: #a0a0a0;
					.left{
						float: left;
						.obj{
							margin-right: 26px;
						}
					}
				}
			}
		}
	   }
}
	#fullx2{
		display: none; 
		.setting{
			border-radius: 3px;
			margin-bottom: 12px;
			font-size: 14px;
			color: #666666;
			position: relative;
			margin-left: 2px;
			width: 1008px;
			.settingTitle{
			background: #ffffff;
			border-top-right-radius: 3px;
			border-top-left-radius: 3px;
			height: 57px;
			line-height: 57px;
			border-bottom: 1px dashed #eee;
			font-size: 14px;
		}
		.consult{
			margin-left:30px;
		}
		.common{
			padding: 16px 30px 30px 180px;
			padding-top: 16px;
			padding-left: 180px;
			li{
				float: left;
				margin-left: 40px;
				cursor: pointer;
				width: 102px;
				height: 24px;
				line-height: 24px;
				background-color: #f2f5f8;
				border-radius: 10px;
				text-align: center;
			}
			.active{
				background: #31c27c;
				color: #ffffff;
			}
		  }
		}
		
    }
    .shade{
		position: fixed;
		width: 100%;
		height: 100%;
		top:0;
		left: 0;
		background: rgba(0,0,0,0.5);
		display: none;
		.hint{
			width: 380px;
			height: 220px;
			background-color: #ffffff;
			border-radius: 4px;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -110px;
			margin-left: -190px;
			box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
			p{
				color: #666;
				text-align: center;
				font-size: 14px;
				line-height: 26px;
			}
			.notice{
				margin:30px 45% 10px 45%; 
			}
			.hint-title{
				height: 50px;
				border-top-right-radius: 4px;
				border-top-left-radius: 4px;
				background-color: #f2f5f8;
				line-height: 50px;
				font-size: 18px;
				color: #333;
				position: relative;
				text-align: center;
				.closehint{
					color: #bfbfcd;
					vertical-align: middle;
					position: absolute;
					right: 20px;
					top:15px;
				}
			}
			.hint-sure{
				margin-top: 10px;
				.ok{
					margin-left: 18px;
				}
			}
		}
	}

	
}

</style>