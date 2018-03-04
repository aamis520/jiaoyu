<template>
	<form>
		<img src="../../assets/edit.png" class="compile">
		<p class="handle">
			<img src="../../assets/cancel.png" class="cancel" @click="emptyHandle">
			<img src="../../assets/confirm_normal.png" class="confirm">
		</p>
		<div class="shade"></div>
		<div class="limit">（每项20条以内）</div>
		<div class="setting">
			<p class="settingTitle">好评内容设置</p>
			<div class="consult">
				<ul class="good-list">
					<li v-for="item in goodList">{{item}}</li>
				</ul>
				<input type="text" maxlength="10" placeholder="10字以内" v-model="good" @blur="addGood" :value="good" class="add addGood" />
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">中评内容设置</p>
			<div class="consult">
				<ul class="good-list">
					<li v-for="item in middleList">{{item}}</li>
				</ul>
				<input type="text" maxlength="10" placeholder="10字以内" v-model="middle" @blur="addMiddle" :value="middle" class="add addMiddle" />
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">差评内容设置</p>
			<div class="consult">
				<ul class="good-list">
					<li v-for="item in shortList">{{item}}</li>
				</ul>
				<input type="text" maxlength="10" placeholder="10字以内" v-model="short" @blur="addShort" :value="short" class="add addShort" />
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">鼓励内容设置</p>
			<div class="consult">
				<ul class="good-list">
					<li v-for="item in heartenList">{{item}}</li>
				</ul>
				<input type="text" maxlength="10" placeholder="10字以内" v-model="hearten" @blur="addHearten" :value="hearten" class="add addHearten" />
			</div>
		</div>
		<div class="setting">
			<p class="settingTitle">建议内容设置</p>
			<div class="consult">
				<ul class="good-list">
					<li v-for="item in suggestList">{{item}}</li>
				</ul>
				<input type="text" maxlength="10" placeholder="10字以内" v-model="suggest" @blur="addSuggest" :value="suggest" class="add addSuggest" />
			</div>
		</div>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				goodList: [],
				middleList: [],
				shortList: [],
				heartenList: [],
				suggestList: [],
				good: "",
				middle: "",
				short: "",
				hearten: "",
				suggest: ""
		}
		},
		methods: {
			emptyHandle: function() {
				$(".good-list").html("");
				$(".add").val("");
			},
			addGood: function() {
				if(this.goodList.length <= 19) {
					if(this.good == "") {
						this.goodList.length == 0;
						return false
					} else {
						this.goodList.push(this.good);
					}
				} else if(this.goodList.length >= 19) {
					$(".addGood").hide();
				}
			},
			addMiddle: function() {
				if(this.middleList.length <= 19) {
					if(this.middle == "") {
						this.middleList.length == 0;
						return false
					} else {
						this.middleList.push(this.middle);
					}
				} else if(this.middleList.length >= 19) {
					$(".addMiddle").hide();
				}
			},
			addShort: function() {
				if(this.shortList.length <= 19) {
					if(this.short == "") {
						this.shortList.length == 0;
						return false
					} else {
						this.shortList.push(this.short);
					}
				} else if(this.shortList.length >= 19) {
					$(".addShort").hide();
				}
			},
			addHearten: function() {
				if(this.heartenList.length <= 19) {
					if(this.hearten == "") {
						this.heartenList.length == 0;
						return false
					} else {
						this.heartenList.push(this.hearten);
					}
				} else if(this.heartenList.length >= 19) {
					$(".addHearten").hide();
				}
			},
			addSuggest: function() {
				if(this.suggestList.length <= 19) {
					if(this.suggest == "") {
						this.suggestList.length == 0;
						return false
					} else {
						this.suggestList.push(this.suggest);
					}
				} else if(this.suggestList.length >= 19) {
					$(".addSuggest").hide();
				}
			}
		},
		mounted() {
			var _this = this;
			$("#editInput").on("click", function() {
				var odom = $(".label1");
				var ovalue = odom.attr("data-show");
				if(ovalue == "true") {
					odom.attr("data-show", "false");
					odom.addClass("show");
				} else {
					odom.attr("data-show", "true");
					odom.removeClass("show");
				}
			});
			$(".confirm").click(function() {
				var jsonData = {
					"head_school_id": "hs001",
					"course_type_list": [{
							"type": "1",
							"name": "班级课",
							"is_check": true
						},
						{
							"type": "2",
							"name": "对一课",
							"is_check": true
						},
						{
							"type": "3",
							"name": "对N课",
							"is_check": true
						},
						{
							"type": "4",
							"name": "托管课",
							"is_check": false

						}
					]
				};
				this.axios.post("/api/api-integrated/v1/integrated/comment/insertOrUpdateHeadTeachingComment?accessToken=aaaa", jsonData).then((res) => {
					const arr = res.data.messages.data
					console.log(11, res.data.messages.data)
				}).catch((error) => {
					console.log(error)
				});
				//	  	  		this.axios.post("/api/api-gsst/v1/campus/getCampusTypes?accessToken=aaaa").then( (res) => {
				//	    			const arr = res.data.messages.data
				//	    			console.log(11,res.data.messages.data)
				//					}).catch(function (error) {
				//						console.log(error);
				//				});	
			})
			$("#saveInput").on("click", function() {});
			$(".notes_normal").mouseover(function() {
				$(".marked-words").show();
			});
			$(".notes_normal").mouseout(function() {
				$(".marked-words").hide();
			});
			$(".compile").click(function() {
				$(".compile").hide();
				$(".handle").show();
			});
			//	this.submitPath = "/api/api-integrated/v1/integrated/comment/insertOrUpdateHeadTeachingComment?headTeachingComment=aaaa";           
		}
	}
