<template>
	<div class="px-2 shadow-lg rounded">
		<textarea class="w-full memo bg-gray-100" :placeholder="`${symbol}に関するメモを入力…`"></textarea>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	props: ["symbol"]
})
</script>

<style scoped>

</style>