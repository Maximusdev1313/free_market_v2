import { createRouter, createWebHistory } from 'vue-router'
import { mainStore } from '@/stores/mainStore'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('../views/AuthView.vue'),
      meta: { guestOnly: true },
    },
  ],
})


router.beforeEach((to, from, next) => {
  const store = mainStore()
  const isAuthenticated = !!store.token

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next('/auth')
  }

  if (to.meta.guestOnly && isAuthenticated) {
    return next('/')
  }

  return next()
})

export default router