import EntryServices from "../../services/EntryServices"

export const namespaced = true

export const state = {
  entries: []
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
    }).catch(error => {
      console.log(error)
    })
  },
  // async fetchEntry({ commit }) {
  //   await EntryServices.getEntry()
  //   .then(response => {
  //     commit('SET_ENTRY', response.data.data)
  //   })
  // },
}
 
  
export const getters = {
  getEntries(state) {
    return state.entries
  },
  getEntry(state) {
    return state.entries.entry.id
  }
}
