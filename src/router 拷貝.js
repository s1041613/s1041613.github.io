import Vue from 'vue'
import Router from 'vue-router'
import TheHome from './views/TheHome.vue'
import TheItems from './views/TheItems.vue'
import TheNewIn from './views/TheNewIn.vue'
import TheQA from './views/TheQA.vue'
import TheShopCart from './views/TheShopCart.vue'
import TheSignIn from './views/TheSignIn.vue'


Vue.use(Router)
export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      
      path: '/',
      name: 'TheHome',
      component: TheHome,

    },
    {
      path: '/TheItems',
      name: 'TheItems',
      component: TheItems
    },
    {
      path: '/TheNewIn',
      name: 'TheNewIn',
      component: TheNewIn
    },
    {
      path: '/TheQA',
      name: 'TheQA',
      component: TheQA
    },
    {
      path: '/TheShopCart',
      name: 'TheShopCart',
      component: TheShopCart
    },
    {
      path: '/TheSignIn',
      name: 'TheSignIn',
      component: TheSignIn
    },

  ]
})
