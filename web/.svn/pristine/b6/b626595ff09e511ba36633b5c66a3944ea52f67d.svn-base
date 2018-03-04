<template>
	<div>
		<div class="compile">
			<img src="../../../assets/search-green.png" alt="">
		    <img src="../../../assets/help.png" alt="">
	     </div>
	  <div class="moddleFirst">
		<div class="moddleFirst-top">
			<p>
				<i>优惠名称</i>
				<span>
					<input type="text" placeholder="请输入优惠名称"/>
				</span>
				<span>
					<input type="text" placeholder="优惠描述，家长将会在手机端见到具体描述内容"/>
				</span>
			</p>
			<p>
				<i>优惠时段</i>
				<span>
					 <el-date-picker
                       v-model="value6"
                      type="daterange"
                         placeholder="选择日期范围">
                        </el-date-picker>
				</span>
				<i class="large">课程满课设置</i>
				<span>
					每课必须满课
				</span>
			</p>
			<p>
				<i>学生类型</i>
				<span>教工直系亲属</span>
				<span>教工亲友子弟</span>
				<span>特级关系户</span>
				<span>一级关系户</span>
				<span>二级关系户</span>
				<span>贫困学生</span>
				<span>特优学生</span>
			</p>
			<p>
				<i><img src="../../../assets/confirm_normal.png"/></i>
			</p>
		</div>

		<div class="moddleFirst-cont">

			<p>
				<i>选择类型</i>
				<span @click="classes=!classes">
					班级课
					<img src="../../../assets/images/red.png" v-if="classes"/>
				</span>
				<span @click="status=!status">
					VIP课
					<img src="../../../assets/images/red.png" v-if="status"/>
				</span>
			</p>

			<p class="ordinary" v-if="classes">
				<i>报课科数</i>
				<span>不限科数
					<img src="../../../assets/duiHao.jpg"/>
				</span>
				<span>单科
					<img src="../../../assets/duiHao.jpg"/>
				</span>
				<span>两科
					<img src="../../../assets/duiHao.jpg"/>
				</span>
				<span>三科
					<img src="../../../assets/duiHao.jpg"/>
				</span>
				<span>四科
					<img src="../../../assets/duiHao.jpg"/>
				</span>
				<span>
					<input type="text"placeholder="输入科目数"/>科及以上
				</span>

			</p>
			<p class="vip" v-if="status">
				<i>报课科数</i>
				<span>不限模式
					<img src="../../../assets/duiHao.jpg"/>
				</span>
				<span>一对一
					<img src="../../../assets/duiHao.jpg"/>
				</span>
				<span>一对二
					<img src="../../../assets/duiHao.jpg"/>
				</span>
				<span>一对三
					<img src="../../../assets/duiHao.jpg"/>
				</span>
				<span>一对四
					<img src="../../../assets/duiHao.jpg"/>
				</span>
				<span>5—10人班
					<img src="../../../assets/duiHao.jpg"/>
				</span>
			</p>
			<p class="back-father">
				<i class="back"><img src="../../../assets/images/left.png"/></i>
				<i><img src="../../../assets/confirm_normal.png"/></i>
			</p>
		</div>
		<div class="moddleFirst-bottom">
			<p>
				<span> <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
				<i>总体优惠</i>
			<input type="text" />元
			</span>
				<span> <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
			<i>总体打折</i>
			<input type="text" />折
			</span>
			</p>

			<p>
				<i>赠送选择</i>
				<span>赠送保温杯<b>1个</b>;价值<b>150元/个</b></span>
			</p>
			<p>
				<i>返代金券</i>
				<span>
					<input type="text"/>张；
					<input type="text"/>元/张
				</span>
				<span>
					该券于
					 <el-date-picker v-model="value7" 
					 	type="daterange"align="right"
      placeholder="选择日期范围" :picker-options="pickerOptions2">
    </el-date-picker>期间
				</span>
				
				 	<span> <input type="checkbox"/>新报</span>
				 	<span> <input type="checkbox" />续报</span>
				 	<span> <input type="checkbox" />扩报</span>
				 	<span> <input type="checkbox" />转报</span>
	            <!-- <b>抵用有效</b>-->
			</p>
			<p>
				<b>如有</b>
				<span> <input type="checkbox" />报名费</span>
				<span> <input type="checkbox" />必购物品(包括教材)</span>
				<span> <input type="checkbox" />选购物品，参与总体打折</span>
			</p>
		    <p>
		    	<img src="../../../assets/images/left.png"/>
		    	<img src="../../../assets/confirm_normal.png"/>
		    </p>
		</div>
	   <div class="moddleFirst-over">
	   	<p class="over-one">
	   		<span>17春开学大优惠</span>
	   		<span>17-01-02-17-10-02有效
	   			<el-switch
  v-model="value1"
  on-text=""
  off-text="">
