import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin:false,
    showMask:true,
    count:0
  },
  mutations: {
    changeshowLogin(state){
      state.showLogin = !state.showLogin
      state.showMask = true
    },
    changeshowMask(state){
        state.showMask = false    
    },
    updateCount(state){
      state.count += 1  
      console.log('store',state.count)
  },

  },
  actions: {
    actionShowLogin(context){
      context.commit('changeshowLogin')
    },
    actionShowMask(context){
      context.commit('changeshowMask')
    },
    actionUpdateCount(context){
      context.commit('updateCount')
    },

  }
})
