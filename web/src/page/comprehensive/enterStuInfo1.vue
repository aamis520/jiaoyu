<template>
	<div class="enterStuInfo-wraper">
		<div class="top">
			PC端.教师端.录入学生信息.可选项信息.设置
		</div>
		<div class="bottom">
			<span class="option" v-bind:class="{'no-checked': !studentName, 'checked': studentName}" v-on:click="choose('studentName');">学生姓名</span>
			<span class="option" v-bind:class="{'no-checked': !from, 'checked': from}" v-on:click="choose('from');">信息来源</span>
			<span class="option" v-bind:class="{'no-checked': !contactName, 'checked': contactName}" v-on:click="choose('contactName');">联系人姓名</span>
			<span class="option" v-bind:class="{'no-checked': !contactRelation, 'checked': contactRelation}" v-on:click="choose('contactRelation');">联系人关系</span>
		</div>
		<div class="save" v-on:click="saveData();">保存</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				studentName: false,
				from: false,
				contactName: false,
				contactRelation: false
			}
		},
		methods: {
			choose (field) {
				this[field] = !this[field];
			},
			saveData () {
				let data = this.$data;
				let arry = [];
				for (let prop in data) {
					arry.push(data[prop]);
				}
					console.log(arry)
				this.$http.post('', {data}, {emulateJSON: true}).then((result) => {
					console.log(JSON.parse(result.bodyText));
				});
			}
		}
	}
</script>


<style lang="less" scoped>

// .scrollbar{
// 	overflow-y: scroll;
// 	height: 660px;
// 	/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
// }
// .scrollbar::-webkit-scrollbar{
//     width: 16px;
//     height: 16px;
//     background-color: #f5f5f5;
// }
// /*定义滚动条的轨道，内阴影及圆角*/
// .scrollbar::-webkit-scrollbar-track{
//     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
//     border-radius: 10px;
//     background-color: #f5f5f5;
// }
// /*定义滑块，内阴影及圆角*/
// .scrollbar::-webkit-scrollbar-thumb{
//     /*width: 10px;*/
//     height: 20px;
//     border-radius: 10px;
//     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
//     background-color: #555;
// }
	.shade{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		display: none;
	}
	.setting{
		height: 160px;
		background: #ffffff;
		border-radius: 3px;
		margin-bottom: 12px;
		font-size: 14px;
		color: #666666;
	}
	.settingTitle{
		height: 53px;
		line-height: 53px;
		margin: 0 30px;
		border-bottom: 1px dashed #c6c6c6;
		font-size: 14px;
		color: #31c27c;
	}
	.consult{
		margin:10px 0 0 30px;
	}
	.consult li{
		position: relative;
		height: 25px;
		width: 100px;
		float: left;
	}
	.consult li i{
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
	.consult .lastDuihao{
		left: 63%;
	}
	.consult input{
		font-size: 14px;
		color: #666;
		border: 0;
		outline: 0;
		background: none;
		height: 46px;
		width: 125px;
	}
	.consult .customAdd{
		color: #b4b4b4;
		border-bottom: 1px solid #b4b4b4;
		padding-left: 5px;
		width: 80px;
	}
	.settingTitle b{
		float: left;
	}
	.settingTitle span{
		float: right;
	}
	.seticon{
		position: absolute;
		left: 48%;
		top: 35%;
	}
	.fourseticon{
		left: 38%;
	}
	.icon-shezhi, .icon-2{
		font-weight: bold;
		font-size: 13px;
	}
	.icon-shezhi, .parents{
		color: #31c27c;
	}
	.icon-cuo1{
		position: absolute;
    	right: 4%;
    	font-size: 27px;
	}
	.icon-2{
		color: #9f9f9f;
	}
	.consult .setmenu{
		width: 586px;
		height: 96px;
		background-color: rgba(0,0,0,.7);
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
	.icon-dui{
		color: #31c27c;
		font-size: 27px;
		margin-top: 10px;
		display: inline-block;
		vertical-align: bottom;
	}
	.iconyes{
		font-size: 16px;
		vertical-align: middle;
		margin-top: 2px;
		font-weight: bold;
	}
	.consult .setmenu::before{
		display: block;
		border: solid transparent;
		border-width: 8px;
		border-bottom-color: rgba(0,0,0,.7);
		height: 0;
		width: 0;
		content: "";
		position: absolute;
		left: 6.3%;
		top: -16px;
	}
	.setmenu p{
		margin: 20px 0 5px 0;
	}
	.user-oneself .oneself{
		border-bottom: 1px solid #a1a3a2;
		width: 14%;
		height: 41px;
		margin-right: 23px;
	}
	.oneself-X{
		position: absolute;
		left: 57%;
		top: 35%;
	}
	.parents span{
		width: 122px;
		display: inline-block;
	}
	.message{
		margin-top: 26px;
	}
	.consult .message-end{
		width: 33%;
	}
	.consult .message-same{
		width: 50%;
	}
	.consult .class-course{
		height: 40px;
		line-height: 40px;
	}
	.class-course b{
		width: 229px;
		display: inline-block;
	}
	.class-course span{
		width: 18px;
		height: 18px;
	}
	.big,.samll{
		border-radius: 50%;
		display: inline-block;
	}
	.class-course .big{
		background: #31c27c;
		text-align: center;
		line-height: 15px;
		margin-right: 10px;
		vertical-align: middle;
	}
	.class-course .big .small{
		background-color: #ffffff;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		display: inline-block;
	}
	.content{
		margin-right: 39px;
	}
</style>