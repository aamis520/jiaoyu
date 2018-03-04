<template>
	<div class="whole">
        <ul class="whole-ul">
            <li>
                <div class="li-left">
                    <p class="number">001</p>
                    <dl class="entry">
                        <dd>
                            <span>初一语文精品052班</span>
                            <span class="pag">17暑</span>
                        </dd>
                        <dt>
                            <span class="pag-t">上期</span>
                            <span class="top">10</span>
                            <span class="pag-d">下期</span>
                            <span class="top">10</span>
                        </dt>
                    </dl>
                </div>
                <div class="li-right">
                    <div class="teacher">
                        <div class="teacher-p">教师：
                            <p class="zhuan">王晓丹</p>
                        </div>
                        <p class="teacher-p">
                            首课：17-06-06
                        </p>
                        <p class="teacher-p">
                            催欠<span class="red">2</span>人
                        </p>
                    </div>
                    <div class="adviser">
                        <p class="guan">
                            班主任：林伟文
                        </p>
                        <p class="teacher-p">
                            进度：<span class="green">8</span>/30
                        </p>
                        <p class="teacher-p">
                            催续<span class="red">7</span>人
                        </p>
                    </div>
                    <div class="people">
                        <p class="teacher-p">
                            人数：<span class="green">27</span>/30
                        </p>
                        <p class="people-p">
                            申退<span class="red">1</span>人
                        </p>
                    </div>
                </div>
            </li>
            <li>
                <div class="li-left">
                    <p class="number">002</p>
                    <div class="short">
                        <div>
                            <span>初一语文精品052班</span>
                            <span class="pag">17暑</span>
                        </div>
                        <div>
                            <span class="pag-t">上期</span>
                            <span class="top">10</span>
                            <span class="pag-d">下期</span>
                            <span class="top">10</span>
                        </div>
                    </div>
                </div>

                <div class="li-right">
                    <div class="teacher">
                        <div class="teacher-p">教师：
                            <p class="zhuan">王晓丹</p>
                        </div>
                        <p class="teacher-p">
                            首课：17-06-06
                        </p>
                        <p class="teacher-p">
                            催欠<span class="red">2</span>人
                        </p>
                    </div>
                    <div class="adviser">
                        <p class="guan">
                            班主任：林伟文
                        </p>
                        <p class="teacher-p">
                            进度：<span class="green">8</span>/30
                        </p>
                        <p class="teacher-p">
                            催续<span class="red">7</span>人
                        </p>
                    </div>
                    <div class="people">
                        <p class="teacher-p">
                            人数：<span class="green">27</span>/30
                        </p>
                        <p class="people-p">
                            申退<span class="red">1</span>人
                        </p>
                    </div>
                </div>
            </li>
            <li>
                <div class="li-left">
                    <p class="number">002</p>
                    <div class="short">
                        <div>
                            <span>初一语文精品052班</span>
                            <span class="pag">17暑</span>
                        </div>
                    </div>
                </div>

                <div class="li-right">
                    <div class="teacher">
                        <div class="teacher-p">教师：
                            <p class="zhuan">王晓丹</p>
                        </div>
                        <p class="teacher-p">
                            首课：17-06-06
                        </p>
                        <p class="teacher-p">
                            催欠<span class="red">2</span>人
                        </p>
                    </div>
                    <div class="adviser">
                        <p class="guan">
                            班主任：林伟文
                        </p>
                        <p class="teacher-p">
                            进度：<span class="green">8</span>/30
                        </p>
                        <p class="teacher-p">
                            催续<span class="red">7</span>人
                        </p>
                    </div>
                    <div class="people">
                        <p class="teacher-p">
                            人数：<span class="green">27</span>/30
                        </p>
                        <p class="people-p">
                            申退<span class="red">1</span>人
                        </p>
                    </div>
                </div>
            </li>
            <li></li>
        </ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		beforeCreate() {},

		mounted() {
//            if($('.short').children)
            console.log($('.short').eq(1).children().length);
		}
	}
</script>
<style lang="less" scoped>
    .whole{
        width: 1008px;
        height: 100%;
    }
    .whole-ul{
        li{
            width: 1008px;
            height: 146px;
            border-radius: 4px;
            background: #fff;
            margin-top: 12px;
        }
        li:first-child{
            margin-top: 0;
        }
    }
    .li-left{
        width: 357px;
        height:146px;
        float: left;
        box-sizing: border-box;
    }
    .number{
        font-size: 9px;
        color: #666666;
        margin-top: 15px;
        margin-left: 15px;
    }
    .short{
        width:300px;
        height: 60px;
        margin-left: 57px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .entry{
        margin-top: 20px;
        margin-left: 57px;
        border-right: 1px solid #d4e7f1;
    }
    .pag{
        display: inline-block;
        width: 42px;
        height: 16px;
        background: #ffbd4b;
        border-radius: 10px;
        font-size: 9px;
        text-align: center;
        line-height: 16px;
        color: #fff;
        margin-left: 5px;
    }
    .pag-t{
        display: inline-block;
        width: 42px;
        height: 16px;
        background: #bbbbbb;
        border-radius: 10px;
        font-size: 9px;
        text-align: center;
        line-height: 16px;
        color: #fff;
    }
    .pag-d{
        display: inline-block;
        width: 42px;
        height: 16px;
        background: #31c27c;
        border-radius: 10px;
        font-size: 9px;
        text-align: center;
        line-height: 16px;
        color: #fff;
        margin-left: 5px;
    }
    .entry dt{
        margin-top: 22px;
    }
    .top{
        font-size: 9px;
        color: #666666;
    }
    .li-right{
        width: 651px;
        height:146px;
        float: left;
        box-sizing: border-box;
        display: flex;
    }
    .teacher{
        width:244px;
        height: 146px;
        padding-left: 31px;
    }
    .teacher-p{
        margin-top: 20px;
        font-size: 14px;
        color: #666;
        display: flex;
    }
    .zhuan{
        width: 68px;
        float: left;
        background: url("../../../assets/archives/3.4.png") no-repeat 45px 1px;
    }
    .guan{
        margin-top: 20px;
        font-size: 14px;
        color: #666;
        background: url("../../../assets/archives/3.5.png") no-repeat 105px 1px;
    }
    .red{
        color: #ff4141;
    }
    .green{
        color: #3ec684;
    }
    .adviser{
        width: 210px;
        height: 146px;
    }
    .people-p{
        margin-top: 60px;
        font-size: 14px;
        color: #666;
    }
</style>
