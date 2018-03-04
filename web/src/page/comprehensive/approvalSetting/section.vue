<template>
	<div>
		<div class="headquarter_one bj_white">
			<ul class="headquarter_two">
				<li>咨询部</li>
				<li>教务部</li>
				<li>财务部</li>
				<li>招生部</li>
				<li>人事部</li>
				<li>咨询一部</li>
				<li>咨询二部</li>
			</ul>
		</div>
		<div class="examine">
			<div class="examine_head bj_white">
				审批方式
			</div>
			<div class="examine_bott bj_white">
				<span>流程审批</span>
				<span>固定人员审批</span>
			</div>
			<div class="ask">
				?
			</div>
		</div>
	    <div class="examinetype">
	    	<div class="examinetype_head bj_white">
	    		审批类型
	    	</div>
	        <ul class="examinetype_bott bj_white">
	        	<li>申假</li>
	        	<li>申费</li>
	        	<li>撤销</li>
	        	<li>调货</li>
	        	<li>出入库审批</li>
	        	<li>总校宣传</li>
	        	<li>人事审批</li>
	        	<li>考勤申诉</li>
	        	<li>学生转费</li>
	        	<li>学生转档</li>
	        	<li>学生退费</li>
	        	<li>排课审批</li>
	        	<li>特殊优惠</li>
	        	<li>发放优惠卷</li>
	        	
	        </ul>
	    </div>
		<div class="administration">
			<div class="administration_head bj_white">
				审批人员
			</div>
			<ul class="administration_bott bj_white" >
				<li>
					<div>
						<span>发起人</span>
						<span class="arrow">&rarr;</span>
						<span>第一审批人</span>
					</div>
					<div>
						<span class="options">咨询主任</span>
						<span class="arrow">&rarr;</span>
						<span>第二审批人</span>
					</div>
					<div>
						选择
					</div>
				</li>
			
				<li>
					<div>
						<span>发起人</span>
						<span class="arrow">&rarr;</span>
						<span>第一审批人</span>
					</div>
					<div>
						<span class="options">咨询主任</span>
						<span class="arrow">&rarr;</span>
						<span>第二审批人</span>
					</div>
					<div>
						选择
					</div>
				</li>
				<li>
					<div>
						<span>发起人</span>
						<span class="arrow">&rarr;</span>
						<span>第一审批人</span>
					</div>
					<div>
						<span class="options">咨询主任</span>
						<span class="arrow">&rarr;</span>
						<span>第二审批人</span>
					</div>
					<div>
						选择
					</div>
				</li>
			</ul>
			<ul class="sense">
				<li><img src="../../../assets/error.jpg"/></li>
				<li><img src="../../../assets/SmallduiGou.jpg"/></li>
			</ul>
		</div>
	
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	*{
		margin: 0; padding: 0; list-style: none;
	}
	.bj_white{
		background: white;
	}
	.headquarter_one{
		width: 100%; height: 112px; 
		.headquarter_two{
			width: 670px; display: flex; padding-left:22px; flex-wrap: wrap; 
			
			li{
				width: 102px; height: 22px; background: #F1F5F8; color: #95999C; 
				text-align: center; line-height: 22px; font-size: 14px; 
				border-radius: 12px;  margin: 24px 10px 0 0;  cursor: pointer;
			}
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
				margin-left: 22px; color: #7C7D81; cursor: pointer;
			} 
		}	
		.ask{
			width: 26px; height: 26px;  background: #31c27c; border-radius: 50%; color: white; font-size: 20px;
			display: flex; justify-content: space-around; align-items: center; 
			position: absolute; top: 180px; right: 16px;
		}
	}
	.examinetype{
		margin-top: 8px;
		.examinetype_head{
			width: 100%; height: 50px; line-height: 50px; padding-left: 22px; color: #5ACE96; font-size: 14px;
			border-top-left-radius: 8px;  border-top-right-radius: 8px;
		}
		.examinetype_bott{
			width: 100%; height: 190px; margin-top: 2px;  padding-top: 20px;
			li{
				width: 103px; height: 22px; font-size: 14px; background: #F0F5F9; color: #7C7D81; float: left;
				text-align: center; line-height: 22px; border-radius: 20px; margin: 20px 30px 0 22px;
				cursor: pointer;
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
			font-size: 14px; color: #626262; 
			.arrow{
				padding: 0 10px;
			}
			li{
				margin-bottom: 20px; display: flex;
				div:nth-of-type(2){
					.options{
						padding: 3px 20px 3px 10px; background: #F0F5F9; border-radius: 10px; margin-left: 13px;
						cursor: pointer;
					}
				}
				div:nth-of-type(3){
					padding: 3px 20px; border: 1px  #31c27c solid ; color: #31c27c; font-size: 14px; border-radius: 13px;
					margin-top: -3px; margin-left: 13px; cursor: pointer;
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