// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Buefy from 'buefy';
import VueCookie from 'vue-cookie';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router';

Vue.use(Buefy);
Vue.use(Vuex);
Vue.use(VueCookie);
Vue.use(VueAxios, Axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
window.PAW = {};
const PAW = window.PAW;

PAW.store = new Vuex.Store({
  state: {
    loggedIn: false,
    apiUrl: process.env.NODE_ENV === 'production' ? 'https://fetch.pawfol.io' : 'http://localhost:3000',
  },
});

PAW.root = new Vue({
  el: '#app',
  router,
  store: PAW.store,
  template: '<App/>',
  components: { App },
});
