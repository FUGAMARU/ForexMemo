<template>
	<div>
		<Header @toggleMenu="toggleMenu"/>
		<SymbolList :symbols="symbols" :showSymbolCard="showSymbolCard" id="symbol-list" style="display: none;"/>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import { component } from "vue/types/umd"
import { up, down } from "slide-element"

export default Vue.extend({
  name: "IndexPage",
  components: {
	  Header: () => import("~/components/Header.vue"),
	  SymbolList: () => import("~/components/SymbolList.vue")
  },
  data() {
	  return {
			symbols: ["USD/JPY", "EUR/USD", "GBP/USD", "AUD/USD", "NZD/USD", "USD/CAD", "USD/CHF", "EUR/JPY", "GBP/JPY", "AUD/JPY", "NZD/JPY", "CAD/JPY", "CHF/JPY", "CAD/CHF", "EUR/CAD", "EUR/CHF", "EUR/GBP", "GBP/CAD", "GBP/CHF", "AUD/CAD", "AUD/CHF", "AUD/NZD", "EUR/AUD", "EUR/NZD", "GBP/AUD", "GBP/NZD", "NZD/CAD", "NZD/CHF"],
			showSymbolCard: false
	  }
  },
  methods: {
	toggleMenu(sw: boolean) {
		if(sw){
			//リストを開くとき
			down(document.getElementById("symbol-list")!, {duration: 1000})
			this.showSymbolCard = true
		}else{
			//リストを閉じるとき
			up(document.getElementById("symbol-list")!, {duration: 500})
			setTimeout(() => {
				this.showSymbolCard = false
			}, 500)
		  }
	  }
  },
  mounted() {
	interface localStorageTypes {
		[key: string]: any
	}

	if(localStorage.getItem("theme") === null) {
		//LocalStorageにテンプレートデーターを作成
		localStorage.setItem("theme","light")
		let localStorage_initialization: localStorageTypes = {}
		this.symbols.forEach((symbol, index) => {
			localStorage_initialization[symbol] = {"order": index + 1, "statusCode": null, "memo": ""}
		})
		localStorage.setItem("symbols",JSON.stringify(localStorage_initialization))
	}
  }
})
</script>