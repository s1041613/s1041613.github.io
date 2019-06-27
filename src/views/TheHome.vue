<template>
  <div>
    <div class="pictureArea" style="position:relative;outline:2px soild">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper">
        <!-- slides -->
        <swiper-slide  v-for="item in items" :key="item.key" class="box"> 
            <img :src="item" style="width:100vw;display:block" >     
        </swiper-slide>
        <!-- Optional controls -->
        <!-- 小圓點-->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <section>
      <div class="section-information1">
        <div>
          <h1>About Our Food</h1>
          <h4>We Make Tasty Food,The Best Grills And Drinks</h4>
          <p>Etiam Vitae Augue Odio. Ut Laoreet Ipsum Vel Ultrices Viverra. Donec Nisl Dolor, Mollis Vel Libero Id, Tempor Cursus Lectus. Vestibulum Eu Ligula Et Pharetra Efficitur. Maecenas Eleifend. Phasellus Antelig.</p>
          <p>Etiam Vitae Augue Odio. Ut Laoreet Ipsum Vel Ultrices Viverra. Donec Nisl Dolor, Mollis Vel Libero Id, Tempor Cursus Lectus. Vestibulum Eu Ligula Et Pharetra Efficitur. Maecenas Eleifend.</p>
        </div>
        <div>
          <img src="../assets/home/5.jpg">
        </div>
      </div>
    </section>
    <section>
      <div class="section-information2">
        <div>
          <h1>Promotions</h1>
          <h4>We offer the best value for money</h4>
          <ul>
            <li>10% off on spending over $288</li>
            <li>Get a lottery ticket with spending over $588</li>
            <li>Get a lottery ticket and a free breakfast when you spend 988</li>
          </ul>
        </div>
        <div>
          <img src="../assets/home/6.jpg">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {

  components: {
    swiper,
    swiperSlide

  },
  data() {
    return {
      open:false,
           items:[
        require("../assets/home/1.jpg"),
        require("../assets/home/2.jpg"),
        require("../assets/home/3.jpg"),
        require("../assets/home/4.jpg")
 
      ],
      swiperOption: {
        notNextTick: true,
        // 顯示小圓圈分頁
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        // paginationClickable: true,
        //Slides的滑動方向，可設定水平(horizontal)或垂直(vertical)
        direction: 'horizontal',		
        notNextTick: true, 
        //自動播放速度			
        autoplay: {
          delay: 3000, //切換速度
          disableOnInteraction: false, //點擊或碰觸不會停止自動播放
        },
        //箭頭操作
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        // loop: true, //無限循環
        slidesPerView: 1, //同时显示的slides数量
        centeredSlides: true,//默认active slide居左，设置为true后居中


    },

   
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
    openNav(){
      this.open = !this.open
    },
    goLogIn(){
      this.$router.push('/TheSignIn')
    }

  },
  mounted() {

  },
}
</script>

<style lang="scss">
.pictureArea{
  width: 100vw;
}
.swiper-container {
  width: 100vw;
}
.swiper-slide {
  width: 100vw;
}
.nav-link{
  color:black;
}
section{
  width:100vw;
}
.section-information1{
    margin: 0 auto;
    padding: 50px ;
    display: flex;
    width: 100vw;
    div:nth-child(2){
      padding-top:50px;
    }
    p{
      font-size: 20px;
    }
//  @media only screen and (max-width: 768px) {
//    width:70vw;
//   }
//   @media only screen and (min-width: 320px) and (max-width: 425px) {
//     h2{
//       font-size: 30px;
//     }
//     width:100vw;
//     outline: 0px solid;
//   }
}
.section-information2{

    margin: 0 auto;
    padding: 50px;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    li{
      font-size: 20px;
    }
 @media only screen and (max-width: 768px) {
   width:70vw;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    h2{
      font-size: 30px;
    }
    width:100vw;
    outline: 0px solid;
  }
}
</style>
