<template>
  <div>
    <ul class="list_2">
      <router-link  active-class="act" :to="{path:'/vip/oneSetting'}" tag="li">一对一设置</router-link>
      <router-link  active-class="act" :to="{path:'/vip/nSetting'}" tag="li">一对N设置</router-link>
    </ul>
    <router-view class="rot2"></router-view>

  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .rot2{
    /*width: 1040px;*/
    border-radius: 4px;
    position: absolute;
    top: 60px;
    left: 290px;
  }
  .list_2{
    font-size: 14px;
  }
</style>

