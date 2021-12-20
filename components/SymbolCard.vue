<template>
	<div class="flex justify-between px-5 py-2 my-2" :class="{'bg-white': isSelected, 'shadow-md': isSelected, 'bg-gray-200': !(isSelected)}" @click="highlight">
		<div class="flex">
			<SymbolIcon :symbol="symbol"/>
			<div class="text-2xl font-sb text-primary">{{symbol}}</div>
		</div>
		<Tag />
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
		return {
			isSelected: false
		}
	},
	methods: {
		highlight() {
			//alert(`Clicked symbol: ${this.symbol}`);
			this.isSelected = !(this.isSelected)
		},
		/*resetHighlight() {
			this.isSelected = false;
		}*/
	}
})
</script>

<style scoped>

</style>