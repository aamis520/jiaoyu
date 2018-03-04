<template>
  <div>
    <div class="compile">
       <img src="../../assets/help.png" alt="">
    </div>
   <div class="box">
     <div class="nullx" id="nullx">
       <img src="../../assets/noinfo.jpg" alt="" class="bg">
       <span class="add" id="add"><img src="../../assets/addbutton_normal.png"></span>
     </div>
     <div class="fullx" id="fullx">
      <form>
        <div class="specialPermission">
          <div class="assault">
            <input type="text" placeholder="攻坚克难组" class="shuru">
            <div class="date">
              <el-radio class="radio" v-model="radio" label="1">长期开启</el-radio>
              <el-radio class="radio" v-model="radio" label="2">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>一
                <el-date-picker v-model="value2" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
              </el-date-picker>开启
            </el-radio>
            </div>
            <div class="assaultSon">
                <span id="addPerson"><img src="../../assets/add.jpg"></span>
                <span id="jurisdiction"><img src="../../assets/images/01_08.jpg"></span>
                <span class="home">
                  <i class="kai"><img src="../../assets/images/02_06.jpg"></i> 
                  <i class="guan"><img src="../../assets/images/01_17.jpg"></i>
                </span>
           </div>
          </div>
          <div class="conx">
            <ul class="lists">
              <li class="clearfix">
                <span>01</span>
                <span>
                    <img src="../../assets/images/01.jpg" alt="">
                    <input type="text" value="林志文" readonly>
                    <b class="guan">管</b>
                  </span>
                <span><input type="text" value="151566266" readonly></span>
                <span class="tips"><input class="address" type="text" value="西二旗校区 · 学管师" readonly></span>
                <span class="error"><img src="../../assets/error.jpg"></span>
              </li>
              <li class="clearfix">
                <span>02</span>
                <span>
                    <img src="../../assets/images/02.jpg" alt="">
                    <input type="text" value="林志文" readonly>
                    <b class="jian">兼</b>
                  </span>
                <span><input type="text" value="151566266" readonly></span>
                <span class="tips"><input class="address" type="text" value="西二旗校区 · 学管师" readonly></span>
                <span class="error"><img src="../../assets/error.jpg"></span>
              </li>
              <li class="clearfix">
                <span>03</span>
                <span>
                    <img src="../../assets/images/03.jpg" alt="">
                    <input type="text" value="林志文" readonly>
                    <b class="zhuan">专</b>
                  </span>
                <span><input type="text" value="151566266" readonly></span>
                <span class="tips"><input class="address" type="text" value="西二旗校区 · 学管师" readonly></span>
                <span class="error"><img src="../../assets/error.jpg"></span>
              </li>
            </ul>
            <center><img src="../../assets/down.jpg" alt=""></center>
          </div>
        </div>

        <div class="shade" id="shade1">
          <div class="hint">
            <p class="hint-title"><span>提示</span><img src="../../assets/fork.png" class="closehint"/></p>
            <h1>待定……</h1>
          </div>
        </div>
        <div class="shade" id="shade2">
         <div class="hint">
            <p class="hint-title"><span>攻坚克难组 · 权限范围</span><img src="../../assets/close.jpg" class="closehint"/></p>
            <div class="areas">
              <div class="area">
                <p><el-radio class="radio" v-model="radio1" label="1">北京大区</el-radio></p>
                <ul>
                  <li>
                    <el-radio-group v-model="radio2">
                      <span class="first"><el-radio :label="3">海淀区</el-radio></span>
                      <span><el-radio :label="4">西二旗校区</el-radio></span>
                      <span><el-radio :label="5">回龙观校区</el-radio></span>
                      <span><el-radio :label="6">西直门校区</el-radio></span>
                      <span><el-radio :label="7">五道口校区</el-radio></span>
                      <span><el-radio :label="8">西二旗校区</el-radio></span>
                      <span><el-radio :label="9">回龙观校区</el-radio></span>
                      <span><el-radio :label="10">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio3">
                      <span class="first"><el-radio :label="4">东城区</el-radio></span>
                      <span><el-radio :label="11">西二旗校区</el-radio></span>
                      <span><el-radio :label="12">回龙观校区</el-radio></span>
                      <span><el-radio :label="13">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio4">
                      <span class="first"><el-radio :label="5">西城区</el-radio></span>
                      <span><el-radio :label="2">西二旗校区</el-radio></span>
                      <span><el-radio :label="3">回龙观校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio5">
                      <span class="first"><el-radio :label="6">房山区</el-radio></span>
                      <span><el-radio :label="2">西二旗校区</el-radio></span>
                      <span><el-radio :label="3">回龙观校区</el-radio></span>
                      <span><el-radio :label="4">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                </ul>
              </div>
              <div class="area">
                <p><el-radio class="radio" v-model="radio1" label="2">上海大区</el-radio></p>
                <ul>
                  <li>
                    <el-radio-group v-model="radio2">
                      <span class="first"><el-radio :label="3">海淀区</el-radio></span>
                      <span><el-radio :label="4">西二旗校区</el-radio></span>
                      <span><el-radio :label="5">回龙观校区</el-radio></span>
                      <span><el-radio :label="6">西直门校区</el-radio></span>
                      <span><el-radio :label="7">五道口校区</el-radio></span>
                      <span><el-radio :label="8">西二旗校区</el-radio></span>
                      <span><el-radio :label="9">回龙观校区</el-radio></span>
                      <span><el-radio :label="10">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio3">
                      <span class="first"><el-radio :label="4">东城区</el-radio></span>
                      <span><el-radio :label="11">西二旗校区</el-radio></span>
                      <span><el-radio :label="12">回龙观校区</el-radio></span>
                      <span><el-radio :label="13">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio4">
                      <span class="first"><el-radio :label="5">西城区</el-radio></span>
                      <span><el-radio :label="2">西二旗校区</el-radio></span>
                      <span><el-radio :label="3">回龙观校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio5">
                      <span class="first"><el-radio :label="6">房山区</el-radio></span>
                      <span><el-radio :label="2">西二旗校区</el-radio></span>
                      <span><el-radio :label="3">回龙观校区</el-radio></span>
                      <span><el-radio :label="4">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                </ul>
              </div>
              <div class="area">
                <p><el-radio class="radio" v-model="radio1" label="3">上海大区</el-radio></p>
                <ul>
                  <li>
                    <el-radio-group v-model="radio2">
                      <span class="first"><el-radio :label="3">海淀区</el-radio></span>
                      <span><el-radio :label="4">西二旗校区</el-radio></span>
                      <span><el-radio :label="5">回龙观校区</el-radio></span>
                      <span><el-radio :label="6">西直门校区</el-radio></span>
                      <span><el-radio :label="7">五道口校区</el-radio></span>
                      <span><el-radio :label="8">西二旗校区</el-radio></span>
                      <span><el-radio :label="9">回龙观校区</el-radio></span>
                      <span><el-radio :label="10">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio3">
                      <span class="first"><el-radio :label="4">东城区</el-radio></span>
                      <span><el-radio :label="11">西二旗校区</el-radio></span>
                      <span><el-radio :label="12">回龙观校区</el-radio></span>
                      <span><el-radio :label="13">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio4">
                      <span class="first"><el-radio :label="5">西城区</el-radio></span>
                      <span><el-radio :label="2">西二旗校区</el-radio></span>
                      <span><el-radio :label="3">回龙观校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio5">
                      <span class="first"><el-radio :label="6">房山区</el-radio></span>
                      <span><el-radio :label="2">西二旗校区</el-radio></span>
                      <span><el-radio :label="3">回龙观校区</el-radio></span>
                      <span><el-radio :label="4">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                </ul>
              </div>
              <div class="area">
                <p><el-radio class="radio" v-model="radio1" label="4">南京大区</el-radio></p>
                <ul>
                  <li>
                    <el-radio-group v-model="radio2">
                      <span class="first"><el-radio :label="3">海淀区</el-radio></span>
                      <span><el-radio :label="4">西二旗校区</el-radio></span>
                      <span><el-radio :label="5">回龙观校区</el-radio></span>
                      <span><el-radio :label="6">西直门校区</el-radio></span>
                      <span><el-radio :label="7">五道口校区</el-radio></span>
                      <span><el-radio :label="8">西二旗校区</el-radio></span>
                      <span><el-radio :label="9">回龙观校区</el-radio></span>
                      <span><el-radio :label="10">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio3">
                      <span class="first"><el-radio :label="4">东城区</el-radio></span>
                      <span><el-radio :label="11">西二旗校区</el-radio></span>
                      <span><el-radio :label="12">回龙观校区</el-radio></span>
                      <span><el-radio :label="13">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio4">
                      <span class="first"><el-radio :label="5">西城区</el-radio></span>
                      <span><el-radio :label="2">西二旗校区</el-radio></span>
                      <span><el-radio :label="3">回龙观校区</el-radio></span>
                    </el-radio-group>
                  </li>
                  <li>
                    <el-radio-group v-model="radio5">
                      <span class="first"><el-radio :label="6">房山区</el-radio></span>
                      <span><el-radio :label="2">西二旗校区</el-radio></span>
                      <span><el-radio :label="3">回龙观校区</el-radio></span>
                      <span><el-radio :label="4">西直门校区</el-radio></span>
                    </el-radio-group>
                  </li>
                </ul>
              </div>
              <center id="go1"><img src="../../assets/images/confirm_normal.png" alt=""></center>
            </div>
        </div>
        <div class="group">
           <group></group>
        </div>
      </div>
      </form>
      <div class="addAll">
         <img src="../../assets/addbutton_normal.png">
      </div>
    </div>
  </div>
  </div>
 
