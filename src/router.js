import Vue from 'vue'
import Router from 'vue-router'
import TheHome from './views/TheHome.vue'
import TheItems from './views/TheItems.vue'
import TheNewIn from './views/TheNewIn.vue'
import TheQA from './views/TheQA.vue'
import TheShopCart from './views/TheShopCart.vue'
import TheSignIn from './views/TheSignIn.vue'
import BasePictureArea from './components/BasePictureArea.vue'

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
      path: '/TheItems',
      name: 'TheItems',
      component: TheItems,
      meta: {
        showTitle: true,
      }
    },
    {
      path: '/TheNewIn',
      name: 'TheNewIn',
      component: TheNewIn,
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
    {
      path: '/BasePictureArea',
      name: 'BasePictureArea',
      component: BasePictureArea,
      meta: {
        showTitle: true,
      }
    },
  ]
})
