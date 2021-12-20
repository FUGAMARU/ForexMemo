<template>
	<div class="grid-cols-1 bg-gray-200 py-3">
		<SymbolCard v-for="(val, index) in symbols" :key="index" :symbol="val" @click.native="setHighlight(index)" :class="{'bg-white': currentCurrency === index, 'shadow-md': currentCurrency === index}" />
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	components: {
		SymbolCard: () => import("~/components/SymbolCard.vue")
	},
	data() {
		return {
			symbols: ["USD/JPY", "EUR/USD", "GBP/USD", "AUD/USD", "NZD/USD", "USD/CAD", "USD/CHF", "EUR/JPY", "GBP/JPY", "AUD/JPY", "NZD/JPY", "CAD/JPY", "CHF/JPY", "CAD/CHF", "EUR/CAD", "EUR/CHF", "EUR/GBP", "GBP/CAD", "GBP/CHF", "AUD/CAD", "AUD/CHF", "AUD/NZD", "EUR/AUD", "EUR/NZD", "GBP/AUD", "GBP/NZD", "NZD/CAD", "NZD/CHF"],
			currentCurrency: <number | null>null,
			prevCurrency: <string>""
		}
	},
	methods: {
		setHighlight(index: number) {
			console.log(`Clicked: ${this.symbols[index]}`)
			if(this.symbols[index] !== this.prevCurrency){
				//チャート・メモを表示や切り替えしたい時
				console.log(`Opened: ${this.symbols[index]}`)
				this.prevCurrency = this.symbols[index]
			}else{
				//チャート・メモの表示を消したい時
				console.log(`Closed: ${this.symbols[index]}`)
			}

			if(this.currentCurrency === index){
				this.currentCurrency = null
			}else{
				this.currentCurrency = index
			}
		}
	}
})
</script>

<style scoped>

</style>