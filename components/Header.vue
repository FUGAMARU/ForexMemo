<template>
	<div class="shadow-lg w-full">
		<div class="px-5 py-3 flex justify-between items-center md:container md:mx-auto">
			<img src="~/assets/logo.svg" alt="logo" class="h-6">
			<img v-if="isListOpened" src="~/assets/arrow-up.svg" alt="" class="h-7 md:hidden" @click="toggleList" />
			<img v-if="!(isListOpened)" src="~/assets/arrow-down.svg" alt="" class="h-7 md:hidden" @click="toggleList" />
		</div>
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