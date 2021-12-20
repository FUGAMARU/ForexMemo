<template>
	<div class="flex justify-between px-5 py-2 my-2">
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
	props: ["symbol"]
})
</script>

<style scoped>

</style>