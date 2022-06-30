export const namespaced = true

export const state = {
  // id: '1',
  // name: 'Cecily Toro',
  // location: 'United States',
  // birthday: 'July 23',
  // gender: 'Female',
  // interests: [],
  // memberSince: 'April 1, 2022'

  user: {}
}

export const mutations = {
  SET_USER(state, response) {
    state.user = response
  }
}

export const actions = {

}

export const getters = {
  getName:(state) => {
    return state.name
  }
}
