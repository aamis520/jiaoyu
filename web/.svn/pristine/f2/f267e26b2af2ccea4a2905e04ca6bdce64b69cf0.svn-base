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
  import first from "@/page/comprehensive/first"
  import second from "@/page/comprehensive/second"
  import third from "@/page/comprehensive/third"
  export default {
    data () {
      return{
        active: 0, 
        currentView: "first", 
        tabs: [ 
          {
            index: 0,
              type: '听课证', 
              view: "first"
          },  
          {  
            index: 1,
              type: '单据设置', 
              view: "second"
          },
          {  
            index: 2,
              type: '合同设置', 
              view: "third"
          } 
        ] 
      }
    },
    components: {
      first: first,
      second: second,
      third: third,
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
