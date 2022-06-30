import apiClient from "@/services/index.js";

export default {
  login(user) {
    return apiClient.post("auth/local", user);
  }
};
