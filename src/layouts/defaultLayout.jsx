import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

import Logo from '@components/logo'

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
                <Logo />
                Profile Icon
            </nav>
            <Outlet />
        </main>
    )
}

export default DefaultLayout