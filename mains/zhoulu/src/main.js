import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './plugins/router';

import './plugins/axios'


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


import store from './plugins/store'

let user = localStorage.getItem('vue_user');
user && store.commit('USER',JSON.parse(user))


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
