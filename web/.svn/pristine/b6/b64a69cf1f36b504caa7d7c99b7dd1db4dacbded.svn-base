<style scoped lang="less">

    @images: "../../assets/images/";
    @assets: '../../assets/';
    @depart: '../../assets/hs-depart/';
    @common: '../../assets/common/';

    .depart-lv2-w {
        position: absolute;
        width: 400px;
        padding: 20px 30px;
        margin-bottom: 10px;
        z-index: 9;
        top: 35px;
        left: -200px;
        color: #fff;

        .bg {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            background-color: #333;
            width: 100%;
            height: 100%;
            border-radius: 4px;
            opacity: .9;
        }

        .ft {
            display: flex;
            align-items: center;
            height: 40px;
        }
    }

    .title-w {
        display: flex;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        .text {
            line-height: 100%;
        }
    }

    .add-w {
        display: flex;
        align-items: flex-end;
    }

    .input {
        flex-grow: 1;
        height: 26px;
        border-bottom: 1px solid #fff;
        color: #fff;
        margin-right: 10px;
    }

    .btn-ok, .btn-edit {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        cursor: pointer;
    }

    .btn-ok {
        background-image: url('@{common}ok.png');
    }

    .btn-edit {
        margin-left: 10px;
        background-image: url('@{common}edit.png');
    }

    .sub-depart-list {
        color: #fff;
        padding-top: 10px;
        .item {
            display: flex;
            height: 26px;
            align-items: center;
        }
        .text {
            overflow: hidden;
            margin-right: 10px;
        }
        .btn-add, .btn-delete {
            flex-shrink: 0;
            height: 16px;
            width: 16px;
            background-size: 100% 100%;
            cursor: pointer;
        }
        .btn-add {
            background-image: url('@{common}settings_2.png');
        }
        .btn-delete {
            background-image: url('@{common}cancel.png');
            display: none;
        }
        &.edit {
            .btn-delete {
                display: block;
            }
            .btn-add {
                display: none;
            }
        }
    }

    .btn-done {
        padding: 10px 30px;
        background-color: #3d66ff;
        color: #fff;
        line-height: 18px;
        font-size: 12px;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
    }

</style>

<template>

    <div class="depart-lv2-w">

        <div class="bg"></div>

        <div class="title-w">
            <span class="text">{{depart.deptName}}-二级部门</span>
            <div class="add-w">
                <input class="input" type="text" v-model="subDepart"/>
                <span class="btn-ok" @click="addSubDepart"></span>
                <span :class="{'btn-edit':isEdit,'btn-ok':!isEdit}" @click="changeBtnState"></span>
            </div>
        </div>

        <ul class="sub-depart-list" :class="{edit:!isEdit}">
            <li class="item" v-for="item in subDepartList">
                <span class="text">{{item.deptName}}</span>
                <b class="btn-add"></b>
                <b class="btn-delete" @click="removeDepart(item.deptId)"></b>
            </li>
        </ul>

        <div class="ft">
            <span class="btn-done" @click="closePop">确定</span>
        </div>

    </div>

</template>

<script type="text/javascript">
    /**
     * 子部门组件
     */
    import qs from 'qs'
    import urls from '../../common/const'

    export default {

        props: {
            depart: '',
            campusType: '',
            subDepartList: {
                default: [{deptName: '暂无数据'}]
            }
        },

        data() {
            return {
                headSchoolId: '',
                url: urls.system + 'v1/system/dept/',
                departList: '',
                isEdit: true,
                subDepart: ''
            }
        },

        mounted: function () {
            this.headSchoolId = this.$ls.get("USER_INFO").headSchoolId
        },

        computed: {
            campusName() {
                let campusName = ''
                switch (this.campusType) {
                    case 1:
                        campusName = "总校"
                        break
                    case 2:
                        campusName = "大区"
                        break
                    case 3:
                        campusName = "地区"
                        break
                    case 4:
                        campusName = "分校"
                        break
                }

                return {
                    title: campusName + '部门',
                    placeholder: '请输入' + campusName + '部门'
                }
            }
        },

        methods: {

            closePop() {
                this.$emit('close')
            },

            changeBtnState: function () {
                this.isEdit = !this.isEdit
            },

            /**
             * 获取子部门列表
             */
            getDepartList() {
                let
                    url = this.url + 'getSubDeptList?accessToken=aaaa',
                    jsonParam = {
                        deptId: this.depart.deptId
                    }

                this.axios.post(url, qs.stringify(jsonParam)).then((response) => {
                    this.departList = response.data.messages.data[0].subDepts
                })
            },

            /**
             * 增加子部门
             */
            addSubDepart() {
                if (!this.subDepart) return
                let
                    url = this.url + this.depart.deptId + '/addSubDept?accessToken=aaaa',
                    jsonParam = {
                        headSchoolId: this.headSchoolId,
                        campusType: this.campusType,
                        deptName: this.subDepart,
                        hasSubDept: '1',
                        topDeptId: this.depart.deptId
                    }

                this.axios.post(url, qs.stringify(jsonParam)).then((response) => {
                    if (response.data.errorcode !== 200) {
                        console.log(response.data.messages)
                        return
                    }
                    this.subDepart = ''
                    this.$emit('reloadSubDepartList')
                })
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
                    this.$emit('reloadSubDepartList')
                })
            }
        }
    }
</script>

