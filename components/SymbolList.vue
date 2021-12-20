<template>
	<!--<div class="grid-cols-1 bg-gray-200 py-3" @click="resetHighlights">-->
	<div class="grid-cols-1 bg-gray-200 py-3">	
		<SymbolCard v-for="(val, key) in symbols" :key="key" :symbol="val" ref="symbol"/>
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
			symbols: ["USD/JPY", "EUR/USD", "GBP/USD", "AUD/USD", "NZD/USD", "USD/CAD", "USD/CHF", "EUR/JPY", "GBP/JPY", "AUD/JPY", "NZD/JPY", "CAD/JPY", "CHF/JPY", "CAD/CHF", "EUR/CAD", "EUR/CHF", "EUR/GBP", "GBP/CAD", "GBP/CHF", "AUD/CAD", "AUD/CHF", "AUD/NZD", "EUR/AUD", "EUR/NZD", "GBP/AUD", "GBP/NZD", "NZD/CAD", "NZD/CHF"]
		}
	},
	methods: {
		/*resetHighlights() {
			//@ts-ignore
			this.$refs.symbol.resetHighlight()
		}*/
	}
})
</script>

<style scoped>

</style>