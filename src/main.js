import { createApp } from 'vue'
import router from './router'

import BootstrapVue from "bootstrap-vue"

import App from './App.vue'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';

const app = createApp(App);

app.use(BootstrapVue);
app.use(router);

app.component('default-layout', Default);
app.component('userpages-layout', Pages);

app.mount('#app');
