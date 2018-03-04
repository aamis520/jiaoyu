<template>
  <div class="box">
    <div class="zixun">
      <div class="topx">
        <span><i id="show"><img src="../../assets/zhuanhuan.jpg" alt=""></i>咨询部长 · 权限选择</span>
        <i class="eye" @click="chos=!chos" ><img src="../../assets/eye.jpg" alt=""></i>
        <i class="close"><img src="../../assets/close.jpg" alt=""></i>
        <div class="hide">
          <i><img src="../../assets/san.jpg" alt=""></i>
          <p>请选择您要操作的角色</p>
          <p class="role">
            <el-radio class="radio" v-model="radio" label="1"><span>总部 咨询部 咨询部长</span></el-radio>
            <el-radio class="radio" v-model="radio" label="2"><span>北京大区  海淀地区  西二旗校区  学管师</span></el-radio>
          </p>
        </div>
      </div>
       <div class="conx">
        <p class="zong">
          <span class="null">.</span>
          <el-checkbox v-model="checked" class="look">查看</el-checkbox>
        </p>
        <div class="con">
          <ul class="left">
            <li>总部<i class="el-icon-arrow-right"></i></li>
            <li>咨询<i class="el-icon-arrow-right"></i></li>
            <li>报名<i class="el-icon-arrow-right"></i></li>
            <li>课表<i class="el-icon-arrow-right"></i></li>
            <li>点名<i class="el-icon-arrow-right"></i></li>
            <li>档案<i class="el-icon-arrow-right"></i></li>
            <li>教务<i class="el-icon-arrow-right"></i></li>
            <li>人事<i class="el-icon-arrow-right"></i></li>
            <li>财务<i class="el-icon-arrow-right"></i></li>
            <li>行政<i class="el-icon-arrow-right"></i></li>
            <li>物品<i class="el-icon-arrow-right"></i></li>
          </ul>
          <div class="middle">
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单111</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单222</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单333</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li>
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单444</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li>
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单555</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li>
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单666</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li>
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单777</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li>
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单888</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li>
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单999</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li>
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单101</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li>
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
            <ul class="clearfix">
              <li class="tipsList">
                <div>
                  <el-checkbox class="check">咨询名单102</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li>
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
          </div>
       <div class="right">
            <p>
              <el-checkbox>操作</el-checkbox>
            </p>
            <ul>
              <li>
                <div>
                  <el-checkbox class="check">咨询名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">公开课列表</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">面试多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示咨询学生</el-checkbox>
                </div>
              </li>
              <li>
                <div>
                  <el-checkbox class="check">试听档案</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">测试名单</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">学生完整电话</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">试听多维度分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">咨询师业绩分析</el-checkbox>
                </div>
                <div>
                  <el-checkbox class="check">APP显示在读学生</el-checkbox>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom">
          <p>
            <el-checkbox>所选权限享有所属层及部门的最大查看与操作范围</el-checkbox>
            <i class="i1"><img src="../../assets/SmallduiGou.jpg"></i>
            <i class="i2" id="dianji">重要通知，点击查看</i>
          </p>
        </div>
      </div> 
    </div>
    <div class="big" v-if="chos">
      <div class="permissionView">
        <permission-view></permission-view>
      </div>
    </div> 
    <div class="shade" id="shade1">
       <div class="hint" id="hint1">
          <p class="hint-title"><span>提示</span><img src="../../assets/fork.png" class="closehint"/></p>
          <img class="notice" src="../../assets/notice.png">
          <p class="hint-text">如果某位教工需要获得“所属角色”以外的更多权限，请在本页单独添加</p>
          <p class="hint-sure">
            <img class="cancel" src="../../assets/cancel.png">
            <img class="ok" src="../../assets/confirm_normal.png">
          </p>
      </div>
    </div>
   <div class="shade" id="shade2">
       <div class="hint" id="hint2">
            <p class="hint-title"><span>提示</span><img src="../../assets/fork.png" class="closehint"/></p>
            <img class="notice" src="../../assets/notice.png">
            <p class="hint-text">您确定为“咨询部长”角色添加或修改权限 ？</p>
            <p class="hint-sure">
            <img class="cancel" src="../../assets/cancel.png">
            <img class="ok" src="../../assets/confirm_normal.png">
          </p>
       </div>
   </div>
     <div class="shade" id="shade3">
       <div class="hint" id="hint3">
            <p class="hint-title"><span>提示</span><img src="../../assets/fork.png" class="closehint"/></p>
            <img class="notice" src="../../assets/notice.png">
            <p class="hint-text">您确定关闭此账号吗？该账号对应的全部功能也会被同时关闭。</p>
            <p class="hint-sure">
            <img class="cancel" src="../../assets/cancel.png">
            <img class="ok" src="../../assets/confirm_normal.png" id="ok3">
          </p>
       </div>
   </div>
  </div>
