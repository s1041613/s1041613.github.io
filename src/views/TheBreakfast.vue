<template>
  <div>
    <section class="head-img"></section>
    <section>
      <div class="layout">
        <div class="my-font-css mt-30">
          <span>Breakfast </span>
          <span>Menu</span>
        </div>
        <div class="food-type">
          <div id="breakfast-food-1">
            <div class="food-type-img"><img  src="../assets/breakfast/1.jpg"></div>
            <div class="food-type-information" v-for="i in breakfast[0]" :key="i.key">
              <div>
                <span>{{i.name}}</span>
                <span>{{i.price}}<i @click="add(i.id,i.name,i.price)" class="fas fa-plus-square icon-plus"></i></span>
              </div>
              <p>{{i.describe}}</p>
            </div>
          </div>
          <div id="breakfast-food-2">
            <img class="food-type-img" src="../assets/breakfast/2.jpg">
            <div class="food-type-information" v-for="i in breakfast[1]" :key="i.key">
              <div>
                <span>{{i.name}}</span>
                <span>{{i.price}}<i @click="add(i.id,i.name,i.price)" class="fas fa-plus-square icon-plus"></i></span>
              </div>
              <p>{{i.describe}}</p>
            </div>
          </div>
          <div id="breakfast-food-3">
            <img style="margin-right:0px;" class="food-type-img" src="../assets/breakfast/3.jpg">
            <div class="food-type-information" v-for="i in breakfast[2]" :key="i.key">
              <div>
                <span>{{i.name}}</span>
                <span>{{i.price}}<i @click="add(i.id,i.name,i.price)" class="fas fa-plus-square icon-plus"></i></span>
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
    add(id,name,price){
      this.$store.dispatch('actionUpdateCount')
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
        total:price*count,
        delete:"delete"
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


