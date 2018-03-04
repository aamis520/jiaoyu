<template>
	<div>
		<div class="msk" v-if="role"></div>
		<ul class="headquarter_one">
			<li class="chooseDepart">选择部门</li>
			<li>行政部<img  src="../../../assets/images/red.png"></li>
			<li>教务部<img  src="../../../assets/images/red.png"></li>
			<li>财务部<img  src="../../../assets/images/red.png"></li>
			<li>招生部<img  src="../../../assets/images/red.png"></li>
			<li>人事部<img  src="../../../assets/images/red.png"></li>
		</ul>
		<ul class="shenpi">
			<li class="methods">审批方式</li>
			<li>审批流程<img src="../../../assets/images/red.png"></li>
			<li>专人审批<img src="../../../assets/images/red.png"></li>
		</ul>
		<!-- <div class="examine">
			<div class="examine_head bj_white">
				审批设置
			</div>
			<div class="examine_bott bj_white" id="examine_bott">
				<span>流程审批</span>
				<span>固定人员审批</span>
			</div>
			<div class="ask">
				?
			</div>
			<approvalprompt class="acs_prompt"></approvalprompt>
		</div> -->
	    <div class="examinetype">
	    	<div class="examinetype_head bj_white">
	    		审批类型
	    	</div>
	        <ul class="examinetype_bott bj_white">
	        	<li><span>申假</span><img src="../../../assets/setting.png" alt="" @click="declaration(0)"></li>
	        	<li><span>申费</span><img src="../../../assets/setting.png" alt="" @click="declaration(1)"></li>
	        	<li><span>撤销</span><img src="../../../assets/setting.png" alt="" @click="declaration(2)"></li>
	        	<li><span>调货</span><img src="../../../assets/setting.png" alt="" @click="declaration(3)"></li>
	        	<li><span>分校入库</span><img src="../../../assets/setting.png" alt="" @click="declaration(4)"></li>
	        	<li><span>人事审批</span></li>
	        	<li><span>考勤申诉</span></li>
	        	<li><span>优惠制定</span></li>
	        	<li><span>分校宣传</span></li>
	        	<li><span>排课审批</span></li>
	        	<li><span>学生转费</span></li>
	        	<li><span>排课审批</span></li>
	        	<li><span>学生转档</span></li>
	        	<li><span>学生退费</span></li>
	        	<li><span>学生特惠</span></li>
	        	
	        </ul>
	    </div>
		<div class="administration">
			<div class="administration_head bj_white">
				行政部 . 流程审批 . 申假
			</div>
			<ul class="administration_bott bj_white" >
				<li>
					<p>1天以内</p>
					<p> 
						<span>申请人</span>
						<span class="arrow">&nbsp;&rarr;&nbsp;</span>
						<input class="choose-per" type="text" placeholder="选审批人" @click="chooseRole" /> 
						<span class="administration_add">+</span>
					</p>
				</li>
				<!-- <li>
					<p>1天以内</p>
					<p> 
						<span>发起人</span>
						<span class="arrow">&nbsp;&rarr;&nbsp;</span>
						<input type="text" placeholder="选审批人"/> 
						<span class="administration_add">+</span>
					</p>
				</li>
				<li>
					<p>1天以内</p>
					<p> 
						<span>发起人</span>
						<span class="arrow">&nbsp;&rarr;&nbsp;</span>
						<input type="text" placeholder="选审批人"/> 	
						<span class="administration_add">+</span>
					</p>
				</li> -->
			</ul>
			<ul class="sense">
				<li><img src="../../../assets/error.jpg"/></li>
				<li><img src="../../../assets/SmallduiGou.jpg"/></li>
			</ul>
		</div>
	<Vocation   :declarationObj="declarationObj" v-bind:style="{ position:'absolute',top:288+'px',left:posLeft + 'px'}" v-if="isFlag" @closeModal="closeModal"></Vocation>
		 <stock  v-bind:style="{ position:'absolute',top:286+'px',left:692 + 'px'}" v-if="isFlag2" @closeModal="closeModalT"></stock>
		 <div class="Role"><role v-if="role"></role></div>
	</div>
</template>

<script>
	  import  Vocation from '@/page/comprehensive/approvalSetting/common'
	  import  stock from '@/page/comprehensive/approvalSetting/common2'
	  import  role from '@/page/accountNumber/DefiningRoles/headquarters'
	  import approvalprompt from '@/page/comprehensive/approvalSetting/approvalprompt'
	export default {
		data () {
			return {
				isFlag:false,//控制申假，申费等
				isFlag2:false,//控制出库参数
				role:false,
				posLeft:0,
				declarationObj:{thing:'申假',quantity:'天数',amount:'天'}//弹出框参数
			}
		},
		methods:{
			declaration(index){
				if(index != 4){
					this.isFlag = true
					this.isFlag2 = false
					index == 0 ? this.posLeft=18 :index == 1 ? this.posLeft = 190 :index ==2 ? this.posLeft =360 : index == 3 ? this.posLeft= 522 : 8
				}
				else if(index == 4){
					this.isFlag2 = !this.isFlag2;
					this.isFlag = false;
				}
			},
			closeModal(){//关闭前四个申请按钮
				this.isFlag = false;
			},
			closeModalT(){//关闭最后一个申请按钮
				this.isFlag2 = false;
			},
			chooseRole(){//选择角色
				this.role = true;
			}
		},
		components:{
			approvalprompt,Vocation,stock,role
		},
		mounted(){
			$(".headquarter_one li").on("click",function(){
				$(this).children("img").toggle()
				if($(this).find("img").css("display", "block")) {
					$(this).siblings("li").find("img").css("display", "none")
					
				}
			
			});
			$(".shenpi li").on("click",function(){
				$(this).children("img").toggle()
				if($(this).find("img").css("display", "block")) {
					$(this).siblings("li").find("img").css("display", "none")
					
				}
			
			});
			$(".administration_add").on("click",function(){
				console.log("a")
			  $(".administration_bott ").append('<span class="arrow">&nbsp;&rarr;&nbsp;</span><input class="choose-per" type="text" placeholder="选审批人" @click="chooseRole" />')
		    })
		} 
	}
