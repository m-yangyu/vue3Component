import { createApp } from 'vue';
import App from './app.vue';
import ddmcUI from '@ddmc/ui';

const app = createApp(App);

app.use(ddmcUI);

app.mount('#app');