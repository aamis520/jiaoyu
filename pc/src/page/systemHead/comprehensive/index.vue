<style lang="less">
      .longUse-mess{
          color: #333;
          .top{
              width: 928px;
              height:48px ;
              background-color: #fff;
              border-radius: 5px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 28px 0 22px;
              span{
                 font-size: 16px;
                  color:#319863 ;
              }
              .edit{
                  width: 25px;
                  height: 25px;
              }
          }
          .section{
              width: 977px;
              .grade-set{
                  background-color: #fff;
                  height:180px;
                  padding: 0 22px;
                  margin-top: 12px;
                  border-radius: 5px;
                  .sec-top{
                      height: 49px;
                      display: flex;
                      align-items: center;
                      border-bottom: 1px dashed #999;
                      position: relative;
                      span{
                          color: #319863;
                          font-weight: 500;
                          margin-right: 8px;
                      }
                      .hint:hover  {
                          display: inline-block;
                          height: 16px;
                          width: 16px;
                          background-image: url(../../../images/common-icon/allnotes_hover.png);
                          background-repeat: no-repeat;
                          background-size: 100% 100%;
                          cursor: pointer;
                          .hint-mess{
                              display: block;
                          }
                      }
                      .hint-mess{
                          /*width: 275px;*/
                          /*height:63px;*/
                          display: none;
                          border-radius: 5px;
                          background-color: #31c27c;
                          padding: 11px 16px;
                          color: #fff;
                          position: absolute;
                          top:-55px;
                          left: 98px;
                          span{
                              display: block;
                              width: 0;
                              height: 0;
                              border: 6px solid #31c27c;
                              position: absolute;
                              bottom: -12px;
                              left: 19px;
                              border-right: 6px solid #fff;
                              border-bottom: 6px solid #fff;
                              border-left: 6px solid #fff;
                          }
                      }
                  }
                  .sel-nav{
                      ul{
                          width: 105%;
                          margin-top: 27px;
                          li{
                              width: 53px;
                              float: left;
                              margin-right: 50px;
                              margin-bottom: 20px;
                              position: relative;
                              cursor: pointer;
                          }
                      }
                      .age-sel{
                          li{
                              cursor: pointer;
                              width: 75px;
                              margin-right:5px;
                              i{
                                  margin-left: 5px;
                              }
                          }
                      }
                  }
              }
              .sel-ageOrclass{
                  background-color: #fff;
                  height:180px;
                  padding: 0 22px;
                  margin-top: 12px;
                  border-radius: 5px;
                  .sec-top {
                      height: 49px;
                      display: flex;
                      align-items: center;
                      border-bottom: 1px dashed #999;
                      position: relative;
                      span {
                          color: #319863;
                          font-weight: 500;
                          margin-right: 8px;
                      }
                  }
                  .radio-sel{
                      padding-top: 23px;
                     ul{
                         width: 80%;
                         li{
                             float: left;
                             display: flex;
                             margin-bottom: 18px;
                             cursor: pointer;
                             span{
                                 display: inline-block;
                                 height: 16px;
                                 line-height: 16px;
                                 margin-left: 8px;
                             }
                         }
                        li:nth-of-type(1)
                        ,li:nth-of-type(4){
                            width: 205px;
                        }
                         li:nth-of-type(2)
                         ,li:nth-of-type(5){
                             width: 300px;
                         }
                     }
                  }
              }
              .except-student{
                   .add-stu-rank{
                       padding-top: 26px;
                       span{
                           display: inline-block;
                           position: relative;
                           margin-right: 75px;
                           margin-bottom: 26px;
                       }
                       span:nth-of-type(1){
                           margin-right: 39px;
                       }
                       input{
                           border-bottom: 1px solid #999;
                           padding-left: 6px;
                           width: 75px;
                       }
                   }
              }
              .mess-from{
                  .mess-nav{
                      ul{
                          padding-top: 21px;
                          li{
                              width: 116px;
                              height: 19px;
                              margin-bottom:28px ;
                              float: left;
                              display: flex;
                              align-items: center;
                              cursor: pointer;
                              /*margin-right: 20px;*/
                              i{
                                  margin-left: 3px;
                                  .in-mess{
                                      padding-left: 19px;
                                      width: 611px;
                                      height: 91px;
                                      position: absolute;
                                      bottom: -5px;
                                      border-radius: 5px;
                                      z-index: 99;
                                      background: rgba(000,000,000,0.7);
                                      left: -26px;
                                      top: 30px;
                                      p:nth-of-type(1){
                                          margin-top: 18px;
                                          color: #fff;
                                      }
                                      p:nth-of-type(2){
                                          margin-top: 15px;
                                          position: relative;
                                          input{
                                              border-bottom: 1px solid #fff;
                                              width: 75px;
                                              padding-left: 10px;
                                              color: #fff;
                                              margin-right:17px ;
                                          }
                                          i{
                                              position: absolute;
                                              right:26px;
                                              top: -6px;
                                          }
                                      }
                                      span{
                                          display: inline-block;
                                          border: 6px solid #494949;
                                          position: absolute;
                                          top: -12px;
                                          left:30px ;
                                          width: 0;
                                          height:0;
                                          border-right:6px solid #fff;
                                          border-top: 6px solid #fff;
                                          border-left: 6px solid #fff;
                                      }
                                  }
                              }
                        }
                     }
                  }
              }
              .teacher-set{
                  background-color: #fff;
                  padding: 0 22px;
                  margin-top: 12px;
                  border-radius: 5px;
                  padding-bottom: 45px;
                  .sec-top{
                      height: 49px;
                      display: flex;
                      align-items: center;
                      border-bottom: 1px dashed #999;
                      position: relative;
                      span{
                          color: #319863;
                          font-weight: 500;
                          margin-right: 8px;
                      }
                      .hint:hover  {
                          display: inline-block;
                          height: 16px;
                          width: 16px;
                          background-image: url(../../../images/common-icon/allnotes_hover.png);
                          background-repeat: no-repeat;
                          background-size: 100% 100%;
                          cursor: pointer;
                          .hint-mess{
                              display: block;
                          }
                      }
                      .hint-mess{
                          /*width: 275px;*/
                          /*height:63px;*/
                          display: none;
                          border-radius: 5px;
                          background-color: #31c27c;
                          padding: 11px 16px;
                          color: #fff;
                          position: absolute;
                          top:-55px;
                          left: 98px;
                          span{
                              display: block;
                              width: 0;
                              height: 0;
                              border: 6px solid #31c27c;
                              position: absolute;
                              bottom: -12px;
                              left: 19px;
                              border-right: 6px solid #fff;
                              border-bottom: 6px solid #fff;
                              border-left: 6px solid #fff;
                          }
                      }
                  }
                  P{
                      padding-top: 26px;
                      span{
                          display: inline-block;
                          position: relative;
                          margin-right: 75px;
                          margin-bottom: 26px;
                      }
                      span:nth-of-type(1){
                          margin-right: 39px;
                          color: #3b986b;
                      }
                      input{
                          border-bottom: 1px solid #999;
                          padding-left: 6px;
                          width: 75px;
                      }
                  }
              }
              .repository-set{
                  .sec-bottom{
                      margin-top: 26px;
                      display: flex;
                      p{
                          height: 16px;
                          display: flex;
                          align-items: center;
                          cursor:none;
                          color: #999;
                          i{
                              margin-right: 8px;
                          }
                          span{
                              display: inline-block;
                              height: 16px;
                              line-height: 16px;
                          }
                      }
                      p:nth-of-type(1){
                          margin-right: 133px;
                      }
                  }
              }
              .clocking-in{
                  .clock-top{
                      margin-top: 26px;
                  }
                  .or-play-clock{
                      margin-top: 26px;
                      display: flex;
                      p{
                          height: 16px;
                          display: flex;
                          align-items: center;
                          cursor: pointer;
                          i{
                              margin-right: 8px;
                          }
                          span{
                              display: inline-block;
                              height: 16px;
                              line-height: 16px;
                          }
                      }
                      p:nth-of-type(1){
                          margin-right: 164px;
                      }
                  }
              }
              .class-time{
                  .clock-top{
                      margin-top: 26px;
                  }
                  .class-top{
                      margin-top: 26px;
                      display: flex;
                      p{
                          height: 16px;
                          display: flex;
                          align-items: center;
                          cursor: pointer;
                          i{
                              margin-right: 8px;
                          }
                          span{
                              display: inline-block;
                              height: 16px;
                              line-height: 16px;
                          }
                      }
                      p:nth-of-type(1){
                          width: 412px;
                          cursor: default;
                      }
                      p:nth-of-type(2){
                          margin-right: 20px;
                      }
                  }
                  .class-bottom{
                      margin-top: 26px;
                      display: flex;
                      p{
                          height: 16px;
                          display: flex;
                          align-items: center;
                          cursor: pointer;
                          i{
                              margin-right: 8px;
                          }
                          span{
                              display: inline-block;
                              height: 16px;
                              line-height: 16px;
                          }
                      }
                      p:nth-of-type(1){
                          width: 412px;
                          cursor: default;
                      }
                      p:nth-of-type(2){
                         margin-right: 20px;
                      }
                  }
              }
              .class-time-two{
                  .base{
                      margin-top: 22px;
                      display: flex;
                      flex-wrap: wrap;
                      div{
                          display: flex;
                          margin-right: 90px;
                          p{
                              margin-bottom: 24px;
                              height: 16px;
                              display: flex;
                              align-items: center;
                              cursor: pointer;
                              i{
                                  margin-right: 8px;
                              }
                              span{
                                  display: inline-block;
                                  height: 16px;
                                  line-height: 16px;
                              }
                          }
                          p:nth-of-type(1){
                              width: 230px;
                              cursor: default;
                          }
                          p:nth-of-type(2){
                              margin-right: 35px;
                          }
                      }
                  }
              }
              .class-course{
                  .class-top{
                      margin-top: 26px;
                      display: flex;
                      p{
                          height: 16px;
                          display: flex;
                          align-items: center;
                          cursor: pointer;
                          i{
                              margin-right: 8px;
                          }
                          span{
                              display: inline-block;
                              height: 16px;
                              line-height: 16px;
                          }
                      }
                      p:nth-of-type(1){
                          width: 230px;
                          cursor: default;
                      }
                      p:nth-of-type(2){
                          margin-right: 36px;
                      }
                  }
                  .class-bottom{
                      margin-top: 26px;
                      display: flex;
                      p{
                          height: 16px;
                          display: flex;
                          align-items: center;
                          cursor: pointer;
                          i{
                              margin-right: 8px;
                          }
                          span{
                              display: inline-block;
                              height: 16px;
                              line-height: 16px;
                          }
                      }
                      p:nth-of-type(1){
                          width: 230px;
                          cursor: default;
                      }
                      p:nth-of-type(2){
                          margin-right: 36px;
                      }
                  }
              }
              .course-stati{
                  .stati{
                      margin-top: 20px;
                      input{
                          border-bottom: 1px solid #999;
                          /*padding-left: 6px;*/
                          width: 50px;
                          text-align: center;
                      }
                  }
              }
              .apply-know{
                  .inp-one{
                      margin-top: 18px;
                      input{
                          width: 509px;
                          color: #333;
                          border-bottom: 1px solid #999;
                          padding-bottom: 3px;
                      }
                  }
                  .inp-two{
                      margin-top: 29px;
                      input{
                          width: 509px;
                          color: #333;
                          border-bottom: 1px solid #999;
                          padding-bottom: 3px;
                      }
                  }
              }
              .app-patriarch{
                  .base-app{
                      margin-top: 19px;
                      display: flex;
                      .app-l{
                          p{
                              width: 195px;
                          }
                      }
                      .app-r{
                          display: flex;
                          flex-wrap: wrap;
                          p{
                              height: 16px;
                              display: flex;
                              align-items: center;
                              margin-bottom: 19px;
                              cursor: pointer;
                              i{
                                  margin-right: 8px;
                              }
                              span{
                                  display: inline-block;
                                  height: 16px;
                                  line-height: 16px;
                              }
                          }
                          p:nth-of-type(1),
                          p:nth-of-type(4){
                              width: 217px;
                          }
                          p:nth-of-type(2),
                          p:nth-of-type(5){
                              width: 205px;
                          }
                          p:nth-of-type(3),
                          p:nth-of-type(6){
                              width: 250px;
                          }
                      }
                  }
              }
              .app-branch-d{
                  .base-app{
                      margin-top: 19px;
                      display: flex;
                      .app-l{
                          p{
                              width: 195px;
                          }
                      }
                      .app-r{
                          display: flex;
                          flex-wrap: wrap;
                          p{
                              height: 16px;
                              display: flex;
                              align-items: center;
                              margin-bottom: 19px;
                              cursor: pointer;
                              i{
                                  margin-right: 8px;
                              }
                              span{
                                  display: inline-block;
                                  height: 16px;
                                  line-height: 16px;
                              }
                          }
                          p:nth-of-type(1),
                          p:nth-of-type(4){
                              width: 217px;
                          }
                          p:nth-of-type(2),
                          p:nth-of-type(5){
                              width: 205px;
                          }
                          /*p:nth-of-type(3) {*/
                              /*width: 250px;*/
                          /*}*/
                      }
                  }
              }
              .avatar-uploader .el-upload {
                  border: 1px solid #d9d9d9;
                  /*border-radius: 6px;*/
                  cursor: pointer;
                  position: relative;
                  overflow: hidden;
              }
              .avatar-uploader .el-upload:hover {
                  border-color: #409EFF;
              }
              .avatar-uploader-icon {
                  font-size: 28px;
                  color: #8c939d;
                  width: 58px;
                  height: 58px;
                  line-height: 58px;
                  text-align: center;
              }
              .avatar {
                  width: 58px;
                  height: 58px;
                  display: block;
              }
              .upLoad-logo{
                  position: relative;
                 .sec-up{
                     display: flex;
                     margin-top: 27px;
                     color: #999;
                     .stu-end-one{
                         display: flex;
                         align-items: center;
                         span{
                             margin-right: 13px;
                         }
                     }
                     .stu-end-one:nth-of-type(1){
                         margin-right: 42px;
                     }
                     .stu-end-one:nth-of-type(2){
                         margin-right: 53px;
                     }
                     .inp{
                         display: flex;
                         align-items: center;
                         input{
                             border-bottom: 1px solid #31c27c;
                             width: 238px;
                             padding-left: 3px;
                             padding-bottom: 2px;
                         }
                     }
                 }
                  .pos-radio{
                      display: flex;
                      height: 16px;
                      align-items: center;
                      position: absolute;
                      right: 26px;
                      bottom: 18px;
                      color: #999;
                      cursor: pointer;
                      i{
                          margin-right: 8px;
                      }
                      span{
                          display: inline-block;
                          height: 16px;
                          line-height: 16px;
                      }
                  }
              }
              .repository{
                  .sec-bottom{
                      margin-top: 28px;
                      display: flex;
                      p:nth-of-type(1){
                          margin-right: 55px;
                      }
                      p{
                          input{
                              width: 32px;
                              text-align: center;
                              border-bottom:1px solid #999 ;
                          }
                      }
                  }
              }
              .sub-bt{
                 width: 100%;
                  height: 46px;
                  background-color: #fff;
                  border-radius: 5px;
                  margin-top: 12px;
                  div{
                      margin-left: 474px;
                      display: flex;
                      height: 46px;
                      align-items: center;
                      i:nth-of-type(1){
                          margin-right: 53px;
                      }
                  }
              }
          }
      }
