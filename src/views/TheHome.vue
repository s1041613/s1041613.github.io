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
        <h2>最新活動</h2>
        <p>消費滿488即可享85折</p>
        <p>消費滿1880即可獲得抽獎卷一張</p>
        <p>消費滿2880即可獲得抽獎卷一張和一個隨機單品</p>
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
        require("../assets/chou2.png"),
        // require("../assets/chou2.png"),
        // require("../assets/chou1.png"),
        // require("../assets/chou2.png")
 
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
  margin-bottom:50px; 
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
  margin-bottom:50px; 
  width:100vw;
}
.section-information{
    margin: 0 auto;
    padding: 50px ;
    width:60vw;
    outline: 1px solid #bdc3c7;
    h2{
      text-align: center;
      font-weight: 400;
    }
    p{
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
