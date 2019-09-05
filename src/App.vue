<template>
  <div>
    <div class="menu-bar">
      hfgdjshgidjhfgjihd
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

    </div>
    

    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
   
    }

  },
  created() {

  },
  watch: {

  },
  updated() {
    

  },
  computed: {
  },
  methods: {
    goHome() {
      this.$router.push('/home')
    },
    goLogin() {
      this.$router.push('/TheSignIn')
    },
    goShopCart() {
      this.$router.push('/TheShopCart')
    },
    goQA() {
      this.$router.push('/TheQA')
    },

  },
  mounted() {
    // const { NODE_ENV } = process.env;
    // document.documentElement.className = NODE_ENV;

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
