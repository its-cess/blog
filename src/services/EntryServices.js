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
  //need to make this api endpoint dynamic (like example below... but how???)
  getEntry() {
    return apiClient.get('entries/1')
  }
  // getEntry(id) {
  //   return apiClient.get('entries/' + id)
  // }
}