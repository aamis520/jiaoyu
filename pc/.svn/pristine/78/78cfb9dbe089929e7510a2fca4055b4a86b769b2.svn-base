<style scoped lang="less">


</style>
<template>
    <div>
        <div class="common-tab-w">
            <span v-for="(tab,index) in tabs" class="common-tab-item" :class="{checked:index==checkedIndex}" @click="checked(index)">{{tab.title}}</span>
        </div>
        <tab-container :type="tabs[checkedIndex]"></tab-container>
    </div>
</template>
<script>
import qs from 'qs'
import urls from '@commonJS/const'
import tabContainer from './permissions-list-tab-container.vue'

export default {

    data() {
        return {
            tabs: [{ title: '总校角色', campusType: 1 },
                { title: '地区角色', campusType: 3 },
                { title: '分校角色', campusType: 4 }
            ],
            checkedIndex: '0',
            userInfo: ''
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
