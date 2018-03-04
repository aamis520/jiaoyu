<template>
    <div id="incomeForm">
        <div class="formTitle">
            <span class="titleLeft" v-model="nowMouth">{{nowMouth}}月财务收入日报（点击数据查看详细）</span>
            <div class="dayChange">
                <span class="tdColorGreen">日报</span>
                <span>周报 </span>
                <span>月报</span>
                <span>年报</span>
                <!--<span style="background: green; font-size: 14px; color: #FFFFFF; cursor: pointer; padding: 10px;"  @click="qiehuanID()">{{tishiFont}}</span>-->
            </div>
            <div class="titleRight">
                <span class="tRdate" v-model="nowMouth">{{nowMouth}}</span>
                <span class="tRleft" @click="getCST(-1)"><img src="../../assets/arrowLeft.png"/></span>
                <span class="tRright" @click="getCST(1)"><img src="../../assets/arrowRight.png"/></span>
                <span class="tRset" style="display: none;"><img src="../../assets/set.png"/></span>
                <span class="tRtex" style="display: none;"><img src="../../assets/illustrate.png"/></span>
                <span class="tRserch" style="display: none;"><img src="../../assets/search.png"/></span>
            </div>
        </div>
        <div class="shouruReport">
            <table class="tableClass" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <th>时间</th>
                    <th>学费收入</th>
                    <th>教材收入</th>
                    <th>物品收入</th>
                    <th>其他收入</th>
                    <th>当前欠款回款</th>
                    <th>当日新增欠款</th>
                    <th>前期欠款调整</th>
                    <th>前期尾款剩余</th>
                    <th>当日收入/欠款总计</th>
                </tr>
                <tr v-for="(val, key, index) in dayForm" :class="{'bgGray':index%2 != 0}">
                    <td class="tdColorBlack">{{key}}</td>
                    <td>{{val.tuition_amount}}<br><span>{{val.tuition_debt}}</span></td>
                    <td>{{val.teaching_amount}}<br><span>{{val.teaching_debt}}</span></td>
                    <td>{{val.goods_amount}}<br><span>{{val.goods_debt}}</span></td>
                    <td>{{val.other_amount}}<br><span>{{val.other_debt}}</span></td>
                    <td>{{val.arrears_amount}}</td>
                    <td>{{val.new_debt}}</td>
                    <td class="tdColorGreen01">{{val.early_debt}}</td>
                    <td>{{val.retainage_debt}}</td>
                    <td class="tdColorBlue">{{val.all_amount}}<br><span>{{val.all_debt}}</span></td>
                </tr>
            </table>
            <div style="padding: 20px; font-size: 20px;" v-model="noData" v-text="noData" v-show="noData"></div>
        </div>
    </div>
</template>

