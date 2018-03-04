<style scoped lang="less">

    @images: "../../assets/images/";
    @assets: '../../assets/';

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

    .common-hd {
        position: relative;
        border-bottom: 1px solid #eee;
        height: 40px;
        z-index: 1;
    }

    .common-bd {
        position: relative;
        padding-left: 110px;
        min-height: 40px;
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
        // background-image: url("@{images}class-settings/icon_3.png");
    }

    .btn-edit {
        // background-image: url("@{images}class-settings/icon_2.png");
    }

</style>

<template>

    <div class="common-w">

        <div class="hf common-hd">
            <span class="fl label">{{campusName.title}}</span>
            <span class="fl input-w">
                <input class="input" type="text" v-model="depart" :placeholder="campusName.placeholder"/>
            </span>
            <span class="fl btn-s btn-ok" @click="addSubDepart"></span>
            <span class="fr btn-s" :class="{'btn-ok':btn,'btn-edit':!btn}" @click="changeBtnState"></span>
        </div>

        <div class="common-bd">
            <span class="fl label">部门名称</span>
            <ul class="hf common-list" :class="{edit:btn}">
                <cp-depart-lv1 v-for="depart in departList" :key="depart.id" :depart="depart" @refresh="getDepartList"></cp-depart-lv1>
            </ul>
        </div>

    </div>

</template>

<script type="text/javascript">

    import qs from 'qs'
    import cpDepart from './cp-depart-lv1'
    import urls from '@commonJS/const'

    export default {

        props: {
            campusType: {
                default: 1
            }
        },

        data() {
            return {
                headSchoolId: '',
                url: urls.system + 'v1/system/dept/',
                depart: '',
                departList: [],
                btn: false
            }
        },

        mounted: function () {
            this.headSchoolId = this.$ls.get('USER_INFO').headSchoolId

            this.getDepartList()
        },

        computed: {
            campusName() {
                let campusName = ''
                switch (this.campusType) {
                    case 1:
                        campusName = '总校'
                        break
                    case 2:
                        campusName = '大区'
                        break
                    case 3:
                        campusName = '地区'
                        break
                    case 4:
                        campusName = '分校'
                        break
                }

                return {
                    title: campusName + '部门',
                    placeholder: '请输入' + campusName + '部门'
                }
            }
        },

        methods: {

            changeBtnState: function () {
                this.btn = !this.btn
            },

            /**
             * 获取部门列表
             */
            getDepartList() {
                let
                    url = this.url + 'getDeptList?accessToken=aaaa',
                    jsonParam = {
                        headSchoolId: this.headSchoolId,
                        campusType: this.campusType
                    }

                this.axios.post(url, qs.stringify(jsonParam)).then((response) => {
                    this.departList = response.data.messages.data
                })
            },

            /**
             * 增加部门
             */
            addSubDepart() {

                if (!this.depart) return

                let
                    url = this.url + 'addDept?accessToken=aaaa',
                    jsonParam = {
                        headSchoolId: this.headSchoolId,
                        campusType: this.campusType,
                        deptName: this.depart,
                        hasSubDept: '1'
                    }

                this.axios.post(url, qs.stringify(jsonParam)).then((response) => {
                    if (response.data.errorcode !== 200) {
                        console.log(response.data.messages)
                        return
                    }
                    this.depart = ''
                    this.getDepartList()
                })

            }
        },
        components: {
            'cp-depart-lv1': cpDepart
        }
    }
</script>

