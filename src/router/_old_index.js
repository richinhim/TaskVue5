/*import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.Base_URL,
  routes: [{
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }]
})*/
import { createWebHistory, createRouter} from 'vue-router'
import LoginPage from "@/views/LoginPage";

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
