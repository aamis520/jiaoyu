<template>
	<div>
		<div class="compile">
	       <img src="../../../assets/help.png" alt="">
	    </div>
		<div class="box box1">
			<div class="text">
				工资底薪
			</div>
			<div class="tit">
				<span class="num">序号</span>
				<span class="standard">标准</span>
				<span class="range">适用范围</span>
				<span class="time">启用时间</span>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s"><span class="input">￥<input type="text" /></span>元/月</span>
					<span class="range_s">请选择适用范围</span>
					<div class="block">
						<el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
					</div>
				</div>
			</div>			
		</div>
		
		<div class="box box2">
			<div class="text">
				学历津贴
			</div>
			<div class="tit">
				<span class="num">序号</span>
				<span class="standard">标准</span>
				<span class="range">适用范围</span> 
				<span class="time">启用时间</span>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s"><span class="input">￥<input type="text" value="200.00"/></span>元/月</span>
					<span class="range_s">正式  本科</span>
					<div class="block">
						<el-date-picker v-model="value2" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">2</span>
					<span class="standard_s"><span class="input">￥<input type="text" /></span>元/月</span>
					<span class="range_s">请选择适用范围</span>
					<div class="block">
						<el-date-picker v-model="value3" type="date" placeholder="选择日期"></el-date-picker>
					</div>
				</div>
			</div>	
		</div>
		
		<div class="box box2">
			<div class="text">
				加班津贴
			</div>
			<div class="tit">
				<span class="num">序号</span>
				<span class="standard">标准</span>
				<span class="range">适用范围</span>
				<span class="time">启用时间</span>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s"><span class="input">￥<input type="text" value="500.00"/></span>元/月</span>
					<span class="range_s">专科  本科  学管师  正式  初级教师...</span>
					<div class="block">
						<el-date-picker v-model="value4" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">2</span>
					<span class="standard_s"><span class="input">￥<input type="text" value="600.00"/></span>元/月</span>
					<span class="range_s">请选择适用范围</span>
					<div class="block">
						<el-date-picker v-model="value5" type="date" placeholder="2017-10-01"></el-date-picker>
						<span>生效</span>
					</div>
				</div>
			</div>	
		</div>
		
		<div class="box box2">
			<div class="text">
				加班费
			</div>
			<div class="tit">
				<span class="num">序号</span>
				<span class="standard">标准</span>
				<span class="range">适用范围</span>
				<span class="time">启用时间</span>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s"><span class="input">￥<input type="text" value="20.00"/></span>/次</span>
					<span class="range_s">全部</span>
					<div class="block">
						<el-date-picker v-model="value6" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">2</span>
					<span class="standard_s"><span class="input">￥<input type="text" /></span>/次</span>
					<span class="range_s">请选择适用范围</span>
					<div class="block">
						<el-date-picker v-model="value7" type="date" placeholder="选择日期"></el-date-picker>
					</div>
				</div>
			</div>	
		</div>
		
		<div class="box3">
			<span>
				备    &nbsp; &nbsp;   注： &nbsp; &nbsp; &nbsp;     设置完成之后请点击右侧的   " <span class="iconfont icon-dui right-s"></span> "  进行保存
			</span>
			<span class="iconfont icon-dui right"></span>
		</div>
		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        pickerOptions1: {
	          shortcuts: [{
	            text: '今天',
	            onClick(picker) {
	              picker.$emit('pick', new Date());
	            }
	          }, {
	            text: '昨天',
	            onClick(picker) {
	              const date = new Date();
	              date.setTime(date.getTime() - 3600 * 1000 * 24);
	              picker.$emit('pick', date);
	            }
	          }, {
	            text: '一周前',
	            onClick(picker) {
	              const date = new Date();
	              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
	              picker.$emit('pick', date);
	            }
	          }]
	        },
	        value1: '',
	        value2: '',
	        value3: '',
	        value4: '',
	        value5: '',
	        value6: '',
	        value7: ''
	      };
	    },
	    mounted:function(){
	    	this.axios.post("/api/api-finance/v1/finance/component/saveSalaryComponent?id=1&accessToken=aaa", 
	    		{
	    			"BasicSalary":{
	    				"sort":"1",
	    				"standard_money":"200",
	    				"unit":"￥"
	    			},
	    			"EducationAllowance":{
	    				"sort":"2",
	    				"standard_money":"300",
	    				"unit":"￥"
	    			},
	    			"OverTimeAllowance":{
	    				"sort":"3",
	    				"standard_money":"400",
	    				"unit":"￥"
	    			},
	    			"OverTimeMoney":{
	    				"sort":"4",
	    				"standard_money":"500",
	    				"unit":"￥"
	    			},
	    			"head_school_id":"1"
	    		}
	    	).then((res)=>{
	    		this.data1=res.data;
	    		console.log("新增或修改薪酬组成",this.data1);
	    	});
	    	
	    	this.axios.post("/api/api-finance/v1/finance/component/getSalaryComponentByHeadSchoolId?headSchoolId=1&accessToken=aaa").then((res)=>{
	    		this.data2=res.data;
	    		console.log("查询薪资组成",this.data2);
	    	})
	    }
    }
</script>


<style scoped lang="less">
.compile{
    position: absolute;
    right: 30px;
    top: -45px;
    cursor: pointer;
  }
	.box{
		width: 1008px;
		background: #fff;
		border-radius: 4px;
		margin-bottom: 12px;
		span{
			display: inline-block;
		}
		.text{
			height: 52px;
			line-height: 52px;
			padding: 0 30px;
			color: #31C27C;
		}
		.tit{
			height: 50px;
			line-height: 50px;
			background: #f0f5fa;
			padding: 0 30px;
			color: #333;
			span{
				display: inline-block;
			}
			.num{
				width: 100px;
			}
			.standard{
				width: 188px;
			}
			.range{
				width: 410px;
			}
		}
		.container{			
			padding: 0 30px;
		}
		.content{
			height: 60px;
			line-height: 60px;
			border-bottom: 1px dashed #eee;
			.num_s{
				width: 20px;
				height: 20px;
				line-height: 20px;
				background: #31C27C;
				text-align: center;
				border-radius: 50%;
				margin-right: 80px;
				color: #fff;
			}	
			.standard_s{
				width: 188px;
				line-height: 20px;
				.input{
					width: 64px;
					border-bottom: 1px solid #31C27C;
					color: #ffb54b;
					input{
						width: 48px;
						color: #ffb54b;
					}
				}
			}
			.range_s{
				width: 410px;
				cursor: pointer;
			}
			.block{
				display: inline-block;
			}
		}
	}
	.box1{
		padding-bottom: 80px;
	}
	.box2{
		padding-bottom: 20px;
	}
	.box3{
		height: 56px;
		line-height: 56px;
		background: white;
		border-radius: 4px;
		color: #31C27C;
		padding: 0 30px;
		margin-bottom: 12px;
		span{
			color: #31C27C;
			.right-s{
				font-size: 20px;
			}
		}
		.right{
				font-size: 24px;
				color: #50D79F;
				margin-left: 550px;
				cursor: pointer;
		}
	}
</style>