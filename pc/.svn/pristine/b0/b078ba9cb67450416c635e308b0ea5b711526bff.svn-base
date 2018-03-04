<template>
    <div class="opening_tixing">
        <ul>
            <li>
                <i></i>
                <span v-for="(ele,index) in tishi.one" :key="index">{{ele}}</span> 
            </li>
            <li>
                <i></i>
                <span>{{tishi.two}}</span>
            </li>
            <li>
                <i></i>
                <span>{{tishi.three}}</span>
            </li>
            <li>
                <i></i>
                <span>{{tishi.four}}</span>
            </li>
            <li>
                <i></i>
                <span>{{tishi.five[0]}}</span>
                <span class="red">{{tishi.five[1]}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            tishi: {}
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .opening_tixing{
        width: 296px;
        height: 190px;
        border-radius: 6px;
        background: #fff;
        float: right;
        padding: 10px 0px 10px 20px;
        box-sizing: border-box;

        ul{
            width: 100%;
            
            li{ 
                display: flex;
                align-items: center; 
                height: 34px;
                margin-bottom: 0px;

                i{
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #31c27c;
                    margin-right:10px; 
                }

                span{
                    margin-right: 10px;

                    &.red{
                        color: red;
                    }
                }
            }
        }
    }
</style>