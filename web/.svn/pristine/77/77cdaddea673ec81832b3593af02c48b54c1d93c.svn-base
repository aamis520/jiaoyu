<template>
	<div class="goodsManage">
		 <p>供应商</p>
		<div class="shops">
			<ul class="clearfix">
				<li><span>供应商</span><input type="type" class="shop"></li>
				<li><span>经营物品</span><input type="type" class="goods"></li>
				<li><span>联系人</span><input type="type" class="contacts"></li>
				<li><span>联系电话</span><input type="type" class="phone"></li>
				<li><span>厂商地址</span><input type="type" class="address"></li>
				<li><span>网址</span><input type="type" class="url"></li>
			</ul>
			<div class="addNew"><img src="../../assets/add1.png"></div>		
			<div class="result">
				<img src="../../assets/cancel.png" class="error">
		  		<img src="../../assets/duiGou.jpg" class="duiGou">
		  	</div>
		  	<div class="redact">
		  		<img src="../../assets/images/01_20.jpg" class="bianji">
		  		<img src="../../assets/trash.png" class="trash">
		  	</div>
		</div>
		<div  id="newBox">
			
		</div>
		<ul class='clearfix goodsinfo' v-for="item in shop">
			<li><span>供应商</span><span>{{item.provide}}</span></li>
			<li><span>经营商品</span><span>{{item.goods}}</span></li>
			<li><span>联系人</span><span>{{item.contacts}}</span></li>
			<li><span>联系电话</span><span>{{item.tel}}</span></li>
			<li><span>厂商地址</span><span>{{item.adress}}</span></li>
			<li><span>网址</span><span>{{item.url}}</span></li>
		</ul>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				shop: {
					provide: "",
					goods: "",
					contacts: "",
					tel: "",
					adress: "",
					url: ""
				}
				
			}
		},
		mounted(){
			// $(".addNew").click(function(){
			// 	$(".shops>ul>li>input").css("border","0");
			// 	$(this).hide();
			// 	$(".redact").show();
			// 	$(".result").show();
			// });
			// $(".bianji").click(function(){
			// 	$(".shops>ul>li>input").css("border-bottom","1px solid #31c27c");
			// });
			// $(".trash").click(function(){
			// 	$(this).parent().parent().hide();
			// })
			// $(".result").click(function(){
			// 	$(this).hide();
			// 	$(".redact").hide();
			// 	$(".addNew").show();
			// })
			// $(".addNew").click(function(){
				// var ipt1=$(".shop").val();
				// var ipt2=$(".goods").val();
				// var ipt3=$(".contacts").val();
				// var ipt4=$(".phone").val();
				// var ipt5=$(".address").val();
				// var ipt6=$(".url").val();
				// var newItem="<ul class='clearfix'>"+
				// "<li>"+"<span>"+"供应商"+"</span>"+"<span>"+ipt1+"</span>"+"</li>"+
				// "<li>"+"<span>"+"经营商品"+"</span>"+"<span>"+ipt2+"</span>"+"</li>"+
				// "<li>"+"<span>"+"联系人"+"</span>"+"<span>"+ipt3+"</span>"+"</li>"+
				// "<li>"+"<spandata-v-ad4b3886>"+"联系电话"+"</span>"+"<span>"+ipt4+"</span>"+"</li>"+
				// "<li>"+"<span>"+"厂商地址"+"</span>"+"<span>"+ipt5+"</span>"+"</li>"+
				// "<li>"+"<span>"+"网址"+"</span>"+"<span>"+ipt6+"</span>"+"</li>"+
				// "</ul>";
				// $("#newBox").append(newItem);
				// $(".shop").val("");
				// $(".goods").val("");
				// $(".contacts").val("");
				// $(".phone").val("");
				// $(".address").val("");
				// $(".url").val("");
			// })
			var _this = this;
			$(".addNew").click(function () {
				console.log(11)
				// $(".goodsinfo").show();
				_this.shop.provide == $(".shop").val()
				_this.shop.goods == $(".goods").val()
				_this.shop.contacts == $(".contacts").val()
				_this.shop.tel == $(".phone").val()
				_this.shop.adress == $(".adress").val()
				_this.shop.url == $(".url").val()
			})
		}
	}
</script>
<style lang="less" scoped>
.clearfix:after{
	display:block;
	content:"";
	clear: both;
}
.clearfix{
	margin-bottom: 12px;
}
.goodsinfo{
	// display: none;
}
#newBox{
	margin-bottom: 12px;
	width: 913px;
	padding:20px 0 20px 20px;
	.clearfix{
		background: red;
	}
	ul{
		li:nth-child(2){
			margin-left: 33px;
		}
		li:nth-child(4){
			margin-left: 44px;
		}
		li:nth-child(5){
			margin-left: 36px;
		}
		li{
			float: left;
			margin:10px 0;
		span{
			color: #666666;
			display: inline-block;
			width: 70px;
			text-align: left;
		}
		input{
			border:none;
			outline: none;
			border-bottom: 1px solid #31c27c;
		}
		.shop{
			width: 161px;
		}
		.goods{
			width: 500px;
		}
		.contacts{
			width: 150px;
		}
		.phone{
			width: 170px;
		}
		.address{
			width: 225px;
		}
		.url{
			width: 765px;
		}
	}
	}
}
	.goodsManage{
		width:1008px;
		background:#fff;
		border-radius: 5px;
		padding:0 30px 30px 30px;
		font-size:14px;
		cursor: pointer;
		p{
			color: #31c27c;
			line-height:40px;
			border-bottom: 1px dotted #e7e7e7;
		}
		.shops{
			width: 913px;
			height: 145px;
			padding:20px 0 20px 20px;
			position: relative;
			.addNew{
				position: absolute;
				right: -30px;
				top:25px;
				img{
					width: 19px;
					height: 19px;
				}
			}
			.redact{
				position: absolute;
				right: -30px;
				top:25px;
				display: none;
				img{
					vertical-align:middle;
				}
				img:nth-child(2){
					margin-left: 15px;
				}
			}
			.result{
				position: absolute;
				right: -32px;
				bottom:20px;
				display: none;
				img{
					width: 26px;
					height: 26px;
				}
				img:nth-child(2){
					margin-left: 15px;
				}
			}
			ul{
				li:nth-child(2){
					margin-left: 33px;
				}
				li:nth-child(4){
					margin-left: 44px;
				}
				li:nth-child(5){
					margin-left: 36px;
				}
				li{
					float: left;
					margin:10px 0;
					span{
						color: #666666;
						// font-weight: 700;
						display: inline-block;
						width: 70px;
						text-align: left;
					}
					input{
						border:none;
						outline: none;
						border-bottom: 1px solid #31c27c;
					}
					.shop{
						width: 161px;
					}
					.goods{
						width: 500px;
					}
					.contacts{
						width: 150px;
					}
					.phone{
						width: 170px;
					}
					.address{
						width: 225px;
					}
					.url{
						width: 765px;
					}
				}
			}
		}
	}

	

</style>