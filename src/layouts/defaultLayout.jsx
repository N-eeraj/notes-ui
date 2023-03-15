import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import Logo from '@components/logo'

import '@styles/layouts/default.css'

const DefaultLayout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const authToken = localStorage.getItem('authToken')
        if (!authToken)
            navigate('/login')
    })

    return (
        <main id='default_layout'>
            <nav>
                <Logo className='logo' />
                <button className='profile-icon' />
            </nav>
            <Outlet />
        </main>
    )
}

export default DefaultLayout