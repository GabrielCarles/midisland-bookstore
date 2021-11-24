import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://openlibrary.org/",
});

const api = {
  books: {
    getBySubject(subject: string) {
      return apiClient.get(`subjects/${subject}.json?details=true`);
    },
    getByWork(work: string) {
      return apiClient.get(`works/${work}.json`);
    }
  }
}

export default api;
