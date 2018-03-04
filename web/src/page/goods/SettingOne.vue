<style lang="less" scoped>
	.compile {
		position: absolute;
		right: 30px;
		top: -45px;
		cursor: pointer;
		display: none;/*临时隐藏*/
		img {
			position: absolute;
		}
		img:nth-child(1) {
			right: 30px;
			top: 3px;
		}
		img:nth-child(2) {
			right: -10px;
			top: 0;
		}
	}
	
	.settingOne {
		width: 1008px;
		min-height: 627px;
		overflow: hidden;
		background: #fff;
		border-radius: 5px;
		padding: 30px;
		font-size: 14px;
		box-sizing: border-box;
		p {
			letter-spacing: 1px;
			.tips {
				color: #31c27c;
				font-size: 14px;
				font-weight: 700;
				margin-right: 14px;
			}
			.types {
				color: #ff3d3d;
			}
		}
	}
	
	.settingOne h2 {
		font-size: 12px;
		color: #999999;
		margin-bottom: 30px;
		span {
			margin-right: 20px;
			font-size: 14px;
			color: #31c27c;
		}
	}
	
	.shade {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: none;
	}
	
	.layer-one {
		width: 380px;
		height: 210px;
		border-radius: 5px;
		position: relative;
		background: #FFFFFF;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -105px;
		margin-top: -190px;
		h2 {
			height: 50px;
			line-height: 50px;
			background: #eff3f5;
			text-align: center;
			font-size: 18px;
			color: #000000;
			position: relative;
			border-radius: 5px;
			.close {
				position: absolute;
				top: 0;
				right: 0;
				width: 50px;
				height: 50px;
			}
		}
		span {
			font-size: 36px;
			color: #f76260;
			position: absolute;
			top: 80px;
			left: 172px;
		}
		p {
			position: absolute;
			top: 130px;
			left: 80px;
		}
	}
	
	.u-panels {
		display: inline-flex;
		display: -webkit-inline-flex;
		background: #fff;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #e6e6e6;
		border-radius: 4px 5px 5px 5px;
	}
	
	/*.u-panel {
		width: 16%;
		box-sizing: border-box;
		flex: none;
		border-right: 1px solid #e6e6e6;
		&:last-child {
			width: 20%;
			border-right: 0;
		}
		.u-panel-tlt {
			font-size: 14px;
			color: #333;
			background: #fafafb;
			border-bottom: 1px solid #e6e6e6;
			padding: 15px 12px;
		}
	}*//*隐藏最后一项*/
	
	.u-panel {
		width: 20%;
		box-sizing: border-box;
		flex: none;
		border-right: 1px solid #e6e6e6;
		&:last-child {
			border-right: 0;
		}
		.u-panel-tlt {
			font-size: 14px;
			color: #333;
			background: #fafafb;
			border-bottom: 1px solid #e6e6e6;
			padding: 15px 12px;
		}
	}
	
	.u-panel-itm {
		position: relative;
		font-size: 0px;
		color: #333;
		padding: 10px 5px;
		cursor: pointer;
		i {
			width: 12px;
			height: 12px;
			cursor: pointer;
			position: absolute;
		}
		&:hover {
			.u-icon-edit {
				display: block;
			}
			.u-icon-delete {
				display: block;
			}
		}
		.u-icon-edit {
			top: 12px;
			right: 35px;
			display: none;
			background: url(../../assets/goods/goods01.png) no-repeat;
			background-size: 100% 100%;
			&:hover {
				background: url(../../assets/goods/goods02.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		.u-icon-delete {
			top: 12px;
			right: 10px;
			display: none;
			background: url(../../assets/goods/goods03.png) no-repeat;
			background-size: 150% 150%;
			background-position: center center;
			&:hover {
				background: url(../../assets/goods/goods04.png) no-repeat;
				background-size: 150% 150%;
				background-position: center center;
			}
		}
		.u-icon-check {
			top: 12px;
			right: 35px;
			background: url(../../assets/goods/goods05.png) no-repeat;
			background-size: 100% 100%;
			&:hover {
				background: url(../../assets/goods/goods06.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		.u-icon-error {
			top: 12px;
			right: 10px;
			background: url(../../assets/goods/goods07.png) no-repeat;
			background-size: 100% 100%;
			&:hover {
				background: url(../../assets/goods/goods08.png) no-repeat;
				background-size: 100% 100%;
			}
		}
	}
	
	.u-ipt-4 {
		width: 86px;
		padding-left: 3px;
		height: 20px;
		line-height: normal;
		box-sizing: border-box;
		border-radius: 2px;
		border: 1px solid #999999;
		color: #37474f;
		&:focus {
			border: 1px solid #51BCFF;
		}
	}
	
	.z-sel {
		background: #eeeef1;
	}
	
	.u-panel-itm-tlt {
		width: 100%;
		font-size: 12px;
		display: inline-block;
		line-height: 16px;
	}
	
	.f-ellipsis {
		overflow: hidden;
		word-wrap: normal;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.u-panel-add {
		display: inline-block;
		line-height: 20px;
		vertical-align: middle;
		color: #62a8ea;
		padding: 5px 10px;
		width: 100%;
		box-sizing: border-box;
		cursor: pointer;
	}
	
	.u-panel-save {
		padding: 10px 0;
		border-top: 1px solid #e6e6e6;
		text-align: center;
	}
	
	.u-btn {
		width: 80%;
		background-color: #fff;
		color: #5092e1;
		border: 1px solid;
		border-radius: 2px;
		border-color: #5092e1;
		display: inline-block;
		padding: 10px 24px;
		letter-spacing: 0.1em;
		font-size: 14px;
		cursor: default;
	}
	
	.z-disabled {
		color: #ccd5d8;
		.u-icon-add {
			background: url(../../assets/goods/goods09.png) no-repeat;
			background-size: 100% 100%;
		}
	}
	
	.u-btn-disabled {
		background-color: #fff;
		color: rgba(80, 146, 225, 0.3);
		border-color: rgba(80, 146, 225, 0.3);
	}
	
	.u-panel-cnt {
		height: 438px;
		overflow-y: auto;
	}
	
	.ad-title {
		display: inline-block;
		width: 70px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.adminColor {
		color: #31c27c !important;
	}
	
	.cAdminColor {
		color: #51BCFF;
		display: block;
		float: right;
	}
	
	.ad-normal {
		padding: 5px;
		height: 26px;
		line-height: 26px;
	}
	
	.inputShow {
		display: block;
	}
	
	.uPanel-liBg {
		background: #eeeef1;
	}
	
	.uPanelHide {
		color: #ccd5d8;
		.u-icon-add {
			background: url(../../assets/goods/goods09.png) no-repeat;
			background-size: 100% 100%;
		}
	}
	
	::-webkit-scrollbar-track-piece {
		background-color: rgba(0, 0, 0, 0);
		-webkit-border-radius: 0
	}
	
	::-webkit-scrollbar {
		width: 6px;
		height: 8px
	}
	
	::-webkit-scrollbar-thumb {
		height: 50px;
		background-color: #DDDFE0;
		-webkit-border-radius: 4px
	}
	
	::-webkit-scrollbar-thumb:hover {
		height: 50px;
		background-color: rgba(0, 0, 0, 0.2);
		-webkit-border-radius: 4px
	}
	/*	父组件也有的样式部分*/
	
	#ziyemian {
		width: 100%;
	}
	
	.z-sel {
		background: #eeeef1;
	}
	
	.u-panel-itm-tlt {
		width: 75%;
		font-size: 12px;
		display: inline-block;
		line-height: 16px;
	}
	
	.f-ellipsis {
		overflow: hidden;
		word-wrap: normal;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.u-icon-add {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../../assets/goods/goods10.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		top: 5px;
		margin-right: 3px;
	}
	
	.z-sel-hide {
		display: none;
		background: #eeeef1;
		position: relative;
		font-size: 0px;
		color: #333;
		padding: 10px 12px;
		cursor: pointer;
		.z-edit {
			display: block;
		}
	}
	
	.inputShow {
		display: block;
	}
	
	.uPanel-liBg {
		background: #eeeef1;
	}
	
	.uPanelHide {
		color: #ccd5d8;
		.u-icon-add {
			background: url(../../assets/goods/goods09.png) no-repeat;
			background-size: 100% 100%;
		}
	}
</style>
<template>
	<div>
		<div class="compile">
			<img src="../../assets/help.png" alt="">
			<img src="../../assets/edit.png" alt="">
		</div>
		<div class="settingOne">
			<h2><span>提示</span>请合理分配物品层级，边最简便的管理物品。</h2>

			<div class="m-category-setter">
				<div class="u-panels">
					<div class="u-panel">
						<h5 class="u-panel-tlt">大类</h5>
						<ul class="u-panel-cnt">
							<li class="u-panel-itm normal" v-for="(item,index) in firstTree" :id="item.parentCategoryId" @click.stop="changeBg(index,0)" v-bind:class="[item.showBground ? activeClass:'']">
								<div class="z-normal" :id="item.categoryId" v-show="item.showEdit">
									<span class="u-panel-itm-tlt f-ellipsis">{{item.name}}</span>
									<i class="u-icon-edit" @click.stop="setEdit(index,0)"></i>
									<i class="u-icon-delete" @click.stop="deleEdit(index,0)"></i>
								</div>
								<div class="z-edit" v-show="item.showSave">
									<input type="text" class="u-ipt u-ipt-4" maxlength="12" v-model="item.name">
									<i class="u-icon-check" @click.stop="saveReviseEdit(index,0)"></i>
									<i class="u-icon-error" @click.stop="errorEdit(index,0)"></i>
								</div>
							</li>
							<li class="u-panel-itm normal z-sel-hide" v-bind:class="[addSaveBtn[0].addClass ? inputShow:'']">
								<div class="z-edit-hide">
									<input class="u-ipt u-ipt-4" type="text" maxlength="12" v-model="addSaveBtn[0].vModel">
									<i class="u-icon-check" @click.stop="saveAddEdit(0)"></i>
									<i class="u-icon-error" @click.stop="errorAddEdit(0)"></i>
								</div>
							</li>
							<a class="u-panel-add" @click.stop="uPanelAdd(0)" v-bind:class="[addSaveBtn[0].addClassBtn ? '' : addClassBtn]">
								<i class="u-icon-add" id=""></i>添加分类项
							</a>
						</ul>
					</div>

					<div class="u-panel">
						<h5 class="u-panel-tlt">一级分类</h5>
						<ul class="u-panel-cnt">
							<li class="u-panel-itm normal" v-for="(item,index) in tree1Data" :id="item.parentCategoryId" @click.stop="changeBg(index,1)" v-bind:class="[item.showBground ? activeClass:'']">
								<div class="z-normal" :id="item.categoryId" v-show="item.showEdit">
									<span class="u-panel-itm-tlt f-ellipsis">{{item.name}}</span>
									<i class="u-icon-edit" @click.stop="setEdit(index,1)"></i>
									<i class="u-icon-delete" @click.stop="deleEdit(index,1)"></i>
								</div>
								<div class="z-edit" v-show="item.showSave">
									<input type="text" class="u-ipt u-ipt-4" maxlength="12" v-model="item.name">
									<i class="u-icon-check" @click.stop="saveReviseEdit(index,1)"></i>
									<i class="u-icon-error" @click.stop="errorEdit(index,1)"></i>
								</div>
							</li>
							<li class="u-panel-itm normal z-sel-hide" v-bind:class="[addSaveBtn[1].addClass ? inputShow:'']">
								<div class="z-edit-hide">
									<input class="u-ipt u-ipt-4" type="text" maxlength="12" v-model="addSaveBtn[1].vModel">
									<i class="u-icon-check" @click.stop="saveAddEdit(1)"></i>
									<i class="u-icon-error" @click.stop="errorAddEdit(1)"></i>
								</div>
							</li>
							<a class="u-panel-add" @click.stop="uPanelAdd(1)" v-bind:class="[addSaveBtn[1].addClassBtn ? '' : addClassBtn]">
								<i class="u-icon-add" id=""></i>添加分类项
							</a>
						</ul>
					</div>

					<div class="u-panel">
						<h5 class="u-panel-tlt">二级分类</h5>
						<ul class="u-panel-cnt">
							<li class="u-panel-itm normal" v-for="(item,index) in tree2Data" :id="item.parentCategoryId" @click.stop="changeBg(index,2)" v-bind:class="[item.showBground ? activeClass:'']">
								<div class="z-normal" :id="item.categoryId" v-show="item.showEdit">
									<span class="u-panel-itm-tlt f-ellipsis">{{item.name}}</span>
									<i class="u-icon-edit" @click.stop="setEdit(index,2)"></i>
									<i class="u-icon-delete" @click.stop="deleEdit(index,2)"></i>
								</div>
								<div class="z-edit" v-show="item.showSave">
									<input type="text" class="u-ipt u-ipt-4" maxlength="12px" v-model="item.name">
									<i class="u-icon-check" @click.stop="saveReviseEdit(index,2)"></i>
									<i class="u-icon-error" @click.stop="errorEdit(index,2)"></i>
								</div>
							</li>
							<li class="u-panel-itm normal z-sel-hide" v-bind:class="[addSaveBtn[2].addClass ? inputShow:'']">
								<div class="z-edit-hide">
									<input class="u-ipt u-ipt-4" type="text" maxlength="12" v-model="addSaveBtn[2].vModel">
									<i class="u-icon-check" @click.stop="saveAddEdit(2)"></i>
									<i class="u-icon-error" @click.stop="errorAddEdit(2)"></i>
								</div>
							</li>
							<a class="u-panel-add" @click.stop="uPanelAdd(2)" v-bind:class="[addSaveBtn[2].addClassBtn ? '' : addClassBtn]">
								<i class="u-icon-add" id=""></i>添加分类项
							</a>
						</ul>
					</div>

					<div class="u-panel">
						<h5 class="u-panel-tlt">三级分类</h5>
						<ul class="u-panel-cnt">
							<li class="u-panel-itm normal" v-for="(item,index) in tree3Data" :id="item.parentCategoryId" @click.stop="changeBg(index,3)" v-bind:class="[item.showBground ? activeClass:'']">
								<div class="z-normal" :id="item.categoryId" v-show="item.showEdit">
									<span class="u-panel-itm-tlt f-ellipsis">{{item.name}}</span>
									<i class="u-icon-edit" @click.stop="setEdit(index,3)"></i>
									<i class="u-icon-delete" @click.stop="deleEdit(index,3)"></i>
								</div>
								<div class="z-edit" v-show="item.showSave">
									<input type="text" class="u-ipt u-ipt-4" maxlength="12" v-model="item.name">
									<i class="u-icon-check" @click.stop="saveReviseEdit(index,3)"></i>
									<i class="u-icon-error" @click.stop="errorEdit(index,3)"></i>
								</div>
							</li>
							<li class="u-panel-itm normal z-sel-hide" v-bind:class="[addSaveBtn[3].addClass ? inputShow:'']">
								<div class="z-edit-hide">
									<input class="u-ipt u-ipt-4" type="text" maxlength="12" v-model="addSaveBtn[3].vModel">
									<i class="u-icon-check" @click.stop="saveAddEdit(3)"></i>
									<i class="u-icon-error" @click.stop="errorAddEdit(3)"></i>
								</div>
							</li>
							<a class="u-panel-add" @click.stop="uPanelAdd(3)" v-bind:class="[addSaveBtn[3].addClassBtn ? '' : addClassBtn]">
								<i class="u-icon-add" id=""></i>添加分类项
							</a>
						</ul>
					</div>

					<div class="u-panel">
						<h5 class="u-panel-tlt">四级分类</h5>
						<ul class="u-panel-cnt">
							<li class="u-panel-itm normal" v-for="(item,index) in tree4Data" :id="item.parentCategoryId" @click.stop="changeBg(index,4)" v-bind:class="[item.showBground ? activeClass:'']">
								<div class="z-normal" :id="item.categoryId" v-show="item.showEdit">
									<span class="u-panel-itm-tlt f-ellipsis">{{item.name}}</span>
									<i class="u-icon-edit" @click.stop="setEdit(index,4)"></i>
									<i class="u-icon-delete" @click.stop="deleEdit(index,4)"></i>
								</div>
								<div class="z-edit" v-show="item.showSave">
									<input type="text" class="u-ipt u-ipt-4" maxlength="12" v-model="item.name">
									<i class="u-icon-check" @click.stop="saveReviseEdit(index,4)"></i>
									<i class="u-icon-error" @click.stop="errorEdit(index,4)"></i>
								</div>
							</li>
							<li class="u-panel-itm normal z-sel-hide" v-bind:class="[addSaveBtn[4].addClass ? inputShow:'']">
								<div class="z-edit-hide">
									<input class="u-ipt u-ipt-4" maxlength="12" type="text" v-model="addSaveBtn[4].vModel">
									<i class="u-icon-check" @click.stop="saveAddEdit(4)"></i>
									<i class="u-icon-error" @click.stop="errorAddEdit(4)"></i>
								</div>
							</li>
							<a class="u-panel-add" @click.stop="uPanelAdd(4)" v-bind:class="[addSaveBtn[4].addClassBtn ? '' : addClassBtn]">
								<i class="u-icon-add" id=""></i>添加分类项
							</a>
						</ul>
					</div>

					<!--<div class="u-panel">
						<h5 class="u-panel-tlt adminColor">管理员</h5>
						<ul class="u-panel-cnt">
							<div class="ad-normal" id="" v-for="(item,index) in firstTree">
								<span class="ad-title">{{item.name}}</span><span class="cAdminColor">选择管理员</span>
							</div>
						</ul>
					</div>-->

				</div>
			</div>
			<div class="shade">
				<div class="layer-one">
					<h2>提示<img src="../../assets/images/kongjianclose.png" alt="" class="close"></h2>
					<span class="iconfont icon-tishi"></span>
					<p>已有关联台账记录，不能删除 !</p>
				</div>
			</div>

		</div>
	</div>

</template>

<script>
	import cont from '../../common/const'

	export default {
		data() {
			return {
				headSchoolId: "",
				firstTree: [],
				tree1Data: [],
				tree2Data: [],
				tree3Data: [],
				tree4Data: [],
				activeClass: 'uPanel-liBg', //li背景色
				inputShow: 'inputShow', //是否显示输入框
				addClassBtn: 'uPanelHide', //显示添加
				addSaveBtn: [{
					index: 0,
					addClass: false,
					vModel: '',
					addClassBtn: true,
					pId: '',
					nodeId: ''
				}, {
					index: 1,
					addClass: false,
					vModel: '',
					addClassBtn: false,
					pId: '',
					nodeId: ''
				}, {
					index: 2,
					addClass: false,
					vModel: '',
					addClassBtn: false,
					pId: '',
					nodeId: ''
				}, {
					index: 3,
					addClass: false,
					vModel: '',
					addClassBtn: false,
					pId: '',
					nodeId: ''
				}, {
					index: 4,
					addClass: false,
					vModel: '',
					addClassBtn: false,
					pId: '',
					nodeId: ''
				}],
				beforeValue: '', //存储编辑之前li元素的值
			}
		},
		mounted() {
			this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId
			//页面刚加载时调取数据
			this.getBigClass()
		},
		methods: {
			/*获取内容列表*/
			getBigClass() {
				let url = cont.goods + "v1/category/findTopCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId;
				this.axios.post(url).then((getRes) => {
					if(getRes.data.messages.data) {
						let editTree = getRes.data.messages.data;
						for(let i in editTree) {
							editTree[i].showBground = false; //用于设置点击切换背景色
							editTree[i].showEdit = true; //用于点击进行编辑
							editTree[i].showSave = false; //用于点击进行编辑。。。
						}
						this.firstTree = editTree;
					} else {
						this.firstTree = []
					}
				}).catch(function(error) {
					console.log(error)
				});
			},

			/**点击更换背景色*/
			changeBg(liIndex, ulIndex) {
				//添加时取消li所有背景色
				if(ulIndex == 0) {
					//第一类
					this.tree1Data = [];
					this.tree2Data = [];
					this.tree3Data = [];
					this.tree4Data = [];
					let pId = this.firstTree[liIndex].parentCategoryId;
					let nodeId = this.firstTree[liIndex].categoryId;
					let returnDate = "this.tree" + (ulIndex + 1) + "Data";

					this.addSaveBtn[ulIndex + 1].pId = pId;
					this.addSaveBtn[ulIndex + 1].nodeId = nodeId;

					let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + nodeId;
					this.axios.post(getUrl).then((getRes) => {
						if(getRes.data.messages.data) {
							let reviseTree = getRes.data.messages.data;
							for(let i in reviseTree) {
								reviseTree[i].showBground = false; //用于设置点击切换背景色
								reviseTree[i].showEdit = true; //用于点击进行编辑
								reviseTree[i].showSave = false; //用于点击进行编辑。。。
							}
							this.tree1Data = reviseTree;
						} else {
							this.tree1Data = []
						}
					}).catch(function(error) {
						console.log("获取子节点失败")
					});

					for(let a = 0; a < this.firstTree.length; a++) {
						this.firstTree[a].showBground = false
					}
					this.firstTree[liIndex].showBground = true;
					for(let n = 0; n < this.addSaveBtn.length; n++) {
						if(n <= ulIndex + 1) {
							this.addSaveBtn[n].addClassBtn = true;
						} else {
							this.addSaveBtn[n].addClassBtn = false;
						}
					}
				} else if(ulIndex == 1) {
					//第二类
					this.tree2Data = [];
					this.tree3Data = [];
					this.tree4Data = [];
					let pId = this.tree1Data[liIndex].parentCategoryId;
					let nodeId = this.tree1Data[liIndex].categoryId;
					let returnDate = "this.tree" + (ulIndex + 1) + "Data";

					this.addSaveBtn[ulIndex + 1].pId = pId;
					this.addSaveBtn[ulIndex + 1].nodeId = nodeId;

					let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + nodeId;
					this.axios.post(getUrl).then((getRes) => {
						if(getRes.data.messages.data) {
							let reviseTree = getRes.data.messages.data;
							for(let i in reviseTree) {
								reviseTree[i].showBground = false; //用于设置点击切换背景色
								reviseTree[i].showEdit = true; //用于点击进行编辑
								reviseTree[i].showSave = false; //用于点击进行编辑。。。
							}
							this.tree2Data = reviseTree;
						} else {
							this.tree2Data = []
						}
					}).catch(function(error) {
						console.log("获取子节点失败")
					});

					for(let b = 0; b < this.tree1Data.length; b++) {
						this.tree1Data[b].showBground = false
					}
					this.tree1Data[liIndex].showBground = true;
					for(let n = 0; n < this.addSaveBtn.length; n++) {
						if(n <= ulIndex + 1) {
							this.addSaveBtn[n].addClassBtn = true;
						} else {
							this.addSaveBtn[n].addClassBtn = false;
						}
					}
				} else if(ulIndex == 2) {
					//第三类
					this.tree3Data = [];
					this.tree4Data = [];
					let pId = this.tree2Data[liIndex].parentCategoryId;
					let nodeId = this.tree2Data[liIndex].categoryId;
					let returnDate = "this.tree" + (ulIndex + 1) + "Data";

					this.addSaveBtn[ulIndex + 1].pId = pId;
					this.addSaveBtn[ulIndex + 1].nodeId = nodeId;

					let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + nodeId;
					this.axios.post(getUrl).then((getRes) => {
						if(getRes.data.messages.data) {
							let reviseTree = getRes.data.messages.data;
							for(let i in reviseTree) {
								reviseTree[i].showBground = false; //用于设置点击切换背景色
								reviseTree[i].showEdit = true; //用于点击进行编辑
								reviseTree[i].showSave = false; //用于点击进行编辑。。。
							}
							this.tree3Data = reviseTree;
						} else {
							this.tree3Data = []
						}
					}).catch(function(error) {
						console.log("获取子节点失败")
					});

					for(let c = 0; c < this.tree2Data.length; c++) {
						this.tree2Data[c].showBground = false
					}
					this.tree2Data[liIndex].showBground = true;
					for(let n = 0; n < this.addSaveBtn.length; n++) {
						if(n <= ulIndex + 1) {
							this.addSaveBtn[n].addClassBtn = true;
						} else {
							this.addSaveBtn[n].addClassBtn = false;
						}
					}
				} else if(ulIndex == 3) {
					//第四类
					this.tree4Data = [];
					let pId = this.tree3Data[liIndex].parentCategoryId;
					let nodeId = this.tree3Data[liIndex].categoryId;
					let returnDate = "this.tree" + (ulIndex + 1) + "Data";

					this.addSaveBtn[ulIndex + 1].pId = pId;
					this.addSaveBtn[ulIndex + 1].nodeId = nodeId;

					let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + nodeId;
					this.axios.post(getUrl).then((getRes) => {
						if(getRes.data.messages.data) {
							let reviseTree = getRes.data.messages.data;
							for(let i in reviseTree) {
								reviseTree[i].showBground = false; //用于设置点击切换背景色
								reviseTree[i].showEdit = true; //用于点击进行编辑
								reviseTree[i].showSave = false; //用于点击进行编辑。。。
							}
							this.tree4Data = reviseTree;
						} else {
							this.tree4Data = []
						}
					}).catch(function(error) {
						console.log("获取子节点失败")
					});

					for(let d = 0; d < this.tree3Data.length; d++) {
						this.tree3Data[d].showBground = false
					}
					this.tree3Data[liIndex].showBground = true;
					for(let n = 0; n < this.addSaveBtn.length; n++) {
						if(n <= ulIndex + 1) {
							this.addSaveBtn[n].addClassBtn = true;
						} else {
							this.addSaveBtn[n].addClassBtn = false;
						}
					}
				} else if(ulIndex == 4) {
					for(let e = 0; e < this.tree4Data.length; e++) {
						this.tree4Data[e].showBground = false
					}
					this.tree4Data[liIndex].showBground = true;
				}
			},

			/**点击删除图标相关操作*/
			deleEdit(liIndex, ulIndex) {
				this.$confirm('您确定要删除吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					if(ulIndex == 0) {
						//第一类
						let nodeId = this.firstTree[liIndex].categoryId;
						let deleUrl = cont.goods + "v1/category/deleteCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&categoryId=" + nodeId;
						let getUrl = cont.goods + "v1/category/findTopCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId;
						this.axios.post(deleUrl).then((setRes) => {
							this.axios.post(getUrl).then((getRes) => {
								if(getRes.data.messages.data) {
									let reviseTree = getRes.data.messages.data;
									for(let i in reviseTree) {
										reviseTree[i].showBground = false; //用于设置点击切换背景色
										reviseTree[i].showEdit = true; //用于点击进行编辑
										reviseTree[i].showSave = false; //用于点击进行编辑。。。
									}
									this.firstTree = reviseTree;
								} else {
									this.firstTree = []
								}
								this.tree1Data = [];
								this.tree2Data = [];
								this.tree3Data = [];
								this.tree4Data = [];
								for(let n = 0; n < this.addSaveBtn.length; n++) {
									if(n <= ulIndex) {
										this.addSaveBtn[n].addClassBtn = true;
									} else {
										this.addSaveBtn[n].addClassBtn = false;
									}
								}
							}).catch(function(error) {
								console.log("响应数据失败")
							});
						}).catch(function(error) {
							console.log("发送请求失败")
						});
					} else if(ulIndex == 1) {
						//第二类
						let nodeId = this.tree1Data[liIndex].categoryId;
						let pId = this.tree1Data[liIndex].parentCategoryId;
						let deleUrl = cont.goods + "v1/category/deleteCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&categoryId=" + nodeId;
						let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + pId;

						this.axios.post(deleUrl).then((setRes) => {
							this.axios.post(getUrl).then((getRes) => {
								if(getRes.data.messages.data) {
									let reviseTree = getRes.data.messages.data;
									for(let i in reviseTree) {
										reviseTree[i].showBground = false; //用于设置点击切换背景色
										reviseTree[i].showEdit = true; //用于点击进行编辑
										reviseTree[i].showSave = false; //用于点击进行编辑。。。
									}
									this.tree1Data = reviseTree;
								} else {
									this.tree1Data = []
								}
								this.tree2Data = [];
								this.tree3Data = [];
								this.tree4Data = [];
								for(let n = 0; n < this.addSaveBtn.length; n++) {
									if(n <= ulIndex) {
										this.addSaveBtn[n].addClassBtn = true;
									} else {
										this.addSaveBtn[n].addClassBtn = false;
									}
								}
							}).catch(function(error) {
								console.log("响应数据失败")
							});
						}).catch(function(error) {
							console.log("发送请求失败")
						});

					} else if(ulIndex == 2) {
						//第三类
						let nodeId = this.tree2Data[liIndex].categoryId;
						let pId = this.tree2Data[liIndex].parentCategoryId;
						let deleUrl = cont.goods + "v1/category/deleteCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&categoryId=" + nodeId;
						let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + pId;

						this.axios.post(deleUrl).then((setRes) => {
							this.axios.post(getUrl).then((getRes) => {
								if(getRes.data.messages.data) {
									let reviseTree = getRes.data.messages.data;
									for(let i in reviseTree) {
										reviseTree[i].showBground = false; //用于设置点击切换背景色
										reviseTree[i].showEdit = true; //用于点击进行编辑
										reviseTree[i].showSave = false; //用于点击进行编辑。。。
									}
									this.tree2Data = reviseTree;
								} else {
									this.tree2Data = []
								}
								this.tree3Data = [];
								this.tree4Data = [];
								for(let n = 0; n < this.addSaveBtn.length; n++) {
									if(n <= ulIndex) {
										this.addSaveBtn[n].addClassBtn = true;
									} else {
										this.addSaveBtn[n].addClassBtn = false;
									}
								}
							}).catch(function(error) {
								console.log("响应数据失败")
							});
						}).catch(function(error) {
							console.log("发送请求失败")
						});

					} else if(ulIndex == 3) {
						//第四类
						let nodeId = this.tree3Data[liIndex].categoryId;
						let pId = this.tree3Data[liIndex].parentCategoryId;
						let deleUrl = cont.goods + "v1/category/deleteCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&categoryId=" + nodeId;
						let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + pId;

						this.axios.post(deleUrl).then((setRes) => {
							this.axios.post(getUrl).then((getRes) => {
								if(getRes.data.messages.data) {
									let reviseTree = getRes.data.messages.data;
									for(let i in reviseTree) {
										reviseTree[i].showBground = false; //用于设置点击切换背景色
										reviseTree[i].showEdit = true; //用于点击进行编辑
										reviseTree[i].showSave = false; //用于点击进行编辑。。。
									}
									this.tree3Data = reviseTree;
								} else {
									this.tree3Data = []
								}
								this.tree4Data = [];
								for(let n = 0; n < this.addSaveBtn.length; n++) {
									if(n <= ulIndex) {
										this.addSaveBtn[n].addClassBtn = true;
									} else {
										this.addSaveBtn[n].addClassBtn = false;
									}
								}
							}).catch(function(error) {
								console.log("响应数据失败")
							});
						}).catch(function(error) {
							console.log("发送请求失败")
						});

					} else if(ulIndex == 4) {
						//第五类
						let nodeId = this.tree4Data[liIndex].categoryId;
						let pId = this.tree4Data[liIndex].parentCategoryId;
						let deleUrl = cont.goods + "v1/category/deleteCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&categoryId=" + nodeId;
						let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + pId;

						this.axios.post(deleUrl).then((setRes) => {
							this.axios.post(getUrl).then((getRes) => {
								if(getRes.data.messages.data) {
									let reviseTree = getRes.data.messages.data;
									for(let i in reviseTree) {
										reviseTree[i].showBground = false; //用于设置点击切换背景色
										reviseTree[i].showEdit = true; //用于点击进行编辑
										reviseTree[i].showSave = false; //用于点击进行编辑。。。
									}
									this.tree4Data = reviseTree;
								} else {
									this.tree4Data = []
								}
							}).catch(function(error) {
								console.log("响应数据失败")
							});
						}).catch(function(error) {
							console.log("发送请求失败")
						});

					}
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
				});
			},

			/***点击编辑修改**/
			setEdit(liIndex, ulIndex) {

				if(ulIndex == 0) {
					//第一类
					this.beforeValue = this.firstTree[liIndex].name;
					for(let i = 0; i < this.firstTree.length; i++) {
						this.firstTree[i].showEdit = true;
						this.firstTree[i].showSave = false;
					}

					this.firstTree[liIndex].showEdit = false;
					this.firstTree[liIndex].showSave = true;
				} else if(ulIndex == 1) {
					//第二类
					this.beforeValue = this.tree1Data[liIndex].name;
					for(let i = 0; i < this.tree1Data.length; i++) {
						this.tree1Data[i].showEdit = true;
						this.tree1Data[i].showSave = false;
					}

					this.tree1Data[liIndex].showEdit = false;
					this.tree1Data[liIndex].showSave = true;
				} else if(ulIndex == 2) {
					//第三类
					this.beforeValue = this.tree2Data[liIndex].name;
					for(let i = 0; i < this.tree2Data.length; i++) {
						this.tree2Data[i].showEdit = true;
						this.tree2Data[i].showSave = false;
					}

					this.tree2Data[liIndex].showEdit = false;
					this.tree2Data[liIndex].showSave = true;
				} else if(ulIndex == 3) {
					//第四类
					this.beforeValue = this.tree3Data[liIndex].name;
					for(let i = 0; i < this.tree3Data.length; i++) {
						this.tree3Data[i].showEdit = true;
						this.tree3Data[i].showSave = false;
					}

					this.tree3Data[liIndex].showEdit = false;
					this.tree3Data[liIndex].showSave = true;
				} else if(ulIndex == 4) {
					this.beforeValue = this.tree4Data[liIndex].name;
					for(let i = 0; i < this.tree4Data.length; i++) {
						this.tree4Data[i].showEdit = true;
						this.tree4Data[i].showSave = false;
					}

					this.tree4Data[liIndex].showEdit = false;
					this.tree4Data[liIndex].showSave = true;
				}
			},

			/***修改保存****/
			saveReviseEdit(liIndex, ulIndex) {
					if(ulIndex == 0) {
						//大类
						let afterValue = this.firstTree[liIndex].name;
						let nameLength = 0;
						for(let i = 0; i < this.firstTree.length; i++) {
							if(afterValue == this.firstTree[i].name) {
								nameLength += 1;
							}
						}
						//判断修改后值不能为空，2修改后不能存在重复数据
						if(!!afterValue && nameLength == 1) {
							for(let i = 0, len = this.firstTree.length; i < len; i++) {
								this.firstTree[i].showEdit = true;
								this.firstTree[i].showSave = false;
							}
							let nodeId = this.firstTree[liIndex].categoryId;

							let saveUrl = cont.goods + "v1/category/saveTopCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&categoryId=" + nodeId + "&name=" + afterValue;
							let getUrl = cont.goods + "v1/category/findTopCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId;

							this.axios.post(saveUrl).then((setRes) => {
								this.axios.post(getUrl).then((getRes) => {
									if(getRes.data.messages.data) {
										let reviseTree = getRes.data.messages.data;
										for(let i in reviseTree) {
											reviseTree[i].showBground = false; //用于设置点击切换背景色
											reviseTree[i].showEdit = true; //用于点击进行编辑
											reviseTree[i].showSave = false; //用于点击进行编辑。。。
										}
										this.firstTree = reviseTree;
									} else {
										this.firstTree = []
									}
								}).catch(function(error) {
									console.log("响应数据失败")
								});
							}).catch(function(error) {
								console.log("发送请求失败")
							});

						} else {
							alert("编辑有误,请修改后重新保存")
						}
					} else if(ulIndex == 1) {
						//第一类
						let afterValue = this.tree1Data[liIndex].name;
						let nameLength = 0;
						for(let i = 0; i < this.tree1Data.length; i++) {
							if(afterValue == this.tree1Data[i].name) {
								nameLength += 1;
							}
						}
						//判断修改后值不能为空，2修改后不能存在重复数据
						if(!!afterValue && nameLength == 1) {
							for(let i = 0, len = this.tree1Data.length; i < len; i++) {
								this.tree1Data[i].showEdit = true;
								this.tree1Data[i].showSave = false;
							}
							let pId = this.tree1Data[liIndex].parentCategoryId;
							let nodeId = this.tree1Data[liIndex].categoryId;

							let addUrl = cont.goods + "v1/category/saveCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&name=" + afterValue + "&parentCategoryId=" + pId + "&categoryId=" + nodeId;
							let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + pId;

							this.axios.post(addUrl).then((setRes) => {
								this.axios.post(getUrl).then((getRes) => {
									if(getRes.data.messages.data) {
										let reviseTree = getRes.data.messages.data;
										for(let i in reviseTree) {
											reviseTree[i].showBground = false; //用于设置点击切换背景色
											reviseTree[i].showEdit = true; //用于点击进行编辑
											reviseTree[i].showSave = false; //用于点击进行编辑。。。
										}
										this.tree1Data = reviseTree;
									} else {
										this.tree1Data = []
									}
								}).catch(function(error) {
									console.log("响应数据失败")
								});
							}).catch(function(error) {
								console.log("发送请求失败")
							});

						} else {
							alert("编辑有误,请修改后重新保存")
						}
					} else if(ulIndex == 2) {
						//第二类
						let afterValue = this.tree2Data[liIndex].name;
						let nameLength = 0;
						for(let i = 0; i < this.tree2Data.length; i++) {
							if(afterValue == this.tree1Data[i].name) {
								nameLength += 1;
							}
						}
						//判断修改后值不能为空，2修改后不能存在重复数据
						if(!!afterValue && nameLength == 1) {
							for(let i = 0, len = this.tree2Data.length; i < len; i++) {
								this.tree2Data[i].showEdit = true;
								this.tree2Data[i].showSave = false;
							}
							let pId = this.tree2Data[liIndex].parentCategoryId;
							let nodeId = this.tree2Data[liIndex].categoryId;

							let addUrl = cont.goods + "v1/category/saveCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&name=" + afterValue + "&parentCategoryId=" + pId + "&categoryId=" + nodeId;
							let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + pId;

							this.axios.post(addUrl).then((setRes) => {
								this.axios.post(getUrl).then((getRes) => {
									if(getRes.data.messages.data) {
										let reviseTree = getRes.data.messages.data;
										for(let i in reviseTree) {
											reviseTree[i].showBground = false; //用于设置点击切换背景色
											reviseTree[i].showEdit = true; //用于点击进行编辑
											reviseTree[i].showSave = false; //用于点击进行编辑。。。
										}
										this.tree2Data = reviseTree;
									} else {
										this.tree2Data = []
									}
								}).catch(function(error) {
									console.log("响应数据失败")
								});
							}).catch(function(error) {
								console.log("发送请求失败")
							});

						} else {
							alert("编辑有误,请修改后重新保存")
						}
					} else if(ulIndex == 3) {
						//第三类
						let afterValue = this.tree3Data[liIndex].name;
						let nameLength = 0;
						for(let i = 0; i < this.tree3Data.length; i++) {
							if(afterValue == this.tree3Data[i].name) {
								nameLength += 1;
							}
						}
						//判断修改后值不能为空，2修改后不能存在重复数据
						if(!!afterValue && nameLength == 1) {
							for(let i = 0, len = this.tree3Data.length; i < len; i++) {
								this.tree3Data[i].showEdit = true;
								this.tree3Data[i].showSave = false;
							}
							let pId = this.tree3Data[liIndex].parentCategoryId;
							let nodeId = this.tree3Data[liIndex].categoryId;

							let addUrl = cont.goods + "v1/category/saveCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&name=" + afterValue + "&parentCategoryId=" + pId + "&categoryId=" + nodeId;
							let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + pId;

							this.axios.post(addUrl).then((setRes) => {
								this.axios.post(getUrl).then((getRes) => {
									if(getRes.data.messages.data) {
										let reviseTree = getRes.data.messages.data;
										for(let i in reviseTree) {
											reviseTree[i].showBground = false; //用于设置点击切换背景色
											reviseTree[i].showEdit = true; //用于点击进行编辑
											reviseTree[i].showSave = false; //用于点击进行编辑。。。
										}
										this.tree3Data = reviseTree;
									} else {
										this.tree3Data = []
									}
								}).catch(function(error) {
									console.log("响应数据失败")
								});
							}).catch(function(error) {
								console.log("发送请求失败")
							});

						} else {
							alert("编辑有误,请修改后重新保存")
						}
					} else if(ulIndex == 4) {
						//第四类
						let afterValue = this.tree4Data[liIndex].name;
						let nameLength = 0;
						for(let i = 0; i < this.tree4Data.length; i++) {
							if(afterValue == this.tree4Data[i].name) {
								nameLength += 1;
							}
						}
						//判断修改后值不能为空，2修改后不能存在重复数据
						if(!!afterValue && nameLength == 1) {
							for(let i = 0, len = this.tree4Data.length; i < len; i++) {
								this.tree4Data[i].showEdit = true;
								this.tree4Data[i].showSave = false;
							}
							let pId = this.tree4Data[liIndex].parentCategoryId;
							let nodeId = this.tree4Data[liIndex].categoryId;

							let addUrl = cont.goods + "v1/category/saveCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&name=" + afterValue + "&parentCategoryId=" + pId + "&categoryId=" + nodeId;
							let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + pId;

							this.axios.post(addUrl).then((setRes) => {
								this.axios.post(getUrl).then((getRes) => {
									if(getRes.data.messages.data) {
										let reviseTree = getRes.data.messages.data;
										for(let i in reviseTree) {
											reviseTree[i].showBground = false; //用于设置点击切换背景色
											reviseTree[i].showEdit = true; //用于点击进行编辑
											reviseTree[i].showSave = false; //用于点击进行编辑。。。
										}
										this.tree4Data = reviseTree;
									} else {
										this.tree4Data = []
									}
								}).catch(function(error) {
									console.log("响应数据失败")
								});
							}).catch(function(error) {
								console.log("发送请求失败")
							});

						} else {
							alert("编辑有误,请修改后重新保存")
						}
					}
					

			},

			/**点击取消编辑操作**/
			errorEdit(liIndex, ulIndex) {
				if(ulIndex == 0) {
					//大类
					this.firstTree[liIndex].name = this.beforeValue;
					for(let i = 0, len = this.firstTree.length; i < len; i++) {
						this.firstTree[i].showEdit = true;
						this.firstTree[i].showSave = false;
					}
				} else if(ulIndex == 1) {
					//第一类
					this.tree1Data[liIndex].name = this.beforeValue;
					for(let i = 0, len = this.tree1Data.length; i < len; i++) {
						this.tree1Data[i].showEdit = true;
						this.tree1Data[i].showSave = false;
					}
				} else if(ulIndex == 2) {
					//第二类
					this.tree2Data[liIndex].name = this.beforeValue;
					for(let i = 0, len = this.tree2Data.length; i < len; i++) {
						this.tree2Data[i].showEdit = true;
						this.tree2Data[i].showSave = false;
					}
				} else if(ulIndex == 3) {
					//第三类
					this.tree3Data[liIndex].name = this.beforeValue;
					for(let i = 0, len = this.tree3Data.length; i < len; i++) {
						this.tree3Data[i].showEdit = true;
						this.tree3Data[i].showSave = false;
					}
				} else if(ulIndex == 4) {
					//第四类
					this.tree4Data[liIndex].name = this.beforeValue;
					for(let i = 0, len = this.tree4Data.length; i < len; i++) {
						this.tree4Data[i].showEdit = true;
						this.tree4Data[i].showSave = false;
					}
				}
			},

			/**点击添加分类项**/
			uPanelAdd(ulIndex) {
				//添加时取消li所有背景色
				if(ulIndex == 0) {
					for(let i = 0, len = this.firstTree.length; i < len; i++) {
						this.firstTree[i].showBground = false
					}
				} else if(ulIndex == 1) {
					for(let i = 0, len = this.tree1Data.length; i < len; i++) {
						this.tree1Data[i].showBground = false
					}
				} else if(ulIndex == 2) {
					for(let i = 0, len = this.tree2Data.length; i < len; i++) {
						this.tree2Data[i].showBground = false
					}
				} else if(ulIndex == 3) {
					for(let i = 0, len = this.tree3Data.length; i < len; i++) {
						this.tree3Data[i].showBground = false
					}
				} else if(ulIndex == 4) {
					for(let i = 0, len = this.tree4Data.length; i < len; i++) {
						this.tree4Data[i].showBground = false
					}
				}

				//判断其他组件中是否存在编辑未完成的状态
				let otherAddClass = 0;
				for(let i = 0; i < this.addSaveBtn.length; i++) {
					if(this.addSaveBtn[i].addClass) {
						otherAddClass += 1;
					}
				}

				//判断当前添加分类项是否为显示，判断当前组件是否已经存在正在编辑的输入框，判断其他组件中是否存在编辑未完成的状态
				if(!this.addSaveBtn[ulIndex].addClassBtn || this.addSaveBtn[ulIndex].addClass || otherAddClass > 0) {
					alert('操作有误');
				} else {
					this.addSaveBtn[ulIndex].addClass = true;
				}

			},

			/**新增保存**/
			saveAddEdit(ulIndex) {

				let name = this.addSaveBtn[ulIndex].vModel;
				let pId = this.addSaveBtn[ulIndex].pId;
				let nodeId = this.addSaveBtn[ulIndex].nodeId

				//分别调用不同的接口，父类接口，子类接口
				if(ulIndex == 0) {
					//大类保存
					let addLength = 0;
					for(let i = 0, len = this.firstTree.length; i < len; i++) {
						if(name == this.firstTree[i].name) {
							addLength += 1;
						}
					}
					if ($.trim(name) == 0) {
						return
					}
					if(!!name && addLength == 0) {
						for(let i = 0, len = this.firstTree.length; i < len; i++) {
							this.firstTree[i].showEdit = true;
							this.firstTree[i].showSave = false;
						}

						this.restLi(ulIndex);

						let addUrl = cont.goods + "v1/category/saveTopCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&name=" + name;
						let getUrl = cont.goods + "v1/category/findTopCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId;

						this.axios.post(addUrl).then((setRes) => {
							this.axios.post(getUrl).then((getRes) => {
								if(getRes.data.messages.data) {
									let reviseTree = getRes.data.messages.data;
									for(let i in reviseTree) {
										reviseTree[i].showBground = false; //用于设置点击切换背景色
										reviseTree[i].showEdit = true; //用于点击进行编辑
										reviseTree[i].showSave = false; //用于点击进行编辑。。。
									}
									this.firstTree = reviseTree;
								} else {
									this.firstTree = []
								}
								this.tree1Data = [];
								this.tree2Data = [];
								this.tree3Data = [];
								this.tree4Data = [];
								for(let n = 0; n < this.addSaveBtn.length; n++) {
									if(n <= ulIndex) {
										this.addSaveBtn[n].addClassBtn = true;
									} else {
										this.addSaveBtn[n].addClassBtn = false;
									}
								}
							}).catch(function(error) {
								console.log("响应数据失败")
							});
						}).catch(function(error) {
							console.log("发送请求失败")
						});

					} else {
						alert("编辑有误,请修改后重新保存")
					}
					console.log("大类保存，，，，，，，，")
				} else if(ulIndex == 1) {
					//一级分类保存
					let addLength = 0;
					for(let i = 0, len = this.tree1Data.length; i < len; i++) {
						if(name == this.tree1Data[i].name) {
							addLength += 1;
						}
					}
					if(!!name && addLength == 0) {
						for(let i = 0, len = this.tree1Data.length; i < len; i++) {
							this.tree1Data[i].showEdit = true;
							this.tree1Data[i].showSave = false;
						}

						this.restLi(ulIndex);

						let addUrl = cont.goods + "v1/category/saveCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&name=" + name + "&parentCategoryId=" + nodeId;
						let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + nodeId;
						//this.setGetPost(addUrl,getUrl,this.tree1Data)

						this.axios.post(addUrl).then((setRes) => {
							this.axios.post(getUrl).then((getRes) => {
								if(getRes.data.messages.data) {
									let reviseTree = getRes.data.messages.data;
									for(let i in reviseTree) {
										reviseTree[i].showBground = false; //用于设置点击切换背景色
										reviseTree[i].showEdit = true; //用于点击进行编辑
										reviseTree[i].showSave = false; //用于点击进行编辑。。。
									}
									this.tree1Data = reviseTree;
								} else {
									this.tree1Data = []
								}
								this.tree2Data = [];
								this.tree3Data = [];
								this.tree4Data = [];
								for(let n = 0; n < this.addSaveBtn.length; n++) {
									if(n <= ulIndex) {
										this.addSaveBtn[n].addClassBtn = true;
									} else {
										this.addSaveBtn[n].addClassBtn = false;
									}
								}
							}).catch(function(error) {
								console.log("响应数据失败")
							});
						}).catch(function(error) {
							console.log("发送请求失败")
						});

					} else {
						alert("编辑有误,请修改后重新保存")
					}
					console.log("一级分类保存，，，，，，，，")
				} else if(ulIndex == 2) {
					//二级分类保存
					let addLength = 0;
					for(let i = 0, len = this.tree2Data.length; i < len; i++) {
						if(name == this.tree2Data[i].name) {
							addLength += 1;
						}
					}
					if(!!name && addLength == 0) {
						for(let i = 0, len = this.tree2Data.length; i < len; i++) {
							this.tree2Data[i].showEdit = true;
							this.tree2Data[i].showSave = false;
						}

						console

						this.restLi(ulIndex);

						let addUrl = cont.goods + "v1/category/saveCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&name=" + name + "&parentCategoryId=" + nodeId;
						let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + nodeId;
						//this.setGetPost(addUrl,getUrl,this.tree1Data)

						this.axios.post(addUrl).then((setRes) => {
							this.axios.post(getUrl).then((getRes) => {
								if(getRes.data.messages.data) {
									let reviseTree = getRes.data.messages.data;
									for(let i in reviseTree) {
										reviseTree[i].showBground = false; //用于设置点击切换背景色
										reviseTree[i].showEdit = true; //用于点击进行编辑
										reviseTree[i].showSave = false; //用于点击进行编辑。。。
									}
									this.tree2Data = reviseTree;
								} else {
									this.tree2Data = []
								}
								this.tree3Data = [];
								this.tree4Data = [];
								for(let n = 0; n < this.addSaveBtn.length; n++) {
									if(n <= ulIndex) {
										this.addSaveBtn[n].addClassBtn = true;
									} else {
										this.addSaveBtn[n].addClassBtn = false;
									}
								}
							}).catch(function(error) {
								console.log("响应数据失败")
							});
						}).catch(function(error) {
							console.log("发送请求失败")
						});

					} else {
						alert("编辑有误,请修改后重新保存")
					}
					console.log("二级分类保存，，，，，，，，")
				} else if(ulIndex == 3) {
					//三级分类保存
					let addLength = 0;
					for(let i = 0, len = this.tree3Data.length; i < len; i++) {
						if(name == this.tree3Data[i].name) {
							addLength += 1;
						}
					}
					if(!!name && addLength == 0) {
						for(let i = 0, len = this.tree3Data.length; i < len; i++) {
							this.tree3Data[i].showEdit = true;
							this.tree3Data[i].showSave = false;
						}

						this.restLi(ulIndex);

						let addUrl = cont.goods + "v1/category/saveCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&name=" + name + "&parentCategoryId=" + nodeId;
						let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + nodeId;
						//this.setGetPost(addUrl,getUrl,this.tree1Data)

						this.axios.post(addUrl).then((setRes) => {
							this.axios.post(getUrl).then((getRes) => {
								if(getRes.data.messages.data) {
									let reviseTree = getRes.data.messages.data;
									for(let i in reviseTree) {
										reviseTree[i].showBground = false; //用于设置点击切换背景色
										reviseTree[i].showEdit = true; //用于点击进行编辑
										reviseTree[i].showSave = false; //用于点击进行编辑。。。
									}
									this.tree3Data = reviseTree;
								} else {
									this.tree3Data = []
								}
								this.tree4Data = [];
								for(let n = 0; n < this.addSaveBtn.length; n++) {
									if(n <= ulIndex) {
										this.addSaveBtn[n].addClassBtn = true;
									} else {
										this.addSaveBtn[n].addClassBtn = false;
									}
								}
							}).catch(function(error) {
								console.log("响应数据失败")
							});
						}).catch(function(error) {
							console.log("发送请求失败")
						});

					} else {
						alert("编辑有误,请修改后重新保存")
					}
					console.log("三级分类保存，，，，，，，，")
				} else if(ulIndex == 4) {
					let addLength = 0;
					for(let i = 0, len = this.tree4Data.length; i < len; i++) {
						if(name == this.tree4Data[i].name) {
							addLength += 1;
						}
					}
					if(!!name && addLength == 0) {
						for(let i = 0, len = this.tree4Data.length; i < len; i++) {
							this.tree4Data[i].showEdit = true;
							this.tree4Data[i].showSave = false;
						}

						this.restLi(ulIndex);

						let addUrl = cont.goods + "v1/category/saveCategory?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&name=" + name + "&parentCategoryId=" + nodeId;
						let getUrl = cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId=" + this.headSchoolId + "&parentCategoryId=" + nodeId;
						//this.setGetPost(addUrl,getUrl,this.tree1Data)

						this.axios.post(addUrl).then((setRes) => {
							this.axios.post(getUrl).then((getRes) => {
								if(getRes.data.messages.data) {
									let reviseTree = getRes.data.messages.data;
									for(let i in reviseTree) {
										reviseTree[i].showBground = false; //用于设置点击切换背景色
										reviseTree[i].showEdit = true; //用于点击进行编辑
										reviseTree[i].showSave = false; //用于点击进行编辑。。。
									}
									this.tree4Data = reviseTree;
								} else {
									this.tree4Data = []
								}
							}).catch(function(error) {
								console.log("响应数据失败")
							});
						}).catch(function(error) {
							console.log("发送请求失败")
						});

					} else {
						alert("编辑有误,请修改后重新保存")
					}
					console.log("四级分类保存，，，，，，，，")
				} else {
					console.log("报错啦，，，，，，，，")
				}
			},

			//新增取消
			errorAddEdit(ulIndex) {
				this.restLi(ulIndex);
			},

			/*****工具函数********/
			/**显示li默认状态，所有li 显示 关闭编辑状态*/
			/*switchEditSave(){
				for(let i=0,len=this.firstTree.length;i<len;i++){
					this.firstTree[i].showEdit = true;
					this.firstTree[i].showSave = false;
				}
			},*/

			/***初始化li***/
			restLi(ulIndex) {
				this.addSaveBtn[ulIndex].addClass = false;
				this.addSaveBtn[ulIndex].vModel = "";
			},

			/***发送请求并且获取数据函数***/
			/*setGetPost(reqUrl,resUrl,treeData){
				this.axios.post(reqUrl).then((setRes) => {
					this.axios.post(resUrl).then((getRes) => {
						if(getRes.data.messages.data){
							let reviseTree = getRes.data.messages.data;
							for(let i in reviseTree){
								reviseTree[i].showBground= false; //用于设置点击切换背景色
								reviseTree[i].showEdit = true;//用于点击进行编辑
								reviseTree[i].showSave = false;//用于点击进行编辑。。。
							}
							treeData = reviseTree;
						}else{
							treeData=[]
						}
						console.log(treeData)
					}).catch(function(error) {
						console.log("响应数据失败")
					});
				}).catch(function(error) {
					console.log("发送请求失败")
				});
			},*/

			/**获取下一级节点数据**/
			/*getNextDate(pId,treeData){
				let getUrl =  cont.goods + "v1/category/findCategoryList?accessToken=aaaa&headSchoolId="+ this.headSchoolId +"&parentCategoryId=" + pId;
				this.axios.post(getUrl).then((getRes) => {
					if(getRes.data.messages.data){
						let reviseTree = getRes.data.messages.data;
						for(let i in reviseTree){
							reviseTree[i].showBground= false; //用于设置点击切换背景色
							reviseTree[i].showEdit = true;//用于点击进行编辑
							reviseTree[i].showSave = false;//用于点击进行编辑。。。
						}
						treeData = reviseTree;
					}else{
						treeData=[]
					}
					console.log(treeData)
				}).catch(function(error) {
					console.log("响应数据失败")
				});
			}*/
		}
	}
</script>