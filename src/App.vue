<template>
	<component :is="layout"></component>
</template>

<script lang="ts">
import { defineComponent, markRaw, watch, ref  } from 'vue'

import { useRoute } from 'vue-router'

import EmptyLayout from '@/layouts/EmptyLayout.vue'

export default defineComponent({
	name: 'App',

	components: {
		EmptyLayout,
	},

	setup() {
		const route = useRoute()

		const layout = ref()

		watch(
			() => route.meta?.layout as string | undefined,
			async(metaLayout) => {
				try {
					const component = metaLayout && await import(`@/layouts/${metaLayout}.vue`)

					layout.value = markRaw(component?.default || EmptyLayout)
				} catch (error) {
					layout.value = markRaw(EmptyLayout)
				}
			},
			{ 
				immediate: true,
			},
		)

		return {
			layout,
		}
	},
})
</script>
