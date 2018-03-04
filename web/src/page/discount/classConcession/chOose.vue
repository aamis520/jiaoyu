<template>
<div class="chOose">
	<div class="compile">
      <img src="../../../assets/search-green.png" alt="">
        <img src="../../../assets/help.png" alt="">
       </div>
	<div class="chOose-one">
		<p>
			<i>转介绍类型</i>
			<span>
				 <el-radio class="radio" v-model="radio" label="1">教师迎新卡</el-radio>
			</span>
			<span>
				 <el-radio class="radio" v-model="radio" label="2">推荐扩课卡</el-radio>
			</span>
			<span>
				 <el-radio class="radio" v-model="radio" label="3">老带新学生卡</el-radio>
			</span>
			<span>
				 <el-radio class="radio" v-model="radio" label="4">老带新师生卡</el-radio>
			</span>
		</p>
		
		
		<p>备注：无论哪一种卡，启用以后，系统会自动派发到每个角色头上。使用一张就再发一张</p>
	</div>
	<div class="chOose-second">
	<p>
		<i>教师迎新卡</i>
		<span>(教师、教工发送给非本校学生，报名时使用。发送给在读生、往届生无效。每个学生在所有校区内只能使用一次)</span>
	</p>	
	<p>
		<i>教工介绍奖</i>
		<span>增加积分<input type="text"/>分</span>
		<span>将历现金<input type="text"/>元(仅统计)</span>
	</p>		
	<p>
		<i>被介绍学生奖励</i>
		<span>一次性优惠<input type="text"/>元或者张报名订单打<input type="text"/>折</span>
		<span>赠送物品<input type="text" placeholder="请选择物品"/></span>
	</p>	
	<p>
		<i>发送范围</i>
		<span>全体专职职工 <img src="../../../assets/duiHao.jpg"/></span>
		<span>专职教师<img src="../../../assets/duiHao.jpg"/> </span>
		<span>兼职教师<img src="../../../assets/duiHao.jpg"/> </span>
		<span>咨询师<img src="../../../assets/duiHao.jpg"/> </span>
		<span>班主任<img src="../../../assets/duiHao.jpg"/> </span>
        <span>学管师<img src="../../../assets/duiHao.jpg"/> </span>
        <span><input type="text" placeholder="选择角色"/></span>
	</p>
	<p>
		<i>生效时间</i>
		<span>
				 <el-radio class="radio" v-model="radio" label="1">立即生效</el-radio>
		</span>
		<span>
				 <el-radio class="radio" v-model="radio" label="2">	
				 	<input type="text"/>
				 	 <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0">生效
                     </el-date-picker>
				 </el-radio>
		</span>
	</p>
	<p><img src="../../../assets/confirm_normal.png"/></p>
	</div>
	
	<div class="chOose-Third">
		<p>
		<i>推荐扩科卡</i>
		<span>(教师、教工发送给在在读学生，用于在读学生扩科使用，发送给新生无效)</span>
	</p>	
	<p>
		<i>教工介绍受奖</i>
		<span>增加积分<input type="text"/>分</span>
		<span>将历现金<input type="text"/>元(仅统计)</span>
	</p>		
	<p>
		<i>被介绍学生奖励</i>
		<span>一次性优惠<input type="text"/>元或者张报名订单打<input type="text"/>折</span>
		<span>赠送物品<input type="text" placeholder="请选择物品"/></span>
	</p>	
	<p>
		<i>发送范围</i>
		<span>全体专职职工 <img src="../../../assets/duiHao.jpg"/></span>
		<span>专职教师<img src="../../../assets/duiHao.jpg"/> </span>
		<span>兼职教师<img src="../../../assets/duiHao.jpg"/> </span>
		<span>咨询师<img src="../../../assets/duiHao.jpg"/> </span>
		<span>班主任<img src="../../../assets/duiHao.jpg"/> </span>
        <span>学管师<img src="../../../assets/duiHao.jpg"/> </span>
        <span><input type="text" placeholder="选择角色"/></span>
	</p>
	<p>
		<i>使用时效</i>
		<span> <el-radio class="radio" v-model="radio" label="1">立即生效</el-radio></span>
		<span> <el-radio class="radio" v-model="radio" label="2">教师发给学生后  <input type="text"/>天内报名有效</el-radio></span>
	</p>
	<p>
		<i>生效时间</i>
		<span>
				 <el-radio class="radio" v-model="radio" label="1">立即生效</el-radio>
		</span>
		<span>
				 <el-radio class="radio" v-model="radio" label="2">	
				 	<input type="text"/>
				 	 <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0">生效
                     </el-date-picker>
				 </el-radio>
		</span>
	</p>
	<p></p>
	<p><img src="../../../assets/confirm_normal.png"/></p>
	</div>
	<div class="chOose-Fourth">
		<p>
		    <i>老带新学生卡</i>
	    	<span>(系统发给在读生，在读生发送给其他非本校学生新报课程使用)</span>
	   </p>	
	   <p>
	    	<i>在读生奖励</i>
	    	<span>增加积分<input type="text"/>分</span>
		    <span>一张优惠券价值<input type="text"/>元或现金<input type="text"/>元</span>
		    <span><el-radio class="radio" v-model="radio" label="1">赠送物品<input type="text" placeholder="请选择物品"/></el-radio></span>
	   </p>		
	   <p>
		    <i>被介绍学生奖励</i>
		    <span>一次性优惠<input type="text"/>元或者张报名订单打<input type="text"/>折</span>
	    	<span>赠送物品<input type="text" placeholder="请选择物品"/></span>
	</p>	
	<p>
	    	<i>生效时间</i>
		<span>
				 <el-radio class="radio" v-model="radio" label="1">立即生效</el-radio>
		</span>
		<span>
				 <el-radio class="radio" v-model="radio" label="2">	
				 	<input type="text"/>
				 	 <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0">生效
                     </el-date-picker>
				 </el-radio>
		</span>
	</p>
	<p></p>
	<p><img src="../../../assets/confirm_normal.png"/></p>
	</div>	
	<div class="chOose-Five">
		<p>
		<i>老带新生卡</i>
		<span>(系统发送给教师、教工，他们再转发给在读生，在读生转发给有意向报课的新生使用，每位新生在所有校区只可使用一次)</span>
	</p>	
	<p>
		<i>教工介绍受奖</i>
		<span>增加积分<input type="text"/>分</span>
		<span>将历现金<input type="text"/>元(仅统计)</span>
	</p>
	<p>
		<i>教工介绍受奖</i>
		<span>增加积分<input type="text"/>分</span>
		<span>将历现金<input type="text"/>元(仅统计)</span>
	    <span><el-radio class="radio" v-model="radio" label="1">赠送物品<input type="text"/></el-radio></span>
	</p>
	<p>
		<i>被介绍学生奖励</i>
		<span>一次性优惠<input type="text"/>元或者张报名订单打<input type="text"/>折</span>
		<span>赠送物品<input type="text" placeholder="请选择物品"/></span>
	</p>	
	<p>
		<i>发送范围</i>
		<span>全体专职职工 <img src="../../../assets/duiHao.jpg"/></span>
		<span>专职教师<img src="../../../assets/duiHao.jpg"/> </span>
		<span>兼职教师<img src="../../../assets/duiHao.jpg"/> </span>
		<span>咨询师<img src="../../../assets/duiHao.jpg"/> </span>
		<span>班主任<img src="../../../assets/duiHao.jpg"/> </span>
        <span>学管师<img src="../../../assets/duiHao.jpg"/> </span>
        <span><input type="text" placeholder="选择角色"/></span>
	</p>
	<p>
		<i>使用时效</i>
		<span> <el-radio class="radio" v-model="radio" label="1">立即生效</el-radio></span>
		<span> <el-radio class="radio" v-model="radio" label="2">教师发给学生后  <input type="text"/>天内报名有效</el-radio></span>
	</p>
	<p>
		<i>生效时间</i>
		<span>
				 <el-radio class="radio" v-model="radio" label="1">立即生效</el-radio>
		</span>
		<span>
				 <el-radio class="radio" v-model="radio" label="2">	
				 	<input type="text"/>
				 	 <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0">生效
                     </el-date-picker>
				 </el-radio>
		</span>
	</p>
	<p></p>
	<p><img src="../../../assets/confirm_normal.png"/></p>
	</div>
	
