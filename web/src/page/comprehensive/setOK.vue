<template>
	<form>
		<img src="../../assets/edit.png" class="compile">
		<p class="handle">
			<img src="../../assets/cancel.png" class="cancel">
			<img src="../../assets/confirm_normal.png" class="confirm">
		</p>
		<div class="setting">
			<p class="settingTitle">咨询·关注类型·限12条</p>
			<ul class="consult">
				<li v-for="item in data.consult_concern_type_list">{{item.name}}</li>
				<!--<li><input type="text" readonly="readonly" value="生日关注" /></li>
				<li><input type="text" readonly="readonly" value="试听关注" /></li>
				<li><input type="text" readonly="readonly" value="未到关注" /></li>
				<li><input type="text" readonly="readonly" value="咨询关注" /></li>
				<li><input type="text" readonly="readonly" value="报名关注" /></li>
				<li><input type="text" readonly="readonly" value="在读关注" /></li>
				<li><input type="text" readonly="readonly" value="催续关注" /></li>
				<li><input type="text" readonly="readonly" value="催欠关注" /></li>
				<li><input type="text" readonly="readonly" value="申退关注" /></li>
				<li><input type="text" readonly="readonly" value="缺课关注" /></li>
				<li><input type="text" readonly="readonly" value="来访关注" /></li>
				<li><input type="text" readonly="readonly" value="自定义项A" /><span class="iconfont icon-2 oneself-X"> </span></li>
				<li><input type="text" placeholder="自定义添加" class="customAdd" maxlength="4" /><span class="iconfont icon-dui iconyes"> </span></li>-->
			</ul>
		</div>
		<div class="setting">
			<p class="settingTitle">
				<b>信息来源·限12条</b>
				<span>备注 ：点击 <i class="iconfont icon-shezhi"></i> , 设置二级菜单，每条5字以内</span>
			</p>
			<ul class="consult">
				<li v-for="item in data.information_source_list">{{item.name}}</li>
				<!--<li>
					<input type="text" readonly="readonly" value="400电话" />
					<p class="seticon">
						<span class="iconfont icon-2"> </span>
						<span class="iconfont icon-shezhi"></span>
					</p>
					<div class="setmenu">
						<p>400电话-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>
				<li>
					<input type="text" readonly="readonly" value="热线宣传" />
					<p class="seticon">
						<span class="iconfont icon-2"> </span>
						<span class="iconfont icon-shezhi"></span>
					</p>
					<div class="setmenu">
						<p>热线宣传-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>
				<li>
					<input type="text" readonly="readonly" value="广告投放" />
					<p class="seticon">
						<span class="iconfont icon-2"> </span>
						<span class="iconfont icon-shezhi"></span>
					</p>
					<div class="setmenu">
						<p>广告投放-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>
				<li>
					<input type="text" readonly="readonly" value="转介绍" />
					<p class="seticon fourseticon">
						<span class="iconfont icon-2"> </span>
						<span class="iconfont icon-shezhi"></span>
					</p>
					<div class="setmenu">
						<p>转介绍-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>
				<li>
					<input type="text" readonly="readonly" value="家长直访" />
					<p class="seticon">
						<span class="iconfont icon-2"> </span>
						<span class="iconfont icon-shezhi"></span>
					</p>
					<div class="setmenu">
						<p>家长直访-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>
				<li>
					<input type="text" readonly="readonly" value="跨校介绍" />
					<p class="seticon">
						<span class="iconfont icon-2"> </span>
						<span class="iconfont icon-shezhi"></span>
					</p>
					<div class="setmenu">
						<p>跨校介绍-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>
				<li>
					<input type="text" readonly="readonly" value="地推宣传" />
					<p class="seticon">
						<span class="iconfont icon-2"> </span>
						<span class="iconfont icon-shezhi"></span>
					</p>
					<div class="setmenu">
						<p>地推宣传-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>
				<li>
					<input type="text" readonly="readonly" value="其他方式" />
					<p class="seticon">
						<span class="iconfont icon-2"> </span>
						<span class="iconfont icon-shezhi"></span>
					</p>
					<div class="setmenu">
						<p>其他-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>
				<li>
					<input type="text" readonly="readonly" value="外宣登记" />
					<p class="seticon">
						<span class="iconfont icon-2"> </span>
						<span class="iconfont icon-shezhi"></span>
					</p>
					<div class="setmenu">
						<p>外宣登记-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>
				<li>
					<input type="text" readonly="readonly" value="自定义项" />
					<p class="seticon">
						<span class="iconfont icon-2"> </span>
						<span class="iconfont icon-shezhi"></span>
					</p>
					<div class="setmenu">
						<p>自定义添加-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>
				<li>
					<input type="text" placeholder="自定义添加" class="customAdd" maxlength="4" />
					<span class="iconfont icon-dui iconyes secondiconyes"> </span>
					<div class="setmenu">
						<p>自定义添加-二级菜单（5字以内）<span class="iconfont icon-cuo1"></span></p>
						<div class="user-oneself">
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<input type="text" class="customAdd oneself" maxlength="5" />
							<span class="iconfont icon-dui"></span>
						</div>
					</div>
				</li>-->
			</ul>
		</div>
		<div class="setting">
			<p class="settingTitle">跟进方式·限12条</p>
			<ul class="consult">
				<li v-for="item in data.follow_up_type_list">{{item.name}}</li>
				<!--<li><input type="text" readonly="readonly" value="去电跟进" /></li>
				<li><input type="text" readonly="readonly" value="家校互联" /></li>
				<li><input type="text" readonly="readonly" value="微信沟通" /></li>
				<li><input type="text" readonly="readonly" value="手机短信" /></li>
				<li><input type="text" readonly="readonly" value="Q Q 联络" /></li>
				<li><input type="text" readonly="readonly" value="家长来电" /></li>
				<li><input type="text" readonly="readonly" value="家长来访" /></li>
				<li><input type="text" readonly="readonly" value="其他方式" /></li>
				<li><input type="text" readonly="readonly" value="自定义项A" /><span class="iconfont icon-2 oneself-X"> </span></li>
				<li><input type="text" placeholder="自定义添加" class="customAdd" maxlength="4" /><span class="iconfont icon-dui iconyes"> </span></li>-->
			</ul>
		</div>
		<div class="setting">
			<p class="settingTitle">咨询·跟进结果·限12条</p>
			<ul class="consult">
				<li v-for="item in data.parents_intention_list">{{item.name}}</li>
				<!--<li><input type="text" readonly="readonly" value="电话不通" /></li>
				<li><input type="text" readonly="readonly" value="无人接听" /></li>
				<li><input type="text" readonly="readonly" value="拒绝再谈" /></li>
				<li><input type="text" readonly="readonly" value="计划试听" /></li>
				<li><input type="text" readonly="readonly" value="安排面试" /></li>
				<li><input type="text" readonly="readonly" value="继续跟进" /></li>
				<li><input type="text" readonly="readonly" value="暂时搁置" /></li>
				<li><input type="text" readonly="readonly" value="已报他校" /></li>
				<li><input type="text" readonly="readonly" value="已报他课" /></li>
				<li><input type="text" readonly="readonly" value="自定义项A" /><span class="iconfont icon-2 oneself-X"></span></li>
				<li><input type="text" placeholder="自定义添加" class="customAdd" maxlength="4" /><span class="iconfont icon-dui iconyes"> </span></li>-->
			</ul>
		</div>
		<div class="setting">
			<p class="settingTitle">试听未到+试听已到·跟进结果</p>
			<ul class="consult">
				<li><input type="text" readonly="readonly" value="继续跟进" /></li>
				<li><input type="text" readonly="readonly" value="约来再听" /></li>
				<li><input type="text" readonly="readonly" value="推荐其他" /></li>
				<li><input type="text" readonly="readonly" value="暂时放弃" /></li>
				<li><input type="text" readonly="readonly" value="试听其他" /></li>
			</ul>
		</div>
		<div class="setting">
			<p class="settingTitle">
				<b>咨询·家长意向+在读·家长满意度</b>
				<span>下列信息为系统自带，不可删除</span>
			</p>
			<div class="consult">
				<p class="parents ideea">
					<span>家长意见</span>
					<input type="text" readonly="readonly" value="意向强烈" />
					<input type="text" readonly="readonly" value="意向一般" />
					<input type="text" readonly="readonly" value="没有意向" />
					<input type="text" readonly="readonly" value="无法确定" />
				</p>
				<p class="parents satisfaction">
					<span>家长满意度</span>
					<input type="text" readonly="readonly" value="家长满意" />
					<input type="text" readonly="readonly" value="态度一般" />
					<input type="text" readonly="readonly" value="家长不满" />
					<input type="text" readonly="readonly" value="十分不满" />
					<input type="text" readonly="readonly" value="家长投诉" />
				</p>
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">特殊学生身份·限12条</p>
			<ul class="consult">
				<li><input type="text" readonly="readonly" value="教工直系亲属" /></li>
				<li><input type="text" readonly="readonly" value="贫困生" /></li>
				<li><input type="text" readonly="readonly" value="特优生" /></li>
				<li><input type="text" readonly="readonly" value="自定义项A" /><span class="iconfont icon-2 oneself-X"> </span></li>
				<li><input type="text" placeholder="自定义添加" class="customAdd" maxlength="4" /><span class="iconfont icon-dui iconyes"> </span></li>
				</li>
			</ul>
		</div>
		<div class="setting">
			<p class="settingTitle">
				<b>信息去重·设置</b>
				<span>下列信息为系统自带，不可删除</span>
			</p>
			<ul class="consult message">
				<li class="message-end">已录入的信息,不可以重复录入</li>
				<li class="message-same">学校、年级、学生姓名、电话、相同的信息，认定为同一信息，不可重复录入</li>
			</ul>
		</div>
		<div class="shade"></div>
	</form>

