<template>
<div class="box">
  <div class="classPackage">
    <p class="topx">
			一对一 · 兼职教师 · 课时段 · 修改
			<img src="../../assets/images/litclose_normal.png" class="close">
		</p>
		<div class="article">
			  <table id="table">
          <tr class="first">
            <td class="message"><span class="info">费用信息</span></td>
            <td>
                <p>每课时<input type="text">分数</p>
                <p>每次扣<input type="text">课时</p>
            </td>
            <td>
                <p>每课时<input type="text">分数</p>
                <p>每次扣<input type="text">课时</p>
            </td>
            <td>
                <p>每课时<input type="text">分数</p>
                <p>每次扣<input type="text">课时</p>
            </td>
            <td>
                <p>每课时<input type="text">分数</p>
                <p>每次扣<input type="text">课时</p>
            </td>
            <td>
                <p>每课时<input type="text">分数</p>
                <p>每次扣<input type="text">课时</p>
            </td>
            <td>
                <p>每课时<input type="text">分数</p>
                <p>每次扣<input type="text">课时</p>
            </td>
            <td>
                <p>每课时<input type="text">分数</p>
                <p>每次扣<input type="text">课时</p>
            </td>
          </tr>   
          <tr class="number">
            <td>课时数量</td>
            <td>
              <span class="infos">小一、小二、小三、小四、小五</span><img src="../../assets/delete2_normal.png">
              <div class="show"><div class="arrow-down"></div></div>
            </td>
            <td>
              <span>小六</span><img src="../../assets/delete2_normal.png">
              <div class="show"><div class="arrow-down"></div></div>
            </td>
            <td>
               <span>初一、初二</span><img src="../../assets/delete2_normal.png">
               <div class="show"><div class="arrow-down"></div></div>
            </td>
            <td>
                <span>初三</span><img src="../../assets/delete2_normal.png">
                <div class="show"><div class="arrow-down"></div></div>
            </td>
            <td>
                <span>高一、高二</span><img src="../../assets/delete2_normal.png">
                <div class="show"><div class="arrow-down"></div></div>
            </td>
            <td>
                <span>高三</span><img src="../../assets/delete2_normal.png">
                <div class="show"><div class="arrow-down"></div></div>
            </td>
            <td><input type="text"></td>
          </tr> 
          <tr>
            <td>1-60课时</td>
            <td>￥75.00</td>
            <td>￥80.00</td>
            <td>￥85.00</td>
            <td>￥90.00</td>
            <td>￥95.00</td>
            <td>￥100.00</td>
            <td>￥105.00</td>
          </tr>
          <tr>
            <td>1-60课时</td>
            <td>￥75.00</td>
            <td>￥80.00</td>
            <td>￥85.00</td>
            <td>￥90.00</td>
            <td>￥95.00</td>
            <td>￥100.00</td>
            <td>￥105.00</td>
          </tr>
          <tr>
            <td>1-60课时</td>
            <td>￥75.00</td>
            <td>￥80.00</td>
            <td>￥85.00</td>
            <td>￥90.00</td>
            <td>￥95.00</td>
            <td>￥100.00</td>
            <td>￥105.00</td>
          </tr>
          <tr>
            <td>1-60课时</td>
            <td>￥75.00</td>
            <td>￥80.00</td>
            <td>￥85.00</td>
            <td>￥90.00</td>
            <td>￥95.00</td>
            <td>￥100.00</td>
            <td>￥105.00</td>
          </tr>
          <tr>
            <td>1-60课时</td>
            <td>￥75.00</td>
            <td>￥80.00</td>
            <td>￥85.00</td>
            <td>￥90.00</td>
            <td>￥95.00</td>
            <td>￥100.00</td>
            <td>￥105.00</td>
          </tr>
          <tr>
            <td>1-60课时</td>
            <td>￥75.00</td>
            <td>￥80.00</td>
            <td>￥85.00</td>
            <td>￥90.00</td>
            <td>￥95.00</td>
            <td>￥100.00</td>
            <td>￥105.00</td>
          </tr>
          <tr>
            <td>1-60课时</td>
            <td>￥75.00</td>
            <td>￥80.00</td>
            <td>￥85.00</td>
            <td>￥90.00</td>
            <td>￥95.00</td>
            <td>￥100.00</td>
            <td>￥105.00</td>
          </tr>
          <tr class="prices">
             <td class="price"><input type="text">课时<img src="../../assets/images/right.png"></td>
             <td>￥<input type="text"></td>
             <td>￥<input type="text"></td>
             <td>￥<input type="text"></td>
             <td>￥<input type="text"></td>
             <td>￥<input type="text"></td>
             <td>￥<input type="text"></td>
             <td>￥<input type="text"></td>
          </tr>
       </table>
		</div>
    <div class="botx">
      <p>
        <el-radio class="radio" v-model="radio" label="1">全部校区</el-radio>
        <el-radio class="radio" v-model="radio" label="2"><input type="text" placeholder="西二旗校区…(5)"></el-radio>
      </p>
       <p>
        <el-radio class="radio" v-model="radio1" label="3">立即生效</el-radio>
        <el-radio class="radio" v-model="radio1" label="4"><input type="text" placeholder="请选择时间">生效</el-radio>
      </p>
      <span><img src="../../assets/duiGou.jpg" id="closes"></span>
    </div>
    <div class="shade">
      <div class="hint">
        <p class="hint-title"><span>提示</span><img src="../../assets/fork.png" class="closehint"/></p>
        <img class="notice" src="../../assets/notice.png">
        <p class="hint-text">您确定要删除本模板吗？</p>
        <p class="hint-sure">
          <img class="cancel" src="../../assets/cancel.png">
          <img class="ok" src="../../assets/confirm_normal.png">
        </p>
      </div>
    </div>
    <div class="big-shade">
      <div class="boxs">
         <div class="age" id="grade">
              <p>
                 <span>年级</span><img src="../../assets/images/qiehuan.png" id="qiehuan1">
                 <i><img src="../../assets/images/kongjianclose.png" class="xs"></i>
              </p>
              <ul class="clearfix" id="grades">
                 <li>小一</li>
                 <li>小二</li>
                 <li>小三</li>
                 <li>小四</li>
                 <li>小五</li>
                 <li>小六</li>
                 <li>初一</li>
                 <li>初二</li>
                 <li>初三</li>
                 <li>高一</li>
                 <li>高二</li>
                 <li>高三</li>
                 <li>成人</li>
              </ul>
          </div>
          <div class="age" id="age">
              <p>
                 <span>年龄</span><img src="../../assets/images/qiehuan.png" id="qiehuan2">
                 <i><img src="../../assets/images/kongjianclose.png" class="xs"></i>
              </p>
              <ol class="clearfix">
                 <li class="li">1</li>
                 <li class="li">2</li>
                 <li class="li">3</li>
                 <li class="li">4</li>
                 <li class="li">5</li>
                 <li class="li">6</li>
                 <li class="li">7</li>
                 <li class="li">8</li>
                 <li class="li">9</li>
                 <li class="li">10</li>
                 <li class="li">11</li>
                 <li class="li">12</li>
                 <li class="li">13</li>
                 <li class="li">14</li>
                 <li class="li">15</li>
                 <li class="li">16</li>
                 <li class="li">17</li>
                 <li class="li">18</li>
                 <li class="li">19</li>
                 <li class="li">20</li>
                 <li class="monx">岁</li>
              </ol>
              <ol class="clearfix second">
                 <li class="li">1</li>
                 <li class="li">2</li>
                 <li class="li">3</li>
                 <li class="li">4</li>
                 <li class="li">5</li>
                 <li class="li">6</li>
                 <li class="li">7</li>
                 <li class="li">8</li>
                 <li class="li">9</li>
                 <li class="li">10</li>
                 <li class="li">11</li>
                 <li class="li">12</li>
                 <li class="monx">月</li>
              </ol>
          </div>
      </div>
    </div>
	</div>
