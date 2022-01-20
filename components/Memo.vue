<template>
	<div class="px-2 shadow-lg rounded">
		<textarea class="w-full memo bg-gray-100" :placeholder="`${symbol}に関するメモを入力…`" v-model="memo"></textarea>
		<p id="saved" class="hidden text-center text-green-500">保存しました！</p>
	</div>
</template>

<script lang="ts">
//import Vue from "vue"
import { defineComponent, ref, onMounted, watch, useStore } from "@nuxtjs/composition-api"
import { toggle } from "slide-element"

export default defineComponent({
	props: {
    	symbol: {
      		type: String,
      		required: true
   		}
  	},
	setup(props) {
		const memo = ref("")
		let timer: number

		onMounted(() => {
			memo.value = JSON.parse(localStorage.getItem("symbols") || "{}")[props.symbol]["memo"]
		})

		const store = useStore()
		watch(memo, (val: string, prevVal: string) => {
			if(prevVal !== ""){
				if(timer){clearTimeout(timer)}
				timer = window.setTimeout(() => {				
					store.commit("updateMemo", {"symbol": props.symbol, "memo": val})

					toggle(document.getElementById("saved")!, {duration: 500})
					setTimeout(() => {
						toggle(document.getElementById("saved")!, {duration: 500})
					}, 2000)
				}, 1000)
			}
		})

		return { memo }
	}
})
</script>

<style scoped>

</style>