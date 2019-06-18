<template>
  <div>
    <div class="layout">
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
    </div>
  </div>
</template>

<script>
import theClothesItem from "../json/TheClothes-item.json"
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
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.clothesArea{
  width:80vw;
  height:60vh;
  display: flex;
  flex-wrap:wrap;
  img{
    width:20vw;
    height:40vh;
    position: absolute;
  }
}
.clothesArea-item{
  // outline:2px solid red;
  position: relative;
  width:20vw;
  height:40vh;
}
.clothesArea-item:hover .modal-mask{
   display: block;
}
.clothesArea-item:hover .p{
   opacity: 0.4;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:20vw;
  font-size: 20px;
  opacity: 0.8;
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
