<template>
	<div class="account">
		<ul class="ul_list">
			<li v-for="(ele,index) in tableData" :key="index">
				<span>{{subString(index,pagedata)}}</span>
				<span> 
          <img v-if="ele.teacer_type === 'fullTime'" src="../../../../images/system-campus/qzbg.png"></img>
          <img v-else-if="ele.teacer_type === 'partTime'" src="../../../../images/system-campus/jzbg.png"></img>
          <!--实习和培训图片没有  -->
          <!-- <img v-else-if="ele.teacer_type === 'practice'" src="../../../../images/system-campus/jz.png"></img>
                  <img v-else-if="ele.teacer_type === 'Training'" src="../../../../images/system-campus/jz.png"></img> -->
          <div v-else></div>
          {{ele.full_name}}
        </span>
				<span>{{ele.account}}</span>
				<span class="span_work">
          <p v-for="(ele,index) in ele.school_roles" :key="index">{{ele.role_name}}</p>
        </span>
				<span class="last_span_btn">
          <el-switch v-model="ele.enable" active-color="#13ce66" inactive-color="#ff4949" @change="switchbtn(ele.enable , ele.id ,ele ,index)">
          </el-switch>
        </span>
			</li>
		</ul>
		<el-pagination class="pages_bottom" @current-change="handleCurrentChange" :page-size="10" layout="total, prev, pager, next" :total="total">
		</el-pagination>
		
		
		<!--弹窗自己写-->
		<div class="table_zd" :style="{ width: windowWidth + 'px' }" v-if="tableShow">
			<section>
				<h1>提示
					<img src="../../../../images/system-campus/close.jpg"@click="close" />
				</h1>
				<img src="../../../../images/system-campus/classtishi.gif" class="R">
				<h2>{{dataOne}}</h2>
				<p>
					<img src="../../../../images/system-campus/table_c.png" alt="" @click="close" />
					<img src="../../../../images/system-campus/table_d.png" alt="" @click="ok" />
				</p>
			</section>
		</div>
	</div>
</template>

<script>
	import cont from '../../../../base/commonJS/const' 
	export default {
		data() {
			return {
				windowWidth: '0',
				dataOne: "您确认关闭此账号吗？该账号对应的全部功能也会被同时关闭。", 
				show_hdeader: false,
				value2: true,
				total: 0,
				pagedata: 1,
				tableData: [],
				headSchoolId: this.$ls.get("USER_INFO").headSchoolId,
				schoolId: this.$ls.get("USER_INFO").schoolId,
				tableShow: false,
				switchbtnEvent: false, 
				switchbtnId: 0 ,
				switchbtnIndex: 0 ,
			}
		},
		methods: {
			/**
			  序号id截取
			 */
			subString(index, pageindex) {
				index++
				if(pageindex > 1) {
					index = index + (pageindex - 1) * 10
					index = "0000" + index
					index = index.substring(index.length - 3)
				} else {
					if(index <= 10) {
						index = "0000" + index
						index = index.substring(index.length - 3)
					}
				}
				return index
			},
			/**
			  切换页码
			  */
			handleCurrentChange(val) {
				this.pagedata = `${val}`
				this.pageInit(`${val}`)
			},

			/**
			  分页请求
			 */
			pageInit(num) {
				let pageInitUrl = cont.campus + "v1/campus/account/findCheckedAccount?head_id=" + this.headSchoolId
				let pageInitparmes =  {
					checked: true,
					pageSize: 10,
					pageNo: num,
					headSchoolId: this.headSchoolId,
					school_id: this.schoolId
				} 

				this.axios.post(pageInitUrl, pageInitparmes)
					.then(res => {  
							this.tableData = res.messages.accountList
							this.total = res.messages.totalCount
						},
						res => {
							alert("网络繁忙 ！请刷新重试 ！")
						})
			},
			/**
			  关闭状态,短期存储，然弹框做请求
			 */
			switchbtn(event, id, ele, index) {
				let that = this
				this.tableShow = !this.tableShow 
				this.switchbtnEvent = event
				this.switchbtnId = id
				this.switchbtnIndex = index 
				if(event){
					this.dataOne = "您确认打开此账号吗？该账号对应的全部功能也会被同时打开。"
				}else{
					this.dataOne = "您确认关闭此账号吗？该账号对应的全部功能也会被同时关闭。"
				}
			},
			/**
			 * 激活.关闭请求
			 */
			examineAjax(userId, isBoolen) {
				return new Promise((resok, reqno) => {
					let pageInitUrl = cont.campus + "v1/campus/account/stopAndEnableAccount?&head_id=" + this.headSchoolId
					let pageInitparmes = {
						id: userId,
						enable: isBoolen
					}
					
					this.axios.post(pageInitUrl, pageInitparmes)
						.then(res => {
								resok()
							},
							res => {
								reqno(alert("网络繁忙 ！请刷新重试 ！"))
							})
				})
			},
			close(){ 
				this.tableData[this.switchbtnIndex].enable = !this.switchbtnEvent
				this.tableShow = false 
			},
			ok(){
				this.tableShow = false
				this.examineAjax(this.switchbtnId, this.switchbtnEvent)
			}
		},
		updated() {
			/**
			  隔行变色
			 */
			$(".ul_list li").each((ele, index) => {
				if(ele % 2 == 0) {
					index.style.background = "#fff"
				} else {
					index.style.background = "#f0f0f0"
				}
			})
		},
		mounted() {
			this.windowWidth = document.documentElement.clientWidth
			/**
			 * 加载第一页
			 */
			this.pageInit(1)
			//路由传值
			this.$store.commit("xgSchoolTitle", '账号查看')
		}

	}
</script>
<style lang="less" > 
	
	.table_zd {
		height: 960px;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
		section {
			width: 380px;
			height: 240px;
			background: #fff;
			position: absolute;
			box-sizing: border-box;
			top: 300px;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 10px;
			h1 {
				width: 100%;
				height: 50px;
				background: #F1F5F7;
				text-align: center;
				line-height: 50px;
				font-size: 16px;
				position: relative;
				img {
					position: absolute;
					right: 20px;
					top: 20px;
					cursor: pointer;
				}
			}
			.R {
				display: block;
				margin: 30px auto 0;
			}
			h2 {
				width: 100%;
				text-align: center;
				color: #666;
				margin-top: 20px;
				box-sizing: border-box;
				padding: 0 30px;
			}
			p {
				width: 100%;
				display: flex;
				justify-content: center;
				margin-top: 24px;
				img {
					margin: 0 15px;
					cursor: pointer;
				}
			}
		}
	}	
	
	.account {
		.ul_list {
			width: 100%;
			height: 626px;
			background: #fff;
			overflow: hidden;
			.el-switch__core .el-switch__button {
				top: 2px;
				left: 0;
				position: absolute;
				border-radius: 100%;
				transition: transform .3s;
				width: 16px !important;
				height: 16px;
				background-color: #fff;
			}
			li {
				&:first-child {
					margin-top: 20px;
				}
				height: 52px;
				background :#fff;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding:0 30px 0 48px;
				span {
					display: flex;
					width: 18%;
					flex-wrap: wrap;
					position: relative;
					p {
						margin-right: 10px;
					}
					&.last_span_btn {
						justify-content: flex-end
					}
					&.span_work {
						box-sizing: border-box;
						padding-left: 50px;
						width: 28%;
					}
					img {
						margin-left: 4px;
						position: absolute;
						left: -25px;
					}
				}
			}
		}
		.pages_bottom {
			position: absolute;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>