</div>
</template>

<script>
	  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>

<style lang="less" scoped>
	*{
		font-family: "微软雅黑";
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
	.chOose-one{
		/*height: 222px;*/     
		background: white;
		border-radius: 4px;
		padding: 0 30px;
		p:nth-child(1){
			height: 50px;
		  line-height: 50px;
		  border-top: 1px dashed #EEEEEE;
		  border-bottom: 1px dashed #EEEEEE;
		}
		p:nth-child(2){
			padding:12px 0;
		}
	}
	.chOose-second{
		padding: 0 30px;
	background: white;
	border-radius: 4px;
	margin-top: 12px;
	p{
		display: flex;
		line-height: 54px;
		border-bottom: 1px dashed #EEEEEE;
		i{
		color: #31C27C;
		display: block;
		width:116px ;
		}
	}
	input{
		width: 72px;
		border-bottom: 1px solid #31c27c;
	}
	p:nth-child(2){
		span{
			margin-right: 80px;
		}
	}
	p:nth-child(3){
		span{
			margin-right: 60px;
		}
	}
	p:nth-child(4){
	span{
			display: inline-block;
			width:120px;
		}
	}
	p:nth-child(5){
		span{
			margin-right:22px;
		}
	}
	}
	
	.chOose-Third{
		padding: 0 30px;
	background: white;
	border-radius: 4px;
	margin-top: 12px;
	p{
		display: flex;
		line-height: 54px;
		border-bottom: 1px dashed #EEEEEE;
		i{
		color: #31C27C;
		display: block;
		width:116px ;
		}
	}
	input{
		width: 72px;
		border-bottom: 1px solid #31c27c;
	}
	p:nth-child(2){
		span{
			margin-right: 80px;
		}
	}
	p:nth-child(3){
		span{
			margin-right: 60px;
		}
	}
	p:nth-child(4){
	span{
			display: inline-block;
			width:120px;
		}
	}
	p:nth-child(5){
	span{
			margin-right:22px;
		}
	}
	p:nth-child(6){
		span{
			margin-right:22px;
		}
	}
	}
	.chOose-Fourth{
	padding: 0 30px;
	background: white;
	border-radius: 4px;
	margin-top: 12px;
	p{
		display: flex;
		line-height: 54px;
		border-bottom: 1px dashed #EEEEEE;
		i{
		color: #31C27C;
		display: block;
		width:116px ;
		}
	}
	input{
		width: 72px;
		border-bottom: 1px solid #31c27c;
	}
	p:nth-child(2){
		span{
			margin-right: 40px;
		}
	}
	p:nth-child(3){
		span{
			margin-right: 60px;
		}
	}
	p:nth-child(4){
	span{
			display: inline-block;
			width:120px;
		}
	}	
	}
		.chOose-Five{
		padding: 0 30px;
	background: white;
	border-radius: 4px;
	margin-top: 12px;
	p{
		display: flex;
		line-height: 54px;
		border-bottom: 1px dashed #EEEEEE;
		i{
		color: #31C27C;
		display: block;
		width:116px ;
		}
	}
	input{
		width: 72px;
		border-bottom: 1px solid #31c27c;
		text-align: center;
	}
	p:nth-child(2){
		span{
			margin-right: 80px;
		}
	}
	p:nth-child(3){
		span{
			margin-right: 80px;
		}
	}
	p:nth-child(4){
		span{
			margin-right: 60px;
		}
	}
	p:nth-child(5){
	span{
			display: inline-block;
			width:120px;
		}
	}
	p:nth-child(6){
	span{
			margin-right:22px;
		}
	}
	p:nth-child(7){
		span{
			margin-right:22px;
		}
	}
	}
	
</style>