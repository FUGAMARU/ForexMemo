<template>
	<div class="current-symbol">
		<div class="px-5 py-2 my-2 current-symbol-container">
			<SymbolIcon :symbol="symbol" class="current-symbol-element"/>
			<div class="text-2xl font-sb text-primary current-symbol-element">{{symbol}}</div>
			<div @click="setTag(0)" class="rounded font-ksb ml-10 mr-1 px-2 py-1 current-symbol-element" :class="[statusCode === 0 ? 'text-white bg-green-500 cursor-default' : 'text-green-500 border border-green-500 cursor-pointer']">絶対ロング</div>
			<div @click="setTag(1)" class="rounded font-ksb mx-1 px-2 py-1 current-symbol-element" :class="[statusCode === 1 ? 'text-white bg-green-300 cursor-default' : 'text-green-300 border border-green-300 cursor-pointer']">ロングかも</div>
			<div @click="setTag(2)" class="rounded font-ksb mx-1 px-2 py-1 current-symbol-element" :class="[statusCode === 2 ? 'text-white bg-blue-500 cursor-default' : 'text-blue-500 border border-blue-500 cursor-pointer']">中立</div>
			<div @click="setTag(3)" class="rounded font-ksb mx-1 px-2 py-1 current-symbol-element" :class="[statusCode === 3 ? 'text-white bg-red-300 cursor-default' : 'text-red-300 border border-red-300 cursor-pointer']">ショートかも</div>
			<div @click="setTag(4)" class="rounded font-ksb mx-1 px-2 py-1 current-symbol-element" :class="[statusCode === 4 ? 'text-white bg-red-500 cursor-default' : 'text-red-500 border border-red-500 cursor-pointer']">絶対ショート</div>
		</div>
		<hr>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	components:{
		SymbolIcon: () => import("~/components/SymbolIcon.vue"),
		Tag: () => import("~/components/Tag.vue")
	},
	props: ["symbol"],
	data() {
		return{
			statusCode: <number|null>null,
			localStorage_symbols: []
		}
	},
	mounted() {
		this.localStorage_symbols = JSON.parse(localStorage.getItem("symbols") || "{}")
		this.statusCode = this.localStorage_symbols[this.symbol]["statusCode"]
	},
	methods: {
		setTag(statusCode:number) {
			if(this.statusCode === statusCode){
				this.statusCode = null
			}else{
				this.statusCode = statusCode
			}
			//@ts-ignore
			this.localStorage_symbols[this.symbol]["statusCode"] = this.statusCode
			localStorage.setItem("symbols", JSON.stringify(this.localStorage_symbols))
			this.$store.commit("update", {"symbol": this.symbol, "statusCode": this.statusCode})
		}
	}
})
</script>

<style scoped>

</style>