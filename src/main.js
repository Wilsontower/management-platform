import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as req from '../src/assets/config/api'
import store from './store/store' // 简单store模式

import axios from '../src/assets/config/axios'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.HOST = '/api'
Vue.prototype.$req = req
Vue.prototype.$store = store
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