</template>
<script>
 import group from "@/page/accountNumber/group"
  export default{
    data(){
      return{
        value1: '',
        value2: '',
        radio:  1,
        radio1: 2,
        radio2: 3,
        radio3: 4,
        radio4: 5,
        radio5: 6,
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;    
          }
        }
      }
    },
    components:{
      group:group
    },
    mounted(){
        $("#add").click(function(){
           $("#nullx").hide();
           $("#fullx").show();
        });
        $(".chose>li").click(function() {
          $(this).find("img").toggle();
          if ($(this).find("img").show()) {
            $(this).siblings("li").find("img").hide()
          }
        });
        $(".kai").click(function(){
           $(this).hide();
           $(".guan").show();
        })
        $(".guan").click(function(){
           $(this).hide();
           $(".kai").show();
        });
        $("#addPerson").click(function(){
           $("#shade1").show();
           $("#shade1>.hint").show();
        });
        $("#jurisdiction").click(function(){
            $("#shade2").show();
            $("#shade2>.hint").show();
        });
        $(".closehint").click(function () {
          $("#shade1").hide();
          $("#shade1>.hint").hide();
          $("#shade2").hide();
        });
        $(".area>p").click(function(){
          $(this).next("ul").show();
         $(this).parent().siblings().find('ul').hide();
      });
      $("#go1").click(function(){
          $("#shade2").hide();
          $("#shade2>.hint").hide();
        $(".group").show();
      });
      
      var url="/api/api-system/v1/specialauthoritygroup/addPersonToSpecialAuthorityGroup?accessToken=aaaa";
      var jsonParam={
      	"id":1,
      	"person_group":[]
      }
      this.axios.post(url,jsonParam).then((res)=>{
      	this.data=res.data;
      	console.log("特殊权限组添加人员",this.data);
      })
      
     }
  }
