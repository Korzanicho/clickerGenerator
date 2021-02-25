export default {
  state: () => ([
    {
      name: 'Bootblack',
      slug: 'bootblack',
      count: 0,
      level: 1,
      image: 'beggar-image.png',
      type: 'perclick',
      description() { return `Working as a bootblack, you get ${this.profit()} per click on your current level (${this.level})`},
      cost() { 
        return this.count*20*this.profit()+5; 
      },
      profit() { return 1*this.count },
    },
    {
      name: 'Beggar',
      slug: 'beggar',
      count: 0,
      level: 1,
      image: 'beggar-image.png',
      type: 'persecond',
      description() { return `A  Beggar  will collect money for you. \n
      Profit on current level (${this.level}): ${this.profit()} per second`},
      cost() { 
        return this.count*20*this.profit()+10; 
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
      state[index].count = state[index].count + payload.quantity;

      if (state[index].type === 'persecond') {
        console.log(state[index].profit() > 0);
        if (state[index].profit() > 0) this.commit('updateMoneyPerSecond', -state[index].profit());
        this.commit('updateMoneyPerSecond', state[index].profit());
      } else if (state[index].type === 'perclick') {
        this.commit('updateMoneyPerClick', state[index].profit());
      }
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
  },
};