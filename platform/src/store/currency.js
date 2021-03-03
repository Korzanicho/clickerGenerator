export default {
  state: () => ({
    money: Infinity,
    moneyPerClick: 1,
    moneyPerSecond: 0,
  }),

  actions: {
    //
  },

  mutations: {
    updateMoney(state, money) {
      // eslint-disable-next-line
      state.money += money;
    },
    updateMoneyPerClick(state, money) {
      // eslint-disable-next-line
      state.moneyPerClick += money;
    },
    updateMoneyPerSecond(state, money) {
      // eslint-disable-next-line
      state.moneyPerSecond += money;
    },
  },

  getters: {
    money: (state) => state.money,
    moneyPerSecond: (state) => state.moneyPerSecond,
    moneyPerClick: (state) => state.moneyPerClick,
  },
};
