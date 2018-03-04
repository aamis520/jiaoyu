<template>
	<div id="nocoursesSubject">
		<div class="compile">
			<img src="../../../assets/help.png" alt="">
		</div>
		<div class="nocoursesSubject-conten">
			<ul class="li11">
				<li id="li1">
					<span>科目类型	
					</span>
					<span><a>语文	<img src="../../../assets/images/red.png"/></a></span> 
					<span><a>数学<img src="../../../assets/images/red.png"/></a></span>
				    <span><a>英语<img src="../../../assets/images/red.png"/></a></span>
				    <span><a>物理<img src="../../../assets/images/red.png"/></a></span>
				    <span><a>化学<img src="../../../assets/images/red.png"/></a></span>
				    <span><a>地理<img src="../../../assets/images/red.png"/></a></span>
				    <span><a>历史<img src="../../../assets/images/red.png"/></a></span>
				    <span><a>生物<img src="../../../assets/images/red.png"/></a></span>
				    <span><a>政治<img src="../../../assets/images/red.png"/></a></span>
				    <span><a>国学<img src="../../../assets/images/red.png"/></a></span>
					<span><a>更多</a></span>
				</li>
				<li>
					<span>课程名称</span>	
					<span>
				   	<input type="text"  placeholder="请输入课程的中文名称" id='cc'/>
				   	<input type="text"  placeholder="课程代码" />
				   	<img src="../../../assets/images/notes_normal.png"/>
				   	<i id="font"></i>
				   	 <a> <span class="chong">重选</span></a>
					</span>
				</li>

				<li>
					<span>选择班型</span>				
					<span class="duo">
						<a>基础班<img src="../../../assets/duiHao.jpg" class="img"/></a>
					</span>
					<span class="duo">
						<a>提高班<img src="../../../assets/duiHao.jpg" class="img"/></a>
					</span>
					<span class="duo">
						<a>培优班<img src="../../../assets/duiHao.jpg" class="img"/></a>
					</span>
				</li>

				<li class="six">
					<span>学期循环</span>				
					
					<span>
						<a>秋寒春暑
						  <el-tooltip class="item" effect="dark" content="秋寒春暑、寒春暑秋、春暑秋寒、暑秋寒春、都属于这个范畴" placement="top-start">
                     <el-i>
                         	<img src="../../../assets/images/notes_normal.png"/>
                    </el-i>
                    </el-tooltip>
                    <img src="../../../assets/images/red.png"/>
                    </a>
					</span>
					<span>
						<a>秋春暑
						  <el-tooltip class="item" effect="dark" content="秋春暑、春暑秋、暑秋春都属于这个范畴" placement="top-start">
                         <el-i>
                      	<img src="../../../assets/images/notes_normal.png"/>
                  </el-i>
                    </el-tooltip>
                     <img src="../../../assets/images/red.png"/>
                     </a>
					</span>
					<span>
						<a>寒假暑
						  <el-tooltip class="item" effect="dark" content="寒春秋、春秋寒、秋寒春都属于这个范畴" placement="top-start">
                         <el-i>
                      	<img src="../../../assets/images/notes_normal.png"/>
                  </el-i>
                    </el-tooltip>
                     <img src="../../../assets/images/red.png"/>
                      </a>
					</span>

				</li>
				<li id="lione">
					<span>报班限制</span>
					<i>非本课程年龄段是否可以报读:</i>
					<span>
							<a >可以
						 <img src="../../../assets/images/red.png"/>
						 </a>
					</span>
					<span class="nocan">
						<a>不可以
					 <img src="../../../assets/images/red.png"/>
					  </a>
					</span>

				</li>

			</ul>
			<p>
				<router-link :to="{path:'/curriculum/classSetting/nocoursesSubject/nocoursesSubjectyi'}">
					<span>结束本链</span>
				</router-link>
				<router-link :to="{path:'/curriculum/classSetting/nocoursesSubject/nocoursesSubjectyi'}">
					<span>结束本链</span>
				</router-link>
				<a class="jixu"><span>继续填写本链接</span></a>

			</p>
		</div>

		<div class='oneTooneer'>
			<ul>
				<li>
					<p>
						<span>数学</span>
						<span><img src="../../../assets/images/01_20.jpg"/></span>
					</p>
					<p>
						<span>课程链一(008)</span>
				 		<span>
   	  			                                  一年级数学·4期·3个班型 <i> <img src="../../../assets/images/long_jt.png"/> </i>
   	  		                                              二年级数学·4期·3个班型 <i> <img src="../../../assets/images/long_jt.png"/> </i>
   	  			                                   三年级数学·4期·3个班型 <i> <img src="../../../assets/images/long_jt.png"/> </i>
   	  			                                   四年级数学·4期·3个班型 <i> <img src="../../../assets/images/long_jt.png"/> </i>
   	  			                                   五年级数学·4期·3个班型 
   	  			        </span>
					</p>
				</li>
			</ul>

		</div>

		<div class="box2">
			<span>
                                                                备 注：设置完成之后请点击右侧的   " <span class="iconfont icon-dui right-s"></span> " 进行保存
			</span>
			<router-link :to="{path:'/curriculum/classSetting/coursesSubject/oneTooneyi/oneTooneer'}">
				<span class="iconfont icon-dui right"></span>
			</router-link>
		</div>
	</div>
