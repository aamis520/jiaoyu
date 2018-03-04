<template>
	<div class="schoolSz">
		<div class="left">
			<div class="left-box">
			<span class="No">No.001</span>
			<span class="x">×</span>
			<img src="../../assets/schoolSZ..jpg"/>
			<ul class="ul">
				<li>
					<input type="text"  placeholder="校区名称"/>
				</li>
				<li>
					<input type="text"  placeholder="校区简称"/>
				</li>
				<li>
					<p><input type="text" placeholder="第一资讯电话" /></p>
					<p><input type="text" placeholder="第二资讯电话" /></p>
					<p><input type="text" placeholder="第三资讯电话"/></p>
				</li>
			</ul>
			<div class="bottom">
				<form @click="fun()" id="aaa">
					<label class="lab1" for="zong" @click="foucs('schoolName1')"><input class="aaa checked" type="radio" name="quanxian" value="zong" id="zong"/> &nbsp;直营校</label>
					<label class="lab1" for="daqu"><input class="aaa" type="radio" name="quanxian" value="daqu" id="daqu"/> &nbsp;加盟校</label> 
					<label class="lab1" for="diqu"><input class="aaa" type="radio" name="quanxian" value="diqu" id="diqu"/> &nbsp;合作校</label> 
				</form>
				<p @click="foucs('map')">地图定位，方便家长在手机准确定位学校的位置</p>
			</div>
			<p class="hr"></p>
	   </div>				
			<button @click="foucs('success')">保存</button>
		</div>
		<component :is="tab"></component>
		</div>
</template>
<script>
		import success from '@/page/campus/success'
		import map from '@/page/campus/map'
		import schoolName1 from '@/page/campus/schoollName1'
	export default{		
		components:{
			success,
			map,
			schoolName1
		},
		data(){			
			return{
				tab:"map"
			}
		},
		methods:{
			foucs(index){
				this.tab=index
			},
			fun:function(){
				$(".aaa").click(function(){
					$(this).parent().addClass("checked").siblings().removeClass("checked")

				})
			}
		},
		mounted(){
			$(".on").on("click","li",function(){
				$(this).children().attr("src","../../assets/radio.jpg")
			})
		}
	}
	
	
</script>

<style lang="less" scoped>
.schoolSz{
		display: flex;
		.left{
		.left-box{
			color: #a0a0a0;
			text-align: center;
			margin-left: 42px;
			width: 445px;
			height: 478px;
			border-radius: 10px;
            box-shadow: 1px 1px 5px gray;
			position:relative;
			background:white;
		.No{
			font-weight: bold;
			font-size: 20px;
			color: #9fd7b0;
			position: absolute;
			top: 12px;
			left: 12px;
		}
		.x{
			position: absolute;
			top: 12px;
			right: 12px;
			font-weight: bold;
			font-size: 20px;
		}
		img{
			margin-top: 20px;
		}
		.ul{
			margin-top: -10px;
			list-style: none;
			li{
				margin: 18px auto;
				width: 390px;
				input{
                    padding: 10px 0;
					border: none;
					outline-color: green;
					text-align: center;
					width: 100%;
					background: #eeeeee;
					border-radius: 5px;
					color: #a8a8a8;
				}
			}
			li:nth-of-type(1){
				margin-top: 13px;
			}
			li:nth-of-type(3){
				display: flex;
				justify-content: space-between;
				p{
					width: 120px;
				}
			}
		}
		.bottom{
			padding: 0 78px;
			ul{
				list-style: none;
				display: flex;
				justify-content: space-between;
				text-align: center;
				font-size: 13px;
			}
			li{
				cursor: pointer;
			    margin-top: 6px;
			    img{
			    	vertical-align: -2px;
			    }
			}
			p{
				margin-top: 24px;
				text-align: left;
				font-size: 13px;
				cursor: pointer;
				/*background: burlywood;*/
			}
		}
			.hr{
				width: 100%;
				height: 1px;
				background: green;
				width: 365px;
				margin: 0 auto;
				margin-top: 70px;
			}
		}	
			button{
				margin-top: 12px;
			     margin-left: 42px;
				width: 445px;
				height: 40px;
				font-size: 15px;
				background: white;
                box-shadow: 1px 1px 5px gray;
			    border-radius: 5px;
				color: #6b6b6b;
				border: none;
			}
		}
		
	}
	input[type=radio]{
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 15px;
		height: 15px;
		vertical-align: middle;
		border-radius: 50%;
		border: 1px solid rgba(0,0,0,0.1);
		outline: none;
	}
	.checked{
		background: url(../../assets/1.png) no-repeat;
		background-size: 15px 15px;
		background-position: 0% 100%;
		border: none;
	}
</style>