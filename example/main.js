import { createApp } from 'vue';
import App from './app.vue';
import ddmcUI from '@ddmc/ui/src';

const app = createApp(App);

app.use(ddmcUI);

app.mount('#app');