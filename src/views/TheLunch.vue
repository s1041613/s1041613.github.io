<template>
  <div>
    <section class="head-img"></section>
    <section>
      <div class="layout">
        <div class="my-font-css mt-30">
          <span>Lunch </span>
          <span>Menu</span>
        </div>
        <div class="food-type ">
          <div id="lunch-food-1">
            <img class="food-type-img" src="../assets/lunch/1.jpg">
            <div class="food-type-information" v-for="i in lunch[0]" :key="i.key">
              <div class="flex-row">
                <div>{{i.name}}</div>
                <div>
                  <span>{{i.price}}</span>
                  <select v-model="count">
                    <option v-for="num in 10" :key="num.key">{{num}}</option>
                  </select>
                  <i @click="add(i.id,i.name,i.price)" class="fas fa-plus-square icon-plus"></i>    
                </div>
              </div>
              <p>{{i.describe}}</p>
            </div>
          </div>
          <div id="lunch-food-2">
            <img class="food-type-img" src="../assets/lunch/2.jpg">
            <div class="food-type-information" v-for="i in lunch[1]" :key="i.key">
              <div class="flex-row">
                <div>{{i.name}}</div>
                <div>
                  <span>{{i.price}}</span>
                  <select v-model="count">
                    <option v-for="num in 10" :key="num.key">{{num}}</option>
                  </select>
                  <i @click="add(i.id,i.name,i.price)" class="fas fa-plus-square icon-plus"></i>    
                </div>
              </div>
              <p>{{i.describe}}</p>
            </div>
          </div>
          <div d="lunch-food-3">
            <img style="margin-right:0px;" class="food-type-img" src="../assets/lunch/3.jpg">
            <div class="food-type-information" v-for="i in lunch[2]" :key="i.key">
              <div class="flex-row">
                <div>{{i.name}}</div>
                <div>
                  <span>{{i.price}}</span>
                  <select v-model="count">
                    <option v-for="num in 10" :key="num.key">{{num}}</option>
                  </select>
                  <i @click="add(i.id,i.name,i.price)" class="fas fa-plus-square icon-plus"></i>    
                </div>
              </div>
              <p>{{i.describe}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="hint-box" class="hint-box-show">
      <div class="hint-box add-hint-box">
        <div>Product successfully added to the shopping cart <i style="font-size:20px;" class="fas fa-check"></i> </div>
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
    count:{
      get() {
        return this.$store.state.count
      },
      set(value) {
        this.$store.commit('updateCount', value)
      },
    },
    getItemCount(){
      return this.$store.state.itemCount
    },
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
      let count=this.getItemCount
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

