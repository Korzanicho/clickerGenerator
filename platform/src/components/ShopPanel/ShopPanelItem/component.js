export default {
  name: 'ShopPanelItem',

  components: {
    // TheTooltip,
  },

  props: {
    item: Object,
    itemsQuantity: Number,
  },

  // data: {

  // },

  mounted() {
    //
  },

  computed: {
    cost: {
      get() {
        return this.$store.getters.items();
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
      if (this.item.cost(quantity) <= this.money) {
        this.$store.commit('updateMoney', -(this.item.cost(quantity)));
        this.$store.commit('updateCount', {
          quantity,
          itemName: this.item.name,
        });
      }
    },
  },
};
