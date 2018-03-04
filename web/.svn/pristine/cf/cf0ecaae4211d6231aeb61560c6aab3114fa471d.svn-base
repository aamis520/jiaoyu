<template>
	<div class="box">
	
		<div class="classPackage">
			<p class="topx">
				贝贝国际少儿美语-精品班-第二期-标准一
				<img src="../../assets/images/litclose_normal.png" class="close">
			</p>
			<div class="article">
				<ul>
					<li>班级学费</li>
					<li>学费 <input type="text" />元/期 </li>
					<li><input type="text" />次/期</li>
					<li>元/次</li>
				</ul>
				<ul>
					<li>物品费用</li>
					<li>必购物品 </li>
					<li id="chose">选择物品</li>
					<li>一本 标价 120元/本</li>
				</ul>
        <ul>
        	<li>每期杂费</li>
          <li><input type="text" placeholder="请输入每期都要缴纳的费用"/></li>
        </ul>
        <ul>
        	<li>新生缴费</li>
          <li><input type="text" placeholder="请选择首次报读本课程的学生需缴纳的杂费"/></li>
        </ul>
        <ul>
        	<li>赠送选项</li>
          <li><input type="text" placeholder="请选择报读本期课程所赠送的内容"/></li>
        </ul>
       <ul>
       	<li>班级设置</li>
       	<li>
       		<p>本类班级是否需要排课：<span>是</span><span>否</span></p>
       		<p>新生报读本班，业绩受益人的业绩记为  <input type="text"/> </p>
       		<p>在读扩报本班，业绩受益人的业绩记为  <input type="text"/> </p>
       	</li>
       	<li class="right">
       		<P>最大班容    <input type="text"/>人</P>
       		<p>老生报读本班，业绩受益人的业绩记为  <input type="text"/> </p>
       		<p>在读转报本班，业绩受益人的业绩记为  <input type="text"/> </p>
       	</li>
       </ul>
       <ul>
       	<li>报读设置</li>
       	<li>
       		<p>
       			如本班需要测试合格，请勾选条件：
       			<span>新生报读</span>
       			<span>续费升入</span>
       			<span>扩课报读</span>  
       			<span>他科转入</span>

       		</p>
       		<p>
       			如本班需要面试合格，请勾选条件：
       			<span>新生报读</span>
       			<span>续费升入</span>
       			<span>扩课报读</span>  
       			<span>他科转入</span>
       		</p>
       	</li>
       </ul>
       <p class="next">
       	<span>同步到下一期</span><span>设置下一期</span>
       </p>
			</div>
			
		</div>
	
		
		<div class="chose">
			<chose></chose>
		</div>
	</div>
</template>
<script>
	import chose from "@/page/class/chose"
	export default {
		data() {
			return {}
		},
		components:{
			chose:chose
		},
		mounted() {
			$(".xs").click(function() {
				$(".big-shade").hide()
			});
			$("#chose").click(function(){
//				$(".chose").toggle()
			})
		}
	}
</script>

<style lang="less" scoped>
	.clearfix:after {
		clear: both;
		content: "";
		display: block;
	}
	
	.box {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		cursor: pointer;
		font-size: 14px;
		color: #000;
		.classPackage {
			width: 1200px;
			background: #fff;
			position: absolute;
			left: 50%;
			margin-left: -600px;
			margin-top: 8%;
			border-radius: 5px;
			box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
			.topx {
				width: 100%;
				height: 60px;
				line-height: 60px;
				text-align: center;
				position: relative;
				background: #eff3f5;
				border-radius: 5px;
				img {
					position: absolute;
					right: 30px;
					top: 5px;
				}
			}
			.article {
				padding: 20px 30px;
				height: 560px;
				overflow: scroll;
			ul{
					li:nth-child(1) {
						width: 120px;
						color: #31C27C;
					}
				}
			ul:nth-child(1) {
					width: 100%;
					border-bottom: 1px dashed #EEEEEE;
					display: flex;
					
				li {
						padding: 14px 0;
						input {
							width: 40px;
							border-bottom: 1px solid #31C27C;
						}
					}
				}
				ul:nth-child(2) {
					width: 100%;
					border-bottom: 1px dashed #EEEEEE;
					display: flex;
					li {
						padding: 14px 0;
					}
				}
				ul:nth-child(3){
					display: flex;
						padding: 14px 0;
					
					input{
						width: 300px;
						border-bottom:1px solid gray ;
					}
				}	ul:nth-child(4){
					display: flex;
						padding: 14px 0;
					
					input{
						width: 300px;
						border-bottom:1px solid gray ;
					}
				}
					ul:nth-child(5){
					display: flex;
						padding: 14px 0;
					border-bottom:1px dashed #EEEEEE;
					input{
						width: 300px;
						border-bottom:1px solid gray ;
					}
				}
				
				ul:nth-child(6){
					display: flex;
						padding: 14px 0;
						border-bottom: 1px dashed #EEEEEE;
						.right{
							margin-left: 120px;
						}
					p{
						line-height:30px;
					}
					
					input{
						width: 40px;
						border-bottom:1px solid #31C27C;
					}
				}
				ul:nth-child(7){
					display: flex;
						padding: 14px 0;
						border-bottom: 1px dashed #EEEEEE;
						line-height: 30px;
						span{
							margin-right: 40px;
						}
				}
			.next{
			margin-top: 12px;
			margin-left: 360px;
				span{
					display:inline-block;
					width:140px;
					line-height: 30px;
					text-align: center;
					background: #e5f8ef;
					color: #31C27C;
					border-radius: 4px;
					margin-left: 30px;
					&:hover{
						background: #31C27C;
						color: #fff;
					}
				}
			}
			}
		}
	}
</style>