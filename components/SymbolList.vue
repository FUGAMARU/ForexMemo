<template>
	<div class="grid-cols-1 bg-gray-200 py-3">
		<SymbolCard v-for="(val, index) in symbols" :key="index" :index="index" :showSymbolCard="showSymbolCard" :symbol="val" @click.native="setHighlight(index)" :class="{'bg-white': currentCurrency === index, 'shadow-md': currentCurrency === index}" style="opacity: 0"/>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import "animate.css"

export default Vue.extend({
	components: {
		SymbolCard: () => import("~/components/SymbolCard.vue")
	},
	props: ["symbols", "showSymbolCard"],
	data() {
		return {
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