</el-switch>
	   		</span>
	   	</p>
	  <p>
	  	<span>教工子弟</span>
	  	<span>教工子弟</span>
	  	<span>教工子弟</span>
	  	<span>教工子弟</span>
	  </p> 	
	   	
	   <p>
	   	<span>适用范围</span>
	   	<span>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   		<i>初一初二初三</i>
	   	</span>
	   </p>	
	   	
	   </div>
	</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				status: false,
				classes: false,
				radio: '1',
				value1:true
			}
		}
	}
</script>

<style lang="less" scoped>
	*{
	color: #666666;
	font-size: 14px;
}
.compile{
    position: absolute;
    right:30px;
    top: -45px;
    cursor: pointer;
    img:nth-child(1){
    	margin-right: 15px;
    }
  }
	.moddleFirst {
		border-radius: 4px;
	}
	
	.moddleFirst-top {
		background: white;
		padding: 0 30px;
		border-radius: 4px;
		p {
			/*height: 62px;*/
			line-height: 62px;
			/*display: flex;*/
			i {
				color: #31C27C;
				margin-right: 23px;
			}
		}
		p:nth-child(1) {
			border-bottom: 1px dashed #EEEEEE;
			span {
				input {
					border-bottom: 1px solid #31C27C;
				}
			}
		}
		p:nth-child(2) {
			border-bottom: 1px dashed #EEEEEE;
		}
		.large {
			width: 126px;
			margin-left: 140px;
		}
		p:nth-child(3) {
			span {
				padding-right: 38px;
			}
		}
		p:nth-child(4) {
			margin-left: 890px;
		}
	}
	
	.moddleFirst-cont {
		background: white;
		margin-top: 12px;
		border-radius: 4px;
		padding: 0 30px;
		p {
			line-height: 62px;
			display: flex;
		}
		p:nth-child(1) {
			border-bottom: 1px dashed #EEEEEE;
			span {
				margin-right: 60px;
			}
		}
		p:nth-child(2) {
			border-bottom: 1px dashed #EEEEEE;
			span {
				margin-right: 50px;
			}
			input {
				border-bottom: 1px solid #31C27C;
			}
		}
		i {
			color: #31C27C;
			margin-right: 23px;
		}
		.ordinary {}
		.vip {
			/*display: none;*/
			border-bottom: 1px dashed #EEEEEE;
			span {
				margin-right: 40px;
			}
		}
		.back-father {
			margin-left: 840px;
		}
	}
	
	.moddleFirst-bottom {
		padding: 0 30px;
		margin-top: 12px;
		background: white;
		border-radius: 4px;
		p {
			line-height: 50px;
			border-bottom: 1px dashed #EEEEEE;
		}
		p:nth-child(1) {
			input {
				border-bottom: 1px solid #31C27C;
				width: 50px;
			}
			i {
				color: #31C27C;
			}
		}
		p:nth-child(2) {
		input {
				border-bottom: 1px solid #31C27C;
				width: 50px;
			}
			i{
				margin-right: 50px;
				color: #31C27C;
			}
			b{
				color: #31C27C;
			}
		}
		p:nth-child(3) {
		input {
				border-bottom: 1px solid #31C27C;
				width: 50px;
			}
			i {
				
				color: #31C27C;
			}
		}
		p:nth-child(4) {
		  span{
		  	margin-right: 30px;
		  }
			b{
			margin-right: 20px;
			}
		}p:nth-child(5) {
		  margin-left: 860px;
		}
	}
	.moddleFirst-over{
		margin-top: 12px;
		background: white;
		border-radius: 4px;
		padding: 0 30px;
		p:nth-child(1){
		    line-height:50px;
		    display: flex;
		    justify-content: space-between;
 		}
 		p:nth-child(2){
 			line-height: 50px;
 		span{
 				display: inline-block;
 				width: 100px;
 				height: 24px;
 				border: 1px solid #31C27C;
 				border-radius: 20px;
 				text-align: center;
 				line-height: 24px;
 				background: #e5f8ef;
 				color: #31C27C;
 				margin-right: 10px;
 				 			
 				 			}
 		}
 		p:nth-child(3){
 			width: 100%;
 			display: flex;
 			line-height: 40px;
 			/*justify-content: space-between;*/
 			span{
 				display: block;
 			}
 			span:nth-child(1){
 				width: 12%;
 			}
 			span:nth-child(2){
 				width: 88%;
 				
 				i{
 					margin-right:18px;
 				}
 			}
 		}
	}
</style>