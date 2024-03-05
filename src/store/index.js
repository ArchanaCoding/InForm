import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      formData: []
    };
  },
  mutations: {
    saveFormData(state, data) {
      state.formData.push(data);
    }
  },
  actions: {
    submitForm({ commit }, data) {
      commit('saveFormData', data);
    }
  },
  getters: {
    getAllFormData: state => state.formData
  }
});

export default store;




