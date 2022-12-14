<template>
    <div class="login">
        <div class="block">
            <LoginForm />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LoginForm from '@/components/forms/auth/LoginForm.vue'

export default defineComponent({
    name: 'Login',

    components: {
        LoginForm,
    },
})
</script>
