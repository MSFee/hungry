import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect: '/msite',
  },
  {
    path: '/msite',
    name: 'main',
    component: () => import('../views/msite/index.vue'),
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import('../views/discover/index.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/index.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile/index.vue'),
    children: [
      {
        path:'',
        component: () => import('../views/profile/home/index.vue'),
      },
      {
        path:'test',
        component: () => import('../views/profile/test/index.vue'),
      },
      {
        path: 'address',
        name: 'address',
        component: () => import('../views/profile/address/index.vue'),
      }
    ],
    meta: {
      keepAlive: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
