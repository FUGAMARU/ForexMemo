<template>
	<div class="flex justify-between px-5 py-2 my-2" :class="{'list-animation': toggleClass}" :style="{animationDelay: `${index * 25 + 150}ms`}">
		<div class="flex">
			<SymbolIcon :symbol="symbol"/>
			<div class="text-2xl font-sb text-primary">{{symbol}}</div>
		</div>
		<Tag :symbol="symbol"/>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	components:{
		SymbolIcon: () => import("~/components/SymbolIcon.vue"),
		Tag: () => import("~/components/Tag.vue")
	},
	props: ["symbol", "index", "showSymbolCard"],
	data() {
		return{
			toggleClass: false
		}
	},
	watch: {
		showSymbolCard(sw) {
			if(sw){
				setTimeout(() => {
					this.toggleClass = true;
					//console.log(`${this.index}番フェードイン発火`)
				}, this.index * 50 + 150)
			}else{
				setTimeout(() => {
					this.toggleClass = false
				}, 500)
			}
		}
	}
})
</script>

<style scoped>

</style>