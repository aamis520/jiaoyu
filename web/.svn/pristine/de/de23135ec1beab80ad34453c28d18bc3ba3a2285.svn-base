<template>
	<form>
		<img src="../../assets/edit.png" class="compile">
		<p class="handle">
			<img src="../../assets/cancel.png" class="cancel">
			<img src="../../assets/confirm_normal.png" class="confirm">
		</p>
		<div class="shade"></div>
		<div class="setting">
			<p class="settingTitle marked">
				班级·缴费设置 
				<img src="../../assets/notes_normal.png" class="notes_normal">
				<span class="marked-words">家长端只支持全额缴费，不收取定金</span>
			</p>
			<div class="consult">
				<p>
					<el-radio class="radio radio-distance" v-model="radio" label="1">教师端不允许定金缴费</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">教师端允许定金缴费，但每门课程的定金金额不低于 <input type="tel" v-model="val" class="userinput" :value="val"> 元</el-radio>
				</p>
				<p><el-radio class="radio" v-model="radio" label="3">班级缴费优惠金额大于 <input type="tel" v-model="val" class="userinput" :value="val">元，或应缴金额的 <input type="tel" v-model="val" class="userinput" :value="val"> %时，必须审批</el-radio></p>
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">班级·试听费用·设置</p>
			<div class="consult">
				<p>
					<b class="green">班级课</b>
					<el-radio class="radio distance" v-model="radio" label="1">插班试听收费</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">插班试听不收费</el-radio>
				</p>
				<p class="remark">备注：若学生欠费试听，一个月内没有报名此课程，试听费自动清零</p>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">班级课程·扣费·设置</p>
			<div class="consult choice-style">
				<el-radio class="radiostyle" v-model="radio" label="1">未到次数扣费，补课不扣费</el-radio>
	  			<el-radio class="radiostyle" v-model="radio" label="2">未到次数不扣费，补课扣费</el-radio>
				<el-radio class="radiostyle" v-model="radio" label="1">每期未到，可顺延 <input type="tel" v-model="val" class="userinput" :value="val"> 次，其余扣费，次数补课免费</el-radio>
	  			<el-radio class="radiostyle" v-model="radio" label="2">每期未到，<input type="tel" v-model="val" class="userinput" :value="val"> 次内扣费，其余扣费，次数补课免费</el-radio>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">班级课程·催费·退费·设置</p>
			<div class="consult">
				<label class="label-margin">班级课体检 <input type="tel" v-model="val" class="userinput" :value="val"> 次，提醒家长续费，学生档案形成 “催费” 标</label>
				<label class="label-margin">班级课，开课 <input type="tel" v-model="val" class="userinput" :value="val">  次后或点名到课超时 <input type="tel" v-model="val" class="userinput" :value="val"> 次后不可退费</label>
				<label class="label-margin">班级课退费额 <input type="tel" v-model="val" class="userinput" :value="val"> 元，或超过本课程实缴总额的 <input type="tel" v-model="val" class="userinput" :value="val"> %，须审批</label>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">班级·试听费用·设置</p>
			<div class="consult">
				<p>学生每期未到次数超过 <input type="tel" v-model="val" class="userinput" :value="val"> 次后，不予补课（家长手机端会在请假的时候得到提示）</p>
				<p>
					<b>每学期，“未请假” 的未到次数</b>
					<el-radio class="radio distance" v-model="radio" label="1">可以补课</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">不予补课</el-radio>
				</p>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">VIP课程·费用标准·规则设置</p>
			<div class="consult">
				<p>
					<b>一对一的费用标准，只设置</b>
					<el-radio class="radio rad" v-model="radio" label="1">最低标准值</el-radio>
	  				<el-radio class="radio rad-dis" v-model="radio" label="2">最高标准值</el-radio>
	  				<label>由咨询师根据实情填写，优惠额超过应缴额的 <input type="tel" v-model="val" class="userinput" :value="val"> %，必须审批</label>
				</p>
				<p>
					<b>一对N的费用标准，只设置</b>
					<el-radio class="radio rad" v-model="radio" label="1">最低标准值</el-radio>
	  				<el-radio class="radio rad-dis" v-model="radio" label="2">最高标准值</el-radio>
	  				<label>由咨询师根据实情填写，优惠额超过应缴额的 <input type="tel" v-model="val" class="userinput" :value="val"> %，必须审批</label>
				</p>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">VIP课时计算·设置</p>
			<div class="consult classhour">
				<b>VIP课时计算</b>
				<el-radio class="radio" v-model="radio" label="1">精确到个位</el-radio>
  				<el-radio class="radio" v-model="radio" label="2">精确到小数点后一位</el-radio>
  				<el-radio class="radio" v-model="radio" label="1">精确到0.5</el-radio>
  				<el-radio class="radio" v-model="radio" label="2">精确到小数点后两位</el-radio>
  				<el-radio class="radio" v-model="radio" label="1">精确到0.25</el-radio>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">VIP课·催费提醒·设置</p>
			<div class="consult">
				<p>一对一课，提前 <input type="tel" v-model="val" class="userinput" :value="val"> 课时，提醒家长续费，学生档案形成 “催续” 标</p>
				<p>一对N课，提前 <input type="tel" v-model="val" class="userinput" :value="val">  课时，提醒家长续费，学生档案形成 “催续” 标</p>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">VIP课·退费提醒·设置</p>
			<div class="consult">
				<p>一对一课退费额超过 <input type="tel" v-model="val" class="userinput" :value="val"> 元，或超过本单实缴总额的 <input type="tel" v-model="val" class="userinput" :value="val"> %，必须审批</p>
				<p>一对一课退费额超过 <input type="tel" v-model="val" class="userinput" :value="val"> 元，或超过本单实缴总额的 <input type="tel" v-model="val" class="userinput" :value="val"> %，必须审批</p>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">一对N课程·试听费用·设置</p>
			<div class="consult">
				<p>
					<b class="green">VIP课</b>
					<el-radio class="radio distance" v-model="radio" label="1">插班试听收费</el-radio>
	  				<el-radio class="radio" v-model="radio" label="2">插班试听不收费</el-radio>
				</p>
				<p class="remark">备注：若学生欠费试听，一个月内没有报名此课程，试听费自动清零</p>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">一对N课程·扣费·设置</p>
			<div class="consult classhour">
				<el-radio class="radio" v-model="radio" label="1">插班试听收费</el-radio>
	  			<el-radio class="radio" v-model="radio" label="2">{{data.name}}</el-radio>
			</div>	
		</div>
		<div class="setting">
			<p class="settingTitle">升级设置</p>
			<div class="consult classhour">
				每年 
				<div class="block">
				    <el-date-picker
				      v-model="value1"
				      align="right"
				      type="date"
				      :picker-options="pickerOptions0">
				    </el-date-picker>
				</div>，学生就读年级，自动升级，系统将会在每年的8月20日，系统将会在每年的8月20日，为所有学生自动升年级
			</div>	
		</div>
	</form>
