<style lang="less" scoped>
    .approve{
        color: #333;
        .top{
            width: 928px;
            height:48px ;
            background-color: #fff;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 28px 0 22px;
            span{
                font-size: 16px;
                color:#319863 ;
            }
        }
        .scion{
            width: 977px;
            margin-top: 12px;
            position: relative;
            .no-page{
                background-color: #fff;
                height: 169px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                img{
                    width: 180px;
                    height: 90px;
                }
                p{
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    text-align: center;
                    height: 42px;
                    line-height: 42px;
                    font-size: 14px;
                    color: #999;
                }
            }
            .ico-init{
                position: absolute;
                right: 18px;
                bottom: 0px;
                width: 70px;
                height: 70px;
                &:hover{
                    display: inline-block;
                    width: 70px;
                    height: 70px;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    cursor: pointer;
                    margin-left: 1px;
                    background-image: url(../../../images/common-icon/addBig.png);
                }
            }
        }
    }
</style>
<template>
    <div class="approve">
        <div class="top">
            <span>审批设置</span>
        </div>
        <div class="scion">
            <div class="no-page">
                <img src="../../../images/system-head/nopage.png" alt="">
                <p>您还没有设置审批流程，点击下方加号即可设置</p>
            </div>
            <i class="ico-init ico-addBig-hover"></i>
        </div>
    </div>
</template>
<script>
    import ElRadio from "../../../../node_modules/element-ui/packages/radio/src/radio.vue";
    import system  from  '@commonJS/const'
    export default {
        components: {ElRadio},
        data() {
            return {

            };
        },
        methods:{

        },
        mounted(){
            /*******************查询总校审批设置模板列表*********************/
            let obj ={
                headSchoolId:this.$ls.get("USER_INFO").headSchoolId,
                pageSize : 5,
                pageNo : 1
            }
            this.axios.post(system.integrated+"v1/integrated/approval/selectHeadApprovalSettingByHeadSchoolId",obj).then(res => {
                console.log(666,res)
            }).catch(error => {
                err(error)
            })
            /***************************获取部门列表**************************************/
            let obj1 ={
                headSchoolId:this.$ls.get("USER_INFO").headSchoolId,
                campusType : "1"
//                campusType	string	否	部门级别
            }
            this.axios.post(system.integrated+"v1/integrated/approval/getDeptList",obj1).then(res => {
                console.log(111,res)
            }).catch(error => {
                err(error)
            })
            /***************************获取角色部门级别列表**************************************/
            let obj2 ={
                headSchoolId:this.$ls.get("USER_INFO").headSchoolId
//                campusType	string	否	部门级别
            }
            this.axios.post(system.integrated+"v1/integrated/approval/findRoleDeptLevelList",obj2).then(res => {
                console.log(222,res)
            }).catch(error => {
                err(error)
            })
            /***************************初始化审批设置录入页**************************************/
            let obj3 ={
                headSchoolId:this.$ls.get("USER_INFO").headSchoolId
//                campusType	string	否	部门级别
            }
            this.axios.post(system.integrated+"v1/integrated/approval/initApprovalSettingPage",obj3).then(res => {
                console.log(333,res)
            }).catch(error => {
                err(error)
            })
        }
    };
</script>
