import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'

import Logo from '@components/logo'

import '@styles/layouts/user-form.css'

const UserLayout = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [logoPosition, setLogoPosition] = useState(null)

    useEffect(() => {
        const authToken = localStorage.getItem('authToken')
        if (authToken)
            return navigate('/')
        setLogoPosition(location.pathname === '/register' ? 'left' : 'right' )
    })


    return (
        <main id='user_layout'>
            <div className={` logo ${logoPosition}`}>
                <Logo />
            </div>

            <Outlet />
        </main>
    )
}

export default UserLayout