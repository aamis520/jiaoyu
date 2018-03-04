<template>
<div class="user">
	<div class="compile">
      <img src="../../../assets/search-green.png" alt="">
        <img src="../../../assets/help.png" alt="">
       </div>
	<p><img src="../../../assets/images/nopage.png"/>
	
	</p>
	<p>
		您还没有设定任何发放优惠券的条款
	</p>
	
	<router-link  active-class="act" :to="{path:'/discount/issueCoupons/chOose'}">
		<img src="../../../assets/addbutton_normal.png" class="userd"/>
	</router-link>
	<router-view></router-view>
</div>
</template>

<script>
</script>

<style lang="less" scoped>

*{
	font-size:14px;
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
.user{
	background: white;
	text-align: center;
	border-radius: 4px;
}
.userd{
	margin-top:-100px;
	margin-left:820px;
}
</style>