</script>
<<style lang="less" scoped>
.clearfix:after {
  display: block;
  content: '';
  clear: both;
}
.compile{
    position: absolute;
    right: 30px;
    top: -45px;
    cursor: pointer;
  }
  .box{
    cursor: pointer;
    .nullx{
      width: 1008px;
      height: 230px;
      border-radius: 5px;
      background: #fff;
      position: relative;
      .bg{
        width: 100%;
        height: 100%;
      }
      .add{
        position: absolute;
        right:40px;
        bottom:10px;
      }
    }
    .fullx{
      width: 1008px;
      border-radius: 5px;
      display: none;
      position: relative;
      .addAll{
        position: absolute;
        bottom:-400px;
        right:60px;
        z-index: 2;
      }
      .specialPermission {
        background: #fff;
        padding:0 20px 5px 20px;
        border-radius: 5px;
        margin-bottom: 12px;
        position: relative;
        font-size: 14px;
        .assault {
          height: 62px;
          border-bottom: 1px dotted #dedede;
          display: flex;
          background: #fff;
          position: relative;
          padding:15px;
          .shuru{
            width: 100px;
            height: 25px;
            border:0;
            border-bottom: 1px solid #31c27c;
            color: #31c27c;
          }
          .date{
            margin-left: 250px;
          }
          .el-date-editor.el-input{
            width: 120px;
            border:0;
          }
          .assaultSon{
            margin-left:65px;
             padding-top: 5px;
            span{
              display: inline-block;
              width: 35px;
              height: 22px;
              text-align: center;
              border-right: 1px dotted #dedede; 
              img{
                vertical-align: middle;
              }
            }
            .home{
               position: relative;
              .guan{
                 display: none;
              }
            }
          }
        }
       .lists{
         padding-bottom: 5px;
          li {
              width: 100%;
              height: 60px;
              line-height: 60px;
              border-bottom: 1px dotted #D3DDD5;
              position: relative;
              .error {
                position: absolute;
                right: 4px;
              }
              span {
                //float: left;
                margin: 0 15px;
                text-align: left;
                input {
                  width: 120px;
                  border: 0;
                  outline:0;
                }
                .address{
                  width: 200px;
                }
                img {
                  vertical-align: middle;
                  margin: 0 5px;
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
      #shade1{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        background:rgba(0,0,0,0.5);
        .hint{
          width:750px;
          height: 750px;
          background-color: #ffffff;
          border-radius: 4px;
          position: absolute;
          top:50%;
          left: 50%;
          margin-left: -375px;
          margin-top: -375px;
          box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
          p{
            color: #666;
            text-align: center;
            font-size: 18px;
            line-height: 60px;
            background: #eff3f5;
            position: relative;
            border-radius: 5px;
            .closehint{
              position: absolute;
              right:30px;
              top:20px;
            }
          }
        }
      }
      #shade2{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,0.5);
        display: none;
        .hint{
          width:1200px;
          height: 620px;
          background-color: #ffffff;
          border-radius: 4px;
          position: absolute;
          top:50%;
          left: 50%;
          margin-left: -600px;
          margin-top: -310px;
          box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
          overflow-y: scroll;
          .hint-title{
            color:#000;
            text-align: center;
            font-size: 18px;
            line-height: 60px;
            background: #eff3f5;
            position: relative;
            border-radius: 5px;
            .closehint{
              position: absolute;
              right:30px;
              top:20px;
            }
          }
          .areas{
            padding: 0 40px 27px 58px;
            center{
              position: absolute;
              bottom:30px;
              left: 50%;
            }
            .area{
              p{
                height: 60px;
                line-height: 60px;
                border-bottom: 1px dotted #dedede;
                .el-radio{
                  width: 100%;
                  }
              }
              ul{
                margin:0 20px 20px 20px;
                width: 1075px;
                background: #f7f9fa;
                padding:0 20px 20px 20px;
                display: none;
                li{
                  width: 100%;
                  height: 53px;
                  line-height: 53px;
                  border-bottom: 1px dotted #d7d9da;
                  span{
                    display: inline-block;
                    width: 120px;
                    text-align: center;
                  }
                  .first{
                    border-right: 1px solid #d7ddf1;
                  }
                }
              }
            }           
          }
        }
        .group{
          display: none;
        }
      }
    }   
  }
</style>