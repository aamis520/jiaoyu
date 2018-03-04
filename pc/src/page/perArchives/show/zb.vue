<template>
    <div>
        <p v-for="(items,i) in arr" :key="i" @click="Jump(items.dept_id,i,items.dept_name,items.account_count)" :class="{act2:i==zindex}">{{items.dept_name}}</p>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import contapi from '@commonJS/const'
    export default {
        components: {

        },
        data() {
            return {
                arr:"",
                //控制颜色button变色
                zindex:0,
                objs:{},
                z:"w体育部",
                s:""
            }
        },
        computed: {
            ...mapState({
                nowPage: state => state.perData.yeData.nowPage,
                pageSize: state => state.perData.yeData.pageSize
            })
        },
        mounted() {
            this.$store.dispatch('getfenye');
            //获取左侧的列表
            let url = contapi.staff+"/v1/dossier/staff/menuInit";
            let obj ={
                accessToken:this.$ls.get('USER_INFO').accessToken,
                headSchoolId:this.$ls.get("USER_INFO").headSchoolId
            }
            this.axios.post(url,obj).then(res => {
                this.arr = res.messages.head_school_depts;

            }).catch(error => {
                console.log(error);
            });

            this.objs={
                accessToken:this.$ls.get('USER_INFO').accessToken,
                head_school_id:this.$ls.get("USER_INFO").headSchoolId,
                dept_id:"5a0d415855ebf7667fc90609",
                dept_type:'HEADSCHOOL',
                pageNumber:this.nowPage,
                pageSize:this.pageSize
            }
            this.$emit("zbData",this.objs);
            this.$store.commit("GET_SMALLNAME",this.z);
        },
        methods: {
            Jump(y,x,z,s){
                //ID号
                console.log(s);
                this.zindex = x;
                this.objs={
                    accessToken:this.$ls.get('USER_INFO').accessToken,
                    head_school_id:this.$ls.get("USER_INFO").headSchoolId,
                    dept_id:y,
                    dept_type:'HEADSCHOOL',
                    pageNumber:this.nowPage,
                    pageSize:this.pageSize
                }
                this.z = z;
                this.$store.commit("GET_SMALLNAME",this.z);
                //路由
                this.$router.push('/perArchives/main/right');
                this.$emit("zbData",this.objs);
            }
        },
        $watch: {
        }


    }
</script>

<style lang="less" scoped>
    div{
        width: 140px;
        height: 620px;
        overflow: scroll;
    }
    div::-webkit-scrollbar{
        display: none;
    }
    p{
        width: 140px;
        height: 54px;
        line-height: 54px;
        margin: 0;
        padding: 0;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #666666;
        cursor:pointer;
    }
    .act2 {
        color: #31c27c;
    }
</style>


