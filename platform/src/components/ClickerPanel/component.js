export default {
  name: 'ClickerPanel',
  
  props: {
    //
  },

  computed: {
    money: {
      get() {
        console.log(this.$store.getters.money);
        return this.$store.getters.money;
      },
      set(value) {
        this.$store.commit('updateMoney', value);
      },
    },
  },
}