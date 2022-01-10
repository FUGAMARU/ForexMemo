<template>
	<div>
		<Header @toggleMenu="toggleMenu" :isOpened="isOpened"/>
		<SymbolList @toggleMenu="toggleMenu" @changeSymbol="changeSymbol" :symbols="symbols" :showSymbolCard="showSymbolCard" class="hidden absolute z-50 w-full" id="symbol-list"/>
		<div v-if="currentSymbol !== ''">
			<CurrentSymbol :symbol="currentSymbol" :key="currentSymbol"/>
			<!--チャートとメモが左右表示のブレイクポイントからはチャートにも下陰を付けたい(スマホ等ではチャートとメモが連結表示なので必要ない)-->
			<div class="md:shadow-lg" style="height: 20rem;">
				<iframe :src="TVSrc" height="100%" width="100%" frameborder="0"></iframe>
			</div>
			<Memo :symbol="currentSymbol"/>
		</div>
		<div v-else>
			<p class="text-center m-3 text-gray-500">シンボルを選択してください</p>
		</div>
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
	  SymbolList: () => import("~/components/SymbolList.vue"),
	  CurrentSymbol: () => import("~/components/CurrentSymbol.vue"),
	  Memo: () => import("~/components/Memo.vue")
  },
  data() {
	  return {
			symbols: ["USD/JPY", "EUR/USD", "GBP/USD", "AUD/USD", "NZD/USD", "USD/CAD", "USD/CHF", "EUR/JPY", "GBP/JPY", "AUD/JPY", "NZD/JPY", "CAD/JPY", "CHF/JPY", "CAD/CHF", "EUR/CAD", "EUR/CHF", "EUR/GBP", "GBP/CAD", "GBP/CHF", "AUD/CAD", "AUD/CHF", "AUD/NZD", "EUR/AUD", "EUR/NZD", "GBP/AUD", "GBP/NZD", "NZD/CAD", "NZD/CHF"],
			showSymbolCard: false,
			currentSymbol: "",
			isOpened: false
	  }
  },
  methods: {
	toggleMenu() {
		this.isOpened = !(this.isOpened)
		if(this.isOpened){
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
	},
	changeSymbol(symbol: string) {
		this.currentSymbol = symbol
	}
  },
  mounted() {
	interface localStorageTypes {
		[key: string]: any
	}

	if(localStorage.getItem("theme") === null) {
		//LocalStorageにテンプレートデーターを作成
		localStorage.setItem("theme", "light")
		let localStorage_initialization: localStorageTypes = {}
		this.symbols.forEach((symbol, index) => {
			localStorage_initialization[symbol] = {"order": index + 1, "statusCode": null, "memo": ""}
		})
		localStorage.setItem("symbols",JSON.stringify(localStorage_initialization))
	}

	this.$store.commit("init", localStorage.getItem("symbols"))
  },
  computed: {
	  TVSrc() {
		  //@ts-ignore
		  return "/tradingview-iframe.html?symbol=" + this.currentSymbol.replace("/", "");
	  }
  }
})
</script>