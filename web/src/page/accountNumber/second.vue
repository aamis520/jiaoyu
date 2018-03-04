<template>
  <div>
    <div class="compile">
      <span>
        <input type="text" placeholder="请输入姓名首字母搜索" maxlength="8">
        <i class="el-icon-search"></i>
      </span>
      <span><img src="../../assets/help.png"></span>  
    </div>
    <div class="zhangb">
      <div class="topx">
        <ul class="clearfix" id="chose1">
          <li>选择层级</li>
          <li>总校<img src="../../assets/images/red.png"/></li>
          <li>大区<img src="../../assets/images/red.png"/></li>
          <li>地区<img src="../../assets/images/red.png"/></li>
          <li>校区<img src="../../assets/images/red.png"/></li>
     	  </ul>
        <ul class="clearfix" id="chose2">
          <li>选择部门</li>
          <li>人事部<img src="../../assets/duiHao.jpg"/></li>
          <li>市场部<img src="../../assets/duiHao.jpg"/></li>
          <li>财务部<img src="../../assets/duiHao.jpg"/></li>
          <li>学管部<img src="../../assets/duiHao.jpg"/></li>
          <li>咨询部<img src="../../assets/duiHao.jpg"/></li>
          <li>教学部<img src="../../assets/duiHao.jpg"/></li>
          <li>教务部<img src="../../assets/duiHao.jpg"/></li>
          <li>后勤部<img src="../../assets/duiHao.jpg"/></li>
        </ul>
        <span>查</span>
      </div>
       <div class="conx">
       <!--  <ul class="lists">
          <li class="clearfix">
            <span class="first">001</span>
            <span>
              <img src="../../assets/images/01.jpg" alt="">
              <input type="text" value="林志文" readonly>
              <b class="guan">管</b>
              <b class="quan">权</b>
              <i class="tip">所选权限享有所属层级部门内的最大的查看与操作范围</i>
            </span>
            <span><input type="text" value="151566266" readonly></span>
            <span><input type="text" value="北京大区" readonly></span>
            <span><input type="text" value="学管师（2）" readonly></span>
            <span>
              <i class="tab">
                  <img src="../../assets/images/02_06.jpg" alt="" class="tab1">
                  <img src="../../assets/images/01_17.jpg" alt="" class="tab2">
              </i>
              <i class="close"><img src="../../assets/cancel.png" alt=""></i>
            </span>
          </li>


            <li class="clearfix">
            <span class="first">001</span>
            <span>
              <img src="../../assets/images/01.jpg" alt="">
              <input type="text" value="林志文" readonly>
              <b class="guan">管</b>
              <b class="quan">权</b>
              <i class="tip">所选权限享有所属层级部门内的最大的查看与操作范围</i>
            </span>
            <span><input type="text" value="151566266" readonly></span>
            <span><input type="text" value="北京大区" readonly></span>
            <span><input type="text" value="学管师（2）" readonly></span>
            <span>
              <i class="tab">
                  <img src="../../assets/images/02_06.jpg" alt="" class="tab1">
                  <img src="../../assets/images/01_17.jpg" alt="" class="tab2">
              </i>
              <i class="close"><img src="../../assets/cancel.png" alt=""></i>
            </span>
          </li>
        </ul> -->
         <ul class="lists">
           <li class="clearfix">
            <span>001</span>
            <span class="xs1">
              <img src="../../assets/images/01.jpg" alt="">
              <input type="text" placeholder="5454" class="inp1" maxlength="5">
              <b class="guan">管</b>
              <!-- <b class="quan" id="quan">权</b> -->
            </span>
             <span><input type="text" placeholder="656565465465" maxlength="11"></span>
            <span class="tips xs2"><input type="text" value="西二旗校区 学管师" readonly>
            </span>
            <span class="last">
              <img src="../../assets/images/01_20.jpg" alt="" class="bianji" @click="edit(item.index)">
              <img src="../../assets/images/01_08.jpg" alt="" class="quanxian" @click="show1=!show1">
              <!-- <img src="../../assets/SmallduiGou.jpg" alt="" class="oks"> -->
              <!-- <span class="tab"> -->
                 <img src="../../assets/images/01_17.jpg" alt="" class="tab1">
                 <img src="../../assets/images/02_06.jpg" alt="" class="tab2">
              <!-- </span> -->
            </span>
         </li> 
       </ul>
      </div>

       <div class="shade" id="shade1">
        <div class="hint">
          <p class="hint-title"><span>提示</span><img src="../../assets/fork.png" class="closehint"/></p>
          <img class="notice" src="../../assets/notice.png">
          <p class="hint-text">您确定永久删除此账号吗？</p>
          <p class="hint-sure">
            <img class="cancel" src="../../assets/cancel.png">
            <img class="ok" id="sure" src="../../assets/confirm_normal.png">
          </p>
        </div>
      </div>
      <div class="shade" id="shade2">
        <div class="hint">
          <p class="hint-title"><span>提示</span><img src="../../assets/fork.png" class="closehint"/></p>
          <img class="notice" src="../../assets/notice.png">
          <p class="hint-text">您确定开启此账号吗？该账号原来对应的全部角色和权限也会被同时开启。</p>
          <p class="hint-sure">
            <img class="cancel" src="../../assets/cancel.png">
            <img class="ok" id="ok3" src="../../assets/confirm_normal.png">
          </p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
  export default {
    data(){
      return{
       show1:false
      }
    },
    mounted(){
      $("#chose1>li").click(function () {
        $(this).find("img").toggle();
        if($(this).find("img").show()){
          $(this).siblings("li").find("img").hide();
        }
      });
      $("#chose2>li").click(function(){
      	 $(this).find("img").toggle();
      });
      $(".quan").hover(function(){
         $(this).parent().find(".tip").toggle();
         $(this).parent().siblings().find(".tip").hide();
      });
      $(".bianji").click(function () {
        $(this).parent().parent().parent().css("background","#f7f9fa");
        $(this).parent().parent().parent().siblings().css("background","#fff");
      });
      $(".tab1").click(function () {
        $("#shade2").show();

      });
      $(".tab2").click(function () {
        $(this).hide();
        $(this).siblings($(".tab1")).show();
      });
      $(".xuanze").click(function () {
         $(".consult").show();
      });
       $(".close").click(function(){
         $("#shade1").show();
      });
      $(".cancel").click(function(){
         $("#shade1").hide();
         $("#shade2").hide();
      });
      $(".closehint").click(function () {
        $("#shade1").hide();
        $("#shade2").hide();
      });
      $("#ok3").click(function(){
      	$("#shade2").hide();
      	$(".tab1").hide();
      	$(".tab2").show();
      });
      $("#sure").click(function(){
      	 $("#shade1").hide();
      	 $(".close").parent().parent().hide()
      });
      
      this.axios.post("/api/api-system/v1/account/findCheckedAccount?checked=false&head_id=3&pageSize=10&pageNo=1&accessToken=aaaa").then((res)=>{
    		this.data=res.data;
    		console.log("查看账号-已停用",this.data);
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
  .compile{
    position: absolute;
    right:0;
    top: -45px;
    cursor: pointer;
    width: 233px;
    span:nth-child(1){
      width: 200px;
      position: relative;
      i{
        position: absolute;
        right: 7px;
        top:4px;
        color: #31c27c;
      }
      input{
      width: 170px;
      height: 22px;
      line-height: 22px;
      border-bottom: 1px solid #31c27c;
      }
    }
    span:nth-child(2){
      margin-left: 10px;
      img{
       vertical-align: middle;
      }
    }
  }
  .zhangb{
     width: 1008px;
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
        line-height: 22px;
        border: 1px solid #31c27c;
        border-radius: 50%;
        color: #31c27c;
        position: absolute;
        right:25px;
        top:55px;
      }
      #chose1{
      	 li{
      	 	img{
      	 		position: absolute;
      	 		right: 30px;
      	 	}
      	 }
      }
      ul{
        margin: 20px 0;
        li:nth-child(1){
          color: #31c27c;
        }
        li{
          width: 80px;
          float: left;
          list-style: none;
          margin: 0 12px;
          position: relative;
          img{
            position: absolute;
            right: 12px;
            top:-2px;
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
      padding: 0 20px;
     /* .lists {
        width: 100%;
        list-style: none;
        padding-bottom:20px;
        li {
          width: 100%;
          height: 60px;
          line-height: 60px;
          border-bottom: 1px dotted #D3DDD5;
          .first{
            width: 100px;
            margin:0;
            text-align: center;
          }
          span:nth-child(2){
            margin-left: 0;
            position: relative;
            .tip{
              width: 270px;
              line-height: 24px;
              padding: 7px 10px;
              position: absolute;
              top:-60px;
              left:120px;
              background: #fff;
              color: #31c27c;
              border:1px solid #31c27c;
              border-radius: 5px;
              display: none;
            }
          }
          span:nth-child(5){
            margin-left: 50px;
          }
          span:nth-child(6){
            margin-left: 68px;
          }
          span {
            float: left;
            margin: 0 15px;
            text-align: left;
            position: relative;
            input {
              width: 120px;
              border: 0;
              outline: 0;
            }
            img {
              vertical-align: middle;
              margin: 0 5px;
            }
            .tab{
              position: relative;
              .tab1{
                position: absolute;
                top:25px;
              }
              .tab2{
                position: absolute;
                top:25px;
                display: none;
              }
            }
            .close{
            	position: absolute;
            	left:35px;
            	top:3px;
            	img{
            		width: 16px;
            		height: 16px;
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
            .quan {
              display: inline-block;
              width: 20px;
              height:20px;
              text-align: center;
              line-height:18px;
              border-radius: 50%;
              border:1px solid #ff1919;
              color: #ff1919;
              margin-left: 5px;
              font-size: 10px;
            }
           }
        }
      }*/
        .lists {
        width: 100%;
        border-top: 1px dotted #D3DDD5;
        li {
          width: 100%;
          height: 60px;
          line-height:60px;
          border-bottom: 1px dotted #D3DDD5;
          position: relative;
          font-size: 14px;
          .xs1{
            width: 210px;
            text-align: left;
          }
          .tel{
            width: 120px;
          }
          .xs2{
            margin:0 180px 0 65px;
          }
          span {
             display: inline-block;
             width: 100px;
            float: left;
            margin: 0 10px;
            text-align: center;
            input {
              width: 120px;
              border: 0;
              outline: 0;
            }
            img {
              vertical-align: middle;
            }
          }
          .last{
            position: relative;
            display: inline-block;
            width: 120px;
            .tab1{
              position: absolute;
              right: 10px;
              top:23px;
            }
            .tab2{
              position: absolute;
              right: 11px;
              top:24px;
            }
            /*.oks{
              position: absolute;
              top:20px;
              right:48px;
              display: none;
              width: 20px;
              height: 20px;
            }*/
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
         /* .quan {
            display: inline-block;
            width: 20px;
            height:20px;
            text-align: center;
            line-height:18px;
            border-radius: 50%;
            border:1px solid #ff1919;
            color: #ff1919;
            margin-left: 5px;
            font-size: 10px;
          }*/
          .news {
            width: 400px;
            position: absolute;
            left: 500px;
            top: 60px;
            padding: 15px;
            background: #fff;
            border-radius: 5px;
            border: 1px solid #40ad83;
            display: none;
            z-index: 20;
            .con {
              width: 100%;
              font-size: 14px;
              div {
                float: left;
                padding: 0 22px;
                p {
                  height: 40px;
                  line-height: 40px;
                }
              }
              .con1 {
                border-right: 1px dotted #eeeeee;
              }
            }
          }
        }
      }
    }
     .shade{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      z-index: 5;
      background:rgba(0,0,0,0.5);
      .hint{
        width: 380px;
        height: 220px;
        background-color: #ffffff;
        border-radius: 4px;
        position: absolute;
        top:50%;
        left: 50%;
        margin-left: -190px;
        margin-top: -110px;
        z-index: 6;
        box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
        // display: none;
        p{
          color: #666;
          text-align: center;
          font-size: 14px;
          line-height: 26px;
          padding: 0 25px;
        }
        .notice{
          margin:25px 45% 10px 45%; 
        }
        .hint-title{
          height: 50px;
          border-top-right-radius: 4px;
          border-top-left-radius: 4px;
          background-color: #f2f5f8;
          line-height: 50px;
          font-size: 18px;
          color: #333;
          padding-left: 170px;
          .closehint{
            color: #bfbfcd;
            font-size: 18px;
            margin-left: 136px;
            vertical-align: middle;
          }
        }
        .hint-sure{
          margin-top: 10px;
          .ok{
            margin-left: 18px;
          }
        }
      }
    }
  }
</style>