</template>
<script>
import permissionView from "@/page/accountNumber/permissionView"
export default {
  data() {
    return {
      checked: false,
      radio: '1',
      chos:false
    }
  },
  components:{
    permissionView
  },
  mounted() {
    $(".close").click(function() {
      //$(this).parents(".box").hide();
      $("#hint3").show();
        $("#shade3").show();
    });
    $("#ok3").click(function(){
       $(".box").hide();
    });
    $(".topx").hover(function() {
      $(".hide").toggle();
    });
    $(".left>li").click(function() {
      $(this).find("i").show();
      $(this).css({ "color": "#47c686", "background": "#fff" });
      $(this).siblings().find("i").hide();
      $(this).siblings().css({ "color": "#000", "background": "#f7f8fc" });
    });
    $("#dianji").click(function(){
       $("#hint1").show();
        $("#shade1").show();
    });
    $(".tipsList>div").click(function(){
        $("#hint2").show();
        $("#shade2").show();
    })
    $(".cancel").click(function(){
        $(".hint").hide();
        $(".shade").hide();
    });
    $(".closehint").click(function () {
        $(".hint").hide();
        $(".shade").hide();
    });



    var x = $(".middle").children();
    var y = $(".left").children();
    $(".left>li").eq(0).css({ "color": "#47c686", "background": "#fff"});
    $(".left>li").find("i").eq(0).show();
    $(".middle>ul").eq(0).show();
    y.click(function() {
      var index = $(this).index();
      x.eq(index).show().siblings().hide();
    });
  }
}

</script>
<style lang="less" scoped>
.el-checkbox__inner{
      border-radius: 50%;
    }
    .el-input__inner{
      color: #31c27c;
      border: 0;
      outline: none;
      height: 23px;
    }
    .el-input__icon+.el-input__inner {
        padding-right: 5px;
    }
    .el-date-editor--datetimerange.el-input{
      width: 300px;
    }
    [class*=" el-icon-"], [class^=el-icon-]{
      display: none;
      width: 0;
    }
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.clearfix:after {
  clear: both;
  display: flex;
  content: "";
}

.el-checkbox__inner{
  border-radius: 50%;
}
.box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  .zixun {
     width: 1200px;
    // height: 700px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -350px;
    margin-left: -600px;
    border-radius: 5px;
    .topx {
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      position: relative;
      background: #eff3f5;
      border-radius: 5px;
      font-size: 18px;
      .eye {
        position: absolute;
        right: 80px;
      }
      p{
        text-align: left;
      }
      .close {
        position: absolute;
        right: 50px;
        top: -4px;
        font-size: 30px;
        font-style: normal;
      }
      img{
        vertical-align: middle;
        margin-right: 7px;
      }
        .hide {
        position: absolute;
        width: 600px;
        height: 90px;
        background: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        z-index: 10;
        border-radius: 5px;
        color: #fff;
        padding: 20px 27px;
        display: none;
        left:478px;
        i {
          position: absolute;
           top: -35px;
           left: 35px;
        }
        p {
          line-height: 30px;
          .el-radio_label {
            background: red;
          }
        }
        .role {
          span {
            color: #fff;
          }
        }
      }
    }
    .conx {
      width: 100%;
      .zong {
        width: 100%;
        height: 60px;
        line-height: 60px;
        label {
          color: #47c686;
          font-size: 16px;
          margin-left: 240px;
        }
        .look{
          z-index: 0;
        }
        .null{
          display: inline-block;
          width:215px;
          height:60px;
          background: #f7f8fc;
          color: #f7f8fc;
        }
      }
      .con {
        position: relative;
        .left {
          width: 215px;
          height: 510px;
          background: #f7f8fc;
          font-size: 16px;
          position: relative;
          li {
            width: 100%;
            height: 45px;
            line-height: 45px;
            position: relative;
            text-align: center;
            i {
              position: absolute;
              right: 20px;
              top: 16px;
              display: none;
            }
          }
        }
        .middle {
          ul {
            width: 480px;
            position: absolute;
            left: 240px;
            top: 0;
            display: none;
            li {
              width: 240px;
              height: 510px;
              float: left;
              padding-left: 30px;
              .check {
                margin-right: 5px;
                z-index: 0;
              }
              div {
                width: 100%;
                height: 40px;
                line-height: 40px;
              }
            }
            li:nth-child(1) {
              border-right: 1px solid #f2f4fc;
            }
          }
        }
        .right {
          width: 480px;
          height: 580px;
          background: #f7f8fc;
          position: absolute;
          right: 20px;
          top: -60px;
          p {
            width: 100%;
            height: 60px;
            line-height: 60px;
            text-align: center;
          }
          ul {
            width: 480px;
            li {
              width: 50%;
              float: left;
              padding-left: 30px;
              .check {
                margin-right: 5px;
              }
              div {
                width: 100%;
                height: 40px;
                line-height: 40px;
              }
            }
            li:nth-child(1) {
              border-right: 1px solid #fff;
            }
          }
        }
      }
    }
    .bottom {
      p {
        height: 60px;
        line-height: 60px;
        padding-left: 30px;
        .i1{
          margin-left: 205px;
          img {
            vertical-align: middle;
          }
        }
        .i2{
          margin-left: 420px;
          color: #2f9bff;
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
    background: rgba(0,0,0,0.5);
    .hint{
      width: 380px;
      height: 220px;
      background-color: #ffffff;
      border-radius: 4px;
      position: absolute;
      top:50%;
      left: 50%;
      z-index: 6;
      margin-left: -190px;
      margin-top: -110px;
      box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
      display: none;
      p{
        color: #666;
        text-align: center;
        font-size: 14px;
        line-height: 26px;
      }
      .notice{
        margin:20px 45% 10px 45%; 
      }
      .hint-text{
        padding: 0 30px;
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
  .big{
    position:relative;
    z-index:30;
    .permissionView{
      position:absolute;
      left:50%;
      top:50%;
      margin-left: -600px;
      margin-top: 100px;
    }
  }
}

</style>
