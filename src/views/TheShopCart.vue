<template>
<div>
  <!-- 購物車沒東西的時候 -->
  <section class="noItem flex-row back-img" v-show="this.getShowCount <  1">
      <i class="fas fa-shopping-cart img-shopcar">
        <button class="nav-button plus" @click="goOurService()">Buy Now</button>
      </i>
  </section>
  <section>
    <!-- 購物車第一頁 -->
    <div id="page1" class="haveItem back-img" v-show="this.haveItem == 1">
      <div class="section1">
        <div style="background-color:#fff;color:#e74c3c;">STEP.1 Check</div>
        <div>STEP.2 Write</div>
        <div>STEP.3 Confirm</div>
      </div>
      <div class="test">
          <div class="section2" :removeDuplicate="removeDuplicate">
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
                  <td @click="deleteItem(i.id,i.count)"><i class="fas fa-trash-alt"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="section3">
            <div :total="total">TOTAL:{{total}}</div>
          </div>
          <div class="section4">
            <button class="nav-button small" @click="goHome()">BACK</button>
            <button class="nav-button small" @click="next(2)">NEXT</button>
          </div>
      </div>
    </div>

    <!-- 購物車第二頁 -->

      <div id="page2" class="haveItem back-img" :checkLogin="checkLogin" v-show="this.haveItem == 2">
        <div class="section1">
          <div>STEP.1 Check</div>
          <div style="background-color:#fff;color:#e74c3c;">STEP.2 Write</div>
          <div>STEP.3 Confirm</div>
        </div>
        <div class="test">
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
            <button class="nav-button small" @click="next(1)">BACK</button>
            <button class="nav-button small" @click="next(3)">NEXT</button>
          </div>
        </div>
      </div>

    <!-- 購物車第三頁 -->

      <div id="page3" class="haveItem back-img" v-show="this.haveItem == 3">
        <div class="section1">
          <div>STEP.1 Check</div>
          <div>STEP.2 Write</div>
          <div style="background-color:#fff;color:#e74c3c;">STEP.3 Confirm</div>
        </div>
        <div class="test">

          <div class="section2">
            <table class="table" id="my-table-css">
              <thead>
                <tr>
                  <th scope="col">name</th>
                  <th scope="col">price</th>
                  <th scope="col">count</th>
                  <th scope="col">total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for='i in shopCart' :key="i.key" :removeDuplicate="removeDuplicate">
                  <td>{{i.name}}</td>
                  <td>{{i.price}}</td>
                  <td>{{i.count}}</td>
                  <td>{{ (i.count) * (i.price)}}</td>
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
            <button class="nav-button small" @click="next(2)">BACK</button>
            <button class="nav-button small" @click="finish()">FINISH</button>
          </div>
        </div>
      </div>
  </section>
  <div id="hint-box2" class="hint-box-show">
    <div class="delete-hint-box hint-box">
      <div>Item successfully removed <i class="fas fa-check"></i></div>
    </div>
  </div>
  <div id="hint-box3" class="hint-box-show">
    <div class="delete-hint-box hint-box require-hint-box">
      <div>Every item is required <i class="fas fa-exclamation-triangle"></i></div>
    </div>
  </div>
  <div id="hint-box4" class="hint-box-show">
    <div class="delete-hint-box hint-box">
      <div>Order completed <i class="far fa-smile"></i></div>
    </div>
  </div>
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
    }

  },
  created() {
    this.shopCart = JSON.parse(localStorage.getItem('buy'))
    console.log("this.shopCart",this.shopCart)
    if(this.getShowCount > 0){
      this.haveItem = 1
    }else{
      this.haveItem = 0
    }
  },
  watch: {
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
    removeDuplicate(){
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
    getShowCount(){
      return this.$store.state.showCount
    },

  },
  methods: {
    goOurService(){
      this.$router.push({path:"/TheOurService"})
    },
    goHome(){
      this.$router.push({path:'/'})
    },
    finish(){
      localStorage.removeItem('buy')
      document.getElementById('hint-box4').style.display="block"
      var vm = this
      var t=setTimeout(function(){
        document.getElementById('hint-box4').style.display="none"
        vm.$router.push({path:'/'})
        },2000);  
    },
    deleteItem(id,count){
      document.getElementById('hint-box2').style.display="block"
      var t=setTimeout(function(){
        document.getElementById('hint-box2').style.display="none"
        },1000);
      this.$store.commit('changeShowCount',count)
      let nowItem = JSON.parse(localStorage.getItem('buy'))
      let newItem =[]
      nowItem.forEach((nowItem) => {
        if(nowItem.id !== id){
          newItem.push(nowItem)
        }
      })
      console.log('newItem',newItem)
      this.shopCart = newItem
      if(this.shopCart.length > 0){
        localStorage.setItem('buy',JSON.stringify(this.shopCart))
      }else{
        localStorage.removeItem('buy')
      }
    },
    next(num){
      if(num == 1){
        this.haveItem = 1
        if(this.shopCart.length > 6){
          document.getElementById('page1').style.height='auto'
        }else{
          document.getElementById('page1').style.height='100vh'
        }
      }
      if(num == 2){
        this.haveItem = 2
        document.getElementById('page2').style.height='100vh'
      }
      if(num == 3){
        if(this.name.length < 1 || 
          this.phone.length < 1 ||
          this.email.length <1 ||
          this.adress.length < 1 ){
            this.haveItem = 2
            document.getElementById('hint-box3').style.display="block"
            var t=setTimeout(function(){
              document.getElementById('hint-box3').style.display="none"
            },1000);

        }else{
          this.haveItem = 3
          document.getElementById('page3').style.height='auto'
        }
        
      }
    }


    

  },
  mounted() {

  },
}
</script>

