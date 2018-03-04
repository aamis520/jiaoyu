<template>
	<div>
		<div class="compile">
			<img src="../../../assets/search-green.png" alt="">
		    <img src="../../../assets/help.png" alt="">
		  </div>
		<div class="moddleFirst-over">
	   	<p class="over-one">
	   		<span>17春开学大优惠</span>
	   		<span>已过期	   			
	   		</span>
	   	</p>
	  <p>
	  	<span>教工子弟</span>
	  	<span>教工子弟</span>
	  	<span>教工子弟</span>
	  	<span>教工子弟</span>
	  </p> 	
	   	
	   <p>
	   	<span>适用范围</span>
	   	<span>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		
	   	</span>
	   </p>	
	   	
	   </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1:true
			}
		}
	}
</script>

<style lang="less" scoped> 
.compile{
    position: absolute;
    right:30px;
    top: -45px;
    cursor: pointer;
    img:nth-child(1){
    	margin-right: 15px;
    }
  }
		.moddleFirst-over{
		background: white;
		border-radius: 4px;
		padding: 0 30px;
		p:nth-child(1){
		    line-height:50px;
		    display: flex;
		    justify-content: space-between;
		    span:nth-child(1){
		    	color: #31C27C;
		    }span:nth-child(2){
		    	color:red;
		    }
 		}
 		p:nth-child(2){
 			line-height: 50px;
 		span{
 				display: inline-block;
 				width: 100px;
 				height: 24px;
 				border: 1px solid #31C27C;
 				border-radius: 20px;
 				text-align: center;
 				line-height: 24px;
 				background: #e5f8ef;
 				color: #31C27C;
 				margin-right: 10px;
 				 			
 				 			}
 		}
 		p:nth-child(3){
 			width: 100%;
 			display: flex;
 			line-height: 40px;
 			/*justify-content: space-between;*/
 			span{
 				display: block;
 			}
 			span:nth-child(1){
 				color: #31C27C;
 				width: 12%;
 			}
 			span:nth-child(2){
 				width: 88%;
 				
 				i{
 					margin-right:18px;
 				}
 			}
 		}
	}
</style>