import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/adminlte.min.css'
import 'daterangepicker/daterangepicker.css'
import 'toastr/build/toastr.css'
import 'overlayscrollbars/css/OverlayScrollbars.min.css'

import 'daterangepicker/daterangepicker.js'
import './assets/js/adminlte.js'
import 'toastr/build/toastr.min.js'
import 'overlayscrollbars/js/jquery.overlayScrollbars.min.js'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'

import {getRequest} from './utils/request'
import {putRequest} from './utils/request'
import {postRequest} from './utils/request'
import {deleteRequest} from './utils/request'

Vue.config.productionTip = false
Vue.prototype.getRequest = getRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
