<template>
  <div>
    <div  @click="openNav()"><i class="fas fa-align-justify nav"></i></div>
    <div class="icon">
      <div @click="goLogIn()" class="login" v-if="this.status == false">
        <img src="./assets/account.png">
      </div>
      <div @click="goShopCart()">
        <img src="./assets/shopcart.png" style="
        width:4vw;
        height:6vh;" />
      </div>
      <div @click="logOut()" v-if="this.status == true">
        <i style="font-size:40px" class="fas fa-sign-out-alt"></i>
      </div>
    </div>

    <div v-if="this.$route.meta.showTitle == true" @click="goHome()" class="title">
      <img src="./assets/logo.png">
    </div>
    <div v-if="this.open == true" style="position:absolute;z-index:10;top:15%;left:2%">
      <div @click="goTheClothes()" class="navText" >上衣</div>
      <div @click="goTheButtom()" class="navText">褲子</div>
      <div @click="openNav2()" class="navText">風格</div>
      <div v-if="this.open2 == true">
        <div @click="goTheOldSchool()" class="navText2">復古</div>
        <div @click="goTheEasy()" class="navText2">簡約</div>
        <div @click="goTheDaning()" class="navText2">丹寧</div>
      </div>
    </div>
    <router-view></router-view>
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
      this.$router.push('/TheBtttom')
    },
    goTheOldSchool(){
      this.$router.push('/TheOldSchool')
    },
    goTheEasy(){
      this.$router.push('/TheEasy')
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
.nav{
  font-size:40px;
  position:absolute;
  z-index:10;
  top:5%;
  left:3%
}
.nav:hover{
  opacity: 0.4;
}
.icon{
  width:150px;
  position:absolute;
  z-index:10;
  top:5%;
  right: 5%;
  display: flex;
  justify-content:space-between;
  img{
    width:4vw;
    height:6vh;
  }
  img:hover{
  opacity: 0.4;
  }
}
.title{
  position:absolute;
  z-index:10;
  top:8%;
  transform:translate(-50%, -50%);
  left: 50%;
  img{
    width:25vw;
    height:15vh;
  }
  img:hover{
    opacity: 0.4;
  }
}
.navText{
  font-size: 40px;
}
.navText:hover{
  opacity: 0.4;
}
.navText2{
  font-size: 30px;
}
.navText2:hover{
  opacity: 0.4;
}
</style>
