
<template>
    <div class="A">
        <ul class="menu">
            <router-link active-class="act" :to="{path:'/moni/one'}" tag="li" class="li">one-a</router-link>
            <router-link active-class="act" :to="{path:'/moni/two'}" tag="li" class="li">two-a</router-link>
        </ul>
        <router-view class="rot1"></router-view>
    </div>
</template>
<style scoped="scoped" lang="less">
.A {
    display: flex;
    height: 600px;
    background: #fff;
    section {
        .li {
            width: 200px;
            height: 40px;
            background: #ccc;
            text-align: center;
            display: block;
            line-height: 40px;
            font-size: 20px;
            &.act {
                background: red;
            }
        }
    }
    .rot1 {
        width: 1000px;
        height: 100%;
        background: #00BFFF;
    }
}

</style>
