export default {
  state: () => ({
    money: 0,
    moneyPerClick: 1,
    moneyPerSecond: 0,
  }),

  actions: {
		//
  },

  mutations: {
    updateMoney(state, money) {
      state.money += money;
    },
    updateMoneyPerClick(state, money) {
      state.moneyPerClick += money;
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
    moneyPerClick: (state) => {
      return state.moneyPerClick;
    },
  }
};