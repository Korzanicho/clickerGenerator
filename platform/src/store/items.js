export default {
  state: () => ([
    {
      name: 'Bootblack',
      slug: 'bootblack',
      count: 0,
      level: 1,
      image: 'beggar-image.png',
      type: 'perclick',
      isShowing: true,
      description() { return `Working as a bootblack, you get ${this.profit()} per click on your current level (${this.level})`; },
      cost() {
        return this.count * this.count * 25 * (this.profit() / this.level) + 30;
      },
      profit() { return 1 * this.level; },
    },
    {
      name: 'Beggar',
      slug: 'beggar',
      count: 0,
      level: 1,
      image: 'beggar-image.png',
      type: 'persecond',
      isShowing: false,
      description() {
        return `A  Beggar  will collect money for you. \n
      Profit on current level (${this.level}): ${this.profit()} per second`;
      },
      cost() {
        return this.count * this.count * 25 * (this.profit() / this.level) * 10 + 300;
      },
      profit() { return 1 * this.level; },
    },
    {
      name: 'Cleaner',
      slug: 'cleaner',
      count: 0,
      level: 1,
      image: 'beggar-image.png',
      type: 'perclick',
      isShowing: false,
      description() { return `Working as a cleaner, you get ${this.profit()} per click on your current level (${this.level})`; },
      cost() {
        return this.count * this.count * 25 * (this.profit() / this.level) + 1000;
      },
      profit() { return 3 * this.level; },
    },
    {
      name: 'Mechanic',
      slug: 'mechanic',
      count: 0,
      level: 1,
      image: 'beggar-image.png',
      type: 'persecond',
      isShowing: false,
      description() {
        return `Hire a mechanic who will earn you money. \n
        Profit on current level (${this.level}): ${this.profit()} per second`;
      },
      cost() {
        return this.count * this.count * 25 * (this.profit() / this.level) * 10 + 5000;
      },
      profit() { return 5 * this.level; },
    },
    {
      name: 'Car seller',
      slug: 'car-seller',
      count: 0,
      level: 1,
      image: 'beggar-image.png',
      type: 'perclick',
      isShowing: false,
      description() { return `Working as a car seller, you get ${this.profit()} per click on your current level (${this.level})`; },
      cost() {
        return this.count * this.count * 25 * (this.profit() / this.level) + 10000;
      },
      profit() { return 10 * this.level; },
    },
    {
      name: 'Car repair shop',
      slug: 'car-repair-shop',
      count: 0,
      level: 1,
      image: 'beggar-image.png',
      type: 'persecond',
      isShowing: false,
      description() {
        return `Build a car workshop, it will generate income. \n
        Profit on current level (${this.level}): ${this.profit()} per second`;
      },
      cost() {
        return this.count * this.count * 25 * (this.profit() / this.level) * 10 + 25000;
      },
      profit() { return 50 * this.level; },
    },
    {
      name: 'Small business director ',
      slug: 'small-business-director ',
      count: 0,
      level: 1,
      image: 'beggar-image.png',
      type: 'perclick',
      isShowing: false,
      description() { return `Working as a small business director, you get ${this.profit()} per click on your current level (${this.level})`; },
      cost() {
        return this.count * this.count * 25 * (this.profit() / this.level) + 45000;
      },
      profit() { return 200 * this.level; },
    },
    {
      name: 'Fastfood franchise',
      slug: 'fastfood-franchise',
      count: 0,
      level: 1,
      image: 'beggar-image.png',
      type: 'persecond',
      isShowing: false,
      description() {
        return `Fastfood franchise, will generate income. \n
        Profit on current level (${this.level}): ${this.profit()} per second`;
      },
      cost() {
        return this.count * this.count * 25 * (this.profit() / this.level) * 10 + 80000;
      },
      profit() { return 110 * this.level; },
    },
  ]),

  actions: {
    //
  },

  mutations: {
    updateItemLevel(state, itemSlug) {
      console.log(itemSlug);
      const item = state.find((currentItem) => currentItem.slug === itemSlug);
      const index = state.indexOf(item);
      // eslint-disable-next-line
      state[index].level += 1;
    },
    updateCount(state, payload) {
      const item = state.find((currentItem) => currentItem.name === payload.itemName);
      const index = state.indexOf(item);
      // eslint-disable-next-line
      state[index].count += payload.quantity;

      // eslint-disable-next-line
      if (state[index].count === 1 && state[index + 1]) state[index + 1].isShowing = true;

      if (state[index].type === 'persecond') {
        this.commit('updateMoneyPerSecond', state[index].profit());
      } else if (state[index].type === 'perclick') {
        this.commit('updateMoneyPerClick', state[index].profit());
      }
    },
  },

  getters: {
    items: (state) => state,
    itemCost: (state, itemName) => {
      const item = state.find((currentItem) => currentItem.name === itemName);
      return item.cost;
    },
  },
};
