const state = {
   value: 0,
};

const mutations = {
   increment(state) {
      state.value++;
   },

   decrement(state) {
      state.value--;
   },

   reset(state) {
      state.value = 0;
   },

   setValue(state, value) {
      state.value = value;
   },
};

const actions = {
   increment({ commit }) {
      commit('increment');
   },

   decrement({ commit }) {
      commit('decrement');
   },

   reset({ commit }) {
      commit('reset');
   },

   setValue({ commit }, value) {
      commit('setValue', value);
   },
};

export default {
   namespaced: true,
   state,
   mutations,
   actions,
};
