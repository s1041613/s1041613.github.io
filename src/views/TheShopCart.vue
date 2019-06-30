<template>
<div class="back-img">
  <!-- 購物車沒東西的時候 -->
  <section class="noItem" v-show="this.haveItem == 0">
    <div>
      <i class="fas fa-shopping-cart img-shopcar"></i>
      <button @click="goHome()">Buy Now</button>
    </div>
  </section>

  <section style="outline:2px solid red;">
    <!-- 購物車第一頁 -->
    <div class="haveItem" v-show="this.haveItem == 1">
        <div class="section1">
          <div style="background-color:rgba(231, 76, 60,0.7)">STEP.1 Check List</div>
          <div>STEP.2 Fill In The Information</div>
          <div>STEP.3 Confirm Order</div>
        </div>
        <div class="section2" :a="a">
          <table class="table" id="my-table-css">
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">price</th>
                <th scope="col">count</th>
                <th scope="col">total</th>
                <th scope="col"><i class="fas fa-trash-alt"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='i in shopCart' :key="i.key">
                <td>{{i.name}}</td>
                <td>{{i.price}}</td>
                <td>{{i.count}}</td>
                <td>{{ (i.count) * (i.price)}}</td>
                <td @click="deleteItem(i.id)"><i class="fas fa-trash-alt"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="section3">
          <div :total="total">TOTAL:{{total}}</div>
        </div>
        <div class="section4">
          <button class="shop-button" @click="goHome()">BACK</button>
          <button class="shop-button" @click="next(2)">NEXT</button>
        </div>
    </div>

    <!-- 購物車第二頁 -->
    <div v-show="this.haveItem == 2">
      <div class="haveItem" :checkLogin="checkLogin">
        <div class="section1">
          <div>STEP.1 Check List</div>
          <div style="background-color:rgba(231, 76, 60,0.7)">STEP.2 Fill In The Information</div>
          <div>STEP.3 Confirm Order</div>
        </div>
        <div class="section5">
          <div class="section5-item">
            <div>NAME</div>
            <div><input  v-model="name" /></div>
          </div>
          <div class="section5-item">
            <div>PHONE</div>
            <div><input v-model="phone" /></div>
          </div>
          <div class="section5-item">
            <div>EMAIL</div>
            <div ><input v-model="email" /></div>
          </div>
          <div class="section5-item">
            <div>ADDRESS</div>
            <div><input v-model="adress" /></div>
          </div>
        </div>
        <div class="section4">
          <button class="shop-button" @click="next(1)">BACK</button>
          <button class="shop-button" @click="next(3)">NEXT</button>
        </div>
      </div>
    </div>

    <!-- 購物車第三頁 -->
    <div v-show="this.haveItem == 3">
      <div class="haveItem" >
        <div class="section1">
          <div>STEP.1 Check List</div>
          <div>STEP.2 Fill In The Information</div>
          <div style="background-color:rgba(231, 76, 60,0.7)">STEP.3 Confirm Order</div>
        </div>
        <div>
        </div>
        <div class="section2">
          <table class="table" id="my-table-css">
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">price</th>
                <th scope="col">count</th>
                <th scope="col">total</th>
                <th scope="col"><i class="fas fa-trash-alt"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='i in shopCart' :key="i.key" :a="a">
                <td>{{i.name}}</td>
                <td>{{i.price}}</td>
                <td>{{i.count}}</td>
                <td>{{ (i.count) * (i.price)}}</td>
                <td @click="deleteItem(i.id)"><i class="fas fa-trash-alt"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
       <div class="section5">
          <div class="section5-item">
            <div>NAME</div>
            <div><input  v-model="name" /></div>
          </div>
          <div class="section5-item">
            <div>PHONE</div>
            <div><input v-model="phone" /></div>
          </div>
          <div class="section5-item">
            <div>EMAIL</div>
            <div ><input v-model="email" /></div>
          </div>
          <div class="section5-item">
            <div>ADDRESS</div>
            <div><input v-model="adress" /></div>
          </div>
        </div>
        <div class="section4">
          <button class="shop-button" @click="next(2)">BACK</button>
          <button class="shop-button" @click="finish()">FINISH</button>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Vue from 'vue'