</script>

<style lang="less" scoped>
	img,
	textarea,
	select {
		vertical-align: top;
	}
	
	.green {
		color: #31c27c;
	}
	
	.shade {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		z-index: 5;
	}
	
	.limit {
		position: absolute;
		top: -43px;
		left: 104px;
		color: #31c27c;
		font-size: 16px;
	}
	
	.setting {
		background: #ffffff;
		border-radius: 3px;
		margin-bottom: 12px;
		font-size: 14px;
		color: #666666;
		position: relative;
		padding-bottom: 30px;
	}
	
	.save {
		width: 26px;
		height: 26px;
		background-size: 100%;
		position: absolute;
		bottom: 30px;
		right: 30px;
	}
	
	.settingTitle {
		height: 50px;
		line-height: 50px;
		border-bottom: 1px dashed #c6c6c6;
		font-size: 14px;
		color: #31c27c;
	}
	
	.consult,
	.settingTitle {
		margin: 0 30px;
	}
	
	.compile,
	.handle {
		position: absolute;
		right: 20px;
		top: -48px;
		cursor: pointer;
	}
	
	.handle {
		display: none;
		.cancel {
			margin-right: 12px;
		}
	}
	
	.hint {
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
		p {
			color: #666;
			text-align: center;
			font-size: 14px;
			line-height: 26px;
		}
		img {
			margin: 30px 45% 10px 45%;
		}
		.hint-title {
			height: 50px;
			border-top-right-radius: 4px;
			border-top-left-radius: 4px;
			background-color: #f2f5f8;
			line-height: 50px;
			font-size: 18px;
			color: #333;
			padding-left: 170px;
			.closehint {
				color: #bfbfcd;
				font-size: 18px;
				margin-left: 138px;
			}
		}
	}
	
	.good-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		li {
			margin-top: 30px;
			width: 25%;
		}
	}
	
	.add {
		width: 193px;
		border-bottom: 1px dashed #eee;
		height: 30px;
		margin-top: 20px;
	}
</style>