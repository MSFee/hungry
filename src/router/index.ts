import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

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
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop/index.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/checkout/index.vue'),
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/payment/index.vue'),
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import('../views/discover/index.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/discover/discover.vue'),
      },
    ],
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/index.vue'),
    children: [
      {
        path:'',
        component: () => import('../views/order/orderList.vue'),
      },
      {
        path:'deatil',
        component: () => import('../views/order/detail/index.vue'),
      }
    ]
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
        path:'info',
        component: () => import('../views/profile/info/index.vue'),
      },
      {
        path: 'address',
        component: () => import('../views/profile/address/index.vue'),
        children: [
          {
            path:'',
            name: 'address',
            component: () => import('../views/profile/address/address.vue'),
          }, 
          {
            path: 'add',
            name: 'add',
            component: () => import('../views/profile/address/add/index.vue'), 
          },
          {
            path: 'search',
            name: 'search',
            component: () => import('../views/profile/address/search/index.vue'),
          }
        ]
      },
      {
        path:'/login',
        name:'login',
        component: () => import('../views/login/index.vue'),
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
