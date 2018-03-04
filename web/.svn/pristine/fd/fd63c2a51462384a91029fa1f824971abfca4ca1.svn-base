<style scoped lang="less">
    @mc: #4ed79e;

    .lv2-page {
        background-color: #fff;
        border-radius: 4px;
    }

    .tab-w {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        height: 60px;
    }

    .tab-item {
        border: 1px solid @mc;
        color: @mc;
        border-radius: 30px;
        margin: 0 10px;
        padding: 5px 20px;
        cursor: pointer;
        &.checked {
            background-color: @mc;
            color: #fff;
        }
    }

</style>

<template>
    <div class="lv2-page">

        <div class="tab-w">
            <span v-for="(tab,index) in tabs" class="tab-item" :class="{checked:index==checkedIndex}" @click="checked(index)">{{tab.title}}</span>
        </div>

        <tab-container v-if="index==checkedIndex" v-for="(tab,index) in tabs" :tab="tab" :key="tab.id"></tab-container>

    </div>
</template>

<script>

    import qs from 'qs'
    import urls from '../../common/const'
    import tabContainer from './permissions-tab-container.vue'

    export default {

        data() {
            return {
                tabs: [{title: '总校角色', campusType: 1},
                    {title: '地区角色', campusType: 3},
                    {title: '分校角色', campusType: 4}
                ],
                checkedIndex: '0'
            }
        },

        components: {
            'tab-container': tabContainer
        },

        methods: {
            checked(index) {
                this.checkedIndex = index
            }
        }
    }

</script>