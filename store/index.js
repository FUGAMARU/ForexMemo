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
	update(state, obj) {
		state.symbols[obj["symbol"]]["statusCode"] = obj["statusCode"]
		const copy = {...state.symbols}
		state.symbols = {...copy}
	}
}

export const getters = {
	symbols: (state) => state.symbols
}