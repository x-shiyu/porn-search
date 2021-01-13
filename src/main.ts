import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {useAntdv} from './lib'


const app = createApp(App).use(router).mount('#app');
useAntdv(app)
