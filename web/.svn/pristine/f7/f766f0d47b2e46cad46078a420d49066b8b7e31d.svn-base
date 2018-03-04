<template>
    <div class="sign_demo">
        <img src="../../static/home-icon/sign_bj.png" class="sign_bj"/>
        <img src="../../static/home-icon/sign_logo.png" class="sign_header_bj" alt=""/>
        <!--首次登录-->
        <div class="sign_form" v-show="signDeng == '登录'">
            <h1>登录</h1>
            <section>
                <input type="text" name="" id="" placeholder="手机号" v-model="lelOne"/>
                <img src="../../static/home-icon/sign_yanzheng1.png" alt="" class="post_cuo" v-if="!isphone"/>
            </section>
            <section>
                <input type="text" name="" id="" placeholder="密码" v-model="paswd" v-if="!ispassword"/>
                <input type="password" name="" id="" placeholder="密码" v-model="paswd" v-if="ispassword"/>
                <img src="../../static/home-icon/sign_yanzheng2.png" alt="" class="post_cuo" v-if="!ispass"/>
                <img src="../../static/home-icon/eye_close.png" v-if="ispassword" class="post_img" @click="ispassword = !ispassword"/>
                <img src="../../static/home-icon/eye_63.png" class="post_img" v-if="!ispassword" @click="ispassword = !ispassword"/>
            </section>
            <div class="jia">
                <!--<img src="../../static/home-icon/01_r4_c2.gif" />-->
            </div>
            <div class="sign_buttom" @click="denglu" >登录</div>
            <!--<div class="sign_app" @click="signDeng = 'APP'">APP下载</div>-->
        </div>

        <!--扫描APP-->
        <div class="app_form" v-if="signDeng == 'false'">
            <h1>APP下载</h1>
            <p>
                <span :class="{active : classPhonetwo == '老师'}" @click="classPhonetwo = '老师'">教师端下载</span>
                <span :class="{active : classPhonetwo == '家长'}" @click="classPhonetwo = '家长'">家长端下载</span>
            </p>
            <div>
                <img src="../../static/home-icon/sign_erwei.gif" alt="" v-if="classPhone == '苹果' && classPhonetwo == '老师'"/>
                <img src="../../static/home-icon/sign_erwei.gif" alt="" v-if="classPhone == '苹果' && classPhonetwo == '家长'"/>
                <img src="../../static/home-icon/sign_erwei.gif" alt="" v-if="classPhone == '安卓' && classPhonetwo == '老师'"/>
                <img src="../../static/home-icon/sign_erwei.gif" alt="" v-if="classPhone == '安卓' && classPhonetwo == '家长'"/>
            </div>
            <section>
                <img src="../../static/home-icon/sign_pg.png" v-if="classPhone == '苹果'" @click="classPhone = '安卓'"/>
                <img src="../../static/home-icon/sign_pg2.png" v-if="classPhone == '安卓'" @click="classPhone = '苹果'"/>
                <span></span>
                <img src="../../static/home-icon/sign_an.png" v-if="classPhone == '苹果'" @click="classPhone = '安卓'"/>
                <img src="../../static/home-icon/sign_an2.png" v-if="classPhone == '安卓'" @click="classPhone = '苹果'"/>
            </section>
            <div class="fan_sign" @click="signDeng = '登录'">返回登录</div>
        </div>

        <!--再次登录确认-->
        <div class="sign_fromtwo" v-show="signDeng == '再登'">
            <h1>登录成功</h1>
            <h2>为保障您的账号安全，请您修改初始密码。</h2>
            <section>
                <input type="text" v-model="newWd" name="" id="" placeholder="新密码"/>
                <img src="../../static/home-icon/sign_phone2.png" alt="" class="post_cuo post_cuo2" v-if="!isphoneTwo"/>
            </section>
            <section>
                <input type="text" v-model="newWd2" name="" id="" placeholder="确认密码" v-if="!ispasswordTwo"/>
                <input type="password" v-model="newWd2" name="" id="" placeholder="确认密码" v-if="ispasswordTwo"/>
                <img src="../../static/home-icon/sign_pass2.png" alt="" class="post_cuo" v-if="!ispassTwo"/>
                <img src="../../static/home-icon/eye_close.png" v-if="ispasswordTwo" class="post_img" @click="ispasswordTwo = !ispasswordTwo"/>
                <img src="../../static/home-icon/eye_63.png" class="post_img" v-if="!ispasswordTwo" @click="ispasswordTwo = !ispasswordTwo"/>
            </section>
            <div class="sign_buttom" @click="signButtom"  >确认并继续</div>
            <div class="sign_app" @click="signDeng = '登录'">返回登录</div>
        </div>
    </div>
