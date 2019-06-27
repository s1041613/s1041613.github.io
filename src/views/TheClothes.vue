<template>
  <div>
    <section class="layout">
      <div class="clothesArea">
        <div v-for="i in theClothesItem" :key="i.key">
          <div class="clothesArea-item" @click="go(i.component_name,i.id,i.img,i.name,i.money,i.size)">
              <img :src="i.img" class='p'> 
              <div class="modal-mask">
                <div class="show">
                  <div class="itemImformation">
                    <div>{{i.name}}</div>
                    <div>{{i.money}}</div>
                  </div>
                </div>
              </div>       
          </div>
        </div>
      </div>
  </section>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      theClothesItem,
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
    go(cname,id,img,name,money,size){
      console.log(id)
      this.$router.push({name:cname,query: { id:id ,img:img,name:name,money:money,size:size}})
    },

  },
  mounted() {

  },
}
</script>

<style lang="scss">
.layout{
  width:100vw;
}
.clothesArea{
  //outline: 5px solid red;
  width:80vw;
  display: flex;
  flex-wrap:wrap;
  margin-top: 8%;
  img{
    //outline: 5px solid pink;
    width:20vw;
    height:35vh;
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 15%;
    width:90vw;
    img{
      //outline: 5px solid orange;
      width:30vw;
      height:25vh;
    } 
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
    margin-top: 20%;
    width:80%;
    img{
      //outline: 5px solid yellow;
      width:40vw;
      height:20vh;
    } 
  }
  @media only screen and (max-width: 320px) {
    margin-top: 20%;
    img{
      width:40vw;
      height:18vh;
    } 
  }
}
.clothesArea-item{
  position: relative;
  width:20vw;
  height:35vh;
  @media only screen and (max-width: 768px) {
    width:30vw;
    height:25vh;
  }
  @media only screen and (min-width: 320px) and (max-width: 425px) {
      width:40vw;
      height:20vh;
  }
  @media only screen and (max-width: 320px){
      width:40vw;
      height:18vh;
  }
}
.clothesArea-item:hover .modal-mask{
   display: block;
}
.clothesArea-item:hover .p{
   opacity: 0.5;
}
.clothesArea-item:hover .show{
   display: block;
}
.show{
  display: none;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
}
.itemImformation{
  //outline: 10px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:20vw;
  font-size: 20px;
  font-weight: 300;
  color: #2c3e50;
}
.modal-mask {
display:none;
position: absolute;
z-index: 15;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 20vw;
height: 40vh;
// background-color: rgba(0, 0, 0, 0.01);
// transition: opacity .1s ease;
}

</style>
