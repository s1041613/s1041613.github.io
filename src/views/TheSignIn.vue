<template>
  <div>
    <div class="layout">
      <div class="border">
        <div class="child">
          <div style="font-size:60px;">SIGN IN</div>
          <div style="font-size:25px;">會員登錄</div>
        </div>
        <div @click="googleLogIn()"><button style="font-size:20px;">Google登入</button></div>
        <hr size="1" width="100%">
        <div @click="fbLogIn()"><button style="font-size:20px;">FB登入</button></div>
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
    //google登入
    googleLogIn() {
      Vue.googleAuth().directAccess()
      Vue.googleAuth().signIn(this.googleOnSignInSuccess, this.googleOnSignInError) 
    },
    googleOnSignInSuccess: function(googleUser) {
      let vm=this;
      if (!localStorage.hasOwnProperty('signinStatus')) {
        localStorage.setItem('type','Google')
        localStorage.setItem("signinStatus", true)
      } 
      var prof = googleUser.getBasicProfile()
      vm.signinEmail = prof.getEmail()
      localStorage.setItem("googleSignInEmail", vm.signinEmail) //localstroage remembers user is signed in
      this.$router.push({name:'TheHome' , params:{ status:true }})
    },
    googleOnSignInError(error) {
      this.response = 'Failed to sign-in'
      console.log('status',this.response)
    },
    //fb登入

    //取的資料需使用Facebook Graph AP
    getFbProfile(){
      FB.api('/me?fields=name,id,email', function (response) {
        console.log('res in graphAPI', response)
        let name = response.name
        let email = response.email
        localStorage.setItem("fbName",name)
        localStorage.setItem("fbSignInEmail",email)
      })
    },
    fbLogIn(){
      let vm = this
      FB.login(function (response) {
        console.log('res', response)
        if (response.status != 'unknown') {
          vm.$router.push({path:'/'})
          if (!localStorage.hasOwnProperty('signinStatus')) {
            localStorage.setItem("type",'Fb')
            localStorage.setItem("signinStatus", true)
          } 
          if (response.status == 'connected') {
            console.log('使用者已登入 FB，且授權你的 app 使用')
            vm.getFbProfile()
          }else{
            console.log('使用者已登入 FB，但未授權你的 app 使用')
          } 
        }else{
          console.log('fb 登入失敗')
        }
        //res裡面status會有幾種狀態
        //connected: 使用者已登入 FB，且授權你的 app 使用
        //not_authorized: 使用者已登入 FB，但未授權你的 app 使用
        //unknown: 使用者沒有登入 FB，或已從你的 app 中登出
      }, 
      //以下的object是我想取得權限的資料
      {
        scope: 'email, public_profile', //使用 scope 取得使用者的 public_profile 和 email。
        return_scopes: true //可以得到被授權的清單,等使用者登入後得到res,裡面會有一個屬性grantedScopes,會告訴你你有權限取得哪些資料
      })

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
