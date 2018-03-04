<template>
	<div id='onetoNsetyi' class="big">
		<div class="onetoNsetyi-conten">
			<ul>
				<li id="li1">
					<b>科目类型</b>			
					<span><a>语文</a><img src="../../../assets/images/red.png"/></span>
					<span><a>数学</a><img src="../../../assets/images/red.png"/></span>
					<span><a>英语</a><img src="../../../assets/images/red.png"/></span>
					<span><a>物理</a><img src="../../../assets/images/red.png"/></span>
					<span><a>化学</a><img src="../../../assets/images/red.png"/></span>
					<span><a>地理</a><img src="../../../assets/images/red.png"/></span>
					<span><a>历史</a><img src="../../../assets/images/red.png"/></span>
					<span><a>生物</a><img src="../../../assets/images/red.png"/></span>
					<span><a>政治</a><img src="../../../assets/images/red.png"/></span>
					<span><a>国学</a><img src="../../../assets/images/red.png"/></span>
					<i class="geng">更多	</i><br>
					<span><a>地理</a><img src="../../../assets/images/red.png"/></span>
					<span><a>历史</a><img src="../../../assets/images/red.png"/></span>
					<span><a>生物</a><img src="../../../assets/images/red.png"/></span>
					<span><a>政治</a><img src="../../../assets/images/red.png"/></span>
					<span><a>国学</a><img src="../../../assets/images/red.png"/></span>
				</li>
				<li>
					<span>科目名称</span>		
					<span>
					<input type="text"  placeholder="请输入课程的中文名称" id='curriculum' value=""/>
				   	<img src="../../../assets/images/notes_normal.png"/><i id="font"></i>
				   	<a class="chong"> 重选 </a>
				   </span>
				</li>
				<li id="class1">
					<span>年级 <img src="../../../assets/images/qiehuan.png" class="img"/></span>
					<span class="duo"><a >小一<img src="../../../assets/images/green.png" class="img"/></a></span>	
					<span class="duo"><a >小二<img src="../../../assets/images/green.png" class="img"/></a></span>
					<span class="duo"><a >小三<img src="../../../assets/images/green.png" class="img"/></a></span>
					<span class="duo"><a >小四<img src="../../../assets/images/green.png" class="img"/></a></span>
					<span class="duo"><a >小五<img src="../../../assets/images/green.png" class="img"/></a></span>
					<span class="duo"><a >小六<img src="../../../assets/images/green.png" class="img"/></a></span>
					<span class="duo"><a >初一<img src="../../../assets/images/green.png" class="img"/></a></span>
					<span class="duo"><a >初二<img src="../../../assets/images/green.png" class="img"/></a></span>
					<span class="duo"><a >初三<img src="../../../assets/images/green.png" class="img"/></a></span>
					<span class="duo"><a >高一<img src="../../../assets/images/green.png" class="img"/></a></span>
					<span class="duo"><a >高二<img src="../../../assets/images/green.png" class="img"/></a></span>
					<span class="duo"><a >高三<img src="../../../assets/images/green.png" class="img"/></a></span>	
				</li>
			</ul>
			<p>
				<router-link :to="{path:'/curriculum/onetoNset'}"><span>取消</span></router-link>
				<router-link :to="{path:'/curriculum/onetoNset'}"><span>结束本链</span></router-link>
				<span id="next" @click="aaa">继续填写本链接</span>
			</p>
		</div>
		<div class='box1'>
			<p class='text'>
				<span id='tit'></span>
				<span class='iconfont icon-bianji right' @click="right">
				</span>
			</p>
			<div class='container'>
				<span class='item' v-for="item in lessonList" :itemClick="itemClick">{{item}}<span class="dd"></span></span >
				<span class='iconfont icon-2'></span>
			</div>
		</div>

	</div>
</template>

