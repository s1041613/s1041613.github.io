<template>
  <div>
    <div class="layout">
      <div class="border">
        <div class="child">
          <div style="font-size:60px;">SIGN IN</div>
          <div style="font-size:25px;">會員登錄</div>
        </div>
        <div @click="logIn()"><button style="font-size:20px;">Google登入</button></div>
        <hr size="1" width="100%">
        <div><button style="font-size:20px;">FB登入</button></div>
      </div>

    </div>


  </div>
</template>

<script>
import Vue from 'vue'
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
    
    logIn() {
      Vue.googleAuth().directAccess()
      Vue.googleAuth().signIn(this.onSignInSuccess, this.onSignInError) 
    },
    onSignInSuccess: function(googleUser) {
      let vm=this;
      localStorage.setItem("signinStatus", true)
      var prof = googleUser.getBasicProfile()
      vm.signinEmail = prof.getEmail()
      localStorage.setItem("signinEmail", vm.signinEmail) //localstroage remembers user is signed in
      this.$router.push({path:'/'})
    },
    onSignInError(error) {
      this.response = 'Failed to sign-in'
      console.log('status',this.response)
    },
  },
  mounted() {

  },
}
</script>

<style lang="scss">
//varible
$font:serif;

%all-need{
  display:flex;
  font-family:$font;
  box-sizing:border-box;

}
.layout{
  @extend %all-need;
  justify-content: center;
  align-items: center;
  height:86vh;
}
.border{
  @extend %all-need;
  outline: 2px solid red;
  padding: 50px;
  width: 38vw;
  height:70vh;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  line-height: 100px;
}
.child{
  @extend %all-need;
  flex-direction:column;
  align-items: center;
  line-height: 50px;

}


</style>
