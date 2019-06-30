<template>
<div>
  <section id="signin-area-is-show" class="signin-area">
      <div class="signin-box">
        <div class="signin-box-content">
          <h1>CHOU'S</h1>
          <div class="signin-box-content-gf-button">
            <button @click="googleLogIn()" class="loginBtn loginBtn--google">Login with Google</button>
            <button @click="fbLogIn()" class="loginBtn loginBtn--facebook">Login with Facebook</button>
          </div>
          <div class="signin-box-content-self-login">
            <h3>Or Sign in with your account</h3>
            <span><i class="fas fa-user"></i><input v-model="account" /></span>
            <span><i class="fas fa-key"></i><input v-model="passward" /></span>
            <button>Login</button>
            <span>Registered｜Forget passward</span>
          </div>
        </div>
      </div>
  </section>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  components: {

  },
  data() {
    return {
      account:"account",
      passward:"passward",

   
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
    // close(){
    //   document.getElementById("signin-area-is-show").style.display="none"

    // },
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
      localStorage.setItem("signInEmail", JSON.stringify(vm.signinEmail))//localstroage remembers user is signed in
      localStorage.setItem("name",JSON.stringify(name))
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
        localStorage.setItem("name",JSON.stringify(name))
        localStorage.setItem("signInEmail",JSON.stringify(email))
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
.signin-area{
  display: block;
}
.signin-box{
  margin-right:40px;
  outline: 2px solid #bdc3c7;
  box-shadow: 0 0 5em 0 rgba(0, 0, 0, 0.05);
  display:flex;
  padding: 50px;
  width: 40vw;
  height:80vh;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background: #ecf0f1;
}
.signin-box-content{
  position: relative;
  padding:50px;
  display:flex;
  flex-direction:column;
  align-items: center;
  h1{
    font-weight:400;
    margin-bottom: 30px;
  }
}
.signin-box-content-gf-button{
  display: flex;
  flex-direction:column;
  margin-bottom: 50px;
}
.signin-box-content-self-login{
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding:10px;
  h3{
    font-weight:300;
    margin-bottom: 18px;
  }
  > span > input{
    border-radius: 5px;
    width:12vw;
    height:5vh;
    border:1px solid #bdc3c7; 
    font-size: 18px;
    color:#7f8c8d;
    margin-bottom: 20px;
    font-weight: 200;
    padding: 10px;
  }
  > span > input:hover{
    border:1px solid #7f8c8d; 
  }
  > span > i{
    font-size: 25px;
    margin-right: 10px;
  }
  button{
    border-radius: 5px;
    width:14vw;
    height:6vh;
    font-size: 20px;
    background-color: #e84118;
    color: #ffffff;
    margin-bottom: 20px;
  }
  button:hover{
    background-color: #e74c3c;
  }
  span{
    font-size: 15px;
    color:#7f8c8d;
  }
  
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
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.5);
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
