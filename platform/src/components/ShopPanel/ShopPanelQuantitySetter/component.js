export default {
  name: 'ShopPanelQuantitySetter',

  components: {
    //
  },

  props: {
    itemsQuantity: Number,
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
    //
  },

  methods: {
    changeActiveItem(element) {
      this.active = element;
      this.$emit('changeItemsQuantity', this.active);
    },
  },
};
