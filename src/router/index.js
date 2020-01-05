import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Categories from '@/views/Categories.vue'
import Detail from '@/views/Detail.vue'
import Planning from '@/views/Planning.vue'
import Profile from '@/views/Profile.vue'
import Record from '@/views/Record.vue'
import History from '@/views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    //used for layout management in the App.vue
    meta: {layout: 'empty'},
    component: Login
    //another way to import: components: () => import ('./views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: Register
  },
  {
    path: '/categories',
    name: 'categories',
    //used for layout management in the App.vue
    meta: {layout: 'main'},
    component: Categories
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main'},
    component: Record
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {layout: 'main'},
    component: Detail
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main'},
    component: Planning
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: Profile
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
