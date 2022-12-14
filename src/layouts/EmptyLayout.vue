<template>
    <div class="layout layout--full">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EmptyLayout',
})
</script>
