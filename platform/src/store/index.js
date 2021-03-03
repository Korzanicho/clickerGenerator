import { createStore } from 'vuex';

import items from './items';
import currency from './currency';

export default createStore({
  modules: {
    items,
    currency,
  },
});
