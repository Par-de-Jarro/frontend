import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.117.169.137',
});

export default api;