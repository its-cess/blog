import AuthenticationServices from "../../services/AuthenticationServices";

export const namespaced = true;

export const state = {
  user: {},
  token: null
};

export const mutations = {
  UPDATE_USER(state, response) {
    state.user = response;
  },
  UPDATE_TOKEN(state, response) {
    state.token = response;
  }
};

export const actions = {
  login({ commit }, credentials) {
    return AuthenticationServices.login(credentials)
      .then((response) => {
        commit("UPDATE_USER", response.data.user);
        commit("UPDATE_TOKEN", response.data.jwt);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export const getters = {};
