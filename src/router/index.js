import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/RegistrationPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
