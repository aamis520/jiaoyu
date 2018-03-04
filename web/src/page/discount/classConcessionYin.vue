<template>
	<div id="a">
		<div class="box1">
			<div class="text">17 春开学大优惠·<span>班级</span>·阶段优惠·在读生
				<span class="iconfont icon-2 right" @click="open2" style="margin-left: 720px;vertical-align: middle; color: #5ACE96;"></span>
			</div>
			<div class="JieGou">
				<ul>
					<li>
						<ul>
							<li>001</li>
							<li>
								<p class="clearfix">
									<span>7、8、9年级<sapn>...</sapn></span>
									<span>在读生</span>
									<span>续费、扩科</span>
									<span>英语、语文、数学 <span>...</span></span>
									<span>三科</span>
									<span>每年三科</span>
								</p>
								<p class="clearfix">
									<span>每科开课 <span>30</span> 次以内</span>
									<span>西三旗东里、知春路、天通东苑北路校区<span>(20个)</span></span>
								</p>
								<p class="clearfix">
									<span>
										<i>1</i>
										优惠<span>200元</span>
									</span>
									<span>
										<i>2</i>
										折扣<span>9.5折</span>
									</span>
									<span>
										<i>3</i>
										赠送保暖杯<span>1个</span>，<span>150元/个</span>
									</span>						
								</p>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="box1">
			<div class="text">17 春开学大优惠·<span>班级</span>·阶段优惠·在读生
				<span class="iconfont icon-2 right" @click="open2" style="margin-left: 720px;vertical-align: middle; color: #5ACE96;"></span>
			</div>
			<div class="JieGou">
				<ul>
					<li>
						<ul>
							<li>002</li>
							<li>
								<p class="clearfix">
									<span>7、8、9年级<sapn>...</sapn></span>
									<span>在读生</span>
									<span>续费、扩科</span>
									<span>英语、语文、数学 <span>...</span></span>
									<span>三科</span>
									<span>每年三科</span>
								</p>
								<p class="clearfix">
									<span>每科开课 <span>30</span> 次以内</span>
									<span>西三旗东里、知春路、天通东苑北路校区<span>(20个)</span></span>
								</p>
								<p class="clearfix">
									<span>
										<i>1</i>
										优惠<span>200元</span>
									</span>
									<span>
										<i>2</i>
										折扣<span>9.5折</span>
									</span>
									<span>
										<i>3</i>
										赠送保暖杯<span>1个</span>，<span>150元/个</span>
									</span>						
								</p>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="box1">
			<div class="text">17 春开学大优惠·<span>班级</span>·阶段优惠·在读生
				<span class="iconfont icon-2 right" @click="open2" style="margin-left: 720px;vertical-align: middle; color: #5ACE96;"></span>
			</div>
			<div class="JieGou">
				<ul>
					<li>
						<ul>
							<li>003</li>
							<li>
								<p class="clearfix">
									<span>7、8、9年级<sapn>...</sapn></span>
									<span>在读生</span>
									<span>续费、扩科</span>
									<span>英语、语文、数学 <span>...</span></span>
									<span>三科</span>
									<span>每年三科</span>
								</p>
								<p class="clearfix">
									<span>每科开课 <span>30</span> 次以内</span>
									<span>西三旗东里、知春路、天通东苑北路校区<span>(20个)</span></span>
								</p>
								<p class="clearfix">
									<span>
										<i>1</i>
										优惠<span>200元</span>
									</span>
									<span>
										<i>2</i>
										折扣<span>9.5折</span>
									</span>
									<span>
										<i>3</i>
										赠送保暖杯<span>1个</span>，<span>150元/个</span>
									</span>						
								</p>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div>
			
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
		/*mounted:function(){
			
		},
		methods:{
			deleteFn:function(){
								
			}
		}*/
		methods: {
	      open2() {
	        this.$confirm('您确认删除此优惠政策吗？', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.$message({
	            type: 'success',
	            message: '删除成功!'
	          });
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'
	          });          
	        });
	      }
	    }
	}
</script>

<style lang="less" scoped>

	#a{
		overflow: hidden;
	}
	.clearfix{
		content: "";
		display: block;
		clear: both;
	}
	*{
		font-size: 14px;
	}
	span{
		display: inline-block;
	}
	.box1{
		// width: 1040px;
		height: 230px;
		background: white;
		border-radius: 4px;
		margin-bottom: 12px;
	}
	.text{
		width: 1000px;
		height: 50px;
		color: #5ACE96;
		line-height: 50px;
	    margin: 0 auto;
		border-bottom: 1px dotted #d1d1d1;
	}
	.JieGou{
	// width: 1040px;
        /*box-shadow: 1px 1px 5px black;*/
        ul{
        	list-style: none;
        	height: auto;
        	li{
        		
        		height: auto;
        		background: white;
        		ul{
        			display: flex;
        			/*height: 100%;*/
        			li:nth-of-type(1){
        				width: 85px;
        				border-right: 1px dotted #dbdbdb;
        				height: 100px;
        				line-height: 100px;
        				text-align: center;
        				margin-top: 25px;
        				color: #2da254;
        			}
        			li:nth-of-type(2){
        				width: 90%;
        				height: 100%;
        				p{
        					width: 96%;
        					height: 58px;
        					padding: 0 40px 0px 0;
        					line-height: 58px;
        					color: #666;
        					margin-left: 20px;
        					border-top: 1px dotted #D1D1D1;
        					float: left;
        					&>span{
        						margin-right: 54PX;
        						display: inline-block;
        						&>span{
        							color: #2DA254;
        						}
        					}
        				}
        				p:nth-of-type(1){
        					border:none
        				}
        			}
        		}
        		
        	}
        	li:nth-of-type(1){
        		
        	}
        }
	}
</style>