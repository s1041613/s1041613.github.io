<template>
  <div>
    <div class="pictureArea" style="position:relative;outline:2px soild">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper">
        <!-- slides -->
        <swiper-slide  v-for="item in items" :key="item.key" class="box"> 
            <img :src="item" style="width:100vw;height:100vh;display:block" >     
        </swiper-slide>
        <!-- Optional controls -->
        <!-- 小圓點-->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
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
        require("../assets/chou1.png"),
        require("../assets/chou2.png"),
        require("../assets/chou1.png"),
        require("../assets/chou2.png")
 
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
    imgHeight:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh=e.detail.height;//图片高度
    var imgw=e.detail.width;//图片宽度
    var swiperH=winWid*imgh/imgw + "px"//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
        Height:swiperH//设置高度
        
    })
    return Height
},
 

  

  
  
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
  height: 100vh;
  width: 100vw;
}
.swiper-container {
  height: 100vh;
  width: 100vw;
}
.swiper-slide {
  height: 100vh;
  width: 100vw;
}
.nav-link{
  color:black;
}



</style>
