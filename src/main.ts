import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import store from './store/index'
import App from './App.vue'
import router from './router/index'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(store).use(ElementPlus).use(router).mount('#app')
