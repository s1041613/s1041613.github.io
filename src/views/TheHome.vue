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
      <div class="section-information">
        <div>
          <div class="my-font-css">
          <span>Our </span>
          <span>Food</span>
          </div>
          <h4>We Make Tasty Food,The Best Grills And Drinks</h4>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
          <p>you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
        </div>
        <img src="../assets/home/5.jpg">
      </div>
    </section>
    <section>
      <div class="section-information">
        <div>
          <div class="my-font-css">
          <span>Our </span>
          <span>Promotions</span>
          </div>
          <h4>We offer the best value for money</h4>
          <p>10% off on spending over $288</p>
          <p>Get a lottery ticket with spending over $588</p>
          <p>Get a lottery ticket and a free breakfast when you spend 988</p>
        </div>
        <img src="../assets/home/6.jpg">
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
.section-information{
    margin: 0 auto;
    padding: 50px ;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    div:nth-child(2){   
      padding-top:40px;
    }
    p{
      font-size: 20px;
    }
    @media only screen and (max-width: 768px) {
      width:100vw;
      display: flex;
      flex-direction: column;
      h1{
        font-size:25px;
      }
      h4{
        font-size:16px;
      }
      p{
        font-size: 15px;
      }
      img{
        width: 100%;
        height:100%;
      }
    }
    @media only screen and (min-width: 320px) and (max-width: 425px) {
      h1{
        font-size:20px;
      }
      h4{
        font-size:16px;
      }
      p{
        font-size: 10px;
      }
    }
      @media only screen and (max-width: 320px){
        div:nth-child(2){
          img{
            width:80vw;
          }
        }
      }
}
</style>
