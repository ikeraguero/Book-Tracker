import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/addbook',
    name: 'add book',
    component: () => import('../views/AddBook.vue')
  },
  {
    path: '/addcategory',
    name: 'add category',
    component: () => import('../views/AddCategory.vue')
  },
  {
    path: '/profle',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('../views/Books.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
