<template>
  <div class="liu">
    <div class="topx">
      <ul class="clearfix chose">
        <li>科目类别</li>
        <li>语文<img src="@/assets/duiHao.jpg"/></li>
        <li>数学<img src="@/assets/duiHao.jpg"/></li>
        <li>英语<img src="@/assets/duiHao.jpg"/></li>
        <li>物理<img src="@/assets/duiHao.jpg"/></li>
        <li>化学<img src="@/assets/duiHao.jpg"/></li>
        <li>地理<img src="@/assets/duiHao.jpg"/></li>
        <li>历史<img src="@/assets/duiHao.jpg"/></li>
        <li>生物<img src="@/assets/duiHao.jpg"/></li>
        <li>政治<img src="@/assets/duiHao.jpg"/></li>
      </ul>
      <ul class="clearfix chose">
        <li>课程名称</li>
        <li><input type="text" name="" id="" placeholder="请输入课程名字" />   </li>
        <li>数学<img src="@/assets/duiHao.jpg"/></li>
        <li>语文<img src="@/assets/duiHao.jpg"/></li>
        
      </ul>  
    </div>  
   
    
  </div>
</template>

<script>
  export default {
    mounted(){
      $(".chose>li").click(function () {
        $(this).find("img").toggle();
        if($(this).find("img").css("display","block")){
          $(this).siblings("li").find("img").css("display","none")
        }
      });
      $(".bianji").click(function () {
        $(this).parent().parent().parent().css("background","yellow");
        $(this).parent().parent().parent().siblings().css("background","#fff")
      });
      $(".tab1").click(function () {
        $(this).css("display","none");
        $(this).siblings($(".tab2")).css("display","block")
      });
      $(".tab2").click(function () {
        $(this).css("display","none");
        $(this).siblings($(".tab1")).css("display","block")
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
  input{
		border: none;
		border-bottom: 1px solid #50D79F;
		outline: none;
		width: 110px;
		padding-left: 4px;
	}
  .liu{
    width: 1040px;
    cursor: pointer;
    font-size: 14px;
    .topx{
      width:100%;
      background: white;
      border-radius: 4px;
      margin-bottom: 12px;
      padding:20px;
      span{
        display: inline-block;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border: 1px solid #31c27c;
        border-radius: 50%;
        color: #31c27c;
        position: absolute;
        right:60px;
        top:55px;
      }
      ul{
        margin: 12px 0;
        li:nth-child(1){
          color: #31c27c;
        }
        li{
       /*width: 120px;*/
      padding: 10px 20px;
          float: left;
          list-style: none;
          margin: 0 12px;
          position: relative;
          img{
            position: absolute;
            right: 5px;
            top:6px;
            display: none;
          }
        }
      }
    } 
    .conx {
      width: 100%;
      background: white;
      border-radius: 4px;
      margin-bottom: 12px;
     
      .lists {
        width: 100%;
        list-style: none;
        padding-bottom: 20px;
        li {
          width: 100%;
          height: 60px;
          line-height: 60px;
          border-bottom: 1px dotted #D3DDD5;
          span {
            float: left;
            margin: 0 15px;
            text-align: left;
            input {
              width: 120px;
              //padding:5px 10px;
              border: 0;
              outline: 0;
            }
           
            .tab{
              position: relative;
              .tab1{
                position: absolute;
                right:-95px;
                top:-36px;
              }
              .tab2{
                position: absolute;
                right:-96px;
                top:-37px;
                display: none;
              }
            }
            .guan {
              display: inline-block;
              width: 20px;
              height: 20px;
              text-align: center;
              line-height: 20px;
              border-radius: 5px;
              background: #32b0e6;
              color: #fff;
              margin-left: -75px;
            }
            .zhuan {
              display: inline-block;
              width: 20px;
              height: 20px;
              text-align: center;
              line-height: 20px;
              border-radius: 5px;
              background: #2da155;
              color: #fff;
              margin-left: -75px;
            }
            .jian {
              display: inline-block;
              width: 20px;
              height: 20px;
              text-align: center;
              line-height: 20px;
              border-radius: 5px;
              background: #ffbd4b;
              color: #fff;
              margin-left: -75px;
            }
          }
        }
      }
    }
  }
</style>
