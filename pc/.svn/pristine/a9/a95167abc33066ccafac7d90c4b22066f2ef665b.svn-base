<style scoped="scoped" lang="less">
	.teacherPic{
		background: #FFFFFF;
		overflow: hidden;
	    width: 688px;
	    border-radius: 6px;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    padding: 5px 20px;
	    .tPicTop{
	    	width: 100%;
		    -webkit-box-sizing: border-box;
		    box-sizing: border-box;
		    height: 50px;
		    line-height: 50px;
		    margin-bottom: 5px;
		    position: relative;
	    	caption{
	    		height: 50px;
			    width: 150px;
			    text-align: left;
	    	}
	    	.tPicChoose{
		    	border: #11B95C 1px solid;
			    color: #11B95C;
			    width: 80px;
			    position: absolute;
			    right: 0;
			    top: 10px;
			    height: 30px;
			    line-height: 30px;
			    border-radius: 5px;
			    text-align: center;
		    }
	    }
	    .tPicShow{
	    	width: 100%;
	    	overflow: hidden;
	    	.tPicBlock{
		    	width: 150px;
		    	box-sizing: border-box;
		    	margin-right: 15px;
		    	float: left;
		    	&:nth-child(4n){
		    		margin-right: 0;
		    	}
		    	.picBlockTop{
		    		width: 100%;
		    		height: 180px;
		    		box-sizing: border-box;
		    		position: relative;
		    		img{
		    			width: 100%;
		    			height: 100%;
		    		}
		    		.schoolNum{
		    			width: 100%;
		    			height: 33px;
		    			line-height: 33px;
		    			text-align: center;
		    			color: #FFFFFF;
		    			position: absolute;
		    			bottom: 0;
		    			right: 0;
		    			background-color: rgba(0,0,0,0.5);
		    		}
		    		.schoolClose{
		    			width: 30px;
		    			height: 30px;
		    			line-height: 30px;
		    			text-align: center;
		    			background-color:rgba(0,0,0,0.6);
		    			color: #FFFFFF;
		    			position: absolute;
		    			top: 0;
		    			right: 0;
		    			cursor: pointer;
		    		}
		    	}
		    	.picBottomFont{
		    		height: 45px;
		    		width: 100%;
		    		text-align: center;
		    		line-height: 45px;
		    		color: #666666;
		    	}
		    }
	    }
	}
    .ngl_img{
    	margin-right: 15px;
   		float: left;
    }
</style>
<style lang="less">
   #teacherIntroduce_img{
   		 .el-upload--picture-card {
	        height: 90px;
	        line-height: 90px;
	    }
   		.el-upload--picture-card {
			width: 150px;
			height: 180px;
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
			height: 180px;
		}
		.el-upload-list--picture-card .el-upload-list__item {
			margin-right: 0px;
		}
   }
</style>
<template>
    <div class="teacherPic">
    	<div class="tPicTop">
    		<caption>展示列表(28人)</caption>
    		<div class="tPicChoose">
    			选择
    		</div>
    	</div>
    	<div class="tPicShow">
    		<el-upload
			  class="upload-demo"
			  action="/api/api-aliyunoss/ossController/uploadImageOss?accessToken=aaaa&folder=header/"
			  list-type="picture"
			  :on-change="handleChange"
			  :file-list="fileList3">
			  <!--<img src="../../../../static/home-icon/addimg.png"></img>-->
              <span>添加图片</span>
			</el-upload>
    		<!--<div class="ngl_img">
            	<el-upload id="teacherIntroduce_img"
            		action="/api/api-aliyunoss/ossController/uploadImageOss?accessToken=aaaa&folder=header/"
            		list-type="picture-card"
            		:on-success="upSuccess"
            		:on-preview="handlePictureCardPreview"
            		:on-remove="handleRemove"
            		:file-list="imgArr"
            		>
            		<img src="../../../../static/home-icon/addimg.png"></img>
                    <span>添加图片</span>
            	</el-upload>
            	<el-dialog :visible.sync="dialogVisible" size="tiny">
            		<img width="100%" :src="dialogImageUrl" alt="" />
            	</el-dialog>
            </div>-->

    		<div class="tPicBlock">
    			<div class="picBlockTop">
    				<img src="http://ogd8du8tr.bkt.clouddn.com/smallExample/sE001_sbg4.jpg">
    				<div class="schoolNum">15个校区</div>
    				<div class="schoolClose">X</div>
    			</div>
    			<div class="picBottomFont">
    				王晶晶
    			</div>
    		</div>
    		<div class="tPicBlock">
    			<div class="picBlockTop">
    				<img src="http://ogd8du8tr.bkt.clouddn.com/smallExample/sE001_sbg4.jpg">
    				<div class="schoolNum">15个校区</div>
    				<div class="schoolClose">X</div>
    			</div>
    			<div class="picBottomFont">
    				王晶晶
    			</div>
    		</div>
    		<div class="tPicBlock">
    			<div class="picBlockTop">
    				<img src="http://ogd8du8tr.bkt.clouddn.com/smallExample/sE001_sbg4.jpg">
    				<div class="schoolNum">15个校区</div>
    				<div class="schoolClose">X</div>
    			</div>
    			<div class="picBottomFont">
    				王晶晶
    			</div>
    		</div>
    		<div class="tPicBlock">
    			<div class="picBlockTop">
    				<img src="http://ogd8du8tr.bkt.clouddn.com/smallExample/sE001_sbg4.jpg">
    				<div class="schoolNum">15个校区</div>
    				<div class="schoolClose">X</div>
    			</div>
    			<div class="picBottomFont">
    				王晶晶
    			</div>
    		</div>
    		<div class="tPicBlock">
    			<div class="picBlockTop">
    				<img src="http://ogd8du8tr.bkt.clouddn.com/smallExample/sE001_sbg4.jpg">
    				<div class="schoolNum">15个校区</div>
    				<div class="schoolClose">X</div>
    			</div>
    			<div class="picBottomFont">
    				王晶晶
    			</div>
    		</div>
    	</div>
    </div>
</template>
<script>
	import qs from 'qs'
    import cont from '@commonJS/const'
	export default{
		data(){
			return{
				dialogImageUrl: '',//element添加图片
				dialogVisible: false,
				imgUrl:'',//图片地址
				imgArr:[],//页面图片回显
				fileList3: [{
		          name: 'food.jpeg',
		          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
		          status: 'finished'
		        }, {
		          name: 'food2.jpeg',
		          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
		          status: 'finished'
		        }]
			}
		},
		mounted(){

		},
		methods:{
			//删除图片执行的函数
            handleRemove(file, fileList) {
                //console.log(file, fileList)
                //sessionStorage.removeItem("imgUrl")//清除sessionStorage
            },
            //点击放大镜执行的函数
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url
                this.dialogVisible = true
            },
            //上传成功执行的函数
            upSuccess(response, file, fileList) {
                //console.log(response)
                //console.log(fileList)
                //sessionStorage.imgUrl = file.response.messages.firsKey
                this.imgUrl = file.response.messages.firsKey
            },
            handleChange(file, fileList) {
		        //this.fileList3 = fileList.slice(-3);
		    }
		},
		components:{

		}
	}
</script>
