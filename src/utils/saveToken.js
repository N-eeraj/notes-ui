import api from '@axios'

const saveToken = token => {
    if (token)
        localStorage.setItem('authToken', token)
    else
        localStorage.removeItem('authToken')

    api.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`
        return config
    })
}

export default saveToken