<template>
  <form>
      <ul class="common">
          <li v-on:click="toggle(tab.index,tab.view)" v-for="tab in tabs" :class="{active:tab.index==active}">
            {{tab.type}} 
          </li>
      </ul>
    <component :is="currentView"></component>
  </form>
</template>

<script>
  import hisTory from "@/page/discount/classConcession/hisTory"
  import useDiscount from "@/page/discount/classConcession/useDiscount"
  export default {
    data () {
      return{
        active: 0, 
        currentView: "useDiscount", 
        tabs: [ 
          {
            index: 0,
              type: '在用优惠', 
              view: "useDiscount"
          },  
          {  
            index: 1,
              type: '历史优惠', 
              view: "hisTory"
          } 
        ] 
      }
    },
    components: {
      hisTory: hisTory,
      useDiscount: useDiscount,
    },
    mounted () {
      
    },
    methods: { 
      toggle: function (index, view) { 
        this.active = index 
        this.currentView = view
      } 
    }
  }
</script>

<style lang="less" scoped>
  .common{
    position: absolute;
    top: -94px;
    left: 0;
    width: 100%;
    padding-left: 270px;
    li{
      float: left;
      margin-left: 40px;
      cursor: pointer;
    }
  }
  .active{
    color: #31c27c;
  }
  
</style>