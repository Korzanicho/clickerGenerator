import { createStore } from "vuex";

import items from "./items.js";
import currency from "./currency.js";

export default createStore({
  modules: {
    items,
    currency,
  }
});