import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate"
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    showLogin:false,
    showMask:true,
    count:1,
    itemCount:0,
    showCount:0
  },
  mutations: {
    changeshowLogin(state){
      state.showLogin = !state.showLogin
      state.showMask = true
    },
    changeshowMask(state){
        state.showMask = false    
    },
    updateCount(state,value){
      state.itemCount = state.count + parseInt(value) -1
      state.showCount = state.showCount + state.itemCount
      state.count = 1
    },
    changeShowCount(state,value){
      state.showCount = state.showCount - parseInt(value)
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
