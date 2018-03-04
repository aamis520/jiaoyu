<template>
	<form>
		<div class="goodsSettings">
			<div class="units">
				<h6>物品单位<div class="editBtn"  @click="editShowDel()">{{editFont}}</div></h6>
				<ul class="clearfix">
					<li class="lists" v-for="(item,index) in returnMaterialDate" :id="item.unitId" :class="[showError ? '' : showErrorClass]">
						{{item.unitName}}<img @click="delMaterialUnit(index)" src="../../assets/error1.jpg">
					</li>
					<li class="lists">
						<input class="unitName" v-model="unitName" type="text" maxlength="1"><img src="../../assets/duiGou.jpg" class="duiGou" @click="saveMaterialUnit()">
					</li>
				</ul>
			</div>
			<div class="allType">
				<h6>总校物品操作类型<span>本条消息仅做通告，不可删减</span></h6>
				<ul class="clearfix">
					<li>入库类型</li>
					<li>新购入库</li>
					<li>调拨入库</li>
					<li>供货商入库</li>
					<li>赔损入库</li>
					<li>赠送入库</li>
				</ul>
				<ul class="clearfix">
					<li>出库类型</li>
					<li>调拨入库</li>
					<li>办公领域</li>
					<li>库存报损</li>
					<li>非库存报损</li>
					<li>供货商换货</li>
					<li>物品退货</li>
				</ul>
				<ul class="clearfix">
					<li>跟课必备</li>
					<li>跟课选购</li>
					<li>跟课赠送</li>
					<li>兑换奖品</li>
					<li>对外销售</li>
					<li>固定资产</li>
					<li>办公自用</li>
				</ul>
			</div>
			<div class="allType">
				<h6>分校物品操作类型<span>本条消息仅做通告，不可删减</span></h6>
				<ul class="clearfix">
					<li>调拨入库</li>
					<li>赔损入库</li>
					<li>学生退货</li>
				</ul>
				<ul class="clearfix">
					<li>调拨出库</li>
					<li>办公领域</li>
					<li>库存报损</li>
					<li>非库存报损</li>
				</ul>
				<ul class="clearfix">
					<li>跟课必备</li>
					<li>跟课选购</li>
					<li>跟课赠送</li>
					<li>兑换奖品</li>
					<li>对外销售</li>
					<li>固定资产</li>
					<li>办公自用</li>
				</ul>
				<ul class="clearfix">
					<li>调换类型</li>
					<li>学生调换</li>
				</ul>
			</div>
		</div>
	</form>
