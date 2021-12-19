<template>
	<div>
		<Header />
		<SymbolList />
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import { component } from "vue/types/umd"

export default Vue.extend({
  name: "IndexPage",
  components: {
	  Header: () => import("~/components/Header.vue"),
	  SymbolList: () => import("~/components/SymbolList.vue")
  }
})
</script>