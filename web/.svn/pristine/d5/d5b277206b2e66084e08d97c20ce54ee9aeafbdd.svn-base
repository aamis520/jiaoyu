<template>
  <!--角色确定-->
  <div class="sure">
    <div class="fixed">
      <div class="top">
        角色确定
        <span class="close"><img src="../../../assets/images/litclose_normal.png"></span>
      </div>
      <div class="article">
        <p>
          <router-link active-class="act1" :to="{path:'/accountNumber/creatAccount/headquarters'}">总部</router-link>
          <router-link active-class="act1" :to="{path:'/accountNumber/creatAccount/region'}">大区</router-link>
          <router-link active-class="act1" :to="{path:'/accountNumber/creatAccount/area'}">地区</router-link>
          <router-link active-class="act1" :to="{path:'/accountNumber/creatAccount/scampus'}">校区</router-link>
          <span>
              <input type="text" placeholder="请输入要搜索的校区">
              <img src="../../../assets/search.jpg" alt="">
            </span>
        </p>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    mounted(){
      $(".close").click(function(){
        $(".sure").hide()
      })
    }
  }
</script>

<style lang="less" scoped>
  .sure{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    font-size: 14px;
    .fixed{
      width: 750px;
      height: 720px;
      position:fixed;
      top:50%;
      left:50%;
      margin-left: -375px;
      margin-top: -360px;
      background: #fff;
      border-radius:5px;
      box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
      .top{
        width: 100%;
        height: 60px;
        line-height: 60px;
        position: relative;
        text-align:center;
        background: #eff3f5;
        border-radius:5px;
        font-size: 16px;
        span{
          color: #000;
          background: #eff3f5;
        }
        .close{
          position: absolute;
          right: 30px;
          font-size: 30px;
        }
      }
      .article{
        padding: 20px 40px 30px;
        p{
          a{
            display: inline-block;
            width: 65px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            border-radius: 18px;
            text-decoration: none;
            background: #f2f5f8;
            margin:0 5px;
            color: #000;
          }
          .act1 {
            background:#31c27c;
            color: white;
          }
          span{
            display: inline-block;
            width: 260px;
            height: 30px;
            line-height: 30px;
            position: relative;
            margin-left: 80px;
            border: 1px solid #f2f5f8;
            border-radius: 25px;
            padding-left: 10px;
            input{
              width: 87%;
              border: none;
              outline: none;
            }
            img{
              position: absolute;
              right: 10px;
              top:8px;
            }
          }
        }
      }
    }
  }
</style>
