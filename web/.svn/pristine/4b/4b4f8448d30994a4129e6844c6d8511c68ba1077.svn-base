<style scoped lang="less">

    @images: "../../assets/images/";

    .common-w {
        position: relative;
        background-color: #fff;
        padding: 20px 30px;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    .label {
        color: #5ace96;
        width: 110px;
        height: 20px;
        line-height: 20px;
        .text, .tip {
            float: left;
        }
        .text {
            color: #5ace96
        }
    }

    .tip {
        position: relative;
        margin-left: 5px;
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url('@{images}class-settings/notes_normal.png') no-repeat center center;
        span {
            position: absolute;
            display: none;
            color: #fff;
            background-color: #31c27c;
            width: 200px;
            border-radius: 4px;
            padding: 10px;
            line-height: 20px;
            top: 25px;
        }
        &:hover span {
            display: block;
        }
    }

    .common-hd {
        position: relative;
        border-bottom: 1px solid #eee;
        height: 40px;
        z-index: 1;
    }

    .common-bd {
        position: relative;
        padding-left: 110px;
        .label {
            position: absolute;
            left: 0;
            height: 40px;
            line-height: 40px;
        }
    }

    .input-w {
        height: 20px;
        width: 160px;
        border-bottom: 1px solid #31c27c;
        margin-right: 10px;
        .input {
            width: 100%;
            text-indent: 3px;
            height: 20px;
            line-height: 20px;
        }
    }

    .btn-ok {
        background-image: url("@{images}class-settings/icon_3.png");
    }

    .btn-edit {
        background-image: url("@{images}class-settings/icon_2.png");
    }

    .common-list {
        min-height: 40px;
        .item, .text, .btn {
            float: left;
        }
        .item {
            height: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-right: 20px;
            overflow: hidden;
        }
        .text {
            max-width: 200px;
            height: 20px;
            line-height: 20px;
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

        &.edit .btn {
            display: block;
        }
    }

</style>

<template>

    <div class="page-lv2-right">

        <div class="common-w">
            <div class="hf common-hd">
                <span class="fl label">总校角色</span>
                <span class="fl input-w">
                    <input class="input" type="text" v-model="headRole" placeholder="请输入总校角色"/>
                </span>
                <span class="fl btn-s btn-ok" @click="addHeadRole"></span>
                <span class="fr btn-s" :class="{'btn-ok':btn0,'btn-edit':!btn0}" @click="changeBtnState(0)"></span>
            </div>
            <div class="common-bd">
                <span class="fl label">角色名称</span>
                <ul class="hf common-list" :class="{edit:btn0}">
                    <li class="item" v-for="item in headRoleList">
                        <span class="text">{{item.roleName}}</span>
                        <b class="btn" @click="removeHeadRole(item.roleId)"></b>
                    </li>
                </ul>
            </div>
        </div>

        <div class="common-w">
            <div class="common-hd">
                <span class="fl label">
                    <span class="text">地区角色</span>
                </span>
                <span class="fl input-w">
                    <input class="input" type="text" v-model="areaRole" placeholder="请输入地区校角色"/>
                </span>
                <span class="fl btn-s btn-ok" @click="addAreaRole"></span>
                <span class="fr btn-s" :class="{'btn-ok':btn1,'btn-edit':!btn1}" @click="changeBtnState(1)"></span>
            </div>
            <div class="common-bd">
                <span class="fl label">角色名称</span>
                <ul class="hf common-list" :class="{edit:btn1}">
                    <li class="item" v-for="item in areaRoleList">
                        <span class="text">{{item.roleName}}</span>
                        <b class="btn" @click="removeAreaRole(item.roleId)"></b>
                    </li>
                </ul>
            </div>
        </div>

        <div class="common-w">
            <div class="common-hd">
                <span class="fl label">
                    <span class="text">分校角色</span>
                </span>
                <span class="fl input-w">
                    <input class="input" type="text" v-model="schoolRole" placeholder="请输入分校角色"/>
                </span>
                <span class="fl btn-s btn-ok" @click="addSchoolRole"></span>
                <span class="fr btn-s" :class="{'btn-ok':btn2,'btn-edit':!btn2}" @click="changeBtnState(2)"></span>
            </div>
            <div class="common-bd">
                <span class="fl label">角色名称</span>
                <ul class="hf common-list" :class="{edit:btn2}">
                    <li class="item" v-for="item in schoolRoleList">
                        <span class="text">{{item.roleName}}</span>
                        <b class="btn" @click="removeSchoolRole(item.roleId)"></b>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>

    import qs from 'qs'
    import urls from '../../common/const'

    export default {

        data() {
            return {
                url: urls.system + 'v1/system/role/',
                schoolId: '',
                headRoleList: [],
                areaRoleList: [],
                schoolRoleList: [],
                headRole: '',
                areaRole: '',
                schoolRole: '',
                btn0: false,
                btn1: false,
                btn2: false
            }
        },

        mounted: function () {
            this.schoolId = this.$ls.get('USER_INFO').headSchoolId
            this.getHeadRoleList()
            this.getAreaRoleList()
            this.getSchoolRoleList()
        },

        methods: {

            changeBtnState: function (btn) {
                this['btn' + btn] = !this['btn' + btn]
            },

            getRoleList(headSchoolId, campusType, success) {
                this.axios.post(this.url + 'getRoleList?accessToken=aaaa', qs.stringify({
                    headSchoolId,
                    campusType
                })).then(function (response) {
                    success(response)
                })
            },

            addRole(headSchoolId, campusType, roleName, success) {
                this.axios.post(this.url + 'addRole?accessToken=aaaa', qs.stringify({
                    headSchoolId,
                    campusType,
                    roleName
                })).then(function (response) {
                    success(response)
                })
            },

            removeRole(roleId, success) {
                this.axios.post(this.url + 'deleteRole?accessToken=aaaa', qs.stringify({
                    roleId
                })).then(function (response) {
                    success(response)
                })
            },

            /**
             * 获取总校角色列表
             */
            getHeadRoleList() {
                let v = this,
                    schoolId = this.schoolId
                this.getRoleList(schoolId, 1, function (response) {
                    v.headRoleList = response.data.messages.data
                    console.log(v.headRoleList)
                })
            },

            /**
             * 增加总校角色
             */
            addHeadRole() {
                let
                    name = this.headRole,
                    schoolId = this.schoolId,
                    v = this
                //
                if (!name) {
                    return
                }
                //
                this.addRole(schoolId, 1, name, function (response) {
                    if (response.data.errorcode !== 200) {
                        console.error(response.data.messages)
                        return
                    }
                    v.headRole = ''
                    v.getHeadRoleList()
                })
            },


            /**
             * 获取地区角色列表
             */
            getAreaRoleList() {
                let
                    schoolId = this.schoolId
                this.getRoleList(schoolId, 3, (response) => {
                    this.areaRoleList = response.data.messages.data
                })
            },

            /**
             * 增加地区角色
             */
            addAreaRole() {
                let
                    name = this.areaRole,
                    schoolId = this.schoolId
                //
                if (!name) {
                    return
                }
                //
                this.addRole(schoolId, 3, name, (response) => {
                    if (response.data.errorcode !== 200) {
                        console.error(response.data.messages)
                        return
                    }
                    this.areaRole = ''
                    this.getAreaRoleList()
                })
            },
            /**
             * 删除总校角色
             */
            removeHeadRole(roleId) {
                this.removeRole(roleId, (response) => {
                    if (response.data.errorcode === 200 || response.data.ErrorCode === 200) {
                        this.getHeadRoleList()
                    } else {
                        console.error(response.data.Messages)
                    }
                })
            },
            /**
             * 删除地区角色
             */
            removeAreaRole(roleId) {
                this.removeRole(roleId, (response) => {
                    if (response.data.errorcode === 200 || response.data.ErrorCode === 200) {
                        this.getAreaRoleList()
                    } else {
                        console.error(response.data.Messages)
                    }
                })
            },
            /**
             * 删除总校角色
             */
            removeSchoolRole(roleId) {
                this.removeRole(roleId, (response) => {
                    if (response.data.errorcode === 200 || response.data.ErrorCode === 200) {
                        this.getSchoolRoleList()
                    } else {
                        console.error(response.data.Messages)
                    }
                })
            },
            /**
             * 获取校区角色列表
             */
            getSchoolRoleList() {
                let
                    schoolId = this.schoolId
                this.getRoleList(schoolId, 4, (response) => {
                    this.schoolRoleList = response.data.messages.data
                })
            },
            /**
             * 增加校区角色
             */
            addSchoolRole() {

                let
                    name = this.schoolRole,
                    schoolId = this.schoolId
                //
                if (!name) {
                    return
                }
                //
                this.addRole(schoolId, 4, name, (response) => {
                    if (response.data.errorcode !== 200) {
                        console.error(response.data.messages)
                        return
                    }
                    this.schoolRole = ''
                    this.getSchoolRoleList()
                })

            }
        }
    }
</script>