<script>
	
	import classSettingchild from "@/page/curriculum/classSettingchild"
	export default {
		data() {
			return {
				show: false,
				lessonList: [],
				itemClick: false,
				aa:''
			}
		},
		components: {
			classSettingchild
		},
		methods:{
			test:function(obj){
				alert("22222");
			},
			right: function () {
				this.itemClick = true
				console.log(111);

			},
		},
		mounted: function() {
			var _this = this;
			$("#curriculum").click(function() {
				$("#li1").hide();
			});
			$(".chong").click(function() {
				$("#li1").show();
			});
			$(".duo").click(function() {
				$(this).find(".img").toggle()
			});
			$(".icon-2").click(function() {
				$(this).parent().css("display", "none");
			});
			$("#li1>span").click(function() {
				$(this).find("img").toggle();
				if($(this).find("img").show()) {
					$(this).siblings("span").find("img").hide()
				}
			});
			$("#li1 a").click(function() {
				var text1 = $(this).text()
				$("#font").text(text1)
			});
			
			
			var txt;
			$("#li1 a").click(function() {
				txt = $(this).text()
			});

			$("#li1").on("click", "span", function () {
				$(this).text();
				$("#tit").text($(this).text())
			});
			$("#next").click(function () {
				if($("#curriculum").val()==''){
					alert("请输入后添加");
				}else{
					_this.lessonList.push($("#curriculum").val());
				$.unique(_this.lessonList);
				};				
				$("#curriculum").val("");
			});
			$(".container").on("click", ".item", function (){
//				debugger;
				if(_this.itemClick == false){
					return;					
				} else if(_this.itemClick == true){
					console.log($(this));
					$("#curriculum").val($(this).text());
					$(this).text($("#curriculum").val())
				}
				
			});
		}
	}
</script>

<style scoped lang="less">
	* {
		font-size: 14px;
	}
	a{
		cursor:pointer;
	}
	.left{
		margin-left: 106px;
	}
	#onetoNsetyi {
		width: 1008px;
	}
	
	.onetoOnesetyi-guo {
		margin-left: 40px;
		margin-top: 22px;
	}
	
	.onetoNsetyi-conten {
		margin-bottom: 12px;
		p {
			padding-left: 200px;
			padding-bottom: 42px;
			span {
				display: block;
				width: 150px;
				height: 30px;
				border: 1px solid #B6B6B6;
				border-radius: 3px;
				text-align: center;
				line-height: 30px;
				float: left;
				margin-left: 30px;
			}
			span:hover {
				background: #0086B3;
				color: white;
				border: 1px solid #0086B3;
			}
		}
		padding: 20px 30px;
		background: white;
		ul {
			li {
				line-height: 50px;
				span {
					display: inline-block;
					img {
						width: 16px;
					}
					i {
						color: #5ACE96;
					}
				}
			}
			li:nth-child(1) {
				span {
					width: 70px;
				}
				span:nth-child(12) {
					color: red;
				}
				b{
					color: #5ACE96;
					width: 100px;
					margin-right: 44px;
				}
			}
			li:nth-child(2) {
				span{
					padding-right: 20px;
				}
				span:nth-child(1) {
					color: #5ACE96;
					width: 100px;
				}
				i {
					padding: 0 10px;
				}
			}
			li:nth-child(3) {
				span{
					width: 60px;
				}
				span:nth-child(1) {
					color: #5ACE96;
					width: 100px;
				}
			}
			.duo img {
				display: none;
			}
		}
	}
	
	i {
		color: #51bcff;
	}
	
	.box2 {
		width: 1008px;
		height: 82px;
		line-height: 82px;
		background: white;
		border-radius: 4px;
		color: #5ACE96;
		padding-left: 20px;
	}
	
	#li1 {
		img {
			display: none;
		}
	}
	
	.box1 {
		width: 1008px;
		height: 150px;
		background: white;
		border-radius: 4px;
		margin-bottom: 12px;
		padding: 0 30px;
		span {
			display: inline-block;
		}
	}
	.item{
		margin: 0 20px 16px 0;
	}
	.text {
		height: 50px;
		color: #5ACE96;
		line-height: 50px;
		margin: 0 auto;
		border-bottom: 1px dashed #EEEEEE;
	}
	
	.container {
		height: 50px;
		line-height: 50px;
	}
	
	.icon-2 {
		font-size: 18px;
		color: #B9B9B9;
		visibility: hidden;
		cursor: pointer;
	}
	
	.it3 {
		width: 22px;
		height: 22px;
		line-height: 22px;
		text-align: center;
		border-radius: 50%;
		border: 1px solid #50D79F;
	}
	
	.right {
		font-size: 24px;
		color: #50D79F;
		margin-left: 880px;
		cursor: pointer;
	}
	
	input {
		border-bottom: 1px solid #31c27c;
	}
	.chong{
	border: 1px solid #31c27c;
	border-radius:4px;
	padding: 5px 10px;
}
</style>