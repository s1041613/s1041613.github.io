<template>
  <div>
    <section class="head-img"></section>
    <section class="my-layout">
      <div class="my-font-css">
        <span>Our </span>
        <span>Services</span>
      </div>
      <div class="food">
        <div id="BREAKFAST">
          <i class="fas fa-utensils food-img"></i>
          <h3>BREAKFAST</h3>
          <p>Quisque accumsan erat dolor. Ve stibulum id lacus placerat Pleas ureblame belongs to duty</p>
          <button @click="goBREAKFAST()" class="read-button">Read More</button>
        </div>
        <div id="LUNCH">
          <i class="fas fa-utensils food-img"></i>
          <h3>LUNCH FOOD</h3>
          <p>Quisque accumsan erat dolor. Ve stibulum id lacus placerat Pleas ureblame belongs to duty</p>
          <button @click="goLUNCH()" class="read-button">Read More</button>
        </div>
        <div id="DINNER">
          <i class="fas fa-utensils food-img"></i>
          <h3>DINNER FOOD</h3>
          <p>Quisque accumsan erat dolor. Ve stibulum id lacus placerat Pleas ureblame belongs to fall in the </p>
          <button @click="goDINNER()" class="read-button">Read More</button>
        </div>
      </div>
    </section>
    <section class="my-layout">
      <div class="my-font-css">
        <span>Food </span>
        <span>Gallery</span>
      </div>
      <div class='gallery-food'>
        <div v-for="img in imgItem" :key="img.key" class="img-box">
          <img :src="img" class="gallery-food-img"/>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import imgItem from "../json/gallery.json";
export default {
  components: {
  },
  data() {
    return {
      imgItem,
   
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
.my-layout{
  padding: 40px;
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    padding: 0px;
    .my-font-css{
      padding: 40px;
    }

  }
}
//our service block
.food{
  //border: 2px solid;
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
  @media only screen and (max-width: 1024px) {
    h3{
      font-size:20px;
    }
  }
  @media only screen and (max-width: 768px) {

    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
      width:80vw;
      margin-bottom: 23px;
      h3{
        font-size: 25px;
      }
      p{
        font-size: 20px;
      }
    }

  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    padding: 30px;
    div{      
      h3{
        font-size: 23px;
      }
      p{
        font-size: 20px;
      }
    }
  }
  @media only screen and (max-width: 375px){
    div{
      p{
        font-size: 20px;
      }
    }
  }
  @media only screen and (max-width: 320px){
    div{
      h3{
        font-size: 20px;
      }
      p{
        font-size: 18px;
      }
    }
  }
  
}
.food-img{
  font-size:50px;
  color: #e74c3c; 
}
//food gallery block
.gallery-food{
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  margin-bottom: 30px;
  @media only screen and (max-width: 768px) {
    padding: 0px;
  }

}
.img-box{
  width:calc((100%-80px) /4);
  height:30vh;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width:calc((100%-80px) /3);
    height:25vh;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    width:calc((100%-80px) /2);
  }
  @media only screen and (max-width: 320px){
    width:calc((100%-80px) /2);
    height:20vh;
  }
}
.gallery-food-img{
  width:100%;
  height:100%;
}
.gallery-food-img:hover{
  transition: transform 0.5s;
  transform: scale(1.2);
}
</style>

