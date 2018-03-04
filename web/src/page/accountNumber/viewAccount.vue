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
  import first from "@/page/accountNumber/first"
  import second from "@/page/accountNumber/second"
  export default {
    data () {
      return{
        active: 0, 
        currentView: "first", 
        tabs: [ 
          {
            index: 0,
              type: '已开启账号', 
              view: "first"
          },  
          {  
            index: 1,
              type: '已停用账号', 
              view: "second"
          } 
        ] 
      }
    },
    components: {
      first: first,
      second: second
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
