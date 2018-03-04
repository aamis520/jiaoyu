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
  import moddleFirst from "@/page/discount/classConcession/moddleFirst"
  import moddleSecond from "@/page/discount/classConcession/moddleSecond"
  import moddleThird from "@/page/discount/classConcession/moddleThird"
  export default {
    data () {
      return{
        active: 0, 
        currentView: "moddleFirst", 
        tabs: [ 
          {
            index: 0,
              type: '在用优惠', 
              view: "moddleFirst"
          },  
          {  
            index: 1,
              type: '未来优惠', 
              view: "moddleSecond"
          } ,
          {  
            index: 2,
              type: '优惠历史', 
              view: "moddleThird"
          } 
        ] 
      }
    },
    components: {
      moddleFirst: moddleFirst,
      moddleSecond: moddleSecond,
      moddleThird: moddleThird
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