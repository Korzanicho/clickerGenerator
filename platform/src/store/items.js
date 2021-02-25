export default {
  state: () => ([
    {
      name: 'Beggar',
      slug: 'beggar',
      count: 0,
      image: 'beggar-image.png',
      type: 'persecond',
      description() { return `A  Beggar  will collect money for you. \n
      Profit on current level (${this.level}): ${this.profit()} per second`},
      cost() { 
        return this.count*20*this.profit()+20; 
      },
      profit() { return 10*this.count },
    },
  ]),

  actions: {
		//
  },

  mutations: {
    updateCount(state, payload) {
      const item = state.find( item => item.name === payload.itemName);
      const index = state.indexOf(item);
      if (state[index].profit() > 0) this.commit('updateMoneyPerSecond', -state[index].profit());
      state[index].count = state[index].count + payload.quantity;
      this.commit('updateMoneyPerSecond', state[index].profit());
    },
  },

  getters: {
    items: (state) => {
      return state;
    },
    itemCost: (state, itemName) => {
      const item = state.find( item => item.name === itemName);
      return item.cost;
    }
  }
};