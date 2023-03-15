import api from '@axios'

const saveToken = async token => {
    localStorage.setItem('authToken', token)
    await api.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${token}`
        return config
    })
}

export default saveToken