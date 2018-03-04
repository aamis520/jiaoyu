<style scoped lang="less">

    @images: "../../assets/images/";
    @assets: '../../assets/';

    .depart-lv2-w {
        position: absolute;
        width: 400px;
        height: 100px;
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
        }
    }

</style>

<template>

    <li>{{item.deptName}}</li>

</template>

<script type="text/javascript">
    /**
     * 子部门组件
     */
    import qs from 'qs'

    export default {

        props: {
            depart: ''
        },

        data() {
            return {
                headSchoolId: '',
                url: '/api/api-system/v1/system/dept/',
                departList: [],
                btn: false
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

            changeBtnState: function () {
                this.btn = !this.btn
            },

            /**
             * 获取部门列表
             */
            getDepartList() {
                let
                    url = this.url + 'getSubDeptList?accessToken=aaaa',
                    jsonParam = {
                        deptId: this.depart.deptId
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

            },

            /**
             * 删除部门
             * @param campusType
             * @param deptId
             */
            removeDepart(campusType, deptId) {
                let
                    url = this.url + 'deleteDept?accessToken=aaaa',
                    jsonParam = {
                        deptId
                    }
                this.axios.post(url, qs.stringify(jsonParam)).then((res) => {
                    this.getDepartList(campusType)
                })
            }
        }
    }
</script>