</script>

<style lang="less" scoped>
	*{
		margin: 0; padding: 0; list-style: none;
	}
	.bj_white{
		background: white;
	}
	.msk{
		width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 14px;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
	}
	.Role{
		position:absolute;
		top:0;z-index: 999;
		background: #fff;
	}
	.headquarter_one{
		width: 100%; height: 52px; background: white;
		display: flex; padding-left: 22px;
		.chooseDepart{
			color: #31C27C;
			.dui{
				height: 16px;
				height: 16px;
			}
		}
		li{
			width: 102px; height: 22px; color: #95999C; 
			display: flex; align-items: center; font-size: 14px; 
			border-radius: 12px; margin: 24px 10px 0 0;  cursor: pointer; padding-left: 20px;
			img{
				margin-left: 10px; width: 13px; height: 13px; display: none;
			}
		}
		
	}
	.shenpi{
		width: 100%; height: 52px; background: white;
		display: flex; padding-left: 22px;
			 .methods{
			 	color: #31C27C;
			 }
			li{
			width: 102px; height: 22px; color: #95999C; 
			display: flex; align-items: center; font-size: 14px; 
			border-radius: 12px; margin: 6px 10px 0 0;  cursor: pointer; padding-left: 20px;
			  img{display: none;}
			}

		}
	.examine{
		margin-top: 8px;
		.examine_head{
			width: 100%; height: 50px; border-top-left-radius: 8px;  border-top-right-radius: 8px;
			padding-left: 22px; line-height: 50px; font-size: 14px; color: #5ACE96; 
		}
		.examine_bott{
			width: 100%; height: 72px; margin-top: 2px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;
			display: flex; align-items: center;
			span{
				font-size: 14px; padding: 5px 15px; background: #F0F5F9; border-radius: 20px;
				margin-left: 22px; color: #666666; cursor: pointer; cursor: pointer;
			} 
		}	
		.ask{
			width: 26px; height: 26px;  background: #31c27c; border-radius: 50%; color: white; font-size: 20px;
			display: flex; justify-content: space-around; align-items: center; 
			position: absolute; top: 180px; right: 16px;
		}
		.acs_prompt{
		
			
		}
	}
	.examinetype{
		margin-top: 8px;
		.examinetype_head{
			width: 100%; height: 50px; line-height: 50px; padding-left: 29px; color: #5ACE96; font-size: 14px;
			border-top-left-radius: 8px;  border-top-right-radius: 8px;
		}
		.examinetype_bott{
			width: 100%; height: 190px; margin-top: 2px;  padding-top: 20px;
			
			li{ 
				
				width: 116px; height: 22px; font-size: 14px;  float: left;
				justify-content: center; line-height: 22px; border-radius: 20px; margin-left: 22px; margin-top: 20px;
				 margin-right: 30px; cursor: pointer;
				 span{
				 	background: #F0F5F9;
				 	 color: #7C7D81;
				 	 padding: 4px 16px;
				 	 border-radius: 16px;
				 	} 
				 img{
				 	width: 18px;
				 	height: 18px;
				 	margin-left: 8px;
				 }
			}
		}
	}
	.administration{
		margin-top: 8px;
		.administration_head{
			width: 100%; height: 50px; line-height: 50px; padding-left: 22px; color: #5ACE96; font-size: 14px;
			border-top-left-radius: 8px;  border-top-right-radius: 8px;
		}
		.administration_bott{
			width: 100%;  padding-left: 22px; margin-top: 2px; overflow: hidden; position: relative; padding-top: 20px;
			li{
				width: 100%; margin-bottom: 20px; font-size: 14px; color: #626262; display: flex; 
				p:nth-of-type(1){
					width: 60px;
					
				}
				p:nth-of-type(2){
					margin-left: 90px;
					.arrow{
						font-size: 20px; font-weight: 600px;
					}
					input{
						width: 80px; border: 1px white solid ; border-bottom: 1px red solid ; text-align: center;
						cursor: pointer;
					}
					.administration_add{
					    display: inline-block; width: 18px; height: 18px; border: 1px #31c27c solid ; 
					    text-align: center; line-height: 16px;  color: #31c27c; border-radius: 50%;
					     font-size: 20px; font-weight: 600px; cursor: pointer;
					}
				}
			}
		}
		.sense{
			display: flex; 
			position: absolute;
			right: 0; bottom: 18px;
			li{
				width: 22px;
				height: 22px;
				text-align: center;
				line-height: 22px;
				margin-right: 22px;
				cursor: pointer;
				img{
					width: 100%; height: 100%; 
				}
			}
		}
	}
	
	
	
</style>