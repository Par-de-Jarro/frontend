import axios from 'axios'

const token = localStorage.getItem('@ParDeJarro:token');

const api = axios.create({
  baseURL: 'http://18.117.169.137',
  headers: {
    'Api-Key': 'zKVWMjBIxCxAfs40OqIdqgNwsyCIyCLMhL90T3t1iNOOt2G6M5wfgiej5mZPAIw',
    'Authorization': `Bearer ${token}`, 
  }
})

export default api
