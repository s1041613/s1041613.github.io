<template>
  <div id="app">
    <section style="position:relative;">
      <nav>
          <div class="nav-min" @click="openNav()"><i class="fas fa-align-justify nav-min-icon"></i>
            <h1 @click="goHome()" class="nav-min-title">
              C H O U ‘ S
            </h1>
            <div v-show="this.open == true" class="nav-min-area">
                <button @click="goHome()" class="nav-button">HOME</button>
                <button @click="goTheOurService()" class="nav-button">OUR SERVICE</button>
                <button @click="goLogIn()" class="nav-button">LOG IN</button>
                <button @click="goShopCart()" class="nav-button">SHOP CART</button>
                <div v-show="showBuyNum == true" class="pop-circle-buy-num">{{this.buyNum}}</div>    
            </div> 
          </div> 
      </nav>
      <div><router-view></router-view></div>
      <nav>
        <div class="nav-max">
          <div>
            <button @click="goHome()" class="nav-button">HOME</button>
            <button @click="goTheOurService()" style="margin-right:0px;" class="nav-button">OUR SERVICE</button>
          </div>
          <div @click="goHome()" class="nav-title">
            <p>C H O U ‘ S</p>
          </div> 
          <div>
            <button @click="goLogIn()" class="nav-button">LOG IN</button>
            <button @click="goShopCart()" style="margin-right:0px;" class="nav-button">SHOP CART</button>
            <div v-show="showBuyNum == true" class="pop-circle-buy-num">{{this.buyNum}}</div>
          </div>
        </div>
      </nav>

    </section>
    <footer>
      <div class="footer">
        <div class="footer-part-1">
          <div>
            <h4>OPENING TIMINGS</h4>
            <p><i class="fas fa-clock"></i> Mon - friday : 9am to 8pm</p>
            <p><i class="fas fa-clock"></i> Saturday : 9am to 5pm</p>
            <p><i class="fas fa-clock"></i> Sunday : 6am to 11pm</p>
          </div>
          <div>
            <h4>OUR ADDRESS</h4>
            <p><i class="fas fa-map-marker-alt"></i> 1st Floor, No. 8, Lane 4, Lane 106, Section 3, Nangang Road, Taipei</p>
            <p><i class="fas fa-phone"></i>  +886-0963-082-683</p>
            <p><i class="fas fa-envelope"></i>  y10135124@gmail.com</p>
          </div>
          <div>
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.402987779093!2d121.58723761462318!3d25.05432694363116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab7a3a080703%3A0xb61315cdf0cc455a!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A5Y2X5riv6Lev5LiJ5q61MTA25be3!5e0!3m2!1szh-TW!2stw!4v1562417268745!5m2!1szh-TW!2stw" width="400" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="footer-part-2">© Copyright 2018 CHOU'. Site by CHOU.</div>
      </div>
    </footer> 
    <div class="modal-mask" id="modal" :checkState="checkState" :showMask="showMask">
      <TheSignIn   v-show="checkState == true" class="signin-position"></TheSignIn>
    </div>
</div>
</template>

