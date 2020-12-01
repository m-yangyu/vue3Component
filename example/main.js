import { createApp } from 'vue';
import App from './app.vue';
import Component from 'vue3-component/src';

const app = createApp(App);

app.use(Component);

app.mount('#app');