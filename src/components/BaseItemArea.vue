<template>
  <div>
    <div id="itemArea" class="itemArea">
      <div class="section1">
        <div>HOT ITEM 20</div>
        <div style="display:flex;">
          <div>Price</div>
          <div style="margin-left:10px;px;">
            <select name="sort">
            　<option>Low to high</option>
            　<option>High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div class="section2">
      
          <div v-for="item in hotItem[this.page]" :key="item.key">
            <div class="arrangeItem">
              <img :src="item.img">
              <div>{{item.name}}</div>
              <div>{{item.money}}</div>
            </div>          
          </div> 
      
      </div>
      <div class="section3">
        <div v-for="num in hotItem.length" :key="num.key">
          <div class="num-hover" @click="go(num)" :id="num">{{num}}</div>
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
      page:0,
      initialPage:0,
      currentPage:0,

      
      hotItem:[
      //1
      [
        
          //1-1
          {
            "name": "查理布朗短T",
            "money": 260,
            "img": require('../assets/hot/1.jpg')
          },
          {
            "name": "查理‧布朗漫畫長版T",
            "money": 200,
            "img": require('../assets/hot/2.jpg')
          },
          {
            "name": "查理‧布朗露營字母短袖棉T",
            "money": 430,
            "img": require('../assets/hot/3.jpg')
          },
          
          {
            "name": "查理．布朗搭火車短袖洋裝",
            "money": 450,
            "img": require('../assets/hot/4.jpg')
          },
        
        
          //1-2
          {
            "name": "查理布朗短T",
            "money": 260,
            "img": require('../assets/hot/4.jpg')
          },
          {
            "name": "查理‧布朗漫畫長版T",
            "money": 200,
            "img": require('../assets/hot/5.jpg')
          },
          {
            "name": "查理‧布朗露營字母短袖棉T",
            "money": 430,
            "img": require('../assets/hot/6.jpg')
          },
          
          {
            "name": "查理．布朗搭火車短袖洋裝",
            "money": 450,
            "img": require('../assets/hot/7.jpg')
          },
        
        
          //1-3
          {
            "name": "查理布朗短T",
            "money": 260,
            "img": require('../assets/hot/8.jpg')
          },
          {
            "name": "查理‧布朗漫畫長版T",
            "money": 200,
            "img": require('../assets/hot/9.jpg')
          },
          {
            "name": "查理‧布朗露營字母短袖棉T",
            "money": 430,
            "img": require('../assets/hot/10.jpg')
          },
          
          {
            "name": "查理．布朗搭火車短袖洋裝",
            "money": 450,
            "img": require('../assets/hot/2.jpg')
          },
        
      ],

      //2
      [
        
        //2-1
        {
          "name": "查理布朗短T",
          "money": 260,
          "img": require('../assets/hot/2.jpg')
        },
        {
          "name": "查理‧布朗漫畫長版T",
          "money": 200,
          "img": require('../assets/hot/3.jpg')
        },
        {
          "name": "查理‧布朗露營字母短袖棉T",
          "money": 430,
          "img": require('../assets/hot/4.jpg')
        },
        
        {
          "name": "查理．布朗搭火車短袖洋裝",
          "money": 450,
          "img": require('../assets/hot/5.jpg')
        },
        
      //2-2
      
        {
          "name": "查理布朗短T",
          "money": 260,
          "img": require('../assets/hot/1.jpg')
        },
        {
          "name": "查理‧布朗漫畫長版T",
          "money": 200,
          "img": require('../assets/hot/2.jpg')
        },
        {
          "name": "查理‧布朗露營字母短袖棉T",
          "money": 430,
          "img": require('../assets/hot/3.jpg')
        },
        
        {
          "name": "查理．布朗搭火車短袖洋裝",
          "money": 450,
          "img": require('../assets/hot/4.jpg')
        },
      
      //2-3
      
        {
          "name": "查理布朗短T",
          "money": 260,
          "img": require('../assets/hot/3.jpg')
        },
        {
          "name": "查理‧布朗漫畫長版T",
          "money": 200,
          "img": require('../assets/hot/3.jpg')
        },
        {
          "name": "查理‧布朗露營字母短袖棉T",
          "money": 430,
          "img": require('../assets/hot/2.jpg')
        },
        
        {
          "name": "查理．布朗搭火車短袖洋裝",
          "money": 450,
          "img": require('../assets/hot/4.jpg')
        },
        
      ],
      //3
      [
      //3-1
      
        {
          "name": "查理布朗短T",
          "money": 260,
          "img": require('../assets/hot/1.jpg')
        },
        {
          "name": "查理‧布朗漫畫長版T",
          "money": 200,
          "img": require('../assets/hot/2.jpg')
        },
        {
          "name": "查理‧布朗露營字母短袖棉T",
          "money": 430,
          "img": require('../assets/hot/3.jpg')
        },
        
        {
          "name": "查理．布朗搭火車短袖洋裝",
          "money": 450,
          "img": require('../assets/hot/4.jpg')
        },
      
      //3-2
      
        {
          "name": "查理布朗短T",
          "money": 260,
          "img": require('../assets/hot/1.jpg')
        },
        {
          "name": "查理‧布朗漫畫長版T",
          "money": 200,
          "img": require('../assets/hot/2.jpg')
        },
      
    
    ],

  ]

   
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
    go(clickNum) {
      if (clickNum !== this.page || this.page == clickNum ) {
        this.page = clickNum - 1
      }
    },

  },
  mounted() {

  },
}
</script>

<style lang="scss">
.itemArea{
  font-family:serif;
  font-size: 18px;
  display: flex;
  flex-direction:column;
  align-items:center;
  outline: 2px solid;
  padding: 20px;
  @media screen and (max-width:1280px) {
    font-size: 15px;
  }
}
.section1{
  width:90vw;
  display: flex;
  justify-content:space-between;
  box-sizing:border-box;
  padding-left:50px;
  padding-right:80px;

}
.section2{
  width:90vw;
  display: flex;
  box-sizing:border-box;
  justify-content:flex-start;
  flex-wrap:wrap;
  img{
      width:250px;
      height:250px;
    }
  @media screen and (max-width:1280px) {
    padding-left:5.5vw;
    img{
      width:200px;
      height:200px;
    }
  }
}

.arrangeItem{
  width:300px;
  height:300px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media screen and (max-width:1280px) {
  width:250px;
  height:250px;
}
}
.section3{
  display: flex;
  width:90vw;
  justify-content:center;
  letter-spacing:15px; 
}

.num-hover{
  color:black;
  
}
.num-hover:hover{
  color:palevioletred;
  cursor: pointer;  
  
}

</style>
