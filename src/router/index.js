import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/dashboard.vue'
import Login from '@/views/login.vue'

const routes = [
  {
    meta: {
      title: 'Dashboard',
      requiresAuth: true
    },
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router