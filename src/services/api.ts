import axios from 'axios'

const api = axios.create({
  baseURL: 'http://34.66.97.14',
  headers: {
    'Api-Key': 'zKVWMjBIxCxAfs40OqIdqgNwsyCIyCLMhL90T3t1iNOOt2G6M5wfgiej5mZPAIw',
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
