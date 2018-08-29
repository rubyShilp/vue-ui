import Vue from 'vue';
import App from './components/app.vue';
import store from './store/store';
import router from './routers/router';
import './filter/filter';
import faUI from './package/index.js';
//import faUI from './../../lib/index.js';
//import './../../lib/main.css';
Vue.use(faUI);
new Vue({
    store,
    router: router,
    render: h => h(App)
}).$mount("#app")