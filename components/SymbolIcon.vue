<template>
<div>
	<div class="currency-icons-container mr-1">
		<img :src="tradingCurrency" alt="TradingCurrency" class="currency-icon-1">
		<img :src="settlementCurrency" alt="SettlementCurrency" class="currency-icon-2">
	</div>
</div>
</template>

<script lang="ts">
//import Vue from "vue"
import { defineComponent, computed } from "@nuxtjs/composition-api"

export default defineComponent({
	props: {
		symbol: {
			type: String,
			required: true
		}
	},
	setup(props) {
		const tradingCurrency = computed(() => require("~/assets/currencies/" + props.symbol.split("/")[0] + ".svg")) //取引通貨
		const settlementCurrency = computed(() => require("~/assets/currencies/" + props.symbol.split("/")[1] + ".svg")) //決済通貨
		
		return { tradingCurrency, settlementCurrency}
	}
})
</script>

<style scoped>
	.currency-icons-container {
		position: relative;
		height: 1.8rem;
		width: 1.8rem;
	}
	.currency-icon-1 {
		height: 1.2rem;
		width: 1.2rem;
		object-fit:cover;
		border-radius:50%;
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		border: solid 0.7px gray;
	}
	.currency-icon-2 {
		height: 1.2rem;
		width: 1.2rem;
		object-fit:cover;
		border-radius:50%;
		position: absolute;
		z-index: 1;
		bottom: 0;
		right: 0;
		border: solid 0.7px gray;
	}
</style>