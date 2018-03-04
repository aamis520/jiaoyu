<template>
	<div>
		<div class="shade"></div>
		<img src="../../assets/edit.png" class="compile">
		<p class="handle">
			<img src="../../assets/cancel.png" class="cancel">
			<img src="../../assets/confirm_normal.png" class="confirm">
		</p>
        <div class="setting">
			<p class="settingTitle">
				<b>大区</b>
			</p>
			<ul class="consult" style="margin-top: 30px;">
				<li v-for="(item,id) in reponseData.region_list">
						{{ item.region_name }}			
						<span class="iconfont icon-shezhi" v-on:click="showlayerPage(item,id)"></span>
				</li>
				<li>
					
					<input type="text" placeholder="请输入大区名称" name="edit" v-model="region" v-on:keyup.13="addregion">
					<input type="text" placeholder="请输入校区名称" name="editer" v-model="link" v-on:keyup.12="        " />
					<input type="text" placeholder="请输入分校信息" name="disabled" v-model="scss" v-on:abort="" />
				</li>
			</ul>
		</div>
		<div class="areaList" v-for="item in reponseData.region_list">
			<p>{{item.region_name }} · 地区 · 校区</p>
			<p>{{item.region_name}}·地区</p>
			<ul v-for="item in reponseData.region_list">
				<li>{{ item.area_list.area_name }}</li>
				<li>
					<input v-on:focus="chooseSchool" v-on:blur="schoolhide" type="text" placeholder="请选择校区" name="">
				</li>
			</ul>
		</div>
		<!-- 选择地区弹出层 -->
		<div v-show="layershow" class="layer">
			<div style="width: 10px; height: 10px; transform: rotate(45deg); position: absolute; top: -4px; right: 50px; background: #3f423f"></div>
			<span class="iconfont icon-cuo" style="color: #ffffff; position: absolute; right: 30px; font-size: 10px;"></span>
			<p style="margin-bottom: 15px; font-size: 14px;"></p>
			<ul>
				<li v-for="item in arrArea">
					{{ item }}
				</li>
				<li>
					<input type="text" placeholder="请输入地区名称" v-model="area" v-on:keyup.13="addarea" style="color: #ffffff; width: 100px; height: 26px; border-bottom: 1px solid #ffffff;">
					<span class="iconfont icon-dui" v-on:click="pushArea"></span>
				</li>
			</ul>
		</div>
		<!-- 选择校区弹出层 --> 
				<div class="layerSchool" v-show="layershowSchool">
					<div style="width: 10px; height: 10px; transform: rotate(45deg); position: absolute; top: -4px; right: 50px; background: #3f423f"></div>
					 <el-checkbox-group v-model="checkList" class="checkbox-group">
					    <el-checkbox label="西二旗校区"></el-checkbox>
					    <el-checkbox label="五道口校区"></el-checkbox>
					    <el-checkbox label="东直门校区"></el-checkbox>
					    <el-checkbox label="西直门校区"></el-checkbox>
					    <el-checkbox label="苹果园校区"></el-checkbox>
					    <el-checkbox label="龙泽校区"></el-checkbox>
					    <el-checkbox label="西三旗校区"></el-checkbox>
					    <el-checkbox label="五道口校区"></el-checkbox>
					    <el-checkbox label="东直门校区"></el-checkbox>
					    <el-checkbox label="西直门校区"></el-checkbox>
					    <el-checkbox label="苹果园校区"></el-checkbox>
					    <el-checkbox label="龙泽校区"></el-checkbox>
					  </el-checkbox-group>
					  <span class="iconfont icon-dui"></span>
				</div>
	</div>
</template>


