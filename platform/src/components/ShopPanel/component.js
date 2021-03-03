import ShopPanelItem from './ShopPanelItem/index.vue';
import TheTooltip from '../reusable/TheTooltip/index.vue';
import ShopPanelUpgradeItem from './ShopPanelUpgradeItem/index.vue';

export default {
  name: 'ShopPanel',

  components: {
    TheTooltip,
    ShopPanelItem,
    ShopPanelUpgradeItem,
  },

  props: {
    //
  },

  data() {
    return {
      //
    };
  },

  mounted() {
    //
  },

  computed: {
    items: {
      get() {
        return this.$store.getters.items.filter((item) => item.isShowing === true);
      },
    },
    itemsToUpgrade: {
      get() {
        return this.$store.getters.items.filter((item) => {
          if (item.isShowing === true && item.level * 50 <= item.count) return true;
          return false;
        });
      },
    },
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
    handleUpgradeItem(itemSlug) {
      this.$store.commit('updateItemLevel', itemSlug);
    },
  },
};
