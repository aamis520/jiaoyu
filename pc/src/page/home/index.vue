<style scoped lang="less">
    .container {
        height: 940px;
        background-size: 100% 100%;
        padding-top: 20px;
        .logo_box {
            width: 288px;
            height: 90px;
            line-height: 90px;
            margin: 0 auto 20px;
            color: #fff;
            span {
                display: inline-block;
            }
            .logo {
                width: 90px;
                height: 90px;
                vertical-align: top;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .name {
                font-size: 30px;
                margin-left: 10px;
            }
        }
        .search {
            display: flex;
            align-items: center;
            width: 750px;
            height: 48px;
            line-height: 48px;
            margin: 0 auto;
            background: rgba(250, 250, 250, 0.4);
            padding-left: 20px;
            color: rgba(250, 250, 250, 0.8);
            font-size: 16px;
            border-radius: 4px;
            input {
                width: 220px;
                color: #333;
                border: none;
                background: none;
                font-size: 14px;
                padding: 0 10px;
            }
        }
        .main {
            width: 1148px;
            height: 495px;
            margin: 0 auto;
            background: rgba(250, 250, 250, 0.4);
            margin-top: 106px;
            padding: 0 25px;
            font-size: 14px;
            position: relative;
            border-radius: 4px;
            .top {
                display: flex;
                justify-content: space-between;
                height: 56px;
                line-height: 56px;
                padding-bottom: 7px;
                border-bottom: 1px solid #e0e0e0;
                span {
                    background: none;
                    color: #303030;
                    font-size: 14px;
                    line-height: 56px;
                }
                .L {
                	position: relative;
                    a {
                        color: #fff;
                    }
                    .photo {
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        border: 2px solid #eee;
                        margin-top: 10px;
                        margin-right: 15px;
                        vertical-align: top; 
                        background-size: 100% 100%;
                        cursor: pointer;
                        overflow: hidden;
                        img{
                        	width: 100%;
                        	height: 100%;
                        }
                    }
                    .photo2{
                    	position: absolute;
                    	bottom: 0;
                    	right: 0;
                    }
                    .photo3{
                    	position: absolute;
                    	width: 86px;
                    	height: 35px;
                    	background: #FFFFFF;
                    	border-radius: 4px;
                    	bottom: -42px;
                    	left: -24px;
                    	text-align: center;
                    	line-height: 35px; 
                    	cursor: pointer;
                    	z-index: 10;
                    	display: flex;
                    	justify-content: center;
                    	align-items: center;
                    	b{
                    		color: #666;
                    		height: 14px;
    						line-height: 14px;
    						&:hover{
    							background: #d1d8ef;
    						}
                    	}
                    }
                    .photo4{
                    	border: 6px solid rgba(250,250,250,0);
                    	border-bottom: 6px solid #fff;
                    	position: absolute;
                    	bottom: -7px;
                    	left: 14px;
                    }
                    .user_name{
                    	position: absolute;
                    	    bottom: -5px;
						    left: 79px;
						    width: 100px;
						    font-size: 16px; 
						    color: #666;
                    }
                }
                .C {
                    width: 160px;
                    height: 56px;
                    padding-top: 35px;
                    display: flex;
                    justify-content: space-between;
                    color: #303030;
                    span {
                        /*padding-top: 35px;*/
                        cursor: pointer;
                        height: 21px;
                        line-height: 12px;
                    }
                    .on {
                        color: #31c27c;
                        border-bottom: 1px solid #31c27c;
                    }
                }
                .R {
                    position: relative;
                    color: #fff;
                    span {
                        color: #fff;
                        cursor: pointer;
                    }
                    img {
                        vertical-align: middle;
                        margin-left: 14px;
                    }
                    .set_box {
                        width: 120px;
                        height: 66px;
                        line-height: 66px;
                        background: rgba(250, 250, 250, 0.4);
                        position: absolute;
                        top: -74px;
                        right: -36px;
                        border-radius: 6px;
                        padding: 0 6px;
                        display: none;
                        a {
                            display: inline-block;
                            color: #333;
                            line-height: 66px;
                            img {
                                vertical-align: middle;
                                margin-right: 10px;
                            }
                        }
                        a:hover {
                            color: #fff;
                        }
                        a:nth-of-type(1) {
                            margin-right: 20px;
                        }
                        .arrow {
                            width: 0px;
                            height: 0px;
                            border-top: 6px solid rgba(250, 250, 250, 0.4);
                            border-right: 6px solid transparent;
                            border-bottom: 6px solid transparent;
                            border-left: 6px solid transparent;
                            margin-left: 89px;
                        }
                    }
                }
            }
            .body {
                .functionMenu {
                    a {
                        display: inline-block;
                        width: 122px;
                        height: 54px;
                        line-height: 54px;
                        text-align: center;
                        margin-left: 12px;
                        margin-top: 12px;
                        color: #333;
                        text-decoration: none;
                        img {
                            vertical-align: middle;
                            margin-right: 5px;
                        }
                    }
                    a:hover {
                        color: #fff;
                        background: rgba(250, 250, 250, 0.2);
                    }
                    & > p > a:nth-of-type(1) {
                        margin-left: 0;
                    }
                }
                .dataCenter {
                    display: none;
                }
            }
        }
        .about {
            width: 100px;
            text-align: center;
            margin: 40px auto 0;
            cursor: pointer;
            img {
                vertical-align: middle;
                margin-left: 5px;
                width: 14px;
            }
            a {
                color: #fff;
            }
        }
        .act1 {
            color: white;
        }
        .act2 {
            background: #31c27c;
            color: white;
        }
        .skin {
            position: absolute;
            bottom: 0;
            right: 0;
            cursor: pointer;
        }
    }
</style>

<template>

    <div class="container" :style="{backgroundImage:'url('+img+')'}">

        <div class="logo_box">
            <span class="logo"><img src="../../images/home-icon/1_03.png"/></span>
            <span class="name">小银星艺术团</span>
        </div>

        <div class="search">
            生<input type="text"/> 师
            <input type="text"/> 班
            <input type="text"/>
        </div>

        <div class="main">

            <div class="top">

                <div class="L">
                    <span class="photo" @click="isZX = !isZX"> 
                    	<img v-if="localStorageData.userIcon != null" :src="localStorageData.userIcon" alt="" />
                    	<img v-else-if="localStorageData.userIcon == null && localStorageData.sex == null" src="../../images/home-icon/te_man.png" alt="" />
                    	<img v-else-if="localStorageData.userIcon == null && localStorageData.sex == 'male'" src="../../images/home-icon/te_man.png" alt="" />
                    	<img v-else="localStorageData.userIcon == null && localStorageData.sex == 'female'" src="../../images/home-icon/te_girl.png" alt="" />
                    </span>
                    <img src="../../images/home-icon/zxzh.png" alt="" class="photo2" />
                    <div class="photo3" v-if="isZX" @click="userOut">
                    	<b>注销账号</b> 
                    </div>
                    <span class="photo4" v-if="isZX"></span>
                    <div class="user_name">
                    	{{localStorageData.userName}}
                    </div>
                    <!--<router-link :to="{path:'/admin'}">e-办公</router-link>-->
                </div>

                <div class="C" id="tab">
                    <!--<span class="on">功能菜单</span>
                    <span>数据中心</span>-->
                </div>

                <div class="R">
                    <span>
						{{schoolName}}
                    	<img src="../../images/home-icon/qiehuan1.png" alt="" @click="homeClick"/>
                    </span>
                    <span id="set"><img src="../../images/home-icon/shezhi3.png"/></span>
                    <div class="set_box" ng-if="status">
                        <router-link active-class="act1" :to="{path:'/branCampus'}" v-if="shcoolClass == 'FX' || shcoolClass == 'DQ'">
                            <img src="../../images/home-icon/school.png" alt="" />分校设置
                        </router-link>
                        <router-link active-class="act1" :to="{path:'/systemHead'}" v-if="shcoolClass == 'ZB'">
                            <img src="../../images/home-icon/school2.png" alt="" />总校设置
                        </router-link>
                        <div class="arrow"></div>
                    </div>
                </div>

            </div>

            <div class="body">
                <div class="functionMenu"> 
                    <p>
                        <router-link active-class="act2" :to="{path:'/perArchives'}">
                            <img src="../../images/home-icon/k.png"/>人事档案
                        </router-link>
                        <router-link active-class="act2" :to="{path:'/financeReport'}">
                            <img src="../../images/home-icon/n.png"/>财务报表
                        </router-link>
                        <router-link active-class="act2" :to="{path:'/homeSchint'}">
                            <img src="../../images/home-icon/r.png"/>家校互联
                        </router-link> 
                        <router-link active-class="act2" :to="{path:'/Summary'}">
                            <img src="../../images/home-icon/07.png"/>汇总统计
                        </router-link>
                        <router-link active-class="act2" :to="{path:'/classA'}">
                            <img src="../../images/home-icon/h.png"/>班级档案
                        </router-link> 
                        <router-link active-class="act2" :to="{path:'/numHandle'}"><!--付延兵-->
                            <img src="../../images/home-icon/h.png"/>数字处理测试
                        </router-link> 
                    </p>
                </div>
                <div class="dataCenter">22</div>
            </div>

            <div class="skin">
                <img src="../../images/home-icon/bang2.png"/>
            </div>
        </div>

        <div class="about">
            <router-link :to="{path:'/about'}">了解事库<img src="../../images/home-icon/666.png" alt=""/></router-link>
        </div>
		
		<v-switch v-if="schoolShow" ></v-switch>
    </div>

</template>

<script>

    import {mapState} from 'vuex'
    import homeSwitch from './homeSwitch'

    export default {
        data() {
            return {
                img: require('../../images/home-icon/bj.png'), 
                isZX: false, 
                localStorageData:{}
            }
        },
        computed: { 
			...mapState({
			    shcoolClass: state => state.home.shcoolClass,
			    schoolName : state => state.home.schoolName,
			    schoolShow : state => state.home.schoolShow
			 }) 
        },
        components: {
			'v-switch' : homeSwitch
		},
		methods: {
			homeClick() {
				this.$store.commit('SET_SHCOOLSHWOT') 
				
			},
			userOut(){
				localStorage.removeItem('USER_INFO')
				this.$router.push('/sign')
			}
		},
        mounted: function () {
            $('#set').click(function () {
                $('.set_box').toggle()
            })
            $('#tab').on('click', 'span', function () {
                $(this)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
                $('.body>div')
                    .eq($(this).index())
                    .show()
                    .siblings()
                    .hide()
            })
            
            //根据登录的username来获取总校id，分校id，用户权限
            if(localStorage.USER_INFO){
            	this.localStorageData = JSON.parse(localStorage.USER_INFO)
            }
           
        }
    }
</script>
