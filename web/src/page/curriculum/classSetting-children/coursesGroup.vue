<template>
	<div>
		<div class="compile">
			<img src="../../../assets/help.png" alt="">
		</div>
		<div class="coursesGroup-top">
			<P>
				<span>如果校方的两个课程链相互之间有升级关系，请在本页面设置</span>
				<span><img src="../../../assets/trash.png"/></span>
			</P>
			<p>
				<i>课链组合</i>
				<span id="it" class="span"><input type="text" placeholder="课程链编号" />
                +<input type="text" placeholder="课程链编号" /></span>
				<img src="../../../assets/images/add.png" class="tianjia" />
			</p>
			<p>
				<el-button type="text" @click="open">
					<img src="../../../assets/SmallduiGou.jpg" />
				</el-button>
			</p>
		</div>

		<div class="coursesGroup-botton">
			<P>
				<span>已组合课程链-(001+002)</span>
				<el-button type="text" @click="open3">
					<span><img src="../../../assets/trash.png"/></span>
				</el-button>

			</P>
			<p>
				<span>四年级数学·6期数·2个班型</span><i><img src="../../../assets/images/long_jt.png"/></i>
				<span>五年级数学·6期数·2个班型</span><i><img src="../../../assets/images/long_jt.png"/></i>
				<span>六年级数学·6期数·2个班型</span> <i><img src="../../../assets/images/long_jt.png"/></i>
				<span>六年级数学·6期数·2个班型</span><i><img src="../../../assets/images/long_jt.png"/></i>
				<span>六年级数学·6期数·2个班型</span>
			</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		mounted: function() {
			$(".tianjia").click(function() {
				var abc = "";
				abc += "+<input type='text' placeholder='课程链编号' class='span'>";
				$("#it").append(abc)
			})
		},
		methods: {
			open() {
				this.$alert('请输入正确的课程编码号', '提示', {
					confirmButtonText: '确定',
				});
			},

			open2() {
				this.$confirm('您确定要永久删除此课程链组合吗?删除后原来各自的课程链仍然存在，并各自运行', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			open3() {
				this.$confirm('您还有未保存的内容，确认关闭吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '关闭成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消关闭'
					});
				});
			},
		}
	}
</script>

<style lang="less" scoped>
	* {
		font-size: 14px;
	}
	
	.compile {
		position: absolute;
		right: 30px;
		top: -45px;
		cursor: pointer;
	}
	
	.coursesGroup-top {
		width: 1008px;
		background: white;
		padding: 0 30px;
		margin-bottom: 12px;
		p:nth-child(1) {
			border-bottom: 1px dashed #EEEEEE;
			height: 54px;
			line-height: 54px;
			display: flex;
			justify-content: space-between;
			span {
				display: block;
			}
		}
		P:nth-child(2) {
			padding-bottom: 70px;
			padding-top: 12px;
			input {
				margin: 0 10px;
			}
		}
		p:nth-child(3) {
			margin-left: 920px;
			padding-bottom: 20px;
		}
	}
	
	.coursesGroup-middle {
		width: 1008px;
		background: white;
		padding: 0 30px;
		margin-bottom: 12px;
		p:nth-child(1) {
			border-bottom: 1px dashed #EEEEEE;
			height: 54px;
			line-height: 54px;
			display: flex;
			justify-content: space-between;
			span {
				display: block;
			}
		}
		P:nth-child(2) {
			padding-bottom: 20px;
			padding-top: 12px;
			input {
				margin: 0 10px;
			}
		}
		.dui {
			margin-left: 920px;
			padding-bottom: 20px;
		}
		ul {
			li {
				line-height: 40px;
				span:nth-child(1) {
					padding-right: 20px;
				}
			}
		}
	}
	
	.coursesGroup-botton {
		width: 1008px;
		background: white;
		padding: 0 30px;
		margin-bottom: 12px;
		p:nth-child(1) {
			border-bottom: 1px dashed #EEEEEE;
			height: 54px;
			line-height: 54px;
			display: flex;
			justify-content: space-between;
			span {
				display: block;
			}
		}
		P:nth-child(2) {
			line-height: 40px;
		}
	}
	
	input {
		border-bottom: 1px solid #31c27c;
	}
</style>