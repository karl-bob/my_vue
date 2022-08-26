import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/Search.vue')


  },
  {
    path: '/detailsmusic',
    name: 'DetailsMusic',

    component: () => import('../views/DetailsMusic.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
