// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

const base = axios.create({
  baseURL: "http://localhost:3000/"
});
Vue.prototype.$http = base;

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')