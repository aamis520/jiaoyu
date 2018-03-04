<template>
<form>
  <div class="moddleTwo">
     <table>
      <tr>
        <td class="num">序号</td>
        <td class="one">一对一标准</td>
        <td class="price">费用标准</td>
        <td class="date">生效日期</td>
        <td class="suitable">适用校区</td>
        <td class="operation">操作</td>
      </tr>
      <tr>
        <td class="num">1</td>
        <td class="one">一对一 · 专职教师 · 课时包</td>
        <td class="price">
          <span><img src="../../assets/images/add.png" @click="classPackage=!classPackage"></span>
          <span><img src="../../assets/append.jpg"></span>
          <span><img src="../../assets/cha.jpg"></span>
        </td>
        <td class="date">17-1-28</td>
        <td class="suitable">北苑校区(10)</td>
        <td class="operation">  
          <img src="../../assets/images/02_06.jpg" id="close">
          <img src="../../assets/images/01_17.jpg" id="open">
          <!-- <img src="../../assets/images/01_20.jpg" id="bianji"> -->
        </td>
      </tr>
    </table> 
  </div>
  <div class="classPackage" v-if="classPackage">
    <class-package></class-package>
  </div>
</form>
  
</template>
<script>
import classPackage from "@/page/vip/classPackage"
  export default{
    data(){
      return{
        classPackage:false
      }
    },
    components:{
      classPackage:classPackage
    },
    mounted(){
      $("#close").click(function(){
        $(this).hide()
        $("#open").show();
      }); 
      $("#open").click(function(){
        $(this).hide()
        $("#close").show();
      });
    }
  }
</script>
<style lang="less" scoped>
// .classPackage{
//  display: none;
// }
  .moddleTwo{
    width: 1008px;
    background: #fff;
    border-radius: 5px;
    padding:0 30px 30px 30px;
    cursor: pointer;
    font-size: 14px;
    table{
      tr:nth-child(1){
        color: #31c27c;
        height: 40px;
        line-height:40px;
      }
      tr{
        position:relative;
        td{
          text-align: center;
          padding: 20px 0;
          border-bottom:1px dotted #eeeeee;
          img{
            vertical-align: middle;
          }
        }
        .num{
          width: 100px;
        }
        .one{
          width: 250px;
        }
        .price{
          width: 200px;
          span:nth-child(2){
            display: none;
          }
          span:nth-child(3){
            display: none;
          }
        }
        .date{
          width: 200px;
        }
        .suitable{
          width: 200px;
        }
        .operation{
          width: 100px;
          position: relative;
          #close{
            position: absolute;
            right: 30px;
            top:20px;
          }
          #open{
            position: absolute;
            right: 30px;
            top:20px;
          }
        }
      }
    }
  }
</style>