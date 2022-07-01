import apiClient from "@/services/index.js";

export default {
  login(credentials) {
    return apiClient.post("auth/local", credentials);
  }
};
