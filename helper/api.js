import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:8090/api/collections/anime/records',
    timeout: 2000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default api