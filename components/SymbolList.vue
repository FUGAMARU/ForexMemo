<template>
	<div class="grid-cols-1 bg-gray-200 py-3">
		<SymbolCard />
	</div>
</template>

<script lang="ts">
import Vue from "vue"

const symbols: string[] = ["USDJPY", "EURUSD", "AUDUSD"]


export default Vue.extend({
	components: {
		SymbolCard: () => import("~/components/SymbolCard.vue")
	}
})
</script>

<style scoped>

</style>