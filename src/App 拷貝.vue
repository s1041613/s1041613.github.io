<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand @click="goHome()">CHOU SHOP</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="NEW IN" right>
              <b-dropdown-item href="#">MAY.21</b-dropdown-item>
              <b-dropdown-item href="#">MAY.22</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="ITEMS" right>
              <b-dropdown-item href="#">ON</b-dropdown-item>
              <b-dropdown-item href="#">DOWN</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-nav-item-dropdown right >
              <template slot="button-content"><i class="fas fa-user-circle" ></i></template>
              <b-dropdown-item v-if="this.status == true" href="#">HI,{{this.name}}<i class="far fa-smile"></i></b-dropdown-item>
              <b-dropdown-item @click="goLogIn()" v-if="this.status == false">LOG IN</b-dropdown-item>
              <b-dropdown-item @click="logOut()" v-if="this.status == true">LOG OUT</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item @click="goShopCart()">
              <i class="fas fa-cart-plus"></i>
            </b-nav-item>
            <b-nav-item @click="goQA()">
              <i class="fas fa-question-circle"></i>
            </b-nav-item>
            <b-nav-item-dropdown right>
              <template slot="button-content"><i class="fas fa-globe-asia"></i></template>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">CH</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>
              <i class="fas fa-money-check-alt"></i>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>    
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  components: {
  },
  data() {
    return {
      text:"LOG IN",
      status:false,
      name:'',
    }

  },
  created() {
        console.log(this.status,this.name)
    console.log(JSON.parse(localStorage.getItem('signinStatus')),localStorage.getItem('name'))
    if (JSON.parse(localStorage.getItem('signinStatus'))) {
      this.status = JSON.parse(localStorage.getItem('signinStatus')) 
    }
    if (localStorage.getItem('name')) {
      console.log('updated',localStorage.getItem('name'))
      this.name = localStorage.getItem('name')
    }
  

  },
  watch: {

  },
  updated() {
    console.log(this.status,this.name)
    console.log(JSON.parse(localStorage.getItem('signinStatus')),localStorage.getItem('name'))
    if (JSON.parse(localStorage.getItem('signinStatus'))) {
      this.status = JSON.parse(localStorage.getItem('signinStatus')) 
    }
    if (localStorage.getItem('name')) {
      console.log('updated',localStorage.getItem('name'))
      this.name = localStorage.getItem('name')
    }

  },
  computed: {
    // status() {
    //   this.status = JSON.parse(localStorage.getItem('signinStatus'))
    //   return  this.status
    // }
    
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goLogIn() {
      this.$router.push('/TheSignIn')
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

.menu-bar{
  outline:2px solid;
  display: flex;
  padding: 15px;
  margin-bottom: 0.6vh;
  // background-color:rgba(0,0,0,0.2)
}
.logo{
  flex:2.5;
}
.middle{
  flex:2.5;
  display:flex;
  font-size:25px;
  font-family:serif;
}
.middle > div{
  width:100px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.icon-list{
  display: flex;
  justify-content:flex-end;
  flex:5;
  font-size: 35px;
  letter-spacing:15px; 
}
.router-link{
  text-decoration: none;
  color:black;
}
.router-link-active{
  text-decoration: none;
  color:palevioletred;
  cursor: pointer;  
}

</style>
