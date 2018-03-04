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
    <ul class="permission-list">
        <permissions-role-list v-for="role in roleList" :role="role" :key="role.id" @refresh="getRoleList"></permissions-role-list>
    </ul>
</template>

<script>

    import qs from 'qs'
    import urls from '../../common/const'
    import common from '../../common/common'
    import permissionsRoleList from './permissions-role-list.vue'

    export default {

        props: {
            tab: ''
        },

        data() {
            return {
                roleList: [],
                checkedIndex: '0',
                headSchoolId: '',
                url: urls.system + 'v1/system/role/findRoleDeptLevelList?accessToken=aaaa'
            }
        },

        mounted: function () {
            this.headSchoolId = this.$ls.get('USER_INFO').headSchoolId
            //
            this.getRoleList()
        },

        components: {
            'permissions-role-list': permissionsRoleList
        },

        methods: {
            getRoleList() {

                let params = {
                    headSchoolId: this.headSchoolId,
                    campusType: this.tab.campusType
                }

                this.axios.post(this.url, qs.stringify(params)).then((response) => {
                    this.roleList = common.filterNull(response.data.messages.data)
                })

            }
        }
    }

</script>