<template>
    <div class="custom_class" :style="{ width: windowWidth + 'px' }">
        <section>
            <div class="add_classroom_first">
                {{customData.class}} · 座位设置
                <span @click="closeRoomClick()">X</span>
            </div>
            <div class="custom_title">
                <span>讲台</span>
                <p>有效座位
                    <i>30</i>
                </p>
            </div>
            <ul>
                <li  v-for="(ele,index) in list" :key="index">
                    <div class="row_class"  v-for="(ele,index) in ele" :key="index">
                        <div v-if="!zidingyi || ele.isno" @click="guodao(ele)" :class="{active : ele.isguodao == true}">{{ele.const}}</div> 
                        <input type="text" v-model="ele.const" v-if="zidingyi && !ele.isno"></input>
                    </div> 
                </li> 
            </ul>
            <div class="te_zuo">
                <p>特殊座位</p>
                <div class="te_zuo_div">
                    <div>A001</div>
                </div>
                <div class="te_zuo_div">
                    <div>A001</div>
                </div>
                <div class="te_zuo_div">
                    <div>A001</div>
                </div>
                <div class="te_zuo_div">
                    <div>A001</div>
                </div>
            </div>
            <div class="te_button">
                <div @click="zidingyiClick">自定义座位号</div>
                <div>保存</div>
            </div>
        </section>
    </div>
</template>

<script>
import cont from '../../../../base/commonJS/const'
export default {
    name: "",
    props: {
        customData: {},
        closecustomRoom: {}
    },
    data() {
        return {
            windowWidth: 0,
            zidingyi: false,
            list: [
                [
                    {
                        isno:false,
                        const:"A101", 
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101", 
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101", 
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101", 
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    }
                ],
                [
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    }
                ],
                [
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    }
                ],
                [
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    }
                ],
                [
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    },
                    {
                        isno:false,
                        const:"A101",
                        isguodao: false
                    }
                ]  
            ]
        }
    },
    methods: {
        //关闭窗口
        closeRoomClick() {
            this.$emit("closecustomRoom")
        },

        /**
         * 自定义按钮
         */
        zidingyiClick(){
            this.zidingyi = !this.zidingyi
        },

        /**
         * 单击变成过道
         */
        guodao(res) {
            res.isguodao = !res.isguodao
            res.const = ""
            res.isno = !res.isno
        }
    },
    mounted() {
        this.windowWidth = document.documentElement.clientWidth
        console.log(this.customData)
    }
}
</script>

<style lang="less" scoped>
body {
    overflow: hidden;
}

.custom_class {
    height: 2000px;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;

    section {
        width: 1120px;
        height: 700px;
        background: #fff;
        position: absolute;
        box-sizing: border-box;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;

        .add_classroom_first {
            width: 100%;
            height: 60px;
            background: #EFF3f5;
            text-align: center;
            line-height: 60px;
            font-size: 22px;
            font-weight: 400;
            position: relative;

            span {
                position: absolute;
                right: 20px;
                font-size: 30px;
                font-weight: 100;
                cursor: pointer;
            }
        }

        .custom_title {
            width: 100%;
            height: 86px;
            position: relative;

            span {
                display: block;
                width: 190px;
                height: 42px;
                background: #e5e5e5;
                margin: 0 auto;
                text-align: center;
                border-radius: 21px;
                font-size: 16px;
                line-height: 42px;
                margin-top: 22px;
                color: #31c27c;
            }

            p {
                position: absolute;
                top: 14px;
                right: 300px;
                font-size: 16px;

                i {
                    color: #31c27c;
                    margin-left: 6px;
                }
            }
        }
    }

    ul {
        width: 640px;
        height: 376px;
        margin: 0px auto 0; 

        li {
            width: 100%;
            height: 38px;
            margin-bottom: 38px;

            .row_class {
                width: 60px;
                height: 38px;
                float: left;
                margin-left: 20px;

                div,input {
                    width: 60px;
                    height: 38px;
                    background: #31c17b;
                    text-align: center;
                    line-height: 38px;
                    border-radius: 6px;
                    color: #fff;
                    font-size: 16px;
                    cursor: pointer;
                }

                div{
                    &.active{
                        background: #ccc;
                    }
                }

                input{
                    height: 36px;
                    background: #0085B2;
                }
            }
        }
    }

    .te_zuo {
        display: flex;
        width: 780px;
        height: 38px;
        margin: 0px auto 0;
        font-size: 16px;
        line-height: 38px;

        p {
            margin-right: 28px;
        }

        .te_zuo_div {
            width: 60px;
            height: 38px;
            margin-right: 20px;

            div {
                width: 60px;
                height: 38px;
                background: #FFAB5c;
                text-align: center;
                line-height: 38px;
                border-radius: 6px;
                color: #fff;
                font-size: 16px;
            }
        }
    }

    .te_button {
        width: 440px;
        height: 36px;
        margin: 40px auto 0;

        div {

            width: 180px;
            height: 36px;
            margin-right: 40px; 
            text-align: center;
            font-size: 16px;
            color: #fff;
            line-height: 36px;
            float: left;
            border-radius: 6px;
            cursor: pointer;

            &:first-child {
                background: #4Ecbff;
            }

            &:last-child {
                background: #31c17b;
            }

        }
    }
}
</style>