<style lang="less" scoped>

    @images: '../assets/images/class-settings/';

    .tip-w {
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        background-image: url("@{images}notes_normal.png");
        &:hover .tip-c {
            display: block;
        }
    }

    .tip-c {
        display: none;
        position: absolute;
        bottom: 20px;
        left: 10px;
        width: 200px;
        padding: 10px;
        background-color: #31c27c;
        border-radius: 4px;
        color: #fff;
        box-shadow: 0 0 5px #31c27c;
        line-height: 18px;
    }

</style>

<template>
    <div class="tip-w">
        <span class="tip-c">{{content}}</span>
    </div>
</template>

<script>

    export default {
        props: {
            content: {default: "暂无提示信息！"}
        }
    }

</script>