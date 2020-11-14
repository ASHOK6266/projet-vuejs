import { createRouter, createWebHashHistory } from 'vue-router'
//import Home from '../views/Home.vue'
//import route from '@/components/RouteComponent'

const routes = [
  /*
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/route',
    name: 'route',
    component: RouteComponent
  }
  */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
