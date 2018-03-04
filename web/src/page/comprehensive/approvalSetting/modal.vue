<template>
	<div class="alert-box">
		<div class="header"><span>提示</span></div>
		<div class="notice"><img src="../../../assets/notice.png"></div>
		<div class="bannal"><span>该角色下有多人,找谁审批呢?还是切换到单人角色或者把审批方式调整为"专人审批"吧！</span></div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style lang="less" scoped>
.alert-box{
	 margin-top: 20px;	
	 width: 400px;
	 height: 200px;
     background: #fff;
     border-radius: 8px;
         .header{
      	width: 100%;
      	height: 30px;
      	display: flex;
      	justify-content: center;
      	align-items: center;
      	background: #F0F5F9;
      }
      .notice{
      	text-align: center;
      	margin-top: 40px;
      }
      .bannal{
      	width: 80%;
      	margin: 0 auto;
      	margin-top: 20px;
      	span{
      		color: #7C7D81;
      	    font-size: 12px;
      	}
      	
      }
	}
	
</style>