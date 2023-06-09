import api from '@axios'

const redirect = new CustomEvent('redirect', )

const useSaveToken = token => {
    let redirect
    if (token) {
        localStorage.setItem('authToken', token)
        redirect = '/'
    }
    else {
        localStorage.removeItem('authToken')
        redirect = '/login'
    }

    document.dispatchEvent(new CustomEvent('redirect', { detail: redirect }))

    api.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`
        return config
    })
}

export default useSaveToken