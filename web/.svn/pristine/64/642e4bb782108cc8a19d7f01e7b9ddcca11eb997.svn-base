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
		<input type="search" value="" v-model="sea" @click="search"/>
<script>

 import importOne from "@/page/comprehensive/importOne"
 import exportTwo from "@/page/comprehensive/exportTwo"
  export default {
    data () {
      return{
        active: 0, 
        currentView: "importOne", 
        tabs: [ 
          {
            index: 0,
              type: '导入', 
              view: "importOne"
          },  
          {  
            index: 1,
              type: '导出', 
              view: "exportTwo"
          } 
        ] 
      }
    },
    components: {
      importOne: importOne,
      exportTwo: exportTwo
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