<script>
	export default{		
		data(){			
			return{
                region:  '',
                arrRegion: [],
                layershow: false,
                layershowSchool: false,
                area: '',
                arrArea: [],
                checkList: [],
                reponseData: ''
			}
		},
		mounted(){
			this.axios({
				method: 'post',
				url: '/api/api-gsst/v1/campus/getCampusStructureInfo?headSchoolId=59e5b1f743a7f90998e16dd7&accessToken=aaaa'

			}).then((reponse) => {
				this.reponseData = reponse.data.messages.headSchool;
				console.log(this.reponseData)
			})
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
           	$(".icon-cuo").click(function () {
           		$(this).parent(".layer").hide();
           		this.layershow = ! this.layershow
           	})
	    },
        methods: {
        	addregion: function () {
        		this.arrRegion.push(this.region);
        		this.region = '';
        	},
        	addarea: function () {
        		this.arrArea.push(this.area);
        		this.area = '';
        	},
        	showlayerPage: function (id) {
        		console.log(id);
        		$(".layer p").text(id);
        		this.layershow = !this.layershow;
        	},
        	pushArea: function () {
        		console.log(this.arrArea) //diqu
        		console.log(this.arrRegion) //daqu
        		this.layershow = !this.layershow;
        	},
        	chooseSchool: function () {
        		console.log('hello');
        		this.layershowSchool = true;
        	},
        	schoolhide: function () {
        		// this.layershowSchool = false;
        	}
        }
	
	}
</script>
<style lang="less"  scoped>
	.layerSchool {
		.el-checkbox__inner{
			border-radius: 50%;
			background: #3f423f;
		}
		.el-input__inner{
			color: #31c27c;
			border: 0;
			outline: none;
			height: 23px;
		}
		.el-input__icon+.el-input__inner {
		    padding-right: 5px;
		}
		.el-date-editor--datetimerange.el-input{
			width: 300px;
		}
		[class*=" el-icon-"], [class^=el-icon-]{
			display: none;
			width: 0;
		}
	}
</style>

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
		padding-bottom: 30px;
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
		overflow: hidden;
	}
	.consult li{
		position: relative;
		height: 44px;
		line-height: 44px;
		margin-right: 60px;
		float: left;
	}
	.consult li input[name=area] {
		width: 56px;
	}
	.consult li input[name=edit] {
		width: 100px;
		border-bottom: 1px solid #666666;
	}
	.consult p{
		margin-top: 20px;
	}
	.iconfont {
		color: #59CE97;
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
	.icon-dui {
		font-size: 26px;
		position: relative;
		bottom: -6px;
		left: 0px;
	}
	.layer {
		width: 630px;
		background: #3f423f;
		padding: 30px;
		color: #ffffff;
		position: absolute;
		top: 166px;
		left: 0;
	}
	.layer ul {
		overflow: hidden;
	}
	.layer ul li {
		height: 44px;
		line-height: 44px;
		margin-right: 60px;
		float: left;
	}

	.areaList {
		background: #ffffff;
		border-radius: 3px;
		padding-bottom: 30px;
		margin-bottom: 12px;
		font-size: 14px;
	}
	.areaList p {
		line-height: 57px;
		height: 57px;
		font-size: 14px;
		color: #59CE97;
		margin: 0 30px;
		border-bottom: 1px dashed #c6c6c6; 
		margin-bottom: 10px;
	}
	.areaList ul {
		overflow: hidden;
		margin: 0 30px;
	}
	.areaList ul li {
		height: 43px;
		line-height: 43px;
		font-size: 14px;
		color: #666666;
		float: left;
		margin-right: 33px;
	}
	.areaList ul li:first-child {
		color: #59CE97;
		margin-right: 50px;
	}
	.areaList ul li:nth-child(10) {
		margin-left: 106px;
	}
	.areaList ul li:last-child input {
		border-bottom: 1px solid #000000;
		width: 100px;
	}
	.layerSchool {
		width: 900px;
		height: 170px;
		background: #3f423f;
		color: #FFFFFF;
		padding: 20px 30px;
		position: relative;
		.checkbox-group label{
			color: #FFFFFF;
			font-size: 12px;
			margin: 0 45px 18px 0
		}
		span {
			width: 0;
			position: absolute;
			bottom: 16px;
			left: 840px;
		}
	}

</style>