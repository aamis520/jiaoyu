<template>
    <div class="opening_title">
        <section>
            <p>科目类型</P>
            <ul>
                <li v-for="(ele,index) in listData.subjectList" :key="index">
                    <span @click="redClick(listData.subjectList,index,ele.id)">
                        {{ele.name}}
                        <img src="../../../assets/red.png" v-show="ele.is_check"></img>
                    </span> 
                </li>
            </ul>
        </section>
        <section>
            <p>课程链</P>
            <ul>
                <li v-for="(ele,index) in listData.chainList" :key="index">
                    <span :class="{red : ele.name == '非课链'}" @click="keLianClick(listData.chainList,index)">
                        {{ele.name}}
                        <img src="../../../assets/red.png" v-if="ele.is_delete"></img>
                    </span>
                </li>
            </ul>
        </section>
    </div>
</template>

<script > 
import cont from '../../../common/const'
import qs from "qs"
export default {
    name: "",
    props: {
        listData: {},
        keLianAjax: {}
    },
    data() {
        return {
           headSchoolId : this.$ls.get("USER_INFO").headSchoolId
        }
    },
    methods: {
        /**
                        点击科目根据id请求课链
         */
        redClick(ele , index ,id) { 
            //显示对号
            ele.map((res , req)=> {
                res.is_check = false
            })
            ele[index].is_check = true
            //请求数据
            this.kemuAjax(id)
        },
        /**
         * 点击课链查看课程
         * */
		keLianClick(ele ,index){
			ele.map((res , req)=> {
                res.is_delete = false
            })
            ele[index].is_delete = true  
            this.$emit('keLianAjax',ele[index].id)
		},
		
        /**
            	课程链ajax
         */
        kemuAjax(id){
            let url = cont.campus+"v1/campus/coursechain/findCourseChainList?accessToken=aaaa"
            let prames = qs.stringify({
                headSchoolId : this.headSchoolId,//1	
                chainOrNo :	"", //chain为是，noChain为否，空为全部。
                subjectId :	id //2
            })

            this.axios.post(url , prames)
            .then(res => {   
					this.listData.chainList = res.data.messages.chainList 
                },
                res => {
                    alert("网络繁忙 ！请刷新重试 ！")
                })
            
        }
    },
    mounted() { 
    	
    }
}
</script>

<style scoped lang="less">
    .opening_title{
        width: 100%; 
        background: #fff;
        border-radius: 6px;
        padding: 30px;
        box-sizing: border-box;
        margin-bottom: 14px;

        section{
            width : 100%;
            display: flex;

            &:first-child{
                margin-bottom: 30px;
            }

            p{
                font-size: 14px;
                color: #31c27c;
                width: 10%;
                font-size: 14px;
            }

            ul{
                display: flex;
                width: 90%;
                font-size: 14px;
                flex-wrap: wrap;

                li{
                    display: flex; 
                    margin-bottom: 20px;

                    span{
                        margin-right: 40px;
                        height:20px; 
                        padding-right:30px;
                        line-height: 20px;
                        position: relative;
                        cursor: pointer;

                        &.red{
                            color: red;
                        }
                    }

                    img{
                        width: 16px;
                        height: 16px;
                        position: absolute;
                        top: 2px;
                        right: 10px;
                    }
                }
            }
        }
    }
</style>