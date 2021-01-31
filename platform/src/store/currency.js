export default {
  state: () => ({
    money: 0,
    moneyPerSecond: 10,
  }),

  actions: {
		//
  },

  mutations: {
    updateMoney(state, money) {
      state.money += money;
    },
    updateMoneyPerSecond(state, money) {
      state.moneyPerSecond += money;
    },
  },

  getters: {
    money: (state) => {
      return state.money;
    },
    moneyPerSecond: (state) => {
      return state.moneyPerSecond;
    },
  }
};