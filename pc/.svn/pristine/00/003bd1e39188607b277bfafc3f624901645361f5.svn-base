<style lang="less" scoped>
	@color :#31C17B;
	@font12:12px;
	@font14:14px;
	@font16:16px;
	.mod-w{
		color: @color;
		.ico-right{
			float: right;
			width: 25px;
			height: 25px;
			margin-top: 10px;
		}
	}
	.financeTitle{
		box-sizing: border-box;
		color: @color;
		padding-bottom: 17px;
		border-bottom: 1px dashed #dbdbdb;
	}
	.contentBox{
		.text{
		    height: 50px;
		    color: #31C27C;
		    line-height: 50px;
		    margin: 0 auto;
		    border-bottom: 1px dashed #F7F8FC;
		}
		.num{
		    width: 16px;
		    height: 16px;
		    line-height: 16px;
		    color: @color;
		}
		label{
		    margin-left: 50px;
		}
		.other{
		    width: 100px;
		    border: none;
		    border-bottom: 1px solid #d3ddd5;
		    outline: none;
		    padding-left: 2px;
		}
		.bank{
		    width: 160px;
		    border-bottom: 1px solid #d3ddd5;
		    padding-left: 2px;
		}
		.con_choose{
		    height: 40px;
		    color: #666666;
		}
	}
	.titleRightToggle{
		float: right;
		display: flex;
		padding: 3px;
		color:#5a5e66 ;
		.title{
			color: #7cbef0;
			cursor: pointer;
		}
		.schoolDist{
			padding-right: 15px;
		}
	}
</style>
<style lang="less">
	.titleRightToggle{
		.el-radio__label{
		    font-size: 14px;
		    padding-left: 5px;
		}
		.el-radio__input.is-checked + .el-radio__label {
		    color: #5a5e66;
		}
	}
</style>
<template>
	<div class="accountSet">
		<div class="mod-w radius">
        	财务设置
        	<i class="ico-init ico-edit ico-right" @click.stop.prevent="financeEdit"></i>
        </div>
        <div class="common-w">
        	<div class="financeTitle">
        		在线支付 · 收款账户 · 设置
        		<div class="titleRightToggle">
                    <div class="titleContent">
                    	开启
                        <span class="schoolDist">
                            <el-radio class="radio" v-model="accountChoose" label="1">A</el-radio>
                        </span>
                        <span class="schoolDist">
                            <el-radio class="radio" v-model="accountChoose" label="2">B</el-radio>
                        </span>
                    </div>
                    <div class="title">历史</div>
        		</div>
        	</div>
        	<div class="contentBox">
				<div class="text">五道口校区</div>
				<div class="container">
					<div class="con_choose">
						<span class="num">A</span>
						<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
						<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
						<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
						<label>刷卡账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					</div>
					<div class="con_choose">
						<span class="num">B</span>
						<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
						<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
						<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
						<label>刷卡账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					</div>
				</div>	
				<div class="text">五道口校区</div>
				<div class="container">
					<div class="con_choose">
						<span class="num">A</span>
						<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
						<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
						<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
						<label>刷卡账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					</div>
					<div class="con_choose">
						<span class="num">B</span>
						<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
						<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
						<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
						<label>刷卡账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					</div>
				</div>	
				<div class="text">五道口校区</div>
				<div class="container">
					<div class="con_choose">
						<span class="num">A</span>
						<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
						<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
						<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
						<label>刷卡账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					</div>
					<div class="con_choose">
						<span class="num">B</span>
						<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
						<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
						<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
						<label>刷卡账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					</div>
				</div>	
				<div class="text">五道口校区</div>
				<div class="container">
					<div class="con_choose">
						<span class="num">A</span>
						<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
						<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
						<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
						<label>刷卡账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					</div>
					<div class="con_choose">
						<span class="num">B</span>
						<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
						<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
						<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
						<label>刷卡账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					</div>
				</div>	
				<div class="text">五道口校区</div>
				<div class="container">
					<div class="con_choose">
						<span class="num">A</span>
						<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
						<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
						<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
						<label>刷卡账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					</div>
					<div class="con_choose">
						<span class="num">B</span>
						<label>微信<input class="other" type="text" placeholder="18226768639"/></label>
						<label>支付宝<input class="other" type="text" placeholder="18226768639"/></label>
						<label>银行账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
						<label>刷卡账户<input class="bank" type="text" placeholder="620515534552500355"/></label>
					</div>
				</div>			
			</div>
        </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				accountChoose:'1',//选择的AB类型
			}
		}
	}
</script>
