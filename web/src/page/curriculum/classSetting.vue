<template>
	<div id="a">
		<classSettingchild></classSettingchild>
		<router-view></router-view>
	</div>
</template>

<script>
	import classSettingchild from "@/page/curriculum/classSettingchild"
	export default {
		data(){
			return{

			}
		},
		components:{
			classSettingchild
		}

	}
</script>

<style scoped>
	*{
		font-size: 14px;
	}
	span{
		display: inline-block;
	}
	.box-1{
		/*width: 1040px;*/
		background: white;
		border-radius: 4px;
		margin-bottom: 12px;
		padding-top: 16px;
		padding-bottom: 20px;
	}
	.box2{
		/*width: 1040px;*/
		/*height: 82px;*/
		line-height: 82px;
		background: white;
		border-radius: 4px;
		color: #5ACE96;
		padding-left: 20px;
	}
	.text-1{
		color: #5ACE96;
		margin: 0 16px 20px 0px;
	    margin: 0 auto;
	}
	.container-1{
		/*width: 1000px;*/
		margin: 0 auto;
		height: 54px;
		line-height: 54px;
		/*padding-top: 26px;*/
	}
	
	.item{
		margin: 0 16px 20px 0px;
	}
	.it1{
		height: 22px;
		line-height: 22px;
		border-radius: 22px;
		color: gray;
		font-size: 14px;
	}
	.icon-2{
		font-size: 18px;
		color: #B9B9B9;
		visibility: hidden;
		cursor: pointer;
	}
	.icon-2:hover{
		color: #4ED79F;
		transition: all 0.3s;
	}
	.it3{
		width: 22px;
		height: 22px;
		line-height: 22px;
		text-align: center;
		border-radius: 50%;
		border: 1px solid #50D79F;
	}
	input{
		border: none;
		border-bottom: 1px solid #50D79F;
		outline: none;
		width: 110px;
		padding-left: 4px;
	}
	.right{
		font-size: 24px;
		color: #50D79F;
		margin-left: 570px;
		cursor: pointer;
	}
	.right-s{
		font-size: 20px;
	}
	.icon-bianji{
		font-size: 24px;
	}
</style>
