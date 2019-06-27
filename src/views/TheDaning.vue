<template>
  <div>
    <section class="head-img"></section>
    <section>
      <div class="breakfast">
        <h1>Breakfast Menu List</h1>
        <div class="breakfast-food">
          <div id="breakfast-food-1">
            <img class="breakfast-img" src="../assets/breakfast/1.jpg">
            <div class="breakfast-information" v-for="i in breakfast[0]" :key="i.key">
              <div>
                <span>{{i.name}}</span>
                <span>{{i.price}}<button @click="add()" class="food-button">+</button></span>
              </div>
              <p>{{i.describe}}</p>
            </div>
          </div>
          <div d="breakfast-food-2">
            <img class="breakfast-img" src="../assets/breakfast/2.jpg">
            <div class="breakfast-information" v-for="i in breakfast[1]" :key="i.key">
              <div>
                <span>{{i.name}}</span>
                <span>{{i.price}}<button @click="add()" class="food-button">+</button></span>
              </div>
              <p>{{i.describe}}</p>
            </div>
          </div>
          <div d="breakfast-food-3">
            <img style="margin-right:0px;" class="breakfast-img" src="../assets/breakfast/3.jpg">
            <div class="breakfast-information" v-for="i in breakfast[2]" :key="i.key">
              <div>
                <span>{{i.name}}</span>
                <span>{{i.price}}<button @click="add()" class="food-button">+</button></span>
              </div>
              <p>{{i.describe}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="hint-box" class="hint-box-show">
      <div class="hint-box">
        <div>successful <i style="font-size:20px;" class="fas fa-check"></i> </div>
      </div>
    </div>

  </div>
</template>

<script>
import breakfast from '../json/breakfast.json'
export default {
  components: {
  },
  data() {
    return {
      breakfast,
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
    go(cname,id,img,name,money,size){
      console.log(id)
      this.$router.push({name:cname,query: { id:id ,img:img,name:name,money:money,size:size}})
    },
    add(){
      document.getElementById('hint-box').style.display="block"
      var t=setTimeout(function(){
        document.getElementById('hint-box').style.display="none"
        },1500);

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
.breakfast{
  h1{
    font-weight:400;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.breakfast-food{
  flex-direction: row;
  position: relative;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.breakfast-img{
  width:30vw;
  height:35vh;
  margin-right: 30px;
}
.breakfast-information{
  // outline: 2px solid;
  padding: 15px 0px 10px 0px;
  width:30vw;
  > div{
    display: flex;
    justify-content: space-between;
    span{
      font-size: 20px;
      font-weight: 400;
    }
    span:nth-child(2){
      color: #27ae60;

    }
    p{
      color: #bdc3c7;
    }
  }
}
.food-button{
  margin-left: 20px;
  width:50px;
  height:50px;
  color:#ffffff;
  background-color: #e74c3c;
}
.food-button:hover{
  background-color: #27ae60;
}
.hint-box-show{
  display: none;
}
.hint-box{
  border-radius: 20px;
  width:15vw;
  height:10vh;
  position: absolute;
  top:60%;
  left:50%;
  transform: translate(-50%,-50%);
  background-color: rgba(46, 204, 113,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight:600;
  font-size:20px;

}
</style>
