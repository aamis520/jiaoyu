<template>
	<div>
		<div class="compile">
			<img src="../../../assets/search-green.png" alt="">
		    <img src="../../../assets/help.png" alt="">
		</div>
	<div class="future">
		<p>
			<img src="../../../assets/images/nopage.png"/>
		</p>
		<p>已设置好优惠时间段为18-01-01至18-02-02，优惠具体类型为整体式优惠，限制每科必须满课(<i>修改</i>)，</p>
		<p>请单击右侧的添加，设置具体的优惠内容吧</p>
		<p>
			<img src="../../../assets/addbutton_normal.png"/>
		</p>
	</div>
	
	
	
	<div class="classConcessionfirst">
	<p>您还没有设置任何优惠条款，请首先完成下列设置</p>
	<p>
		<i>优惠时段设置</i>
        <span></span>
	</p>
	<p>
		<i>优惠类型设置</i>
        <span>
        	整体样式优惠
        	<b><img src="../../../assets/images/notes_normal.png"/></b>
        	<b><img src="../../../assets/images/red.png"/></b>
        </span>
        <span>
        	阶梯式优惠
        	<b><img src="../../../assets/images/notes_normal.png"/></b>
        	<b><img src="../../../assets/images/red.png"/></b>
        </span>
        <span>
        	平均式优惠
        	<b><img src="../../../assets/images/notes_normal.png"/></b>
        	<b><img src="../../../assets/images/red.png"/></b>
        </span>
	</p>
	<p>
		<i>课程满课设置
		<img src="../../../assets/images/notes_normal.png"/>
		</i>
        <span>每科必须满课
        	<img src="../../../assets/green.png"/>
        </span>
        <span>
        	每科开课  <input type="text"/>次以内，才可享受多科连报优惠
        </span>
	</p>
	<p class="add">
		<img src="../../../assets/confirm_normal.png"/>
	</p>
</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
*{
  font-size: 14px;
}
.compile{
    position: absolute;
    right:30px;
    top: -45px;
    cursor: pointer;
    img:nth-child(1){
    	margin-right: 15px;
    }
  }
.future{
	background: white;
	border-radius: 4px;
	padding: 0 30px;
	p{
		text-align: center;
		i{
			color: #31C27C;
		}
	}
	p:nth-child(3){
	line-height: 40px;
	}
	p:nth-child(4){
	margin-top: -80px;
	margin-left: 840px;
	}
}


.classConcessionfirst{
	margin-top: 12px;
		background: white;
		border-radius: 4px;
		padding: 0 30px;
		line-height:50px;
		p{
			display: flex;
			i:nth-child(1){
				display: block;
				width: 166px;
				color: #31C27C;
			}
		}
		p:nth-child(3){
		span{
			display: inline-block;
		   width: 170px;
		}
		}
		p:nth-child(4){
		span{
			display: inline-block;
		     margin-right: 52px;
		}
		input{
			width: 28px;
			border-bottom: 1px solid #31C27C;
		}
		}
	}
	.add{
		margin-left: 900px;
		padding: 12px 0;
	}
</style>