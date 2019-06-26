<template>
  <div>
    <!-- 購物車沒有東西時 -->
    <div class="layout" v-show=" this.haveItem == 0">
      <div class="noItem">
        <div class="section1-item" style="margin-top:10%;line-height:60px;">
          <div><i style="font-size:200px;opacity:0.5;" class="fas fa-shopping-cart"></i></div>
        </div>
        <div style="margin-top:10%;">
          <img @click="goHome()" src='../assets/gotoshop.png'>
        </div>
      </div>
    </div>
    <!-- 購物車第一頁 -->
    <div class="layout" v-show="this.haveItem == 1">
      <div class="haveItem" >
        <div class="section1">
          <div style="background-color:rgba(255,128,153,0.3)">STEP.1確認清單</div>
          <div>STEP.2填寫資料</div>
          <div>STEP.3確認訂單</div>
        </div>
        <div class="section2">
          <table class="table my-table-css" >
            <thead>
              <tr>
                <th scope="col">編號</th>
                <th scope="col">品名</th>
                <th scope="col">價格</th>
                <th scope="col">數量</th>
                <th scope="col">小計</th>
                <th scope="col"><i class="fas fa-trash-alt"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='i in shopCart' :key="i.key" :a="a">
                <td>{{i.id}}</td>
                <td>{{i.name}}</td>
                <td>{{i.money}}</td>
                <td>{{i.count}}</td>
                <td>{{ (i.count) * (i.money)}}</td>
                <td @click="deleteItem(i.id)"><i class="fas fa-trash-alt"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="section3">
          <div :total="total">小計金額:{{total}}</div>
        </div>
        <div class="section4">
          <button @click="goHome()">我要繼續逛</button>
          <button @click="next(2)">下一步</button>
        </div>
      </div>
    </div>

    <!-- 購物車第二頁 -->
    <div class="layout" v-show="this.haveItem == 2">
      <div class="haveItem" :checkLogin="checkLogin">
        <div class="section1">
          <div>STEP.1確認清單</div>
          <div style="background-color:rgba(255,128,153,0.3) ">STEP.2填寫資料</div>
          <div>STEP.3確認訂單</div>
        </div>
        <div class="section5">
          <div class="section5-item">
            <div>姓名</div>
            <div><input  v-model="name" /></div>
          </div>
          <div class="section5-item">
            <div>電話</div>
            <div><input v-model="phone" /></div>
          </div>
          <div class="section5-item">
            <div>信箱</div>
            <div ><input v-model="email" /></div>
          </div>
          <div class="section5-item">
            <div>地址</div>
            <div><input v-model="adress" /></div>
          </div>
        </div>
        <div class="section4">
          <button @click="next(1)">上一步</button>
          <button @click="next(3)">下一步</button>
        </div>
      </div>
    </div>

    <!-- 購物車第三頁 -->
    <div class="layout" v-show="this.haveItem == 3">
      <div class="haveItem" >
        <div class="section1">
          <div>STEP.1確認清單</div>
          <div>STEP.2填寫資料</div>
          <div  style="background-color:rgba(255,128,153,0.3) ">STEP.3確認訂單</div>
        </div>
        <div>
        </div>
        <div class="section2">
          <table class="table my-table-css" >
            <thead>
              <tr>
                <th scope="col">商品編號</th>
                <th scope="col">商品資料</th>
                <th scope="col">單品價格</th>
                <th scope="col">數量</th>
                <th scope="col">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='i in shopCart' :key="i.key" >
                <td>{{i.id}}</td>
                <td>{{i.name}}</td>
                <td>{{i.money}}</td>
                <td>{{i.count}}</td>
                <td>{{ (i.count) * (i.money)}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="section5">
          <div class="section5-item">
            <div>姓名</div>
            <div><label>{{this.name}}</label></div>
          </div>
          <div class="section5-item">
            <div>電話</div>
            <div><label>{{this.phone}}</label></div>
          </div>
          <div class="section5-item">
            <div>信箱</div>
            <div><label>{{this.email}}</label></div>
          </div>
          <div class="section5-item">
            <div>地址</div>
            <div><label>{{this.adress}}</label></div>
          </div>
        </div>
        <div class="section4">
          <button @click="next(2)">上一步</button>
          <button @click="goHome()">完成訂單</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      phone:'vf',
      adress:'vf',
    }

  },
  created() {
    this.shopCart = JSON.parse(localStorage.getItem('buy'))


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
      let count=0,money=0,rs=0
      for(let i in this.shopCart){
        count = this.shopCart[i].count
        money = this.shopCart[i].money
        rs += count*money
      }
      return rs
    },
    checkLogin() {
      if(localStorage.hasOwnProperty('signinStatus')){
        this.name = localStorage.getItem('name')
        this.email = localStorage.getItem('signInEmail')
      }
    },
    a(){
      let reapeatId=[],id=[],rs=[],other=[]
      for(let i in this.shopCart){
        id.push(this.shopCart[i].id)
      }
      id.forEach((item,pos,self) => {
      if(self.indexOf(item) !== pos)
          reapeatId.push(item,pos)
      })
      let count=0,same=[]
      for(let w in this.shopCart){
        for(let x in reapeatId){
          if(this.shopCart[w].id == reapeatId[x]){
            count = this.shopCart[w].count + count
          }else{
            other.push(this.shopCart[w])
          }
        }
        
      }
      console.log('count',count)

      
      return same

    },

  },
  methods: {
    goHome(){
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

<style lang="scss">
.layout{
  width: 100vw;
  // display: flex;
  height: 100vh;
  button{
    background:#bdc3c7;
    color: #ecf0f1;
    // width:100px;
  }
  button:hover{
    background:#2c3e50;

  }
}
.haveItem{
  //outline: 2px solid;
  position: absolute;
  top:20%;
  //outline: 2px solid;
  margin-top: 0%;
  display: flex;
  flex-direction:column;
  @media only screen and (max-width: 768px) {

      width:100vw;

  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
 
      width:100vw;
 
  }
}
.section1{
  //outline: 5px solid red;
  width:80vw;
  display: flex;
  margin-bottom: 3%;
  div{
    text-align: center;
    flex:3;
    margin-right: 1%;
    background-color:rgba(211,211,211,0.5)
    // background-color:rgba(255,128,153,0.3) 
  }
  @media only screen and (max-width: 768px) {

      width:100vw;

  }
}
.section2{
  //outline: 5px solid pink;
  width:80vw;
  background-color:rgb(255, 255, 255,0.7);
  @media only screen and (max-width: 768px) {

      width:100vw;

  }
}
.section3{
  //outline: 5px solid orange;
  width:80vw;
  text-align:center;
  font-size: 20px;
  @media only screen and (max-width: 768px) {

      width:100vw;

  }
}
.section4{
  //outline: 5px solid yellow;
  width:80vw;
  justify-content:space-between;
  display: flex;
  @media only screen and (max-width: 768px) {

      width:100vw;

  }
}
.section5{
  outline: 5px solid red;
  width:80vw;
  margin-bottom: 3%;
  background-color:rgb(255, 255, 255,0.5);
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {

      width:100vw;

  }
}
.section5-item{
  display: flex;
  input{
    margin-left: 10%;
    width:70vw;
    height:5vh;
    // border:2px solid #95a5a6;
  }
  label{
    margin-left: 10%;
    width:70vw;
    height:5vh;
    border: 1px solid rgb(128, 128, 128,0.5);
  }
}
.noItem{
  width:40vw;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  // outline: 2px solid;
  img{
    width:10vw;
    padding-left:25%;
  }
  // div{
  //   outline: 2px solid;
  // }

}
</style>