</template>

<script>
	export default {
		data () {
			return {
				val: "",
				radio: "",
				pickerOptions0: {
					disabledDate (time) {
						return time.getTime() < Date.now() - 8.64e7;
					}
				},
				value1: '',
				data:[]
			}
		},
		methods: {
		},
		mounted () {
			var _this = this;
			console.log(_this.val)
           	$("#editInput").on("click",function(){
           	    var odom = $(".label1");
                var ovalue = odom.attr("data-show");
                if(ovalue=="true"){
                 	odom.attr("data-show","false");
                    odom.addClass("show");  
                }else{
                	odom.attr("data-show","true");
                 	odom.removeClass("show");
                }   
           	});
           	$("#saveInput").on("click",function(){
           	});
           	$(".marked").hover(function () {
           		$(this).find(".marked-words").show();
           	}, function () {
           		$(this).find(".marked-words").hide();
           	});
           	$(".compile").click(function(){
           		$(".compile").hide();
           		$(".handle").show();
           	});
//         	 this.axios.post("/api/api-integrated/v1/integrated/feeRule/insertOrUpdateHeadFeeRule?accessToken=aaaa",{
//	    		   
//       }).then((res) => {
//       	
//			this.data=res.data.messages.data.entrance_date_manage
//			console.log(111222,this.data)
//       	var obj = res.data.messages.data;

//       	var class_course_payment_setting = obj.class_course_payment_setting;
//       	var is_allow_earnest = class_course_payment_setting.is_allow_earnest;
//       	if(is_allow_earnest){
//       		$("#a").attr("checked",true);
//       	}else{
//       		$("#b").attr("checked",true);
//       	}
			var url = "/api/api-integrated/v1/integrated/feeRule/insertOrUpdateHeadFeeRule?accessToken=aaaa";
			var jsonParam = {
				"head_school_id":"1",
					"class_course_payment_setting": {
							"name": "生日关注",
							"is_allow_earnest": false,
							"head_school_id": "1"
					},
					"is_charge_by_class_transfer_audition":false,
					"is_charge_by_vip_transfer_audition":false,	
					"course_charge_setting_list": [{
							"name": "去电跟进",
							"postponed_num": "1",
							"refund_num": "1",
							"is_check": true
						},
						{
							"name": "12345",
							"postponed_num": "1",
							"refund_num": "1",
							"is_check": true
						}
					],
					"class_advance_remind_payment_num":123,
					"vip_1v1_advance_remind_payment_num":1,
					"vip_1vn_advance_remind_payment_num":2,
					"class_start_num":3,
					"roll_call_num":4,
					"class_refund_max_money":5,
					"class_refund_max_percent":6,
					"vip_1v1_refund_max_money":7,
					"vip_1v1_refund_max_percent":8,
					"vip_1vn_refund_max_money":9,
					"vip_1vn_refund_max_percent":10,
					"charge_max_num":11,
					"is_compensate":false,
					"vip_course_fee_rule":{
						"name_to_1v1":"打电话",
						"is_check_min_to_1v1":false,
						"v1_discount_max_percent":1,
						 "name_to_1vN":"大白兔",
						 "is_check_min_to_1vN":false,
						 "vn_discount_max_percent":11
					},
					"is_1vN_miss_not_fee":false,
					"course_refund_approve_setting":{
						  "id":"1",
						"name":"小可爱"					
					},
					"entrance_date_manage":{
						"id":"1",
						"name":"小白兔"
					},
					"vip_class_course_account":12,
					"user_id":"不大不小",
					"create_time":2017-11-12,
					"is_delete":13,
					"update_user_id":"修改时间"
			};
			this.axios.post(url,jsonParam).then((res)=>{
//	    		const arr = res.data     
        		this.data=res.data.messages.data.entrance_date_manage
//   			console.log(11111111,res.data.messages.data)
     			console.log(111111,this.data)
				var obj = res.data.messages.data;
				console.log(212, res);
			}).catch(function(error) {
				console.log(error)
			});
	 }
	}
