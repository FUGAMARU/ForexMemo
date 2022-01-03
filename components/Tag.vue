<template>
	<div class="rounded font-ksb text-white px-2 py-1"
		:class="{
			'bg-green-500': statusCode === 0,
			'bg-green-300' : statusCode === 1,
			'bg-blue-500' : statusCode === 2,
			'bg-red-300' : statusCode === 3,
			'bg-red-500' : statusCode === 4
		}"
	>
		{{status[statusCode]}}
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	props: ["symbol"],
	data() {
		return{
			status: ["絶対ロング", "ロングかも", "中立", "ショートかも", "絶対ショート"],
			statusCode: <number|null>null
		}
	},
	mounted() {
		//@ts-ignore
		this.statusCode = this.$store.getters.symbols[this.symbol]["statusCode"]
	},
	computed: {
		storeStatusCode() {
			//@ts-ignore
			return this.$store.getters.symbols
		}
	},
	watch: {
		storeStatusCode(obj) {
			//@ts-ignore
			if(obj[this.symbol]["statusCode"] !== undefined){
				//@ts-ignore
				this.statusCode = obj[this.symbol]["statusCode"]
			}else{
				//@ts-ignore
				this.statusCode = obj[this.symbol]
			}
		}
	}
})
</script>

<style scoped>
	
</style>