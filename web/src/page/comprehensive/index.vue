<template>
    <div>
        <!---->
        <ul class="list_2">
            <router-link active-class="act" :to="{path:'/comprehensive/commonInformation'}" tag="li">常用信息</router-link>
            <router-link active-class="act" :to="{path:'/comprehensive/registrationSettings'}" tag="li">
                报名设置
            </router-link>
            <router-link active-class="act" :to="{path:'/comprehensive/tuitionRules'}" tag="li">学费规则</router-link>
            <router-link active-class="act" :to="{path:'/comprehensive/teachingComments'}" tag="li">教学点评</router-link>
            <router-link active-class="act" :to="{path:'/comprehensive/approvalSettings'}" tag="li">审批设置</router-link>
            <!--<router-link active-class="act" :to="{path:'/comprehensive/importExport'}" tag="li">导入导出</router-link>-->
            <!--<router-link active-class="act" :to="{path:'/comprehensive/selfMade'}" tag="li">自造列表</router-link>-->
            <!--<router-link active-class="act" :to="{path:'/comprehensive/integralSetting'}" tag="li">积分设置</router-link>-->
            <!--<router-link active-class="act" :to="{path:'/comprehensive/printSettings'}" tag="li">打印设置</router-link>-->
            <!--<router-link active-class="act" :to="{path:'/comprehensive/performanceStatistics'}" tag="li">业绩统计</router-link>-->
            <!--<router-link active-class="act" :to="{path:'/comprehensive/dataDictionary'}" tag="li">数据字典</router-link>-->
            <!--<router-link active-class="act" :to="{path:'/comprehensive/formulaSetting'}" tag="li">公式设置</router-link>-->
        </ul>
        <router-view class="rot2"></router-view>
    </div>
</template>
