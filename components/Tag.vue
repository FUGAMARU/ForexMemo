<template>
	<div class="rounded font-bold text-white px-2 py-1"
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
//import Vue from "vue"
import { defineComponent, ref, computed, onMounted, useStore, watch } from "@nuxtjs/composition-api"

export default defineComponent({
	props: {
		symbol: {
			type: String,
			required: true
		}
	},
	setup(props) {
		const status = ["DL", "ML", "N", "MS", "DS"] //statusCodeに対応する日本語のタグ表示
		const statusCode = ref<null | number>(null) //選択されているタグの状態

		const store = useStore()
		const storeStatusCode = computed(() => store.getters.symbols)
	
		onMounted(() => {
			statusCode.value = store.getters.symbols[props.symbol]["statusCode"]
		})

		watch(storeStatusCode, (obj) => {
			if(obj[props.symbol]["statusCode"] !== undefined){
				statusCode.value = obj[props.symbol]["statusCode"]
			}else{
				statusCode.value = obj[props.symbol]
			}
		})

		return { status, statusCode}
	}
})
</script>

<style scoped>
	
</style>