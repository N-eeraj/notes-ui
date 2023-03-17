import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import Navbar from '@components/navbar'

import useRedirect from '@utils/useRedirect'

import '@styles/layouts/navbar.css'

const DefaultLayout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const authToken = localStorage.getItem('authToken')
        if (!authToken)
            navigate('/login')
    })

    useRedirect()

    return (
        <main id='default_layout'>
            <Navbar />

            <Outlet />
        </main>
    )
}

export default DefaultLayout