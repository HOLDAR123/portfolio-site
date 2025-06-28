import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/_defaults.scss'
import 'normalize.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

