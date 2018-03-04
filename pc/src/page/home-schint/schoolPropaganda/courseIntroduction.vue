<template>
	<div class="box">
		<ul class="course_ul" v-if="ulShow">
			<li v-for="(ele,index) in subjectList" :key="index">
				<h1>{{ele.name}}</h1>
				<section>
					<span
						:class="{active_span: ele2.hasIntro}"
						v-for="(ele2,index2) in ele.classCourseList"
						:key="index2"
						@click="editClick(ele.classCourseList , index2)">
						{{ele2.course_name}}
					</span>
				</section>
			</li>
		</ul>

		<div class="edit_div" v-if="!ulShow">
			<div class="edit_div_top">
				<h2>课程图片</h2>
				<section>
					<el-upload
						class="avatar-uploader"
						:action=newimgurl
						:show-file-list="false"
						:on-success="handleAvatarSuccess"
						:before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<textarea name="" placeholder="课程简介(30字以内)" v-model="jsonObj.shortIntro"></textarea>
				</section>
			</div>
			<div class="edit_div_center">
				<h3>课程介绍</h3>
				<textarea name="" rows="" cols="" v-model="jsonObj.courseIntro"></textarea>
				<div class="edit_from_radio">
					<span class="edit_from_radio_span">可见校区 : </span>
					<template>
						<el-radio v-model="radio" label="1" @change="radioCangeone">全部校区</el-radio>
						<el-radio v-model="radio" label="2" @change="radioCangetwo">
							<input type="text" placeholder="选择校区" class="redio_input" @click="selectChoolClick" />
						</el-radio>
					</template>
				</div>
				<ul class="edit_ul">
					<div v-for="(ele,index) in schoolList" :key="index" v-if="schoolShowList">
						<li v-for="(ele2 , index2) in ele.list" :key="index2" v-if="ele2.show">
							{{ele2.school_name}}
							<span @click="removeClick(ele.index , index2)">x</span>
						</li>
					</div>
				</ul>
				<div class="edit_div_btn">
					<span @click="cancel">取消</span>
					<span @click="submitClick">正确</span>
				</div>
			</div>
		</div>

		<v-selectschool></v-selectschool>
	</div>
</template>

