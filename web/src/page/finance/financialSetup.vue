<template>
	<div>	
		 <div class="compile">
	       <img src="../../assets/help.png" alt="">
	    </div>	
		  <div class="box1">
			<div class="text">总部与分校共用的收入类型 · 设置
				<span class="iconfont icon-bianji right" @click="bianji()"></span>
			</div>
			<div class="container">
				<span class="item">
					<span class="it1">课程学费</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">服装费</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">教材费</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">学杂费</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">报名费</span>
					<span class="iconfont icon-2"></span>
				</span>				
				<span class="item">
					<input type="text" name="" id="" value="" placeholder="自定义添加"/>
				</span>
			</div>
		</div>
		
		<div class="box1">
			<div class="text">总部独有的收入类型 · 设置</div>
			<div class="container">
				<span class="item">
					<span class="it1">招待费</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<input type="text" name="" id="" value="" placeholder="自定义添加" />
				</span>
			</div>
		</div>
		
		<div class="box1">
			<div class="text">总部与分校共用的支出类型 · 设置</div>
			<div class="container">
				<span class="item">
					<span class="it1">固定资产</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">水电费</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">教工工资</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<input type="text" name="" id="" value="" placeholder="自定义添加"/>
				</span>
			</div>
		</div>
		
		<div class="box1">
			<div class="text">总部独有的收入类型 · 设置</div>
			<div class="container">
				<span class="item">
					<span class="it1">固定资产</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">水电费</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<span class="it1">教工工资</span>
					<span class="iconfont icon-2"></span>
				</span>
				<span class="item">
					<input type="text" name="" id="" value="" placeholder="自定义添加"/>
				</span>
			</div>
		</div>
		
		<div class="box1">
			<div class="text">跨校费用 · 财务核算 · 设置一</div>
			<div class="container">
				<div class="chkitem">
					<span>
						<span>跨校报名已缴费用归属</span>
						<span class="iconfont icon-tishi"></span>
						<form @click="fun()" id="aaa">
							<label class="lab1" for="ybaoming"><input class="aaa" type="radio" name="ybm" value="baoming" id="ybaoming"/> &nbsp;报名校区</label>
							<label class="lab1" for="yshangke"><input class="aaa" type="radio" name="ysk" value="shangke" id="yshangke"/> &nbsp;上课校区</label>  
						</form>
					</span>
					<span>
						<span>跨校报名未缴费用归属</span>
						<span class="iconfont icon-tishi"></span>
						<form @click="fun()" id="aaa">
							<label class="lab1" for="wbaoming"><input class="aaa" type="radio" name="wbm" value="baoming" id="wbaoming"/> &nbsp;报名校区</label>
							<label class="lab1" for="wshangke"><input class="aaa" type="radio" name="wsk" value="shangke" id="wshangke"/> &nbsp;上课校区</label>  
						</form>
					</span>
				</div>
				
				<div class="chkitem">
					<span>
						<span>跨校转班已耗费用归属</span>
						<span class="iconfont icon-tishi"></span>
						<form @click="fun()" id="aaa">
							<label class="lab1" for="yzhuanchu"><input class="aaa" type="radio" name="yzc" value="zhuanchu" id="yzhuanchu"/> &nbsp;转出校区</label>
							<label class="lab1" for="yzhuanru"><input class="aaa" type="radio" name="yzr" value="zhuanru" id="yzhuanru"/> &nbsp;转入校区</label>  
						</form>
					</span>
					<span>
						<span>跨校转班转出费用归属</span>
						<span class="iconfont icon-tishi"></span>
						<form @click="fun()" id="aaa">
							<label class="lab1" for="wzhuanchu"><input class="aaa" type="radio" name="wzc" value="zhuanchu" id="wzhuanchu"/> &nbsp;转出校区</label>
							<label class="lab1" for="wzhuanru"><input class="aaa" type="radio" name="wzr" value="zhuanru" id="wzhuanru"/> &nbsp;转入校区</label>  
						</form>
					</span>
				</div>
			</div>
		</div>
		
		<div class="box1">
			<div class="text">跨校费用 · 财务核算 · 设置二</div>
			<div class="container">
				<div class="chkitem">
					<span>
						<span>跨校试听的费用归属</span>
						<span class="iconfont icon-tishi"></span>
						<form @click="fun()" id="aaa">
							<label class="lab1" for="yst"><input class="aaa" type="radio" id="yst"/> &nbsp;试听校区</label>
							<label class="lab1" for="ybm"><input class="aaa" type="radio" id="ybm"/> &nbsp;报名校区</label>  
						</form>
					</span>
					<span>
						<span>跨校转费的费用归属</span>
						<span class="iconfont icon-tishi"></span>
						<form @click="fun()" id="aaa">
							<label class="lab1" for="wzc"><input class="aaa" type="radio" id="wzc"/> &nbsp;转出校区</label>
							<label class="lab1" for="wzr"><input class="aaa" type="radio" id="wzr"/> &nbsp;转入校区</label>  
						</form>
					</span>
				</div>
				
				<div class="chkitem">
					<span>
						<span>跨校补课的课耗归属</span>
						<span class="iconfont icon-tishi"></span>
						<form @click="fun()" id="aaa">
							<label class="lab1" for="ybk"><input class="aaa" type="radio" id="ybk"/> &nbsp;补课校区</label>
							<label class="lab1" for="ysk"><input class="aaa" type="radio" id="ysk"/> &nbsp;上课校区</label>  
						</form>
					</span>
					<span>
						<span>跨校补缴的费用归属</span>
						<span class="iconfont icon-tishi"></span>
						<form @click="fun()" id="aaa">
							<label class="lab1" for="wsk"><input class="aaa" type="radio" id="wsk"/> &nbsp;上课校区</label>
							<label class="lab1" for="wbj"><input class="aaa" type="radio" id="wbj"/> &nbsp;补缴校区</label>  
						</form>
					</span>
				</div>
			</div>
		</div>
		
		<div class="box1">
			<div class="text">线上缴费 · 抹零 · 设置</div>
			<from class="container2" @click="fun()" id="aaa">
				<label for="s"><input type="radio" class="aaa" id="s" /> &nbsp;小于1元，抹零</label>
				<label for="m"><input type="radio" class="aaa" id="m" /> &nbsp;小于0.5元，抹零，大于0.5元小于1元，按1元收</label>
				<label for="l"><input type="radio" class="aaa" id="l" /> &nbsp;按实际金额收，最小单位为”角“</label>
				<label for="all"><input type="radio" class="aaa" id="all" /> &nbsp;最小收费单位，精确到个位数，小于5元按0元收，大于5元小于10元，按5元收。如：应收133元，按130元收；应收138元，按135元收</label>
			</from>
		</div>
		
		<div class="box1">
			<div class="text">线下缴费 · 抹零 · 设置</div>
			<from class="container2" @click="fun()" id="aaa">
				<label for="xs"><input type="radio" class="aaa" id="xs" /> &nbsp;小于1元，抹零</label>
				<label for="xm"><input type="radio" class="aaa" id="xm" /> &nbsp;小于0.5元，抹零，大于0.5元小于1元，按1元收</label>
				<label for="xl"><input type="radio" class="aaa" id="xl" /> &nbsp;按实际金额收，最小单位为”角“</label>
				<label for="xall"><input type="radio" class="aaa" id="xall" /> &nbsp;最小收费单位，精确到个位数，小于5元按0元收，大于5元小于10元，按5元收。如：应收133元，按130元收；应收138元，按135元收</label>
			</from>
		</div>
		
		<div class="box1">
			<div class="text">在线支付收款账户设置</div>
			<div class="container">
				<div class="con_choose">
					<span class="num">1</span><span>在线支付账户</span>
					<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
					<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
					<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					<label class="col">选择校区<input class="other" type="text" /></label>
				</div>
				<div class="con_choose">
					<span class="num">2</span><span>在线支付账户</span>
					<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
					<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
					<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					<label class="col">选择校区<input class="other" type="text" /></label>
				</div>
			</div>			
		</div>
		
		<div class="box1">
			<div class="text">刷卡支付收款账户设置</div>
			<div class="container">
				<div class="con_choose">
					<span class="num">1</span><span>刷卡支付账户</span>
					<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					<label class="col">选择校区<input class="other" type="text" /></label>
				</div>
				<div class="con_choose">
					<span class="num">2</span><span>刷卡支付账户</span>
					<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					<label class="col">选择校区<input class="other" type="text" /></label>
				</div>
			</div>			
		</div>
		
		<div class="box1">
			<div class="text">缴费规则 · 通告 · 本条为系统规则，无须设置</div>
			<div class="container">
				<p class="con_p">家长手机端只收全费，不收定金（使用定金券除外）</p>
				<p class="con_p">校方手机端可收定金，可收全费</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				show:false
			}
		},
		mounted:function(){
			$(".icon-2").click(function(){
				$(this).parent().css("display","none");
			});
			
			this.axios.post("/api/api-finance/v1/finance/setting/getFinanceByCampusId?campus_id=1&accessToken=aaa").then((res)=>{
				this.data=res.data;
				console.log("保存修改财务设置",this.data);
			})
			
		},
		methods:{
			bianji:function(){
					$(".icon-2").css("visibility","visible")			
			},
			fun:function(){
			    $(".aaa").click(function(){	
			　　　　　 $(this).parent().addClass("checked").siblings().removeClass("checked")
			    });
			}
		}
	}
