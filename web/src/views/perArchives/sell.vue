<template>
    <div class="teaching">
        <div class="Teac-t">
            <div class="sub-t">
                <img src="../../../static/perArchives/2-1_03_03.gif" alt="" class="sub-l">
                <span>所授课程</span>
                <img src="../../../static/perArchives/2-1_03_05.gif" alt="" class="sub-x" @click="close">
            </div>
            <ul class="sub-c">
                <img src="../../assets/map/35.png" alt="">
                <li v-for="(item,index) in mess" @click="uls(item.courseList,item.id,item.name,index)" :class="item.isture ? 'cc' : '' ">{{item.name}}</li>
            </ul>
            <ul class="sub-b">
                <li v-for="(items,index) in me" @click="addImg(items.id,index,items)">{{items.name}}
                    <img src="../../assets/map/33.png" alt="" v-show="items.showImg">
                </li>
                <img src="../../assets/map/34.png" alt="" class="yes" @click.stop="sendMsg()">
            </ul>
        </div>
    </div>
</template>

<script>
    import Const from '../../common/const'
    export default {
        data(){
            return{
                courseList:[],
                mess:[],
                me:[],
                booul:false,
                subject_id:"",
                subject_name:"",
                headSchoolId:""
            }
        },
        mounted() {
            this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId;
            var urls = Const.staff+"v1/dossier/staff/getAllSubjectCourse?accessToken=aaaa&headSchoolId="+this.headSchoolId;
            this.axios.post(urls).then((res) => {
//                ES6循环遍历数组，给数组的每一项添加isture属性
                res.data.messages.data.map((ele,index)=>{
                    ele.isture = false;
                });
                this.mess = res.data.messages.data;
            }).catch(function(error) {
                console.log("科目找不到");
            });
        },
        methods:{
            uls (x,id,y,z){
                this.mess[z].isture = !this.mess[z].isture;
                console.log(this.mess[z].isture);
                this.me = x;
                for(let i=0;i<x.length;i++){
                    x[i].showImg = false;
                }
                this.subject_id = id;
                this.subject_name = y;
            },
            addImg (i,Indexes,data){
                this.$set(this.me, Indexes , Object.assign(this.me[Indexes],{showImg : !data.showImg}));
//                console.log(this.mess);
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
                console.log(this.courseList);
                this.$emit("course",this.courseList);
            }
        }
    }
</script>

<style lang="less" scoped>
    .teaching{
        width:100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;
        left:0;
        z-index: 11;
        .Teac-t{
            width: 500px;
            height:296px;
            background: #ffffff;
            position: absolute;
            margin-left: -250px;
            margin-top: -148px;
            top:50%;
            left:50%;
            border-radius: 5px;
            .sub-t{
                width:460px;
                height: 50px;
                margin: 0 auto;
                line-height: 50px;
                color: #666666;
                border-bottom: solid #ececec 1px;
                span{
                    margin-left: 10px;
                }
                .sub-x{
                    float: right;
                    margin-top: 15px;
                }
                .sub-l{
                    float: left;
                    margin-top: 16px;
                }
            }
            .sub-c{
                width: 460px;
                height: 40px;
                margin: 0 auto;
                border-bottom: solid #ececec 1px;
                position: relative;
                img{
                    position: absolute;
                    top:12px;
                    right:0;
                }
                li{
                    width:76px;
                    height: 40px;
                    line-height: 40px;
                    float: left;
                    text-align: center;
                    color: #8c8c8c;
                }
                .cc{
                    color: #32c27c;
                }
            }
            .sub-b{
                width:460px;
                height:186px;
                margin: 0 auto;
                position: relative;
                overflow: scroll;
                .yes{
                    position: absolute;
                    top:167px;
                    right: 0;
                }
                li{
                    width:460px;
                    height:36px;
                    line-height: 36px;
                    color:#8c8c8c;
                    text-align: center;
                    position: relative;
                    cursor:pointer;
                    img{
                        position: absolute;
                        top:10px;
                        right:115px;
                    }
                }
            }
            .sub-b::-webkit-scrollbar {/*隐藏滚轮*/
                display: none;
            }
        }
    }






</style>