</script>

<style lang="less" scoped>
	img, textarea, select{
		vertical-align: top;
	}
	.green{
		color: #31c27c;
	}
	.shade{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		z-index: 5;
	}
	.setting{
		height: 160px;
		background: #ffffff;
		border-radius: 3px;
		margin-bottom: 12px;
		font-size: 14px;
		color: #666666;
		position: relative;
	}
	.save{
		width: 26px;
		height: 26px;
		background-size: 100%;
		position: absolute;
		bottom: 30px;
    	right: 30px;
	}
	.settingTitle{
		height: 50px;
		line-height: 50px;
		margin: 0 30px;
		border-bottom: 1px dashed #c6c6c6;
		font-size: 14px;
		color: #31c27c;
	}
	.consult{
		margin:0 30px;
	}
	.consult li{
		position: relative;
		height: 44px;
		line-height: 44px;
		margin-right: 60px;
		float: left;
	}
	.consult p{
		margin-top: 20px;
	}
	.icon-yishitubiaoshuchu-{
		color: #c8c8c8;
	}
	.duigreen{
		color: #31c27c;
		display: none;
	}
	.el-radio__label{
    	color: #666;
	}
	.remark{
		color: #999;
	}
	.notes_normal{
		margin-top: 17px;
	}
	.compile, .handle{
		position: absolute;
		right: 20px;
		top: -48px;
		cursor: pointer;
	}
	.handle{
		display: none;
		.cancel{
			margin-right: 12px;
		}
	}
	.hint{
		width: 380px;
		height: 200px;
		background-color: #ffffff;
		border-radius: 4px;
		position: absolute;
		top: 25%;
		left: 25%;
		z-index: 6;
		box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.3);
		display: none;
		p{
			color: #666;
			text-align: center;
			font-size: 14px;
			line-height: 26px;
		}
		img{
			margin:30px 45% 10px 45%; 
		}
		.hint-title{
			height: 50px;
			border-top-right-radius: 4px;
			border-top-left-radius: 4px;
			background-color: #f2f5f8;
			line-height: 50px;
			font-size: 18px;
			color: #333;
			padding-left: 170px;
			.closehint{
				color: #bfbfcd;
				font-size: 18px;
				margin-left: 138px;
			}
		}
	}
	.userinput{
		border-bottom: 1px solid #31c27c;
		width: 56px;
	}
	.radio-distance{
		margin-right: 38px;
	}
	.distance{
		margin: 0 25px 0 40px;
	}
	.rad{
		margin-left: 25px;
	}
	.rad-dis{
		margin: 0 40px 0 25px;
	}
	.choice-style .radiostyle, .label-margin{
		margin-top: 20px;
		width: 470px;
		margin-left: 0;
	}
	.label-margin{
		display: inline-block;
	}
	.classhour{
		line-height: 110px;
		b, .radio{
			margin-right: 35px;
		}
	}
	.block{
		display: inline-block;
	}
	.marked{
		position: relative;
	}
	.marked-words{
		display: block;
		width: 276px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: #31c27c;
		position: absolute;
		top: -24px;
		left: 80px;
		border-radius: 3px;
		color: #fff;
		display: none;
		cursor: pointer;
	}
	.marked-words::before{
		display: block;
		border: solid transparent;
		border-width: 7px;
		border-top-color: #31c27c;
		height: 0;
		width: 0;
		content: "";
		position: absolute;
		top: 30px;
		left: 13px;
	}
</style>