<template>
  <div>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">CHOU SHOP</b-navbar-brand>
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
        <b-nav-item-dropdown right>
          <template slot="button-content"><i class="fas fa-user-circle" ></i></template>
          <b-dropdown-item @click="goLogIn()" v-if="status == false">LOG IN</b-dropdown-item>
          <b-dropdown-item @click="logOut()" v-if="status == true">LOG OUT</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/TheShopCart">
          <i class="fas fa-cart-plus"></i>
        </b-nav-item>
        <b-nav-item href="/TheQA">
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
    <!-- <div class="menu-bar">
      <div id="logo" class="logo" @click="goHome">
        <img src="../src/assets/logo2.png" style="width:250px;">
      </div>

      <div class="middle">
        <div id="newIn" style="margin-right: 2px;">
          <router-link to = '/TheNewIn' class="router-link">NEW IN</router-link>
        </div>
        <div id="items">
          <router-link to = '/TheItems' class="router-link">ITEMS</router-link>
        </div>
      </div>

      <div id="icon" 
          class="icon-list">
        <div @click="goLogin"><i class="fas fa-user-circle" ></i></div>
        <div @click="goShopCart"><i class="fas fa-cart-plus"></i></div>
        <div @click="goQA"><i class="fas fa-question-circle"></i></div>
        <div><i class="fas fa-search"></i></div>
        <div><i class="fas fa-globe-asia"></i></div>
        <div><i class="fas fa-money-check-alt"></i></div>
      </div>

    </div> -->
    

    
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
   
    }

  },
  created() {
    this.status = Boolean(localStorage.getItem('signinStatus'))
    console.log('created status',this.status)
  },
  watch: {

  },
  updated() {
    

  },
  computed: {
    
  },
  methods: {
    goLogIn() {
      this.$router.push('/TheSignIn')
    },
    logOut() {
      var vm = this
      Vue.googleAuth().signOut(function() {
        localStorage.removeItem("signinStatus")
        localStorage.removeItem("signinEmail")
      }, function(error) {
        console.log('signOut() Fail')
      })
    },
  },
  mounted() {
    this.status = Boolean(localStorage.getItem('signinStatus'))

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
