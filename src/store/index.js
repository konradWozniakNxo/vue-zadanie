import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  
  state: {
    list: []
  },

  mutations: {
    SET_LIST(state, list) {
      state.list = list
      },
  },

  actions: {
    getList({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
      commit('SET_LIST', response.data)
      })
      },
      
    getListDetails({ commit }, { id }) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
      commit('SET_LIST', response.data)
      })
      },
  },

  modules: {

  },

  getters:{
    
  }
 
})