</style>
<template>
  <div class="longUse-mess">
      <div class="top">
          <span>常用信息</span>
          <i class="edit ico-init ico-edit" @click="editX = !editX"></i>
      </div>
      <div class="section">
          <div class="grade-set">
              <div class="sec-top">
                  <span>学生年级段 · 设置</span>
                  <i class="hint ico-hint">
                      <div class="hint-mess">
                          <p>请选择适合贵校的年级段，多选对于</p>
                          <p>系统显示和操作并无益处</p>
                          <span></span>
                      </div>
                  </i>
              </div>
              <div class="sel-nav hf">
                  <ul class="sel-classSec">
                      <li >全部 <i></i></li>
                      <li >小一 <i></i></li>
                      <li >小二 <i></i></li>
                      <li >小三 <i></i></li>
                      <li >小四 <i></i></li>
                      <li >小五 <i></i></li>
                      <li >小六 <i></i></li>
                      <li >初一 <i></i></li>
                      <li >初二 <i></i></li>
                      <li >初三 <i></i></li>
                      <li >高一 <i></i></li>
                      <li >高二 <i></i></li>
                      <li >高三 <i></i></li>
                      <li >成人 <i></i></li>
                      <li >幼小 <i></i></li>
                      <li >幼中 <i></i></li>
                      <li >幼大 <i></i></li>
                      <li >学前 <i></i></li>
                  </ul>
              </div>
          </div>
          <div class="grade-set">
              <div class="sec-top">
                  <span>学生年龄段 · 设置</span>
                  <i class="hint ico-hint">
                      <div class="hint-mess">
                          <p>请选择适合贵校的年龄段，多选对于</p>
                          <p>系统显示和操作并无益处</p>
                          <span></span>
                      </div>
                  </i>
              </div>
              <div class="sel-nav hf">
                  <ul class="age-sel">
                      <li >全部 <i></i></li>
                      <li>1<i ></i> </li>
                      <li>2<i ></i></li>
                      <li>3<i ></i></li>
                      <li>4<i ></i></li>
                      <li>5<i ></i></li>
                      <li>6<i ></i></li>
                      <li>7<i ></i></li>
                      <li>8<i ></i></li>
                      <li>9<i ></i></li>
                      <li>10<i ></i></li>
                      <li>11<i></i></li>
                      <li>12<i></i></li>
                      <li>13<i></i></li>
                      <li>14<i></i></li>
                      <li>15<i></i></li>
                      <li>16<i></i></li>
                      <li>17<i></i></li>
                      <li>19<i></i></li>
                      <li>20<i></i></li>
                      <li>20以上<i></i></li>
                  </ul>
              </div>
          </div>
          <div class="sel-ageOrclass">
               <div class="sec-top">
                   <span>学生 · 年级年龄 · 设置（六选一）</span>
               </div>
              <div class="radio-sel">
                  <ul class="six-one hf">
                      <li> <i class="empty-circle"></i><span>仅显示年龄</span></li>
                      <li> <i class="empty-circle"></i><span>仅显示年龄，并精确到岁数</span> </li>
                      <li> <i class="empty-circle"></i><span>仅显示年龄，并精确到月份</span> </li>
                      <li> <i class="empty-circle"></i><span> 优先显示年级</span></li>
                      <li> <i class="empty-circle"></i> <span>优先显示年龄，并精确到岁数</span></li>
                      <li>  <i class="empty-circle"></i><span>优先显示年龄，并精确到月份</span> </li>
                  </ul>
              </div>
          </div>
          <div class="except-student grade-set">
              <div class="sec-top">
                  <span>特殊学生身份 · 限12条</span>
              </div>
              <div class="add-stu-rank">
                  <span>教工直系亲属</span>
                  <span v-for="(item,index) in excStudent">{{item.name}}<i class="ico-camcel-X" v-if="editX" @click="cancelExStu(index)"></i></span>
                  <span><input type="text" v-model="exStu" placeholder="自定义添加" v-if="inBool" @blur="addExstudent"></span>
              </div>
          </div>
          <div class="mess-from  grade-set">
              <div class="sec-top">
                  <span>信息来源 · 二级菜单 · 设置</span>
              </div>
              <div class="mess-nav">
                  <ul class="messFrom">
                      <li v-for="item in messFromArr" @click.prevent="levShowOrhide(item)"><span>{{item.name}}</span> <i class="ico-mess-from" >
                          <div class="in-mess"  v-if="item.bool" @click.stop = "item.bool = true">
                              <span></span>
                              <p>{{item.name}} · 二级菜单（5字以内）</p>
                              <p>
                                  <input type="text" maxlength="5" v-model="messListOne">
                                  <input type="text" maxlength="5" v-model="messListTwo">
                                  <input type="text" maxlength="5" v-model="messListThree">
                                  <input type="text" maxlength="5" v-model="messListFour">
                                  <input type="text" maxlength="5" v-model="messListFri">
                                  <i class="sel-circle-ok" @click.stop="btOk(item)"></i>
                              </p>
                          </div>
                      </i></li>
                  </ul>
              </div>
          </div>
          <div class="teacher-set">
              <div class="sec-top">
                  <span>教师级别 · 设置 · 限12条</span>
              </div>
              <div class="type-tea-set">
                  <p>
                      <span>专教级别</span> <span v-for="(item,index) in fullTeaArr">{{item.name}} <i class="ico-camcel-X" v-if="editX" @click="cancelFull(index)"></i></span> <span v-if="fullBool"><input type="text" placeholder="自定义添加" v-model="fullTea" @blur="addFull()"> </span>
                  </p>
                  <p>
                      <span>兼教级别</span> <span v-for="(item,index) in partTeaArr">{{item.name}} <i class="ico-camcel-X" v-if="editX" @click="cancelPart(index)"></i></span> <span v-if="partBool"><input type="text" placeholder="自定义添加" v-model="partTea" @blur="addPart()"> </span>
                  </p>
              </div>
          </div>
          <div class="repository grade-set">
              <div class="sec-top">
                  <span>资源库 · 设置</span>
              </div>
              <div class="sec-bottom">
                  <p> 一线人员的资源信息，<input type="number" v-model="aResNum" min="1"> 天不跟进，自动滚回分校库</p>
                  <p>分校库的资源信息，<input type="number" v-model="branRenNum" min="1"> 天不跟进，自动滚回总部库</p>
              </div>
          </div>
          <div class="repository-set grade-set">
              <div class="sec-top">
                  <span>客服系统 · 设置</span>
              </div>
              <div class="capacity sec-bottom">
                  <p><i class="empty-circle"></i> <span>开启人工客服功能</span></p>
                  <p><i class="empty-circle"></i> <span>开启机器人客服功能</span></p>
              </div>
          </div>
          <div class="clocking-in grade-set">
              <div class="sec-top">
                  <span>考勤系统 · 设置</span>
              </div>
              <div class="clock-top">
                  本系统所带考勤功能，是通过WiFi、GPS、二维码扫描等多种方式打卡，对教职员工进行考勤统计
              </div>
              <div class="or-play-clock">
                  <p><i class="click-circle"></i> <span>开通考勤功能</span></p>
                  <p><i class="empty-circle"></i> <span>不开通考勤功能</span></p>
              </div>
          </div>
          <div class="class-time grade-set">
              <div class="sec-top">
                  <span>课表相关 · 设置</span>
              </div>
              <div class="classCouceAll class-top">
                  <p>分校课表，是否显示在该校区任课教师在所有小区的课表</p>
                  <p><i class="empty-circle"></i> <span>否</span></p>
                  <p><i class="empty-circle"></i> <span>是</span></p>
              </div>
              <div class="isShow-time class-bottom">
                  <p>分校课表，是否显示在该校区任课教师的坐班时间表</p>
                  <p><i class="empty-circle"></i> <span>否</span></p>
                  <p><i class="empty-circle"></i> <span>是</span></p>
              </div>
          </div>
          <div class="class-time-two grade-set">
              <div class="sec-top">
                  <span>课表相关 · 设置2</span>
              </div>
              <div class="base">
                  <div class="isTeacher-one">
                      <p>是否允许专职教师为自己排课</p>
                      <p><i class="empty-circle"></i> <span>否</span></p>
                      <p><i class="empty-circle"></i> <span>是</span></p>
                  </div>
                  <div  class="isTeacher-Two">
                      <p>专职教师排课是否需要审批</p>
                      <p><i class="empty-circle"></i> <span>否</span></p>
                      <p><i class="empty-circle"></i> <span>是</span></p>
                  </div>
                  <div  class="isTeacher-three">
                      <p>是否允许各分校为自己排课</p>
                      <p><i class="empty-circle"></i> <span>否</span></p>
                      <p><i class="empty-circle"></i> <span>是</span></p>
                  </div>
                  <div  class="isTeacher-four">
                      <p>各分校排课是否需要审批</p>
                      <p><i class="empty-circle"></i> <span>否</span></p>
                      <p><i class="empty-circle"></i> <span>是</span></p>
                  </div>
              </div>
          </div>
          <div class="class-course grade-set">
              <div class="sec-top">
              <span>班级课程 · 设置</span>
          </div>
              <div class="stats-unit class-top">
                  <p>班级课程的统计单位为</p>
                  <p><i class="empty-circle"></i> <span>次</span></p>
                  <p><i class="empty-circle"></i> <span>课时</span></p>
              </div>
              <div class="learningTeach class-bottom">
                  <p>班级学生是否受学管师管理</p>
                  <p><i class="empty-circle"></i> <span>是</span></p>
                  <p><i class="empty-circle"></i> <span>否</span></p>
              </div>
          </div>
          <div class="course-stati grade-set">
              <div class="sec-top">
                  <span>班级课程 · 排课系数统计 · 设置</span>
              </div>
              <div class="stati">
                  舂秋季，教室日最大可排课 <input type="number" v-model="numOne" min="1">次 , 寒暑季<input type="number" v-model="numTwo" min="1">次；教师上课天数，春秋季按<input type="number" v-model="numThree" min="1">日/周计算，寒暑季按<input type="number" v-model="numFour" min="1">日/周计算
              </div>
              <div class="stati">
                  舂秋季，教师周一至周五，日最多可上课 <input type="number" v-model="numFri" min="1">次 ，寒暑季<input type="number" v-model="numSix" min="1">次；周六日，教师日最多可上课次数，春秋季<input type="number" v-model="numSev" min="1">次，寒暑季<input type="number" v-model="numEig" min="1">次
              </div>
          </div>
          <div class="course-stati grade-set">
              <div class="sec-top">
                  <span>VIP课程 · 排课系数统计 · 设置</span>
              </div>
              <div class="stati">
                  舂秋季,每个座位日最大可排课 <input type="number" v-model="vipNumOne" min="1">次 , 寒暑季<input type="number" v-model="vipNumTwo" min="1">次；教师上课天数，春秋季按<input type="number" v-model="vipNumThree" min="1">日/周计算，寒暑季按<input type="number" v-model="vipNumFour" min="1">日/周计算
              </div>
              <div class="stati">
                  舂秋季，教师周一至周五，日最多可上课 <input type="number" v-model="vipNumFri" min="1">次 ， 寒暑季<input type="number" v-model="vipNumSix" min="1">次；周六日，教师日最多可上课次数，春秋季<input type="number" v-model="vipNumSev" min="1">次，寒暑季<input type="number" v-model="vipNumEig" min="1">次
              </div>
          </div>
          <div class="apply-know  grade-set" >
              <div class="sec-top">
                  <span>报名须知 · 设置</span>
              </div>
              <div class="inp-one">
                  <input type="text" placeholder="请填写报名须知 ，家长将会在手机端看到并确认，才可报名；如不填写则不予显示" v-model="applyNotice">
              </div>
          </div>
          <div class="apply-know  grade-set" >
              <div class="sec-top">
                  <span>退费须知 · 设置</span>
              </div>
              <div class="inp-two">
                  <input type="text" placeholder="请填写报名须知 ，家长将会在手机端看到并确认，才可报名；如不填写则不予显示" v-model="returnNotice">
              </div>
          </div>
          <div class="app-patriarch grade-set">
              <div class="sec-top">
                  <span>手机APP · 家长端 · 设置</span>
              </div>
              <div class="base-app">
                  <div class="app-l">
                      <p>
                          家长在手机端可看到:
                      </p>
                  </div>
                  <div class="appPatriarch app-r">
                      <p>
                          <i class="empty-circle"></i>
                          <span>孩子就读班级的家长圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>孩子就读校区的家长圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>全部校区的家长圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>孩子就读班级的教师圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>孩子就读校区的教师圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>全部校区的教师圈</span>
                      </p>
                  </div>
              </div>
          </div>
          <div class="app-branch-d grade-set">
              <div class="sec-top">
                  <span>手机APP · 教师端 · 设置</span>
              </div>
              <div class="base-app">
                  <div class="app-l">
                      <p>教师在手机端可看到:</p>
                  </div>
                  <div class="app-teacher app-r">
                      <p>
                          <i class="empty-circle"></i>
                          <span>自己所在校区的家长圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>全部校区的家长圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>与自己关联的班级和学生的家长圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>自己授课校区的教师圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>全部校区的教师圈</span>
                      </p>
                  </div>
              </div>
          </div>
          <div class="app-branch-d grade-set">
              <div class="sec-top">
                  <span>手机APP · 分校教工 · 设置</span>
              </div>
              <div class="base-app">
                  <div class="app-l">
                      <p>分校教工在手机端可看到:</p>
                  </div>
                  <div class="appBranch-t app-r">
                      <p>
                          <i class="empty-circle"></i>
                          <span>自己所在校区的家长圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>全部校区的家长圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>与自己关联的班级和学生的家长圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>自己所在校区的教师圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>全部校区的教师圈</span>
                      </p>
                  </div>
              </div>
          </div>
          <div class="app-branch-d grade-set">
              <div class="sec-top">
                  <span>手机APP · 总部教工 · 设置</span>
              </div>
              <div class="base-app">
                  <div class="app-l">
                      <p>总部教工在手机端可看到:</p>
                  </div>
                  <div class="app-all app-r">
                      <p>
                          <i class="empty-circle"></i>
                          <span>全部校区的家长圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>全部校区的教师圈</span>
                      </p>
                      <p>
                          <i class="empty-circle"></i>
                          <span>总部教工的教师圈</span>
                      </p>
                  </div>
              </div>
          </div>
          <div class="upLoad-logo grade-set">
              <div class="sec-top">
                  <span>上传学校LOGO公章</span>
              </div>
              <div class="sec-up">
                  <div class="stu-end-one">
                      <span>点击上传LOGO</span>
                      <el-upload
                          class="avatar-uploader"
                          action="/api/api-aliyunoss/ossController/uploadImageOss?accessToken=aaaa&folder=header/"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload">
                          <img v-if="imageUrl" :src="imageUrl" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                  </div>
                  <div class="stu-end-one">
                      <span>点击上传公章</span>
                      <el-upload
                          class="avatar-uploader"
                          action="/api/api-aliyunoss/ossController/uploadImageOss?accessToken=aaaa&folder=header/"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccesst"
                          :before-upload="beforeAvatarUploadt">
                          <img v-if="imageUrlt" :src="imageUrlt" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                  </div>
                  <div class="inp">
                      <input type="text" placeholder="请输入我们的学校校训（或口号）" v-model="slogan">
                  </div>
              </div>
              <div class="pos-radio">
                  <i class="empty-circle"></i>
                  <span>此信息将会在系统顶部导航区域展示，用以激励我们的同事</span>
              </div>
          </div>
          <div class="sub-bt">
              <div>
                  <i class ="sel-circle-ok" @click="save"></i>
                  <i class ="click-right" @click="nextPage"></i>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
    import system  from  '@commonJS/const';
    export default {
    data() {
    return {
        imageUrl:"",
        imageUrlt:"",
        sixSelone:"",//年级年龄六选一
        excStudent:[],//特殊学生存储
        editX:false,//编辑状态的叉
        exStu:"",//特殊学生输入值
        inBool:true,//控制特殊学生的数量
        messFromArr:[
            {name:"招生登记",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"热线打入",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"广告投放",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"转介绍",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"家长直访",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"活动登记",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"地摊宣传",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"网络宣传",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"微信营销",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"合作培养",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"其他",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
            {name:"上级分配",bool:false,menu:{one:"",two:"",three:"",four:"",fri:""}},
        ],
        messListOne:"",//接收信息来源二级菜单值
        messListTwo:"",
        messListThree:"",
        messListFour:"",
        messListFri:"",
        fullTeaArr:[],//教师级别存放处
        partTeaArr:[],//兼教级别存放处
        fullTea:'',//教师级别添加值
        partTea:'',//兼教级别添加值
        fullBool:true,//教师级别输入框显隐
        partBool:true,//兼教级别输入框显隐
        aResNum:"",//一线人员资源回滚天数
        branRenNum:"",//分校资源回滚天数
        onCapacity:"",//开启智能类别
        isClocking:"",//是否开通考勤
        classTimeAll:"",//是否显示任课老师在所有小区的课表
        isShowTime:"",//是否显示任课老师坐班时间表
        oneSelf:"",//是否允许专职教师为自己拍客
        claApprove:"",//专职教师排课是否需要审批
        isBranch:"",//是否允许各分校为自己排课
        branchApprove:"",//各分校排课是否需要审批
        statsUnit:"",//班级课程的统计单位
        isLearning:"",//班级学生是否受学管师管理
        numOne:"",//(班级)教室日最大可排课几次
        numTwo:"",//(班级)寒暑季几次
        numThree:"",//(班级)春秋季按几日/周
        numFour:"",//(班级)寒暑季按几日/周
        numFri:"",//(班级)舂秋季，教师周一至周五日最多可上课几次
        numSix:"",//(班级)寒暑季，教师周一至周五日最多可上课几次
        numSev:"",//(班级)周六日，教师日最多可上课次数，，春秋季几次
        numEig:"",//(班级)周六日，教师日最多可上课次数，，寒暑季几次
        vipNumOne:"",//(VIP)舂秋季,每个座位日最大可排课几次
        vipNumTwo:"",//(VIP)寒暑季几次
        vipNumThree:"",//(VIP)教师上课天数，春秋季按几日/周
        vipNumFour:"",//(VIP)教师上课天数，寒暑季按几日/周
        vipNumFri:"",//(VIP)舂秋季，教师周一至周五日最多可上课几次
        vipNumSix:"",//(VIP)寒暑季，教师周一至周五日最多可上课几次
        vipNumSev:"",//(VIP)周六日，教师日最多可上课次数，，春秋季几次
        vipNumEig:"",//(VIP)周六日，教师日最多可上课次数，，寒暑季几次
        applyNotice:"",//报名须知
        returnNotice:"",//退费须知
        slogan:"",//学校口号
        isShowslogan: "",
        initializeArr:  {}
    };
  },
    methods:{
        handleAvatarSuccess(res, file) {
            console.log("url",file)
            this.imageUrl = URL.createObjectURL(file.raw);
            console.log( this.imageUrl)
        },
        beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return  isLt2M;
        },
        handleAvatarSuccesst(res, file) {
            console.log("url",file)
            this.imageUrlt = URL.createObjectURL(file.raw);
            console.log( this.imageUrlt)
        },
        beforeAvatarUploadt(file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return  isLt2M;
        },
        addExstudent(){
                if(this.exStu.replace(/(^\s*)|(\s*$)/g, "") != ""){
                    this.excStudent.push({
                        name:this.exStu,
                        is_check : "",
                        head_school_id :this.$ls.get("USER_INFO").headSchoolId,
                        user_id : "",
                        create_time : "",
                        is_delete : "",
                        update_user_id : "",
                        update_time : ""
                    });
                    this.exStu = "";
                }
                if(this.excStudent.length == 12){
                    this.inBool = false;
                }
        },//添加特殊学生
        cancelExStu(i){
            this.excStudent.splice(i,1);
            this.inBool = true;
        },//删除特殊学生
        levShowOrhide(item){
            if(item.bool == false){
                for(let j = 0; j < this. messFromArr.length; j++) {
                    this.$set(this. messFromArr, j , Object.assign(this. messFromArr[j],{bool : false}) )
                }
                this.messListOne = item.menu.one;
                this.messListTwo = item.menu.two;
                this.messListThree = item.menu.three;
                this.messListFour = item.menu.four;
                this.messListFri = item.menu.fri;
                item.bool=true;
            }else {
                item.bool = false;
            }
        },//控制信息来源二级菜单显示或者隐藏
        btOk(item){
            item.menu.one = this.messListOne;
            item.menu.two = this.messListTwo;
            item.menu.three = this.messListThree;
            item.menu.four = this.messListFour;
            item.menu.fri = this.messListFri;
            this.messListOne = "";
            this.messListTwo = "";
            this.messListThree = "";
            this.messListFour = "";
            this.messListFri = "";
            console.log(this.messFromArr)
            item.bool = false;
        },//提交二级菜单信息
        addFull(){
            if(this.fullTea.replace(/(^\s*)|(\s*$)/g, "") != ""){
                this.fullTeaArr.push({
                    name:this.fullTea,
                    is_check : "",
                    head_school_id :this.$ls.get("USER_INFO").headSchoolId,
                    user_id : "",
                    create_time : "",
                    is_delete : "",
                    update_user_id : "",
                    update_time : ""
                });
                this.fullTea = "";
            }
            if(this.fullTeaArr.length == 12){
                this.fullBool = false;
            }
        },//添加教师级别分类
        cancelFull(i){
            this.fullTeaArr.splice(i,1);
            this.fullBool = true;
        },//删除教师级别分类
        addPart(){
            if(this.partTea.replace(/(^\s*)|(\s*$)/g, "") != ""){
                this.partTeaArr.push({
                    name:this.partTea,
                    is_check : "",
                    head_school_id :this.$ls.get("USER_INFO").headSchoolId,
                    user_id : "",
                    create_time : "",
                    is_delete : "",
                    update_user_id : "",
                    update_time : ""
                });
                this.partTea = "";
            }
            if(this.partTeaArr.length == 12){
                this.partBool = false;
            }
        },//添加兼教分类
        cancelPart(i){
            this.partTeaArr.splice(i,1)
            this.partBool = true;
        },//删除兼教分类
        nextPage(){
            this.$router.push("/systemHead/comprehensive/comprehensive-applySet");
        },
        save(){
            /*记录学生年级段的选项*/
            let _this = this;
            let classList = [];//保存学生年级段的选项
            $(".sel-classSec li").each(function () {
                if($(".sel-classSec li").eq(0).find("i").hasClass("ico-selOk")){
                    if($(".sel-classSec li").eq(0)[0] != $(this)[0]){
                        classList.push({
                            name:$(this).text(),
                            is_check : "",
                            age_num : "",
                            user_id : "",
                            head_school_id:_this.$ls.get("USER_INFO").headSchoolId,
                            create_time : "",
                            is_delete : false,
                            update_user_id : "",
                            update_time : ""
                            }
                        );
                    }
                }else {
                    if($(this).find("i").hasClass("ico-selOk")){
                        classList.push({
                            name:$(this).text(),
                            head_school_id:_this.$ls.get("USER_INFO").headSchoolId,
                            age_num : "",
                            is_check : "",
                            user_id : "",
                            create_time : "",
                            is_delete : false,
                            update_user_id : "",
                            update_time : ""
                        });
                    }
                }
            })
            /*记录学生年龄段的选项*/
            let ageList = [];//学生年龄段选项保存
            $(".age-sel li").each(function () {
                if($(".age-sel li").eq(0).find("i").hasClass("ico-selOk")){
                    if($(".age-sel li").eq(0)[0] != $(this)[0]){
                        ageList.push({
                            name:$(this).text(),
                            head_school_id:_this.$ls.get("USER_INFO").headSchoolId,
                            age_num : "",
                            is_check : "",
                            user_id : "",
                            create_time : "",
                            is_delete : false,
                            update_user_id : "",
                            update_time : ""
                        });
                    }
                }else {
                    if($(this).find("i").hasClass("ico-selOk")){
                        ageList.push({
                            name:$(this).text(),
                            head_school_id:_this.$ls.get("USER_INFO").headSchoolId,
                            age_num : "",
                            is_check : "",
                            user_id : "",
                            create_time : "",
                            is_delete : false,
                            update_user_id : "",
                            update_time : ""
                        });
                    }
                }
            })
            /*记录app家长端圈子展示的选择状况*/
            let appPatriarchArr = [];
            $(".appPatriarch p").each(function () {
                if($(this).find("i").hasClass("click-checkout")){
                    appPatriarchArr.push(($(this).index()+1).toString())
                }
            })
            /*记录app教师端圈子展示*/
            let appTeacherList = [];
            $(".app-teacher p").each(function () {
                if($(this).find("i").hasClass("click-checkout")){
                    appTeacherList.push(($(this).index()+1).toString())
                }
            })
            /*记录app分校教职工圈子展示*/
            let appBranchList = [];
            $(".appBranch-t p").each(function () {
                if($(this).find("i").hasClass("click-checkout")){
                    appBranchList.push(($(this).index()+1).toString())
                }
            })
            /*记录app总校教职工圈子展示*/
            let appAllStuList = [];
            $(".app-all p").each(function () {
                if($(this).find("i").hasClass("click-checkout")){
                    appAllStuList.push(($(this).index()+1).toString())
                }
            })
            /*记录信息来源*/
            let messAllArr = [];
            for(let i = 0;i<this.messFromArr.length;i++){
                let mesBool = false;
                let arr = [];
                for(var j in this.messFromArr[i].menu){
                    if(this.messFromArr[i].menu[j] != ""){
                        arr.push({
                            name : this.messFromArr[i].menu[j],
                            parent_source_id : "",
                            introduce_name : "",
                            introduce_phone : "",
                            introduce_student_id : "",
                            introduce_student_name : "",
                            is_check : "",
                            head_school_id : _this.$ls.get("USER_INFO").headSchoolId,
                            user_id : "",
                            create_time : "",
                            is_delete : false,
                            update_user_id :"",
                            update_time : ""
                        })
                        if(arr.length != 0){
                            mesBool = true;
                        }
                    }
                }
                if( mesBool == true){
                    messAllArr.push({
                        name : this.messFromArr[i].name,
                        source_submenu_list : arr,
                        is_check : "",
                        head_school_id : _this.$ls.get("USER_INFO").headSchoolId,
                        user_id : "",
                        create_time : "",
                        is_delete : false,
                        update_user_id : "",
                        update_time : ""
                    })
                }
            }
//            this.sixSelone
            let headCommonInfoJsonStr ={
                id : '5a012d3a5304770a30eafbff',
                head_school_id: _this.$ls.get("USER_INFO").headSchoolId,
                student_grade_list : classList,
                student_age_list : ageList,
                student_age_setting : this.sixSelone,
                student_special_identity_list: this.excStudent,
                information_source_list : messAllArr,
                teacher_level_list : this.fullTeaArr,
                part_time_teacher_level_list : this.partTeaArr,
                library_roll_back_to_branch_days : this.aResNum ,
                library_roll_back_to_head_days : this.branRenNum,
//                customer_setting : "",
                attendance_setting :this.isClocking,
                is_show_teacher_all_school_schedule : this.classTimeAll,
                is_show_teacher_all_school_in_class : this.isShowTime,
                is_allow_teacher_course_to_self : this.oneSelf,
                is_approval_teacher_course : this.claApprove,
                is_allow_school_course_to_self : this.isBranch,
                is_approval_school_course : this.branchApprove,
                class_account_unit : this.statsUnit,
                is_managed : this.isLearning,
                class_Course_coe_setting :{
                    classroom_max_course_num_in_spring : parseInt(this.numOne),
                    classroom_max_course_num_in_winter : parseInt(this.numTwo),
                    teacher_days_week_in_spring : parseInt(this.numThree),
                    teacher_days_week_in_winter : parseInt(this.numFour),
                    teache_one_day_max_course_num_in_spring : parseInt(this.numFri) ,
                    teache_one_day_max_course_num_in_winter : parseInt(this.numSix),
                    teacher_weekend_max_course_num_in_spring : parseInt(this.numSev),
                    teacher_weekend_max_course_num_in_winter : parseInt(this.numEig)
                },
                vip_course_coe_setting :{
                    classroom_max_course_num_in_spring : parseInt(this.vipNumOne),
                    classroom_max_course_num_in_winter : parseInt(this.vipNumTwo),
                    teacher_days_week_in_spring : parseInt(this.vipNumThree),
                    teacher_days_week_in_winter : parseInt(this.vipNumFour),
                    teache_one_day_max_course_num_in_spring : parseInt(this.vipNumFri),
                    teache_one_day_max_course_num_in_winter : parseInt(this.vipNumSix),
                    teacher_weekend_max_course_num_in_spring : parseInt(this.vipNumSev),
                    teacher_weekend_max_course_num_in_winter : parseInt(this.vipNumEig)
                },
                registration : {
                    content : this.applyNotice,
                    head_school_id : _this.$ls.get("USER_INFO").headSchoolId,
                    create_time : "", //
                    is_delete : false, //
                    update_user_id :"",//
                    update_time : ""//
                },
                refound_notice : {
                    content : this.returnNotice,
                    head_school_id : _this.$ls.get("USER_INFO").headSchoolId,
                    user_id :"",//
                    create_time :"",
                    is_delete : "",
                    update_user_id : "",//
                    update_time : "",//
                },
                app_parents_circle_show :appPatriarchArr,
                app_teachers_circle_show : appTeacherList,
                app_branch_school_person_circle_show : appBranchList,
                app_head_school_person_circle_show :appAllStuList,
                school_logo_url : this.imageUrl,
                school_official_seal_url : this.imageUrlt,
                motto_slogan_content : this.slogan,
                is_show_motto_slogan : this.isShowslogan,
                user_id : "",
                create_time : "",
                is_delete : "",
                update_user_id : "",
                update_time : "",
                version : "",
            };
            let data = {
                headCommonInfoJsonStr : headCommonInfoJsonStr,
                accessToken:"aaa"
            }
         this.axios.post(system.integrated+"v1/integrated/commonInfo/insertOrUpdateHeadCommonInfo",data).then(res => {
                    console.log(1234324,res)
            }).catch(error => {
                err(error);
            })
        }//保存常用信息
    },
    mounted(){
        let _this = this;
      //选年级
      $(".sel-classSec").find("li").on("click",function () {
          if($(this)[0] == $(".sel-classSec").find("li").eq(0)[0]){
                  if($(this).find("i").hasClass("ico-selOk")){
                      $(".sel-classSec").find("i").removeClass("ico-selOk")
                  }else {
                      $(".sel-classSec").find("i").addClass("ico-selOk")
                  }
          }else {
              if($(this).find("i").hasClass("ico-selOk")){
                  $(this).find("i").removeClass("ico-selOk")
                  $(".sel-classSec").find("li").eq(0).find("i").removeClass("ico-selOk")
              }else {
                  $(this).find("i").addClass("ico-selOk")
              }
          }

      })
        //选年龄
        $(".age-sel").find("li").on("click",function () {
            if($(this)[0] == $(".age-sel").find("li").eq(0)[0]){
                if($(this).find("i").hasClass("ico-selOk")){
                    $(".age-sel").find("i").removeClass("ico-selOk")
                }else {
                    $(".age-sel").find("i").addClass("ico-selOk")
                }
            }else {
                if($(this).find("i").hasClass("ico-selOk")){
                    $(this).find("i").removeClass("ico-selOk")
                    $(".age-sel").find("li").eq(0).find("i").removeClass("ico-selOk")
                }else {
                    $(this).find("i").addClass("ico-selOk")
                }
            }
        })
        /*六选一*/
    $(".six-one").find("li").on("click",function () {
        $(".six-one").find("i").removeClass("click-circle");
        $(".six-one").find("i").addClass("empty-circle");
        $(this).find("i").removeClass("empty-circle");
        $(this).find("i").addClass("click-circle")
        _this.sixSelone = ($(this).index()+1).toString(); //得到六选一中单选的值
        console.log(typeof _this.sixSelone)
    })
        /*开通人工智能还是开通机器人智能*/
//     $(".capacity p").on("click",function () {
//         $(".capacity").find("i").removeClass("click-circle");
//         $(".capacity").find("i").addClass("empty-circle");
//         $(this).find("i").addClass("click-circle");
//         this.onCapacity =  $(this).index()+1;//开启人工或机器人记录
//     })
     /*是否开通考勤*/
     $(".or-play-clock p").on("click",function () {
         $(".or-play-clock").find("i").removeClass("click-circle");
         $(".or-play-clock").find("i").addClass("empty-circle");
         $(this).find("i").removeClass("empty-circle");
         $(this).find("i").addClass("click-circle");
         _this.isClocking =  ($(this).index()+1).toString();//是否开通考勤
     })

        /*是否显示任课老师所在小区的课表*/
      $(".classCouceAll p").on("click",function () {
          $(".classCouceAll").find("i").removeClass("click-circle");
          $(".classCouceAll").find("i").addClass("empty-circle");
          $(this).find("i").removeClass("empty-circle");
          $(this).find("i").addClass("click-circle");
          if($(this).index() ==  1){
              _this.classTimeAll = false;
          }else if($(this).index() ==  2){
              _this.classTimeAll = true;
          }
      })
        /*是否显示任课老师的坐班时间表*/
        $(".isShow-time p").on("click",function () {
            $(".isShow-time").find("i").removeClass("click-circle");
            $(".isShow-time").find("i").addClass("empty-circle");
            $(this).find("i").removeClass("empty-circle");
            $(this).find("i").addClass("click-circle");
            if($(this).index() ==  1){
                _this.isShowTime = false;
            }else if($(this).index() ==  2){
                _this.isShowTime = true;
            }
        })
        /*是否允许专职老师自己排课*/
        $(".isTeacher-one p").on("click",function () {
            $(".isTeacher-one").find("i").removeClass("click-circle");
            $(".isTeacher-one").find("i").addClass("empty-circle");
            $(this).find("i").removeClass("empty-circle");
            $(this).find("i").addClass("click-circle");
            if($(this).index() ==  1){
                _this.oneSelf = false;
            }else if($(this).index() ==  2){
                _this.oneSelf = true;
            }
        })
        /*专职教师排课是否需要审批*/
        $(".isTeacher-Two p").on("click",function () {
            $(".isTeacher-Two").find("i").removeClass("click-circle");
            $(".isTeacher-Two").find("i").addClass("empty-circle");
            $(this).find("i").removeClass("empty-circle");
            $(this).find("i").addClass("click-circle");
            if($(this).index() ==  1){
                _this.claApprove = false;
            }else if($(this).index() ==  2){
                _this.claApprove = true;
            }
        })
        /*是否允许各分校为自己排课*/
        $(".isTeacher-three p").on("click",function () {
            $(".isTeacher-three").find("i").removeClass("click-circle");
            $(".isTeacher-three").find("i").addClass("empty-circle");
            $(this).find("i").removeClass("empty-circle");
            $(this).find("i").addClass("click-circle");
            if($(this).index() ==  1){
                _this.isBranch = false;
            }else if($(this).index() ==  2){
                _this.isBranch = true;
            }
        })
        /*各分校排课是否需要审批*/
        $(".isTeacher-four p").on("click",function () {
            $(".isTeacher-four").find("i").removeClass("click-circle");
            $(".isTeacher-four").find("i").addClass("empty-circle");
            $(this).find("i").removeClass("empty-circle");
            $(this).find("i").addClass("click-circle");
            if($(this).index() ==  1){
                _this.branchApprove = false;
            }else if($(this).index() ==  2){
                _this.branchApprove = true;
            }
        })

        /*班级课程的统计单位为*/
        $(".stats-unit p").on("click",function () {
            $(".stats-unit").find("i").removeClass("click-circle");
            $(".stats-unit").find("i").addClass("empty-circle");
            $(this).find("i").removeClass("empty-circle");
            $(this).find("i").addClass("click-circle");
            _this.statsUnit =  $(this).index();//班级课程的统计单位为
        })
        /*班级学生是否受学管师管理*/
        $(".learningTeach p").on("click",function () {
            $(".learningTeach").find("i").removeClass("click-circle");
            $(".learningTeach").find("i").addClass("empty-circle");
            $(this).find("i").removeClass("empty-circle");
            $(this).find("i").addClass("click-circle");
            if($(this).index() ==  1){
                _this.isLearning = true;
            }else if($(this).index() ==  2){
                _this.isLearning = false;
            }
        })

        /*手机APP · 家长端 · 设置*/
        $(".appPatriarch p").on("click",function () {
            if($(this).find("i").hasClass("empty-circle")){
                $(this).find("i").removeClass("empty-circle")
                $(this).find("i").addClass("click-checkout")
            }else {
                $(this).find("i").removeClass("click-checkout");
                $(this).find("i").addClass("empty-circle")
            }
        })
        /*手机APP · 教师端 · 设置*/
        $(".app-teacher p").on("click",function () {
            if($(this).find("i").hasClass("empty-circle")){
                $(this).find("i").removeClass("empty-circle")
                $(this).find("i").addClass("click-checkout")
            }else {
                $(this).find("i").removeClass("click-checkout");
                $(this).find("i").addClass("empty-circle")
            }
        })
        /*手机APP · 分校教工 · 设置*/
        $(".appBranch-t p").on("click",function () {
            if($(this).find("i").hasClass("empty-circle")){
                $(this).find("i").removeClass("empty-circle")
                $(this).find("i").addClass("click-checkout")
            }else {
                $(this).find("i").removeClass("click-checkout");
                $(this).find("i").addClass("empty-circle")
            }
        })
        /*手机APP · 总部教工 · 设置*/
        $(".app-all p").on("click",function () {
            if($(this).find("i").hasClass("empty-circle")){
                $(this).find("i").removeClass("empty-circle")
                $(this).find("i").addClass("click-checkout")
            }else {
                $(this).find("i").removeClass("click-checkout");
                $(this).find("i").addClass("empty-circle")
            }
        })
        /*此信息是否在系统顶部导航区域展示，用以激励我们的同事*/
        $(".pos-radio").on("click",function () {
            if($(this).find("i").hasClass("empty-circle")){
                $(this).find("i").removeClass("empty-circle")
                $(this).find("i").addClass("click-circle")
                _this.isShowslogan = true;
            }else {
                $(this).find("i").removeClass("click-circle");
                $(this).find("i").addClass("empty-circle");
                _this.isShowslogan = false;
            }
        })

//      console.log(this.$ls.get("USER_INFO").headSchoolId)
       let obj ={
           headSchoolId:this.$ls.get("USER_INFO").headSchoolId,
           accessToken:"aaa"
       }
       function judge(a,bool) {
           if(bool == true){
//               a.each(function () {
//                   $(this).find("i")
//               })
               a.removeClass("empty-circle").addClass("click-circle");
           }
       }
        this.axios.post(system.integrated+"v1/integrated/commonInfo/initCommonInfo",obj).then(res => {
                console.log(330,res);
            this.initializeArr = res.messages.headCommonInfo;
            console.log(521,this.initializeArr.app_branch_school_person_circle_show)
            this.imageUrl = this.initializeArr.school_logo_url;
            this.imageUrlt = this.initializeArr.school_official_seal_url;
            this.slogan = this.initializeArr.motto_slogan_content;
            for(let i =0;i < this.initializeArr.app_branch_school_person_circle_show.length;i++){
                $(".appBranch-t p").eq(this.initializeArr.app_branch_school_person_circle_show[i]-1).find("i").removeClass("empty-circle").addClass("click-checkout")
            }
            for(let i =0;i < this.initializeArr.app_head_school_person_circle_show.length;i++){
                $(".app-all p").eq(this.initializeArr.app_head_school_person_circle_show[i]-1).find("i").removeClass("empty-circle").addClass("click-checkout")
            }
            for(let i =0;i < this.initializeArr.app_teachers_circle_show.length;i++){
                $(".app-teacher p").eq(this.initializeArr.app_teachers_circle_show[i]-1).find("i").removeClass("empty-circle").addClass("click-checkout")
            }
            for(let i =0;i < this.initializeArr.app_parents_circle_show.length;i++){
                $(".appPatriarch p").eq(this.initializeArr.app_parents_circle_show[i]-1).find("i").removeClass("empty-circle").addClass("click-checkout")
            }
            judge($(".pos-radio").find("i"),this.initializeArr.is_show_motto_slogan);//调取方法回显是否显示口号
            this.applyNotice = this.initializeArr.refound_notice.content;
            this.returnNotice = this.initializeArr.registration.content;
            this.vipNumOne = this.initializeArr.vip_course_coe_setting.classroom_max_course_num_in_spring;//(VIP)舂秋季,每个座位日最大可排课几次
            this.vipNumTwo = this.initializeArr.vip_course_coe_setting.classroom_max_course_num_in_winter;//(VIP)寒暑季几次
            this.vipNumThree = this.initializeArr.vip_course_coe_setting.teacher_days_week_in_spring;//(VIP)教师上课天数，春秋季按几日/周
            this.vipNumFour = this.initializeArr.vip_course_coe_setting.teacher_days_week_in_winter;////(VIP)教师上课天数，寒暑季按几日/周
            this.vipNumFri = this.initializeArr.vip_course_coe_setting.teache_one_day_max_course_num_in_spring;//(VIP)舂秋季，教师周一至周五日最多可上课几次
            this.vipNumSix = this.initializeArr.vip_course_coe_setting.teache_one_day_max_course_num_in_winter;//(VIP)寒暑季，教师周一至周五日最多可上课几次
            this.vipNumSev = this.initializeArr.vip_course_coe_setting.teacher_weekend_max_course_num_in_spring;//(VIP)周六日，教师日最多可上课次数，，春秋季几次
            this.vipNumEig = this.initializeArr.vip_course_coe_setting.teacher_weekend_max_course_num_in_winter;//(VIP)周六日，教师日最多可上课次数，，寒暑季几次

            this.numOne = this.initializeArr.class_Course_coe_setting.classroom_max_course_num_in_spring;//(班级)教室日最大可排课几次
            this.numTwo = this.initializeArr.class_Course_coe_setting.classroom_max_course_num_in_winter;//(班级)寒暑季几次
            this.numThree = this.initializeArr.class_Course_coe_setting.teacher_days_week_in_spring;//(班级)春秋季按几日/周
            this.numFour = this.initializeArr.class_Course_coe_setting.teacher_days_week_in_winter;//(班级)寒暑季按几日/周
            this.numFri = this.initializeArr.class_Course_coe_setting.teache_one_day_max_course_num_in_spring;//(班级)舂秋季，教师周一至周五日最多可上课几次
            this.numSix = this.initializeArr.class_Course_coe_setting.teache_one_day_max_course_num_in_winter;//(班级)寒暑季，教师周一至周五日最多可上课几次
            this.numSev = this.initializeArr.class_Course_coe_setting.teacher_weekend_max_course_num_in_spring;//(班级)周六日，教师日最多可上课次数，，春秋季几次
            this.numEig = this.initializeArr.class_Course_coe_setting.teacher_weekend_max_course_num_in_winter;//(班级)周六日，教师日最多可上课次数，，寒暑季几次

            $(".stats-unit p").eq(this.initializeArr.class_account_unit).find("i").removeClass("empty-circle").addClass("click-circle");

            if(this.initializeArr.is_managed == true){
                $(".learningTeach p").eq(1).find("i").removeClass("empty-circle").addClass("click-circle");
            }else {
                $(".learningTeach p").eq(2).find("i").removeClass("empty-circle").addClass("click-circle");
            }
            if(this.initializeArr.is_approval_school_course == true){
                $(".isTeacher-four p").eq(2).find("i").removeClass("empty-circle").addClass("click-circle");
            }else {
                $(".isTeacher-four p").eq(1).find("i").removeClass("empty-circle").addClass("click-circle");
            }

            if(this.initializeArr.is_allow_school_course_to_self == true){
                $(".isTeacher-three p").eq(2).find("i").removeClass("empty-circle").addClass("click-circle");
            }else {
                $(".isTeacher-three p").eq(1).find("i").removeClass("empty-circle").addClass("click-circle");
            }

            if(this.initializeArr.is_approval_teacher_course == true){
                $(".isTeacher-Two p").eq(2).find("i").removeClass("empty-circle").addClass("click-circle");
            }else {
                $(".isTeacher-Two p").eq(1).find("i").removeClass("empty-circle").addClass("click-circle");
            }

            if(this.initializeArr.is_allow_teacher_course_to_self == true){
                $(".isTeacher-one p").eq(2).find("i").removeClass("empty-circle").addClass("click-circle");
            }else {
                $(".isTeacher-one p").eq(1).find("i").removeClass("empty-circle").addClass("click-circle");
            }

            if(this.initializeArr.is_show_teacher_all_school_in_class == true){
                $(".isShow-time p").eq(2).find("i").removeClass("empty-circle").addClass("click-circle");
            }else {
                $(".isShow-time p").eq(1).find("i").removeClass("empty-circle").addClass("click-circle");
            }

            if(this.initializeArr.is_show_teacher_all_school_schedule == true){
                $(".classCouceAll p").eq(2).find("i").removeClass("empty-circle").addClass("click-circle");
            }else {
                $(".classCouceAll p").eq(1).find("i").removeClass("empty-circle").addClass("click-circle");
            }
            $(".or-play-clock").find("i").eq(parseInt(this.initializeArr.attendance_setting)-1).removeClass("empty-circle").addClass("click-circle");

            this.branRenNum = this.initializeArr. library_roll_back_to_head_days;
            this.aResNum = this.initializeArr.library_roll_back_to_branch_days;
            this.partTeaArr = this.initializeArr.part_time_teacher_level_list;
            this.fullTeaArr = this.initializeArr.teacher_level_list ;


//            if(this.initializeArr.attendance_setting == true){
//                $(".classCouceAll p").eq(2).find("i").removeClass("empty-circle").addClass("click-circle");
//            }else {
//                $(".classCouceAll p").eq(1).find("i").removeClass("empty-circle").addClass("click-circle");
//            }
            console.log( this.initializeArr);
        }).catch(error => {
            err(error)
        });
    }
};
</script>
