import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const useRedirect = () => {
    const navigate = useNavigate()
    useEffect(() => {
        document.addEventListener('redirect', ({ detail }) => {
            navigate(detail)
        })

        const authToken = localStorage.getItem('authToken')
        navigate(authToken ? '/' : '/login')

        return () => {
            document.removeEventListener('redirect', null)
        }
    }, [])
}

export default useRedirect