<template>
  <div class="sdaqu">
    <div class="bumen">
      <h3>大区</h3>
      <ul class="clearfix xuan">
        <li>全部</li>
        <li>北京大区</li>
        <li>山西大区</li>
        <li>上海大区</li>
        <li>上海大区</li>
      </ul>
    </div>
    <div class="bumen">
      <h3>角色（可多选）</h3>
      <ul class="clearfix">
        <li>教学主管<img src="../../../assets/duiHao.jpg"/></li>
        <li>教务主任<img src="../../../assets/duiHao.jpg"/></li>
        <li>兼职教师<img src="../../../assets/duiHao.jpg"/></li>
        <li>学管师<img src="../../../assets/duiHao.jpg"/></li>
        <li>财务主管<img src="../../../assets/duiHao.jpg"/></li>
        <li>教学主管<img src="../../../assets/duiHao.jpg"/></li>
        <li>教务主任<img src="../../../assets/duiHao.jpg"/></li>
        <li>兼职教师<img src="../../../assets/duiHao.jpg"/></li>
        <li>学管师<img src="../../../assets/duiHao.jpg"/></li>
        <li>财务主管<img src="../../../assets/duiHao.jpg"/></li>
      </ul>
    </div>
    <div class="btns">
      <button class="btn1">确认并继续添加</button>
      <button class="btn2">确认</button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    mounted:function () {
      $(".xuan li").css("background","#f7f8fc");
      $(".xuan").on('click','li',function () {
        $(this).css({"background":"#4ed79e","color":"#fff"}).siblings().css({"background":"#f7f8fc","color":"#000"})
      });
      $(".bumen>ul>li").click(function () {
        $(this).find("img").toggle()
      })
    }
  }
</script>
<style lang="less" scoped>
  .clearfix:after{
    display: block;
    content: '';
    clear: both;
  }
  .sdaqu{
    margin-top: 20px;
    .bumen{
      padding: 15px 0;
      border-top: 1px dotted #D3DDD5;
      h3{
        color: #31c27c;
        font-size: 15px;
      }
      ul{
        li{
          float: left;
          width: 100px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          background: #f2f5f8;
          list-style: none;
          margin: 15px 25px 2px 0;
          border-radius:18px;
          position: relative;
          img{
            position: absolute;
            right:4px;
            top:3px;
            display: none;
          }
        }
      }
    }
    .btns{
      width: 90%;
      text-align: center;
      position: absolute;
      bottom:20px;
      left: auto;
      button{
        width: 176px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        color: #fff;
        border-radius: 5px;
        border: 0;
        outline: 0;
      }
      .btn1{
        background: #33beff;
      }
      .btn2{
        background: #31c27c;
        margin-left: 30px;
      }
    }
  }
</style>
