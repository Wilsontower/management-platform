import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main/Main'
import loginPage from '@/pages/login/LoginPage'
import detailPage from '@/pages/detail/DetailPage'
import errorPage from '@/pages/error/ErrorPage'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/detail',
      name: 'detail',
      component: detailPage
    },
    {
      path: '/error',
      name: 'error',
      component: errorPage
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/login')
  }
  if (to.path === '/login' || to.path === '/error') {
    next()
  } else {
    let token = window.localStorage.token
    if (token === 'null' || token === '' || token === undefined) {
      next('/login')
    } else {
      next()
    }
  }
})
export default router