</div>
</template>
<script>
  export default {
    data(){
      return{
        radio:"1",
        radio1:"3"
      }
    },
  	mounted(){
  		$(".close").click(function(){
  			$(".box").hide()
  		});
      $("#table").find("tr:even").css("background","#fff");
      $("#table").find("tr:odd").css("background","#f2f6f9");
        $("#table span").mouseover(function () {
            var text = $(this).text();
            $(this).siblings(".show").text(text).show();
            $(this).parent().siblings().find(".show").hide(); 
      }).mouseout(function(){
            $(".show").hide();
      });
      $("#closes").click(function(){
         $(".shade").show();
         $(".hint").show();
      });
      $(".cancel").click(function(){
         $(".hint").hide();
         $(".shade").hide();
      });
      $(".closehint").click(function () {
        $(".hint").hide();
        $(".shade").hide();
      });
      $(".number>td>span").click(function(){
          $(".big-shade").show();
      });
      $("#grades>li").click(function(){
         $(this).css({"background":"#31c27c","color":"#fff"}).siblings().css({"background":"#f2f5f8","color":"#000"});
      });
      $("#qiehuan1").click(function(){
        $("#grade").hide();
        $("#age").show();
      });
      $("#qiehuan2").click(function(){
        $("#age").hide();
        $("#grade").show();
      });
      $("#age>ol>.li").click(function(){
         $(this).css({"background":"#31c27c","color":"#fff"}).siblings(".li").css({"background":"#fff","color":"#000"});
      });
      $(".xs").click(function(){
        $(".big-shade").hide()
      })
  	}
  }
