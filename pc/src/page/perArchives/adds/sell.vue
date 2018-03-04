<template>
    <div class="sell">
        <div class="course">
            <h1>
                所授课程
                <img src="../../../images/home-icon/axx.png" @click="close()"/>
            </h1>
            <div class="region">
                <div class="actual">

                </div>
                <div class="kemu">
                    <p class="course_title">科目</p>

                </div>
                <div class="grade">
                    <p class="course_title">年级</p>
                </div>
                <div class="curriculum">
                    <p class="course_title">课程</p>
                </div>
            </div>
            <button class="btn">确认并新增</button>
            <button class="btn">确认</button>
        </div>
    </div>
</template>

<script>
    import contapi from '@commonJS/const'
    export default {
        data(){
            return{

            }
        },
        mounted() {
            var urls = contapi.staff+'/v1/dossier/staff//getAllSubjectCourse';
            let objtal ={
                accessToken:this.$ls.get('USER_INFO').accessToken,
                headSchoolId:this.$ls.get("USER_INFO").headSchoolId
            }
            this.axios.post(urls,objtal).then((res)=>{
                console.log("科目到手",res.messages.data);
            }).catch(function(error){
                console.log(error);
            })
        },
        methods:{

            addImg (i,Indexes,data){
                this.$set(this.me, Indexes , Object.assign(this.me[Indexes],{showImg : !data.showImg}));
                if(this.me[Indexes].showImg){
                    this.courseList.push({
                        "subject_id": this.subject_id,
                        "subject_name": this.subject_name,
                        "course_id": data.id,
                        "course_name": data.name
                    })
                }else{

                }

            },
            close (){
                this.$emit("seda",false);
            },
            sendMsg(){
                let arr = []
                this.mess.map((ele,index)=>{
                    if(ele.isture == true){
                        ele.courseList.map((ele1,index)=>{
                            if(ele1.showImg && ele1.showImg == true){
                                let obj = {}
                                obj.name = ele1.name;
                                obj.id = ele1.id;
                                obj.parId = ele.id;
                                obj.parName = ele.name;
                                arr.push(obj)
                            }
                        })
                    }
                })
                this.courseList = arr;
                this.$emit("course",this.courseList);
            }
        }
    }
</script>

<style lang="less" scoped>
    .sell{
        width:100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;
        left:0;
        z-index: 11;
    }
    .course{
        width: 750px;
        height: 620px;
        background: #ffffff;
        position: absolute;
        top:50%;
        left:50%;
        margin-left: -375px;
        margin-top: -310px;
        border-radius: 5px;
        font-size: 0;
        h1{
            width:100%;
            height: 60px;
            font-size: 18px;
            line-height: 60px;
            text-align: center;
            color: #333333;
            background: #eff3f5;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        img {
            position: absolute;
            right: 20px;
            top: 22px;
            cursor: pointer;
        }
    }
    .region{
        width: 710px;
        height: 470px;
        margin-left: 30px;
        background: pink;
    }
    .btn{
        width: 176px;
        height: 35px;
        color: #ffffff;
        background: #31c27c;
        line-height: 35px;
        text-align: center;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        outline:none;
        margin-top: 24px;
        margin-left: 150px;
    }
    .btn:last-child{
        margin-left: 40px;
    }
    .actual{
        width: 660px;
        height: 60px;
        box-sizing: border-box;
        border-bottom: dotted 1px #dedede;
    }
    .kemu{
        width: 660px;
        height: 148px;
        box-sizing: border-box;
        border-bottom: dotted 1px #dedede;
        padding-top: 24px;
    }
    .course_title{
        color: #55c27c;
        font-size: 14px;
        font-weight: bold;
    }
    .grade{
        width: 660px;
        height: 140px;
        box-sizing: border-box;
        border-bottom: dotted 1px #dedede;
        padding-top: 24px;
    }
    .curriculum{
        width: 660px;
        height: 120px;
        box-sizing: border-box;
        border-bottom: dotted 1px #dedede;
        padding-top: 24px;
    }







</style>


