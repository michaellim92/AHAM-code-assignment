import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { makeServer } from './services/funds.service.js';

const app = createApp(App)

app.use(createPinia())
makeServer();

app.mount('#app')
