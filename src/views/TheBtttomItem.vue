<template>
  <div>
    <div class="layout"> 
      <div class="itemArea">
        <div style="flex:5;"><img :src="$route.query.img"></div>
        <div style="flex:5;" class="itemArea-information">
          <div class="itemArea-information-1">
            <div style="flex:3">{{$route.query.name}}</div>
            <div style="flex:2">NT${{$route.query.money}}</div>
            <div style="flex:3">尺寸：{{$route.query.size}}</div>
            <div style="flex:1">數量</div>
            <div style="flex:1">
              <select name="count" class="select-css">
              　<option v-for="i in 20" :key="i.key">{{i}}</option>
            </select>
            </div>
          </div>
          <div class="itemArea-information-2"><button>ADD</button></div>
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
.layout{
  display: flex;
  // outline: 10px solid;
  justify-content: center;
  align-content: center;
}

.itemArea{
  box-sizing: border-box;
  margin-top: 5%;
  width:70vw;
  // outline: 2px solid;
  display: flex;
  img{
    width:45vw;
    height:70vh;
    // outline: 2px solid;
  }
}
.itemArea-information{
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding:30px;
  font-size: 20px;
  letter-spacing:3px;
  // outline: 2px solid;
}
.itemArea-information-1{
  flex:6; 
  display: flex;
  flex-direction: column;
  // outline: 2px solid;
  justify-content: center;
  div:nth-child(1){
    font-size: 25px;
  }
}
.itemArea-information-2{
  flex:4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // outline: 2px solid;
}
.select-css{
  width:100px;
  
}
</style>
