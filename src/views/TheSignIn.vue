<template>
  <div>
    <div class="layout">
      <div class="border">
        <div class="child">
          <div style="font-size:60px;">SIGN IN</div>
          <div style="line-height:80px;">
            <div @click="googleLogIn()"><button class="loginBtn loginBtn--google">Login with Google</button></div>
            <div @click="fbLogIn()"><button class="loginBtn loginBtn--facebook">Login with Facebook</button></div>
          </div>
      </div>

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
      console.log('googleUser.getBasicProfile()',googleUser.getBasicProfile())
      vm.signinEmail = prof.getEmail()
      let name = prof.ig 
      localStorage.setItem("signInEmail", vm.signinEmail) //localstroage remembers user is signed in
      localStorage.setItem("name",name)
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
        localStorage.setItem("name",name)
        localStorage.setItem("signInEmail",email)
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
  // box-sizing:border-box;

}
.layout{

  @extend %all-need;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.border{
  // outline: 2px solid;
  // background-color:rgba(255,128,153,0.1) ;
  @extend %all-need;
  padding: 50px;
  width: 40vw;
  height:50vh;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}
.child{
  @extend %all-need;
  flex-direction:column;
  align-items: center;
  // line-height: 50px;
  

}

/* Shared */
.loginBtn {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
}
//圖片部分
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}


/* Facebook */
.loginBtn--facebook {
  background-color: #4C69BA;
  background-image: linear-gradient(#4C69BA, #3B55A0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354C8C; //
}
.loginBtn--facebook:before {
  border-right: #364e92 1px solid; //分隔線
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
  background-color: #5B7BD5;
  //設置多背景
  background-image: linear-gradient(#5B7BD5, #4864B1);
}


/* Google */
.loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #DD4B39;
}
.loginBtn--google:before {
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
}
.loginBtn--google:hover,
.loginBtn--google:focus {
  background: #E74B37;
}


</style>
