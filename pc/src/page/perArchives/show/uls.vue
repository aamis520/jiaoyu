<template>
    <div>
        <ul class="big_ul">
            <li  v-for="(item,index) in arr" :key="index" @click="fun(index)">
                {{item.title}}
            </li>
        </ul>
        <ul class="some_ul">
            <li v-for="(items,indexs) in someArr" :key="indexs" @click="Jump(items.name)">
                {{items.dept_name}}
            </li>
        </ul>
    </div>

</template>

<script>
    import contapi from '@commonJS/const'
    export default {
        components: {

        },
        data() {
            return {
                headSchoolId:"",
                someArr:"",
                num:0,
                fenyedata:"",
                arr:[
                    {
                        title:'总部',
                        classday:[
                            {name:'语文全部'},
                            {name:'一班'},
                            {name:'二班'},
                            {name:'三班'},
                            {name:'四班'},
                            {name:'五班'},
                        ]
                    },
                    {
                        title:'大区',
                        classday:[
                            {name:'数学全部'},
                            {name:'一班'},
                            {name:'二班'},
                            {name:'三班'},
                            {name:'四班'},
                            {name:'五班'},
                        ]
                    },
                    {
                        title:'地区',
                        classday:[
                            {name:'英语全部'},
                            {name:'一班'},
                            {name:'二班'},
                            {name:'三班'},
                            {name:'四班'},
                            {name:'五班'},
                        ]
                    },
                    {
                        title:'校区',
                        classday:[
                            {name:'化学全部'},
                            {name:'一班'},
                            {name:'二班'},
                            {name:'三班'},
                            {name:'四班'},
                            {name:'五班'},
                        ]
                    },
                    {
                        title:'教师',
                        classday:[
                            {name:'化学全部'},
                            {name:'一班'},
                            {name:'二班'},
                            {name:'三班'},
                            {name:'四班'},
                            {name:'五班'},
                        ]
                    },
                    {
                        title:'生日',
                        classday:[
                            {name:'化学全部'},
                            {name:'一班'},
                            {name:'二班'},
                            {name:'三班'},
                            {name:'四班'},
                            {name:'五班'},
                        ]
                    },
                    {
                        title:'校龄',
                        classday:[
                            {name:'化学全部'},
                            {name:'一班'},
                            {name:'二班'},
                            {name:'三班'},
                            {name:'四班'},
                            {name:'五班'},
                        ]
                    }
                ]
            }
        },
        computed: {

        },
        mounted() {
            this.$store.dispatch('getfenye');
            //获取左侧的列表
            let url = contapi.staff+"/v1/dossier/staff/menuInit";
            let obj ={
                headSchoolId:this.$ls.get("USER_INFO").headSchoolId
            }
            this.axios.post(url,obj).then(res => {
                console.log(666,res.messages)
                for(var i in res.messages){
                        console.log(i,":",res.messages[i]);
                }
                if(this.num == 0){
                    console.log(33,res.messages.head_school_depts)
                    this.arr[0].classday = res.messages.head_school_depts;
                }
            }).catch(error => {
                console.log(error);
            });


            this.someArr = this.arr[0].classday;
        },
        methods: {

            fun(x){
                this.num = x;
                console.log(this.num);
                this.someArr = this.arr[this.num].classday;
            },
            Jump(y){
                this.$router.push('/perArchives/main/right');
                this.$store.commit("SET_ULS_ID",y);

            }
        },
        $watch: {
            someArr(){
                console.log('变化');
            }
        }


    }
</script>

<style lang="less" scoped>
    ul{
        width: 140px;
        height: 620px;
        list-style: none;
        float: left;
        li{
            width: 140px;
            height: 55px;
            text-align: center;
            line-height: 55px;
        }
    }
    .big_ul{
        background: #f7f8fc;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;

    }
    .some_ul{
        background: #ffffff;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }
    .router-link-active{
        color: red;
        background: #f7f8fc;
    }
</style>


