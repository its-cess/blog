import apiClient from "@/services/index.js";

export default {
  postEntry(entry) {
    return apiClient.post("entries", entry);
  },
  getEntries() {
    return apiClient.get("entries");
  },
  deleteEntry(id) {
    return apiClient.delete("entries/" + id);
  }
};
