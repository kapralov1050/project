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
  {
    path: '/registration-success',
    name: 'registratione-success',
    component: () => import('@/views/RegistrationSuccess.vue')
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component: () => import('@/views/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
