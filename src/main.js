import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"

createApp(App).use(router).use(PrimeVue).mount('#app')
