export const namespaced = true

export const state = {
  id: '1',
  name: 'Cecily Toro',
  location: 'United States',
  birthday: 'July 23',
  gender: 'Female',
  interests: [],
  memberSince: 'April 1, 2022'
}

export const mutations = {

}

export const actions = {

}

export const getters = {
  getName:(state) => {
    return state.name
  }
}
