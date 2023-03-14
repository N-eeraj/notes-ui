import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api