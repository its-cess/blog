import apiClient from "@/services/index.js";

export default {
  postEntry(entry) {
    return apiClient.post("entries", entry);
  },
  getEntries() {
    return apiClient.get("entries");
  },
  getEntry(id) {
    return apiClient.get("entries/" + id);
  },
  deleteEntry(id) {
    return apiClient.delete("entries/" + id);
  },
  editEntry(id) {
    return apiClient.put("entries/" + id);
  }
};
