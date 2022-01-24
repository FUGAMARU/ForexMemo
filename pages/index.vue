<template>
	<div>
		<Header @toggleList="toggleList" :isListOpened="isListOpened"/>
		<div class="container mx-auto md:flex md:direction-row">
			<SymbolList @toggleList="toggleList" @changeSymbol="changeSymbol" :symbols="symbols" :isListOpened="isListOpened" class="hidden md:block absolute md:static z-50 w-full md:w-auto" id="symbol-list"/>
			<div style="flex-grow: 1">
				<div v-if="currentSymbol !== ''" style="flex-grow: 1">
					<CurrentSymbol :symbol="currentSymbol" :key="currentSymbol"/>
					<!--チャートとメモが左右表示のブレイクポイントからはチャートにも下陰を付けたい(スマホ等ではチャートとメモが連結表示なので必要ない)-->
					<div class="h-96 md:h-120 lg:h-96">
						<iframe :src="TVSrc" height="100%" width="100%" frameborder="0"></iframe>
					</div>
					<Memo :symbol="currentSymbol" :key="currentSymbol + '-memo'"/>
				</div>
				<div v-else>
					<p class="text-center ml-auto mr-auto text-gray-500">シンボルを選択してください</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
//import Vue from "vue"
//import { component } from "vue/types/umd"
import { defineComponent, ref, computed, onMounted, useStore } from "@nuxtjs/composition-api"
import { up, down } from "slide-element"

export default defineComponent({
	components: {
		Header: () => import("~/components/Header.vue"),
	  	SymbolList: () => import("~/components/SymbolList.vue"),
		CurrentSymbol: () => import("~/components/CurrentSymbol.vue"),
	  	Memo: () => import("~/components/Memo.vue")
	},
	setup() {
		const symbols = ["USD/JPY", "EUR/USD", "GBP/USD", "AUD/USD", "NZD/USD", "USD/CAD", "USD/CHF", "EUR/JPY", "GBP/JPY", "AUD/JPY", "NZD/JPY", "CAD/JPY", "CHF/JPY", "CAD/CHF", "EUR/CAD", "EUR/CHF", "EUR/GBP", "GBP/CAD", "GBP/CHF", "AUD/CAD", "AUD/CHF", "AUD/NZD", "EUR/AUD", "EUR/NZD", "GBP/AUD", "GBP/NZD", "NZD/CAD", "NZD/CHF"] //対応シンボル
		const isListOpened = ref(false) //シンボルリストが開いているか閉じているか
		const currentSymbol = ref("") //表示中のシンボル

		//TradingView用iFrameのソースURL
		const TVSrc = computed(() => "/tradingview-iframe.html?symbol=" + currentSymbol.value.replace("/", ""))

		onMounted(() => {
			interface localStorageTypes {
				[key: string]: any
			}

			if(localStorage.getItem("theme") === null) {
				//LocalStorageにテンプレートデーターを作成
				localStorage.setItem("theme", "light")

				let localStorage_initialization: localStorageTypes = {}
				symbols.forEach((symbol: string, index: number) => {
					localStorage_initialization[symbol] = {"order": index + 1, "statusCode": null, "memo": ""}
				})

				localStorage.setItem("symbols",JSON.stringify(localStorage_initialization))
			}

			useStore().commit("init", localStorage.getItem("symbols"))
		})

		const toggleList = () => {
			if(isListOpened.value){
				//リストを閉じるとき
				up(document.getElementById("symbol-list")!, {duration: 500})
				setTimeout(() => {
					isListOpened.value = false
				}, 500)
			}else{
				//リストを開くとき
				down(document.getElementById("symbol-list")!, {duration: 1000})
				isListOpened.value = true
			}
		}

		const changeSymbol = (symbol: string) => {
			currentSymbol.value = symbol
		}
	
		return { symbols, isListOpened, currentSymbol, TVSrc, toggleList, changeSymbol }
	}
})
</script>