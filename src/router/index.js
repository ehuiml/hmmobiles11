import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import login from '../views/login/index.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    // name: 'layoutIndex',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'vadio',
        name: 'vadio',
        component: () => import('@/views/vadio')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
