<template>
	<div class="flex justify-between bg-white shadow-lg px-5 py-2">
		<div class="flex">
			<SymbolIcon />
			<div class="text-2xl font-sb text-primary">USD/JPY</div>
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
	}
})
</script>

<style scoped>

</style>