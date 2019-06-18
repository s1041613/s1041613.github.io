<template>
  <div>
    <div v-for="item in fbArray" :key="item.id">
      <div>{{ item.type }}</div>
      <div>{{ item.id }}</div>
      <div>{{ item.title }}</div>
      <div>{{ item.price }}</div>
    </div>




  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      firebase: {
        fbArray: firebaseDb.ref('Demo/products').limitToLast(10), //bind as an array
        fbObject: {
          source: firebaseDb.ref('Demo/products/800afd3c-1615-49ba-b33d-497842af6c82'),
          asObject: true, //Bind as object
          cancelCallback: function () { },
          readyCallback: function () { }
      }
  }

   
    }

  },
  created() {

  },
  watch: {

  },
  updated() {


  },
  computed: {

  

  
  
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<style lang="scss">

</style>
