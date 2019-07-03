// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vconsole from 'vconsole'
// eslint-disable-next-line
new Vconsole()

Vue.config.productionTip = false

/* eslint-disable no-new */
// eslint-disable-next-line
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
