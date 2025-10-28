import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../pages/landing.vue'
import Login from '../pages/auth/login.vue'
import Signup from '../pages/auth/signup.vue'
import Dashboard from '../pages/dashboard.vue'
import Tickets from '../pages/tickets.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/auth/login', component: Login },
  { path: '/auth/signup', component: Signup },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/tickets', component: Tickets, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const session = localStorage.getItem('ticketapp_session')
  if (to.meta.requiresAuth && !session) {
    next('/auth/login')
  } else {
    next()
  }
})

export default router
