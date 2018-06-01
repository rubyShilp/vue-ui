import Vue from 'vue';
import App from './components/app.vue';
import store from './store/store';
import router from './routers/router';
import {token,socketIo} from './util/core';
import './filter/filter';
import faUI from './package/index.js';
Vue.use(faUI);
new Vue({
    store,
    router: router,
    render: h => h(App)
}).$mount("#app")