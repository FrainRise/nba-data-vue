import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Players from '../views/Players.vue'
import Teams from '../views/Teams.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
