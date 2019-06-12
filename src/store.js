import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogo:false,

  },
  mutations: {
    changeShowLogo(state){
      state.showLogo = true
    },

  },
  actions: {
    actionShowLogo(context){
      context.commit('hangeShowLogo')
    },

  }
})
