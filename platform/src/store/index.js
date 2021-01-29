import { createStore } from "vuex";

import currency from "./currency.js";
console.log(createStore);
console.log(currency);
export default createStore({
  modules: {
    currency,
  }
});