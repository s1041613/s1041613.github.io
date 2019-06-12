<template>
  <div>
    <i style="font-size:40px;position: absolute;z-index:10" class="fas fa-align-justify"></i>
    <div class="box">
      <img src="../assets/chou1.png" style="width:100vw;height:vh;overfolw:hidden">
      <div class="word">CHOU'S</div>
    </div>
  


 




  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
           items:[
        require("../assets/chou1.png"),
        require("../assets/chou2.png"),
        require("../assets/chou1.png"),
        require("../assets/chou2.png")
 
      ],


   
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
.box{
  position: relative;
}
.word{
  position: absolute;
  top:50%;
  left:50%;
  }
</style>
