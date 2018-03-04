<template>
    <div class="opening_body">
         <section>
            <div>
                <p>
                    <span>{{list.course_name}}</span>
                    <i v-if="false"> · </i>
                    <span v-if="false">{{}}</span>
                </p>
                <p v-if="false">{{}}</p>
            </div>
            <div>
                <p>
                    <span v-if="false">{{}}</span>
                    <img src="../../../../images/system-campus/xgxgts.png" v-if="false"></img>
                </p>
            </div> 
         </section> 
         <ul>      
            <li v-for="(ele,index) in list.course_period_list" :key="index">
                <div>
                    <img src="../../../../images/system-campus/xgxgts.png" ></img>
                    <p>
                        <span>{{ele.name}}</span> 
                        <i v-if="false"> · </i>
                        <span v-if="false">{{ele.data}}</span>
                    </p>
                </div>
                <div>
                    <section>
                        <span v-for="(value,index) in ele.class_period" :key="index" >{{value.name}}</span> 
                    </section>
                    <img src="../../../../images/system-campus/newcad1.png" @click="addClass(list.course_name ,ele , index ,list ,ele.time_label)"> </img>
                     
                </div> 
            </li>
         </ul>
    </div>
</template>

<script>
	import cont from '../../../../base/commonJS/const' 
    export default　{
        name: "",
        props: {
            list :{},
            open :{},
            addInit:0
        },
        data() {
            return { 
            }
        },
        methods: {
        	//把title传个弹出窗口
        	addClass(req ,res , index ,list,arr,index1){ 
        		this.$store.commit('xgAddSchoolTitle',[res.name])
        		this.$emit('open') 
        		//res.id当前点击的课程id 
        		this.$emit('addInit',res.id,this.list.id)  
        	}
        },
        mounted(){
        	
        }
    }
</script>

<style lang="less" scoped>
    .opening_body{
        width: 100%;
        background: #fff;
        border-radius: 6px;
        box-sizing: border-box;
        padding:0 20px 32px;
        margin-bottom: 14px;
		overflow: hidden;
        section{
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #efefef;

            div{
                line-height: 50px;
                display: flex;
                
                &:first-child{
                    float: left;
                    font-size: 14px;

                    p{
                        color: #aaa;
						margin-left: 10px;
                        span{

                            &:first-child{
                                color: #31c27c;
                                margin-right: 6px;
                            }

                            /*&:last-child{
                                color: #FF9326;
                                margin-right: 20px;
                            }*/
                        } 
                    }
                }

                &:last-child{
                    float: right;
                    font-size: 14px;
                    color: #aaa;

                    p{
                        color: #aaa; 
                        display: flex;
                        align-items: center;

                        span{
                            margin-right: 16px;
                        }
                    }
                }
            }
        }

        ul{
            width: 100%;
            color: #666;
			overflow: hidden;
            li{
                width: 100%; 
                overflow: hidden;
                border-bottom: 1px solid #EFEFEF;  
                font-size: 14px;

                div{

                    &:first-child{
                        height: 45px;
                        width: 350px;
                        float: left;
                        display: flex;
                        align-items: center;
                        position: relative;
                        box-sizing: border-box;
                        padding-left: 50px;
 
                        img{
                            position: absolute;
                            margin-right: 16px; 
                            left: 8px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }

                    &:last-child{
                        width: 618px;
                        height: 100%;
                        float: right;
                        display: flex;
                        align-items: center;
                        position: relative;

                        img{
                            position: absolute;
                            right: 10px;
                            top: 50%;
                            transform: translateY(-50%);
                            cursor: pointer;
                        }

                        section{
                            width: 100%;
                            height: 90px;
                            border: none;
                            box-sizing: border-box;
                            padding-right: 30px;
                            padding-top: 15px;

                            span{
                                display: inline-block;
                                margin: 0 30px 23px 0; 
                            }
                            
                        }
                    }
                }
            }
        }
    }
</style>