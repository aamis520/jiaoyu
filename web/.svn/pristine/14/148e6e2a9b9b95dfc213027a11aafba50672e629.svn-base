	<template>
		<div class="common">
			<div class="param"><span>{{declarationObj.thing}}参数选择</span></div>
			<div class="param-detail">
				<ul>
					<li><el-checkbox ></el-checkbox>&nbsp;<span>≤&nbsp;</span><span><input type="text" name="">天</span></li>
					<li><el-checkbox ></el-checkbox>&nbsp;<input type="text" name=""><span>天 &lt;&nbsp; 天数</span><span><input type="text" name="">天</span>
					<img src="../../../assets/add5.png"></li>
					<li><el-checkbox ></el-checkbox><span>&nbsp;≥&nbsp;</span><span><input type="text">天</span><img src="../../../assets/confirm_normal.png" style="margin-left: 20px;" @click="closeModal"></li>
				</ul>
			</div>
		</div>
	</template>
	<script type="text/javascript">
		export default{
			data(){
				return {}
			},
			props:['declarationObj'],
			methods:{
				closeModal(){
					this.$emit('closeModal')
				}
			}
		}
	</script>
	<style lang="less" scoped>
	 .common{
	 	width: 500px;
	 	height: 100px;
	    background-color:rgba(0,0,0,0.5);
	 	border-radius: 6px;
	 	.param{
	     width: 100%;
	     padding: 20px;
	     span
		   {  margin-left:4px;
		   	  color: #fff;
		   	  font-size: 12px;
		     }
		}
		.param-detail{
			width: 100%;
			ul {
			display: flex;
			justify-content: space-around;
			align-items: center;
			li{
			display: flex;
			align-items: center;
			    img{
			   width: 18px;
			   height: 18px;
			   margin: 0 10px;
		           }
		         span{
			      font-size: 12px;
			      color: #fff;
		        }
		        input{
		        	width: 40px;
		        	border-bottom:1px solid #fff;
		        }
		     }
		  }
		}
	 }
		


	</style>