</template>
<script>
	import cont from '../../common/const'
	export default {
		data() {
			return {
				headSchoolId: "",
				returnMaterialDate: [], //接受返回的数据
				unitName: "", //存储新输入的物品单位
				showError: false, //用于是否显示删除图标
				showErrorClass: "showDel", //添加class
				editFont:"我要编辑"
			}
		},
		mounted() {
			this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId
			//页面刚加载时调取数据
			this.findMaterialUnitList()
		},
		methods: {
			/*获取内容列表*/
			findMaterialUnitList() {
				let url =cont.goods + "v1/unit/findMaterialUnitList?accessToken=aaaa&headSchoolId=" + this.headSchoolId;
				this.axios.post(url).then((getRes) => {
					if(getRes.data.messages.data) {
						this.returnMaterialDate = getRes.data.messages.data;
					} else {
						this.returnMaterialDate = [],
							console.log("没有数据")
					}
				}).catch(function(error) {
					console.log(error)
				});
			},
			/*保存物品单位*/
			saveMaterialUnit() {
				let unitName = this.unitName;
				let pattern = /^[\u4E00-\u9FA5]+$/
				if (!unitName) return
				if(!pattern.test(unitName)) {
					this.$message({
						type: 'warning',
						message: '输入不为汉字!'
					});
				} else {
					//判断是否重复
					let nameLength = 0;
					for(let i = 0; i < this.returnMaterialDate.length; i++) {
						if(unitName == this.returnMaterialDate[i].unitName) {
							nameLength += 1;
						}
					}
					if(nameLength > 0) {
						this.$message({
							type: 'warning',
							message: '填写重复!'
						});
					} else {
						let url = cont.goods + "v1/unit/saveMaterialUnit?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&unitName=" + unitName;
						this.axios.post(url).then((getRes) => {
							this.findMaterialUnitList()
							this.unitName = ''
							this.showError = false
						}).catch(function(error) {
							console.log(error)
						});
					}
				}
			},
			/***切换编辑取消**/
			editShowDel() {
				if (this.editFont=="我要编辑") {
					this.showError = true;
					this.editFont="取消编辑"
				} else{
					this.showError = false;
					this.unitName = ''
					this.editFont="我要编辑"
					this.findMaterialUnitList()
				}
			},
			/**删除物品**/
			delMaterialUnit(index){
				this.$confirm('您确定要删除吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let delId = this.returnMaterialDate[index].unitId
					let url = cont.goods + "v1/unit/deleteMaterialUnit?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&unitId=" + delId;
					this.axios.post(url).then((getRes) => {
						this.findMaterialUnitList()
						this.unitName = ''
					}).catch(function(error) {
						console.log(error)
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	.clearfix:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.goodsSettings {
		width: 1008px;
		font-size: 14px;
		cursor: pointer;
		.units {
			width: 100%;
			background: #fff;
			border-radius: 5px;
			padding: 0 30px 0 30px;
			box-sizing: border-box;
			padding-bottom: 20px;
			position: relative;
			h6 {
				height: 48px;
				line-height: 48px;
				font-size: 14px;
				color: #31c27c;
				border-bottom: 1px dotted #eeeeee;
				font-weight: normal;
				position: relative;
				img {
					position: absolute;
					right: 0;
					top: 17px;
				}
			}
			ul {
				.lists {
					float: left;
					width: 90px;
					text-align: center;
					padding: 10px;
					border-right: 1px solid #e0e0e0;
					&:last-child {
						border: none;
					}
					img {
						vertical-align: middle;
						margin-left: 8px;
						margin-top: -4px;
						/*display: none;*/
					}
					input {
						width: 35px;
						text-align: center;
						border-bottom: 1px solid #31C27C;
					}
					.duiGou {
						width: 20px;
					}
				}
				.showDel img {
					display: none;
				}
				.result {
					width: 123px;
					padding-bottom: 20px;
					position: absolute;
					bottom: 0;
					right: 0;
					text-align: center;
					line-height: 20px;
					img {
						width: 26px;
						height: 26px;
						display: none;
					}
					.error {
						margin-right: 15px;
					}
				}
			}
		}
		.allType {
			width: 100%;
			background: #fff;
			border-radius: 5px;
			padding: 0 30px 0 30px;
			box-sizing: border-box;
			margin-top: 12px;
			h6 {
				height: 48px;
				line-height: 48px;
				font-size: 14px;
				color: #31c27c;
				border-bottom: 1px dotted #eeeeee;
				font-weight: normal;
				position: relative;
				margin-bottom: 20px;
				span {
					position: absolute;
					right: 0;
					top: 0;
				}
				
			}
			ul {
				padding: 15px 0;
				li {
					width: 120px;
					float: left;
				}
				li:nth-child(1) {
					color: #31c27c;
					font-weight: 700;
				}
			}
		}
	}
	.editBtn{
		padding: 8px 16px;
		position: absolute;
		right: 0;
		top: 9px;
		outline: none;
		cursor: pointer;
		color: #FFFFFF;
		background-color: #31c27c;
		text-align: center;
		text-decoration: none;
		font: 14px/100% Arial, Helvetica, sans-serif;
		border-radius: 5px;
		-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
		-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);
		box-shadow: 0 1px 2px rgba(0,0,0,.2);
	}
</style>