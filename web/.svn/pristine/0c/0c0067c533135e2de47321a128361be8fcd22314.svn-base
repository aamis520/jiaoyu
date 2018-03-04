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
  import moddleOne from "@/page/vip/moddleOne"
  import moddleTwo from "@/page/vip/moddleTwo"
  export default {
    data () {
      return{
        active: 0, 
        currentView: "moddleOne", 
        tabs: [ 
          {
            index: 0,
              type: '一对一标准设置', 
              view: "moddleOne"
          },  
          {  
            index: 1,
              type: '一对一学费设置', 
              view: "moddleTwo"
          } 
        ] 
      }
    },
    components: {
      moddleOne: moddleOne,
      moddleTwo: moddleTwo
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