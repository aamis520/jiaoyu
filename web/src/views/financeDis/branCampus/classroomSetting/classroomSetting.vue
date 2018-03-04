<template>
	<div class="class_room"> 
					<v-table icon="bdj" :list="list1" @pageInit="pageInit"></v-table>  
	</div>
</template>
	
<script>
import cont from '../../../common/const'
import classroomComponents from "./classroomComponents"
import qs from 'qs'
export default {
	components: {
		'v-table': classroomComponents
	},
	data() {
		return {
			activeName2: 'first',
			//班级列表
			list1: {
				total: 100,
				data: []
			}
		}
	},
	methods: {
		handleClick(tab, event) {
			//console.log(tab, event);
		},

		/**
		 * 页面初始化
		 */
		pageInit(valid_num) {
			let pageInitUrl = cont.campus+"v1/campus/classroom/selectClassRoomBySchoolId?accessToken=aaaa&head_id=" + this.$ls.get("USER_INFO").headSchoolId
			let pageInitparmes = qs.stringify({ 
				pageSize: 10,
				pageNo: valid_num, 
				schoolId: "2"
			}) 

			this.axios.post(pageInitUrl, pageInitparmes)
				.then(res => {
					//console.log(res.data.messages.data)
					this.list1.total = res.data.messages.data.totalCount 
					this.list1.data = res.data.messages.data.datas 
				},
				res => {
					alert("网络繁忙 ！请刷新重试 ！")
				})
		}
	},
	mounted() {
		this.pageInit(1)
		this.$store.commit("xgSchoolTitle",'教室设置')
	}
}
</script>

<style   lang="less">
.class_room {
	height: 626px;
	background: #fff ! important;
	overflow: hidden;

	.el-tabs__nav {
		position: relative;
		transition: transform .3s;
		/* float: left; */
		/* margin: 0 auto; */
		margin-top: 0px;
		margin-left: 50%;
		transform: translateX(-50%) ! important;
	}

	.el-tabs__header {
		height: 69px;
	}

	.el-tabs__item {
		padding: 0 32px;
		margin: 0 14px;
		height: 26px;
		box-sizing: border-box;
		line-height: 26px;
		display: inline-block;
		list-style: none;
		font-size: 14px;
		color: rgb(131, 165, 153);
		position: relative;
		border-radius: 13px;
		background: #e0e0e0;
	}

	.el-tabs__item.is-active {
		background: #31c27c;
		color: #fff;
		border-radius: 13px !important;
	}

	.el-tabs__content {
		overflow: hidden;
		position: relative;
		width: 100%;
		height: 556px;
		overflow-y: auto;
	}

	.el-tabs__header {
		border-bottom: 1px solid rgb(209, 229, 221);
		padding: 0;
		position: relative;
		margin: 0;
	}

	.el-tabs__header {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.el-tabs--card>.el-tabs__header .el-tabs__nav {
    /* border: 1px solid #dfe4ed; */
    border: none;
    border-radius: 4px 4px 0 0;
    } 
    
    
}
</style>