</script>

<style scoped>
.compile{
    position: absolute;
    right: 30px;
    top: -45px;
    cursor: pointer;
  }
	*{
		font-size: 14px;
	}
	span{
		display: inline-block;
	}
	.box1{
		background: white;
		border-radius: 4px;	
		margin-bottom: 12px;
		padding: 0 30px;
	}
	.text{
		height: 50px;
		color: #31C27C;
		line-height: 50px;
	    margin: 0 auto;
		border-bottom: 1px dashed #F7F8FC;
	}
	.container{
		width: 1000px;
		margin: 0 auto;
		padding: 30px 0px;
	}
	.container2{
		width: 100%;
		padding: 10px 20px 0 0px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		line-height: 40px;
	}
	.container2 label img{
		vertical-align: middle;
	}
	.con_p{
		line-height: 40px;
	}
	.con_choose{
		height: 40px;
	}
	.con_choose label{
		margin-left: 26px;
	}
	.con_choose .other{
		width: 92px;
		border-bottom: 1px dashed #9b9b9b;
	}
	.con_choose .bank{
		width: 156px;
		border-bottom: 1px dashed #9b9b9b;
	}
	.num{
		width: 16px;
		height: 16px;
		line-height: 16px;
		text-align: center;
		border-radius: 50%;
		color: white;
		background: #31c27c;
		margin-right: 10px;
	}
	.item{
		margin-right: 16px;
	}
	.it1{
		height: 22px;
		line-height: 22px;
		border-radius: 22px;
		color: #303030;
		font-size: 14px;
	}
	.icon-2{
		font-size: 18px;
		color: #B9B9B9;
		visibility: hidden;
		cursor: pointer;
	}
	.icon-2:hover{
		color: #4ED79F;
		transition: all 0.3s;
	}
	.it3{
		width: 22px;
		height: 22px;
		line-height: 22px;
		text-align: center;
		border-radius: 50%;
		border: 1px solid #50D79F;
	}
	input[type="text"]{
		border: none;
		border-bottom: 1px solid #9b9b9b;
		outline: none;
		width: 76px;
		padding-left: 2px;
	}
	.right{
		font-size: 24px;
		color: #50D79F;
		margin-left: 710px;
		cursor: pointer;
	}
	.right-s{
		font-size: 20px;
	}
	.icon-bianji{
		font-size: 24px;
	}
	form{
		display: inline-block;
	}
	.checked{
		background: url(../../assets/1.png) no-repeat;
		background-size: 15px 15px;
		background-position:0 50%;
		border: none;
	}
	.lab1{
		margin-left: 14px;
	}
	input[type="radio"]{
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 15px;
		height: 15px;
		vertical-align: middle;
		border-radius: 50%;
		border: 1px solid #C3C9CD;
		outline: none;

	}
	.icon-tishi{
		font-weight: 400;
		color: #31c27c;
		margin-left: 10px;
	}
	.chkitem{
		padding: 16px 0;
	}
	.chkitem>span:nth-of-type(1){
		margin-right: 76px;
	}
	.col{
		color: #31c27c;
	}
</style>