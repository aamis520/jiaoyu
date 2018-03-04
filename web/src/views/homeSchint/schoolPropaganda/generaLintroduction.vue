<template>
	<div class="edit">
		<div class="title_img">
			<h3>
                <span>图片介绍</span>
                <span @click="editClick" v-if="isedit" class="gen_bianji">
                    <img  src="./../../../../static/home-icon/xdg.png"/>
                    	编辑
                </span>
            </h3>
			<div class="ngl_img">
				<div class="ngl_img_div" v-if="!edit" v-for="(ele,index) in imglist">
					<img  :src="ele.url" class="img_array" :key="index"/> 
					<!--<b v-if="edit">x</b>-->
				</div>
				<!--图片列表上传-->
				<el-dialog :visible.sync="dialogVisible" size="tiny">
					<img width="100%" :src="dialogImageUrl" alt="">
					<!--"/api/api-aliyunoss/ossController/uploadImageOss"-->
				</el-dialog>
				<el-upload v-if="edit" id="from_img" 
					:action = newimgurl 
					list-type="picture-card"  
					:on-success="ok" 
					:on-preview="handlePictureCardPreview"
					:file-list="inputData.fileList" 
					:on-remove="handleRemove">
					<img src="../../../../static/home-icon/addimg.png"></img>
					<span>添加图片</span>
				</el-upload>
			</div>
		</div>
		<div class="center_img">
			<h3>学校信息</h3>
			<div class="center_img_div">
				<!--头像上传-->
				<section v-if="edit">
					<el-upload
					  class="avatar-uploader"
					  :action=newimgurl 
					  :on-success="handleAvatarSuccess"
					  :show-file-list="false"
					  :before-upload="beforeAvatarUpload" >
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</section>
 
				<img :src="inputData.logo" v-if="!edit && inputData.logo != ''" /> 
				<div class="center_img_input">
					<input type="text" v-model="inputData.address" placeholder="学校地址" v-if="edit" />
					<input type="text" v-model="inputData.tel" placeholder="电话" v-if="edit" />
					<input type="text" v-model="inputData.ele_tel" placeholder="客服电话" v-if="edit" />
					<input type="text" v-model="inputData.e_mail" placeholder="E-mail" v-if="edit" />
					<div v-if="!edit">{{inputData.address}}</div>
					<div v-if="!edit">{{inputData.tel}}</div>
					<div v-if="!edit">{{inputData.ele_tel}}</div>
					<div v-if="!edit">{{inputData.e_mail}}</div>
				</div>
			</div>
		</div>
		<div class="bottom_img">
			<h3>总校简介</h3>
			<textarea v-if="edit" v-model="inputData.cont" class="min_te">{{inputData.cont}}</textarea>
			<div v-if="!edit" class="min_div_cont">{{inputData.cont}}</div>
			<div class="footer_img_btn" v-if="edit">
				<section @click="cancel">取消</section>
				<section @click="baocun">保存</section>
			</div>
		</div>
	</div>
</template>

<script> 
	import { mapState } from 'vuex'
	import imgurl from '../../../common/const'
	export default {
		name: "", 
		computed:{
			...mapState({
			    inputData: state => state.SchoolPropaganda.inputData,
			    imglist  : state => state.SchoolPropaganda.inputData.fileList
			  })
		},
		data() {
			return {
				edit: false,
				isedit: true,
				dialogImageUrl: '',
				imageUrl: '',
				dialogVisible: false,
				httpsImg: [],
				newimgurl: imgurl.aliyunoss+'ossController/uploadImageOss?accessToken=aaaa&folder=header/'
			}
		}, 
		methods: { 
			ok(response, file, fileList) {
				this.httpsImg = fileList 
			},
			handleAvatarSuccess(res, file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		        this.inputData.logo = res.messages.firsKey
		   }, 
			handleRemove(file, fileList) {
		       this.httpsImg = fileList
		    },
		    handlePictureCardPreview(file) {
		        this.dialogImageUrl = file.url;
		        this.dialogVisible = true;
		     },
			/**
			    点击编辑
			 */
			editClick() {
				this.isedit = !this.isedit
				this.edit = true
			},
			/**
			    取消操作
			 */
			cancel() {
				this.isedit = !this.isedit
				this.edit = false
				this.$store.dispatch('huoquheaderSchoolXinXi')
				
			},
			/**
			    保存操作
			 */
			baocun() {
				//第一次编辑不改变图片会上传空的，要做一个判断
				if(this.httpsImg.length == 0){
					this.httpsImg = this.imglist
				}
				this.isedit = !this.isedit
				this.edit = false  
				let obj = {} 
				//判断是传过来的还是自己上传的，两个对象中的属性不同，字符串拼接
				let ls = ""
				this.httpsImg.map((ele,index)=>{ 
					if(ele.response){
						ls += ele.response.messages.firsKey +","
					}else{
						ls += ele.url +","
					} 
				}) 
				ls = ls.substr(0,ls.length-1)
				obj.imgList = ls
				obj.address = this.inputData.address
				obj.teL = this.inputData.tel +","+this.inputData.ele_tel
				obj.email = this.inputData.e_mail
				obj.cont = this.inputData.cont
				obj.logo = this.inputData.logo 
				this.$store.dispatch('banCunHeaderSchool',obj) 
			},
			/**
			 * 上传限制
			 * */
			 beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2; 
		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		      }
		},
		updated() {

		},
		mounted() {
			 this.$store.dispatch('huoquheaderSchoolXinXi')
		}
	}
