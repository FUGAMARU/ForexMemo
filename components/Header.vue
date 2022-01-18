<template>
	<div class="mx-auto px-5 py-3 shadow-lg flex justify-between items-center">
		<img src="~/assets/logo.svg" alt="logo" class="h-6">
		<img v-if="isListOpened" src="~/assets/arrow-up.svg" alt="" class="h-7" @click="toggleList" />
		<img v-if="!(isListOpened)" src="~/assets/arrow-down.svg" alt="" class="h-7" @click="toggleList" />
	</div>
</template>

<script lang="ts">
//import Vue from "vue"
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
	props: {
		isListOpened: {
			type: Boolean,
			required: true
		}
	},
	setup(props, context) {
		const toggleList = () => {
			context.emit("toggleList")
		}

		return { toggleList }
	}
})
</script>

<style scoped>

</style>