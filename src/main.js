import Vue from 'vue'
import App from './App'
import store from './store';
import jquery from 'jquery';
import "owl.carousel";
import VueRouter from 'vue-router'
import {router} from './router/index';
import BootstrapVue from 'bootstrap-vue'
Vue.use(jquery)
Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "owl.carousel/dist/assets/owl.carousel.css";


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
