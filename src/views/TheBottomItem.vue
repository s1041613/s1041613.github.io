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
              <select name="count" class="select-css" v-model="count">
              　<option v-for="i in 20" :key="i.key">{{i}}</option>
            </select>
            </div>
          </div>
          <div class="itemArea-information-2" @click="saveItem($route.query.id,$route.query.name,$route.query.money,$route.query.size,count)">
            <button>ADD</button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import axios from 'axios';
export default {
  components: {

  },
  data() {
    return {
      count:1,
      buyItem:[],
    }
  },
  created() {
    // console.log('this.buyItem',this.buyItem)

  },
  watch: {
    // buyItem(){
    //   this.buyItem = JSON.parse(localStorage.getItem('buy'))
    // }

  },
  updated() {


  },
  computed: {

  

  
  
  },
  methods: {
    saveItem(id,name,money,size,count){
      let item={
        id:id,
        name: name,
        money: money,
        size : size,
        count:count
      }
      this.buyItem.push(item)
      item ={}
      if(!localStorage.hasOwnProperty('buy')){
        localStorage.setItem('buy',JSON.stringify(this.buyItem))
      }else{
        let oldBuy = JSON.parse(localStorage.getItem('buy'))
        for(let i in oldBuy){
          this.buyItem.push(oldBuy[i])
        }
        localStorage.setItem('buy',JSON.stringify(this.buyItem))
      }
      // axios.post('https://chopshop-79753.firebaseio.com/0618.json',this.buyItem)
      //   .then(response => {
      //     console.log('success msg', response)

      //   }, error => {
      //     console.log('error msg', error)
      //   })
      
    }

  },
  mounted() {

  },
}
</script>

// <style lang="scss" scoped>
// .layout{
//   display: flex;
//   justify-content: center;
//   align-content: center;
// }
// .itemArea{
//   box-sizing: border-box;
//   margin-top: 5%;
//   width:90vw;
//   display: flex;
//   img{
//     width:50vw;
//     height:70vh;
//   }
//   @media only screen and (max-width: 768px) {
//     img{
//       width:50vw;
//       height:45vh;
//     }
//   }
//   @media only screen and (min-width: 320px) and (max-width: 425px) {
//     margin-top: 20%;
//     flex-direction: column;
//     width:100vw;
//     img{
//       width:100vw;
//       height: 45vh;
//     }
//   }
//   @media only screen and (max-width: 320px){
//       margin-top: 5%;
//       img{
//         width:100vw;
//         height: 35vh;
//       }
//     }
// }
// .itemArea-information{
//   display: flex;
//   box-sizing: border-box;
//   flex-direction: column;
//   padding:30px;
//   font-size: 20px;
//   letter-spacing:3px;
//   // outline: 2px solid;
// }
// .itemArea-information-1{
//   flex:6; 
//   display: flex;
//   flex-direction: column;
//   // outline: 2px solid;
//   justify-content: center;
//   div:nth-child(1){
//     font-size: 25px;
//   }
// }
// .itemArea-information-2{
//   flex:4;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   @media only screen and (min-width: 320px) and (max-width: 425px) {
//     margin-top: 5%;
//     img{
//       width:100vw;
//       height: 40vh;
//     }
//   }
//   button{
//     background:#2c3e50;
//     color: #ecf0f1;
//   }
//   button:hover{
//     background:#95a5a6;
//   }
// }
// .select-css{
//   width:100px;


// }
// </style>
