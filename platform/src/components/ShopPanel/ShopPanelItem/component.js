export default {
  name: 'ShopPanelItem',
  
  components: {
    // TheTooltip,
  },

  props: {
    item: Object,
	},

	// data: {

	// },
	
	mounted() {
    //
	},

  computed: {
    cost: {
      get() {
        return this.$store.getters.items('Eloszka');
      },
    },
    money: {
      get() {
        return this.$store.getters.money;
      },
    },
	},
	
	methods: {
    handleBuyItem(quantity) {
      if (this.item.cost() <= this.money) {
        this.$store.commit('updateMoney', -this.item.cost());
        this.$store.commit('updateCount', {
          quantity, 
          itemName: this.item.name,
        });
      }
    }	},
}