</script>

<style lang="less">
	@color : #31C17B;
	.gen_bianji {
		color: @color;
	}
	
	.edit {
		width: 688px;
		.title_img {
			overflow: hidden;
			width: 688px;
			height: 172px;
			background: #fff;
			border-radius: 6px;
			box-sizing: border-box;
			padding: 20px 26px;
			h3 {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				margin-bottom: 14px;
				span {
					display: flex;
					align-items: center;
					cursor: pointer;
					img {
						margin-right: 10px;
					}
				}
			}
			.ngl_img {
				width: 900px;
				.ngl_img_div {
					display: block;
					width: 148px;
					height: 92px;
					margin-right: 18px;
					float: left;
					box-shadow: 3px 3px 3px #CCCCCC;
					position: relative;
					.img_array {
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
					}
					b {
						display: block;
						width: 20px;
						height: 20px;
						background: rgba(0, 0, 0, 0.6);
						text-align: center;
						line-height: 20px;
						position: absolute;
						top: 0;
						right: 0;
						color: #fff;
						cursor: pointer;
					}
				}
				#from_img {
					display: flex;
					.el-upload--picture-card {
						width: 150px;
						height: 94px;
						line-height: 0px;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						font-size: 14px;
						color: #666;
						background: #F7F7FB;
						img {
							display: block;
							width: 20px;
							margin-bottom: 14px;
						}
					}
					.el-upload-list--picture-card .el-upload-list__item {
						width: 150px;
						height: 94px;
					}
					.el-upload-list--picture-card .el-upload-list__item {
						margin-right: 16px;
					}
				}
			}
		}
		.center_img {
			width: 100%;
			height: 166px;
			background: #fff;
			border-radius: 6px;
			box-sizing: border-box;
			padding: 20px 26px;
			margin-top: 14px;
			h3 {
				font-size: 14px;
				margin-bottom: 14px;
			}
			.center_img_div {
				width: 100%;
				height: 90px; 
				section,
				img {
					width: 88px;
					height: 90px;
					float: left;
					box-shadow: 3px 3px 3px #CCCCCC;
				}
				.center_img_input {
					width: 500px;
					height: 90px;
					float: right;
					margin-left: 42px;
					input,
					div {
						width: 149px;
						height: 43px;
						border-bottom: 1px solid #cccc;
						font-size: 14px;
						line-height: 43px;
						margin-right: 22px;
						float: left;
						color: #666;
						&:first-child {
							width: 100%;
							margin: 0;
						}
						&:last-child {
							margin: 0;
						}
					}
				}
			}
		}
		.bottom_img {
			width: 100%;
			background: #fff;
			border-radius: 6px;
			box-sizing: border-box;
			padding: 0px 26px 0;
			margin-top: 14px;
			h3 {
				height: 60px;
				line-height: 60px;
				font-size: 14px;
				border-bottom: 1px solid #ccc;
			}
			textarea,
			div {
				width: 100%;
				min-height: 100px;
				resize: none;
				line-height: 20px;
				font-size: 14px;
				
				&.min_te{
					min-height: 209px;
				}
			}
			.min_div_cont {
				padding: 10px 0;
				font-size: 14px;
				line-height: 28px;
				min-height: 298px;
				p {
					width: 100%;
					font-size: 14px;
					line-height: 34px;
				}
			}
			.footer_img_btn {
				width: 100%;
				height: 80px;
				border-top: 1px solid #ccc;
				display: flex;
				align-items: center;
				justify-content: center;
				section {
					width: 176px;
					height: 34px;
					text-align: center;
					line-height: 34px;
					cursor: pointer;
					margin: 15px;
					border-radius: 6px;
					&:first-child {
						background: #E9F9F1;
					}
					&:last-child {
						background: #31C17B;
						color: #fff;
					}
				}
			}
		}
	}
	
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 88px;
		height: 90px;
		line-height: 90px;
		text-align: center;
	}
	
	.avatar {
		width: 88px;
		height: 90px;
		display: block;
	}
</style>