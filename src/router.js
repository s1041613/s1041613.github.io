import Vue from 'vue'
import Router from 'vue-router'
import TheHome from './views/TheHome.vue'


import TheClothes from './views/TheClothes.vue'
import TheClothesItem from './views/TheClothesItem.vue'

import TheBtttom from './views/TheBtttom.vue'
import TheBtttomItem from './views/TheBtttomItem.vue'



import TheVacation from './views/TheVacation.vue'

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
      path: '/TheClothes',
      name: 'TheClothes',
      component:TheClothes,
      meta: {
        showTitle: true,
      },
    },
    {
      path: '/TheClothes/clothesItem',
      name: 'TheClothesItem',
      component:TheClothesItem,
      meta: {
        showTitle: true,
      },
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
      path: '/TheBtttom/btttomItem/:id',
      name: 'TheBtttomItem',
      component:TheBtttomItem ,
      meta: {
        showTitle: true,
      }
    },
    {
      path: '/TheVacation',
      name: 'TheVacationItem',
      component:TheVacation,
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
    {
      path: '/TheQA',
      name: 'TheQA',
      component: TheQA,
      meta: {
        showTitle: true,
      }
    },
  ]
})
