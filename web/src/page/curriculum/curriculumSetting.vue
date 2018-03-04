<template>
    <div id="a">
        <div class="box-1">
            <div class="container-1">
                <span class="item">
                    <span class="text-1">选择科目</span>
                </span>
                <span class="item">
                    <span class="it1">数学</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">语文</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">英语</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">物理</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">化学</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">生物</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">地理</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <input type="text" name="" id="" value=""/>
                </span>
            </div>

            <div class="container-1">
                <span class="item">
                    <span class="text-1">选课程链</span>
                </span>
                <span class="item">
                    <span class="it1">课程链一</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">课程链二</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">课程链三</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <input type="text" name="" id="" value=""/>
                </span>
            </div>

            <div class="container-1">
                <span class="item">
                    <span class="text-1">数学</span>
                </span>
                <span class="item">
                    <span class="it1">小升初数学预科-6期-2个班型</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">初二数学同步-5期-4个班型</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">初三数学同步-4期-5个班型</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <input type="text" name="" id="" value=""/>
                </span>
            </div>

            <div class="container-1">
                <span class="item">
                    <span class="text-1">收费标准</span>
                </span>
                <span class="item">
                    <span class="it1">该课程链在不同的校区，总共有
                        <span class="item">
                            <input type="text" name="" id="" value=""/>套收费标准
                        </span>
                    </span>
                    <span class="iconfont icon-2"></span>
                </span>
            </div>

        </div>

        <div class="box-1">
            <div class="container-1">
                <span class="item">
                    <span class="text-1">请选择收费标准一适用的校区</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">西二旗校区</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">回龙观校区</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <span class="it1">五道口校区</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <input type="text" name="" id="" value=""/>
                </span>
            </div>
            <div class="container-1">
                <span class="item">
                    <span class="text-1">请选择收费标准二适用的校区</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <input type="text" name="" id="" value=""/>
                </span>
            </div>
            <div class="container-1">
                <span class="item">
                    <span class="text-1">请选择收费标准三适用的校区</span>
                    <span class="iconfont icon-2"></span>
                </span>
                <span class="item">
                    <input type="text" name="" id="" value=""/>
                </span>
            </div>
        </div>
        <div class="box2">
            <span>
                备    &nbsp; &nbsp;   注： &nbsp; &nbsp; &nbsp;     设置完成之后请点击右侧的   " <span class="iconfont icon-dui right-s"></span>
                "  进行保存
            </span>

            <span class="iconfont icon-dui right"></span>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        mounted: function () {
            $(".icon-2").click(function () {
                $(this).parent().css("display", "none");
            })
        },
        methods: {
            bianji: function () {
                $(".icon-2").css("visibility", "visible")
            }
        }
    }
</script>

<style scoped>
    * {
        font-size: 14px;
    }

    span {
        display: inline-block;
    }

    .box-1 {
        width: 1008px;
        background: white;
        border-radius: 4px;
        margin-bottom: 12px;
        padding-top: 16px;
        padding-bottom: 20px;
    }

    .box2 {
        width: 1008px;
        line-height: 82px;
        background: white;
        border-radius: 4px;
        color: #5ACE96;
        padding-left: 20px;
    }

    .text-1 {
        color: #5ACE96;
        margin: 0 16px 20px 0px;
        margin: 0 auto;
    }

    .container-1 {
        /*width: 1000px;*/
        margin: 0 auto;
        height: 54px;
        line-height: 54px;
        /*padding-top: 26px;*/
    }

    .item {
        margin: 0 16px 20px 0px;
    }

    .it1 {
        height: 22px;
        line-height: 22px;
        border-radius: 22px;
        color: #303030;
        font-size: 14px;
    }

    .icon-2 {
        font-size: 18px;
        color: #B9B9B9;
        visibility: hidden;
        cursor: pointer;
    }

    .icon-2:hover {
        color: #4ED79F;
        transition: all 0.3s;
    }

    .it3 {
        width: 22px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        border-radius: 50%;
        border: 1px solid #50D79F;
    }

    input {
        border: none;
        border-bottom: 1px solid #50D79F;
        outline: none;
        width: 110px;
        padding-left: 4px;
    }

    .right {
        font-size: 24px;
        color: #50D79F;
        margin-left: 570px;
        cursor: pointer;
    }

    .right-s {
        font-size: 20px;
    }

    .icon-bianji {
        font-size: 24px;
    }
</style>