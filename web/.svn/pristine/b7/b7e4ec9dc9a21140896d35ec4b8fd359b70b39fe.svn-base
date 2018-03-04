<template>
    <div class="container">
        <div class="left">
            <ul class="ul">
                <li class="upload-img">
                    <!-- <img src="../../assets/schoolSZ..jpg"/> -->
                    <el-upload
                            class="avatar-uploader"
                            :action="submitPath"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <p class="upload">上传本校区照片</p>
                </li>
                <li>
                    <input type="text" placeholder="校区名称" v-model="school_name" id="name"/>
                </li>
                <li>
                    <input type="text" placeholder="校区简称" v-model="short_name"/>

                </li>
                <li>
                    <p><input type="text" placeholder="咨询电话" v-model="phone1_number"/></p>
                    <p><input type="text" placeholder="咨询电话" v-model="phone2_number"/></p>
                    <p><input type="text" placeholder="咨询电话" v-model="phone3_number"/></p>
                </li>
            </ul>
            <div>
                <span class="tit">校区类型：</span>
                <el-radio-group v-model="radio1" class="radio_group">
                    <template>123</template>
                    <el-radio :label="1">直营校</el-radio>
                    <el-radio :label="2">加盟校</el-radio>
                    <el-radio :label="3">合作校</el-radio>
                </el-radio-group>
            </div>
            <div>
                <span class="tit">主营课程：</span>
                <el-radio-group v-model="radio2" class="radio_group">
                    <template>123</template>
                    <el-radio :label="1">班级课</el-radio>
                    <el-radio :label="2">VIP课</el-radio>
                    <el-radio :label="3">托管课</el-radio>

                    <el-tooltip placement="top">
                        <div slot="content">选择了主营课程后，家长报名时，系<br/>统会优先推送此类课程</div>
                        <el-button><strong></strong></el-button>
                    </el-tooltip>

                </el-radio-group>
            </div>

            <div class="p_map" @click="status=!status">地图定位，方便家长在手机端准确定位学校位置</div>
            <div class="btn" @click="add(school_name)">确定</div>
        </div>

        <div class="right">
            <map-item v-if="status"></map-item>
            <ul v-else="!status" class="cont" id="names">
                <li v-for='(i,index) in dataAll'>
                    {{i.school_name}}
                    <span class="floa">
                        <img src="../../assets/edit.png" class="modify"/>
                        <img src="../../assets/cancel.png" class="delet" @click="del(index)"/>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import mapItem from '@/page/campus/map'

    export default {
        data() {
            return {
                radio1: 1,
                radio2: 1,
                status: false,
                school_code: "001",
                school_name: "",
                short_name: "",
                type: "directOperration",
                main_course: "class",
                status3: "enable",
                head_school_id: "59b3b8ba43a7f91a30c45fbf",
                phone1_number: "0731-85218367",
                phone2_number: "",
                phone3_number: "",
                gps_longitude: "120.168553",
                gps_latitude: "120.168553",
                file_aa: "",
                folder: 1504951551318,
                data: [],
                data2: [],
                images: [],
                imageUrl: '',
                submitPath: "",
                xin: "",
                dataAll: [{
//                        school_name:'list1'
                }]
            }
        },
        components: {
            'map-item': mapItem
        },
        methods: {

            add(school_name) {
//                  this.school_name = school_name;                   
//                  this.dataAll.push({
//                  	school_name:this.school_name,
//                  });
//                	this.school_name = null;

                var url = "/api/api-gsst/v1/campus/addSchoolInfo?accessToken=aaaa";
                var jsonParam = {
                    "school_code": "h001",
                    "school_name": this.school_name,
                    "short_name": this.short_name,
                    "type": "directOperration",
                    "main_course": "class",
                    "head_school_id": "59b3b8ba43a7f91a30c45fbf",
                    "phone1_number": this.phone1_number,
                    "phone2_number": this.phone2_number,
                    "phone3_number": this.phone3_number,
                    "gps_longitude": "114",
                    "gps_latitude": "60",
                    "address": "中国北京"
                };
                this.axios.post(url, jsonParam).then((res) => {
                    this.data1 = res.data;
                    console.log("增加分校信息", this.data1)
                });
            },

            del(index) {
                this.axios.post("/api/api-gsst/v1/campus/delRegion?headSchoolId=1&regionId=23&accessToken=aaaa").then((res) => {
                    this.data2 = res.data;
                    console.log(1234, this.data2)
//					 $(this).parent('li').remove();
                });
                console.log(index);
                this.dataAll.splice(index, 1)
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                    this.$message.error('上传图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
        }
    }
</script>

<style scoped lang="less">
    .avatar-uploader {
        margin-bottom: 30px;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }

    .avatar {
        width: 100px;
        height: 100px;
        display: block;
        margin-bottom: 30px;
    }

    .container {
        width: 1008px;
        font-size: 14px;
        div {
            height: 626px;
            background: white;
            float: left;
            border-radius: 4px;
        }
        .left {
            color: #a0a0a0;
            width: 498px;
            background: white;
            .ul {
                list-style: none;
                padding-top: 40px;
                padding-bottom: 14px;
                & > li:first-child {
                    margin-top: 0;
                    text-align: center;
                    height: 100px;
                    width: 100px;
                    .upload {
                        line-height: 40px;
                    }
                }
                li {
                    margin: 18px auto;
                    width: 392px;
                    input {
                        padding: 10px 0;
                        border: none;
                        outline-color: green;
                        width: 100%;
                        background: #f4f5f9;
                        border-radius: 5px;
                        color: #a8a8a8;
                        padding-left: 10px;
                    }
                }
                li:nth-of-type(4) {
                    display: flex;
                    justify-content: space-between;
                    p {
                        width: 120px;
                    }
                }
            }
            div {
                height: 38px;
                display: flex;
                .tit {
                    display: inline-block;
                    margin-left: 54px;
                    line-height: 38px;
                }
                .radio_group {
                    width: 300px;
                    margin-left: 10px;
                    line-height: 38px;
                    label {
                        height: 38px;
                        width: 70px;
                        margin-right: 24px;
                    }
                    button {
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        padding: 8px;
                        line-height: 2px;
                        border-radius: 50%;
                        margin-top: 10px;
                    }
                }
            }
            div:after {
                display: block;
                content: '';
                clear: both;
            }
            .p_map {
                width: 392px;
                height: 50px;
                margin-left: 54px;
                line-height: 50px;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                margin-top: 20px;
                color: #31c27c;
                cursor: pointer;
            }
            .btn {
                width: 148px;
                height: 34px;
                display: block;
                text-align: center;
                color: #666;
                border: 1px solid #e2e2e2;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 400;
                margin-left: 178px;
                margin-top: 26px;
                line-height: 34px;
                transition: 0.5s all;
                cursor: pointer;
            }
            .btn:hover {
                background: #31c27c;
                color: #fff;
                border: none;
            }
        }
        .right {
            margin-left: 12px;
            color: #666;
            width: 498px;
            ul {
                list-style: none;
                padding: 20px 38px 0;
                li {
                    line-height: 50px;
                    border-bottom: 1px dashed gainsboro;
                    img {
                        width: 18px;
                        height: 18px;
                    }

                }
            }
        }
    }

    .container :after {
        display: block;
        content: '';
        clear: both;
    }

    .floa {
        float: right;
        img {

        }
    }

</style>