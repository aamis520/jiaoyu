<template>
    <div>
        <ul class="list_2">
            <router-link active-class="act" :to="{path:'/curriculum/a'}" tag="li">常用项目设置</router-link>
            <router-link active-class="act" :to="{path:'/curriculum/classSetting'}" tag="li">班级课设置</router-link>
            <!--<router-link  active-class="act" :to="{path:'/curriculum/onetoOneset'}" tag="li">一对一设置</router-link>
            <router-link  active-class="act" :to="{path:'/curriculum/onetoNset'}" tag="li">一对N设置</router-link>
            <router-link  active-class="act" :to="{path:'/curriculum/curriculumSystem'}" tag="li">托管课设置</router-link>
            <router-link  active-class="act" :to="{path:'/curriculum/hostingSettings'}" tag="li">面试题设置</router-link>-->
        </ul>
        <router-view class="rot2"></router-view>
    </div>
</template>

<script>
</script>

<style>
    .rot2 {
        width: 1008px;
        border-radius: 4px;
        position: absolute;
        top: 60px;
        left: 290px;
    }
</style>
