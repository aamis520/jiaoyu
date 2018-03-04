<style scoped="scoped" lang="less">
    .md-t {
        display: flex;
        height: 70px;
        align-items: center;
        justify-content: center;
    }

    .md-c {
        padding-left: 20px;
    }

    .tt-c {
        font-size: 16px;
        color: #4ed79e;
    }

    .el-checkbox {
        display: block;
        margin-left: 0;
        margin-bottom: 5px;
    }
</style>
<template>
    <dl class="md-w">
        <dt class="md-t">
            <el-checkbox v-if="menuData.name" class="tt-c" :indeterminate="isIndeterminate" v-model="isCheckAll" @change="checkAll">
                {{menuData.name}}
            </el-checkbox>
        </dt>
        <dd class="md-c">
            <el-checkbox-group v-model="checkedList" @change="check">
                <el-checkbox v-for="menu in menuList" :label="menu" :key="menu.menuId">
                    {{menu.menuName}}
                </el-checkbox>
            </el-checkbox-group>
        </dd>
    </dl>
</template>
<script>
    import qs from 'qs'
    import common from '../../common/common'
    import urls from '../../common/const'

    export default {
        props: ['menuData'],
        data() {
            return {
                isCheckAll: false,
                isIndeterminate: false,
                url: urls.system + 'v1/system/role/assignMenuToRole?accessToken=aaaa',
                checkedList: [],
                menuList: []
            }
        },
        watch: {
            menuData: function () {
                console.log("menuData changed...")
                this.menuList = this.menuData.menuList
                if (this.menuList.length == 0) return
                this.checkedList = this.menuData.checkedList
                let checkedCount = this.checkedList.length
                this.isCheckAll = checkedCount === this.menuList.length
                this.isIndeterminate =
                    checkedCount > 0 && checkedCount < this.menuList.length
            }
        },
        methods: {
            checkAll(isCheckAll) {
                this.checkedList = isCheckAll ? this.menuList : []

                let ids = this.getCheckedMenuIds(this.checkedList)
                this.$store.commit('addMenu', ids)

                console.log(this.$store.state.OldStore.checkedMenuList.join())
                this.setRoleMenu()
            },
            check(value) {
                let checkedCount = value.length
                this.isCheckAll = checkedCount === this.menuList.length
                this.isIndeterminate =
                    checkedCount > 0 && checkedCount < this.menuList.length

                let ids = this.getCheckedMenuIds(value)
                this.$store.commit('addMenu', ids)

                console.log(this.$store.state.OldStore.checkedMenuList.join())
                this.setRoleMenu()
            },
            getCheckedMenuIds(menus) {
                let len = menus.length,
                    arr = []
                for (let i = 0; i < len; i++) {
                    arr.push(menus[i].menuId)
                }
                return arr.join()
            },
            setRoleMenu() {
                let params = {
                    roleId: this.menuData.role.roleId,
                    menuIds: this.$store.state.OldStore.checkedMenuList.join()
                }
                this.axios.post(this.url, qs.stringify(params)).then(response => {
                    console.log(response.data)
                })
            }
        }
    }
</script>