<template>
	<div>
		<div class="newahead_top">
			<router-link active-class="actio" :to="{path:'/comprehensive/approvalSetting/newa/headquarter'}" tag="p" >总部部门</router-link>
			<router-link active-class="actio" :to="{path:'/comprehensive/approvalSetting/newa/ranch'}" tag="p">大区部门</router-link>
			<router-link active-class="actio" :to="{path:'/comprehensive/approvalSetting/newa/section'}" tag="p">地区部门</router-link>
			<router-link active-class="actio" :to="{path:'/comprehensive/approvalSetting/newa/parameters'}" tag="p">设立了部门的分校</router-link>
			<router-link active-class="actio" :to="{path:'/comprehensive/approvalSetting/newa/noparameters'}" tag="p">没有设立部门的分校</router-link>
		</div>
		<div class="newahead_cont">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.actio{
		color: #666666 !important; border-bottom: 1px  solid ; 
	}
	.newahead_top{
		width: 100%; height: 50px; background: white; font-size: 14px; 
		display: flex; border-top-left-radius: 8px; border-top-right-radius: 8px;
		
		p{
			padding: 16px 22px; color: #31C27C; cursor: pointer;
		}
	}
	.newahead_cont{
		margin-top: 1px;
	}
	
</style>