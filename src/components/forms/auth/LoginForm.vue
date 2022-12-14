<template>
    <el-form
        :model="form"
        :rules="formRules"
        ref="formRef"
        label-position="top"
    >
        <el-form-item label="Логин" prop="login">
            <el-input v-model="form.login" />
        </el-form-item>
        <el-form-item label="Пароль" prop="password">
            <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
            <el-button @click="submitForm(formRef)" type="primary">
                Войти
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'element-plus'

export default defineComponent({
    name: 'LoginForm',

    setup() {
        const form = reactive({
            login: '',
            password: '',
        })

        const formRules = reactive<FormRules>({
            login: [
                {
                    required: true,
                    message: 'Заполните поле',
                    trigger: 'change',
                },
            ],
            password: [
                {
                    required: true,
                    message: 'Заполните поле',
                    trigger: 'change',
                },
            ],
        })

        const formRef = ref<FormInstance>()

        const submitForm = async (formEl: FormInstance | undefined) => {
            if (!formEl) return

            await formEl.validate((valid, fields) => {
                if (valid) {
                    console.log('submit!')
                } else {
                    console.log('error submit!', fields)
                }
            })
        }

        return {
            form,
            formRules,
            formRef,

            submitForm,
        }
    },
})
</script>
