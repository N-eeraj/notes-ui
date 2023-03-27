import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const useRedirect = () => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        document.addEventListener('redirect', ({ detail }) => {
            navigate(detail)
        })

        const authToken = localStorage.getItem('authToken')

        if (['/login', '/register'].includes(location.pathname) && authToken)
            navigate('/')
        else if (!(authToken || ['/login', '/register'].includes(location.pathname)))
            navigate('/login')

        return () => {
            document.removeEventListener('redirect', null)
        }
    }, [])
}

export default useRedirect