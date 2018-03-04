<template>
		<div class="map_box">
            <p class="title">请输入校区的详细地址</p>
            <input class="map_search" type="text"/>
		    <div id="container">
		    </div>
		    <p class="txt col">小贴士：</p>
		    <p class="txt">您可以先输入大体位置，然后根据地图定位拖动定位点自动生成具体位置</p>
		    <div class="btn_group">
		    	<button class="btn" @click="status=!status">取消</button>
		    	<button class="btn">确认</button>
		    </div>
		</div>		
</template>


<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@1.4.6/lib/index.js"></script>
<script src="http://webapi.amap.com/maps?v=1.4.0&key=8f15fffa11a445e61c6e64b6bb801098&callback=init"></script>
<script>
	var map;
	export default {
	    mounted: function () {
	      this.init()
	    },

	    methods: {
	      	init: function () {
		        map = new AMap.Map('container', {
		          center: [116.397428, 39.90923],
		          resizeEnable: true,
		          zoom: 10
		        })
		        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
		          map.addControl(new AMap.ToolBar())
		          map.addControl(new AMap.Scale())
		        })
		        AMap.service('AMap.PlaceSearch', () => {
			      this.placeSearch = new AMap.PlaceSearch({
			        pageSize: 5,
			        pageIndex: 1,
			        citylimit: true,
			        city: MapCityName,
			        map: map,
			        panel: 'js-result'
			      })
			    })
		    }
	    }
	  }   
</script>

<style lang="less" scoped>
	.map_box{
			width: 498px;
			height: 626px;
			color: #a0a0a0;
			border-radius: 4px;
			padding-top:40px;									
			.title{
				text-align: center;
				font-size: 16px;
				color: #b8b8b8;
								
			}
			.map_search{
					width: 370px;
					height:30px;
					margin-left: 64px;
					margin-top: 28px;
					border: none;
					background: #f6f6f6;
					color: #666;
					outline: none;
					border-radius: 5px;
					padding-left: 12px;
			}
			::-webkit-input-placeholder{
				color: #b8b8b8;
			}
			#container{
				width: 370px;
				height: 254px;
				margin: 0 auto;
				margin-top: 16px;
				margin-bottom: 18px;
				border-radius: 4px;
				img{
					width: 370px;
					height: 254px;
				}
			}
			.txt{
				width: 370px;
				margin-left: 64px;
				margin-top: 8px;
			}						
			.btn_group{
				width: 320px;
				margin: 0 auto;
				margin-top: 48px;
				display: flex;
				justify-content: space-between;
				.btn{
					width: 148px;
					height: 34px;
					display: block;
					text-align: center;
					color: #666;
					border: 1px solid #e2e2e2;
					border-radius: 4px;
					font-size: 14px;
					font-weight: 400;
					line-height: 34px;
					transition: 0.5s all;
					background: #fff;
					outline: none;
					cursor: pointer;
				}
				.btn:hover{
					background: #31C27C;
					color: #fff;
					border: none;
				}
			}
			.col{
				color: #31C27C;
			}				
	}
</style>