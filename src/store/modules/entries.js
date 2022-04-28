import EntryServices from "../../services/EntryServices"

export const namespaced = true

export const state = {
  entries: [],
  entry: {}
}

export const mutations = {
  SET_ENTRIES(state, response) {
    state.entries = response;
  },
  ADD_ENTRY(state, entry) {  
    state.entries.push(entry)
  },
  SET_ENTRY(state, entry) {
    state.entry = entry;
  },
}

export const actions = {
  fetchEntries({ commit }) {
    return EntryServices.getEntries() 
    .then(response => {
      commit('SET_ENTRIES', response.data.data) 
    })
  },
  createEntry({ commit }, entry) {
    return EntryServices.postEntry(entry)
    .then(() => {
      commit('ADD_ENTRY', entry)  
    })
  },
  fetchEntry({ commit }){
    return EntryServices.getEntry()
    .then(response => {
      commit('SET_ENTRY', response.data.data.attributes)
    })
  }
}


  // fetchEntry({ commit, getters }, id) {
  //   var entry = getters.getEntryById(id)
  //   if (entry) {
  //     commit('SET_ENTRY', entry)
  //   } else {
  //     EntryServices.getEntry(id)
  //       .then(response => {
  //         commit('SET_ENTRY', response.data)
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  // }
//   fetchEntry({ commit }) {
//     commit('SET_ENTRY')
// },

export const getters = {
  getEntries(state) {
    return state.entries
  },
  getEntry(state) {
    return state.entries.entry
  }

}
