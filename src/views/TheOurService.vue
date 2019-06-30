<template>
  <div>
    <section class="head-img"></section>
    <section class="our-service">
      <h1>Our Services</h1>
      <div class="food">
        <div>
          <i class="fas fa-utensils food-img"></i>
          <h3>BREAKFAST</h3>
          <p>Quisque accumsan erat dolor. Ve stibulum id lacus placerat Pleas ureblame belongs to duty</p>
          <button @click="goBREAKFAST()" class="read-button">Read More</button>
        </div>
        <div>
          <i class="fas fa-utensils food-img"></i>
          <h3>LUNCH FOOD</h3>
          <p>Quisque accumsan erat dolor. Ve stibulum id lacus placerat Pleas ureblame belongs to duty</p>
          <button @click="goLUNCH()" class="read-button">Read More</button>
        </div>
        <div>
          <i class="fas fa-utensils food-img"></i>
          <h3>DINNER FOOD</h3>
          <p>Quisque accumsan erat dolor. Ve stibulum id lacus placerat Pleas ureblame belongs to fall in the </p>
          <button @click="goDINNER ()" class="read-button">Read More</button>
        </div>
      </div>

    </section>

  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
   
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
    goBREAKFAST(){
      this.$router.push({path:"/TheBreakfast"})
    },
    goLUNCH(){
      this.$router.push({path:"/TheLunch"})
    },
    goDINNER(){
      this.$router.push({path:"/TheDinner"})
    },



  },
  mounted() {

  },
}
</script>

<style lang="scss">
.head-img{
    width:100vw;
    height:50vh;
    background:url(../assets/home/2.jpg);
    background-size:cover;
  }
.our-service{
  h1{
    margin-bottom: 50px;
  }
  padding: 50px;

}
.food{
  display: flex;
  justify-content: space-around;
  div{
    outline: 1px solid rgba(192, 57, 43,1.0);
    width:25vw;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
      padding: 10px;
    }
  }
}
.food-img{
  font-size:50px;
  color: #e74c3c; 
}
.read-button{
  padding: 10px;
  background-color: #e74c3c;
  color: #ffffff;
  border: 0px;
  width:10vw;
  text-align: center;
}
.read-button:hover{
  background-color: #27ae60;
}
</style>