<script>
    /*分校ID:59e5b78443a7f90b94660b05
    地区ID:59e5d38d43a7f90cf478c3dc
    总校ID:59e5b1f743a7f90998e16dd7*/
    import cont from '../../common/const'

    export default {
        name: 'incomeForm',
        data() {
            return {
                tishiFont: '当前测试为总校(点击切换)',
                tishiTip: 1,
                headSchoolId: '59e5b1f743a7f90998e16dd7',
                schoolId: '59e5b78443a7f90b94660b05',
                sqlID: '',
                nowMouth: '',
                hideDate: '',
                dayForm: {
                    '2017-11-30': {
                        'tuition_amount': 0,
                        'tuition_debt': 0,
                        'teaching_amount': 0,
                        'teaching_debt': 0,
                        'goods_amount': 0,
                        'goods_debt': 0,
                        'other_amount': 0,
                        'other_debt': 0,
                        'arrears_amount': 0,
                        'all_amount': 0,
                        'new_debt': 0,
                        'early_debt': 0,
                        'retainage_debt': 2550,
                        'all_debt': 2550
                    }
                },
                noData: ''
            }
        },
        mounted() {
            this.headSchoolId = this.$ls.get('USER_INFO').headSchoolId
            this.schoolId = this.$ls.get('USER_INFO').schoolId
            this.sqlID = '&headSchoolId=' + this.headSchoolId
            let time = new Date()
            this.hideDate = time.setDate(1)
            this.getCST(0)
        },
        methods: {
            getCST(num) {
                //获取当前表中日期 年月等信息
                let oldTime = new Date(this.hideDate)
                let oldYear = oldTime.getFullYear()
                let oldMouth = oldTime.getMonth() + num

                if (oldMouth < 0) {
                    oldYear = oldYear - 1
                    oldMouth = 11
                } else if (oldMouth > 11) {
                    oldYear = oldYear + 1
                    oldMouth = 0
                }

                let newTime = new Date(oldYear, oldMouth, 1)
                this.hideDate = newTime

                let timeTotal = newTime.toString().split(' ') //转成字符串
                let newCST = timeTotal[0] + ' ' + timeTotal[1] + ' ' + timeTotal[2] + ' 00:00:00 CST ' + timeTotal[3] ///拼接成CST日期格式

                let getNewMouth = newTime.getMonth() + 1 //获取新月份
                this.nowMouth = timeTotal[3] + '-' + getNewMouth ///2017-11

                //发送请求数据
                console.log(this.sqlID)
                //				let url = "/api/api-financestat/v1/financestat/financialincome/selectIncomeStatements?accessToken=aaaa&"+ sId +"&queryMonth=" + newCST;
                let url = cont.finance + 'v1/financestat/financialincome/selectIncomeStatements?accessToken=aaaa&' + this.sqlID + '&queryMonth=' + newCST
                this.axios.post(url).then((res) => {
                    if (!res.data.messages.data) {
                        this.noData = '没有数据'
                        this.dayForm = {}
                    } else {
                        let newDay = {}
                        console.log(res)
                        for (let i in res.data.messages.data) {
                            if (i !== 'total') {
                                newDay[i] = res.data.messages.data[i]
                            } else {
                                newDay.总计 = res.data.messages.data[i]
                            }
                        }
                        this.dayForm = newDay
                        this.noData = ''
                    }
                }).catch(function (error) {
                    console.log(error)
                })
            },
            qiehuanID() {
                if (this.tishiTip == 1) {
                    console.log(1)
                    this.sqlID = '&schoolId=' + this.schoolId
                    this.tishiTip = 0
                    this.tishiFont = '当前测试为分校(点击切换)'
                } else {
                    console.log(2)
                    this.sqlID = '&headSchoolId=' + this.headSchoolId
                    this.tishiTip = 1
                    this.tishiFont = '当前测试为总校(点击切换)'
                }
            }
        }
    }
</script>
<style scoped="scoped" lang="less">
    .formTitle {
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    height: 90px;
	    line-height: 60px;
	    position: fixed;
	    width: 1300px;
	    background: #fff;
    }

    .titleLeft {
        color: #999;
        padding-left: 30px;
    }

    .titleRight {
        position: absolute;
        top: 0;
        right: 20px;
        color: #4ed79f;
        padding-right: 17px;
        img {
            width: 20px;
            cursor: pointer;
            position: relative;
            top: 5px;
            margin: 0 3px;
        }
    }

    .dayChange {
        width: 60%;
        margin: 0 auto;
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 16px;
        position: relative;
        top: -20px;
        color: #999;
        span {
			margin: 20px;
		    cursor: pointer;
		    padding-bottom: 5px;
            cursor: pointer;
        }
    }

    .shouruReport {
        padding: 0 30px;
        margin-top: 90px;
        .tableClass {
            width: 100%;
            text-align: left;
            color: #666;
            box-sizing: border-box;
            td {
                height: 70px;
            }
            tr {
                text-align: center;
                /*border-left:1px solid #D3DDD5;*/
                /*border-top:1px solid #D3DDD5*/
            }
            td,
            th {
                /*border-left:1px solid #D3DDD5;*/
                /*border-top:1px solid #D3DDD5*/
            }
            th {
                height: 45px;
                background-color: #eff0f6;
                font-size: 14px;
                color: #666;
            }
            .tdColorBlack {
                color: #666;
               
            }
            span {
                color: #ff6f7a;
            }
            .tdColorGreen {
                color: #31c27c;
            }
            .tdColorBlue {
                color: #409eff;
                font-weight: bold;
                span {
                    font-weight: bold;
                }
            }
            .bgGray {
                background-color: #f5f7fb;
            }
        }
    }
.tdColorGreen01 {
        color: #31c27c;
    }
    .tdColorGreen {
        color: #31c27c;
            border-bottom: 1px solid #31c27c;
    }
</style>