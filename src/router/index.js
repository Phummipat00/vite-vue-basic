import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/Cart.vue'

const routes = [
  // { path: '/', component: Home },
  { path: '/', component: Menu },
  { path: '/cart', component: Cart }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
