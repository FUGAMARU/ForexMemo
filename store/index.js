import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
	symbols: {}
})

export const mutations = {
	init(state, json) {
		state.symbols = JSON.parse(json)
	},
	updateStatusCode(state, obj) {
		state.symbols[obj["symbol"]]["statusCode"] = obj["statusCode"]
		const copy = {...state.symbols}
		state.symbols = {...copy}
		localStorage.setItem("symbols", JSON.stringify(state.symbols))
	},
	updateMemo(state, obj) {
		state.symbols[obj["symbol"]]["memo"] = obj["memo"]
		const copy = {...state.symbols}
		state.symbols = {...copy}
		localStorage.setItem("symbols", JSON.stringify(state.symbols))
	}
}

export const getters = {
	symbols: (state) => state.symbols
}