import {ServerTable,ClientTable,Event} from 'vue-tables-2';
Vue.use(ClientTable);
export default {
  components: {

  },
  name: "TheShopCart",
  data() {
    return {
      shopCart:[],
      haveItem:0,
      email:"",
      name:'',
      phone:'',
      adress:'',
			columns: ['name', 'price', 'count', 'total','delete'],
			tableOptions: {
				filterable: false,
			},
    }

  },
  created() {
    this.shopCart = JSON.parse(localStorage.getItem('buy'))
    console.log("this.shopCart",this.shopCart)
  },
  watch: {
    shopCart(){
      if(this.shopCart.length > 0 && this.shopCart !== null){
        this.haveItem = 1
      }else{
        this.haveItem = 0

      } 
    },

  },
  updated() {
  },
  computed: {
    total() {
      let count=0,price=0,rs=0
      for(let i in this.shopCart){
        count = this.shopCart[i].count
        price = this.shopCart[i].price
        rs += count*price
      }
      return rs
    },
    checkLogin() {
      if(localStorage.hasOwnProperty('signinStatus')){
        this.name = localStorage.getItem('name')
        this.name = this.name.substring(1, (this.name.length) -1)
        this.email = localStorage.getItem('signInEmail')
        this.email = this.email.substring(1, (this.email.length) -1)
      }
    },
    a(){
        if(parseInt(this.haveItem) > 0 && this.shopCart.length > 1){
          let id=[],repeatIndex=[],repeatId=[]
          for(let i in this.shopCart){
            id.push(this.shopCart[i].id)
          }

          id.forEach((item,pos,self) => {
          if(self.indexOf(item) !== pos)
              repeatIndex.push(pos)
          })
          
          for(let index in repeatIndex){
            //刪除位置
            let newIndex = repeatIndex[index] - index
            //保留加乘資料
            let count = this.shopCart[newIndex].count
            let total = this.shopCart[newIndex].total
            let price = this.shopCart[newIndex].price
            //刪除重複商品
            this.shopCart.splice(newIndex,1)
            //加乘商品資料
            this.shopCart[newIndex-1].count = this.shopCart[newIndex-1].count + count
            this.shopCart[newIndex-1].total = this.shopCart[newIndex-1].total + count*price
          }
          return this.shopCart
          
      }else{
        return this.shopCart
      }


    },

  },
  methods: {
    goHome(){
      this.$router.push({path:'/'})
    },
    finish(){
      localStorage.removeItem('buy')
      this.$router.push({path:'/'})
    },
    deleteItem(id){
      console.log('id',id)
      let nowItem = JSON.parse(localStorage.getItem('buy'))
      let newItem =[]
      nowItem.forEach((nowItem) => {
        if(nowItem.id !== id){
          newItem.push(nowItem)
        }
      })
      console.log('newItem',newItem)
      this.shopCart = newItem
      localStorage.setItem('buy',JSON.stringify(this.shopCart))
    },
    next(num){
      if(num == 1){
        this.haveItem = 1
      }
      if(num == 2){
        this.haveItem = 2
      }
      if(num == 3){
        if(this.name.length < 1 || 
          this.phone.length < 1 ||
          this.email.length <1 ||
          this.adress.length < 1 ){
            this.haveItem = 2
            alert("每項皆為必填～")
        }else{
          this.haveItem = 3
        }
        
      }
    }


    

  },
  mounted() {

  },
}
</script>

<style lang="scss" >
.back-img{
  background: url('../assets/home/2.jpg');
  background-size:cover;
}
.noItem{
  //outline: 10px solid;
  padding:50px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    //outline: 2px solid red;
    display: flex;
    flex-direction: column;
    width:30vw;
    height:50vh;
    justify-content: center;
    align-items: center;
  }
  div > i{
    //outline: 2px solid;
    font-size: 180px;
    margin-bottom: 20px;
    width:20vw;
    height: 30vh;
    padding: 30px;
    opacity: 0.6;

  }
  div > button{
    //outline: 2px solid;
    
    width:8vw;
    height:6vh;
    border-radius: 20px;
    background-color: rgba(149, 165, 166,0.7);
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  div > button:hover{
    background-color:#7f8c8d;
  }
}
.haveItem{
  //outline: 10px solid red;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button{
    //outline: 2px solid;
    font-weight:600;
    width:8vw;
    height:6vh;
    border-radius: 20px;
    background-color: rgba(149, 165, 166,0.7);
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  button:hover{
    background-color:#7f8c8d;
  }
}
#my-table-css{
  outline: 2px solid rgba(220, 221, 225,1.0);
  font-size:20px;
  font-weight:330;
}
.section1{
  margin-top:5%;
  width:80vw;
  height: 6vh;
  display: flex;
  margin-bottom: 2%;
  div{
    font-size: 19px;
    color: #ffffff;
    font-weight:500;
    border-radius: 20px;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex:3;
    margin-right: 1%;
    background-color:rgba(149, 165, 166,0.8);
  }
  // @media only screen and (max-width: 768px) {
  //     width:100vw;
  // }
  
}
.section2{
  width:80vw;
  background-color:rgb(255, 255, 255,0.8);
  // @media only screen and (max-width: 768px) {

  //     width:100vw;

  // }
}
.section3{
  width:80vw;
  font-weight:400;
  background-color:rgb(255, 255, 255,0.8);
  text-align:center;
  font-size: 20px;
  margin-bottom: 20px;
  // @media only screen and (max-width: 768px) {
  //     width:100vw;
  // }
}
.section4{
  width:80vw;
  justify-content:space-between;
  display: flex;
  // @media only screen and (max-width: 768px) {

  //     width:100vw;

  // }
}
.section5{
  width:80vw;
  margin-bottom: 3%;
  //background-color:rgb(255, 255, 255,0.8);
  display: flex;
  flex-direction: column;
  // @media only screen and (max-width: 768px) {
  //     width:100vw;
  // }
}
.section5-item{
  color:#ffffff;
  div:nth-child(1){
    font-weight:600;
  }
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size:18px;
  font-weight:400;
  margin-bottom: 5px;
  input{
    border-radius: 20px;
    width:70vw;
    height:5vh;
    border:2px solid #bdc3c7;
  }
  input:hover{
    border:2px solid #7f8c8d;
  }
}
// .noItem{
//   width:40vw;
//   display: flex;
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;
//   img{
//     width:12vw;
//   }
//   @media only screen and (min-width: 320px) and (max-width: 425px) {
//     img{
//       width:20vw;
//     }
//   }
// }

</style>
