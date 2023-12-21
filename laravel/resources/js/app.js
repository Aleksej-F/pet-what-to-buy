import './bootstrap';
import App from './src/App.vue'
import { createApp } from 'vue'
// import router from './router'


const app = createApp(App)
// app.use(VueMeta)
// app.use(router)
// app.use(store)
app.mount('#app')