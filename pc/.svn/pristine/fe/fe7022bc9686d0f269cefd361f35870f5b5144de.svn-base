0<template>
	<div class="class-interview-table">
		<div class="table-center">
			<h1>设置考核题目<i @click="closeClick"></i></h1>
			<div class="table_section">
				<h2>
					<span>试题数量</span>
					<i v-for="(ele,index) in numList" :key="index" :class="{num_i_list: numListIndex == index}" @click="numClick(ele,index)">{{ele}}</i>
					<div class="table_radio">
						<template>
							<el-radio v-model="radio" label="1">面试题</el-radio>
							<el-radio v-model="radio" label="2">测试题</el-radio>
						</template>
					</div>
				</h2>
			</div>
			
			<ul class="inter_table_bottom">
				<li v-for="(ele,index) in dataList" :key="index" v-if="index <= numListIndex">
					<span>{{index | subInde}}</span>
					<input type="text" placeholder="自定义输入试题" v-model="ele.data" v-if="ele.show" @blur="inputFocus(index,ele.data)"/>
					<div v-if="!ele.show" @click="divClick(index)">{{ele.data}}</div>
				</li>
			</ul>
			
			<el-button type="success">确定</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			cloes: {}
		},
		data() {
			return {
				numList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				numListIndex: 5,
				radio: "1", 
				dataList: [
					{ 
						data: "立刻减肥数量看风景楼上的咖啡机未来科技欧巴上岛咖啡那看来你不看楼上的你发了速度快",
						show: false
					},
					{ 
						data: "立刻减肥数量看风景楼上的咖啡机未来科技欧巴上岛咖啡那看来你不看楼上的你发了速度快" ,
						show: false
					},
					{ 
						data: "立刻减肥数量看风景楼上的咖啡机未来科技欧巴上岛咖啡那看来你不看楼上的你发了速度快",
						show: false
					},
					{ 
						data: "立刻减肥数量看风景楼上的咖啡机未来科技欧巴上岛咖啡那看来你不看楼上的你发了速度快",
						show: false
					},
					{ 
						data: "立刻减肥数量看风景楼上的咖啡机未来科技欧巴上岛咖啡那看来你不看楼上的你发了速度快",
						show: false
					},
					{ 
						data: "立刻减肥数量看风景楼上的咖啡机未来科技欧巴上岛咖啡那看来你不看楼上的你发了速度快",
						show: false
					},
					{ 
						data: "立刻减肥数量看风景楼上的咖啡机未来科技欧巴上岛咖啡那看来你不看楼上的你发了速度快",
						show: false
					}
				]
			}
		},
		filters: {
			subInde : function(num){
				num = "0" + (num + 1)
				return num.substring(num.length - 2)
			}
		},
		methods: {
			closeClick() {
				this.$emit('close')
			},
			numClick(ele, index) {//选择几个
				this.numListIndex = index
			},
			inputFocus(index , data) {//失焦隐藏
				if(data != ''){
					let arr = JSON.parse(JSON.stringify(this.dataList))
					arr[index].show = false
					this.dataList = arr
				}
			},
			divClick(index) {//点击消失
				let arr = JSON.parse(JSON.stringify(this.dataList))
				arr[index].show = true
				this.dataList = arr
			}
		},
		mounted() {
			if(this.dataList.length < 10){
				let ls = 10 - this.dataList.length
				for(var i=0; i< ls ;i++){
					this.dataList.push({
						data: "",
						show: true
					})
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	@color : #31C27C;
	.class-interview-table {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0; 
		background: rgba(0, 0, 0, 0.6);
		z-index: 100;
		.table-center {
			width: 750px;
			height: 620px;
			box-sizing: border-box;
			padding-bottom: 90px;
			border-radius: 6px;
			background: #fff;
			margin: 150px auto 0;
			position: relative;
			h1 {
				font-size: 16px;
				text-align: center;
				height: 62px;
				line-height: 62px;
				background: #eff3f6;
				position: relative;
				border-top-left-radius: 6px;
				border-top-right-radius: 6px;
				i {
					position: absolute;
					display: block;
					width: 20px;
					height: 20px;
					background: url(../../../../images/home-icon/axx.png) no-repeat center center;
					right: 30px;
					top: 20px;
					cursor: pointer;
				}
			}
		}
		.table_section {
			width: 100%;
			box-sizing: border-box;
			padding: 0 30px;
			position: relative;
			h2 {
				width: 100%;
				border-bottom: 1px dashed #DEDEDE;
				height: 60px;
				display: flex;
				align-items: center;
				color: #666;
				span {
					margin-right: 14px;
				}
				i {
					display: block;
					width: 26px;
					height: 26px;
					background: #ebeff2;
					border-radius: 50%;
					text-align: center;
					line-height: 26px;
					color: #666;
					margin-right: 12px;
					cursor: pointer;
					&.num_i_list {
						background: @color;
						color: #fff;
					}
				}
			}
			.table_radio {
				margin-left: 20px;
				.el-radio+.el-radio {
					margin-left: 10px;
				}
			}
		}
		
		.inter_table_bottom{
			width: 100%;
			overflow: auto; 
			height: 406px;
			box-sizing: border-box;
			padding: 0 30px;  
			&::-webkit-scrollbar {
				display:none;
				}
			li{
				border-bottom: 1px dashed #dedede;
				padding: 16px 0;
				display: flex;
				line-height: 30px;
				span{
					display: block;
					margin-right: 20px;
					color: #666;
				}
				input{
					width: 100%;  
					color: #666;
				} 
				div{
					width: 100%;
					color: #666;
				}
			}
		}
		.el-button{
			position: absolute;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
			padding: 12px 70px;
		}
		.el-button--success {
		    color: #fff;
		    background-color: @color ;
		    border-color:  @color  ;
		}
		.el-button--success:hover {
		    background: #85ce61;
		    border-color: #85ce61;
		    color: #fff;
		}
	}
</style>