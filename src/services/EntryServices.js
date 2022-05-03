import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:1337/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  postEntry(entry) {
    return apiClient.post('entries', entry)
  },
  getEntries() {
    return apiClient.get('entries')
  },
  deleteEntry(id) {
    return apiClient.delete('entries/' + id)
  }
}