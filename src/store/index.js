import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: true
}

const getters = {
  isShow (state) {
    return state.isLogin
  }
}

const mutations = {
  show (state) {
    state.isLogin = true
  },
  hide (state) {
    state.isLogin = false
  }
}

const actions = {
  showLogin (context) {
    context.commit('hide')
  },
  hideLogin (context) {
    context.commit('show')
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
