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
        <ul class="clearfix chose">
          <li>选择大区</li>
          <li>北京大区<img src="../../assets/duiHao.jpg"/></li>
          <li>上海大区<img src="../../assets/duiHao.jpg"/></li>
          <li>天津大区<img src="../../assets/duiHao.jpg"/></li>
          <li>东北大区<img src="../../assets/duiHao.jpg"/></li>
          <li>山东大区<img src="../../assets/duiHao.jpg"/></li>
          <li>河南大区<img src="../../assets/duiHao.jpg"/></li>
          <li>河北大区<img src="../../assets/duiHao.jpg"/></li>
          <li>河南大区<img src="../../assets/duiHao.jpg"/></li>
        </ul>
        <ul class="clearfix chose">
          <li>选择地区</li>
          <li>海淀地区<img src="../../assets/duiHao.jpg"/></li>
          <li>朝阳大区<img src="../../assets/duiHao.jpg"/></li>
          <li>东城地区<img src="../../assets/duiHao.jpg"/></li>
          <li>西城地区<img src="../../assets/duiHao.jpg"/></li>
          <li>顺义地区<img src="../../assets/duiHao.jpg"/></li>
          <li>昌平地区<img src="../../assets/duiHao.jpg"/></li>
          <li>丰台地区<img src="../../assets/duiHao.jpg"/></li>
          <li>东城地区<img src="../../assets/duiHao.jpg"/></li>
        </ul>
        <ul class="clearfix chose">
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
        <span id="cha">查</span>
      </div>
      <div class="conx">
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
      <div class="consult" v-if="show1">
        <consult></consult>
      </div>
    </div>
  </div>
</template>

<script>
  import consult from "@/page/accountNumber/consult"
  export default {
    data(){
      return{
       show1:false
      }
    },
    components:{
      consult:consult
    },
    mounted(){
      $(".chose>li").click(function () {
        $(this).find("img").toggle();
        if($(this).find("img").show()){
          $(this).siblings("li").find("img").hide();
        }
      });
      $(".quan").hover(function(){
         $(this).parent().find(".tip").toggle();
         $(this).parent().siblings().find(".tip").hide();
      });
      $(".bianji").click(function () {
        $(this).parent().parent().parent().css("background","#f7f9fa");
        $(this).parent().parent().parent().siblings().css("background","#fff")
      });
      $(".tab1").click(function () {
        $(this).hide();
        $(this).siblings($(".tab2")).show();
      });
      $(".tab2").click(function () {
        $(this).hide();
        $(this).siblings($(".tab1")).show();
      });
      $(".xuanze").click(function () {
         $(".consult").show()
      });
      $("#cha").click(function(){
        alert(1251)
      });
      
			this.axios.post("/api/api-system/v1/account/findCheckedAccount?checked=true&head_id=3&pageSize=10&pageNo=1&accessToken=aaaa").then((res)=>{
    		this.data=res.data;
    		console.log("查看账号-已开启",this.data);
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
  .el-checkbox__inner{
  border-radius: 50%;
}
.compile{
    position: absolute;
    right: 0;
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
            right: 5px;
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
  }
</style>
