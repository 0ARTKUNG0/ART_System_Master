import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';  // Import router


const app = createApp(App);

app.use(router);  // Use the router
app.mount('#app');