<script>
import store from './store.js'
import Vue from 'vue'
import TheSignIn from './views/TheSignIn.vue'
export default {
  store,
  components: {
    TheSignIn,
  },
  data() {
    return {
      showBuyNum:false,
      buyNum:0,
      text:"LOG IN",
      status:false,
      name:'',
      open:false,
      open2:false,
    }
  },
  created() {
    //ocalStorage計算小紅數字做法,缺點要切分頁才會跳數字,優點會保存
    if (localStorage.hasOwnProperty('buy')){
      let buy = JSON.parse(localStorage.getItem('buy'))
      console.log(buy.length)
      if( (buy.length +1) > 0){
        this.buyNum = buy.length
        this.showBuyNum = true
      }
    }else{
      this.showBuyNum = false
    }

    //vuex計算小紅數字做法,缺點重新刷新數字會歸零,優點數字會即時更新
    // this.$store.dispatch('actionUpdateCount')
    // this.checkCount(this.count)

    if (JSON.parse(localStorage.getItem('signinStatus'))) {
      this.status = JSON.parse(localStorage.getItem('signinStatus')) 
    }
    if (localStorage.getItem('name')) {
      this.name = localStorage.getItem('name')
    }
  

  },
  watch: {

  },
  updated() {
    if (localStorage.hasOwnProperty('buy')){
      let buy = JSON.parse(localStorage.getItem('buy'))
      console.log(buy.length)
      if( (buy.length +1) > 0){
        this.buyNum = buy.length
        this.showBuyNum = true
      }
    }else{
      this.showBuyNum = false
    }

    if (JSON.parse(localStorage.getItem('signinStatus'))) {
      this.status = JSON.parse(localStorage.getItem('signinStatus')) 
    }
    if (localStorage.getItem('name')) {
      //console.log('updated',localStorage.getItem('name'))
      this.name = localStorage.getItem('name')
    }

  },
  computed: {
    getCount(){
      console.log('com',this.$store.state.count)
      return this.$store.state.count
    },
    checkState(){
      return this.$store.state.showLogin
    },
    showMaskState(){
      return this.$store.state.showMask
    },
    showMask(){
      if(this.showMaskState == false){
        document.getElementById("modal").style.display="none"
      }
      return 'close mask'
    }   
  },
  methods: {
    checkCount(count){
      if(count <1){
        this.showBuyNum = false
      }else{
        this.showBuyNum = true
      }
    },
    openNav(){
      this.open = !this.open
    },
    openNav2(){
      this.open2 = !this.open2
    },
    goTheClothes(){
      this.$router.push('/TheClothes')

    },
    goTheOurService(){
      this.$router.push('/TheOurService')
    },
    goTheVacation(){
      this.$router.push('/TheVacation')
    },
    goTheBreakfast(){
      this.$router.push('/TheBreakfast')
    },


    goLogIn() {
      this.$store.dispatch('actionShowLogin')  
      document.getElementById("modal").style.display="block"
    },
    goHome(){
      this.$router.push('/')
    },
    logOut() {
      var vm = this
      let type = localStorage.getItem("type")
      if (type == 'Google') {
        Vue.googleAuth().signOut(function() {
          vm.status = false
          vm.name = ''
          localStorage.clear()
        }, function(error) {
          console.log('signOut() Fail')
        })
      } else {
        FB.logout(function (response) {
          if (response.status == "unknown") {
            localStorage.clear()
            vm.status = false
            vm.name = ''
          } else {
            console.log('fb登出失敗')
          }
          console.log('res when logout', response)
        })

      }


    },
    goShopCart() {
      this.$router.push('/TheShopCart')
    },
    goQA() {
      this.$router.push('/TheQA')
    },
  },
  mounted() {
    // if (JSON.parse(localStorage.getItem('signinStatus'))) {
    //   this.status = JSON.parse(localStorage.getItem('signinStatus')) 
    // }
    // if (localStorage.getItem('name')) {
    //   console.log('updated',localStorage.getItem('name'))
    //   this.name = localStorage.getItem('name')
    // }
      
      //FB初始化
      window.fbAsyncInit = function() {
      FB.init({
        appId      : '920113598342781',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.AppEvents.logPageView(); 
      
      // Get FB Login Status
      FB.getLoginStatus( response => {
      console.log('res', response)        // 這裡可以得到fb回傳的結果
    })
    };
 


  },
}
</script>
<style lang="scss">
@import './assets/style/share.scss';
 #app{
  font-family:"Helvetica Neue", Helvetica, "Lantinghei SC Extralight", "Microsoft JhengHei", "Lucida Grande", 微軟正黑體, Verdana, Arial,  sans-serif;
  font-weight: 300;
  color: #2f3640;
} 
*{
  box-sizing: border-box;
}
section{
  margin:0px;
}
</style>
<style lang="scss" scope>

.modal-mask {
display:none;
position: fixed;
z-index: 9998;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
transition: opacity .3s ease;
}

//login component position
.signin-position{
  z-index:10;
  position: absolute;
  top:15%;
  left:30%;
  @media only screen and (max-width: 768px) {
  top:15%;
  left:20%;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
  top:15%;
  left:11%;
  }
}

//大尺寸的nav
.nav-max{
  width:96vw;
  margin: 0 auto;
  position: absolute;
  top:3%;
  left:2%;
  right:2%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: none;
  }
}
.nav-title{
  margin-top: -2%;
  font-size:60px;
  :hover{
    opacity: 0.5;
  }
}

//小尺寸的nav
.nav-min{
  width: 100vw;
  background-color: #ffffff;
  height:8vh;
  text-align: right;
  padding: 20px;
  position: relative;
  height: 10vh; 
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
}
.nav-min-area{
  z-index:10;
  position: absolute;  
  top:100%;
  left:0%;
  padding:20px;
  background-color: #ecf0f1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav-min-icon{
  font-size: 30px;

  @media only screen and (min-width: 320px) and (max-width: 425px) {
    font-size:22px;
  }

}
.nav-min-icon:hover{
  opacity: 0.5;
}
.nav-min-title{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  font-size:50px;
  :hover{
    opacity: 0.5;
  }
  @media only screen and (max-width: 768px) {
    font-size:40px;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    font-size:28px;
  }
  @media only screen and (max-width: 375px){
    font-size:28px;
  }
}

//商品購買數字小紅圈
.pop-circle-buy-num{
  position: absolute;
  right:1%;
  top:-10%;
  width:25px;
  height: 25px;
  border-radius:999em;
  background-color: #e74c3c;
  color: #fff;
  font-size: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    left:55%;
    top:70%;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    top:66%;
    font-size:15px;
  }


}


.footer{
  width:100vw;
  padding: 10px;
  font-weight: 400;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#ecf0f1;
  @media only screen and (max-width: 768px){
    font-size:10px;
  }
}
.footer-part-1{  
  width:95vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  h4{
    margin-bottom: 20px;
  } 
  @media only screen and (max-width: 768px){
      h4{
         font-size:20px;
      } 
      div{
        width:80vw;
        height:20vh;
      }
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
      flex-direction: column;
      justify-content: center;
      h4{
         font-size:15px;
      } 
      div{
        width:80vw;
        height:30vh;
      }
      div:nth-child(3){
        height:40vh;
      }
  }
}
#map{
@media only screen and (max-width: 768px){
  width:100%;
  height:100%;
}
@media only screen and (min-width: 320px) and (max-width: 425px) {
  width:100%;
  height:100%;
}
}
.footer-part-2{
  width:100vw;
  text-align: center;
  text-transform: uppercase;
}
</style>