<style lang="scss" scope>
//共用
.flex-row{
  display: flex;
  justify-content: center;
  align-items: center;
}
.back-img{
  background: url("../assets/home/2.jpg");
  background-size:cover;
}
.noItem{
  width: 100vw;
  height: 100vh;
  i{
    position: relative;
    font-size: 180px;
    margin-bottom: 20px;
    color: rgba(44, 62, 80,0.6);
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    i{
      font-size: 125px;
    }
  }
}
.haveItem{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section1{
  margin-top:10%;
  width:80vw;
  height: 6vh;
  display: flex;
  margin-bottom: 2%;
  div{
    @extend .flex-row;
    border: 1px solid #ffffff;
    border-radius: 20px;
    background-color:rgba(149, 165, 166,0.8);
    font-size: 19px;
    font-weight:500;
    color: #ffffff;
    flex:3;
    margin-right: 1%; 
  }
  @media only screen and (max-width: 768px) {
    width:90vw;
    div{
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    width:95vw;
    div{
      font-size: 10px;
    }
  }
  
}
.section2{
  width:80vw;
  background-color:rgb(255, 255, 255,0.8);
  @media only screen and (max-width: 768px) {
    width:90vw;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    width:95vw;
  }
}
#my-table-css{
  font-size:20px;
  font-weight:330;
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    font-size:12px;
  }
}
.section3{
  width:80vw;
  font-weight:400;
  background-color:rgb(255, 255, 255,0.8);
  text-align:center;
  font-size: 20px;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    width:90vw;
    div{
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 425px){
    width:95vw;
    div{
      font-size: 15px;
    }
  }
}
.section4{
  width:80vw;
  justify-content:space-between;
  display: flex;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    width:90vw;
   
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    width:95vw;
    font-size: 14px;
  }
}
.small{
  @media only screen and (max-width: 375px){
     width:30vw;
   } 

}
.section5{
  width:80vw;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
      width:90vw;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
      width:95vw;
  }
}
.section5-item{
  color:#ffffff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size:18px;
  font-weight:400;
  margin-bottom: 5px;
  div:nth-child(1){
    font-weight:600;
  }
  input{
    padding: 15px;
    border-radius: 20px;
    width:70vw;
    height:5vh;
    border:2px solid #bdc3c7;
  }
  input:hover{
    border:2px solid #7f8c8d;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
      width:95vw;
      div{
        font-size:15px;
      }
  }
  @media only screen and (max-width: 320px){
      div{
        font-size:12px;
      }
  }
}
.delete-hint-box{
  width:25vw;
  height:6vh;
  @media only screen and (max-width: 768px) {
      width:40vw;
    }
    @media only screen and (min-width: 320px) and (max-width: 425px) {
      width:60vw;
      font-size:15px;
    }
    @media only screen and (max-width: 375px){
      width:70vw;
    }
    @media only screen and (max-width: 375px){
      width:80vw;
    }
}
.require-hint-box{
  background-color: #e74c3c;
}
</style>
