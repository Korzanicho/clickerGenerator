import ShopPanelItem from './ShopPanelItem/index';
import TheTooltip from '@/components/reusable/TheTooltip/index.vue'

export default {
  name: 'ShopPanel',
  
  components: {
    TheTooltip,
    ShopPanelItem,
  },

  props: {
    //
	},

	data() {
    return {
      //
    }
	},
	
	mounted() {
		//
	},

  computed: {
    items: {
      get() {
        return this.$store.getters.items;
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
    //
	},
}