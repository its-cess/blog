import Vue from 'vue'
import Vuex from 'vuex'

import * as user from '@/store/modules/user'
import * as entries from '@/store/modules/entries'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    entries
  }
})