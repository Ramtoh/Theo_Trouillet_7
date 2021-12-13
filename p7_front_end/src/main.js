import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

createApp(App).component('fa', FontAwesomeIcon).use(router).use(store).mount('#app')
