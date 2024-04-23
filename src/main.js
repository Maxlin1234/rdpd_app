// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
Vue.config.productionTip = false;
/* eslint-disable no-new */
Object.assign(window, { $: jQuery, jQuery });
new Vue({
  el: '#app',
  router,
  jQuery,
  bootstrap,
  components: { App },
  template: '<App/>'
});