</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first',
				data: []
			}
		},
		mounted() {
			$(".consult").on("click", ".icon-shezhi", function() {
				$(this).parent().next(".setmenu").show();
				$(".shade").show();
			});
			$(".consult").on("click", ".icon-dui", function() {
				$(this).parents(".setmenu").hide();
				$(".shade").hide();
			});
			$(".consult").on("click", ".icon-cuo1", function() {
				$(this).parents(".setmenu").hide();
				$(".shade").hide();
			});
			$(".consult").on("click", ".icon-2", function() {
				$(this).parents("li").hide();
			});
        this.axios.post("/api/api-integrated/v1/integrated/commonInfo/initOtherCommonInfo?accessToken=aaaa&headSchoolId=1").then((res)=>{
	    		const arr = res.data
        		this.data=res.data.messages.headOtherCommonInfo
     			console.log(11111111,res.data.messages.data)
     			console.log(111111,this.data)
				var obj = res.data;	
				console.log(212, res);
			}).catch(function(error) {
				console.log(error)
			});
			$(".compile").click(function(){
           		$(".compile").hide();
           		$(".handle").show();
          });
		},
		methods: {}
	}
</script>

<style lang="less" scoped>


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
	.shade{

		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		// background: rgba(0,0,0,0.5);
		display: none;
	}
	
	.setting {
		height: 160px;
		background: #ffffff;
		border-radius: 3px;
		margin-bottom: 12px;
		font-size: 14px;
		color: #666666;
	}
	
	.settingTitle {
		height: 53px;
		line-height: 53px;
		margin: 0 30px;
		border-bottom: 1px dashed #c6c6c6;
		font-size: 14px;
		color: #31c27c;
	}
	
	.consult {
		margin: 10px 0 0 30px;
	}
	
	.consult li {
		position: relative;
		height: 46px;
		width: 125px;
		float: left;
	}
	
	.consult li i {
		background: url(../../assets/duiHao.jpg) no-repeat;
		background-size: 100%;
		display: inline-block;
		width: 16px;
		height: 17px;
		position: absolute;
		left: 48%;
		top: 30%;
		display: none;
	}
	
	.consult .lastDuihao {
		left: 63%;
	}
	
	.consult input {
		font-size: 14px;
		color: #666;
		border: 0;
		outline: 0;
		background: none;
		height: 46px;
		width: 125px;
	}
	
	.consult .customAdd {
		color: #b4b4b4;
		border-bottom: 1px solid #b4b4b4;
		padding-left: 5px;
		width: 80px;
	}
	
	.settingTitle b {
		float: left;
	}
	
	.settingTitle span {
		float: right;
	}
	
	.seticon {
		position: absolute;
		left: 48%;
		top: 35%;
	}
	
	.fourseticon {
		left: 38%;
	}
	
	.icon-shezhi,
	.icon-2 {
		font-weight: bold;
		font-size: 13px;
	}
	
	.icon-shezhi,
	.parents {
		color: #31c27c;
	}
	
	.icon-cuo1 {
		position: absolute;
		right: 4%;
		font-size: 27px;
	}
	
	.icon-2 {
		color: #9f9f9f;
	}
	
	.consult .setmenu {
		width: 586px;
		height: 96px;
		background-color: rgba(0, 0, 0, .7);
		border-radius: 3px;
		padding: 0 22px;
		color: #fff;
		font-size: 14px;
		font-weight: normal;
		position: absolute;
		z-index: 5;
		left: 32%;
		display: none;
	}
	
	.icon-dui {
		color: #31c27c;
		font-size: 27px;
		display: inline-block;
		margin-top: 20px;
		margin-left: 12px;
		vertical-align: top;
	}
	
	.iconyes {
		font-size: 16px;
		vertical-align: middle;
		margin-top: 2px;
		font-weight: bold;
	}
	
	.consult .setmenu::before {
		display: block;
		border: solid transparent;
		border-width: 8px;
		border-bottom-color: rgba(0, 0, 0, .7);
		height: 0;
		width: 0;
		content: "";
		position: absolute;
		left: 6.3%;
		top: -16px;
	}
	
	.setmenu p {
		margin: 20px 0 5px 0;
	}
	
	.user-oneself .oneself {
		border-bottom: 1px solid #a1a3a2;
		width: 14%;
		height: 41px;
		margin-right: 20px;
	}
	
	.oneself-X {
		position: absolute;
		left: 57%;
		top: 35%;
	}
	
	.parents span {
		width: 122px;
		display: inline-block;
	}
	
	.message {
		margin-top: 26px;
	}
	
	.consult .message-end {
		width: 33%;
	}
	
	.consult .message-same {
		width: 50%;
	}
	
	.consult .class-course {
		height: 40px;
		line-height: 40px;
	}
	
	.class-course b {
		width: 229px;
		display: inline-block;
	}
	
	.class-course span {
		width: 18px;
		height: 18px;
	}
	
	.big,
	.samll {
		border-radius: 50%;
		display: inline-block;
	}
	
	.class-course .big {
		background: #31c27c;
		text-align: center;
		line-height: 15px;
		margin-right: 10px;
		vertical-align: middle;
	}
	
	.class-course .big .small {
		background-color: #ffffff;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		display: inline-block;
	}
	
	.content {
		margin-right: 39px;
	}
</style>