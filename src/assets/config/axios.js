import axios from 'axios'
import router from '../../router'

// 配置默认的host,假如你的API host是：http://api.htmlx.club
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  let localToken = localStorage.getItem('token')
  if (localToken !== null) {
    config.headers.Authorization = localToken
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  if (error.response) {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      router.push('/login')
    }
  }
  return Promise.reject(error)
})

export default axios
