<template>
	<div class="grid-cols-1 bg-gray-200 py-3">
		<SymbolCard v-for="(val, index) in symbols" :key="index" :index="index" :isListOpened="isListOpened" :symbol="val" @click.native="setHighlight(index)" :class="{'bg-white': currentCurrency === index, 'shadow-md': currentCurrency === index}" style="opacity: 0"/>
	</div>
</template>

<script lang="ts">
//import Vue from "vue"
import { defineComponent, ref } from "@nuxtjs/composition-api"
import "animate.css"

export default defineComponent({
	components: {
		SymbolCard: () => import("~/components/SymbolCard.vue")
	},
	props: {
		symbols: {
			type: Array as () => string[],
			required: true
		},
		isListOpened: {
			type: Boolean,
			required: true
		}
	},
	setup(props, context) {
		const currentCurrency = ref<null | number>(null) //現在表示中のシンボル
		const prevCurrency = ref("") //それまで表示していたシンボル

		const setHighlight = (index: number) => {
			//console.log(`Clicked: ${props.symbols[index]}`)
			if(props.symbols[index] !== prevCurrency.value){
				//チャート・メモを表示や切り替えしたい時
				//console.log(`Opened: ${props.symbols[index]}`)
				prevCurrency.value = props.symbols[index]
				context.emit("changeSymbol", props.symbols[index])
			}else{
				//チャート・メモの表示を消したい時
				//console.log(`Closed: ${props.symbols[index]}`)
				context.emit("changeSymbol", "")
			}

			if(currentCurrency.value === index){
				currentCurrency.value = null
			}else{
				currentCurrency.value = index
			}
			context.emit("toggleList")
		}

		return { currentCurrency, prevCurrency, setHighlight}
	}
})
</script>

<style scoped>

</style>