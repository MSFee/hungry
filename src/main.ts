import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible';
import BaiduMap from 'vue-baidu-map'

import axios from './axios/index';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

export let bus = new Vue();
Vue.config.productionTip = false
Vue.use(Vant);
Vue.prototype.$axios = axios;

Vue.use(BaiduMap, {
  ak: '0dOxzdA6rcuwKrrZitjYxxS8wE4kw9g8'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
