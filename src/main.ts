import { createApp } from 'vue'

import router from './router'
import store from './store'

import App from './App.vue'

import ElementPlus from 'element-plus'

import './registerServiceWorker'

import './styles/index.scss'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