<script>
	import {mapState}  from 'vuex'
	import selectCampus from '@components/selectCampus'
	import los from '@commonJS/localStorage'
	import imgurl from '@commonJS/const'
	export default {
		name: "",
		props: {

		},
		components: {
			'v-selectschool': selectCampus
		},
		computed: {
			...mapState({
				ulShow: state => state.SchoolPropaganda.ulShow,
				schoolList: state => state.SchoolPropaganda.schoolList,
				areaList: state => state.SchoolPropaganda.areaList,
				subjectList: state => state.SchoolPropaganda.subjectList
			})
		},
		data() {
			return {
				imageUrl: '',
				radio: '1',
				schoolShowList: true,
				newimgurl: imgurl.aliyunoss+'ossController/uploadImageOss?accessToken=aaaa&folder=header/',
				jsonObj:{
					courseId: "",
					courseIntro: "",
					courseName: "",
					showScopeType: "all",//part
					shortIntro: "",//简介
					courseIntro: "",//介绍
					schoolList: [],
					headSchoolId: los.get("USER_INFO").headSchoolId ,
					profilePhoto:""
				}
			}
		},
		methods: {
			radioCangeone() {
				 this.schoolShowList = false
			},
			radioCangetwo() {
				 this.schoolShowList = true
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
				this.jsonObj.profilePhoto = file.response.messages.firsKey
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			/**
			 * 选择班级
			 * */
			editClick(list,index) {
				this.$store.commit('SET_ULSHOW')
				/**
				 * 判断当前store中是否已经请求过数据,先清空
				 * */
				this.jsonObj = {
					courseId: "",
					courseIntro: "",
					courseName: "",
					showScopeType: "all",//part
					shortIntro: "",//简介
					courseIntro: "",//介绍
					schoolList: [],
					headSchoolId: los.get("USER_INFO").headSchoolId ,
					profilePhoto:""
				}
				this.imageUrl = ""
				this.$store.commit('SET_AREAINDEX', -1)
				this.$store.commit('REMOVE_SCHOOLLISTKONG')
				this.$store.dispatch('huoQuHuLianDiQu')
				this.radio = "1"

				/**
				 * 表单信息
				 * */
				this.jsonObj.courseId = list[index].id
				this.jsonObj.courseName = list[index].course_name
			},
			/**
			 * 选择校区
			 * */
			selectChoolClick() {
				if(this.radio == '2') {
					this.$store.commit('SET_SCHOOLSHOW')
				}
			},
			/**
			 * 取消编辑
			 * */
			cancel() {
				this.$store.commit('SET_ULSHOW')
			},
			/**
			 * 保存
			 * */
			submitClick() {
				if(this.jsonObj.shortIntro.length > 30){
					alert("对不起您的简介内容过长，请重新修改")
				}else{
					if(this.radio == "1"){
						this.jsonObj.showScopeType = "all"
					}else{
						this.jsonObj.showScopeType = "part"
						this.schoolList.map((ele,index)=>{
							ele.list.map((value,key)=>{
								if(value.show){
									this.jsonObj.schoolList.push(
										{
											"school_id" : value.school_id
										}
									)
								}
							})
						})
					}
					this.$store.dispatch('baoCunHeaderKeCheng' , this.jsonObj)
					this.$store.commit('SET_ULSHOW')
				}

				console.log()
			},
			/**
			 * 移除添加的校区
			 * */
			removeClick(index, index2) {
				this.$store.commit('REMOVE_SCHOOLLISTSHOW', {
					index,
					index2
				})
			}
		},
		created() {

		},
		updated() {

		},
		mounted() {
			this.$store.dispatch('huoQuHeaderKeCheng')
		}
	}
</script>

<style lang="less" scoped="scoped">
	@color : #31C17B;
	.course_ul {
		width: 688px;
		height: 744px;
		overflow-y: auto;
		margin-top: 14px;
		&::-webkit-scrollbar {
		    display: none;
		}
		li {
			background: #fff;
			margin-bottom: 14px;
			border-radius: 6px;
			box-sizing: border-box;
			padding: 0 22px 0 28px;
			h1 {
				width: 100%;
				line-height: 70px;
				border-bottom: 1px dotted #CCCCCC;
				color: #333;
			}
			section {
				padding-top: 20px;
				overflow: hidden;
				span {
					display: block;
					width: 110px;
					text-align: center;
					float: left;
					height: 24px;
					line-height: 24px;
					color: #656565;
					background: #F1F5F7;
					border-radius: 12px;
					margin-right: 14px;
					margin-bottom: 20px;
					cursor: pointer;
					&.active_span {
						background: @color;
						color: #fff;
					}
				}
			}
		}
	}

	.edit_div {
		width: 688px;
		.edit_div_top {
			padding: 0 33px 26px 26px;
			background: #fff;
			border-radius: 6px;
			h2 {
				width: 100%;
				line-height: 58px;
				color: #333;
			}
			section {
				display: flex;
				.avatar-uploader {
					width: 148px;
					height: 96px;
					.avatar-uploader .el-upload {
						border: 1px dashed #d9d9d9;
						border-radius: 6px;
						cursor: pointer;
						position: relative;
						overflow: hidden;
					}
					.avatar-uploader .el-upload:hover {
						border-color: #409EFF;
					}
					.avatar-uploader-icon {
						font-size: 28px;
						color: #8c939d;
						width: 147px;
						height: 96px;
						line-height: 96px;
						text-align: center;
					}
					.avatar {
						width: 148px;
						height: 96px;
						display: block;
					}
				}
				textarea {
					flex: 1;
					margin-left: 34px;
					font-size: 14px;
					border-bottom: 1px dotted #CCCCCC;
					resize: none;
				}
			}
		}
		.edit_div_center {
			width: 688px;
			border-radius: 6px;
			background: #fff;
			height: 551px;
			margin-top: 14px;
			box-sizing: border-box;
			padding: 0 33px 0px 26px;
			h3 {
				width: 100%;
				border-bottom: 1px dotted #CCCCCC;
				line-height: 60px;
				color: #333;
			}
			textarea {
				width: 100%;
				height: 266px;
				resize: none;
				font-size: 14px;
				line-height: 28px;
				border-top: 1px dotted #ccc;
				border-bottom: 1px dotted #CCCCCC;
				box-sizing: border-box;
				padding: 16px 0;
				line-height: 26px;
				color: #333;
			}
			.edit_from_radio {
				width: 100%;
				height: 60px;
				border-bottom: 1px dotted #CCCCCC;
				display: flex;
				line-height: 60px;
				align-items: center;
				.edit_from_radio_span {
					margin-right: 24px;
					color: #333;
				}
				.redio_input {
					width: 108px;
					border-bottom: 1px solid @color;
				}
			}
			.edit_ul {
				width: 100%;
				height: 80px;
				display: flex;
				flex-wrap: wrap;
				overflow-y: auto;
				div {
					display: flex;
					flex-wrap: wrap;
					li {
						width: 130px;
						background: #ccc;
						text-align: center;
						position: relative;
						line-height: 24px;
						height: 24px;
						border-radius: 12px;
						margin: 10px;
						span {
							display: block;
							position: absolute;
							right: 4px;
							cursor: pointer;
							border-radius: 50%;
							top: 5px;
							line-height: 14px;
							background: rgba(0, 0, 0, 0.4);
							width: 14px;
							height: 14px;
						}
					}
				}
			}
			.edit_div_btn {
				display: flex;
				align-items: center;
				height: 74px;
				justify-content: center;
				span {
					display: block;
					width: 176px;
					height: 34px;
					background: @color;
					color: #fff;
					text-align: center;
					line-height: 34px;
					border-radius: 4px;
					cursor: pointer;
					&:first-child {
						background: #E9F9F1;
						color: #333;
						margin: 13px;
					}
				}
			}
		}
	}
</style>
