<style scoped lang="less"></style>
<template>
    <li class="item">
        <span class="name">{{role.roleName}}</span>
        <div class="content">
            <div class="list-before">
                <span class="btn" @click="getDepartList" v-if="showBtn">选择部门</span>
                <span class="result">{{result}}</span>
                <b v-if="showRemoveBtn" class="btn-close" @click="removeDRR(bindDepart)"></b>
            </div>
            <ul class="permission-depart-list" v-if="showDepartList">
                <li class="permission-depart-item" v-for="depart in departList" @click="setDepartRoleRelation(depart)">
                    <span class="text">{{depart.deptName}}</span>
                </li>
            </ul>
            <div class="list-after" v-if="showListAfter">
                <i class="btn-setting" :class="{checked:showRemoveBtn}" title="重新选择部门" @click="resetDRR"></i>
                <i class="btn-key" title="设定权限" @click="pop"></i>
            </div>
        </div>
        <pop v-if="showPop" :role="role" @closePop="pop"></pop>
    </li>
</template>
<script>
import qs from 'qs'
import common from '@commonJS/common'
import urls from '@commonJS/const'
import pop from './permissions-pop.vue'

export default {
    components: {
        pop
    },
    props: {
        role: ''
    },

    data() {
        return {
            departURL: urls.system + 'v1/system/dept/getDeptList?accessToken=aaaa',
            setDRRURL: urls.system + 'v1/system/role/setRoleDeptLevel?accessToken=aaaa',
            removeDRRURL: urls.system + 'v1/system/role/deleteRoleDeptLevel?accessToken=aaaa',
            showBtn: true,
            showRemoveBtn: false,
            showDepartList: true,
            showListAfter: false,
            showPop: false,
            departList: [],
            headSchoolId: '',
            current: '',
            result: '',
            bindDepart: ''
        }
    },

    mounted: function() {

        this.headSchoolId = this.$ls.get('USER_INFO').headSchoolId

        if (this.role.deptLevelList.length > 0) {
            this.result = this.role.deptLevelList[0].dept.deptName
            this.bindDepart = this.role.deptLevelList[0].dept
            this.showBtn = false
            this.showListAfter = true
        } else {
            this.result = ''
            this.showBtn = true
            this.showListAfter = false
        }

    },

    methods: {

        getDepartList() {

            let params = {
                headSchoolId: this.headSchoolId,
                campusType: this.role.campusType
            }

            this.axios.post(this.departURL, qs.stringify(params)).then((response) => {
                if (response.data.errorcode !== 200) {
                    console.log(response.data.messages)
                    return
                }
                this.showBtn = false
                this.showDepartList = true
                this.departList = common.filterNull(response.data.messages.data)
            })

        },

        setDepartRoleRelation(depart) {
            let params = {
                roleId: this.role.roleId,
                topDeptId: depart.deptId,
                level: depart.level
            }
            this.axios.post(this.setDRRURL, qs.stringify(params)).then(response => {
                if (response.data.errorcode !== 200) {
                    console.log(response.data.message.data)
                    return
                }
                this.result = depart.deptName
                this.showDepartList = false
                this.showListAfter = true
                this.$emit('refresh')
            })
        },

        removeDRR() {

            let params = {
                roleId: this.role.roleId,
                topDeptId: this.bindDepart.deptId,
                level: this.bindDepart.level
            }

            this.axios.post(this.removeDRRURL, qs.stringify(params)).then(response => {
                if (response.data.errorcode !== 200) {
                    console.log(response.data.message.data)
                    return
                }
                this.result = ''
                this.showDepartList = false
                this.showBtn = true
                this.showRemoveBtn = false
                this.showListAfter = false
            })

        },

        resetDRR() {
            this.showRemoveBtn = !this.showRemoveBtn
        },

        pop() {
            this.showPop = !this.showPop
        }
    }
}

</script>
