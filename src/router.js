import Vue from 'vue'
import Router from 'vue-router'


import TheHome from './views/TheHome.vue'
import TheSignIn from './views/TheSignIn.vue'

import TheOurService from './views/TheOurService.vue'
import TheBreakfast from './views/TheBreakfast.vue'
import TheLunch from './views/TheLunch.vue'
import TheDinner from './views/TheDinner.vue'

import TheShopCart from './views/TheShopCart.vue'

// import TheClothes from './views/TheClothes.vue'
// import TheClothesItem from './views/TheClothesItem.vue'
// import TheBottomItem from './views/TheBottomItem.vue'

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
    // {
    //   path: '/TheClothes',
    //   name: 'TheClothes',
    //   component:TheClothes,
    //   meta: {
    //     showTitle: true,
    //   },
    // },
    {
      path: '/TheOurService',
      name: 'TheOurService',
      component:TheOurService,
      meta: {
        showTitle: true,
      }
    },
    // {
    //   path: '/TheBottom/bottomItem/:id',
    //   name: 'TheBottomItem',
    //   component:TheBottomItem,
    //   meta: {
    //     showTitle: true,
    //   }
    // },
    {
      path: '/TheDinner',
      name: 'TheDinner',
      component:TheDinner,
      meta: {
        showTitle: true,
      }
    },
    {
      path: '/TheBreakfast',
      name: 'TheBreakfast',
      component:TheBreakfast,
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
      path: '/TheLunch',
      name: 'TheLunch',
      component: TheLunch,
      meta: {
        showTitle: true,
      }
    },
  ]
})
