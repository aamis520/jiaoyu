<template>
    <div class="vue-upload-img-multiple">
        <div>
            <a href="#" class="a-upload">
                <input type="file" name="" id="" @change="onFileChange">上传本地照片
            </a>
        </div>
        <div>
            <div class="jcrop-center">
                <img :src="images" v-if="images"/>
            </div>
        </div>
        <div class="jcrop-button">
            <button class="close" @click="close()">取消</button>
            <button class="fix" @click="fixs()">完成</button>
        </div>
    </div>
</template>
<script>
    export default {
        data (){
            return {
                images: "",
                two:"",
                files:{}
            }
        },
        methods: {
            onFileChange (e) {
                var files = e.target.files || e.dataTransfer.files;//对象
                if (!files.length) return
                this.files = files;
                this.createImage(files)
            },
            createImage (file) {
                var vm = this;
                var reader = null;
                var leng = file.length; //数组的长度

                for (var i = 0; i < leng; i++) {
                    reader = new window.FileReader()//创建事件对象,用来处理文件的API
                    reader.readAsDataURL(file[i]);    // 将文件读取为 DataURL  读取的内容是加密以后的本地文件路径
                    //                    readAsBinaryString：该方法将文件读取为二进制字符串，通常我们将它传送到后端，后端可以通过这段字符串存储文件。
//                    reader.readAsBinaryString(file[i]);

//                    this.two = reader.readAsBinaryString(file[i]);
                    reader.onload = function (e) {
                        //                        vm.images.push(e.target.result)
                        vm.images = e.target.result;
                        // e.target是FileReader等同于reader
//                        vm.two = e.target.result;
                        console.log(vm);
//                        vm.fixs(e.target.result);

                    }
                }
                console.log(vm.images+1);
            },
            close (){
                this.$emit("father",false);
            },
            fixs (x){
                let filePath = "edu_3.0/account/";
                this.axios.post("api/api-staff/v1/dossier/staff/uploadImage?accessToken=aaaa&folder="+filePath+"&file="+this.files).then((res) => {

                    console.log("图片纯在",res.data);
                    this.$emit("father",false);
                }).catch(function(error) {
                    console.log("图片不存在");
                })
            }
        }
    }
</script>

<style lang="scss">
    .a-upload {
        padding: 4px 10px;
        height: 20px;
        line-height: 20px;
        /*position: relative;*/
        cursor: pointer;
        color: #888;
        background: #fafafa;
        border: 1px solid #ddd;
        border-radius: 4px;
        overflow: hidden;
        display: inline-block;
        margin-left: 145px;
        margin-top: 20px;
    }

    .a-upload  input {
        position: absolute;
        font-size: 100px;
        /*right: 0;*/
        top: 75px;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer;
        height: 30px;
        width:150px;
    }

    .a-upload:hover {
        color: #444;
        background: #eee;
        border-color: #ccc;
        text-decoration: none
    }
    .jcrop-center{
        width:300px;
        height:300px;
        margin-left: 40px;
        background: #b2b2b2;
        margin-top: 15px;
        border-radius: 5px;
        position: relative;
        img{
            width:300px;
            height:300px;
            border-radius: 50%;
        }
    }
    .jcrop-button{
        width:380px;
        margin-top: 75px;
        .close{
            background: #ffffff;
            margin-left: 80px;
            border: 1px solid #b5b5b5;
            color: #999999;
        }
        .fix{
            margin-left: 20px;
            background: #31c27c;
            color: #ffffff;
        }
        button{
            width:100px;
            height:30px;
            line-height: 30px;
            border-radius: 5px;
            border: none;
            outline:none;
        }
    }






</style>
