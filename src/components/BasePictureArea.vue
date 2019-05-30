<template>
    <div class="pictureArea">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper">
        <!-- slides -->
        <swiper-slide  v-for="item in items" :key="item.key" class="box"> 
            <img :src="item">     
        </swiper-slide>
        <!-- Optional controls -->
        <!-- 小圓點-->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- 左箭頭和右箭頭-->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
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
           items:[
        require("../assets/1.jpg"),
        require("../assets/2.jpg"),
        require("../assets/3.jpg"),
        require("../assets/4.jpg")
 
      ],
      swiperOption: {
        notNextTick: true,
        // 顯示小圓圈分頁
        pagination: {
          el: '.swiper-pagination',
          //小圓圈點擊可以切頁
          clickable :true,

        },
        //Slides的滑動方向，可設定水平(horizontal)或垂直(vertical)
        direction: 'horizontal',		
        //自動播放速度			
        autoplay: {
          delay: 3000, //切換速度
          disableOnInteraction: false, //點擊或碰觸不會停止自動播放
        },
        //箭頭操作
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true, //無限循環
        slidesPerView: 1, //顯示數量

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

  },
  mounted() {

  },
}
</script>

<style lang="scss">
.pictureArea{
  outline: 2px solid;
  margin-bottom: 0.6vh;
}
.swiper-container {
  height: 55vh;
  overflow:hidden;
  outline: 1px solid;
}
.swiper-slide {
  // height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center
}
</style>