</script>

<style lang="less" scoped>
.clearfix:after{
  clear: both;
  content: "";
  display: block;
}
.box{
	width: 100%;
	height: 100%;
	position:fixed;
	top:0;
	left:0;
	/*background: rgba(0,0,0,0.5);*/
	cursor: pointer;
	font-size: 14px;
	color: #000;
	.classPackage{
		width: 1200px;
		background:#fff;
		position: absolute;
		left: 50%;
		margin-left: -600px;
		margin-top: 8%;
    border-radius: 5px;
    box-shadow:3px 3px 30px rgba(0,0,0,0.3);
		.topx{
			width: 100%;
			height: 60px;
			line-height: 60px;
			text-align: center;
			position: relative;
			background: #eff3f5;
      border-radius: 5px;
      
			img{
				position: absolute;
				right: 30px;
				top:5px;
			}
		}
		.article{
      padding:0 20px;
      height: 560px;
      overflow: scroll;
      table{
        .first{
          height: 88px;
          .message{
            position: relative;
            .info{
              position: absolute;
              bottom:13px;
            }
          }
          p{
            height: 35px;
            line-height: 45px;
            background: #fff;
            input{
               width: 30px;
               border-bottom: 1px solid #31c27c;
               margin: 0 2px;
               color: #31c27c;
            }
          }
        }
        tr{
          height: 60px;
          line-height: 60px;
          td{
             width: 145px;
             padding-left: 20px;
            border:1px solid #eff0f1;
            position: relative;
          }
        }
        .prices{
          td{
            input{
              width: 60px;
              border-bottom: 1px solid #31c27c;
              margin-right: 5px;
            }
            img{
              width: 16px;
              height: 16px;
              vertical-align: middle;
              margin-left: 4px;
            }
          }
          .price{
            input{
              width: 40px;
            }
          }

        }
        .number{
          td{
            position: relative;
            span{
              width:90px;
              height: 40px;
              display: inline-block;
              overflow: hidden;
              text-overflow:ellipsis;
              display: -webkit-box;
              -webkit-line-clamp:1;
              -webkit-box-orient:vertical;
            }
            img{
              position: absolute;
              right:10px;
              bottom: 20px;
            }
            input{
               width: 60px;
               border-bottom: 1px solid #31c27c;
               margin: 0 2px;
               color: #31c27c;
            }
            .show{
              display: none;
              width: 230px;
              height: 34px;
              line-height:5px;
              padding: 13px 0;
              border-radius: 5px;
              border:1px solid #31c27c;
              position: absolute;
              top:-17px;
              left: 36px;
              padding-left: 17px;
              background: #fff;
              .arrow-down {
                width:0; 
                height:0; 
                border-left:11px solid transparent;
                border-right:11px solid transparent;
                border-top:11px solid red;
              }
            }
          }
        }
      }
		}
    .botx{
      display: flex;
      position: relative;
      p{
        width: 320px;
        margin:25px;
        border-right:1px solid #c9c9c9;
        input{
          width: 100px;
          border-bottom: 1px solid #31c27c;
        }
      }
      span{
        position: absolute;
        right: 35px;
        bottom:15px;
        img{
          width: 26px;
          height: 26px;
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
        }
        .notice{
          margin:30px 45% 10px 45%; 
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
   .big-shade{
       position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      z-index: 5;
       background:rgba(0,0,0,0.5);
      .boxs{
        width: 320px;
        height: 360px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -160px;
        margin-top: -180px;
        background: #fff;
        border-radius: 5px;
        font-size: 14px;
        .age{
          width: 100%;
          height: 100%;
          padding: 20px;
          p{
              text-align: center;
              color: #31c27c;
              position: relative;
              img{
                vertical-align: middle;
              }
              i{
                position: absolute;
                right: -20px;
                top:-20px;
              }
          }
          ul{
            li{
              width: 70px;
              height: 24px;
              line-height: 24px;
              background:#f2f5f8;
              float: left;
              border-radius: 50px;
              text-align: center;
              margin:10px;
            }
          }
          .second{
            border-top: 1px solid #31c27c;
          }
          ol{
            position: relative;
            li{
              float: left;
              width: 25px;
              height: 25px;
              text-align: center;
              line-height: 25px;
              border-radius: 50%;
              margin: 10px 7px;
            }
            .monx{
              position: absolute;
              bottom: 0px;
              right: 5px;
              color: #c3c3c3;
            }
          }
        }
        #age{
          display: none;
        }
      }
    }
	}
}
	
</style>