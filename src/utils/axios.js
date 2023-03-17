import axios from 'axios'

import saveToken from '@utils/saveToken'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${(localStorage.authToken || '')}`
    }
})

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401)
            saveToken(null)

        return Promise.reject(error)
    }
)

export default api