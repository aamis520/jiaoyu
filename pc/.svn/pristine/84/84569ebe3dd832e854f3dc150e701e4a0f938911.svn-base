<style scoped lang="less"></style>
<template>
    <div class="permission-pop-w shadow">
        <div class="permission-pop-t">
            <span class="text">{{role.roleName}}  ·  权限选择</span>
            <span class="op">
                <b class="btn btn-eye"></b>
                <b class="btn btn-close" @click="closePop"></b>
            </span>
        </div>
        <div class="permission-pop-c">
            <ul class="tab-btn-w">
                <tab-item v-for="mod in modList" :mod="mod" :key="mod.moduleId" @checked="getMenuList"></tab-item>
            </ul>
            <div class="tab-container">
                <check-box :menuData="viewData"></check-box>
                <check-box :menuData="opData"></check-box>
            </div>
        </div>
        <div class="permission-pop-b">
            <span class="col1">请允许本角色享有“所属部门层级”的最大查看与操作范围</span>
            <span class="col2">重要通知，点击查看</span>
        </div>
    </div>
</template>
<script>
import qs from 'qs'
import common from '@commonJS/common'
import urls from '@commonJS/const'
import tabItem from './permissions-pop-tab-item.vue'
import checkBox from './permissions-pop-check-box.vue'

export default {
    components: {
        'tab-item': tabItem,
        'check-box': checkBox
    },

    props: ['role'],

    data() {
        return {
            url: urls.system + 'v1/module/findModuleList',
            checkedURL: urls.system + 'v1/module/findModuleListWithCheckedState?accessToken=aaa',
            isChecked: true,
            modList: [],
            headSchoolId: '',
            viewData: '',
            opData: ''
        }
    },
    mounted: function() {
        this.headSchoolId = this.$ls.get('USER_INFO').headSchoolId
        this.getModList()
    },
    methods: {
        select() {
            this.isChecked = !this.isChecked
        },

        getModList() {
            let params = {
                roleId: this.role.roleId,
                headSchoolId: this.headSchoolId
            }
            this.axios.post(this.checkedURL, qs.stringify(params)).then(response => {
                this.modList = response.data.messages.data
                console.log('mod-list')
                console.log(this.modList)
            })
        },

        getMenuList(menu) {
            console.log('getMenuList running...')
            console.log(menu)

            let viewList = [],
                viewCheckedList = [],
                opList = [],
                opCheckedList = []

            for (let i = 0; i < menu.length; i++) {
                if (menu[i].menuType === 'view') {
                    viewList.push(menu[i])
                    if (!!menu[i].checked) {
                        viewCheckedList.push(menu[i])
                    }
                } else {
                    opList.push(menu[i])
                    if (!!menu[i].checked) {
                        opCheckedList.push(menu[i])
                    }
                }
            }

            this.viewData = {
                name: '查看',
                menuList: viewList,
                checkedList: viewCheckedList,
                role: this.role
            }
            this.opData = {
                name: '操作',
                menuList: opList,
                checkedList: opCheckedList,
                role: this.role
            }

            console.log('查看')
            console.log(this.viewData)
            console.log('操作')
            console.log(this.opData)
        },

        closePop() {
            this.$emit('closePop')
        }
    }
}

</script>
