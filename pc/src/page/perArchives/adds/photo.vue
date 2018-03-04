<template>
    <div class="photo">
       <div class="portrait">
            <div class="portrait_title">
                头像设置
                <img src="../../../images/home-icon/axx.png" @click="close()"/>
            </div>
           <el-upload
               class="avatar-uploader"
               action="/api/api-aliyunoss/ossController/uploadImageOss?accessToken=aaaa&folder=header/"
               :show-file-list="false"
               :on-success="handleAvatarSuccess"
               :before-upload="beforeAvatarUpload">
               <img v-if="imageUrl" :src="imageUrl" class="avatar">
               <i v-else class="">上传本地照片</i>
           </el-upload>
           <div class="btns">
               <button @click="close()">取消</button>
               <button @click="addImage()">完成</button>
           </div>
       </div>
    </div>
</template>

<script>
    import contapi from '@commonJS/const'
    export default {
        data(){
            return{
                imageUrl:""
            }
        },
        mounted() {

        },
        methods:{
            close (){
                this.$emit("photoData",false);
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = file.response.messages.firsKey;
            },
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
            },
            addImage(){
                if(this.imageUrl){
                    this.$store.commit("GET_PHOTO",this.imageUrl);
                    this.$emit("photoDatas",this.imageUrl);
                    this.$emit("photoData",false);
                }else{
                    this.$message.error('未选择任何图片');
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .photo{
        width:100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;
        left:0;
        z-index: 11;
    }
    .portrait{
        width: 380px;
        height: 560px;
        background: #ffffff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -280px;
        margin-left: -190px;
        border-radius: 5px;
    }
    .portrait_title{
        width: 100%;
        height: 55px;
        background: #f2f5f8;
        font-size: 18px;
        color: #333333;
        text-align: center;
        line-height: 55px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        img{
            position: absolute;
            right: 16px;
            top: 17px;
            cursor: pointer;
        }
    }
    .avatar-uploader{
        width: 100%;
        height: 370px;
        text-align: center;
        img{
            width: 300px;
            height: 300px;
            margin-top: 70px;
            border-radius: 100%;
        }
        i{
            display: block;
            margin-top: 20px;
            border: 1px solid #999999;
            border-radius: 5px;
            font-size: 16px;
        }
    }
    .btns{
        margin-top: 70px;
        display: flex;
        font-size: 0px;
        justify-content: center;
        button{
            width: 100px;
            height: 30px;
            border-radius: 5px;
            border: none;
            outline:none;
            font-size: 16px;
            cursor: pointer;
        }
        button:nth-child(1){
            color: #999999;
            border: #999999 1px solid;
            background: #ffffff;
        }
        button:nth-child(2){
            color: #ffffff;
            margin-left: 20px;
            background: #31c27c;
        }
    }










</style>


