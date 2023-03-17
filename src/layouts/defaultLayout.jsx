import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import Navbar from '@components/navbar'

import '@styles/layouts/navbar.css'

const DefaultLayout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const authToken = localStorage.getItem('authToken')
        if (!authToken)
            navigate('/login')
    })

    useEffect(() => {
        window.addEventListener('redirect', ({ detail }) => {
            navigate(detail)
        })
    
      return () => {
        window.removeEventListener('redirect', null)
      }
    }, [])

    return (
        <main id='default_layout'>
            <Navbar />

            <Outlet />
        </main>
    )
}

export default DefaultLayout