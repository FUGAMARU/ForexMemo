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
	data() {
		return{
			isOpened: false
		}
	},
	methods: {
		toggleMenu() {
			this.isOpened = !(this.isOpened)
			if(this.isOpened){
				//リストを開く
				this.$emit("toggleMenu", true)
			}else{
				//リストを閉じる
				this.$emit("toggleMenu", false)
			}
		}
	}
})
</script>

<style scoped>

</style>