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
  import moddleThree from "@/page/vip/moddleThree"
  import moddleFour from "@/page/vip/moddleFour"
  export default {
    data () {
      return{
        active: 0, 
        currentView: "moddleThree", 
        tabs: [ 
          {
            index: 0,
              type: '一对一标准设置', 
              view: "moddleThree"
          },  
          {  
            index: 1,
              type: '一对一学费设置', 
              view: "moddleFour"
          } 
        ] 
      }
    },
    components: {
      moddleThree: moddleThree,
      moddleFour: moddleFour
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