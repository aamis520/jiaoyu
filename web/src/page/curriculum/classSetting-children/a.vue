<style scoped lang="less">

    @images: "../../../assets/images/";

    .common-w {
        position: relative;
        background-color: #fff;
        padding: 20px 30px;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    .label {
        color: #5ACE96;
        width: 110px;
        height: 20px;
        line-height: 20px;
        .text, .tip {
            float: left;
        }
        .text {
            color: #5ACE96
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
            background-color: #31C27C;
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
        border-bottom: 1px solid #31C27C;
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
            width: 100px;
            height: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
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
                <span class="fl label">科目类型</span>
                <span class="fl input-w">
                    <input class="input" type="text" v-model="inputSubject" placeholder="选择或输入科目名称" @click="showSubjectPopState"/>
                </span>
                <span class="fl btn-s btn-ok" @click="addSubject"></span>
                <span class="fr btn-s" :class="{'btn-ok':btn0,'btn-edit':!btn0}" @click="changeBtnState(0)"></span>
            </div>
            <div class="common-bd">
                <span class="fl label">科目类型</span>
                <ul class="hf common-list" :class="{edit:btn0}">
                    <li class="item" v-for="item in subjectList">
                        <span class="text">{{item.name}}</span>
                        <b class="btn" @click="removeSubject(item.id)"></b>
                    </li>
                </ul>
            </div>
        </div>

        <div class="common-w">
            <div class="common-hd">
                <span class="fl label">
                    <span class="text">班型设置</span>
                    <i class="tip"><span>请自定义班型名称，如精品班、培优班、提高班等</span></i>
                </span>
                <span class="fl input-w">
                    <input class="input" type="text" v-model="inputClassType" placeholder="输入班型名称"/>
                </span>
                <span class="fl btn-s btn-ok" @click="addClassType"></span>
                <span class="fr btn-s" :class="{'btn-ok':btn1,'btn-edit':!btn1}" @click="changeBtnState(1)"></span>
            </div>
            <div class="common-bd">
                <span class="fl label">班型名称</span>
                <ul class="hf common-list" :class="{edit:btn1}">
                    <li class="item" v-for="item in classTypeList">
                        <span class="text">{{item.name}}</span>
                        <b class="btn" @click="removeClassType(item.id)"></b>
                    </li>
                </ul>
            </div>
        </div>

        <subject-pop v-if="subjectPop" @submit="getSubjectLists(1)"></subject-pop>

    </div>
</template>

<script>

    var qs = require('qs')
    import pop from './a-pop.vue'

    export default {

        components: {
            'subject-pop': pop
        },

        data() {
            return {
                subjectList: [],
                classTypeList: [],
                inputSubject: "",
                inputClassType: "",
                subjectPop: false,
                btn0: false,
                btn1: false
            }
        },

        mounted: function () {
            this.getSubjectLists(1)
            this.getClassType(1)
        },

        computed: {},

        methods: {
            showSubjectPopState: function () {
                this.subjectPop = true
            },
            hideSubjectPopState: function () {
                this.subjectPop = false
            },
            changeBtnState: function (btn) {
                this['btn' + btn] = !this['btn' + btn]
            },
            //科目类型的方法
            addSubject() {

                var v = this,
                    subjectName = this.inputSubject,
                    schoolId = 1
                this.axios.post('api/api-course/v1/course/commonitem/insertSubject?accessToken=aaaa', {
                    name: subjectName,
                    head_school_id: schoolId
                }).then(function (response) {
                    v.inputSubject = ''
                    v.getSubjectLists(schoolId)
                })

            },

            removeSubject(subjectId) {
                let
                    v = this,
                    schoolId = 1

                this.axios.post('api/api-course/v1/course/commonitem/deleteSubject', qs.stringify({
                    accessToken: 'aaaa',
                    id: subjectId,
                    head_school_id: schoolId
                })).then(function (response) {
                    v.getSubjectLists(schoolId)
                })
            },

            getSubjectLists(schoolId) {
                var v = this
                this.axios.post('api/api-course/v1/course/commonitem/selectCommonSubject', qs.stringify({
                    accessToken: 'aaaa',
                    headSchoolId: schoolId
                })).then(function (response) {
                    if (response.data.errorcode !== 200) {
//                        console.log(response.data.message)
                        return
                    }
                    v.subjectList = response.data.messages.subjectList

                })
//   隐藏科目选择弹框
                v.hideSubjectPopState()
            },

            addClassType() {

                let v = this,
                    schoolId = 1,
                    classType = this.inputClassType

                this.axios.post('api/api-course/v1/course/classType/insertOrUpdateClassType?accessToken=aaaa', {
                    name: classType,
                    head_school_id: schoolId
                }).then(function (response) {
                    v.inputClassType = ''
                    v.getClassType(schoolId)
                })

            },

            removeClassType(classTypeId) {

                let v = this,
                    schoolId = 1

                this.axios.post('api/api-course/v1/course/classType/deleteClassTypeById?', qs.stringify({
                    accessToken: 'aaaa',
                    id: classTypeId
                })).then(function (response) {
                    v.getClassType(schoolId)
                })
            },

            getClassType(schoolId) {
                let v = this
                this.axios.post('api/api-course/v1/course/classType/selectClassTypeByHeadSchoolId?', qs.stringify({
                    accessToken: 'aaaa',
                    headSchoolId: schoolId
                })).then(function (response) {
                    if (response.data.errorcode !== 200) {
//                        console.log(response.data.message)
                        return
                    }
                    v.classTypeList = response.data.messages.data
                })
            }

        }
    }
</script>

