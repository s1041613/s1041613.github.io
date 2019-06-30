<template>
  <div>
    <section class="head-img"></section>
    <section>
      <div class="lunch">
        <h1>lunch Menu List</h1>
        <div class="lunch-food">
          <div id="lunch-food-1">
            <img class="lunch-img" src="../assets/lunch/1.jpg">
            <div class="lunch-information" v-for="i in lunch[0]" :key="i.key">
              <div>
                <span>{{i.name}}</span>
                <span>{{i.price}}<button @click="add(i.id,i.name,i.price)" class="food-button">+</button></span>
              </div>
              <p>{{i.describe}}</p>
            </div>
          </div>
          <div d="lunch-food-2">
            <img class="lunch-img" src="../assets/lunch/2.jpg">
            <div class="lunch-information" v-for="i in lunch[1]" :key="i.key">
              <div>
                <span>{{i.name}}</span>
                <span>{{i.price}}<button @click="add(i.id,i.name,i.price)" class="food-button">+</button></span>
              </div>
              <p>{{i.describe}}</p>
            </div>
          </div>
          <div d="lunch-food-3">
            <img style="margin-right:0px;" class="lunch-img" src="../assets/lunch/3.jpg">
            <div class="lunch-information" v-for="i in lunch[2]" :key="i.key">
              <div>
                <span>{{i.name}}</span>
                <span>{{i.price}}<button @click="add(i.id,i.name,i.price)" class="food-button">+</button></span>
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
import lunch from '../json/lunch.json'
export default {
  components: {
  },
  data() {
    return {
      lunch,
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
    add(id,name,price){
      document.getElementById('hint-box').style.display="block"
      var t=setTimeout(function(){
        document.getElementById('hint-box').style.display="none"
        },1500);
      let buyItem=[]
      let count=1
      let item={
        id:id,
        name: name,
        price: price,
        count:count,
        total:price*count
      }
      buyItem.push(item)
      item ={}
      if(!localStorage.hasOwnProperty('buy')){
        localStorage.setItem('buy',JSON.stringify(buyItem))
      }else{
        let oldBuy = JSON.parse(localStorage.getItem('buy'))
        for(let i in oldBuy){
          buyItem.push(oldBuy[i])
        }
        localStorage.setItem('buy',JSON.stringify(buyItem))
      }
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
.lunch{
  h1{
    font-weight:400;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lunch-food{
  flex-direction: row;
  position: relative;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lunch-img{
  width:30vw;
  height:35vh;
  margin-right: 30px;
}
.lunch-information{
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
