<style lang="less" scoped>
    @images: "../../assets/images/";
    @assets: '../../assets/';

    .common-list {
        min-height: 40px;
        .item, .text, .btn, .btn-add {
            float: left;
        }
        .item {
            position: relative;
            height: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-right: 20px;
        }
        .text {
            margin-right: 3px;
            height: 20px;
            line-height: 20px;
            max-width: 200px;
            overflow: hidden;
        }
        .btn {
            display: none;
            cursor: pointer;
            height: 20px;
            width: 20px;
            background: url("@{images}class-settings/delete2_normal.png") no-repeat center center;
            margin-left: 5px;
        }

        .btn-add {
            width: 20px;
            height: 20px;
            background: url("@{assets}hs-depart/bigsetup.png") no-repeat center center;
            cursor: pointer;
        }

        &.edit .btn {
            display: block;
        }

        &.edit .btn-add {
            display: none;
        }
    }

</style>

<template>
    <li class="item">
        <span class="text">{{depart.deptName}}</span>
        <b class="btn-add" @click="changePanelStatus"></b>
        <b class="btn" @click="removeDepart(depart.deptId)"></b>
        <cp-depart-lv2 v-show="isShow" :depart="depart" :subDepartList="subDepartList" @close="changePanelStatus" @reloadSubDepartList="getSubDepartList"></cp-depart-lv2>
    </li>
</template>

<script>
    import urls from '../../common/const'
    import common from '../../common/common'
    import cpDepart from './cp-depart-lv2.vue'
    import qs from 'qs'

    export default {

        props: {
            depart: ''
        },

        data() {
            return {
                headSchoolId: '',
                url: urls.system + 'v1/system/dept/',
                isShow: false,
                subDepartList: '',
                subDepart: ''
            }
        },

        methods: {

            changePanelStatus() {

                this.isShow = !this.isShow

                if (!this.isShow) return

                this.getSubDepartList()

            },

            /**
             * 删除部门
             * @param deptId
             */
            removeDepart(deptId) {
                let
                    url = this.url + 'deleteDept?accessToken=aaaa',
                    jsonParam = {
                        deptId
                    }
                this.axios.post(url, qs.stringify(jsonParam)).then((res) => {
                    this.$emit("refresh")
                })
            },

            /**
             * 获取子部门列表
             */
            getSubDepartList() {

                let
                    url = this.url + 'getSubDeptList?accessToken=aaaa',
                    jsonParam = {
                        deptId: this.depart.deptId
                    }

                this.axios.post(url, qs.stringify(jsonParam)).then((response) => {
                    response = common.filterNull(response.data)
                    this.subDepartList = response.messages.data[0].subDepts
                })

            }
        },

        components: {
            'cp-depart-lv2': cpDepart
        }
    }

</script>