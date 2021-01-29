export default {
  state: () => ({
    money: 0,
  }),

  actions: {
		//
  },

  mutations: {
    updateMoney(state, money) {
      state.money += money;
    },
  },

  getters: {
    money: (state) => {
      return state.money;
    },
  }
};