</template>
<script>
	import classSettingchild from "@/page/curriculum/classSettingchild"
	export default {
		data() {
			return {
				show: false
			}
		},
		components: {
			classSettingchild
		},
		mounted: function() {

			$("#cc").click(function() {
				$("#li1").hide();
			});
			$(".chong").click(function() {
				$("#li1").show();
			});
			$("#cc").click(function() {
				$(".chong").show();
			});
			$(".img").click(function() {
				$(".six").show();
			});
			$(".jixu").click(function() {
				$(".chong").hide();
			});
			$(".icon-2").click(function() {
				$(this).parent().css("display", "none");
			});
			$(".duo").click(function() {
				$(this).find(".img").toggle()
			});
			$("#li1>span").click(function() {
				$(this).find("img").toggle();
				if($(this).find("img").show()) {
					$(this).siblings("span").find("img").hide()
				}
			});
			$("#lione>span").click(function() {
				$(this).find("img").toggle();
				if($(this).find("img").show()) {
					$(this).siblings("span").find("img").hide()
				}
			});
			$(".img").click(function() {
				$(this).find("img").toggle();
				if($(this).find("img").show()) {
					$(this).siblings("span").find("img").hide()
				}
			});
			$("#li1 a").click(function() {
				var text1 = $(this).text()
				$("#font").text(text1)
			});

		},
		methods: {
			bianji: function() {
				$(".icon-2").css("visibility", "visible")
			}
		}
	}
</script>

<style scoped lang="less">
	* {
		font-size: 14px;
	}
	.compile {
		position: absolute;
		right: 30px;
		top: -45px;
		cursor: pointer;
	}
	
	.six {
		display: none;
	}
	
	.img {
		img {
			display: none;
		}
	}	
	a {
		cursor: pointer;
	}
	
	#nocoursesSubject {
		width: 1008px;
	}
	
	#li1 {
		img {
			display: none;
		}
	}
	
	#lione {
		img {
			display: none;
		}
	}
	
	.nocoursesSubject-conten {
		margin-bottom: 12px;
		p {
			padding-left: 200px;
			padding-bottom: 42px;
			span {
				display: block;
				width: 150px;
				height: 30px;
				border: 1px solid #B6B6B6;
				border-radius: 3px;
				text-align: center;
				line-height: 30px;
				float: left;
				margin-left: 30px;
			}
			span:hover {
				background: #0086B3;
				color: white;
				border: 1px solid #0086B3;
			}
		}
		padding: 20px 30px;
		background: white;
		ul {
			li {
				/*padding-bottom: 30px;*/
				line-height: 50px;
				span {
					img {
						width: 16px;
					}
					i {
						color: #5ACE96;
					}
				}
			}
			li:nth-child(1) {
				span {
					display: inline-block;
					width: 70px;
				}
				span:nth-child(12) {
					color: darkcyan;
				}
				span:nth-child(1) {
					color: #5ACE96;
					width: 100px;
				}
			}
			li:nth-child(3) {
				img {
					display: none;
				}
				span {
					display: inline-block;
					width: 100px;
				}
				span:nth-child(1) {
					color: #5ACE96;
					width: 100px;
				}
			}
			li:nth-child(2) {
				display: inline-block;
				span {
					padding-right: 20px;
				}
				span:nth-child(1) {
					color: #5ACE96;
					width: 100px;
				}
			}
			
			li:nth-child(5) {
				span {
					display: inline-block;
					width: 80px;
				}
				span:nth-child(1) {
					color: #5ACE96;
					width: 100px;
				}
			}

		}
	}
	.oneTooneer {
		ul {
			li {
				background: white;
				margin-bottom: 12px;
				padding-bottom: 30px;
				p {
					width: 948px;
					margin: 0 auto;
					border-bottom: 1px dashed #EEEEEE;
					line-height: 54px;
					span {
						display: block;
					}
				}
				p:nth-child(1) {
					height: 54px;
					line-height: 54px;
					display: flex;
					justify-content: space-between;
				}
				p:nth-child(2) {
					width: 948px;
					margin: 0 auto;
					display: flex;
					span:nth-child(1) {
						width: 20%;
					}
					span:nth-child(2) {
						width: 80%;
					}
				}
				
			}
		}
	}
	
	.box2 {
		width: 1008px;
		height: 82px;
		line-height: 82px;
		background: white;
		border-radius: 4px;
		color: #5ACE96;
		padding-left: 20px;
	}
	
	input {
		border-bottom: 1px solid #31c27c;
		margin-left: 24px;
	}
	
	.chong {
		border: 1px solid #31c27c;
		padding-left: 20px;
		padding-top: 4px;
		padding-bottom: 4px;
		border-radius: 4px;
	}
</style>