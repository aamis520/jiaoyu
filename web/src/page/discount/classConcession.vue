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
  import classConcessionfirst from "@/page/discount/classConcession/classConcessionfirst"
  import classConcessionsecond from "@/page/discount/classConcession/classConcessionsecond"
  import classConcessionthird from "@/page/discount/classConcession/classConcessionthird"
  export default {
    data () {
      return{
        active: 0, 
        currentView: "classConcessionfirst", 
        
        tabs: [ 
          {
            index: 0,
              type: '在用优惠', 
              view: "classConcessionfirst"
          },  
          {  
            index: 1,
              type: '未来优惠', 
              view: "classConcessionsecond"
          } ,
          {  
            index: 2,
              type: '优惠历史', 
              view: "classConcessionthird"
          } 
        ] 
      }
    },
    components: {
      classConcessionfirst: classConcessionfirst,
     classConcessionsecond: classConcessionsecond,
     classConcessionthird: classConcessionthird
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
*{
	color: #666666;
	font-size: 14px;
	font-family: "微软雅黑";
}
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