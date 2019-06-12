<template>
  <div>
    <div class="layout">
      <div class="noItem">
        <div class="section1-item" style="margin-top:10%;line-height:60px;">
          <div><i style="font-size:150px;opacity: 0.5;" class="fas fa-shopping-cart"></i></div>
          <div>您的購物車是空的,記得加入商品喔</div>
        </div>
        <div style="margin-top:5%;">
          <button @click="goHome()">繼續購物</button>
        </div>
      </div>
    </div>
    <div class="layout" v-if="show">
      <div class="haveItem" >
        <div class="section1">
          <div class='section1-item'>
            <div id="circle">
              <div class="num">1</div>
            </div>
            <div class="text">購物車</div>
          </div>
          <div class='section1-item'>
            <div id="circle">
              <div class="num">2</div>
            </div>
            <div class="text">填寫資料</div>
          </div>
          <div class='section1-item'>
            <div id="circle">
              <div class="num">3</div>
            </div>
            <div class="text">訂單確認</div>
          </div>
        </div>
        <div class="section2">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">商品資料</th>
                <th scope="col">單品價格</th>
                <th scope="col">數量</th>
                <th scope="col">小計</th>
                <th scope="col"><i class="fas fa-trash-alt"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="section3">
          <div>總計金額</div>
        </div>
        <div class="section4">
          <button>我要繼續逛</button>
          <button>下一步</button>
        </div>
      </div>
    </div>

   


  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      shopCart:[],
   
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
    goHome(){
      this.$router.push({path:'/'})
    }

  },
  mounted() {

  },
}
</script>

<style lang="scss">
.layout{
  display: flex;
  align-items:center;
  justify-content:center;
  height: 100vh;
}
.haveItem{
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  line-height:50px;
}
.section1{
  // outline: 2px solid;
  width:40vw;
  display: flex;
  justify-content:space-between;
}
.section1-item{
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  // outline: 2px solid;
  
}
.num{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
 #circle{
  width: 50px;
  height: 50px;
  background:pink;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  position: relative;
  }
.section2{
  width:80vw;
}
.section3{
  width:80vw;
  text-align: right;
}
.section4{
  width:80vw;
  justify-content:space-between;
  display: flex;
}
.noItem{

  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

}
</style>
