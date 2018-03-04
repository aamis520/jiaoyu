<style lang="less" scoped>
    .selCor {
        position: fixed;
        margin: auto;
        z-index: 999;
        top: 50%;
        left: 50%;
        width: 750px;
        height: 620px;
        transform: translateX(-375px) translateY(-310px);
        background-color: #fff;
        border-radius: 6px;
        .fix-top {
            width: 100%;
            height: 58px;
            background-color: #eff3f5;
            line-height: 58px;
            text-align: center;
            border-top-right-radius: 6px;
            border-top-left-radius: 6px;

            font-size: 16px;
            i {
                position: absolute;
                cursor: pointer;
                top: 22px;
                right: 23px;
                display: inline-block;
                width: 16px;
                height: 16px;
                background: url("../assets/interconnect/bigX.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        .navArea{
            width: 100%;
            height: 62px;
            text-align: center;
            line-height: 62px;
            position: relative;
            span{
                display: inline-block;
                width: 66px;
                height: 24px;
                border-radius: 31px;
                text-align: center;
                line-height: 24px;
                margin-right: 20px;
                background-color:#f2f5f8 ;
            }
            span:last-of-type{
                background-color: #31c27c;
                color: #fff;
            }
            .fixCue{
                position: absolute;
                top: 5px;
                right: 40px;
                color:  #31c27c;
                display: flex;
                align-items: center;
                i{
                    display: inline-block;
                    width: 18px;
                    height: 14px;
                    background: url("../assets/interconnect/cue.png") no-repeat;
                    background-size: 100% 100%;
                    margin-right: 5px;
                }
            }
        }
        .selSchool-se{
            padding:0 60px 0 35px ;
            .tetle{
                color:#31c27c ;
                display: flex;
                align-items: center;
                /*line-height: 14px;*/
                i{
                    display: inline-block;
                    width: 607px;
                    height: 1px;
                    border-bottom: 1px dashed #dedede;
                    margin-left: 20px;
                }
            }
            .reg-school{
                .navArray{
                    height:155px;
                    overflow: hidden;
                    overflow-y: auto;
                    .btBlue{
                        background-color: #31c27c;
                        color: #fff;
                    }
                }
                .tetle{
                    color:#31c27c ;
                    display: flex;
                    align-items: center;
                    /*line-height: 14px;*/
                    i{
                        display: inline-block;
                        width: 420px;
                        height: 1px;
                        border-bottom: 1px dashed #dedede;
                    }
                }
            }
            .navArray{
                width: 110%;
                padding: 0 2px 20px 2px;
                &:after{
                    content: "";
                    overflow: hidden;
                    display: block;
                    height: 0;
                    clear: both;
                }
                .btBlue{
                    background-color: #31c27c;
                    color: #fff;
                }
                li{
                    width: 103px;
                    height:25px;
                    background-color: #f2f5f8;
                    text-align: center;
                    line-height: 25px;
                    border-radius: 12.5px;
                    float: left;
                    margin-right: 35px;
                    margin-top:17px ;
                }
            }
        }
        .btn{
            position: absolute;
            height: 99px;
            width: 100%;
            bottom: 0;
            left: 0;
            line-height: 99px;
            text-align: center;
            span{
                display: inline-block;
                height: 33px;
                line-height: 33px;
                width: 177px;
                background-color:#31c27c ;
                color: #fff;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
</style>
<template>
    <div class="selCor">
        <div class="fix-top">
            选择校区
            <i  @click="hides()"></i>
        </div>
        <nav class="navArea">
            <span>总部</span>
            <span>大区</span>
            <span>地区</span>
            <span>校区</span>
            <p class="fixCue" v-if="false"><i></i> <lable>切换</lable></p>
        </nav>
        <section class="selSchool-se">
            <!--<div class="region">-->
                <!--<div class="tetle">-->
                    <!--<span>大区 </span> <i></i>-->
                <!--</div>-->
                <!--<ul class="navArray">-->
                    <!--<li>北京大区</li>-->
                    <!--<li>北京大区</li>-->
                    <!--<li>北京大区</li>-->
                    <!--<li>北京大区</li>-->
                    <!--<li>北京大区</li>-->
                <!--</ul>-->
            <!--</div>-->
            <div class="reg-di">
                <div class="tetle">
                    <span>地区</span>  <i></i>
                </div>
                <ul class="navArray">
                  <li v-for="(item,index) in area" :class="{btBlue : num == index}" @click="getSchool(item.area_id,item. head_school_id,index)">{{item.area_name}}</li>
                </ul>
            </div>
            <div class="reg-school">
                <div class="tetle">
                    <span>校区（可多选)</span> <i></i>
                </div>
                <ul class="navArray">
                    <li v-for="(item,index) in concatAr" :class="{'btBlue':item.bool == true}" @click="courList(item,$event,index)">{{item.school_name}}</li>
                </ul>
            </div>
        </section>
        <div class="btn" @click = "valueBt()">
            <span>确认</span>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                area: [],
                num: 0,
                campus:[],
                selScAllId:[],
                concatAr:[],
                conArrAll:[],
                arrEnd:[],
                ni:1
            }
        },
        computed:{
            ...mapState({
                title: state => state.scho.arrEnd
            })
        },
        methods: {
            //获取地区
            getSchool(area_id, head_school_id, index) {
                this.num = index;
//                getSchType(area_id,head_school_id);
                this.axios.post('/api/api-interconnection/v1/school/findSchoolList?areaId=' + area_id + '&headSchoolId=' + head_school_id + '&accessToken=aaaa').then((res) => {
                    let haveOrNo = false;
                    this.concatAr =[];
                    for(let m = 0;m<this.conArrAll.length;m++){
                        if(area_id == this.conArrAll[m].area_id){
                            haveOrNo = true;
                            break;
                        }
                    }
                    if(haveOrNo != true){
                        for(let i =0;i<res.data.messages.data.length;i++){
                            res.data.messages.data[i].bool = false;
                        }
                        this.conArrAll = this.conArrAll.concat(res.data.messages.data);
                        for(let j =0;j<this.conArrAll.length;j++){
                            if(area_id == this.conArrAll[j].area_id){
                                this.concatAr.push(this.conArrAll[j]);
                            }
                        }
                    }else {
                        for(let j =0;j<this.conArrAll.length;j++){
                            if(area_id == this.conArrAll[j].area_id){
                                this.concatAr.push(this.conArrAll[j]);
                            }
                        }
                    }
                }).catch(function (error) {
                    console.log(error)
                })
                console.log(this.title);
                for(let a=0;a< this.concatAr.length;a++){
                    var gboll = false;
                    for(let b=0;b< this.title.length ;b++){
                        if(this.concatAr[a].school_id == this.title[b].school_id){
                            gboll = true;
                            break;
                        }
                    }
                    if(gboll == true){
                        this.concatAr[a].bool = true;
                    }else {
                        this.concatAr[a].bool = false;
                    }
                }
            },
            //利用promise获取数据
            fn() {
                return new Promise((success, err) => {
                    console.log(1)
                    this.axios.post('/api/api-interconnection/v1/school/findAreaList?headSchoolId='+this.$ls.get("USER_INFO").headSchoolId+'&accessToken=aaaa')
                        .then(res => {
                            success(res)
                        })
                        .catch(error => {
                            err(error)
                        })
                })
            },
            //选取校区或者去除校区
            courList(item,e,index){
                this.ni = index
                console.log( this.ni)
                if(item.bool == false){
                    item.bool = true;
                    this.arrEnd.push({school_id:item.school_id,name:item.school_name})
                }else {
                    item.bool = false;
                    for(let a=0;a< this.arrEnd.length;a++){
                        if(item.school_id == this.arrEnd[a].school_id){
                            this.arrEnd.splice(a,1)
                            break;
                        }
                    }
                }
                console.log(this.arrEnd)
            },
            hides(){
                this.$emit("upup",false)
            },
            valueBt(){
                this.$store.commit("GET_SCHOOL_SEL",this.arrEnd);
                this.$emit("upup",false);
            }
        },
        watch:{
            title:function () {
                console.log("heheheh")
                this.arrEnd = this.title;
                for(let a=0;a< this.concatAr.length;a++){
                    var gboll = false;
                    for(let b=0;b< this.title.length ;b++){
                        if(this.concatAr[a].school_id == this.title[b].school_id){
                            gboll = true;
                            break;
                        }
                    }
                    if(gboll == true){
                        this.concatAr[a].bool = true;
                    }else {
                        this.concatAr[a].bool = false;
                    }
                }
            }
        },
        mounted() {
            console.log(2312344,this.$store.state.scho.arrEnd)
            let _this = this;
            this.fn().then(function (res) {
                _this.area = res.data.messages.data;
                _this.axios.post('/api/api-interconnection/v1/school/findSchoolList?areaId=' +res.data.messages.data[0].area_id + '&headSchoolId=' + res.data.messages.data[0].head_school_id + '&accessToken=aaaa').then((res) => {
                    if(_this.concatAr.length == 0){
                        for(let i =0;i<res.data.messages.data.length;i++){
                            res.data.messages.data[i].bool = false;
                        }
                        _this.conArrAll = _this.conArrAll.concat(res.data.messages.data);
                        _this.concatAr = _this.conArrAll;
                        console.log(1,_this.conArrAll)
//                        for(let j =0;j<_this.conArrAll.length;j++){
//                            if(res.data.messages.data[0].area_id == _this.conArrAll[j].area_id){
//                                _this.concatAr.push(_this.conArrAll[j]);
//                            }
//                        }
                    }
                    console.log( 666,_this.concatAr)
//                    _this.campus = res.data.messages.data;
                }).catch(function (error) {
                    console.log(error)
                })
            })
            //进入页面默认展示第一个地区下的校区
        }
    }
</script>
