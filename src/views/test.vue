<template>
  <div>
    <div v-for="item in Demo" :key="item.id">
      <div>{{ item.type }}</div>
      <div>{{ item.id }}</div>
      <div>{{ item.title }}</div>
      <div>{{ item.price }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
// Vue.use(VueFire)
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyDkK4vA9QuWE1HGJn3DQbeD6Budn01-S6I",
    authDomain: "chopshop-79753.firebaseapp.com",
    databaseURL: "https://chopshop-79753.firebaseio.com",
    projectId: "chopshop-79753",
    storageBucket: "chopshop-79753.appspot.com",
    messagingSenderId: "40275448473",
    appId: "1:40275448473:web:d235598b6a6f324d"
})
const DB = firebaseApp.firestore()
export default {
  data() {
    return {
      Demo:[],
    }
  },
  firebase: {
    Demo: DB.collection('Demo')
  },
  created() {

  },
  computed: {
  },
  methods: {

  },
}
</script>

<style lang="scss">

</style>
