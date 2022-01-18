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
//import Vue from "vue"
import { defineComponent, ref, toRefs, watch } from '@nuxtjs/composition-api'

export default defineComponent({
	components:{
		SymbolIcon: () => import("~/components/SymbolIcon.vue"),
		Tag: () => import("~/components/Tag.vue")
	},
	props: {
    	symbol: {
      		type: String,
      		required: true
   		},
		index: {
			type: Number,
			required: true
		},
		isListOpened: {
			type: Boolean,
			required: true
		}
  	},
	setup(props) {
		const toggleClass = ref(false) //SymbolCardにフェードインアニメーションを付加するためのスイッチ(アニメーションの都合上"props.isListOpened"で代用不可！)
		const { isListOpened } = toRefs(props)

		watch(isListOpened, (sw) => {
			if(sw){
				setTimeout(() => {
					toggleClass.value = true;
					//console.log(`${this.index}番フェードイン発火`)
				}, props.index * 50 + 150)
			}else{
				setTimeout(() => {
					toggleClass.value = false
				}, 500)
			}
		})

		return { toggleClass }
	}
})
</script>

<style scoped>

</style>