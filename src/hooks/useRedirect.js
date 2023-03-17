import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const useRedirect = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.addEventListener('redirect', ({ detail }) => {
            navigate(detail)
        })

        const authToken = localStorage.getItem('authToken')
        navigate(authToken ? '/' : '/login')

        return () => {
            window.removeEventListener('redirect', null)
        }
    }, [])
}

export default useRedirect