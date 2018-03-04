<style lang="less" scoped>
/*	父组件也有的样式部分*/
	.u-panel {
		width: 16%;
		box-sizing: border-box;
		flex: none;
		border-right: 1px solid #e6e6e6;
		&:first-child {
			width: 20%;
		}
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
	.u-btn-disabled {
		background-color: #fff;
		color: rgba(80, 146, 225, 0.3);
		border-color: rgba(80, 146, 225, 0.3);
	}
/*	------父组件也有的样式部分*/	
	
	.u-panel-itm {
		position: relative;
		font-size: 0px;
		color: #333;
		padding: 10px 12px;
		cursor: pointer;
		i {
			width: 12px;
			height: 12px;
			cursor: pointer;
			position: absolute;
		}
		.u-ipt-4 {
			width: 100px;
			padding: 6px;
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
	
	.z-disabled {
		color: #ccd5d8;
		.u-icon-add {
			background: url(../../assets/goods/goods09.png) no-repeat;
			background-size: 100% 100%;
		}
	}
	.u-panel-cnt {
		height: 438px;
		overflow-y: auto;
	}
	
	.z-sel-hide {
		background: #eeeef1;
		position: relative;
		font-size: 0px;
		color: #333;
		padding: 10px 12px;
		cursor: pointer;
		display: none;
		.z-normal {
			display: none;
		}
		.z-edit {
			display: block;
		}
	}
	.uPanel-liBg{
		background: #eeeef1;
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
</style>

<template>
	<div class="u-panel">
		<h5 class="u-panel-tlt">{{className.title}}</h5>
		<ul class="u-panel-cnt">
			<li class="u-panel-itm normal"  v-for="(item,index) in treeDate"  v-bind:class="[item.showBground ? activeClass:'']" @click="changeBg(index)"  :id="item.parentCategoryId">
				<div class="z-normal" :id="item.categoryId"  v-show="item.showEdit">
					<span class="u-panel-itm-tlt f-ellipsis">{{item.name}}</span>
					<i class="u-icon-edit" @click="setEdit(index)"></i>
					<i class="u-icon-delete"></i>
				</div>
				<div class="z-edit" v-show="item.showSave">
					<input type="text" class="u-ipt u-ipt-4" v-model="item.name">
					<i class="u-icon-check" @click="saveEdit(index)"></i>
					<i class="u-icon-error" @click="errorEdit(index)"></i>
				</div>
			</li>

			<li class="u-panel-itm normal  z-sel-hide">
				<div class="z-normal" id="">
					<span class="u-panel-itm-tlt f-ellipsis"></span>
					<i class="u-icon-edit"></i>
					<i class="u-icon-delete"></i>
				</div>
				<div class="z-edit-hide">
					<input type="text" class="u-ipt u-ipt-4">
					<i class="u-icon-check"></i>
					<i class="u-icon-error"></i>
				</div>
			</li>
			<!--Regular if3-->
			<a class="u-panel-add" id="auto-id-1509681395154">
				<i class="u-icon-add z-disabled" id=""></i>添加分类项
			</a>
		</ul>
		<div class="u-panel-save">
			<button type="Button" class="u-btn u-btn-disabled" disabled="disabled">保存</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'uPanel',
		props: {
			classTabs: {
				default: 0
			},
			bigClassDate:'',//接受返回的数据
		},
		data() {
			return {
				headSchoolId: '',//总学校id
				treeDate:[],//存取返回的数据
				isActive:false,//是否显示背景色
				activeClass:'uPanel-liBg',//li背景色
				beforeValue:'',//存储编辑之前li元素的值
				parentCategoryId:'',//父级id
				categoryId:''//子集ID
			}
		},
		mounted(){
			this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId
			
		},
		computed: {
			className() {
				let className = ''
				switch(this.classTabs) {
					case 0:
						className = "大类"
						this.treeDate=this.bigClassDate
						break
					case 1:
						className = "一级分类"
						this.treeDate=[]
						break
					case 2:
						className = "二级分类"
						this.treeDate=[]
						break
					case 3:
						className = "三级分类"
						this.treeDate=[]
						break
					case 4:
						className = "四级分类"
						this.treeDate=[]
						break
				}
				return {
					title: className
				}
			}
		},
		methods:{
			/*获取内容列表*/
			/*getBigClass(className){
				let url = "/api/api-materialsetting/v1/category/findTopCategoryList?accessToken=aaaa&headSchoolId="+ this.headSchoolId;
				this.axios.post(url).then((getRes) => {
					this.firstTree=getRes.data.messages.data;
				}).catch(function(error) {
					console.log(error)
				});
			}*/
			
			
			/**点击更换背景色，处理创建日期*/
			changeBg(index){
				for(let i=0,len=this.treeDate.length;i<len;i++){
					this.treeDate[i].showBground = false
				}
				this.treeDate[index].showBground = true;
			},
			
			/***点击编辑修改dom元素**/
			setEdit(index){
				this.beforeValue = this.treeDate[index].name;
				for(let i=0,len=this.treeDate.length;i<len;i++){
					this.treeDate[i].showEdit = true;
					this.treeDate[i].showSave = false;
				}
				this.treeDate[index].showEdit = false;
				this.treeDate[index].showSave = true;
			},
			
			
			/**点击保存进行的操作****/
			saveEdit(index){
				for(let i=0,len=this.treeDate.length;i<len;i++){
					this.treeDate[i].showEdit = true;
					this.treeDate[i].showSave = false;
				}
				this.parentCategoryId = this.treeDate[index].parentCategoryId;
				this.categoryId = this.treeDate[index].categoryId;
				
				console.log(this.parentCategoryId)
				console.log(this.categoryId)
				
			},
			
			/**点击取消编辑操作**/
			errorEdit(index){
				this.treeDate[index].name = this.treeDate[index].name;
				for(let i=0,len=this.treeDate.length;i<len;i++){
					this.treeDate[i].showEdit = true;
					this.treeDate[i].showSave = false;
				}
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
		}
	}
</script>