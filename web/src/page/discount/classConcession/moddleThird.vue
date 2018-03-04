<template>
	<div class="moddleThird">
    <div class="compile">
      <img src="../../../assets/search-green.png" alt="">
        <img src="../../../assets/help.png" alt="">
       </div>
	<div class="moddleThird-top">
	<p>
		<span>这里是用户自定义命名的优惠名称展示区，限制15字</span>
		<span>已过期</span>
	</p>	
	<p>
		<span>一对一</span>
		<span>整体优惠</span>
		<span>三科连报</span>
		<span>优惠200</span>
	</p>	
	
	 <p class="one">
	  <span>适用范围</span>
	  <span> 
		<i>初一初二 初三</i>
        <i>语文数学英语</i>
        <i>在读生续费、扩科</i>
        <i>每期三科</i>
        <i>西二旗校区五道口校区龙泽校区  (<b>6</b>)	</i>
	</span>		
	  </p>
		</div>	
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	*{
	color: #666666;
	font-size: 14px;
}
.compile{
    position: absolute;
    right:30px;
    top: -45px;
    cursor: pointer;
    img:nth-child(1){
      margin-right: 15px;
    }
  }
.moddleThird-top{
  padding: 0 30px;
  background: white;
  border-radius: 4px;
  p:nth-child(1){
  	display: flex;
  	height: 60px;
  	line-height: 60px;
  	border-bottom: 1px dashed #EEEEEE;
  	justify-content: space-between;
  	 span:nth-child(1){
  	color:#31C27C;
  }
    span:nth-child(2){   
  	color:red;
  }
  }
  p:nth-child(2){
    padding: 20px 0;
 span{
  		display: inline-block;
  	   padding: 4px 20px;
  	   border-radius: 20px;
  	   background:#e5f8ef;
  	   	color: #31C27C;
  	   	border: 1px solid #31C27C;	  
  	}
  }
 .one{
 	display: flex;
 		  line-height: 40px;
 span{
 	display: block;
 
 }
 span:nth-child(1){
 	color: #31C27C;
 	width: 80px;
 }
 span:nth-child(2){
 	display: flex;
 	i{
 		display: block;
 		width: 100px;
 		margin-right: 10px;
 	 text-overflow: ellipsis;
 	  overflow: hidden; 
 	  white-space: nowrap;
 	  
 	}
 }
 }

}
</style>