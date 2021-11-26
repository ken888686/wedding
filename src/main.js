import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'bootstrap';

createApp(App).use(router).mount('#app');
