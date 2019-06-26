<template>
  <div id="app">
    <section style="position:relative">
      <div><router-view></router-view></div>
      <nav>
        <div class="nav">
          <div @click="openNav()"><i class="fas fa-align-justify nav-left-icon"></i></div>
          <div class="nav-sidebar" v-show="this.open == true">
            <div class="nav-sidebar-text">
              <h1>BASE</h1>
              <h3 @click="goTheClothes()">TOP</h3>
              <h3 @click="goTheButtom()">BOTTOM</h3>
              <h1>OOTD</h1>
              <h3 @click="goTheVacation()">VACATION</h3>
              <h3 @click="goTheDaning()">DANING</h3>
            </div>
          </div>
          <div @click="goHome()" v-show="this.$route.meta.showTitle == true" class="nav-title-img">
            <img src="./assets/logo.png">
          </div> 
          <div class="nav-right-icon">
            <div @click="goLogIn()" class="login" v-if="this.status == false">
              <img class="nav-right-icon-img" src="./assets/account.png">
            </div>
            <div @click="goShopCart()">
              <img class="nav-right-icon-img" src="./assets/shopcart.png" />
            </div>
            <div @click="logOut()" v-if="this.status == true">
              <img class="img-logout" src="./assets/logout.png">
            </div>
          </div>
        </div>
      </nav>
    </section>
    <footer>
      <div class="footer">
        <div style="margin-bottom:10px;">
          <div>與我們聯絡</div>
          <div>+886-0963-082-683</div>
          <div>y10135124@gmail.com</div>
        </div>
        <div style="text-transform: uppercase;">© Copyright 2018 CHOU'. Site by CHOU.</div>
      </div>
    </footer> 
    <div>
  </div>
</div>
</template>

<script>
import store from './store.js'
import Vue from 'vue'
export default {
  store,
  components: {
  },
  data() {
    return {
      text:"LOG IN",
      status:false,
      name:'',
      open:false,
      open2:false,
    }

  },
  created() {
    console.log(this.$route.meta.showTitle)
    //console.log(this.status,this.name)
    //console.log(JSON.parse(localStorage.getItem('signinStatus')),localStorage.getItem('name'))
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
    //console.log(this.status,this.name)
    //console.log(JSON.parse(localStorage.getItem('signinStatus')),localStorage.getItem('name'))
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
    goTheButtom(){
      this.$router.push('/TheBottom')
    },
    goTheVacation(){
      this.$router.push('/TheVacation')
    },
    goTheDaning(){
      this.$router.push('/TheDaning')
    },


    goLogIn() {
      this.$router.push('/TheSignIn')
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
  background-image: url(./assets/back.png);
  background-repeat: repeat;
  background-size: cover;
  // height: 150vh;

}
*{
  box-sizing: border-box;
}
.nav{
  width:96vw;
  margin: 0 auto;
  position: absolute;
  top:5%;
  left:2%;
  right:2%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  img:hover{
    opacity: 0.5;
  }
}
.nav-left-icon{
  font-size:35px;
  @media only screen and (max-width: 768px) {
    font-size:30px;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    font-size:25px;
  }
  @media only screen and (max-width: 375px){
    font-size:20px;
  }
}
.nav-left-icon:hover{
  opacity: 0.5;
}

.nav-title-img{
  margin-top: -2%;
  padding-left: 5%;
  img{
  width:25vw;
  }
  @media only screen and (max-width: 768px) {
    img{
      width:30vw;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    img{
      width:40vw;
    }
  }
}
.nav-right-icon{
  display: flex;
}
.nav-right-icon-img{
  width:4vw;
  @media only screen and (max-width: 768px) {
      width:6vw;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
      width:8vw;
  }
}
.img-logout{
    width:3vw;
    margin-top:4.5px; 

  @media only screen and (max-width: 768px) {
    width:4.5vw;
    margin-top:4px; 
  }
  @media only screen and (max-width: 425px){
    width:5.5vw;
    margin-top:4px; 
  }
  @media only screen and (max-width: 375px) {
    width:6vw;
    margin-top:0px; 
  }

}
.nav-sidebar{
  position: absolute;
  z-index:-1;
  top:-100%;
  left:-2%;
  box-shadow: 0 0 5em 0 rgba(0, 0, 0, 0.175);
  width:100vw;
  height: 180vh;
  display: flex;
  flex-direction: column;
  padding:35px;
  line-height: 40px;
  overflow: hidden;
  background-image: url(./assets/menu.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  h1{
    font-weight: 500;
    margin-bottom: 30px;
    margin-top: 70px;
    font-weight: 300;
  }
}
.nav-sidebar-text{
  position: absolute;
  left:10%;
  top:5%;
  h1:hover{
    opacity: 0.5;
  }
  h3:hover{
    opacity: 0.5;
  }
}


.footer{
  display: flex;
  padding: 20px;
  background-color: pink;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 30px;
  div{
    font-size:18px;
    line-height: 30px;
  }
  @media only screen and (max-width: 375px){
    div{
      font-size: 15px;
      line-height: 30px;
    } 
  }
  @media only screen and (max-width: 320px){
    div{
      font-size: 12px;
    } 
  }
}

</style>
