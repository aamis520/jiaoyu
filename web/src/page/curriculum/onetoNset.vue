<template>
	<div id="a">    
 
		
		  <div class="box1">
		  	<p class="text">
			<span>语文</span>
			<span  @click="bianji()">
				<img src="../../assets/edit.png" class="delete"/>
				<img src="../../assets/confirm_normal.png" class="yes"/>
			</span>
			</p>
			<div class="container">
				<span class="item">
					<span class="it1">初一语文</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">初二语文</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">初三语文</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">高一语文</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">高二语文</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">高三语文</span>
					<span class="iconfont icon-2"></span>
				</span>
			</div>
		</div>
				
				
				 <div class="box1">
		  	<p class="text">
			<span>数学</span>
			<span @click="bianji()">
				<img src="../../assets/edit.png" class="delete"/>
				<img src="../../assets/confirm_normal.png" class="yes"/>
			</span>
			</p>
			<div class="container">
				<span class="item">
					<span class="it1">初一数学</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">初二数学</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">初三数学</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">高一数学</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">高二数学</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">高三数学</span>
					<span class="iconfont icon-2"></span>
				</span>
				<div class="bott">
	   	<router-link :to="{path:'/curriculum/onetoNset/onetoNsetyi'}">
   	  		
        	<img src="../../assets/addbutton_normal.png"/>
      </router-link>
	   </div>
			
			</div>
			
	
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				show:false
			}
		},
	
		
		mounted:function(){
			$(".icon-2").click(function(){
				$(this).parent().css("display","none");
			});
			$(".delete").click(function(){
				$(".delete").hide()
			});
			$(".delete").click(function(){
				$(".yes").show()
			});
		},
		methods:{
			bianji:function(){
					$(".icon-2").css("visibility","visible");
			}
		}
	}
</script>

<style scoped>
	*{
		font-size: 14px;
		
	}
	span{
		display: inline-block;
	}
	.yes{
		display: none;
	}
	.box1{
		/*padding: 0 30px;*/
		width: 1008px;
		height: 150px;
		background: white;
		border-radius: 4px;
		margin-bottom: 12px;
		padding: 0 30px;
	}
	
	.text{
		display: flex;
		justify-content: space-between;
		height: 50px;
		color: #5ACE96;
		line-height: 50px;
	    margin: 0 auto;
		border-bottom: 1px dashed #EEEEEE;
	}
	.container{
		height: 50px;
		line-height:50px;
	}
	.item{
		margin: 0 16px 20px 0px;
	}
	.icon-2{
		font-size: 18px;
		color: #B9B9B9;
		visibility: hidden;
		cursor: pointer;
	}
	.it3{
		width: 22px;
		height: 22px;
		line-height: 22px;
		text-align: center;
		border-radius: 50%;
		border: 1px solid #50D79F;
	}
	
	.right{
		font-size: 24px;
		color: #50D79F;
		margin-left: 880px;
		cursor: pointer;
	}
	.bott:after{
		content: "";
		clear: both;
	}
	.bott img{
		margin-top: -90px;
		margin-left: 840px;
	}
</style>