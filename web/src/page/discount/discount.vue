<template>
    <div>
        <ul class="list_2">
            <router-link active-class="act" :to="{path:'/discount/classConcession'}" tag="li">班级优惠区</router-link>
            <router-link active-class="act" :to="{path:'/discount/specialConcession'}" tag="li">特殊生优惠</router-link>
            <!--<router-link active-class="act" :to="{path:'/discount/comboConcession'}" tag="li">套餐优惠区</router-link>-->
            <router-link active-class="act" :to="{path:'/discount/issueCoupons'}" tag="li">发放优惠券</router-link>
            <!--<router-link active-class="act" :to="{path:'/discount/vipConcession'}" tag="li">设置报课程</router-link>-->
        </ul>
        <router-view class="rot2"></router-view>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>