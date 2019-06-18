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

// import VueFire from 'vuefire'
// import { firestorePlugin } from 'vuefire'
// import * as firebase from 'firebase' //Dev mode
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'
// //firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDkK4vA9QuWE1HGJn3DQbeD6Budn01-S6I",
//   authDomain: "chopshop-79753.firebaseapp.com",
//   databaseURL: "https://chopshop-79753.firebaseio.com",
//   projectId: "chopshop-79753",
//   storageBucket: "chopshop-79753.appspot.com",
//   messagingSenderId: "40275448473",
//   appId: "1:40275448473:web:d235598b6a6f324d"
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// window.firebase = firebase;
// window.firebaseDb = firebaseApp.database();
// window.firebaseAuth = firebaseApp.auth();

// import { firestorePlugin } from 'vuefire'
// Vue.use(firestorePlugin)
// Vue.use(VueFire);

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
