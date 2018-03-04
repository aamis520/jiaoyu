<!--
	使用文案
	1.父级
	import fontTooltip from '@components/fontTooltip'
	components: {
		'font-tooltip':fontTooltip,
    },
	2.data//对象
	sendChildTipDate:[
		{
			index:0,//只是方便父级使用,可能当前页面有多个tip,子集没用,
			title:'薪酬扣减·设置',//父级方便看当前定义的那个tip，子集没用
			width:'',//修改宽度，可为空默认350，高度自适应
			contentFont:'展示的文字'//展示的文字
		}
	],
	注意：contentFont可为纯文本，或html
	若为html可用const定义一个常量font
	const font = `跨校报名，指新生在A校区咨询，在B校区缴费；或A校区在读生，报B校区课程的行为<br />跨校转班，指某学生由A校区某班，转入B校区某班的行为<br />跨校试听，指某学生在A校区咨询课程，到B校区试听的行为<br />跨校转费，指A校区的某学生把账户余额转到B校区的另一学生账户的行为<br />`;
	修改 contentFont:font//展示的文字
	3.页面使用
	<font-tooltip :parentDate="sendChildTipDate[0]"></font-tooltip>
-->
<style lang="less" scoped="scoped">
	.icoPosi{
		position: relative;
		top: 4px;
		.bigBox{
			display: none;
		}
		.tip {
            width: 350px;
		    line-height: 23px;
		    background: #31c27c;
		    position: absolute;
		    color: #fff;
		    left: -47px;
		    bottom: 30px;
            border-radius: 5px;
            box-shadow: 0 0 15px #31c27c;
            padding: 10px;
            z-index: 50;
            p {
                font-size: 14px;
                position: relative;
                color: #fff;
                padding: 0;
                margin: 0;
            }
        }
        span {
            position: relative;
            left: -10px;
    		bottom: 23px;
            width: 0;
            height: 0;
            display: block;
            border: 20px solid transparent;
            border-top: 20px solid #31c27c;
        }
	}
</style>

<template>
	<i class="ico-init ico-notes icoPosi">
		<div class="bigBox"><!--只是为了显示隐藏-->
			<div class="tip" :style="styleDate">
	            <p v-html="fontDate"></p>
	        </div>
	        <span></span>
		</div>
	</i>
</template>

<script>
	export default{
		props:{
			parentDate:{}//接受父组件传过来的值
		},
		data(){
			return{
			}
		},
		mounted(){
			//鼠标经过显示tip框，点击切换红色对号
	        $('.icoPosi').hover(function () {
	            $(this).find('.bigBox').show()
	        }, function () {
	            $(this).find('.bigBox').hide()
	        })
	        //console.log(this.parentDate)
		},
		computed:{
			fontDate(){
				return this.parentDate.contentFont
			},
			styleDate(){
				let obj = {}
				obj={
				    width: this.parentDate.width
				}
				return obj
			}
		},
		
	}
</script>

