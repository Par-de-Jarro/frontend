import axios from 'axios'

const api = axios.create({
  baseURL: 'http://35.234.251.122/',
  headers: {
    'Api-Key': 'AIzaSyB7rlzY2_8YqcddZFwo-iULviy0KhniGcg',
  }
})


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('@ParDeJarro:token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }
);

export default api
