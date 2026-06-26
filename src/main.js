import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './assets/style/main.scss';
import './assets/libraries/icons/font-awesome.js';

import router from './router';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');