export default {
  name: 'ClickerPanel',
  
  props: {
    //
	},

	data() {
    return {
      //
    };
	},
	
	mounted() {
		this.updateMoneyEverySecond();
	},

  computed: {
    money: {
      get() {
        return this.$store.getters.money;
      },
      set(value) {
        this.$store.commit('updateMoney', value);
      },
    },
    moneyPerSecond: {
      get() {
        return this.$store.getters.moneyPerSecond;
      },
      set(value) {
        this.$store.commit('updateMoneyPerSecond', value);
      },
    },
    moneyPerClick: {
      get() {
        return this.$store.getters.moneyPerClick;
      },
      set(value) {
        this.$store.commit('updateMoneyPerClick', value);
      },
    },
	},
	
	methods: {
		updateMoneyEverySecond() {
			setInterval(() => {
				this.money = this.moneyPerSecond;
			}, 1000);
		},
	},
}