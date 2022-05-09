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
  DELETE_ENTRY(state, id) {
    state.entries.splice(id)
  }
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
  deleteEntry({commit}, id) {
    //working, but possibly need an if check?? to check if id is in entries array?
    //is yes, then commit delete entry? if id === entry(entries.id?).id??
    return EntryServices.deleteEntry(id)
    .then(() => {
      commit('DELETE_ENTRY', id)
    })
  }
}
 
  
export const getters = {
  getEntries(state) {
    return state.entries
  },
  // reverseEntries(state) {
  //   return state.entries.slice().reverse()
  // }
}
