export default {
  state: {
    currency: null
  },
  mutations: {
    setCurrency(state, currency) {
      state.currency = currency;
    }
  },
  actions: {
    async fetchCurrency({ commit }) {
      const response = await fetch(
        `http://data.fixer.io/api/latest?access_key=${process.env.VUE_APP_FIXER}&symbols=UAH,EUR,USD`
      );
      const currency = await response.json();
      commit("setCurrency", currency.rates);
    }
  },
  getters: {
    currency: state => state.currency
  }
};
