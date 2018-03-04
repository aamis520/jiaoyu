<style lang="less" scoped="scoped">
	@color :#31C17B;
	@font12:12px;
	@font14:14px;
	@font16:16px;
	.tcBigBox {
	    position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background: rgba(0, 0, 0, 0.5);
	    z-index: 100;
        .tcContent {
            width: 320px;
		    padding: 10px 20px;
		    box-sizing: border-box;
		    position: absolute;
		    left: 50%;
		    top: 50%;
		    margin-left: -160px;
		    transform: translateY(-50%); 
		    border-radius: 6px;
		    background: #fff;
        }
        .tcTitle {
            text-align: center;
            color: @color;
            margin-top: -10px;
        }
        .tcContentBox {
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            line-height: 1.5;
            .subAge{
    			padding: 2px 18px;
			    background: #F2F5F8;
			    color: #666;
			    margin: 10px;
			    margin-bottom: 20px;
			    border-radius: 16px;
			    border: 1px solid transparent;
			    cursor: pointer;
            }
            .tcAgeLine{
            	width: 100%;
            	height: 1px;
            	background-color: @color;
            }
            .borderColor{
            	border-color: @color;
            	color: @color;
            }
        }
        .saveAgeBtn{    
        	width: 100%;
		    height: 35px;
		    text-align: center;
		    i.ico-duigou{
		    	position: static !important;
		    	width: 25px;
    			height: 25px;
		    }
    	}
    }
    .tcBigBox{
    	.tcAge{
	    	width: 420px;
	    	margin-left: -210px;
	    	.subAge{
	    		width: 16px;
			    text-align: center;
	    	}
	    }
    }
</style>
<template>
	<div class="tcBigBox">
        <div class="tcContent">
            <div class="tcTitle">年级</div>
            <div class="tcContentBox">
                <span class="subAge" :class="{'borderColor': ele.status==='enable'}" v-for="(ele,index) in getParentDate" @click="changeChoose(ele)">{{ele.ch_name}}</span>
            </div>
            <div class="saveAgeBtn"><i class="ico-init ico-duigou" @click="closeTanceng"></i></div>
        </div>
    </div>
</template>

<script>
	export default{
		props:{
			parentDate:{}
		},
		data(){
			return{
				getParentDate:[],//存放父级数据			
			}
		},
		mounted(){
			this.getParentDate=this.parentDate
		},
		computed:{
			ageModelData(){
				return this.parentData;
			}
		},
		methods:{
			changeChoose(ele){
				ele.status = ele.status==='enable' ? 'disable':'enable'
			},
			closeTanceng(){
				this.$emit("listenToChild")
			}
		}
	}
</script>

