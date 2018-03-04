<template>
	<div id="container">
			
	</div>
</template>

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
	      }
	    }
	  }
</script>   

<style scoped>
	#container{
				width: 600px;
				height: 500px;
				margin: 10% auto;
				border: 1px solid #eee;
	}
</style>