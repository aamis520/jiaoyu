<style scoped lang="less">
    @mc: #31c17b;
    .page-lv2 {
        padding-top: 10px;
    }

    .permissions-w {
        background-color: #fff;
        border-radius: 4px;
        padding: 0 20px;
        margin-bottom: 10px;
    }

    .permissions-t {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px dashed #eee;
        color: @mc;
    }

    .permissions-c {
        display: flex;
        line-height: 50px;
        min-height: 50px;
    }

    .label {
        color: @mc;
        margin-right: 20px;
    }

    .content {
        flex-grow: 1;
    }

    .p-mod {
        display: flex;
    }

    .p-tit {
        margin-right: 10px;
        width: 100px;
    }

    .p-list {
        display: flex;
        flex-grow: 1;
        li {
            margin-right: 10px;
        }
    }
</style>
<template>
    <div class="page-lv2">

        <dl class="permissions-w" v-for="role in roleList" :key="role.roleId">
            <dt class="permissions-t">
                {{role.roleName}} · {{role.deptLevelList[0].dept.deptName}}
            </dt>

            <dd class="permissions-c">
                <span class="label">查看</span>
                <div class="content">
                    <div class="p-mod" v-for="view in role.view">
                        <span class="p-tit">{{view.name}}</span>
                        <ul class="p-list">
                            <li v-for="menu in view.list">{{menu.menuName}}</li>
                        </ul>
                    </div>
                </div>
            </dd>
            <dd class="permissions-c">
                <span class="label">操作</span>
                <div class="p-mod" v-for="operate in role.operate">
                    <span class="p-tit">{{operate.name}}</span>
                    <ul class="p-list">
                        <li v-for="menu in operate.list">{{menu.menuName}}</li>
                    </ul>
                </div>
            </dd>
        </dl>

    </div>
</template>

<script>

    import qs from 'qs'
    import urls from '../../common/const'

    export default {

        props: ['type'],

        mounted() {
            this.userInfo = this.$ls.get('USER_INFO')
            this.getRoleList()
        },

        watch: {
            type() {
                this.getRoleList()
            }
        },

        data() {
            return {
                url: urls.system + '/v1/system/role/findRoleListHasSetting',
                campusType: this.type.campusType,
                userInfo: '',
                roleList: []
            }
        },

        methods: {
            getRoleList() {

                let params = {
                    headSchoolId: this.userInfo.headSchoolId,
                    campusType: this.campusType,
                    accessToken: this.userInfo.accessToken
                }

                this.axios.post(this.url, qs.stringify(params)).then(response => {
                    if (response.data.errorcode !== 200) {
                        console.log(response.data.messages)
                        return
                    }
                    this.roleList = this.formatData(response.data.messages.data)
                    console.log(this.roleList)
                })
            },
            formatData(data) {

                let len = data.length
                for (let i = 0; i < len; i++) {

                    let
                        _len = data[i].menuList.length

                    data[i].view = {}
                    data[i].operate = {}

                    for (let j = 0; j < _len; j++) {

                        let
                            moduleType = data[i].menuList[j].moduleId,
                            menuType = data[i].menuList[j].menuType

                        if (!data[i][menuType][moduleType]) {
                            data[i][menuType][moduleType] = {
                                name: data[i].menuList[j].moduleName,
                                list: []
                            }
                        }

                        data[i][menuType][moduleType].list.push(data[i].menuList[j])

                    }

                }
                return data
            }
        }
    }
</script>