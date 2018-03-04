<template>
	<div class="table_age">
		<div class="center_div">
			<h1>年龄</h1>
			<div class="top">
				<span v-for="(ele,index) in list.studentAgeList" :key="index" :class="{active: index1 == index}" @click="topClick(index,ele)">{{ele.name}}</span>
				<i>岁</i>
			</div>
			<div class="bottom" v-if="list.motheShow">
				<span v-for="(ele,index) in list.mothe" :key="index" :class="{active: index2 == index}" @click="bottomClick(index,ele)">{{ele}}</span>
				<i>月</i>
			</div>
			<img src="../../../images/common-icon/duigou.png" alt="" @click="ok" />
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			list: {},
			close: {}
		},
		data() {
			return {
				index1: -1,
				index2: -1,
				returnData1: "",
				returnData2: "",
				returnData3: "",
				returnData4: ""
			}
		},
		methods: {
			ok() {
				if(this.list.motheShow) {
					if(this.returnData1 == "" || this.returnData2 == "") {
						this.$message.error('您选择的年龄有误')
					} else {
						let obj = {
							ls: "",
							one: this.returnData3,
							two: this.returnData4
						}
						obj.ls = this.returnData1 + this.returnData2
						this.$emit("close", obj)
					}
				} else {
					if(this.returnData1 == "") {
						this.$message.error('您选择的年龄有误')
					} else {
						let obj = {
							ls: "",
							one: this.returnData3,
							two: this.returnData4
						}
						obj.ls = this.returnData1 + this.returnData2
						this.$emit("close", obj)
					}
				}

			},
			topClick(index, ele) {
				this.index1 = index
				this.returnData1 = ele.name + "岁"
				this.returnData3 = ele.name
			},
			bottomClick(index, ele) {
				this.index2 = index
				this.returnData2 = ele + "月"
				this.returnData4 = ele
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	@color : #31C27C;
	.table_age {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 100;
		.center_div {
			width: 360px;
			padding: 20px 30px;
			box-sizing: border-box;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 50%;
			transform: translateY(-50%);
			border-radius: 6px;
			background: #fff;
			h1 {
				margin: 0 auto;
				text-align: center;
				color: @color;
				margin-bottom: 20px;
			}
			img {
				display: block;
				margin: 0 auto;
				cursor: pointer;
			}
			div {
				&:nth-last-child(2) {
					border: none;
					padding-bottom: 10px;
				}
				border-bottom: 1px solid @color;
				color: #999;
				display: flex;
				flex-wrap: wrap;
				position: relative;
				i {
					bottom: 20px;
					right: 20px;
				}
				span,
				i {
					padding-right: 0px !important;
					margin-right: 0px !important;
					margin-bottom: 0px !important;
					display: block;
					width: 24px;
					height: 24px;
					text-align: center;
					line-height: 24px;
					border-radius: 50%;
					text-align: center;
					line-height: 24px;
					margin: 0 12px 14px !important;
					cursor: pointer;
					&.active {
						background: @color;
						color: #fff;
					}
				}
			}
			.bottom {
				border: none;
				margin-top: 20px;
			}
		}
	}
</style>