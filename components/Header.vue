<template>
	<div class="mx-auto px-5 py-3 shadow-lg flex justify-between items-center">
		<img src="~/assets/logo.svg" alt="logo" class="h-6">
		<img v-if="isOpened" src="~/assets/arrow-up.svg" alt="" class="h-7" @click="toggleMenu" />
		<img v-if="!(isOpened)" src="~/assets/arrow-down.svg" alt="" class="h-7" @click="toggleMenu" />
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	props: ["isOpened"],
	methods: {
		toggleMenu() {
			this.$emit("toggleMenu")
		}
	}
})
</script>

<style scoped>

</style>