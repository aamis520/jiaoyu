<template>
	<div>
		<div class="compile">
	       <img src="../../../assets/help.png" alt="">
	    </div>
		<div class="box">
			<div class="text">
				班级
			</div>
			<div class="tit">
				<span class="num">序号</span>
				<span class="standard">标准</span>
				<span class="range">适用班型</span> 
				<span class="teacher">适用教师</span>
				<span class="time">启用时间</span>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s"><span class="input">￥  120</span>/次</span>
					<span class="range_s">大班  小班</span>
					<span class="teacher_s">专职（初级教师  中级教师）</span>
					<div class="block">
						<el-date-picker v-model="value1" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">2</span>
					<span class="standard_s point" id="point1">请选择班级代课费标准</span>
					<span class="range_s"></span>
					<span class="teacher_s"></span>
					<div class="block">
						<el-date-picker v-model="value2" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>	
		</div>
		
		<div class="box">
			<div class="text">
				一对一
			</div>
			<div class="tit">
				<span class="num">序号</span>
				<span class="standard">标准</span>
				<span class="range">适用课程</span> 
				<span class="teacher">适用教师</span>
				<span class="time">启用时间</span>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s"><span class="input">￥  220</span>/课时</span>
					<span class="range_s">初一数学  初一物理  初一化学...</span>
					<span class="teacher_s">专职（初级教师  中级教师）</span>
					<div class="block">
						<el-date-picker v-model="value3" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">2</span>
					<span class="standard_s point" id="point2">请选择班级代课费标准</span>
					<span class="range_s"></span>
					<span class="teacher_s"></span>
					<div class="block">
						<el-date-picker v-model="value4" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>	
		</div>
		
		<div class="box">
			<div class="text">
				一对N
			</div>
			<div class="tit">
				<span class="num">序号</span>
				<span class="standard">标准</span>
				<span class="range">适用类型</span> 
				<span class="teacher">适用教师</span>
				<span class="time">启用时间</span>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">1</span>
					<span class="standard_s"><span class="input">￥  80</span>/课时</span>
					<span class="range_s">一对五  一对六</span>
					<span class="teacher_s">专职（初级教师  中级教师）</span>
					<div class="block">
						<el-date-picker v-model="value5" type="date" placeholder="2017-10-01" ></el-date-picker>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="content">
					<span class="num_s">2</span>
					<span class="standard_s"><span class="input">￥  100</span>/课时</span>
					<span class="range_s">一对二  一对三  一对四</span>
					<span class="teacher_s">专职（高级教师）</span>
					<div class="block">
						<el-date-picker v-model="value6" type="date" placeholder="2017-10-01" ></el-date-picker>
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
		
		<create class="new" id="create"></create>
		<create1to1 class="new" id="1to1"></create1to1>
	</div>
</template>

<script>
	import create from '@/page/finance/salarySystem/create';
	import create1to1 from '@/page/finance/salarySystem/create1to1';
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
        value6: ''
       }
    },
    components:{
    	create,
    	create1to1
    },
    mounted(){
    	$("#point1").click(function(){
    		$("#create").show();
    	});
    	$("#point2").click(function(){
    		$("#1to1").show();
    	});
    	
    	this.axios.post("/api/api-finance/v1/finance/agentfee/saveAgentStandardSystem?id=1&accessToken=aaa", 
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
	    		console.log("新增或修改代课费体系",this.data1);
	    	});
    	
    	this.axios.post("/api/api-finance/v1/finance/agentfee/getAgentStandardSystemByHeadSchoolId?headSchoolId=1&accessToken=aaa").then((res)=>{
	   		this.data=res.data;
	   		console.log("查询代课费体系",this.data);
	    })
    	
    }
  };
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
		padding-bottom: 20px;
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
				width: 90px;
			}
			.standard{
				width: 164px;
			}
			.range{
				width: 246px;
			}
			.teacher{
				width: 224px;
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
				margin-right: 70px;
				color: #fff;
			}	
			.standard_s{
				width: 164px;
				line-height: 20px;
				.input{
					width: 64px;
					/*border-bottom: 1px solid #31C27C;*/
					color: #ffb54b;
					input{
						width: 48px;
						color: #ffb54b;
					}
				}
			}
			.range_s{
				width: 246px;
				cursor: pointer;
			}
			.teacher_s{
				width: 224px;
			}
			.block{
				display: inline-block;
			}
		}
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
	.point{
		cursor: pointer;
	}
	.new{
		display: none;
	}
</style>