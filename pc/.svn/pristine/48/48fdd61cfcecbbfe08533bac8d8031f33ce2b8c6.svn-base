<template>
    <div>
        <p v-for="(items,i) in arr" :key="i" @click="Jump(items.dept_id,i,items.dept_name)" :class="{act2:i==zindex}">{{items.dept_name}}</p>
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
                zindex:-1,
                objs:{},
                z:""
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
                headSchoolId:this.$ls.get("USER_INFO").headSchoolId,
                accessToken:this.$ls.get('USER_INFO').accessToken
            }
            this.axios.post(url,obj).then(res => {
                this.arr = res.messages.area_depts;
            }).catch(error => {
                console.log(error);
            });
        },
        methods: {
            Jump(y,x,z){
                //ID号
                this.z = z;
                this.zindex = x;
                this.objs={
                    accessToken:this.$ls.get('USER_INFO').accessToken,
                    head_school_id:this.$ls.get("USER_INFO").headSchoolId,
                    dept_id:y,
                    dept_type:'AREA',
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
    .act2{
        color: #31C27C;
    }
</style>


