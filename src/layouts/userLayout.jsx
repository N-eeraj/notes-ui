import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'

import Logo from '@components/logo'

import useRedirect from '@hooks/useRedirect'

import '@styles/layouts/user-form.css'

const UserLayout = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [logoPosition, setLogoPosition] = useState(null)

    useEffect(() => {
        setLogoPosition(location.pathname === '/register' ? 'left' : 'right' )
    })

    useRedirect()


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