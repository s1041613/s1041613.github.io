import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

import GoogleAuth from 'vue-google-auth'
Vue.use(GoogleAuth, { client_id: '893746950645-se5tohfabsm855h27s85tht5g7a8l0ft.apps.googleusercontent.com' })
Vue.googleAuth().load()

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);



//以IIFE的方式載入facebook的JavaScript SDK
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
