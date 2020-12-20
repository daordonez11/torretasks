import Vue from 'vue'
import Vuex from 'vuex'
import { SET_CANDIDATE_MUTATION, SET_JOB_MUTATION } from './mutation-types'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentJob: {},
    currentCandidate: {}
  },
  mutations: {
    [SET_JOB_MUTATION](state, payload){
      state.currentJob = payload.job;
    },
    [SET_CANDIDATE_MUTATION](state, payload){
      state.currentCandidate = payload.candidate;
    },
  },
  actions: {
  },
  modules: {
  }
})
