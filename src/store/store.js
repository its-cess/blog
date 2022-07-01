import Vue from "vue";
import Vuex from "vuex";

import * as entries from "@/store/modules/entries";
import * as authentication from "@/store/modules/authentication";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    entries,
    authentication
  }
});
