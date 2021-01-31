export default {
  name: 'ClickerPanel',
  
  props: {
    //
	},

	// data: {

	// },
	
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
	},
	
	methods: {
		updateMoneyEverySecond() {
			setInterval(() => {
				console.log(this.money);
				this.money = this.moneyPerSecond;
			}, 1000);
		}
	},
}