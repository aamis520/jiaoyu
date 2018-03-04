<template>
  <div>
    <ul class="list_2">
      <router-link  active-class="act" :to="{path:'/goods/basicSetting'}" tag="li">基本设置</router-link>
      <router-link  active-class="act" :to="{path:'/goods/goodsManage'}" tag="li">货源管理</router-link>
      <router-link  active-class="act" :to="{path:'/goods/addGoods'}" tag="li">增加物品</router-link>
      <router-link  active-class="act" :to="{path:'/goods/goodsList'}" tag="li">物品列表</router-link>
    </ul>
    <router-view class="rot2"></router-view>

  </div>
</template>

<script>
</script>