</template>

<script>
    import qs from 'qs'
    import crypto from 'crypto'
    import pre_url from '../common/const'

    export default {
        name: '',
        data() {
            return {
                ispassword: true, //密码状态
                isphone: true, //手机号提示
                ispass: true, //密码提示
                signDeng: '登录',//登录显示
                classPhone: '苹果',
                classPhonetwo: '老师',
                ispasswordTwo: true,
                isphoneTwo: true,
                ispassTwo: true,
                lelOne: '',
                paswd: '',
                newWd: '',
                newWd2: '',
                userName: '',
                oldpas: ''
            }
        },
        methods: {
            /**
             * 首次登录
             * */
            denglu() {
                if (this.signDeng == '登录') {
                    let arr = [false, false]
                    if (/^1(3|4|5|7|8)\d{9}$/.test(this.lelOne)) {
                        this.isphone = true
                        arr[0] = true
                    } else {
                        this.isphone = false
                        arr[0] = false
                    }
                    if (this.paswd.length) {
                        this.ispass = true
                        arr[1] = true
                    } else {
                        this.ispass = false
                        arr[1] = false
                    }

                    if (arr[0] && arr[1]) {
                        this.dlAjax(this.lelOne, this.md5(this.paswd))
                    }
                }
            },
            /**
             * 转码
             * */
            md5(id) {
                  var a
                  var md5 = crypto.createHash('md5')
                  md5.update(id)
                  var a = md5.digest('hex')
                return a
            },
            /**
             * 登录成功
             * */
            dlAjax(le, ps) {
                let signUrl = pre_url.sign + 'v1/sign/doLoginByPwd?accessToken=121'
                let pramas = qs.stringify({
                    account: le,
                    password: ps
                })
                this.axios.post(signUrl, pramas)
                .then(res => {
                    if (res.data.errorcode == 200) {
                        /**
                         判断是否为首次登录
                         */
                        var newdata = res.data.messages.userInfo
                        this.loginState({
                        id:	newdata.userId,
                        token: res.data.messages.accessToken, 
                        name: newdata.name,
                        headSchoolId : newdata.headSchoolId ,
                        image : newdata.image,
                        sex : newdata.sex
                        })
                        
                        if (newdata.isInitPwd) {
                            this.signDeng = '再登'
                            this.userName = newdata.userId
                            this.oldpas = ps
                        } else {
                            this.$router.push('/home')
                            console.log(res)
                        }

                    } else {
                        alert('登录失败')
                    }
                })
            },
            /**
             * 修改密码
             * */
            signButtom() {
                if (this.signDeng == '再登') {
                    let arr = [false, false]
                    if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(this.newWd)) {
                        this.isphoneTwo = true
                        arr[0] = true
                    } else {
                        this.isphoneTwo = false
                        arr[0] = false
                    }
                    if (this.newWd == this.newWd2) {
                        arr[1] = true
                        this.ispassTwo = true
                    } else {
                        this.ispassTwo = false
                        arr[1] = true
                    }
                    if (arr[0] && arr[1]) {
                        this.xgAjax(this.userName, this.oldpas, this.md5(this.newWd))
                    }
                }
            },
            /**
             首次登录修改密码
             */
            xgAjax(id, old, newdata) {
                let signUrl = pre_url.sign + 'v1/sign/updatePassword?accessToken=121'
                let pramas = qs.stringify({
                    userId: id,
                    oldPassWord: old,
                    newPassWord: newdata
                })
                this.axios.post(signUrl, pramas)
                .then(res => {
                    console.log(res)
                    if (res.data.errorcode == 200) {
                        this.$router.push('/home')
                    } else {
                        alert('登录失败')
                    }
                })
            },
            /**
             把用户登录状态存入到本地
             */
            loginState(obj) {
                let userData = {
                    userId: obj.id,
                    accessToken: obj.token,
                    userName: obj.name,
                    headSchoolId: obj.headSchoolId, 
                    headSchoolBoolean : true, //是否为总校
                    userIcon : obj.image,
                    areaId : null,
					schoolId : null,
					schoolName : null,
					sex: obj.sex
                }
                userData = JSON.stringify(userData)
                localStorage.setItem('USER_INFO', userData)
            }
        },
        updata() {

        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped="">
    .sign_demo {
        width: 100%;
        height: 940px;
        /*background: url(./static/home-icon/sign_bj.png) center center no-repeat;*/
        background-size: 100% 100%;
        position: relative;
        overflow: hidden;
        .sign_bj {
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
        }
        .sign_header_bj {
            display: block;
            width: 350px;
            margin: 130px auto 0;
        }
        header {
            width: 100%;
            height: 100px;
            margin-top: 130px;
            /*background: url(./static/home-icon/sign_logo.png) center center no-repeat;*/
        }

        .sign_form {
            width: 400px;
            height: 310px;
            margin: 0 auto;
            background: #fff;
            border-radius: 6px;
            margin-top: 40px;
            box-sizing: border-box;
            padding: 30px 35px;

            h1 {
                width: 100%;
                text-align: center;
                font-size: 16px;
                color: #666;
                margin-bottom: 42px;
            }

            section {
                position: relative;

                .post_cuo {
                    position: absolute;
                    left: -220px;
                    top: 0;
                }
                .post_img {
                    position: absolute;
                    right: 10px;
                    top: 18px;
                    z-index: 10;
                }
                input {
                    width: 100%;
                    height: 40px;
                    background: #f5f5f5;
                    margin-bottom: 30px;
                    box-sizing: border-box;
                    padding-left: 14px;
                }
            }

            .jia {
                img {
                    margin: 0 0 20px 0;
                }
            }

            .sign_buttom {
                width: 100%;
                height: 40px;
                text-align: center;
                line-height: 40px;
                color: #fff;
                background: #31c17b;
                margin-bottom: 24px;
                cursor: pointer;
            }

            .sign_app {
                text-align: center;
                color: #666;
                cursor: pointer;
            }
        }

        .app_form {
            width: 400px;
            height: 410px;
            margin: 0 auto;
            background: #fff;
            border-radius: 6px;
            margin-top: 40px;
            box-sizing: border-box;
            padding: 30px 35px;

            h1 {
                text-align: center;
                font-size: 16px;
                color: #666;
            }

            p {
                display: flex;
                justify-content: center;
                margin: 30px 0;
                color: #666;

                span {
                    padding: 0 15px;
                    cursor: pointer;
                    &:first-child {
                        border-right: 1px solid #ccc;
                    }
                }
            }

            div {
                img {
                    display: block;
                    margin: 0 auto;
                    cursor: pointer;
                }
            }

            section {
                margin-top: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 22px;
                span {
                    display: block;
                    height: 10px;
                    border-right: 1px solid #ccc;
                    margin: 0 16px;
                    cursor: pointer;
                }
                img {
                    cursor: pointer;
                }
            }

            .fan_sign {
                text-align: center;
                font-size: 16px;
                color: #ccc;
                cursor: pointer;
            }
        }

        .sign_fromtwo {
            width: 400px;
            height: 410px;
            margin: 0 auto;
            background: #fff;
            border-radius: 6px;
            margin-top: 40px;
            box-sizing: border-box;
            padding: 30px 35px;

            h1 {
                text-align: center;
                color: #31c17b;
                font-size: 16px;
            }
            h2 {
                text-align: center;
                margin-top: 30px;
                color: #666;
                margin-bottom: 30px;
            }

            section {
                position: relative;

                .post_cuo {
                    position: absolute;
                    left: -220px;
                    top: 0;
                }
                .post_cuo2 {
                    left: -424px;
                }
                .post_img {
                    position: absolute;
                    right: 10px;
                    top: 18px;
                    z-index: 10;
                }
                input {
                    width: 100%;
                    height: 40px;
                    background: #f5f5f5;
                    margin-bottom: 30px;
                    box-sizing: border-box;
                    padding-left: 14px;
                }
            }

            .sign_buttom {
                width: 100%;
                height: 40px;
                text-align: center;
                line-height: 40px;
                color: #fff;
                background: #31c17b;
                margin-top: 20px;
                margin-bottom: 24px;
                cursor: pointer;
            }

            .sign_app {
                text-align: center;
                color: #666;
                cursor: pointer;
            }
        }
    }

    .active {
        color: #31c17b;
    }

</style>