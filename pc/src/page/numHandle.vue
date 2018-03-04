<template>
	<div class="numHandle">
		{{num1}}
		<button @click="random">测试</button>
	</div>
</template>

<script>
	import {numBaseHandle,numSpecialHandle} from '@commonJS/numHandle'
	export default{
		data(){
			return{
				num1:10.22222222222222,
				num2:10.6222222222222
			}
		},
		mounted(){
			/*console.log(this.num1)
			console.log(numHandle.parseInt(this.num1))
			console.log(numHandle.ceil(this.num1))
			console.log(numHandle.round(this.num1))
			console.log(numHandle.round(this.num2))
			console.log(numHandle.floor(this.num1))*/
//			console.log(numBaseHandle.random(2,5,3))
			console.log(numSpecialHandle.moneyNum(164131313415313))
		},
		methods:{
			random(){
				//console.log(0.1+0.2)
			}
		}
	}
</script>

<style>
	.numHandle {
		background: rosybrown;
		width: 1200px;
		height: 800px;
		margin: 0 auto;
		margin-top: 100px;
	}
</style>