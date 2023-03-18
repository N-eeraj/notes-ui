import { useState } from 'react'
import { Outlet } from 'react-router'

import Navbar from '@components/navbar'
import ChangePassword from '@components/changePassword'

import useRedirect from '@hooks/useRedirect'

import '@styles/layouts/navbar.css'

const DefaultLayout = () => {
    const [showPassword, setShowPassword] = useState(false)

    useRedirect()

    const handleChangePassword = () => setShowPassword(true)

    const hasAuthToken = localStorage.authToken

    if (hasAuthToken) {
        return (
            <main id='default_layout'>
                <Navbar changePasswordEvent={ handleChangePassword } />

                <Outlet />

                { showPassword && <ChangePassword /> }
            </main>
        )
    }
}

export default DefaultLayout