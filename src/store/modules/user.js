import AuthenticationServices from "../../services/AuthenticationServices";

export const namespaced = true;

export const state = {
  user: {}
};

export const mutations = {
  SET_USER(state, response) {
    state.user = response;
  }
};

export const actions = {
  login({ commit }, user) {
    return AuthenticationServices.login(user)
      .then((response) => {
        commit("SET_USER", response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
};

export const getters = {
  getName: (state) => {
    return state.name;
  }
};
