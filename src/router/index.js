import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: '/search/:keyword?',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register'),
    meta: {
      isHide: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login'),
    meta: {
      isHide: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
