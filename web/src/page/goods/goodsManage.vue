<style lang="less" scoped>
.xuhao{
    float: left;
    display: inline-block;
    width: 40px;
    padding-top: 15px;
    color: #666666
}
.goodsManage{
	width:1008px;
	background:#fff;
	border-radius: 5px;
	padding:0 20px 20px 20px;
	box-sizing: border-box;
	font-size:14px;
	.clearfix{
		margin-bottom: 12px;
		flex: 1;
	}
	.clearfix:after{
		display:block;
		content:"";
		clear: both;
	}
	.addNew {
		position: absolute;
		right: 45px;
		top: 105px;
		img{
			width: 19px;
			height: 19px;
		}
	}
	p{
		color: #31c27c;
		line-height:40px;
		border-bottom: 1px dotted #e7e7e7;
	}
	.shops{
		height: 145px;
		padding: 20px 0;
		padding-left: 20px;
		position: relative;
		display: flex;
		.redact{
			position: absolute;
			right: 0px;
			top:25px;
			img{
				vertical-align:middle;
				cursor: pointer;
			}
			img:nth-child(2){
				margin-left: 15px;
			}
		}
		.result{
			position: absolute;
			right: 0px;
			bottom:0px;
			img{
				width: 26px;
				height: 26px;
				cursor: pointer;
			}
			img:nth-child(2){
				margin-left: 15px;
			}
		}
		ul{
			li:nth-child(2){
				margin-left: 33px;
				&:after{
					clear: both;
				}
			}
			li:nth-child(4){
				margin-left: 44px;
			}
			li:nth-child(5){
				margin-left: 36px;
			}
			li{
				float: left;
				margin:10px 0;
				span{
					color: #666666;
					// font-weight: 700;
					display: inline-block;
					width: 70px;
					text-align: left;
				}
				input{
					border:none;
					outline: none;
					border-bottom: 1px solid #31c27c;
				}
				.shop{
					width: 161px;
					display: inline-block;
				}
				.goods{
					width: 500px;
					display: inline-block;
				}
				.contacts{
					width: 150px;
					display: inline-block;
				}
				.phone{
					width: 170px;
					display: inline-block;
				}
				.address{
					width: 225px;
					display: inline-block;
				}
				.url{
					width: 765px;
					display: inline-block;
				}
			}
		}
	}
	.shopsResult{
		height: 145px;
		padding: 20px 0;
		padding-left: 20px;
		position: relative;
		display: flex;
		.clearfix{
			margin-bottom: 12px;
			flex: 1;
			cursor: pointer;
		}
		.clearfix:after{
			display:block;
			content:"";
			clear: both;
		}
		.redact{
			position: absolute;
			right: 0px;
			top:25px;
			img{
				vertical-align:middle;
				cursor: pointer;
			}
			img:nth-child(2){
				margin-left: 15px;
			}
		}
		.result{
			position: absolute;
			right: 0px;
			bottom:0px;
			img{
				width: 26px;
				height: 26px;
				cursor: pointer;
			}
			img:nth-child(2){
				margin-left: 15px;
			}
		}
		ul{
			li{
				float: left;
				margin:10px 0;
				color: #666666;
				margin-right: 20px;
				height: 30px;
				line-height: 30px;
				span{
					display: inline-block;
					width: 70px;
					text-align: left;
					position: relative;
					top: -11px;
				}
				div{
					position: relative;
					display: inline-block;
					padding-left: 10px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				input{
					border:none;
					color: #666666;
					outline: none;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					padding-left: 10px;
					box-sizing: border-box;
					height: 30px;
					border-bottom: 1px solid #31c27c;
					background-color: #FFFFFF;
					font-size: 14px;
				}
				.shop{
					width: 161px;
					
				}
				.suppliedGoods{
					width: 460px;
				}
				.contact{
					width: 160px;
				}
				.phone{
					width: 135px;
				}
				.address{
					width: 225px;
				}
				.url{
					width: 722px;
				}
			}
		}
	}
}
</style>
<template>
	<div class="goodsManage">
		 <p>供应商</p>
			<div class="shops">
				<ul class="clearfix">
					<li><span>供应商</span><input type="type" class="shop" v-model="saveEdit.name"></li>
					<li><span>经营物品</span><input type="type" class="goods" v-model="saveEdit.suppliedGoods"></li>
					<li><span>联系人</span><input type="type" class="contacts" v-model="saveEdit.contact"></li>
					<li><span>联系电话</span><input type="type" class="phone" v-model="saveEdit.phone"></li>
					<li><span>厂商地址</span><input type="type" class="address" v-model="saveEdit.address"></li>
					<li><span>网址</span><input type="type" class="url" v-model="saveEdit.url"></li>
				</ul>
				<div class="result">
					<img src="../../assets/cancel.png" class="error" @click="resetSaveEdit()">
			  		<img src="../../assets/duiGou.jpg" class="duiGou" @click="saveSupplier(saveEdit)">
			  	</div>
			</div>
			<div class="shopsResult"  @mousemove="item.showEdit=true" @mouseleave="item.showEdit=false" v-for="(item,index) in SupplierList" :id="item.supplierId">
				<div class="xuhao">{{indexToOrder(index)}} .</div>
				<ul class="clearfix">
					<li ><span>供应商</span><div class="shop">{{item.name}}<input type="text" v-model="editArr.name" v-if="index==nowEditCol"></div></li>
					<li ><span :title="item.suppliedGoods">经营物品</span><div class="suppliedGoods">{{item.suppliedGoods}}<input type="text" v-model="editArr.suppliedGoods" v-if="index==nowEditCol"></div></li>
					<li ><span>联系人</span><div class="contact">{{item.contact}}<input type="text" v-model="editArr.contact" v-if="index==nowEditCol"></div></li>
					<li ><span>联系电话</span><div class="phone">{{item.phone}}<input type="text" v-model="editArr.phone" v-if="index==nowEditCol"></div></li>
					<li ><span>厂商地址</span><div class="address">{{item.address}}<input type="text" v-model="editArr.address" v-if="index==nowEditCol"></div></li>
					<li ><span>网址</span><div class="url">{{item.url}}<input type="text" v-model="editArr.url" v-if="index==nowEditCol"></div></li>
				</ul>
				<div v-show="item.showEdit" class="redact">
			  		<img src="../../assets/images/01_20.jpg" class="bianji" @click.stop="editResult(index)">
			  		<img src="../../assets/trash.png" class="trash" @click.stop="delResult(item.supplierId)">
			  	</div>
				<div v-show="item.showDuigou" class="result">
					<img src="../../assets/cancel.png" class="error" @click.stop="cancelEdit(index)">
			  		<img src="../../assets/duiGou.jpg" class="duiGou" @click.stop="editSave(index)">
			  	</div>
			</div>
		</div>
</template>
<script>
	import cont from '../../common/const'
	
	export default{
		data () {
			return {
				headSchoolId: "",//存放学校ID
				nowEditCol:-1,//当前编辑的行
				SupplierList:[],//储存返回回来的数据
                saveEdit:{},//用于存储编辑之前的信息
			}
		},
		mounted(){
			this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId
			this.saveEdit.headSchoolId = this.$ls.get("USER_INFO").headSchoolId
			//页面刚加载时调取数据
			this.findSupplierList()
		},
		methods:{
			/**保存供销商**/
			saveSupplier(data){
				if(!!data.name&&!!data.suppliedGoods&&!!data.contact&&!!data.phone&&!!data.address&&!!data.url){
					let url =  cont.goods + "v1/supplier/saveSupplier?accessToken=aaaa";
					this.axios.post(url,data).then((getRes) => {
						this.findSupplierList()
						this.resetSaveEdit()
					}).catch(function(error) {
						console.log(error)
					});
				}else{
					this.$message({
						type: 'warning',
						message: '输入信息有误，请重新输入'
					});
				}
			},
			/****获取商品列表******/
			findSupplierList(){
				let url =  cont.goods + "v1/supplier/findSupplierList?accessToken=aaaa&headSchoolId=" + this.headSchoolId;
				this.axios.post(url).then((getRes) => {
					if(getRes.data.messages.data) {
						let editTree = getRes.data.messages.data;
						for(let i in editTree) {
							editTree[i].showEdit = false; ////用于控制显示编辑和删除图标
							editTree[i].showDuigou = false; //用于是否显示对勾。。。
						}
						this.SupplierList = editTree;
					} else {
						this.SupplierList = []
					}
				}).catch(function(error) {
					console.log(error)
				});
			},
			/**将索引转化为排序**/
			indexToOrder(index){
				let newIndex = "000000" + (index + 1)
				return newIndex.toString().substring(newIndex.length-3)
			},
			/**编辑供应商信息*/
			editResult(index){
				this.nowEditCol = index;
				this.SupplierList[index].showDuigou = true
			},
			/**删除供应商信息**/
			delResult(delId){
				this.$confirm('您确定要删除吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let url =  cont.goods + "v1/supplier/deleteSupplier?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&supplierId=" + delId;
					this.axios.post(url).then((getRes) => {
						this.findSupplierList()
					}).catch(function(error) {
						console.log(error)
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			/**取消编辑供应商信息**/
			cancelEdit(index){
				this.nowEditCol = -1
				this.SupplierList[index].showDuigou = false
			},
			/**保存编辑供应商信息**/
			editSave(index){
				this.saveSupplier(this.editArr)
				this.cancelEdit(index)
			},
			//重置提交表单表单
			resetSaveEdit(){
				this.saveEdit={
                   "name": "",
                   "suppliedGoods": "",
                   "contact": "",
                   "phone": "",
                   "address": "",
                   "url": "",
                   "headSchoolId":''
                };
				this.saveEdit.headSchoolId = this.$ls.get("USER_INFO").headSchoolId;
			}
		},
		computed:{
			//储存当前编辑的对象
			editArr() {
				let editObj = this.SupplierList[this.nowEditCol];
				return{
					"supplierId":editObj.supplierId,
					"name":editObj.name,
					"suppliedGoods":editObj.suppliedGoods,
					"contact":editObj.contact,
					"phone":editObj.phone,
					"address":editObj.address,
					"url":editObj.url,
					"headSchoolId":editObj.headSchoolId
				}
			}
		}
	}
</script>
