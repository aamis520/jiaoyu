<template>
	<div class="table">
		<i class="table-i"></i>
		<ul>
			<li >
				<!--<el-checkbox-group v-model="cities" @change="handleCheckedCitiesChange">
					<el-checkbox v-for="(ele,index) in list" :key="index">{{ele.name}}</el-checkbox>
				</el-checkbox-group>-->
				<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    				<el-checkbox v-for="(ele,index) in cities" :label="ele" :key="index">{{ele.name}}</el-checkbox>
  				</el-checkbox-group>
			</li>
			<i class="ico-init ico-duigou table-position-i" @click="closeClick"></i>
		</ul>
	</div>
</template>

<script> 
	export default {
		props: {
			list: {},
			close: {}
		},
		data() {
			return {
				dui: "√",
				cities: [], 
				checkedCities:[],
				isIndeterminate: true,
				returnValue:""
			}
		},
		filters: {
			duiHtml(res) {
				if(res == true) {
					return "√"
				} else {
					return ""
				}
			}
		},
		methods: { 
			handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
				this.returnValue = value 
			},
			closeClick() {
				this.$emit("close" , this.returnValue)
			}
		},
		mounted() {
			/***
			 * 组件传值，data循环
			 */
			this.cities = this.list
		}
	}
</script>

<style lang="less">
	@color : #31C27C;
	.table {
		position: relative;
		.table-i {
			display: block;
			border: 6px solid transparent;
			border-bottom: 6px solid #353735;
			position: absolute;
			top: -12px;
		}
		ul {
			position: relative;
			.table-position-i {
					position: absolute;
					bottom: 10px;
					right: 0px;
				}
			li {
				padding: 18px 0 0 0;
				border-bottom: 1px solid #666;
				display: flex;
				flex-wrap: wrap;
				.el-checkbox {
					margin-bottom: 20px;
				}
				.el-checkbox__inner {
					border-radius: 50%;
				}
				.el-checkbox__label {
					color: #d8dce5;
				} 
				.el-checkbox__input.is-checked+.el-checkbox__label {
					color: #d8dce5;
				}
			}
		}
	}
</style>