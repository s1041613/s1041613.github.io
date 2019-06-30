<template>
  <div id="app">
    <section style="position:relative;">
      <div><router-view></router-view></div>
      <!-- <nav>
        <div class="nav-max">
          <div>
            <button @click="goHome()" class="nav-button">HOME</button>
            <button @click="goTheOurService()" style="margin-right:0px;" class="nav-button">OUR SERVICE</button>
          </div>
          <div @click="goHome()" class="nav-title-img">
            <img src="./assets/logo.png">
          </div> 
          <div class="nav-right-icon">
            <button @click="goLogIn()" class="nav-button">LOG IN</button>
            <button @click="goShopCart()" style="margin-right:0px;" class="nav-button">SHOP CART</button>
            <div v-show="showBuyNum == true" class="pop-circle-buy-num">{{this.buyNum}}</div>
          </div>
        </div>
      </nav> -->
      <nav class="nav-min">
          <div @click="openNav()"><i class="fas fa-align-justify nav-min-icon"></i></div> 
          <div v-show="this.open == true">
              <button @click="goHome()" class="nav-button">HOME</button>
              <button @click="goTheOurService()" style="margin-right:0px;" class="nav-button">OUR SERVICE</button>
              <div @click="goHome()" class="nav-title-img">
              <img src="./assets/logo.png">
              </div> 
              <button @click="goLogIn()" class="nav-button">LOG IN</button>
              <button @click="goShopCart()" style="margin-right:0px;" class="nav-button">SHOP CART</button>
              <div v-show="showBuyNum == true" class="pop-circle-buy-num">{{this.buyNum}}</div>    
          </div> 
      </nav>
    </section>
    <footer>
      <div class="footer">
        <div style="margin-bottom:20px;">
          <h2>Contact Us</h2>
          <div><i class="fas fa-phone"></i>  +886-0963-082-683</div>
          <div><i class="fas fa-envelope"></i>  y10135124@gmail.com</div>
        </div>
        <div style="text-transform: uppercase;">© Copyright 2018 CHOU'. Site by CHOU.</div>
      </div>
    </footer> 
    <div class="modal-mask" id="modal">
      <TheSignIn class="signin-position" v-show="showLogin == true"></TheSignIn>
      <div @click="close()" class="cross-position"><i class="fas fa-times-circle"></i></div>
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
      showLogin:false,
    }

  },
  created() {
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
    // a() {
    //   this.$store.dispatch('actionShowLogo')
    // },
    // status() {
    //   this.status = JSON.parse(localStorage.getItem('signinStatus'))
    //   return  this.status
    // }
    
  },
  methods: {
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
      this.showLogin = true
      document.getElementById("modal").style.display="block"
    },
    close(){
      document.getElementById("modal").style.display="none"
      this.showLogin = false
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
#app{
  font-family:"Helvetica Neue", Helvetica, "Lantinghei SC Extralight", "Microsoft JhengHei", "Lucida Grande", 微軟正黑體, Verdana, Arial,  sans-serif;
  font-weight: 300;
  color: #333333;
}
section{
  margin:0px;
}
*{
  box-sizing: border-box;
}
.signin-position{
  z-index:10;
  position: absolute;
  top:15%;
  left:30%;
}
.cross-position{
  position: absolute;
  z-index: 10;
  top:18%;
  right:31%;
  i{
    font-size: 25px;
  }
}
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
}
.nav-button{
  width:10vw;
  height:6vh;
  border-radius:30px;
  border:2px solid #fff;
  font-weight:500;
  background-color:rgb(127, 140, 141,0.5);
  color: #fff;
  margin-right:30px;
  // @media only screen and (max-width: 768px) {
  //   font-size:30px;
  // }
  // @media only screen and (min-width: 320px) and (max-width: 425px) {
  //   font-size:25px;
  // }
  // @media only screen and (max-width: 375px){
  //   font-size:20px;
  // }
}
.nav-button:hover{
  background-color:#fff;
  color: rgb(231, 76, 60);

}
.nav-title-img{
  margin-top: -2%;
  padding-left: 5%;
  img{
  width:25vw;
  }
  img:hover{
    opacity: 0.5;
  }
  // @media only screen and (max-width: 768px) {
  //   img{
  //     width:30vw;
  //   }
  // }
  // @media only screen and (min-width: 320px) and (max-width: 425px) {
  //   img{
  //     width:40vw;
  //   }
  // }
}
.nav-right-icon{
  display: flex;
}
.nav-right-icon-img{
  width:4vw;
  // @media only screen and (max-width: 768px) {
  //     width:6vw;
  // }
  // @media only screen and (min-width: 320px) and (max-width: 425px) {
  //     width:8vw;
  // }
}
.nav-min{

  //outline: 2px solid;
  position: absolute;
  top:1%;
  right:3%;
  z-index:10;
  // background-color: #ffffff;
}
.nav-min-icon{
  font-size: 30px;
  
}
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
}
.nav-sidebar{
  position: absolute;
  z-index: -100;
  top:-100%;
  left:-2%;
  box-shadow: 0 0 5em 0 rgba(0, 0, 0, 0.175);
  width:100vw;
  height: 150vh;
  display: flex;
  flex-direction: column;
  padding:35px;
  line-height: 40px;
  overflow: hidden;
  // background-image: url(./assets/home/nav.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  h1{
    font-weight: 500;
    margin-bottom: 30px;
    margin-top: 70px;
    font-weight: 400;
  }
  h3{
    font-weight: 300;
  }
}
.nav-sidebar-text{
  position: absolute;
  left:10%;
  top:5%;
  h3:hover{
    opacity: 0.5;
  }
}


.footer{
  position: absolute;
  // bottom:-40%;
  width:100vw ;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 30px;
  background: url(./assets/home/1.jpg);
  background-size: cover;
  height:40vh;
  font-weight: 400;
  div{
    font-size:18px;
    line-height: 30px;
  }
  // @media only screen and (max-width: 375px){
  //   div{
  //     font-size: 15px;
  //     line-height: 30px;
  //   } 
  // }
  // @media only screen and (max-width: 320px){
  //   div{
  //     font-size: 12px;
  //   } 
  // }
}
.modal-mask {
display:none;
position: fixed;
z-index: 9998;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
/* display: table; */
transition: opacity .3s ease;
}
</style>
