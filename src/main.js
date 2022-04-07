import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false
axios.defaults.baseURL = store.state.BASE_URL
// Vue.use(bootstrap)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
