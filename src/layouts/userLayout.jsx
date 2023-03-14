import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import Logo from '@components/logo'

import '@styles/layouts/user-form.css'

const UserLayout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const authToken = localStorage.getItem('authToken')
        if (authToken)
            navigate('/')
    })

    return (
        <main id='user_layout'>
            <div className='logo'>
                <Logo />
            </div>

            <Outlet />
        </main>
    )
}

export default UserLayout