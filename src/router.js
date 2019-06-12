import Vue from 'vue'
import Router from 'vue-router'
import TheHome from './views/TheHome.vue'
import TheBtttom from './views/TheBtttom.vue'
import TheClothes from './views/TheClothes.vue'

import TheOldSchool from './views/TheOldSchool.vue'
import TheEasy from './views/TheEasy.vue'
import TheDaning from './views/TheDaning.vue'

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
      meta: {
        showTitle: false,
      }

    },
    {
      path: '/TheBtttom',
      name: 'TheBtttom',
      component:TheBtttom,
      meta: {
        showTitle: true,
      }
    },
    {
      path: '/TheClothes',
      name: 'TheClothes',
      component:TheClothes,
      meta: {
        showTitle: true,
      }
    },
    {
      path: '/TheOldSchool',
      name: 'TheOldSchool',
      component:TheOldSchool,
      meta: {
        showTitle: true,
      }
    },
    {
      path: '/TheEasy',
      name: 'TheEasy',
      component:TheEasy,
      meta: {
        showTitle: true,
      }
    },
    {
      path: '/TheDaning',
      name: 'TheDaning',
      component:TheDaning,
      meta: {
        showTitle: true,
      }
    },
    {
      path: '/TheQA',
      name: 'TheQA',
      component: TheQA,
      meta: {
        showTitle: true,
      }
    },
    {
      path: '/TheShopCart',
      name: 'TheShopCart',
      component: TheShopCart,
      meta: {
        showTitle: true,
      }
    },
    {
      path: '/TheSignIn',
      name: 'TheSignIn',
      component: TheSignIn,
      meta: {
        showTitle: true,
      }
    },
  ]
})
