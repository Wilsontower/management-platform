import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = {
  // 状态(数据)仓库
  // 全局通用仓库
  state: Vue.observable({
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
  }),
  setToken (token) {
    this.state.token = token
    localStorage.setItem('token', token) // 存储token
  },
  deleteToken (state) {
    state.token = ''
    localStorage.removeItem('token') // 删除token
  }
}
export default store
